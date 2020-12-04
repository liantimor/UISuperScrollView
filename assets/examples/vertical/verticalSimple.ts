import UISuperLayout from '../../cores/UISuperLayout';
import verticalItem from './verticalItem';
const { ccclass, property } = cc._decorator;
@ccclass
export default class verticalSimple extends cc.Component {

    @property(UISuperLayout) layout: UISuperLayout = null
    @property total: number = 500
    @property init: boolean = false
    private datas: any[] = []
    onLoad() {
        if (this.init) {
            for (let i = 0; i < this.total; i++) {
                this.datas.push({ message: `${this.datas.length}` })
            }
            this.layout.total(this.datas.length)
        }
        this.scheduleOnce(() => {
            this.layout.scrollView.node.width = this.layout.scrollView.node.width + 100
        }, 3)
    }

    private onRefreshEvent(node: cc.Node, index: number) {
        let info = this.datas[index]
        node.getComponent(verticalItem).show(info, index, this.onRemove.bind(this))
    }
    private onRemove(index: number) {
        this.datas.splice(index, 1)
        this.layout.total(this.datas.length)
    }
    private addItem(event: any, value: any) {
        for (let i = 0; i < value; i++) {
            this.datas.push({ message: `${this.datas.length}` })
        }
        this.layout.total(this.datas.length)
    }
    private gotoHeader() {
        this.layout.scrollToHeader(0.618)
    }
    private gotoFooter() {
        this.layout.scrollToFooter(0.618)
    }
    private gotoMain() {
        cc.director.loadScene('main')
    }
}
