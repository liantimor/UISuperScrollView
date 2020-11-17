import UISuperLayout from '../../cores/UISuperLayout';
import chatItem from './chatItem';

const { ccclass, property } = cc._decorator;
@ccclass
export default class chatPanel extends cc.Component {
    @property(UISuperLayout) layout: UISuperLayout = null
    @property(cc.EditBox) input: cc.EditBox = null
    private aiMessages = [
        '你说啥?',
        '请说人话，谢谢!',
        '啊?',
        '啥呀?',
        '咋地了?',
        '什么情况?',
        '你不要搞事情哦'
    ]
    private messages: any[] = []
    private index = 0
    private async emit() {
        this.messages.push({
            type: "self",
            message: this.input.string || "?"
        })
        this.input.string = ""
        this.layout.total(this.messages.length)
        this.scheduleOnce(async () => {
            this.messages.push({
                type: "other",
                message: `${this.aiMessages[this.index++]}`
            })
            await this.layout.total(this.messages.length)
            this.layout.scrollToHeader()
            if (this.index == this.aiMessages.length) this.index = 0
        }, 1)
    }
    private refresh(node: cc.Node, index: number) {
        let info = this.messages[this.messages.length - 1 - index]
        let item = node.getComponent(chatItem)
        item.show(info)
    }
    private goMain() {
        cc.director.loadScene('main')
    }
}
