import UISuperLayout from './UISuperLayout';
const { ccclass, property, menu } = cc._decorator;
const EPSILON = 1e-4;
export interface UISuperHeaderAndFooterEvent {
    action: boolean,
    progress: number,
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
            this.layout.scrollToHeaderOrFooter = false
        }
    }
    private _getContentTopBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0

        if (this.layout?.header && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.topBoundary
        } else {
            local = this._getContentBottomBoundary() + viewSize.height
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerOutOffset
        }
        return local
    }
    private _getContentBottomBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.footer && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.bottomBoundary
        } else {
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerOutOffset
        }
        return local
    }
    private _getContentLeftBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.header && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.leftBoundary
        } else {
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerOutOffset
        }
        return local
    }
    private _getContentRightBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.footer && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.rightBoundary
        } else {
            local = this._getContentLeftBoundary() + viewSize.width
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerOutOffset
        }
        return local
    }
    private _startAutoScroll(deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
            if (this.isMoveHeader && !this.isLockHeader) {
                this.isLockHeader = true
                this.vertical && (deltaMove.y -= this.headerOutOffset)
                this.horizontal && (deltaMove.x += this.headerOutOffset)
                this.emitPullDownEvent({ action: true, progress: this.headerProgress, progressStage: 'lock' })
            } else if (this.isMoveFooter && !this.isLockFooter) {
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
        if (!this.isCalculPull) return
        if (this['_autoScrollBraking']) return
        if (!this.autoScrolling) return
        let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
        if (offset > 0) {
            let progress = offset < EPSILON ? 0 : offset / this.headerOutOffset
            let progressStage
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1)
                progressStage = 'lock'
            } else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress
                progressStage = 'release'
            }
            this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: progressStage })

        } else if (offset < 0) {
            let progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset
            let progressStage
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1)
                progressStage = 'lock'
            } else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress
                progressStage = 'release'
            }
            this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: progressStage })

        } else if (offset == 0) {
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
