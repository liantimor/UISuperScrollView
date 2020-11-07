import UISuperLayout, { UISuperAxis } from './UISuperLayout';
const { ccclass, property } = cc._decorator;
@ccclass
export default class UISpuerItem extends cc.Component {
    private layout: UISuperLayout
    private refreshItemCallback: Function
    private isOutOfBoundaryTop: Function
    private isOutOfBoundaryBottom: Function

    onLoad() {
        this.node['getBounding'] = this.getBounding.bind(this)
    }
    public init(layout: UISuperLayout, refreshItemCallback: Function, isOutOfBoundaryTop: Function, isOutOfBoundaryBottom: Function) {
        this.layout = layout
        this.refreshItemCallback = refreshItemCallback
        this.isOutOfBoundaryTop = isOutOfBoundaryTop
        this.isOutOfBoundaryBottom = isOutOfBoundaryBottom
    }
    private getBounding() {
        this.node.parent['_updateWorldMatrix']()
        let width = this.node.getContentSize().width
        let height = this.node.getContentSize().height
        let rect = cc.rect(-this.node.getAnchorPoint().x * width, -this.node.getAnchorPoint().y * height, width, height)
        this.node['_calculWorldMatrix']();
        rect.transformMat4(rect, this.node['_worldMatrix']);
        return rect
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

    private relativePositionBottom(prevNode: cc.Node) {
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
    private relativePositionTop(prevNode: cc.Node) {
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
    private watchBrother() {
        let prevIndex = this.node.getSiblingIndex() - 1
        let prevNode = this.node.parent.children[prevIndex]
        this.relativePositionBottom(prevNode)
    }
    private watchSelf() {
        // 向下填充
        if (this.isUpdateHeader) {
            if (this.layout.footer['index'] + 1 == this.layout.maxItemTotal) return
            let offset = this.isOutOfBoundaryTop(this.node)
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = this.layout.footer['index'] + 1
                this.refreshItemCallback(this.node, this.node['index'])
                this.relativePositionBottom(this.layout.footer)
                this.node.setSiblingIndex(this.layout.node.childrenCount - 1)
            }
        }
        // 向上填充
        if (this.isUpdateFooter) {
            if (this.layout.header['index'] == 0) return
            let offset = this.isOutOfBoundaryBottom(this.node)
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = this.layout.header['index'] - 1
                this.refreshItemCallback(this.node, this.node['index'])
                this.relativePositionTop(this.layout.header)
                this.node.setSiblingIndex(0)
            }
        }
    }
    update(dt) {
        this.watchBrother()
        this.watchSelf()
    }
}
