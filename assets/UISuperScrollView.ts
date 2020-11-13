import UISuperLayout from './UISuperLayout';
const { ccclass, property } = cc._decorator;
const EPSILON = 1e-4;
@ccclass
export default class UISpuerScrollView extends cc.ScrollView {
    @property({
        displayName: "顶部偏移量",
        tooltip: "下拉时超过此偏移会发送下拉事件"
    }) headerOutOffset: number = 200
    @property({
        displayName: "顶部高度",
        tooltip: "当下拉事件触发时 顶部追加的高度"
    }) headerHeight: number = 100

    @property({
        displayName: "底部偏移量",
        tooltip: "上拉时超过此偏移会发送上拉事件"
    }) footerOutOffset: number = 200

    @property({
        displayName: "底部高度",
        tooltip: "当上拉事件触发时 底部追加的高度"
    }) footerHeight: number = 100
    @property({
        type: cc.Component.EventHandler,
        displayName: "下拉事件"
    }) pullDownEvents: cc.Component.EventHandler[] = []
    @property({
        type: cc.Component.EventHandler,
        displayName: "上拉事件"
    }) pullUpEvents: cc.Component.EventHandler[] = []

    private _outOfBoundaryAmountDirty: boolean
    public deltaMove = cc.Vec2.ZERO
    public get view(): cc.Node { return this['_view'] }
    public set autoScrolling(value: boolean) { this['_autoScrolling'] = value }
    public get autoScrolling() { return this['_autoScrolling'] }
    private isMoveHeader: boolean = false
    private isMoveFooter: boolean = false
    private isLockHeader: boolean = false
    private isLockFooter: boolean = false
    private isAutoBack: boolean = false
    private isEmitProgress: boolean = false
    private contentOriginPos: cc.Vec2 = null
    private releaseing: boolean = false
    private _layout: UISuperLayout = null
    private get layout(): UISuperLayout {
        if (this._layout == null) {
            this._layout = this.content.getComponent(UISuperLayout)
        }
        return this._layout
    }
    private get isHeader() {
        if (this.layout?.header) {
            return this.layout?.header['index'] == 0
        }
        return true
    }
    private get isFooter() {
        if (this.layout?.footer) {
            return this.layout.footer['index'] == this.layout.maxItemTotal - 1
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
        if (this.isLockHeader || this.isLockFooter) {
            this.isMoveHeader = false
            this.isMoveFooter = false
            this.isLockHeader = false
            this.isLockFooter = false
            this.isEmitProgress = true
            this.releaseing = true
            this._outOfBoundaryAmountDirty = true
            this['_processInertiaScroll']()
        }
    }
    public stopAutoScroll() {
        super['stopAutoScroll']()
        this.clearProgress()
        this.isEmitProgress = false
    }
    private _adjustContentOutOfBoundary() {
        this._outOfBoundaryAmountDirty = true;
        if (this['_isOutOfBoundary']()) {
            let outOfBoundary = this.getHowMuchOutOfBoundary(cc.v2(0, 0));
            let newPosition = this.getContentPosition().add(outOfBoundary);
            if (!this.contentOriginPos) {
                this.contentOriginPos = newPosition
            }
            if (this.content) {
                this.content.setPosition(newPosition);
                this._updateScrollBar(0);
            }
            if (this.contentOriginPos.fuzzyEquals(newPosition, EPSILON)) {
                this.layout.setHeaderStartPos()
            }
        }
    }
    /**
     * 重置列表
     * 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(高度|缩放|尺寸) 时保证内容显示正确
     */
    public reset() {
        this._outOfBoundaryAmountDirty = true
        let offset = this.getHowMuchOutOfBoundary()
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            if (!this.releaseing) {
                this.clearProgress()
                this.isEmitProgress = false
            }
            this['_processInertiaScroll']()
        }
    }
    private _onTouchMoved(event: cc.Event.EventTouch, captureListeners) {
        super['_onTouchMoved'](event, captureListeners)
        let delta = cc.v2(event.getLocation().x - event.getPreviousLocation().x, event.getLocation().y - event.getPreviousLocation().y)
        if (this.vertical && delta.y != 0 || this.horizontal && delta.x != 0) {
            this.deltaMove = delta
        }
        this.isAutoBack = false
        // 判断是否需要计算
        if (this.isCalculPull) {
            this.isEmitProgress = true
            let outOfBoundary = this.getHowMuchOutOfBoundary()
            let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
            if (offset > 0 && this.isHeader) {
                this.isMoveHeader = offset >= this.headerOutOffset
            } else if (offset < 0 && this.isFooter) {
                this.isMoveFooter = offset <= -this.footerOutOffset
            }
        }
    }
    private _dispatchEvent(event) {
        super['_dispatchEvent'](event)
        if (event == 'scroll-ended') {
            this.deltaMove = cc.Vec2.ZERO
            this.isMoveHeader = false
            this.isMoveFooter = false
            this.isAutoBack = false
            this.isEmitProgress = false
            this.releaseing = false
        }
    }
    private _getContentTopBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        
        if (this.layout?.header && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.headerBoundaryY + this.layout.paddingTop
        } else {
            local = this._getContentBottomBoundary() + viewSize.height
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerHeight
        }
        return local
    }
    private _getContentBottomBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
  
        if (this.layout?.footer && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.footerBoundaryY - this.layout.paddingBottom
        } else {
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerHeight
        }
        return local
    }
    private _getContentLeftBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.header && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.headerBoundaryX - this.layout.paddingLeft
        } else {
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerHeight
        }
        return local
    }
    private _getContentRightBoundary() {
        let viewSize = this.view.getContentSize()
        let local = 0
        if (this.layout?.footer && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.footerBoundaryX + this.layout.paddingRight
        } else {
            local = this._getContentLeftBoundary() + viewSize.width
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerHeight
        }
        return local
    }
    private _startAutoScroll(deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
            if (this.isMoveHeader && !this.isLockHeader) {
                this.isLockHeader = true
                this.vertical && (deltaMove.y -= this.headerHeight)
                this.horizontal && (deltaMove.x += this.headerHeight)
                this.emitPullDownEvent({ refresh: true, progress: 1 })
            }
            if (this.isMoveFooter && !this.isLockFooter) {
                this.isLockFooter = true
                this.vertical && (deltaMove.y += this.footerHeight)
                this.horizontal && (deltaMove.x -= this.footerHeight)
                this.emitPullUpEvent({ refresh: true, progress: 1 })
            }
        }
        super['_startAutoScroll'](deltaMove, timeInSecond, attenuated)
    }

    private _isNecessaryAutoScrollBrake() {
        let result = super['_isNecessaryAutoScrollBrake']()
        if (result) {
            this.isAutoBack = true
        }
        return result
    }
    private _updateScrollBar(outOfBoundary) {
        super['_updateScrollBar'](outOfBoundary)
        if (!this.isCalculPull) return
        // 自动回弹时不发送事件 只有在手动滑动时才触发
        if (this['_autoScrollBraking']) {
            this.clearProgress()
            this.isAutoBack = true
        }
        if (this.isAutoBack) return
        let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
        if (offset > 0 && this.isHeader && !this.isLockHeader) {

            let progress = offset < EPSILON ? 0 : offset / this.headerOutOffset
            this.emitPullDownEvent({ refresh: false, progress: progress })
            this.emitPullUpEvent({ refresh: false, progress: 0 })
        } else if (offset < 0 && this.isFooter && !this.isLockFooter) {

            let progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset
            this.emitPullUpEvent({ refresh: false, progress: progress })
            this.emitPullDownEvent({ refresh: false, progress: 0 })
        } else {
            this.clearProgress()
        }

    }
    private clearProgress() {
        this.emitPullDownEvent({ refresh: false, progress: 0 })
        this.emitPullUpEvent({ refresh: false, progress: 0 })
    }
    private emitPullDownEvent(data: any) {
        if (this.isEmitProgress) {
            cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data)
        }
    }
    private emitPullUpEvent(data: any) {
        if (this.isEmitProgress) {
            cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data)
        }
    }
}
