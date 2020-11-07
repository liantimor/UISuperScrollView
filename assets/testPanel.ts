import UISuperLayout from './UISuperLayout';
import item from './item';
const { ccclass, property } = cc._decorator;
@ccclass
export default class testPanel extends cc.Component {

    @property(UISuperLayout) layout: UISuperLayout = null
    private isRandomHeight: boolean = false
    private isRandomWidth: boolean = false
    // 模拟数据总数
    private total: number = 10000
    private datas: any[] = []
    onLoad() {
        for (let i = 0; i < this.total; i++) {
            this.datas.push({
                title: `${i}`,
                randomWidth: 100 * (1 + Math.random()),
                randomHeight: 100 * (1 + Math.random()),
            })
        }
        this.layout.total(this.datas.length)
    }
    // 刷新数据
    refreshItemEvent(node: cc.Node, index: number) {
        let info = this.datas[index]
        node.getComponent(item).show(info)
        if (this.isRandomHeight) {
            node.height = info.randomHeight
        }
        if (this.isRandomWidth) {
            node.width = info.randomWidth
        }
    }

    toHeader() {
        this.layout.scrollToHeader(0.5)
    }
    toFooter() {
        this.layout.scrollToFooter(0.5)
    }
    addItem() {
        // 测试代码 添加数据
        this.datas.push({
            title: `${this.datas.length}`,
            randomWidth: 100 * (1 + Math.random()),
            randomHeight: 100 * (1 + Math.random()),
        })
        cc.log("添加数据 当前总数:", this.datas.length)
        this.layout.total(this.datas.length)
    }
    remItem() {
        // 测试代码 删除数据
        this.datas.pop()
        cc.log("删除数据 当前总数:", this.datas.length)
        this.layout.total(this.datas.length)
    }

    randomHeight() {
        // 测试代码 随机尺寸
        this.isRandomHeight = !this.isRandomHeight
        this.toHeader()
    }
    randomWidth() {
        // 测试代码 随机尺寸
        this.isRandomWidth = !this.isRandomWidth
        this.toHeader()
    }
}
