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
    private _viewSize: cc.Size
    public get viewSize(): cc.Size {
        if (!this._viewSize) {
            this._viewSize = this.scrollView.view.getContentSize()
        }
        return this._viewSize
    }
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
    public get headerBoundaryX() {
        return this.node.x + this.header.x - this.header.anchorX * this.header.width
    }
    public get headerBoundaryY() {
        return this.node.y + this.header.y + (1 - this.header.anchorY) * this.header.height
    }
    public get footerBoundaryX() {
        return this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.footer.width
    }
    public get footerBoundaryY() {
        return this.node.y + this.footer.y - this.footer.anchorY * this.footer.height
    }
    // 重写
    public getContentSize() {
        let size = this.getReallySize()
        let viewSize = this.scrollView.view.getContentSize()
        if (size.height < viewSize.height) {
            size.height = viewSize.height
        }
        if (size.width < viewSize.width) {
            size.width = viewSize.width
        }
        return size
    }
    public getReallySize() {
        if (this.node.childrenCount == 0) {
            return this.viewSize
        }
        let size = cc.Size.ZERO
        size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight
        size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom
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
        this.scrollView.stopAutoScroll()
        this.scrollView.release()
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
        this.scrollView.reset()
    }
    public isOutOfBoundaryHeader(node: cc.Node) {
        let width = node.width * this.getUsedScaleValue(node.scaleX) * 2
        let height = -node.height * this.getUsedScaleValue(node.scaleY) * 2
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }
    public isOutOfBoundaryFooter(node: cc.Node) {
        let width = -node.width * this.getUsedScaleValue(node.scaleX) * 2
        let height = node.height * this.getUsedScaleValue(node.scaleY) * 2
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }

    private scrollToTop(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.VERTICAL) return
        this.refreshHeader()
        this.scrollView.deltaMove = cc.v2(0, -1)
        this.scrollView.scrollToTop(timeInSecond, attenuated)
    }
    private scrollToBottom(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.VERTICAL) return
        this.refreshFooter()
        this.scrollView.deltaMove = cc.v2(0, 1)
        this.scrollView.scrollToBottom(timeInSecond, attenuated)
    }
    private scrollToLeft(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.HORIZONTAL) return
        this.refreshHeader()
        this.scrollView.deltaMove = cc.v2(1, 0)
        this.scrollView.scrollToLeft(timeInSecond, attenuated)
    }
    private scrollToRight(timeInSecond?: number, attenuated?: boolean) {
        if (this.startAxis != UISuperAxis.HORIZONTAL) return
        this.refreshFooter()
        this.scrollView.deltaMove = cc.v2(-1, 0)
        this.scrollView.scrollToRight(timeInSecond, attenuated)
    }
    private refreshHeader() {
        this.scrollView.stopAutoScroll()
        for (let i = 0; i < this.node.children.length; i++) {
            const child = this.node.children[i];
            child['index'] = i
            this.refreshItem(child, i)
        }
    }
    private refreshFooter() {
        this.scrollView.stopAutoScroll()
        let index = this.maxItemTotal
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
                script.init(this, this.refreshItem.bind(this))
                this.node.addChild(child)
                if (i == 0) this.setHeaderStartPos()
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
    public setHeaderStartPos() {
        if (!this.header) return
        let pos = cc.Vec2.ZERO
        pos.y = (1 - this.header.anchorY) * -this.header.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height
        pos.x = this.header.anchorX * this.header.width + this.paddingLeft - this.node.anchorX * this.viewSize.width
        this.header.setPosition(pos)
    }
}
