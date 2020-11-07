
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
        this.node['getBounding'] = this.getBounding.bind(this);
    };
    UISpuerItem.prototype.init = function (layout, refreshItemCallback, isOutOfBoundaryTop, isOutOfBoundaryBottom) {
        this.layout = layout;
        this.refreshItemCallback = refreshItemCallback;
        this.isOutOfBoundaryTop = isOutOfBoundaryTop;
        this.isOutOfBoundaryBottom = isOutOfBoundaryBottom;
    };
    UISpuerItem.prototype.getBounding = function () {
        this.node.parent['_updateWorldMatrix']();
        var width = this.node.getContentSize().width;
        var height = this.node.getContentSize().height;
        var rect = cc.rect(-this.node.getAnchorPoint().x * width, -this.node.getAnchorPoint().y * height, width, height);
        this.node['_calculWorldMatrix']();
        rect.transformMat4(rect, this.node['_worldMatrix']);
        return rect;
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
    UISpuerItem.prototype.relativePositionBottom = function (prevNode) {
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
    UISpuerItem.prototype.relativePositionTop = function (prevNode) {
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
    UISpuerItem.prototype.watchBrother = function () {
        var prevIndex = this.node.getSiblingIndex() - 1;
        var prevNode = this.node.parent.children[prevIndex];
        this.relativePositionBottom(prevNode);
    };
    UISpuerItem.prototype.watchSelf = function () {
        // 向下填充
        if (this.isUpdateHeader) {
            if (this.layout.footer['index'] + 1 == this.layout.maxItemTotal)
                return;
            var offset = this.isOutOfBoundaryTop(this.node);
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = this.layout.footer['index'] + 1;
                this.refreshItemCallback(this.node, this.node['index']);
                this.relativePositionBottom(this.layout.footer);
                this.node.setSiblingIndex(this.layout.node.childrenCount - 1);
            }
        }
        // 向上填充
        if (this.isUpdateFooter) {
            if (this.layout.header['index'] == 0)
                return;
            var offset = this.isOutOfBoundaryBottom(this.node);
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = this.layout.header['index'] - 1;
                this.refreshItemCallback(this.node, this.node['index']);
                this.relativePositionTop(this.layout.header);
                this.node.setSiblingIndex(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9VSVN1cGVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNkQ7QUFDdkQsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBNEhBLENBQUM7SUF0SEcsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUNNLDBCQUFJLEdBQVgsVUFBWSxNQUFxQixFQUFFLG1CQUE2QixFQUFFLGtCQUE0QixFQUFFLHFCQUErQjtRQUMzSCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQTtRQUNwQixJQUFJLENBQUMsbUJBQW1CLEdBQUcsbUJBQW1CLENBQUE7UUFDOUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFBO1FBQzVDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxxQkFBcUIsQ0FBQTtJQUN0RCxDQUFDO0lBQ08saUNBQVcsR0FBbkI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUE7UUFDeEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxLQUFLLENBQUE7UUFDNUMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLENBQUE7UUFDOUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDaEgsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNELHNCQUFZLDhCQUFLO2FBQWpCO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDNUUsQ0FBQzs7O09BQUE7SUFDRCxzQkFBWSwrQkFBTTthQUFsQjtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzdFLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVksaUNBQVE7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzNDLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVksaUNBQVE7YUFBcEI7WUFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQTtRQUM1RSxDQUFDOzs7T0FBQTtJQUNELHNCQUFZLHVDQUFjO2FBQTFCO1lBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBVyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUMxRyxPQUFPLElBQUksQ0FBQTthQUNkO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBVyxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM1RyxPQUFPLElBQUksQ0FBQTthQUNkO1lBQ0QsT0FBTyxLQUFLLENBQUE7UUFDaEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBWSx1Q0FBYzthQUExQjtZQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksMkJBQVcsQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDMUcsT0FBTyxJQUFJLENBQUE7YUFDZDtZQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksMkJBQVcsQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDNUcsT0FBTyxJQUFJLENBQUE7YUFDZDtZQUNELE9BQU8sS0FBSyxDQUFBO1FBQ2hCLENBQUM7OztPQUFBO0lBRU8scUNBQWUsR0FBdkIsVUFBd0IsTUFBZTtRQUNuQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFXLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hFLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFXLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2xFLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBRU8sNENBQXNCLEdBQTlCLFVBQStCLFFBQWlCO1FBQzVDLElBQUksUUFBUSxFQUFFO1lBQ1YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBVyxDQUFDLFFBQVEsRUFBRTtnQkFDL0MsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDakYsSUFBSSxNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dCQUM3SCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUE7YUFDdkI7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBVyxDQUFDLFVBQVUsRUFBRTtnQkFDeEQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDL0UsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3pILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQTthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQUNPLHlDQUFtQixHQUEzQixVQUE0QixRQUFpQjtRQUN6QyxJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksMkJBQVcsQ0FBQyxRQUFRLEVBQUU7Z0JBQy9DLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQ2pGLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dCQUMzSCxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUE7YUFDdkI7aUJBQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsSUFBSSwyQkFBVyxDQUFDLFVBQVUsRUFBRTtnQkFDeEQsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDL0UsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7Z0JBQ3pILElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQTthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQUNPLGtDQUFZLEdBQXBCO1FBQ0ksSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxDQUFDLENBQUE7UUFDL0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ25ELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBQ08sK0JBQVMsR0FBakI7UUFDSSxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWTtnQkFBRSxPQUFNO1lBQ3ZFLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDL0MsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDcEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dCQUN2RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDL0MsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFBO2FBQ2hFO1NBQ0o7UUFDRCxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFNO1lBQzVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDcEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dCQUN2RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDL0I7U0FDSjtJQUNMLENBQUM7SUFDRCw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQTNIZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQTRIL0I7SUFBRCxrQkFBQztDQTVIRCxBQTRIQyxDQTVId0MsRUFBRSxDQUFDLFNBQVMsR0E0SHBEO2tCQTVIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVN1cGVyTGF5b3V0LCB7IFVJU3VwZXJBeGlzIH0gZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTcHVlckl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgbGF5b3V0OiBVSVN1cGVyTGF5b3V0XG4gICAgcHJpdmF0ZSByZWZyZXNoSXRlbUNhbGxiYWNrOiBGdW5jdGlvblxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5VG9wOiBGdW5jdGlvblxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5Qm90dG9tOiBGdW5jdGlvblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGVbJ2dldEJvdW5kaW5nJ10gPSB0aGlzLmdldEJvdW5kaW5nLmJpbmQodGhpcylcbiAgICB9XG4gICAgcHVibGljIGluaXQobGF5b3V0OiBVSVN1cGVyTGF5b3V0LCByZWZyZXNoSXRlbUNhbGxiYWNrOiBGdW5jdGlvbiwgaXNPdXRPZkJvdW5kYXJ5VG9wOiBGdW5jdGlvbiwgaXNPdXRPZkJvdW5kYXJ5Qm90dG9tOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dFxuICAgICAgICB0aGlzLnJlZnJlc2hJdGVtQ2FsbGJhY2sgPSByZWZyZXNoSXRlbUNhbGxiYWNrXG4gICAgICAgIHRoaXMuaXNPdXRPZkJvdW5kYXJ5VG9wID0gaXNPdXRPZkJvdW5kYXJ5VG9wXG4gICAgICAgIHRoaXMuaXNPdXRPZkJvdW5kYXJ5Qm90dG9tID0gaXNPdXRPZkJvdW5kYXJ5Qm90dG9tXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0Qm91bmRpbmcoKSB7XG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnRbJ191cGRhdGVXb3JsZE1hdHJpeCddKClcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGhcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSgpLmhlaWdodFxuICAgICAgICBsZXQgcmVjdCA9IGNjLnJlY3QoLXRoaXMubm9kZS5nZXRBbmNob3JQb2ludCgpLnggKiB3aWR0aCwgLXRoaXMubm9kZS5nZXRBbmNob3JQb2ludCgpLnkgKiBoZWlnaHQsIHdpZHRoLCBoZWlnaHQpXG4gICAgICAgIHRoaXMubm9kZVsnX2NhbGN1bFdvcmxkTWF0cml4J10oKTtcbiAgICAgICAgcmVjdC50cmFuc2Zvcm1NYXQ0KHJlY3QsIHRoaXMubm9kZVsnX3dvcmxkTWF0cml4J10pO1xuICAgICAgICByZXR1cm4gcmVjdFxuICAgIH1cbiAgICBwcml2YXRlIGdldCB3aWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS53aWR0aCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHRoaXMubm9kZS5zY2FsZVgpXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5oZWlnaHQgKiB0aGlzLmxheW91dC5nZXRVc2VkU2NhbGVWYWx1ZSh0aGlzLm5vZGUuc2NhbGVZKVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc0hlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSA9PSAwXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzRm9vdGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpID09IHRoaXMubGF5b3V0Lm5vZGUuY2hpbGRyZW5Db3VudCAtIDFcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNVcGRhdGVIZWFkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwgJiYgdGhpcy5sYXlvdXQuc2Nyb2xsVmlldy5kZWx0YU1vdmUueSA+IDAgJiYgdGhpcy5pc0hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLkhPUklaT05UQUwgJiYgdGhpcy5sYXlvdXQuc2Nyb2xsVmlldy5kZWx0YU1vdmUueCA8IDAgJiYgdGhpcy5pc0hlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNVcGRhdGVGb290ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwgJiYgdGhpcy5sYXlvdXQuc2Nyb2xsVmlldy5kZWx0YU1vdmUueSA8IDAgJiYgdGhpcy5pc0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLkhPUklaT05UQUwgJiYgdGhpcy5sYXlvdXQuc2Nyb2xsVmlldy5kZWx0YU1vdmUueCA+IDAgJiYgdGhpcy5pc0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwcml2YXRlIGlzT3V0T2ZCb3VuZGFyeShvZmZzZXQ6IGNjLlZlYzIpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCAmJiBvZmZzZXQueSA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCAmJiBvZmZzZXQueCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVsYXRpdmVQb3NpdGlvbkJvdHRvbShwcmV2Tm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAocHJldk5vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldkhlaWdodCA9IHByZXZOb2RlLmhlaWdodCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHByZXZOb2RlLnNjYWxlWSlcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gKHByZXZOb2RlLnkgLSAocHJldkhlaWdodCAqIHByZXZOb2RlLmFuY2hvclkpKSAtICh0aGlzLmhlaWdodCAqICgxIC0gdGhpcy5ub2RlLmFuY2hvclkpKSAtIHRoaXMubGF5b3V0LnNwYWNpbmcueVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gb2Zmc2V0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZXaWR0aCA9IHByZXZOb2RlLndpZHRoICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVYKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwcmV2Tm9kZS54ICsgKHByZXZXaWR0aCAqICgxIC0gcHJldk5vZGUuYW5jaG9yWCkpICsgKHRoaXMud2lkdGggKiB0aGlzLm5vZGUuYW5jaG9yWCkgKyB0aGlzLmxheW91dC5zcGFjaW5nLnhcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG9mZnNldFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVsYXRpdmVQb3NpdGlvblRvcChwcmV2Tm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAocHJldk5vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldkhlaWdodCA9IHByZXZOb2RlLmhlaWdodCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHByZXZOb2RlLnNjYWxlWSlcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcHJldk5vZGUueSArIChwcmV2SGVpZ2h0ICogKDEgLSBwcmV2Tm9kZS5hbmNob3JZKSkgKyAodGhpcy5oZWlnaHQgKiB0aGlzLm5vZGUuYW5jaG9yWSkgKyB0aGlzLmxheW91dC5zcGFjaW5nLnlcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IG9mZnNldFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCkge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2V2lkdGggPSBwcmV2Tm9kZS53aWR0aCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHByZXZOb2RlLnNjYWxlWClcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcHJldk5vZGUueCAtIChwcmV2V2lkdGggKiBwcmV2Tm9kZS5hbmNob3JYKSAtICh0aGlzLndpZHRoICogKDEgLSB0aGlzLm5vZGUuYW5jaG9yWCkpIC0gdGhpcy5sYXlvdXQuc3BhY2luZy54XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBvZmZzZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHdhdGNoQnJvdGhlcigpIHtcbiAgICAgICAgbGV0IHByZXZJbmRleCA9IHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKSAtIDFcbiAgICAgICAgbGV0IHByZXZOb2RlID0gdGhpcy5ub2RlLnBhcmVudC5jaGlsZHJlbltwcmV2SW5kZXhdXG4gICAgICAgIHRoaXMucmVsYXRpdmVQb3NpdGlvbkJvdHRvbShwcmV2Tm9kZSlcbiAgICB9XG4gICAgcHJpdmF0ZSB3YXRjaFNlbGYoKSB7XG4gICAgICAgIC8vIOWQkeS4i+Whq+WFhVxuICAgICAgICBpZiAodGhpcy5pc1VwZGF0ZUhlYWRlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmZvb3RlclsnaW5kZXgnXSArIDEgPT0gdGhpcy5sYXlvdXQubWF4SXRlbVRvdGFsKSByZXR1cm5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmlzT3V0T2ZCb3VuZGFyeVRvcCh0aGlzLm5vZGUpXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmRhcnkob2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IHRoaXMubGF5b3V0LmZvb3RlclsnaW5kZXgnXSArIDFcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtQ2FsbGJhY2sodGhpcy5ub2RlLCB0aGlzLm5vZGVbJ2luZGV4J10pXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZVBvc2l0aW9uQm90dG9tKHRoaXMubGF5b3V0LmZvb3RlcilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMubGF5b3V0Lm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5ZCR5LiK5aGr5YWFXG4gICAgICAgIGlmICh0aGlzLmlzVXBkYXRlRm9vdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaGVhZGVyWydpbmRleCddID09IDApIHJldHVyblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuaXNPdXRPZkJvdW5kYXJ5Qm90dG9tKHRoaXMubm9kZSlcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZGFyeShvZmZzZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlWydpbmRleCddID0gdGhpcy5sYXlvdXQuaGVhZGVyWydpbmRleCddIC0gMVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW1DYWxsYmFjayh0aGlzLm5vZGUsIHRoaXMubm9kZVsnaW5kZXgnXSlcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGF0aXZlUG9zaXRpb25Ub3AodGhpcy5sYXlvdXQuaGVhZGVyKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy53YXRjaEJyb3RoZXIoKVxuICAgICAgICB0aGlzLndhdGNoU2VsZigpXG4gICAgfVxufVxuIl19