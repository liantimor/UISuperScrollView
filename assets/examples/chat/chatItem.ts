const { ccclass, property } = cc._decorator;
@ccclass
export default class chatItem extends cc.Component {
    @property(cc.Node) other: cc.Node = null
    @property(cc.Node) self: cc.Node = null
    private label: cc.Label
    private background: cc.Layout
    public show(info: any) {
        this.other.active = info.type == 'other'
        this.self.active = info.type == 'self'
        let node = info.type == 'self' ? this.self : this.other
        this.label?.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this)

        this.background = node.getChildByName('background').getComponent(cc.Layout)
        this.label = this.background.node.getChildByName('label').getComponent(cc.Label)
        this.label.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this)
        this.label.overflow = cc.Label.Overflow.NONE
        this.label.string = info.message
        this.label['_forceUpdateRenderData']()
        this.background.updateLayout()
        this.background.node.width = this.label.node.width + 20
        this.node.height = this.background.node.height
    }
    private onChangeSize() {
        if (this.label.node.width > 600) {
            this.label.overflow = cc.Label.Overflow.RESIZE_HEIGHT
            this.label.node.width = 600
            this.label['_forceUpdateRenderData']()
            this.background.updateLayout()
            this.background.node.width = this.label.node.width + 20
            this.node.height = this.background.node.height
        }
    }
}
