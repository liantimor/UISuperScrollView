import UISuperLayout from './UISuperLayout';
const { ccclass, property } = cc._decorator;
@ccclass
export default class UISpuerScrollView extends cc.ScrollView {
    private _topBoundary: number
    private _bottomBoundary: number
    private _leftBoundary: number
    private _rightBoundary: number
    public deltaMove = cc.Vec2.ZERO
    public get view(): cc.Node { return this['_view'] }
    public get autoScrolling() { return this['_autoScrolling'] }
    private _layout: UISuperLayout = null
    private get layout(): UISuperLayout {
        if (this._layout == null) {
            this._layout = this.content.getComponent(UISuperLayout)
        }
        return this._layout
    }
    private _onTouchMoved(event: cc.Event.EventTouch, captureListeners) {
        super['_onTouchMoved'](event, captureListeners)
        let delta = cc.v2(event.getLocation().x - event.getPreviousLocation().x, event.getLocation().y - event.getPreviousLocation().y)
        if (this.vertical && delta.y != 0 || this.horizontal && delta.x != 0) {
            this.deltaMove = delta
        }
    }
    private _dispatchEvent(event) {
        super['_dispatchEvent'](event)
        if (event == 'scroll-ended') {
            this.deltaMove = cc.Vec2.ZERO
        }
    }

    public calculateBoundary() {
        this['_calculateBoundary']()
    }
    public getHowMuchOutOfBoundary(offset?: cc.Vec2) {
        return this['_getHowMuchOutOfBoundary'](offset)
    }
    _getContentTopBoundary() {
        let offset = 0
        if (this.layout?.header) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.header.getBoundingBoxToWorld().yMax))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.header['getBounding']().yMax))
            }
            offset = local.y + this.layout.paddingTop
        }
        return offset;
    }
    _getContentBottomBoundary() {
        let offset = 0
        if (this.layout?.footer) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.footer.getBoundingBoxToWorld().yMin))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.footer['getBounding']().yMin))
            }
            offset = local.y - this.layout.paddingBottom
        }
        return offset
    }
    _getContentLeftBoundary() {
        let offset = 0
        if (this.layout?.header) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.header.getBoundingBoxToWorld().xMin, 0))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.header['getBounding']().xMin, 0))
            }
            offset = local.x - this.layout.paddingLeft
        }
        return offset
    }
    _getContentRightBoundary() {
        let offset = 0
        if (this.layout?.footer) {
            let local
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.footer.getBoundingBoxToWorld().xMax, 0))
            } else {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.footer['getBounding']().xMax, 0))
            }
            offset = local.x + this.layout.paddingRight
        }
        return offset
    }
}
