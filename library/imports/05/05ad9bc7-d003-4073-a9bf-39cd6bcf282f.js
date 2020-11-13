"use strict";
cc._RF.push(module, '05ad9vH0ANAc6m/Oc1rzygv', 'UISuperItem');
// UISuperItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UISuperLayout_1 = require("./UISuperLayout");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISpuerItem = /** @class */ (function (_super) {
    __extends(UISpuerItem, _super);
    function UISpuerItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UISpuerItem.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
    };
    UISpuerItem.prototype.resetScrollView = function () {
        if (this.isFooter) {
            this.layout.resetScrollView();
        }
    };
    UISpuerItem.prototype.init = function (layout, refreshItemCallback) {
        this.layout = layout;
        this.refreshItemCallback = refreshItemCallback;
    };
    Object.defineProperty(UISpuerItem.prototype, "width", {
        get: function () {
            return this.node.width * this.layout.getUsedScaleValue(this.node.scaleX);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "height", {
        get: function () {
            return this.node.height * this.layout.getUsedScaleValue(this.node.scaleY);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "isHeader", {
        get: function () {
            return this.node.getSiblingIndex() == 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "isFooter", {
        get: function () {
            return this.node.getSiblingIndex() == this.layout.node.childrenCount - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "isUpdateHeader", {
        get: function () {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y > 0 && this.isHeader) {
                return true;
            }
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x < 0 && this.isHeader) {
                return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "isUpdateFooter", {
        get: function () {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y < 0 && this.isFooter) {
                return true;
            }
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x > 0 && this.isFooter) {
                return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    UISpuerItem.prototype.isOutOfBoundary = function (offset) {
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && offset.y == 0) {
            return true;
        }
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && offset.x == 0) {
            return true;
        }
        return false;
    };
    UISpuerItem.prototype.relativePositionFooter = function (prevNode) {
        if (prevNode) {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
                var prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY);
                var offset = (prevNode.y - (prevHeight * prevNode.anchorY)) - (this.height * (1 - this.node.anchorY)) - this.layout.spacing.y;
                this.node.y = offset;
            }
            else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
                var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
                var offset = prevNode.x + (prevWidth * (1 - prevNode.anchorX)) + (this.width * this.node.anchorX) + this.layout.spacing.x;
                this.node.x = offset;
            }
        }
    };
    UISpuerItem.prototype.relativePositionHeader = function (prevNode) {
        if (prevNode) {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
                var prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY);
                var offset = prevNode.y + (prevHeight * (1 - prevNode.anchorY)) + (this.height * this.node.anchorY) + this.layout.spacing.y;
                this.node.y = offset;
            }
            else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
                var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
                var offset = prevNode.x - (prevWidth * prevNode.anchorX) - (this.width * (1 - this.node.anchorX)) - this.layout.spacing.x;
                this.node.x = offset;
            }
        }
    };
    // 设置自己相对于上一个兄弟节点的位置
    UISpuerItem.prototype.watchBrother = function () {
        var prevIndex = this.node.getSiblingIndex() - 1;
        var prevNode = this.node.parent.children[prevIndex];
        this.relativePositionFooter(prevNode);
    };
    UISpuerItem.prototype.watchSelf = function () {
        // 向下填充
        if (this.isUpdateHeader) {
            var footer = this.layout.footer;
            var index = footer['index'] + 1;
            if (index == this.layout.maxItemTotal)
                return;
            var offset = this.layout.isOutOfBoundaryHeader(this.node);
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = index;
                this.refreshItemCallback(this.node, index);
                this.relativePositionFooter(footer);
                this.node.setSiblingIndex(this.layout.node.childrenCount - 1);
            }
        }
        // 向上填充
        if (this.isUpdateFooter) {
            var header = this.layout.header;
            var index = header['index'] - 1;
            if (index == -1)
                return;
            var offset = this.layout.isOutOfBoundaryFooter(this.node);
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = index;
                this.node.setSiblingIndex(0);
                this.refreshItemCallback(this.node, index);
                this.relativePositionHeader(header);
            }
        }
    };
    UISpuerItem.prototype.update = function (dt) {
        this.watchBrother();
        this.watchSelf();
    };
    UISpuerItem = __decorate([
        ccclass
    ], UISpuerItem);
    return UISpuerItem;
}(cc.Component));
exports.default = UISpuerItem;

cc._RF.pop();