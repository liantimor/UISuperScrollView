/*
 * @Author: steveJobs
 * @Email: icipiqkm@gmail.com
 * @Date: 2020-11-19 01:15:52
 * @Last Modified by: steveJobs
 * @Last Modified time: 2021-01-23 18:05:39
 * @Description: 名词说明 什么是一组item？
 * 垂直模式  
 * 1,2,3 一组item包含 1,2,3  1是一组item中header 也是整个列表的header 3是一组item中footer 9是整个列表的footer
 * 4,5,6
 * 7,8,9
 * 调用 isGroupHeader传入 1节点 返回true  调用 isGroupFooter传入 3节点返回true 
 * 调用 getGroupLeftX 传入 2节点 返回1节点位置X getGroupRightX 返回3节点位置X
 * 调用 getGroupBottomY 传入 5节点 返回8节点位置Y getGroupTopY 返回2节点位置Y
 * 水平模式
 * |1|,4,7 一组item包含 1,2,3 1是一组item中header 也是整个列表的header 3是一组item中footer 9是整个列表的footer
 * |2|,5,8
 * |3|,6,9
 */
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
    /** 当前的滚动是否是由 scrollTo 方法执行的 和touch滑动做个区分*/
    public scrollToHeaderOrFooter: boolean = false
    /** 根据上一次和本次的坐标变化计算滑动方向 */
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
    /** 是否是向下滑动 */
    private get isScrollToFooter(): boolean {
        if (this.vertical) {
            return this.layoutDirection.y < 0
        } else {
            return this.layoutDirection.x > 0
        }
    }
    /** 自己维护的子节点数组 和this.node.children 保持同步 */
    public get children() { return this._children }
    /** 最大数据总数 */
    public get maxItemTotal() { return this._maxItemTotal }
    /** 当前被创建的item总数 */
    public get maxPrefabTotal() { return this._maxPrefabTotal }
    /** scrollView.view尺寸 */
    public get viewSize(): cc.Size {
        return this.scrollView.view.getContentSize()
    }
    /** 是否是垂直模式 */
    public get vertical(): boolean {
        return this.startAxis == UISuperAxis.VERTICAL
    }
    /** 是否是水平模式 */
    public get horizontal(): boolean {
        return this.startAxis == UISuperAxis.HORIZONTAL
    }
    /** 是否是正序排列 */
    public get headerToFooter(): boolean {
        return this.direction == UISuperDirection.HEADER_TO_FOOTER
    }
    /** 是否是倒序排列 */
    public get footerToHeader(): boolean {
        return this.direction == UISuperDirection.FOOTER_TO_HEADER
    }
    /** 水平间隔总宽度 (Grid 模式返回多个间隔总宽度) */
    public get spacingWidth() {
        return this.spacing.x * (this.column - 1)
    }
    /** 水平间隔总高度 (Grid 模式返回多个间隔总高度) */
    public get spacingHeight() {
        return this.spacing.y * (this.column - 1)
    }
    /** 可容纳item的真实宽度 */
    public get accommodWidth() {
        return this.viewSize.width - this.paddingLeft - this.paddingRight
    }
    /** 可容纳item的真实高度 */
    public get accommodHeight() {
        return this.viewSize.height - this.paddingTop - this.paddingBottom
    }
    public get scrollView(): UISpuerScrollView {
        if (!this._scrollView) this._scrollView = this.node.parent.parent.getComponent(UISpuerScrollView)
        return this._scrollView
    }
    /** 当前头部的item */
    public get header(): cc.Node {
        return this._children[0]
    }
    /** 当前尾部的item */
    public get footer(): cc.Node {
        return this._children[this._children.length - 1]
    }
    /** 真实的上边距 */
    public get topBoundary() {
        if (this.headerToFooter) {
            return this.headerBoundaryY + this.paddingTop
        } else {
            return this.footerBoundaryY + this.paddingTop
        }
    }
    /** 真实的下边距 */
    public get bottomBoundary() {
        if (this.headerToFooter) {
            return this.footerBoundaryY - this.paddingBottom
        } else {
            return this.headerBoundaryY - this.paddingBottom
        }
    }
    /** 真实的左边距 */
    public get leftBoundary() {
        if (this.headerToFooter) {
            return this.headerBoundaryX - this.paddingLeft
        } else {
            return this.footerBoundaryX - this.paddingLeft
        }
    }
    /** 真实的右边距 */
    public get rightBoundary() {
        if (this.headerToFooter) {
            return this.footerBoundaryX + this.paddingRight
        } else {
            return this.headerBoundaryX + this.paddingRight
        }
    }
    /** 头部item的世界坐标边框 类似 xMin、xMax */
    public get headerBoundaryX() {
        if (this.headerToFooter) {
            return this.node.x + this.header.x - this.header.anchorX * this.getScaleWidth(this.header)
        } else {
            return this.node.x + this.header.x + (1 - this.header.anchorX) * this.getScaleWidth(this.header)
        }
    }
    /** 头部item的世界坐标边框 类似 yMin、yMax */
    public get headerBoundaryY() {
        if (this.headerToFooter) {
            return this.node.y + this.header.y + (1 - this.header.anchorY) * this.getScaleHeight(this.header)
        } else {
            return this.node.y + this.header.y - this.header.anchorY * this.getScaleHeight(this.header)
        }
    }
    /** 尾部item的世界坐标边框 类似 xMin、xMax */
    public get footerBoundaryX() {
        if (this.headerToFooter) {
            return this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.getScaleWidth(this.footer)
        } else {
            return this.node.x + this.footer.x - this.footer.anchorX * this.getScaleWidth(this.footer)
        }
    }
    /** 尾部item的世界坐标边框 类似 yMin、yMax */
    public get footerBoundaryY() {
        if (this.headerToFooter) {
            return this.node.y + this.footer.y - this.footer.anchorY * this.getScaleHeight(this.footer)
        } else {
            return this.node.y + this.footer.y + (1 - this.footer.anchorY) * this.getScaleHeight(this.footer)
        }
    }
    public get isNormalSize(): boolean {
        return this.node.getContentSize().equals(this.viewSize)
    }

    /** 重写 this.node.getContentSize 动态计算头尾item 返回虚拟的尺寸 非content设置的尺寸 */
    public getContentSize() {
        let size = this.getReallySize()
        let viewSize = this.scrollView.view.getContentSize()
        // 列表为空时 直接返回 scrollView.view 的尺寸
        if (size.height < viewSize.height) {
            size.height = viewSize.height
        }
        if (size.width < viewSize.width) {
            size.width = viewSize.width
        }
        return size
    }
    /** 返回 header到 footer 之间的整体尺寸 */
    public getReallySize() {
        if (this.node.childrenCount == 0) return this.viewSize
        let size = cc.Size.ZERO
        if (this.headerToFooter) { // 根据header和footer计算出真实的content尺寸 
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
    /** 获取缩放系数 */
    public getUsedScaleValue(value: number) {
        return this.affectedByScale ? Math.abs(value) : 1
    }
    /** 设置最大item数量 */
    public async total(value: number) {
        this.scrollView.stopAutoScroll()
        this.scrollView.release() // 释放（功能用于上拉加载 下拉刷新）
        this.initlized()  // 初始化
        await this.asyncCreateItem(value) // 分帧创建item
        let dataOffset = this.getDataOffset(value) //获取数据偏移量（根据value相对于 _maxItemTotal 计算增加、减少的数量）
        let reallyOffset = this.getReallyOffset(dataOffset) // 获取真实的数据偏移（Grid模式 功能用于判断是否需要偏移header来将下方填满）
        this.refreshItems(value, reallyOffset) //通过已有的item['index'] 加上数据偏移 来是刷新显示
        this._maxItemTotal = value // 记录当前总数
    }
    /** 获取兄弟节点 */
    public getBrotherNode(node: cc.Node) {
        let index = this.getSiblingIndex(node) - 1 // 此 getSiblingIndex 非 this.node.getSiblingIndex
        return this._children[index]
    }
    /** 是否是一组item中第一个（垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public isGroupHeader(node: cc.Node): boolean {
        let xOry = this.getGroupHeader(node)
        let pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y)
        let self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y)
        return self.fuzzyEquals(pos, EPSILON)
    }
    /** 是否是一组item中最后一个（垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public isGroupFooter(node: cc.Node): boolean {
        let xOry = this.getGroupFooter(node)
        let pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y)
        let self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y)
        return self.fuzzyEquals(pos, EPSILON)
    }
    /** 获取一组item中起始位置 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public getGroupHeader(node: cc.Node): cc.Vec2 {
        let pos = cc.Vec2.ZERO
        if (!node) return pos
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
        return pos
    }
    /** 获取一组item中结束位置 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public getGroupFooter(node: cc.Node): cc.Vec2 {
        let pos = cc.Vec2.ZERO
        if (!node) return pos
        if (this.vertical) {
            pos.x = (this.accommodWidth + this.paddingLeft) * this.node.anchorX - (this.getScaleWidth(node) * (1 - node.anchorX) + this.node.anchorX * this.paddingRight)
            pos.y = node.y
        } else {
            pos.x = node.x
            pos.y = -((this.accommodHeight + this.paddingTop) * this.node.anchorY - this.getScaleHeight(node) * node.anchorY) + (1 - node.anchorY) * this.paddingBottom
        }
        return pos
    }
    /** 获取一组item中 node 相对 relative 右偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public getGroupRightX(node: cc.Node, relative: cc.Node) {
        if (!node || !relative) return this.getGroupHeader(node).x
        let prevWidth = relative.x + this.getScaleWidth(relative) * (1 - relative.anchorX)
        let selfWidth = this.getScaleWidth(node) * node.anchorX
        return prevWidth + selfWidth + this.spacing.x
    }
    /** 获取一组item中 node 相对 relative 左偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public getGroupLeftX(node: cc.Node, relative: cc.Node) {
        if (!node || !relative) return this.getGroupFooter(node).x
        let prevWidth = relative.x - this.getScaleWidth(relative) * relative.anchorX
        let selfWidth = this.getScaleWidth(node) * (1 - node.anchorX)
        return prevWidth - selfWidth - this.spacing.x
    }
    /** 获取一组item中 node 相对 relative 下偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public getGroupBottomY(node: cc.Node, relative: cc.Node) {
        let prevHeight = relative.y - this.getScaleHeight(relative) * relative.anchorY
        let selfHeight = this.getScaleHeight(node) * (1 - node.anchorY)
        return prevHeight - selfHeight - this.spacing.y
    }
    /** 获取一组item中 node 相对 relative 上偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    public getGroupTopY(node: cc.Node, relative: cc.Node) {
        let prevHeight = relative.y + this.getScaleHeight(relative) * (1 - relative.anchorY)
        let selfHeight = this.getScaleHeight(node) * node.anchorY
        return prevHeight + selfHeight + this.spacing.y
    }
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了头部边框 （ multiple = 1 就是一个node的尺寸 默认1.5倍）*/
    public isOutOfBoundaryHeader(node: cc.Node, multiple: number = 1.5) {
        let width = node.width * this.getUsedScaleValue(node.scaleX) * multiple
        let height = -node.height * this.getUsedScaleValue(node.scaleY) * multiple
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了尾部部边框 （ multiple = 1 就是一个node的尺寸 默认1.5倍）*/
    public isOutOfBoundaryFooter(node: cc.Node, multiple: number = 1.5) {
        let width = -node.width * this.getUsedScaleValue(node.scaleX) * multiple
        let height = node.height * this.getUsedScaleValue(node.scaleY) * multiple
        let offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height))
        return offset
    }
    /** 滚动到头部 （根据 排列方向、排列子节点的方向）来调用 scrollView.scrollTo... 方法 */
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
    /** 滚动到尾部（根据 排列方向、排列子节点的方向）来调用 scrollView.scrollTo... 方法 */
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
    /** 自定义索引方法 这里不是通过实时修改节点索引的方法，只是模拟类似的功能，实际上并没有真正改变节点的实际顺序（优化项） */
    public setSiblingIndex(node: cc.Node, index: number) {
        // 此方法时参考引擎原setSiblingIndex方法 去掉了修改节点索引位置的调用（item本身的zIndex没有任何变化）
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
            /**
             * 这里区别于原方法 原方法是改变node节点顺序后发送cc.Node.EventType.SIBLING_ORDER_CHANGED通知 这里不需要修改节点顺序
             * 这里发送一个自定义事件 模拟 SIBLING_ORDER_CHANGED 通知
             */
            this.node.emit(UIChangeBrotherEvnet)
        }
    }
    onLoad() {
        this.initlized()
    }
    /** 初始化 */
    private initlized() {
        if (this._isinited) return
        this.node.anchorX = 0.5 //固定content的锚点为中心
        this.node.anchorY = 0.5
        this.node.setContentSize(this.viewSize) //将content的尺寸设置与view相同 （功能用于空列表时也可以下拉刷新和加载） 
        // 重写 this.node.getContentSize 方法 因为content的真实尺寸不会随着item的数量变化
        this.node.getContentSize = this.getContentSize.bind(this)
        this.node.setPosition(cc.Vec2.ZERO)
        this.column = this.column < 1 ? 1 : this.column // 一组item的数量 最少是1 也就是普通的水平/垂直 大于1就是Grid模式
        // 监听content位置变化 刷新header footer节点的相对位置
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this)
        this.scrollView.view.on(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this)
        this._isinited = true
    }
    onDestroy() {
        this.node.off(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this)
        this.scrollView.view.off(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this)
    }
    private onChangePosition() {
        let flag = this.isScrollToFooter // this.isScrollToFooter = true 向下滑动 false 向上滑动
        if (this.headerToFooter) {
            flag ? this.footerToHeaderWatchChilds(flag) : this.headerToFooterWatchChilds(flag) // 倒序刷新
        } else {
            flag ? this.headerToFooterWatchChilds(flag) : this.footerToHeaderWatchChilds(flag) // 正序刷新
        }
        // 当item 由多到少 并且 当content的位置被重置到初始状态时 重新设置头部的item归位
        if (this.vertical && 0 == this.node.y || this.horizontal && 0 == this.node.x) {
            this.header.setPosition(this.getGroupHeader(this.header))
        }
    }
    public resetItemSize() {
        // 重新设置原始尺寸
        for (let i = 0; i < this.children.length; i++) {
            this.children[i]['saveOriginSize']()
        }
        // 改变头部位置
        let pos = this.getGroupHeader(this.header)
        if (this.vertical) {
            this.header.x = pos.x
        } else {
            this.header.y = pos.y
        }
        // 通知改变坐标事件
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].emit(cc.Node.EventType.POSITION_CHANGED)
        }
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
        // 返回删除数据偏移 （比如当前最大数据值=10，新数据=9 返回-1）
        if (this.footer && this.footer['index'] + 1 >= value) {
            let offset = this.footer['index'] + 1 - value
            return offset == 0 ? 0 : -offset
        }
        // 返回增加数据偏移
        if (this._maxItemTotal == 0 || value < this._maxItemTotal || this._maxItemTotal < this._maxPrefabTotal) return 0 //比如当前最多允许创建10个item 当前显示5个 返回0
        if (this.isGroupFooter(this.footer)) return 0 //Grid模式 如果尾部的位置是在一组item中末尾的位置时 返回 0 
        return value - this._maxItemTotal
    }
    /** 
     * 当数据增加、减少时 获取节点偏移量 
     * 当前数据是这样的   增加1个     增加2个
     * 0,1,2,3           1,2,3         2,3
     * 4,5,6           4,5,6,7     4,5,6,7
     *                             8
    */
    private getReallyOffset(dataOffset: number) {
        if (!this.header) return 0
        if (dataOffset > 0) { // 代表增加item 表格模式下 通过偏移头部来让下方填满 填满后停止偏移
            for (let i = 0; i < dataOffset; i++) {
                if (this.isGroupFooter(this.footer)) return i //返回真实的偏移量
                // 此时如果header 已经是一组item中最后一个时 向下位移 并 设置到一组item的起始位置   
                let pos = this.header.getPosition()
                if (this.vertical) { // 垂直滑动时
                    if (this.isGroupFooter(this.header)) { // 当列表中第一个item正在一组item中末尾位置时
                        if (this.headerToFooter) {
                            pos.y = this.getGroupBottomY(this.header, this.header)  //正序排列时 Y轴向下偏移（垂直排列时 一组item 头在左尾在右）
                        } else {
                            pos.y = this.getGroupTopY(this.header, this.header) //倒序排列时 Y轴向上偏移（垂直排列时 一组item 头在左尾在右）
                        }
                        pos.x = this.getGroupHeader(this.header).x // X轴向头部偏移
                    } else { // 第一个item没有在一组item中末尾的位置 只将第一个item向右偏移 (只偏移X轴)
                        pos.x = this.getGroupRightX(this.header, this.header) // X轴向右偏移
                    }
                } else { // 水平滑动时
                    if (this.isGroupFooter(this.header)) {  // 当列表中第一个item正在一组item中末尾位置时
                        if (this.headerToFooter) {
                            pos.x = this.getGroupRightX(this.header, this.header) //正序排列时 X轴向右偏移（水平排列时 一组item 头在上尾在下）
                        } else {
                            pos.x = this.getGroupLeftX(this.header, this.header) //倒序排列时 X轴向左偏移（水平排列时 一组item 头在上尾在下）
                        }
                        pos.y = this.getGroupHeader(this.header).y // Y轴向头部偏移
                    } else {  // 第一个item没有在一组item中末尾的位置 只将第一个item向下偏移 (只偏移Y轴)
                        pos.y = this.getGroupBottomY(this.header, this.header) // Y轴向下偏移
                    }
                }
                this.header.setPosition(pos)
            }
            return dataOffset
        }
        // 代表减少了item 计算偏移量 offset<0 【注意！这里的逻辑和上面正好相反】
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
        let startIndex = this.header['index'] - 1 + offset // 获取头部item持有的index 加上 数据偏移来计算起始index 
        for (let i = 0; i < this._children.length; i++) {
            const child = this._children[i];
            startIndex++
            // 这里的判断用于无限循环滚动的逻辑 如果索引大于数据总数 索引归零
            if (startIndex > value - 1) {
                startIndex = 0
            } else if (startIndex < 0) { // 索引小于0 索引定位到数据尾部 保持首尾相连
                startIndex = value - 1
            }
            child['index'] = startIndex //设置当前索引
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
    /** 删除多余的item */
    private removeChilds(value: number) {
        // 有多余的item 需要删除
        let length = this.node.childrenCount - value
        // 删除掉多余的item
        for (let i = 0; i < length; i++) {
            var child = this.footer
            this.remChild(child)
            child.destroy()
            this.node.removeChild(child)
        }
        if (!this.header) return
        // 将头部节点的位置重置到一组item的第一个位置
        let pos = this.getGroupHeader(this.header)
        if (this.vertical) {
            this.header.x = pos.x
        } else {
            this.header.y = pos.y
        }
    }
    /** 分帧创建item */
    private async asyncCreateItem(value: number) {
        this._gener?.return("")//取消上一次的分帧任务（如果任务正在执行）
        // 有多余的item 需要删除 不处理
        if (this.node.childrenCount > value) return this.removeChilds(value)
        // 已经固定item总数 不处理
        if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.childrenCount) return
        // 开始分帧创建item
        let total = value - this.node.childrenCount //计算当前应该创建的总数
        this._gener = this.getGeneratorLength(total, () => {
            let child = cc.instantiate(this.prefab)
            child['index'] = this.node.childrenCount
            this.addChild(child)
            // 获取或添加 UISuperItem
            let spuerItem = child.getComponent(UISpuerItem) || child.addComponent(UISpuerItem)
            this.node.addChild(child)
            spuerItem.init(this)
            // item在首次创建时立即刷新 避免显示item初始状态
            this.notifyRefreshItem(child)
            // 如果创建的是第一个item 设置他的起始位置 之后的item会自动相对于他来设置自己 我们只需要确定第一个位置就行了
            if (this.node.childrenCount == 1) {
                let pos = this.getGroupHeader(this.header) //获取一组item中头部位置
                this.header.setPosition(pos)
                /**
                 * 利用cc.ScrollView的方法来设置content的起始位置 由于content在初始化的时候固定了锚点都为0.5 所以这里必然是坐标0 
                 * 如果你没有其他需求确定用0.5锚点的话 这里可以自己设置为cc.Vec2.ZERO 节省不必要的计算（实际上计算量可忽略不计）
                 */
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
            /**
             * 根据排列方向 来判断对比宽度还是高度
             * 这里使用参数this.multiple来判断是否需要继续创建 默认为2倍 比如view可视尺寸为800 2倍就是1600
             * 根据之前所创建的所有item的尺寸计算是否满足这个尺寸 如果满足则不再继续创建 
             * 由于是分帧加载 所以下一次创建会等这一次的返回结果 返回false 则终止分帧任务
             */
            if (selfHorW >= viewHorW * this.multiple && this.isGroupFooter(this.footer)) {
                this._maxPrefabTotal = this.node.childrenCount //固定item数量 不在继续创建
                return false
            }
            return true
        })
        await this.exeGenerator(this._gener, 10) //执行分帧任务 1帧创建10个
    }
    /** 同步添加本地变量 children 并发送 UIChangeBrotherEvnet 通知*/
    private addChild(node: cc.Node) {
        this._children.push(node)
        this.node.emit(UIChangeBrotherEvnet)
    }
    /** 同步移除本地变量 children 并发送 UIChangeBrotherEvnet 通知 */
    private remChild(node: cc.Node) {
        let index = this._children.indexOf(node)
        if (index == -1) return
        this._children.splice(index, 1)
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
                        resolve(null)
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
