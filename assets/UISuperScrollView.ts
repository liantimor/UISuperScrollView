import UISuperLayout from './UISuperLayout';
const { ccclass, property } = cc._decorator;
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

    public deltaMove = cc.Vec2.ZERO
    public get view(): cc.Node { return this['_view'] }
    public set autoScrolling(value: boolean) { this['_autoScrolling'] = value }
    public get autoScrolling() { return this['_autoScrolling'] }
    private isMoveHeader: boolean = false
    private isMoveFooter: boolean = false
    private isLockHeader: boolean = false
    private isLockFooter: boolean = false
    private isAutoBack: boolean
    private _layout: UISuperLayout = null
    private get layout(): UISuperLayout {
        if (this._layout == null) {
            this._layout = this.content.getComponent(UISuperLayout)
        }
        return this._layout
    }
    private get isHeader() {
        return this.layout?.header && this.layout?.header['index'] == 0 || false
    }
    private get isFooter() {
        return this.layout?.footer && this.layout?.footer['index'] == this.layout?.maxItemTotal - 1 || false
    }
    /** 是否需要计算？如果上拉/下拉事件没有监听者则不需要相关的计算 */
    private get isCalculPull() {
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
            this['_outOfBoundaryAmountDirty'] = true
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
        }
    }
    private _getContentTopBoundary() {
        let offset = 0
        if (this.layout?.header) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.header.getBoundingBoxToWorld().yMax))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.header['getBounding']().yMax))
            }
            offset = local.y + this.layout.paddingTop
            if (this.isHeader && this.isLockHeader) {
                offset += this.headerHeight
            }

        }
        return offset;
    }
    private _getContentBottomBoundary() {
        let offset = 0
        if (this.layout?.footer) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.footer.getBoundingBoxToWorld().yMin))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.footer['getBounding']().yMin))
            }
            offset = local.y - this.layout.paddingBottom
            if (this.isFooter && this.isLockFooter) {
                offset -= this.footerHeight
            }
        }
        return offset
    }
    private _getContentLeftBoundary() {
        let offset = 0
        if (this.layout?.header) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.header.getBoundingBoxToWorld().xMin, 0))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.header['getBounding']().xMin, 0))
            }
            offset = local.x - this.layout.paddingLeft
            if (this.isHeader && this.isLockHeader) {
                offset -= this.headerHeight
            }
        }
        return offset
    }
    private _getContentRightBoundary() {
        let offset = 0
        if (this.layout?.footer) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.footer.getBoundingBoxToWorld().xMax, 0))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.footer['getBounding']().xMax, 0))
            }
            offset = local.x + this.layout.paddingRight
            if (this.isFooter && this.isLockFooter) {
                offset += this.footerHeight
            }
        }
        return offset
    }

    private _startAutoScroll(deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
            if (this.isMoveHeader && !this.isLockHeader) {
                this.isLockHeader = true

                this.vertical && (deltaMove.y -= this.headerHeight)
                this.horizontal && (deltaMove.x += this.headerHeight)

                cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, {
                    refresh: true,
                    progress: 1
                })
            }
            if (this.isMoveFooter && !this.isLockFooter) {
                this.isLockFooter = true

                this.vertical && (deltaMove.y += this.footerHeight)
                this.horizontal && (deltaMove.x -= this.footerHeight)

                cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, {
                    refresh: true,
                    progress: 1
                })
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
            this.emitPullDownEvent({ refresh: false, progress: 0 })
            this.emitPullUpEvent({ refresh: false, progress: 0 })
            this.isAutoBack = true
        }
        if (this.isAutoBack) return

        let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
        if (offset > 0 && this.isHeader && !this.isLockHeader) {

            let progress = Math.min(offset / this.headerOutOffset, 1)

            this.emitPullDownEvent({ refresh: false, progress: progress })

        } else if (offset < 0 && this.isFooter && !this.isLockFooter) {

            let progress = Math.min(-offset / this.footerOutOffset, 1)

            this.emitPullUpEvent({ refresh: false, progress: progress })

        } else {
            this.emitPullDownEvent({ refresh: false, progress: 0 })

            this.emitPullUpEvent({ refresh: false, progress: 0 })
        }
    }

    private emitPullDownEvent(data: any) {
        cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data)
    }
    private emitPullUpEvent(data: any) {
        cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data)
    }
}
