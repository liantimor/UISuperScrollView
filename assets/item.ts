const { ccclass, property } = cc._decorator;

@ccclass
export default class item extends cc.Component {

    @property(cc.Label) label: cc.Label = null
    private removeFunc: Function
    private index
    public show(info: any, index: number, removeFunc: Function) {
        this.label.string = `${info.title}`
        this.index = index
        this.removeFunc = removeFunc
    }
    onRemMe() {
        this.removeFunc(this.index)
    }
}
