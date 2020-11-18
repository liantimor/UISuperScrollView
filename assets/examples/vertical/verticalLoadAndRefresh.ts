import UISuperLayout from '../../cores/UISuperLayout';
import { UISuperHeaderAndFooterEvent } from '../../cores/UISuperScrollView';
import verticalItem from './verticalItem';
const { ccclass, property } = cc._decorator;
@ccclass
export default class verticalLoadAndRefresh extends cc.Component {
    @property(cc.Node) header: cc.Node = null
    @property(cc.Node) footer: cc.Node = null
    @property(UISuperLayout) layout: UISuperLayout = null
    private refreshTotal: number = 1
    private total = 10
    private datas: any[] = []
    onLoad() {
        this.header.scaleY = 0
        this.footer.scaleY = 0
    }
    private onRefreshEvent(node: cc.Node, index: number) {
        /**
         * 如果你感觉每次都要getComponent获取脚本很麻烦或性能不佳时可以这么做
         * 方法一
         * 在verticalItem脚本中使用 this.node.on("show",this.show,this) 来监听
         * 这里使用 node.emit("show",info)发送事件
         * 
         * 方法二
         * 在verticalItem脚本中使用 this.node["show"]=this.show.bind(this) 来向node写入一个自定义方法
         * 这里使用 node["show"](info) 来调用
         * 
         * 这两种方法都省去了 getComponent 的调用 不过方法二看起来不是很美 但却很方便 我就经常这么做😂
         */
        let info = this.datas[index]
        node.getComponent(verticalItem).show(info, index, this.onRemove.bind(this))
    }
    private onRemove(index: number) {
        this.datas.splice(index, 1)
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

    private onHeaderEvent(scrollView: any, event: UISuperHeaderAndFooterEvent) {
        this.header.opacity = event.progress * 255
        let label = this.header.getComponentInChildren(cc.Label)
        if (event.progressStage == "touch") {
            label.string = "↓ 下拉刷新"
        }
        if (event.progressStage == "wait") {
            label.string = "↑ 松开刷新"
        }
        if (event.progressStage == "lock") {
            label.string = this.datas.length == 0 ? "没有数据" : "刷新中..."
        }
        if (event.progressStage == 'release') {
            label.string = ""
        }
        if (event.progress > 2) {
            if (!this.header['playing']) {
                this.header.runAction(cc.scaleTo(0.618, 1, 1).easing(cc.easeElasticOut(0.236)))
                this.header['playing'] = true
            }
        } else {
            this.header.stopAllActions()
            this.header['playing'] = false
            this.header.scaleY = event.progress
        }
        if (event.action) {
            for (let i = 0; i < this.datas.length; i++) {
                const info = this.datas[i];
                info.message = `${i} - (刷新次数${this.refreshTotal})`
            }
            this.scheduleOnce(() => this.layout.total(this.datas.length), 0.5)
            this.refreshTotal++
        }
    }

    private onFooterEvent(scrollView: any, event: UISuperHeaderAndFooterEvent) {
        this.footer.opacity = event.progress * 255
        let label = this.footer.getComponentInChildren(cc.Label)

        if (event.progressStage == "touch") {
            label.string = "↑ 上拉加载"
        }
        if (event.progressStage == "wait") {
            label.string = "↓ 松开加载"
        }
        if (event.progressStage == "lock") {
            label.string = "加载中..."
        }
        if (event.progressStage == 'release') {
            label.string = ""
        }
        if (event.progress > 2) {
            if (!this.footer['playing']) {
                this.footer.runAction(cc.scaleTo(0.618, 1, 1).easing(cc.easeElasticOut(0.236)))
                this.footer['playing'] = true
            }
        } else {
            this.footer.stopAllActions()
            this.footer['playing'] = false
            this.footer.scaleY = event.progress
        }
        if (event.action) {
            for (let i = 0; i < this.total; i++) {
                this.datas.push({ message: `${this.datas.length}` })
            }
            this.scheduleOnce(() => this.layout.total(this.datas.length), 0.5)
        }
    }
}
