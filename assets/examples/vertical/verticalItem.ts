const { ccclass, property } = cc._decorator;
@ccclass
export default class verticalItem extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    private index: number
    private remove: Function
    public show(info: any, index: number, remove: Function) {
        this.index = index
        this.remove = remove
        this.label.string = info.message
    }
    private onRemove() {
        this.remove(this.index)
    }
    private onClick() {
        
    }
}
