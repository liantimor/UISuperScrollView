const { ccclass, property } = cc._decorator;

@ccclass
export default class item extends cc.Component {

    @property(cc.Label) label: cc.Label = null

    public show(info: any) {
        this.label.string = `${info.title}`
    }
}
