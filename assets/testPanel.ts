import UISuperLayout, { UISuperAxis } from './UISuperLayout';
import item from './item';
import UISpuerScrollView from './UISuperScrollView';
const { ccclass, property } = cc._decorator;
@ccclass
export default class testPanel extends cc.Component {

    @property(UISuperLayout) layout: UISuperLayout = null
    @property(cc.Node) header: cc.Node = null
    @property(cc.Node) refreshing: cc.Node = null
    @property(cc.Node) footer: cc.Node = null
    @property(cc.Node) loading: cc.Node = null
    private isRandomHeight: boolean = false
    private isRandomWidth: boolean = false
    // 模拟数据总数
    private total: number = 0
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
        if (this.isRandomHeight) {
            node.height = info.randomHeight
        }
        if (this.isRandomWidth) {
            node.width = info.randomWidth
        }
        node.getComponent(item).show(info, index, this.onRemoveItem.bind(this))
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
    /**
    * 下拉刷新
    * 核心代码 请看 第一步 第二步 其余的都是一些的效果测试代码 你可以自己实现任何效果
    */

    pullDownRefresh(scroll: UISpuerScrollView, event: { refresh: boolean, progress: number }) {
        // 模拟代码  一些UI效果
        this.playAnim(this.header, event, '松开刷新哦', '继续滑')

        // event.refresh=true 代表需要刷新数据
        if (event.refresh) {
            cc.log("开始异步刷新数据")
            this.refreshing.active = true
            // 第一步  模拟刷新数据
            for (let i = 0; i < this.datas.length; i++) {
                const data = this.datas[i];
                this.datas[i].title = `${data.title} - ${i}`
            }
            // 模拟异步延迟
            setTimeout(() => {
                this.refreshing.active = false
                // 第二步 刷新
                cc.log("刷新成功！")
                this.layout.total(this.datas.length)
            }, 1000)
        }
    }
    /**
     * 上拉加载
     * 核心代码 请看 第一步 第二步 其余的都是一些的效果测试代码 你可以自己实现任何效果
     */
    pullUpLoad(scroll: UISpuerScrollView, event: { refresh: boolean, progress: number }) {
        // 模拟代码 一些UI效果
        this.playAnim(this.footer, event, '松开加载更多', '继续滑')
        // event.refresh=true 代表需要加载数据
        if (event.refresh) {
            cc.log("开始异步加载10条数据")

            this.loading.active = true
            // 第一步  模拟增加10条数据
            for (let i = 0; i < 10; i++) {
                this.datas.push({
                    title: `${this.datas.length}`,
                    randomWidth: 100 * (1 + Math.random()),
                    randomHeight: 100 * (1 + Math.random()),
                })
            }
            // 模拟异步延迟加载
            setTimeout(() => {
                this.loading.active = false
                // 第二步 刷新
                cc.log("数据加载成功！")
                this.layout.total(this.datas.length)
            }, 1000)
        }
    }
    onRemoveItem(index: number) {
        // 删除点击的那条数据
        this.datas.splice(index, 1)
        // 刷新
        this.layout.total(this.datas.length)
    }

    /** 测试代码 */
    private playAnim(node: cc.Node, event: { refresh: boolean, progress: number }, msg1: string, msg2: string) {
        node.opacity = event.progress * 255
        let scale = this.layout.startAxis == UISuperAxis.VERTICAL ? cc.v2(1, event.progress) : cc.v2(event.progress, 1)
        if (event.progress >= 1) {
            node.getComponentInChildren(cc.Label).string = msg1
        } else {
            node.getComponentInChildren(cc.Label).string = msg2
        }
        if (event.progress >= 1.3) {
            if (!node['playing']) {
                node.runAction(cc.scaleTo(0.618, 1, 1).easing(cc.easeElasticOut(0.236)))
                node['playing'] = true
            }
        } else {
            node.stopAllActions()
            node['playing'] = false
            node.setScale(scale)
        }
    }
    overScene(event: any, scene: string) {
        cc.director.loadScene(scene)
    }


}
