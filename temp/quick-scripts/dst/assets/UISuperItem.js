
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/UISuperItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQyxPQUFPLENBQUMsR0FBRyxLQUFLLENBQUE7Z0JBRTFCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUU1QixJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQTtnQkFFMUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFBO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsNEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUEzSWdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0SS9CO0lBQUQsa0JBQUM7Q0E1SUQsQUE0SUMsQ0E1SXdDLEVBQUUsQ0FBQyxTQUFTLEdBNElwRDtrQkE1SW9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTdXBlckxheW91dCwgeyBVSVN1cGVyQXhpcyB9IGZyb20gJy4vVUlTdXBlckxheW91dCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3B1ZXJJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGxheW91dDogVUlTdXBlckxheW91dFxuICAgIHByaXZhdGUgcmVmcmVzaEl0ZW1DYWxsYmFjazogRnVuY3Rpb25cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsIHRoaXMucmVzZXRTY3JvbGxWaWV3LCB0aGlzKVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0NBTEVfQ0hBTkdFRCwgdGhpcy5yZXNldFNjcm9sbFZpZXcsIHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMucmVzZXRTY3JvbGxWaWV3LCB0aGlzKVxuICAgIH1cbiAgICBwcml2YXRlIHJlc2V0U2Nyb2xsVmlldygpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNGb290ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnJlc2V0U2Nyb2xsVmlldygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGluaXQobGF5b3V0OiBVSVN1cGVyTGF5b3V0LCByZWZyZXNoSXRlbUNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dFxuICAgICAgICB0aGlzLnJlZnJlc2hJdGVtQ2FsbGJhY2sgPSByZWZyZXNoSXRlbUNhbGxiYWNrXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLndpZHRoICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUodGhpcy5ub2RlLnNjYWxlWClcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmhlaWdodCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHRoaXMubm9kZS5zY2FsZVkpXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzSGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpID09IDBcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNGb290ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkgPT0gdGhpcy5sYXlvdXQubm9kZS5jaGlsZHJlbkNvdW50IC0gMVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc1VwZGF0ZUhlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS55ID4gMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS54IDwgMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc1VwZGF0ZUZvb3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS55IDwgMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS54ID4gMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5KG9mZnNldDogY2MuVmVjMikge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMICYmIG9mZnNldC55ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMICYmIG9mZnNldC54ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWxhdGl2ZVBvc2l0aW9uRm9vdGVyKHByZXZOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcHJldk5vZGUuaGVpZ2h0ICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVZKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAocHJldk5vZGUueSAtIChwcmV2SGVpZ2h0ICogcHJldk5vZGUuYW5jaG9yWSkpIC0gKHRoaXMuaGVpZ2h0ICogKDEgLSB0aGlzLm5vZGUuYW5jaG9yWSkpIC0gdGhpcy5sYXlvdXQuc3BhY2luZy55XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBvZmZzZXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldldpZHRoID0gcHJldk5vZGUud2lkdGggKiB0aGlzLmxheW91dC5nZXRVc2VkU2NhbGVWYWx1ZShwcmV2Tm9kZS5zY2FsZVgpXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IHByZXZOb2RlLnggKyAocHJldldpZHRoICogKDEgLSBwcmV2Tm9kZS5hbmNob3JYKSkgKyAodGhpcy53aWR0aCAqIHRoaXMubm9kZS5hbmNob3JYKSArIHRoaXMubGF5b3V0LnNwYWNpbmcueFxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gb2Zmc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZWxhdGl2ZVBvc2l0aW9uSGVhZGVyKHByZXZOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcHJldk5vZGUuaGVpZ2h0ICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVZKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwcmV2Tm9kZS55ICsgKHByZXZIZWlnaHQgKiAoMSAtIHByZXZOb2RlLmFuY2hvclkpKSArICh0aGlzLmhlaWdodCAqIHRoaXMubm9kZS5hbmNob3JZKSArIHRoaXMubGF5b3V0LnNwYWNpbmcueVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gb2Zmc2V0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZXaWR0aCA9IHByZXZOb2RlLndpZHRoICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVYKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwcmV2Tm9kZS54IC0gKHByZXZXaWR0aCAqIHByZXZOb2RlLmFuY2hvclgpIC0gKHRoaXMud2lkdGggKiAoMSAtIHRoaXMubm9kZS5hbmNob3JYKSkgLSB0aGlzLmxheW91dC5zcGFjaW5nLnhcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG9mZnNldFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOiuvue9ruiHquW3seebuOWvueS6juS4iuS4gOS4quWFhOW8n+iKgueCueeahOS9jee9rlxuICAgIHB1YmxpYyB3YXRjaEJyb3RoZXIoKSB7XG4gICAgICAgIGxldCBwcmV2SW5kZXggPSB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkgLSAxXG4gICAgICAgIGxldCBwcmV2Tm9kZSA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5bcHJldkluZGV4XVxuICAgICAgICB0aGlzLnJlbGF0aXZlUG9zaXRpb25Gb290ZXIocHJldk5vZGUpXG4gICAgfVxuICAgIHB1YmxpYyB3YXRjaFNlbGYoKSB7XG4gICAgICAgIC8vIOWQkeS4i+Whq+WFhVxuICAgICAgICBpZiAodGhpcy5pc1VwZGF0ZUhlYWRlcikge1xuXG4gICAgICAgICAgICBsZXQgZm9vdGVyID0gdGhpcy5sYXlvdXQuZm9vdGVyXG5cbiAgICAgICAgICAgIGxldCBpbmRleCA9IGZvb3RlclsnaW5kZXgnXSArIDFcblxuICAgICAgICAgICAgaWYgKGluZGV4ID09IHRoaXMubGF5b3V0Lm1heEl0ZW1Ub3RhbCkgcmV0dXJuXG5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmxheW91dC5pc091dE9mQm91bmRhcnlIZWFkZXIodGhpcy5ub2RlKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmRhcnkob2Zmc2V0KSkge1xuXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlWydpbmRleCddID0gaW5kZXhcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW1DYWxsYmFjayh0aGlzLm5vZGUsIGluZGV4KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZVBvc2l0aW9uRm9vdGVyKGZvb3RlcilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMubGF5b3V0Lm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5ZCR5LiK5aGr5YWFXG4gICAgICAgIGlmICh0aGlzLmlzVXBkYXRlRm9vdGVyKSB7XG5cbiAgICAgICAgICAgIGxldCBoZWFkZXIgPSB0aGlzLmxheW91dC5oZWFkZXJcblxuICAgICAgICAgICAgbGV0IGluZGV4ID0gaGVhZGVyWydpbmRleCddIC0gMVxuXG4gICAgICAgICAgICBpZiAoaW5kZXggPT0gLTEpIHJldHVyblxuXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5sYXlvdXQuaXNPdXRPZkJvdW5kYXJ5Rm9vdGVyKHRoaXMubm9kZSlcblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHtcblxuICAgICAgICAgICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IGluZGV4XG5cbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KDApXG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtQ2FsbGJhY2sodGhpcy5ub2RlLCBpbmRleClcblxuICAgICAgICAgICAgICAgIHRoaXMucmVsYXRpdmVQb3NpdGlvbkhlYWRlcihoZWFkZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMud2F0Y2hCcm90aGVyKClcbiAgICAgICAgdGhpcy53YXRjaFNlbGYoKVxuICAgIH1cbn1cbiJdfQ==