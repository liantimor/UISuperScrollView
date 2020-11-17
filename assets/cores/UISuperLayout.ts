import UISpuerScrollView from './UISuperScrollView';
import UISpuerItem from './UISuperItem';
const { ccclass, property, menu } = cc._decorator;
const EPSILON = 1e-4;
export const UIChangeBrotherEvnet = "UIChangeBrotherEvnet"
export enum UISuperAxis {
    HORIZONTAL = 0,
    VERTICAL = 1
}
export enum UISuperDirection {
    HEADER_TO_FOOTER = 0,
    FOOTER_TO_HEADER = 1,
}
@ccclass
@menu("UISuperLayout")
export default class UISuperLayout extends cc.Component {
    @property({ type: cc.Enum(UISuperAxis), displayName: "排列方向" }) startAxis: UISuperAxis = UISuperAxis.VERTICAL
    @property({ type: cc.Enum(UISuperDirection), displayName: "排列子节点的方向" }) direction: UISuperDirection = UISuperDirection.HEADER_TO_FOOTER
    @property({ displayName: "上边距" }) paddingTop: number = 0
    @property({ displayName: "下边距" }) paddingBottom: number = 0
    @property({ displayName: "左边距" }) paddingLeft: number = 0
    @property({ displayName: "右边距" }) paddingRight: number = 0
    @property({ displayName: "间隔" }) spacing: cc.Vec2 = cc.Vec2.ZERO
    @property({ displayName: "每组item个数", tooltip: "单行的列数 或 单列的行数" }) column: number = 2
    @property({ displayName: "item创建倍率", tooltip: "相对于view的尺寸 默认2倍" }) multiple: number = 2
    @property({ type: cc.Prefab, displayName: "item Prefab" }) prefab: cc.Prefab = null
    @property({ displayName: "头部滑动循环" }) headerLoop: boolean = false
    @property({ displayName: "尾部滑动循环" }) footerLoop: boolean = false
    @property affectedByScale: boolean = true
    @property(cc.Component.EventHandler) refreshItemEvents: cc.Component.EventHandler[] = []
    private _gener: Generator
    private _isinited: boolean = false
    private _maxPrefabTotal: number = 0
    private _children: cc.Node[] = [] //和this.node.children 保持同步
    private _viewSize: cc.Size
    private _scrollView: UISpuerScrollView = null
    private _maxItemTotal: number = 0
    private _prevLayoutPosition: cc.Vec2 = cc.Vec2.ZERO
    public scrollToHeaderOrFooter: boolean = false
    private get layoutDirection(): cc.Vec2 {
        let pos = cc.Vec2.ZERO
        if (this.vertical) {
            pos.y = this.node.y - this._prevLayoutPosition.y
        } else {
            pos.x = this.node.x - this._prevLayoutPosition.x
        }
        this._prevLayoutPosition = this.node.getPosition()
        return pos
    }
    private get isScrollToFooter(): boolean {
        if (this.vertical) {
            return this.layoutDirection.y < 0
        } else {
            return this.layoutDirection.x > 0
        }
    }
    public get children() { return this._children }
    public get maxItemTotal() { return this._maxItemTotal }
    public get maxPrefabTotal() { return this._maxPrefabTotal }
    public get viewSize(): cc.Size {
        if (!this._viewSize) this._viewSize = this.scrollView.view.getContentSize()
        return this._viewSize
    }
    public get vertical(): boolean {
        return this.startAxis == UISuperAxis.VERTICAL
    }
    public get horizontal(): boolean {
        return this.startAxis == UISuperAxis.HORIZONTAL
    }
    public get headerToFooter(): boolean {
        return this.direction == UISuperDirection.HEADER_TO_FOOTER
    }
    public get footerToHeader(): boolean {
        return this.direction == UISuperDirection.FOOTER_TO_HEADER
    }
    public get spacingWidth() {
        return this.spacing.x * (this.column - 1)
    }
    public get spacingHeight() {
        return this.spacing.y * (this.column - 1)
    }
    public get accommodWidth() {
        return this.viewSize.width - this.paddingLeft - this.paddingRight
    }
    public get accommodHeight() {
        return this.viewSize.height - this.paddingTop - this.paddingBottom
    }
    public get scrollView(): UISpuerScrollView {
        if (!this._scrollView) this._scrollView = this.node.parent.parent.getComponent(UISpuerScrollView)
        return this._scrollView
    }

    public get header(): cc.Node {
        return this._children[0]
    }
    public get footer(): cc.Node {
        return this._children[this._children.length - 1]
    }
    public get topBoundary() {
        if (this.headerToFooter) {
            return this.headerBoundaryY + this.paddingTop
        } else {
            return this.footerBoundaryY + this.paddingTop
        }
    }
    public get bottomBoundary() {
        if (this.headerToFooter) {
            return this.footerBoundaryY - this.paddingBottom
        } else {
            return this.headerBoundaryY - this.paddingBottom
        }
    }
    public get leftBoundary() {
        if (this.headerToFooter) {
            return this.headerBoundaryX - this.paddingLeft
        } else {
            return this.footerBoundaryX - this.paddingLeft
        }
    }
    public get rightBoundary() {
        if (this.headerToFooter) {
            return this.footerBoundaryX + this.paddingRight
        } else {
            return this.headerBoundaryX + this.paddingRight
        }
    }
    public get headerBoundaryX() {
        if (this.headerToFooter) {
            return this.node.x + this.header.x - this.header.anchorX * this.getScaleWidth(this.header)
        } else {
            return this.node.x + this.header.x + (1 - this.header.anchorX) * this.getScaleWidth(this.header)
        }
    }
    public get headerBoundaryY() {
        if (this.headerToFooter) {
            return this.node.y + this.header.y + (1 - this.header.anchorY) * this.getScaleHeight(this.header)
        } else {
            return this.node.y + this.header.y - this.header.anchorY * this.getScaleHeight(this.header)
        }
    }
    public get footerBoundaryX() {
        if (this.headerToFooter) {
            return this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.getScaleWidth(this.footer)
        } else {
            return this.node.x + this.footer.x - this.footer.anchorX * this.getScaleWidth(this.footer)
        }
    }
    public get footerBoundaryY() {
        if (this.headerToFooter) {
            return this.node.y + this.footer.y - this.footer.anchorY * this.getScaleHeight(this.footer)
        } else {
            return this.node.y + this.footer.y + (1 - this.footer.anchorY) * this.getScaleHeight(this.footer)
        }
    }
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
        if (this.node.childrenCount == 0) return this.viewSize
        let size = cc.Size.ZERO
        if (this.headerToFooter) {
            size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight
            size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom
        } else {
            size.width = this.headerBoundaryX + -this.footerBoundaryX + this.paddingLeft + this.paddingRight
            size.height = this.footerBoundaryY + -this.headerBoundaryY + this.paddingTop + this.paddingBottom
        }
        return size
    }

    /** 重置scrollview */
    public resetScrollView() {
        this.scrollView.reset()
    }
    public getUsedScaleValue(value: number) {
        return this.affectedByScale ? Math.abs(value) : 1
    }
    /** 设置最大item数量 */
    public async total(value: number) {
        this.scrollView.stopAutoScroll()
        this.scrollView.release()
        // 初始化
        this.initlized()
        // 创建item
        await this.asyncCreateItem(value)
        let dataOffset = this.getDataOffset(value)
        let reallyOffset = this.getReallyOffset(dataOffset)
        this.refreshItems(value, reallyOffset)
        this._maxItemTotal = value
    }
    /** 获取兄弟节点 */
    public getBrotherNode(node: cc.Node) {
        let index = this.getSiblingIndex(node) - 1
        return this._children[index]
    }
    /** 是否是一组item中第一个 */
    public isGroupHeader(node: cc.Node): boolean {
        let xOry = this.getGroupHeader(node)
        let pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y)
        let self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y)
        return self.fuzzyEquals(pos, EPSILON)
    }
    /** 是否是一组item中最后一个 */
    public isGroupFooter(node: cc.Node): boolean {
        let xOry = this.getGroupFooter(node)
        let pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y)
        let self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y)
        return self.fuzzyEquals(pos, EPSILON)
    }
    /** 获取一组item中起始位置 */
    public getGroupHeader(node: cc.Node): cc.Vec2 {
        let pos = cc.Vec2.ZERO
        if (node) {
            if (this.vertical) {
                if (this.headerToFooter) {
                    pos.x = node.anchorX * this.getScaleWidth(node) + (this.paddingLeft * node.scaleX) - (this.node.anchorX * this.viewSize.width * node.scaleX)
                    pos.y = (1 - node.anchorY) * -this.getScaleHeight(node) - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height
                } else {
                    pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width
                    pos.y = node.anchorY * this.getScaleHeight(node) + this.paddingBottom - this.node.anchorY * this.viewSize.height
                }
            } else {
                if (this.headerToFooter) {
                    pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width
                    pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height
                } else {
                    pos.x = this.accommodWidth * this.node.anchorX - this.getScaleWidth(node) * (1 - node.anchorX)
                    pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height
                }
            }
        }
        return pos
    }
    /** 获取一组item中结束位置 */
    public getGroupFooter(node: cc.Node): cc.Vec2 {
        let pos = cc.Vec2.ZERO
        if (node) {
            if (this.vertical) {
                pos.x = (this.accommodWidth + this.paddingLeft) * this.node.anchorX - (this.getScaleWidth(node) * (1 - node.anchorX) + this.node.anchorX * this.paddingRight)
                pos.y = node.y
            } else {
                pos.x = node.x
                pos.y = -((this.accommodHeight + this.paddingTop) * this.node.anchorY - this.getScaleHeight(node) * node.anchorY) + (1 - node.anchorY) * this.paddingBottom
            }
        }
        return pos
    }
    /** 获取一组item中 node 相对 relative 右偏移量 */
    public getGroupRightX(node: cc.Node, relative: cc.Node) {
        if (!node || !relative) return this.getGroupHeader(node).x
        let prevWidth = relative.x + this.getScaleWidth(relative) * (1 - relative.anchorX)
        let selfWidth = this.getScaleWidth(node) * node.anchorX
        return prevWidth + selfWidth + this.spacing.x
    }
    /** 获取一组item中 node 相对 relative 左偏移量 */
    public getGroupLeftX(node: cc.Node, relative: cc.Node) {
        if (!node || !relative) return this.getGroupFooter(node).x
        let prevWidth = relative.x - this.getScaleWidth(relative) * relative.anchorX
        let selfWidth = this.getScaleWidth(node) * (1 - node.anchorX)
        return prevWidth - selfWidth - this.spacing.x
    }
    /** 获取一组item中 node 相对 relative 下偏移量 */
    public getGroupBottomY(node: cc.Node, relative: cc.Node) {
        let prevHeight = relative.y - this.getScaleHeight(relative) * relative.anchorY
        let selfHeight = this.getScaleHeight(node) * (1 - node.anchorY)
        return prevHeight - selfHeight - this.spacing.y
    }
    /** 获取一组item中 node 相对 relative 上偏移量 */
    public getGroupTopY(node: cc.Node, relative: cc.Node) {
        let prevHeight = relative.y + this.getScaleHeight(relative) * (1 - relative.anchorY)
        let selfHeight = this.getScaleHeight(node) * node.anchorY
        return prevHeight + selfHeight + this.spacing.y
    }
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了头部边框 */
    public isOutOfBoundaryHeader(node: cc.Node, multiple: number = 1.5) {
        let width = node.width * this.getUsedScaleValue(node.scaleX) * multiple
        let height = -node.height * this.getUsedScaleValue(node.scaleY) * multiple
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了尾部部边框 */
    public isOutOfBoundaryFooter(node: cc.Node, multiple: number = 1.5) {
        let width = -node.width * this.getUsedScaleValue(node.scaleX) * multiple
        let height = node.height * this.getUsedScaleValue(node.scaleY) * multiple
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }
    /** 滚动到头部 */
    public scrollToHeader(timeInSecond?: number, attenuated?: boolean) {
        this.scrollToHeaderOrFooter = timeInSecond > 0
        this.scrollView.stopAutoScroll()
        this.resetToHeader()
        if (this.headerToFooter) {
            if (this.vertical) {
                this.scrollView.scrollToTop(timeInSecond, attenuated)
            } else {
                this.scrollView.scrollToLeft(timeInSecond, attenuated)
            }
        } else {
            if (this.vertical) {
                this.scrollView.scrollToBottom(timeInSecond, attenuated)
            } else {
                this.scrollView.scrollToRight(timeInSecond, attenuated)
            }
        }
    }
    /** 滚动到尾部 */
    public scrollToFooter(timeInSecond?: number, attenuated?: boolean) {
        this.scrollToHeaderOrFooter = timeInSecond > 0
        this.scrollView.stopAutoScroll()
        this.resetToFooter()
        if (this.headerToFooter) {
            if (this.vertical) {
                this.scrollView.scrollToBottom(timeInSecond, attenuated)
            } else {
                this.scrollView.scrollToRight(timeInSecond, attenuated)
            }
        } else {
            if (this.vertical) {
                this.scrollView.scrollToTop(timeInSecond, attenuated)
            } else {
                this.scrollView.scrollToLeft(timeInSecond, attenuated)
            }
        }
    }
    /** 通知给定的node刷新数据 */
    public notifyRefreshItem(target: cc.Node) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, target['index'])
    }
    /** 获取节点索引 */
    public getSiblingIndex(node: cc.Node) {
        return this._children.indexOf(node)
    }
    /** 自定义索引方法 引擎的方法有延迟 */
    public setSiblingIndex(node: cc.Node, index: number) {
        index = index !== -1 ? index : this._children.length - 1
        var oldIndex = this._children.indexOf(node)
        if (index !== oldIndex) {
            this._children.splice(oldIndex, 1)
            if (index < this._children.length) {
                this._children.splice(index, 0, node)
            }
            else {
                this._children.push(node)
            }
            this.node.emit(UIChangeBrotherEvnet)
        }
    }
    onLoad() {
        this.initlized()
    }
    /** 初始化 */
    private initlized() {
        if (this._isinited) return
        this.node.anchorX = 0.5
        this.node.anchorY = 0.5
        this.node.setContentSize(this.viewSize)
        this.node.getContentSize = this.getContentSize.bind(this)
        this.node.setPosition(cc.Vec2.ZERO)
        this.column = this.column < 1 ? 1 : this.column
        this.node.on(cc.Node.EventType.POSITION_CHANGED, () => {
            let flag = this.isScrollToFooter
            if (this.headerToFooter) {
                flag ? this.footerToHeaderWatchChilds(flag) : this.headerToFooterWatchChilds(flag)
            } else {
                flag ? this.headerToFooterWatchChilds(flag) : this.footerToHeaderWatchChilds(flag)
            }
            if (this.vertical && 0 == this.node.y || this.horizontal && 0 == this.node.x) {
                this.header.setPosition(this.getGroupHeader(this.header))
                cc.error("充值了哦 归为")
            }
        }, this)
        this._isinited = true
    }
    /** 获取缩放宽度 */
    private getScaleWidth(node: cc.Node): number {
        return node.width * this.getUsedScaleValue(node.scaleX)
    }
    /** 获取缩放高度 */
    private getScaleHeight(node: cc.Node): number {
        return node.height * this.getUsedScaleValue(node.scaleY)
    }
    /** 简单的浅拷贝 */
    private getTempChildren() {
        let list = []
        for (let i = 0; i < this._children.length; i++) {
            const child = this._children[i];
            list.push(child)
        }
        return list
    }
    /** 正序更新item */
    private headerToFooterWatchChilds(flag) {
        let children = this.getTempChildren()
        for (let i = 0; i < children.length; i++) {
            const child = children[i];
            child['watchSelf'](flag)
        }
    }
    /** 倒序更新item */
    private footerToHeaderWatchChilds(flag) {
        let children = this.getTempChildren()
        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            child['watchSelf'](flag)
        }
    }
    /** 当数据增加、减少时 获取数据偏移 */
    private getDataOffset(value: number) {
        // 返回删除数据偏移
        if (this.footer && this.footer['index'] + 1 >= value) {
            let offset = this.footer['index'] + 1 - value
            return offset == 0 ? 0 : -offset
        }
        // 返回增加数据偏移
        if (this._maxItemTotal == 0 || value < this._maxItemTotal || this._maxItemTotal < this._maxPrefabTotal) return 0
        if (this.isGroupFooter(this.footer)) return 0
        return value - this._maxItemTotal
    }
    /** 当数据增加、减少时 获取节点偏移量 */
    private getReallyOffset(dataOffset: number) {
        if (!this.header) return 0
        if (dataOffset > 0) { // 代表增加item 表格模式下 通过偏移头部来让下方填满 填满后停止偏移
            for (let i = 0; i < dataOffset; i++) {
                if (this.isGroupFooter(this.footer)) return i //返回真实的偏移量
                // 此时如果header 已经是一组item中最后一个时 向下位移 并 设置到一组item的起始位置   
                let pos = this.header.getPosition()
                if (this.vertical) { // 垂直滑动时
                    if (this.isGroupFooter(this.header)) {
                        if (this.headerToFooter) {
                            pos.y = this.getGroupBottomY(this.header, this.header)
                        } else {
                            pos.y = this.getGroupTopY(this.header, this.header)
                        }
                        pos.x = this.getGroupHeader(this.header).x
                    } else {
                        pos.x = this.getGroupRightX(this.header, this.header) // 向右位移
                    }
                } else { // 水平滑动时
                    if (this.isGroupFooter(this.header)) {
                        if (this.headerToFooter) {
                            pos.x = this.getGroupRightX(this.header, this.header)
                        } else {
                            pos.x = this.getGroupLeftX(this.header, this.header)
                        }
                        pos.y = this.getGroupHeader(this.header).y
                    } else {

                        pos.y = this.getGroupBottomY(this.header, this.header) // 向下位移
                    }
                }
                this.header.setPosition(pos)
            }
            return dataOffset
        }
        // 代表减少了item 计算偏移量
        for (let i = 0; i < Math.abs(dataOffset); i++) {
            let pos = cc.Vec2.ZERO
            if (this.vertical) {
                if (this.isGroupHeader(this.header)) {
                    pos.x = this.getGroupFooter(this.header).x
                    if (this.headerToFooter) {
                        pos.y = this.getGroupTopY(this.header, this.header)
                    } else {
                        pos.y = this.getGroupBottomY(this.header, this.header)
                    }
                } else {
                    pos.x = this.getGroupLeftX(this.header, this.header)
                    pos.y = this.header.y
                }
            } else {
                if (this.isGroupHeader(this.header)) {
                    pos.y = this.getGroupFooter(this.header).y
                    if (this.headerToFooter) {
                        pos.x = this.getGroupLeftX(this.header, this.header)
                    } else {
                        pos.x = this.getGroupRightX(this.header, this.header)
                    }
                } else {
                    pos.y = this.getGroupTopY(this.header, this.header)
                    pos.x = this.header.x
                }
            }
            this.header.setPosition(pos)
        }
        this.scrollView.calculateBoundary()
        return dataOffset
    }
    /** 刷新所有item数据 根据当前item的 index 刷新 */
    private refreshItems(value: number, offset: number = 0) {
        if (!this.header) return
        let startIndex = this.header['index'] - 1 + offset
        for (let i = 0; i < this._children.length; i++) {
            const child = this._children[i];
            startIndex++
            if (startIndex > value - 1) {
                startIndex = 0
            } else if (startIndex < 0) {
                startIndex = value - 1
            }
            child['index'] = startIndex
            this.notifyRefreshItem(child)
        }
    }
    /** 从头部到尾部重置数据 */
    private resetToHeader() {
        for (let i = 0; i < this._children.length; i++) {
            const child = this._children[i];
            child['index'] = i
            this.notifyRefreshItem(child)
        }
        if (!this.headerLoop && !this.footerLoop) {
            this.header?.setPosition(this.getGroupHeader(this.header))
        } else if (!this.scrollToHeaderOrFooter) {
            this.header?.setPosition(this.getGroupHeader(this.header))
        }
    }
    /** 从尾部到头部重置数据 */
    private resetToFooter() {
        let index = this._maxItemTotal
        for (let i = this._children.length - 1; i >= 0; i--) {
            var child = this._children[i]
            child['index'] = --index
            this.notifyRefreshItem(child)
        }
    }
    /** 分帧创建item */
    private async asyncCreateItem(value: number) {
        this._gener?.return("")
        if (this.node.childrenCount > value) {
            let length = this.node.childrenCount - value
            for (let i = 0; i < length; i++) {
                var child = this.footer
                this.remChild(child)
                child.destroy()
                this.node.removeChild(child)
            }
            if (this.header) {
                let pos = this.getGroupHeader(this.header)
                if (this.vertical) {
                    this.header.x = pos.x
                } else {
                    this.header.y = pos.y
                }
            }
            return
        }
        if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.childrenCount) return

        let total = value - this.node.childrenCount
        this._gener = this.getGeneratorLength(total, () => {
            let child = cc.instantiate(this.prefab)
            child['index'] = this.node.childrenCount
            this.addChild(child)
            let spuerItem = child.getComponent(UISpuerItem) || child.addComponent(UISpuerItem)
            this.node.addChild(child)
            spuerItem.init(this)
            if (this.node.childrenCount == 1) {
                let pos = this.getGroupHeader(this.header)
                this.header.setPosition(pos)
                this.scrollView.calculateBoundary()
            }
            let selfHorW, viewHorW
            if (this.vertical) {
                selfHorW = this.getReallySize().height
                viewHorW = this.viewSize.height
            } else {
                selfHorW = this.getReallySize().width
                viewHorW = this.viewSize.width
            }
            if (selfHorW >= viewHorW * this.multiple && this.isGroupFooter(this.footer)) {
                this._maxPrefabTotal = this.node.childrenCount //固定item数量 不在继续创建
                return false
            }
            return true
        })
        await this.exeGenerator(this._gener, 10)
    }
    /** 同步添加本地变量 children 并发送 UIChangeBrotherEvnet 通知*/
    private addChild(node: cc.Node) {
        this._children.push(node)
        this.node.emit(UIChangeBrotherEvnet)
    }
    /** 同步移除本地变量 children 并发送 UIChangeBrotherEvnet 通知 */
    private remChild(node: cc.Node) {
        let index = this._children.indexOf(node)
        if (index != -1) {
            this._children.splice(index, 1)
        }
        this.node.emit(UIChangeBrotherEvnet)
    }
    /** 分帧加载 */
    private * getGeneratorLength(length: number, callback: Function, ...params: any): Generator {
        for (let i = 0; i < length; i++) {
            let result = callback(i, ...params)
            if (result) {
                yield
            } else {
                return
            }
        }
    }
    /** 分帧执行 */
    private exeGenerator(generator: Generator, duration: number) {
        return new Promise((resolve, reject) => {
            let gen = generator
            let execute = () => {
                let startTime = new Date().getTime()
                for (let iter = gen.next(); ; iter = gen.next()) {
                    if (iter == null || iter.done) {
                        resolve()
                        return
                    }
                    if (new Date().getTime() - startTime > duration) {
                        setTimeout(() => execute(), cc.director.getDeltaTime() * 1000)
                        return
                    }
                }
            }
            execute()
        })
    }
}
