import UISpuerScrollView from './UISuperScrollView';
import UISpuerItem from './UISuperItem';
const { ccclass, property } = cc._decorator;
export enum UISuperAxis {
    HORIZONTAL = 0,
    VERTICAL = 1
}
@ccclass
export default class UISuperLayout extends cc.Component {
    @property({
        type: cc.Enum(UISuperAxis),
        displayName: "排列方向"
    }) startAxis: UISuperAxis = UISuperAxis.VERTICAL
    @property({
        displayName: "上边距"
    }) paddingTop: number = 0
    @property({
        displayName: "下边距"
    }) paddingBottom: number = 0
    @property({
        displayName: "左边距"
    }) paddingLeft: number = 0
    @property({
        displayName: "右边距"
    }) paddingRight: number = 0
    @property({
        displayName: "间隔"
    }) spacing: cc.Vec2 = cc.Vec2.ZERO
    @property({
        displayName: "可复用的Item数"
    }) maxPrefabTotal: number = 20
    @property({
        type: cc.Prefab,
        displayName: "item Prefab"
    }) prefab: cc.Prefab = null

    @property affectedByScale: boolean = true
    @property({
        displayName: "使用item子节点包围盒"
    }) childBoundingBox: boolean = false

    @property(cc.Component.EventHandler) refreshItemEvents: cc.Component.EventHandler[] = []

    public maxItemTotal: number = 0

    private _scrollView: UISpuerScrollView = null
    public get scrollView(): UISpuerScrollView {
        if (!this._scrollView) {
            this._scrollView = this.node.parent.parent.getComponent(UISpuerScrollView)
        }
        return this._scrollView
    }

    public get header(): cc.Node {
        return this.node.children[0]
    }

    public get footer(): cc.Node {
        return this.node.children[this.node.childrenCount - 1]
    }
    // 重写
    public getContentSize() {
        if (!this.header || !this.footer) return this.scrollView.view.getContentSize()
        let size = cc.Size.ZERO
        let _header, _footer
        if (this.childBoundingBox) {
            // 该边框包含自身和已激活的子节点的世界边框 (注意！使用此方法时 底层代码会遍历所有子节点 并包含所有子节点的世界边框 子节点越多性能越差)
            _header = this.node.convertToWorldSpaceAR(cc.v2(this.header.getBoundingBoxToWorld().xMin, this.header.getBoundingBoxToWorld().yMax))
            _footer = this.node.convertToWorldSpaceAR(cc.v2(this.footer.getBoundingBoxToWorld().xMax, this.footer.getBoundingBoxToWorld().yMin))
        } else {
            // 该边框包含自身的世界边框 (这里主要是修改getBoundingBoxToWorld代码 去掉遍历子节点的代码)
            // 这里只需要计算item本身的世界边框即可 (性能最优)
            _header = this.node.convertToWorldSpaceAR(cc.v2(this.header['getBounding']().xMin, this.header['getBounding']().yMax))
            _footer = this.node.convertToWorldSpaceAR(cc.v2(this.footer['getBounding']().xMax, this.footer['getBounding']().yMin))
        }
        size.width = _footer.x - _header.x + this.paddingLeft + this.paddingRight
        size.height = _header.y - _footer.y + this.paddingTop + this.paddingBottom
        return size
    }

    onLoad() {
        this.node.getContentSize = this.getContentSize.bind(this)
    }
    public getUsedScaleValue(value: number) {
        return this.affectedByScale ? Math.abs(value) : 1;
    }
    /** 设置最大item数量 */
    public total(value: number): this {
        this.maxItemTotal = value
        this.moreRemLessAdd()
        let offset = 0
        if (this.footer && this.footer['index'] + 1 >= this.maxItemTotal) {
            offset = this.footer['index'] + 1 - this.maxItemTotal
        }
        for (let i = 0; i < this.node.children.length; i++) {
            const child = this.node.children[i];
            let index = child['index'] - offset
            child['index'] = index
            this.refreshItem(child, child['index'])
        }
        this.scrollView.calculateBoundary()
        return this
    }
    /** 滚动到头部 */
    public scrollToHeader(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis == UISuperAxis.VERTICAL) {
            this.scrollToTop(timeInSecond, attenuated)
        } else {
            this.scrollToLeft(timeInSecond, attenuated)
        }
    }
    /** 滚动到尾部 */
    public scrollToFooter(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis == UISuperAxis.VERTICAL) {
            this.scrollToBottom(timeInSecond, attenuated)
        } else {
            this.scrollToRight(timeInSecond, attenuated)
        }
    }
    public resetScrollView() {
        this.scrollView.autoScrolling = true
    }
    private scrollToTop(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.VERTICAL) return
        this.refreshStart()
        this.scrollView.deltaMove = cc.v2(0, -1)
        this.scrollView.scrollToTop(timeInSecond, attenuated)
    }
    private scrollToBottom(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.VERTICAL) return
        this.refreshEnd()
        this.scrollView.deltaMove = cc.v2(0, 1)
        /**
         * item尺寸不一致时 item会在当前帧重置位置 然后在下一帧滚动计算 (这里具体延迟多少帧不确定，因为也许item更新尺寸是异步的，这里不去考虑)
         * 默认只是认为当前帧会更新完所有item尺寸
         */
        this.scheduleOnce(() => this.scrollView.scrollToBottom(timeInSecond, attenuated))
    }
    private scrollToLeft(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.HORIZONTAL) return
        this.refreshStart()
        this.scrollView.deltaMove = cc.v2(1, 0)
        this.scrollView.scrollToLeft(timeInSecond, attenuated)
    }
    private scrollToRight(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.HORIZONTAL) return
        this.refreshEnd()
        this.scrollView.deltaMove = cc.v2(-1, 0)
        /**
         * item尺寸不一致时 item会在当前帧重置位置 然后在下一帧滚动计算 (这里具体延迟多少帧不确定，因为也许item更新尺寸是异步的，这里不去考虑)
         * 默认只是认为当前帧会更新完所有item尺寸
         */
        this.scheduleOnce(() => this.scrollView.scrollToRight(timeInSecond, attenuated))
    }
    private refreshStart() {
        this.scrollView.stopAutoScroll()
        for (let i = 0; i < this.node.children.length; i++) {
            const child = this.node.children[i];
            child['index'] = i
            this.refreshItem(child, i)
        }
    }
    private refreshEnd() {
        this.scrollView.stopAutoScroll()
        let index = this.maxItemTotal
        // 上监听下
        for (let i = this.node.childrenCount - 1; i >= 0; i--) {
            var child = this.node.children[i]
            child['index'] = --index
            this.refreshItem(child, index)
        }
    }
    private moreRemLessAdd() {
        // 不够的情况下
        let index = this.node.childrenCount
        for (let i = index; i < this.maxItemTotal; i++) {
            if (i >= this.maxPrefabTotal) break
            if (!this.node.children[i]) {
                let child = cc.instantiate(this.prefab)
                child['index'] = i
                let script = child.getComponent(UISpuerItem) || child.addComponent(UISpuerItem)
                // 将这三个方法以回调的方式传递过去 (对外不公开调用)
                script.init(this, this.refreshItem.bind(this), this.isOutOfBoundaryTop.bind(this), this.isOutOfBoundaryBottom.bind(this))
                this.node.addChild(child)
            }
        }
        // 多余的情况下
        if (this.node.childrenCount > this.maxItemTotal) {
            var total = this.node.childrenCount - this.maxItemTotal
            for (let i = 0; i < total; i++) {
                var child = this.footer
                child.destroy()
                this.node.removeChild(child)
            }
        }
    }
    private refreshItem(target: cc.Node, index: number) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, index)
    }
    private isOutOfBoundaryTop(node: cc.Node) {
        let width = node.width * this.getUsedScaleValue(node.scaleX) * 2
        let height = -node.height * this.getUsedScaleValue(node.scaleY) * 2
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }
    private isOutOfBoundaryBottom(node: cc.Node) {
        let width = -node.width * this.getUsedScaleValue(node.scaleX) * 2
        let height = node.height * this.getUsedScaleValue(node.scaleY) * 2
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }
}
