import UISuperLayout, { UISuperAxis } from './UISuperLayout';
const { ccclass, property } = cc._decorator;
@ccclass
export default class UISpuerItem extends cc.Component {
    private layout: UISuperLayout
    private refreshItemCallback: Function

    onLoad() {
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this)
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this)
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this)
    }
    private resetScrollView() {
        if (this.isFooter) {
            this.layout.resetScrollView()
        }
    }
    public init(layout: UISuperLayout, refreshItemCallback: Function) {
        this.layout = layout
        this.refreshItemCallback = refreshItemCallback
    }
    private get width() {
        return this.node.width * this.layout.getUsedScaleValue(this.node.scaleX)
    }
    private get height() {
        return this.node.height * this.layout.getUsedScaleValue(this.node.scaleY)
    }
    private get isHeader() {
        return this.node.getSiblingIndex() == 0
    }
    private get isFooter() {
        return this.node.getSiblingIndex() == this.layout.node.childrenCount - 1
    }
    private get isUpdateHeader() {
        if (this.layout.startAxis == UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y > 0 && this.isHeader) {
            return true
        }
        if (this.layout.startAxis == UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x < 0 && this.isHeader) {
            return true
        }
        return false
    }
    private get isUpdateFooter() {
        if (this.layout.startAxis == UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y < 0 && this.isFooter) {
            return true
        }
        if (this.layout.startAxis == UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x > 0 && this.isFooter) {
            return true
        }
        return false
    }

    private isOutOfBoundary(offset: cc.Vec2) {
        if (this.layout.startAxis == UISuperAxis.VERTICAL && offset.y == 0) {
            return true
        }
        if (this.layout.startAxis == UISuperAxis.HORIZONTAL && offset.x == 0) {
            return true
        }
        return false
    }

    private relativePositionFooter(prevNode: cc.Node) {
        if (prevNode) {
            if (this.layout.startAxis == UISuperAxis.VERTICAL) {
                let prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY)
                let offset = (prevNode.y - (prevHeight * prevNode.anchorY)) - (this.height * (1 - this.node.anchorY)) - this.layout.spacing.y
                this.node.y = offset
            } else if (this.layout.startAxis == UISuperAxis.HORIZONTAL) {
                let prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX)
                let offset = prevNode.x + (prevWidth * (1 - prevNode.anchorX)) + (this.width * this.node.anchorX) + this.layout.spacing.x
                this.node.x = offset
            }
        }
    }
    private relativePositionHeader(prevNode: cc.Node) {
        if (prevNode) {
            if (this.layout.startAxis == UISuperAxis.VERTICAL) {
                let prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY)
                let offset = prevNode.y + (prevHeight * (1 - prevNode.anchorY)) + (this.height * this.node.anchorY) + this.layout.spacing.y
                this.node.y = offset
            } else if (this.layout.startAxis == UISuperAxis.HORIZONTAL) {
                let prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX)
                let offset = prevNode.x - (prevWidth * prevNode.anchorX) - (this.width * (1 - this.node.anchorX)) - this.layout.spacing.x
                this.node.x = offset
            }
        }
    }
    // 设置自己相对于上一个兄弟节点的位置
    public watchBrother() {
        let prevIndex = this.node.getSiblingIndex() - 1
        let prevNode = this.node.parent.children[prevIndex]
        this.relativePositionFooter(prevNode)
    }
    public watchSelf() {
        // 向下填充
        if (this.isUpdateHeader) {

            let footer = this.layout.footer

            let index = footer['index'] + 1

            if (index == this.layout.maxItemTotal) return

            let offset = this.layout.isOutOfBoundaryHeader(this.node)

            if (this.isOutOfBoundary(offset)) {

                this.node['index'] = index

                this.refreshItemCallback(this.node, index)

                this.relativePositionFooter(footer)
                this.node.setSiblingIndex(this.layout.node.childrenCount - 1)
            }
        }
        // 向上填充
        if (this.isUpdateFooter) {

            let header = this.layout.header

            let index = header['index'] - 1

            if (index == -1) return

            let offset = this.layout.isOutOfBoundaryFooter(this.node)

            if (this.isOutOfBoundary(offset)) {

                this.node['index'] = index

                this.node.setSiblingIndex(0)

                this.refreshItemCallback(this.node, index)

                this.relativePositionHeader(header)
            }
        }
    }
    update(dt) {
        this.watchBrother()
        this.watchSelf()
    }
}
