/*
 * @Author: steveJobs
 * @Email: icipiqkm@gmail.com
 * @Date: 2020-11-19 01:15:04
 * @Last Modified by: steveJobs
 * @Last Modified time: 2020-12-04 14:35:43
 * @Description: Description
 */
import UISuperLayout from './UISuperLayout';
const { ccclass, property, menu } = cc._decorator;
const EPSILON = 1e-4;
export interface UISuperHeaderAndFooterEvent {
    /** 执行动作 true:满足触发条件 */
    action: boolean,
    /** 根据参数headerOutOffset或footerOutOffset 来计算的进度值 */
    progress: number,
    /** 当前进度状态 
     * touch=触摸中 正在触摸滑动中 
     * wait=等待中 已经满足了触发的更新动作的条件 
     * lock=锁定中 当前正在执行刷新或加载
     * release=释放中 
     */
    progressStage: "touch" | "wait" | "lock" | "release",
}
@ccclass
@menu("UISpuerScrollView")
export default class UISpuerScrollView extends cc.ScrollView {
    @property({
        displayName: "顶部偏移量",
        tooltip: "下拉时超过此偏移会发送下拉事件"
    }) headerOutOffset: number = 200
    @property({ displayName: "满足触发Header的倍数" }) headerMultiple: number = 2
    @property({
        displayName: "底部偏移量",
        tooltip: "上拉时超过此偏移会发送上拉事件"
    }) footerOutOffset: number = 200
    @property({ displayName: "满足触发Footer的倍数" }) footerMultiple: number = 2
    @property({
        type: cc.Component.EventHandler,
        displayName: "下拉事件"
    }) pullDownEvents: cc.Component.EventHandler[] = []
    @property({
        type: cc.Component.EventHandler,
        displayName: "上拉事件"
    }) pullUpEvents: cc.Component.EventHandler[] = []
    public get view(): cc.Node { return this['_view'] }
    public set autoScrolling(value: boolean) { this['_autoScrolling'] = value }
    public get autoScrolling() { return this['_autoScrolling'] }
    private isMoveHeader: boolean = false
    private isMoveFooter: boolean = false
    private isLockHeader: boolean = false
    private isLockFooter: boolean = false
    private headerProgress: number = 0
    private footerProgress: number = 0
    private _layout: UISuperLayout = null
    private get layout(): UISuperLayout {
        if (this._layout == null) this._layout = this.content.getComponent(UISuperLayout)
        return this._layout
    }
    /** 当前头部的item是否真的是数据的开头 也就是0 */
    private get isHeader() {
        if (this.layout.headerToFooter) {
            if (this.layout?.header) {
                return this.layout?.header['index'] == 0
            }
        } else {
            if (this.layout?.footer) {
                return this.layout?.footer['index'] == this.layout.maxItemTotal - 1
            }
        }
        return true
    }
    /** 当前尾部的item是否真的是数据的结尾 */
    private get isFooter() {
        if (this.layout.headerToFooter) {
            if (this.layout?.footer) {
                return this.layout.footer['index'] == this.layout.maxItemTotal - 1
            }
        } else {
            if (this.layout?.header) {
                return this.layout?.header['index'] == 0
            }
        }
        return true
    }
    /** 是否需要计算？如果上拉/下拉事件没有监听者则不需要相关的计算 */
    public get isCalculPull() {
        return this.pullDownEvents.length > 0 || this.pullUpEvents.length > 0
    }
    public calculateBoundary() {
        this['_calculateBoundary']()
    }
    public getHowMuchOutOfBoundary(offset?: cc.Vec2) {
        return this['_getHowMuchOutOfBoundary'](offset)
    }
    onLoad() {
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this)
    }
    onDestroy() {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this)
    }
    private onChangeSize() {
        let widget = this.view.getComponent(cc.Widget)
        if (!widget) return
        widget.updateAlignment()
    }
    /** 释放 功能用于上拉加载下拉刷新 解锁头尾固定的尺寸 */
    public release() {
        this.isMoveHeader = false
        this.isMoveFooter = false
        if (this.isLockHeader || this.isLockFooter) {
            let outOfBoundary = this.getHowMuchOutOfBoundary()
            let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
            let autoScroll = true
            if (offset == 0 || this.isLockHeader && offset < 0 || this.isLockFooter && offset > 0) {
                this.clearProgress()
                autoScroll = false
            }
            this.isLockHeader = false
            this.isLockFooter = false
            if (autoScroll) {
                this['_outOfBoundaryAmountDirty'] = true
                this['_processInertiaScroll']()
            }
        } else {
            this.clearProgress()
        }
    }

    /**重置列表 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(高度|缩放|尺寸) 时保证内容显示正确 */
    public reset() {
        this['_outOfBoundaryAmountDirty'] = true
        let offset = this.getHowMuchOutOfBoundary()
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            this['_processInertiaScroll']()
        }
    }
    private _onTouchMoved(event: cc.Event.EventTouch, captureListeners) {
        super['_onTouchMoved'](event, captureListeners)
        if (this.isCalculPull) {
            let outOfBoundary = this.getHowMuchOutOfBoundary()
            let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
            if (offset > 0 && this.isHeader && !this.isLockHeader && !this.isLockFooter) {
                this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset
                this.isMoveHeader = this.headerProgress >= this.headerMultiple
                this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: this.isMoveHeader ? "wait" : "touch" })
                this.emitPullUpEvent({ action: false, progress: 0, progressStage: "release" })
            } else if (offset < 0 && this.isFooter && !this.isLockFooter && !this.isLockHeader) {
                this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset
                this.isMoveFooter = this.footerProgress >= this.footerMultiple
                this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: this.isMoveFooter ? "wait" : "touch" })
                this.emitPullDownEvent({ action: false, progress: 0, progressStage: "release" })
            }
        }
    }
    private _dispatchEvent(event) {
        super['_dispatchEvent'](event)
        if (event == 'scroll-ended') {
            this.layout.scrollToHeaderOrFooter = false //功能用于控制循环滚动时使用scrollTo方法滚动带来的效果问题 
        }
    }
    private _getContentTopBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.header && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.topBoundary //返回头部item上边距
        } else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this._getContentBottomBoundary() + viewSize.height
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerOutOffset  //功能用于上拉加载 下拉刷新 让整个content多一个 headerOutOffset 的尺寸
        }
        return local
    }
    private _getContentBottomBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.footer && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.bottomBoundary //返回尾部item上边距
        } else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerOutOffset  //功能用于上拉加载 下拉刷新 让整个content多一个 footerOutOffset 的尺寸
        }
        return local
    }
    private _getContentLeftBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.header && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.leftBoundary //返回头部item左边距
        } else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerOutOffset  //功能用于上拉加载 下拉刷新 让整个content多一个 headerOutOffset 的尺寸
        }
        return local
    }
    private _getContentRightBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.footer && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.rightBoundary //返回头部item右边距
        } else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this._getContentLeftBoundary() + viewSize.width
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerOutOffset //功能用于上拉加载 下拉刷新 让整个content多一个 footerOutOffset 的尺寸
        }
        return local
    }
    private _startAutoScroll(deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {  // 如果没有刷新/加载的监听者 则不计算 
            if (this.isMoveHeader && !this.isLockHeader) { // 锁住头部 意思就是已经触发了下拉事件 应用层应该做些刷新的动作
                this.isLockHeader = true
                this.vertical && (deltaMove.y -= this.headerOutOffset)
                this.horizontal && (deltaMove.x += this.headerOutOffset)
                this.emitPullDownEvent({ action: true, progress: this.headerProgress, progressStage: 'lock' })
            } else if (this.isMoveFooter && !this.isLockFooter) { // 锁住尾部 意思就是已经触发了上拉事件 应用层应该做些加载的动作
                this.isLockFooter = true
                this.vertical && (deltaMove.y += this.footerOutOffset)
                this.horizontal && (deltaMove.x -= this.footerOutOffset)
                this.emitPullUpEvent({ action: true, progress: this.footerProgress, progressStage: 'lock' })
            }
        }
        super['_startAutoScroll'](deltaMove, timeInSecond, attenuated)
    }
    private _updateScrollBar(outOfBoundary) {
        super['_updateScrollBar'](outOfBoundary)
        if (!this.isCalculPull) return // 如果没有刷新/加载的监听者 则不计算 
        if (this['_autoScrollBraking']) return // 自动回弹时不计算 （非手动）
        if (!this.autoScrolling) return // 非自动滚动时不计算 
        let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
        if (offset > 0) { // 下滑
            let progress = offset < EPSILON ? 0 : offset / this.headerOutOffset //根据参数 headerOutOffset 计算当前下滑的办百分比
            let progressStage
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1)
                progressStage = 'lock'  //锁定状态
            } else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress
                progressStage = 'release' //释放状态
            }
            this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: progressStage })

        } else if (offset < 0) { //上拉
            let progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset  //根据参数 footerOutOffset 计算当前下滑的办百分比
            let progressStage
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1)
                progressStage = 'lock'  //锁定状态
            } else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress
                progressStage = 'release'  //释放状态
            }
            this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: progressStage })

        } else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
            if (!this.isLockHeader && !this.isLockFooter) {
                this.clearProgress()
            }
        }
    }
    private clearProgress() {
        this.headerProgress = 0
        this.footerProgress = 0
        this.emitPullDownEvent({ action: false, progress: 0, progressStage: 'release' })
        this.emitPullUpEvent({ action: false, progress: 0, progressStage: 'release' })
    }
    private emitPullDownEvent(data: UISuperHeaderAndFooterEvent) {
        cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data)
    }
    private emitPullUpEvent(data: UISuperHeaderAndFooterEvent) {
        cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data)
    }
}
