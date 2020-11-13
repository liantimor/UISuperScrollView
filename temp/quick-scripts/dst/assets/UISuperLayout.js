
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/UISuperLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '699eb1xVINCcZBBHwAgwDBT', 'UISuperLayout');
// UISuperLayout.ts

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
exports.UISuperAxis = void 0;
var UISuperScrollView_1 = require("./UISuperScrollView");
var UISuperItem_1 = require("./UISuperItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISuperAxis;
(function (UISuperAxis) {
    UISuperAxis[UISuperAxis["HORIZONTAL"] = 0] = "HORIZONTAL";
    UISuperAxis[UISuperAxis["VERTICAL"] = 1] = "VERTICAL";
})(UISuperAxis = exports.UISuperAxis || (exports.UISuperAxis = {}));
var UISuperLayout = /** @class */ (function (_super) {
    __extends(UISuperLayout, _super);
    function UISuperLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startAxis = UISuperAxis.VERTICAL;
        _this.paddingTop = 0;
        _this.paddingBottom = 0;
        _this.paddingLeft = 0;
        _this.paddingRight = 0;
        _this.spacing = cc.Vec2.ZERO;
        _this.maxPrefabTotal = 20;
        _this.prefab = null;
        _this.affectedByScale = true;
        _this.childBoundingBox = false;
        _this.refreshItemEvents = [];
        _this.maxItemTotal = 0;
        _this._scrollView = null;
        return _this;
    }
    Object.defineProperty(UISuperLayout.prototype, "viewSize", {
        get: function () {
            if (!this._viewSize) {
                this._viewSize = this.scrollView.view.getContentSize();
            }
            return this._viewSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "scrollView", {
        get: function () {
            if (!this._scrollView) {
                this._scrollView = this.node.parent.parent.getComponent(UISuperScrollView_1.default);
            }
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "header", {
        get: function () {
            return this.node.children[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footer", {
        get: function () {
            return this.node.children[this.node.childrenCount - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerBoundaryX", {
        get: function () {
            return this.node.x + this.header.x - this.header.anchorX * this.header.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerBoundaryY", {
        get: function () {
            return this.node.y + this.header.y + (1 - this.header.anchorY) * this.header.height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerBoundaryX", {
        get: function () {
            return this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.footer.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerBoundaryY", {
        get: function () {
            return this.node.y + this.footer.y - this.footer.anchorY * this.footer.height;
        },
        enumerable: false,
        configurable: true
    });
    // 重写
    UISuperLayout.prototype.getContentSize = function () {
        var size = this.getReallySize();
        var viewSize = this.scrollView.view.getContentSize();
        if (size.height < viewSize.height) {
            size.height = viewSize.height;
        }
        if (size.width < viewSize.width) {
            size.width = viewSize.width;
        }
        return size;
    };
    UISuperLayout.prototype.getReallySize = function () {
        if (this.node.childrenCount == 0) {
            return this.viewSize;
        }
        var size = cc.Size.ZERO;
        size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight;
        size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom;
        return size;
    };
    UISuperLayout.prototype.onLoad = function () {
        this.node.getContentSize = this.getContentSize.bind(this);
    };
    UISuperLayout.prototype.getUsedScaleValue = function (value) {
        return this.affectedByScale ? Math.abs(value) : 1;
    };
    /** 设置最大item数量 */
    UISuperLayout.prototype.total = function (value) {
        this.scrollView.stopAutoScroll();
        this.scrollView.release();
        this.maxItemTotal = value;
        this.moreRemLessAdd();
        var offset = 0;
        if (this.footer && this.footer['index'] + 1 >= this.maxItemTotal) {
            offset = this.footer['index'] + 1 - this.maxItemTotal;
        }
        for (var i = 0; i < this.node.children.length; i++) {
            var child = this.node.children[i];
            var index = child['index'] - offset;
            child['index'] = index;
            this.refreshItem(child, child['index']);
        }
        this.scrollView.calculateBoundary();
        return this;
    };
    /** 滚动到头部 */
    UISuperLayout.prototype.scrollToHeader = function (timeInSecond, attenuated) {
        if (this.startAxis == UISuperAxis.VERTICAL) {
            this.scrollToTop(timeInSecond, attenuated);
        }
        else {
            this.scrollToLeft(timeInSecond, attenuated);
        }
    };
    /** 滚动到尾部 */
    UISuperLayout.prototype.scrollToFooter = function (timeInSecond, attenuated) {
        if (this.startAxis == UISuperAxis.VERTICAL) {
            this.scrollToBottom(timeInSecond, attenuated);
        }
        else {
            this.scrollToRight(timeInSecond, attenuated);
        }
    };
    UISuperLayout.prototype.resetScrollView = function () {
        this.scrollView.reset();
    };
    UISuperLayout.prototype.isOutOfBoundaryHeader = function (node) {
        var width = node.width * this.getUsedScaleValue(node.scaleX) * 2;
        var height = -node.height * this.getUsedScaleValue(node.scaleY) * 2;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    UISuperLayout.prototype.isOutOfBoundaryFooter = function (node) {
        var width = -node.width * this.getUsedScaleValue(node.scaleX) * 2;
        var height = node.height * this.getUsedScaleValue(node.scaleY) * 2;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    UISuperLayout.prototype.scrollToTop = function (timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.VERTICAL)
            return;
        this.refreshHeader();
        this.scrollView.deltaMove = cc.v2(0, -1);
        this.scrollView.scrollToTop(timeInSecond, attenuated);
    };
    UISuperLayout.prototype.scrollToBottom = function (timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.VERTICAL)
            return;
        this.refreshFooter();
        this.scrollView.deltaMove = cc.v2(0, 1);
        this.scrollView.scrollToBottom(timeInSecond, attenuated);
    };
    UISuperLayout.prototype.scrollToLeft = function (timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.HORIZONTAL)
            return;
        this.refreshHeader();
        this.scrollView.deltaMove = cc.v2(1, 0);
        this.scrollView.scrollToLeft(timeInSecond, attenuated);
    };
    UISuperLayout.prototype.scrollToRight = function (timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.HORIZONTAL)
            return;
        this.refreshFooter();
        this.scrollView.deltaMove = cc.v2(-1, 0);
        this.scrollView.scrollToRight(timeInSecond, attenuated);
    };
    UISuperLayout.prototype.refreshHeader = function () {
        this.scrollView.stopAutoScroll();
        for (var i = 0; i < this.node.children.length; i++) {
            var child = this.node.children[i];
            child['index'] = i;
            this.refreshItem(child, i);
        }
    };
    UISuperLayout.prototype.refreshFooter = function () {
        this.scrollView.stopAutoScroll();
        var index = this.maxItemTotal;
        for (var i = this.node.childrenCount - 1; i >= 0; i--) {
            var child = this.node.children[i];
            child['index'] = --index;
            this.refreshItem(child, index);
        }
    };
    UISuperLayout.prototype.moreRemLessAdd = function () {
        // 不够的情况下
        var index = this.node.childrenCount;
        for (var i = index; i < this.maxItemTotal; i++) {
            if (i >= this.maxPrefabTotal)
                break;
            if (!this.node.children[i]) {
                var child_1 = cc.instantiate(this.prefab);
                child_1['index'] = i;
                var script = child_1.getComponent(UISuperItem_1.default) || child_1.addComponent(UISuperItem_1.default);
                script.init(this, this.refreshItem.bind(this));
                this.node.addChild(child_1);
                if (i == 0)
                    this.setHeaderStartPos();
            }
        }
        // 多余的情况下
        if (this.node.childrenCount > this.maxItemTotal) {
            var total = this.node.childrenCount - this.maxItemTotal;
            for (var i = 0; i < total; i++) {
                var child = this.footer;
                child.destroy();
                this.node.removeChild(child);
            }
        }
    };
    UISuperLayout.prototype.refreshItem = function (target, index) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, index);
    };
    UISuperLayout.prototype.setHeaderStartPos = function () {
        if (!this.header)
            return;
        var pos = cc.Vec2.ZERO;
        pos.y = (1 - this.header.anchorY) * -this.header.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        pos.x = this.header.anchorX * this.header.width + this.paddingLeft - this.node.anchorX * this.viewSize.width;
        this.header.setPosition(pos);
    };
    __decorate([
        property({
            type: cc.Enum(UISuperAxis),
            displayName: "排列方向"
        })
    ], UISuperLayout.prototype, "startAxis", void 0);
    __decorate([
        property({
            displayName: "上边距"
        })
    ], UISuperLayout.prototype, "paddingTop", void 0);
    __decorate([
        property({
            displayName: "下边距"
        })
    ], UISuperLayout.prototype, "paddingBottom", void 0);
    __decorate([
        property({
            displayName: "左边距"
        })
    ], UISuperLayout.prototype, "paddingLeft", void 0);
    __decorate([
        property({
            displayName: "右边距"
        })
    ], UISuperLayout.prototype, "paddingRight", void 0);
    __decorate([
        property({
            displayName: "间隔"
        })
    ], UISuperLayout.prototype, "spacing", void 0);
    __decorate([
        property({
            displayName: "可复用的Item数"
        })
    ], UISuperLayout.prototype, "maxPrefabTotal", void 0);
    __decorate([
        property({
            type: cc.Prefab,
            displayName: "item Prefab"
        })
    ], UISuperLayout.prototype, "prefab", void 0);
    __decorate([
        property
    ], UISuperLayout.prototype, "affectedByScale", void 0);
    __decorate([
        property({
            displayName: "使用item子节点包围盒"
        })
    ], UISuperLayout.prototype, "childBoundingBox", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], UISuperLayout.prototype, "refreshItemEvents", void 0);
    UISuperLayout = __decorate([
        ccclass
    ], UISuperLayout);
    return UISuperLayout;
}(cc.Component));
exports.default = UISuperLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUs7U0FDckIsQ0FBQztzREFBd0I7SUFHdkI7UUFGRixRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsS0FBSztTQUNyQixDQUFDO3VEQUF5QjtJQUd4QjtRQUZGLFFBQVEsQ0FBQztZQUNOLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLENBQUM7a0RBQWdDO0lBRy9CO1FBRkYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLFdBQVc7U0FDM0IsQ0FBQzt5REFBNEI7SUFJM0I7UUFIRixRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFDZixXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDO2lEQUF5QjtJQUVqQjtRQUFULFFBQVE7MERBQWdDO0lBR3RDO1FBRkYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLGNBQWM7U0FDOUIsQ0FBQzsyREFBa0M7SUFDQztRQUFwQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7NERBQW9EO0lBaEN2RSxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBOE5qQztJQUFELG9CQUFDO0NBOU5ELEFBOE5DLENBOU4wQyxFQUFFLENBQUMsU0FBUyxHQThOdEQ7a0JBOU5vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3B1ZXJTY3JvbGxWaWV3IGZyb20gJy4vVUlTdXBlclNjcm9sbFZpZXcnO1xuaW1wb3J0IFVJU3B1ZXJJdGVtIGZyb20gJy4vVUlTdXBlckl0ZW0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBlbnVtIFVJU3VwZXJBeGlzIHtcbiAgICBIT1JJWk9OVEFMID0gMCxcbiAgICBWRVJUSUNBTCA9IDFcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN1cGVyTGF5b3V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKFVJU3VwZXJBeGlzKSxcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5o6S5YiX5pa55ZCRXCJcbiAgICB9KSBzdGFydEF4aXM6IFVJU3VwZXJBeGlzID0gVUlTdXBlckF4aXMuVkVSVElDQUxcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIrovrnot51cIlxuICAgIH0pIHBhZGRpbmdUb3A6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIvovrnot51cIlxuICAgIH0pIHBhZGRpbmdCb3R0b206IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlt6bovrnot51cIlxuICAgIH0pIHBhZGRpbmdMZWZ0OiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5Y+z6L656LedXCJcbiAgICB9KSBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLpl7TpmpRcIlxuICAgIH0pIHNwYWNpbmc6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlj6/lpI3nlKjnmoRJdGVt5pWwXCJcbiAgICB9KSBtYXhQcmVmYWJUb3RhbDogbnVtYmVyID0gMjBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIml0ZW0gUHJlZmFiXCJcbiAgICB9KSBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSBhZmZlY3RlZEJ5U2NhbGU6IGJvb2xlYW4gPSB0cnVlXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5L2/55SoaXRlbeWtkOiKgueCueWMheWbtOebklwiXG4gICAgfSkgY2hpbGRCb3VuZGluZ0JveDogYm9vbGVhbiA9IGZhbHNlXG4gICAgQHByb3BlcnR5KGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpIHJlZnJlc2hJdGVtRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIHB1YmxpYyBtYXhJdGVtVG90YWw6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF92aWV3U2l6ZTogY2MuU2l6ZVxuICAgIHB1YmxpYyBnZXQgdmlld1NpemUoKTogY2MuU2l6ZSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlld1NpemUpIHtcbiAgICAgICAgICAgIHRoaXMuX3ZpZXdTaXplID0gdGhpcy5zY3JvbGxWaWV3LnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl92aWV3U2l6ZVxuICAgIH1cbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3OiBVSVNwdWVyU2Nyb2xsVmlldyA9IG51bGxcbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFZpZXcoKTogVUlTcHVlclNjcm9sbFZpZXcge1xuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoVUlTcHVlclNjcm9sbFZpZXcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbFZpZXdcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlYWRlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jaGlsZHJlblswXVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZm9vdGVyKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuW3RoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMV1cbiAgICB9XG4gICAgcHVibGljIGdldCBoZWFkZXJCb3VuZGFyeVgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUueCArIHRoaXMuaGVhZGVyLnggLSB0aGlzLmhlYWRlci5hbmNob3JYICogdGhpcy5oZWFkZXIud2lkdGhcbiAgICB9XG4gICAgcHVibGljIGdldCBoZWFkZXJCb3VuZGFyeVkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUueSArIHRoaXMuaGVhZGVyLnkgKyAoMSAtIHRoaXMuaGVhZGVyLmFuY2hvclkpICogdGhpcy5oZWFkZXIuaGVpZ2h0XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZm9vdGVyQm91bmRhcnlYKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnggKyB0aGlzLmZvb3Rlci54ICsgKDEgLSB0aGlzLmZvb3Rlci5hbmNob3JYKSAqIHRoaXMuZm9vdGVyLndpZHRoXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgZm9vdGVyQm91bmRhcnlZKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnkgKyB0aGlzLmZvb3Rlci55IC0gdGhpcy5mb290ZXIuYW5jaG9yWSAqIHRoaXMuZm9vdGVyLmhlaWdodFxuICAgIH1cbiAgICAvLyDph43lhplcbiAgICBwdWJsaWMgZ2V0Q29udGVudFNpemUoKSB7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5nZXRSZWFsbHlTaXplKClcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy5zY3JvbGxWaWV3LnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICBpZiAoc2l6ZS5oZWlnaHQgPCB2aWV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHNpemUuaGVpZ2h0ID0gdmlld1NpemUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUud2lkdGggPCB2aWV3U2l6ZS53aWR0aCkge1xuICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHZpZXdTaXplLndpZHRoXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemVcbiAgICB9XG4gICAgcHVibGljIGdldFJlYWxseVNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCA9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52aWV3U2l6ZVxuICAgICAgICB9XG4gICAgICAgIGxldCBzaXplID0gY2MuU2l6ZS5aRVJPXG4gICAgICAgIHNpemUud2lkdGggPSB0aGlzLmZvb3RlckJvdW5kYXJ5WCArIC10aGlzLmhlYWRlckJvdW5kYXJ5WCArIHRoaXMucGFkZGluZ0xlZnQgKyB0aGlzLnBhZGRpbmdSaWdodFxuICAgICAgICBzaXplLmhlaWdodCA9IHRoaXMuaGVhZGVyQm91bmRhcnlZICsgLXRoaXMuZm9vdGVyQm91bmRhcnlZICsgdGhpcy5wYWRkaW5nVG9wICsgdGhpcy5wYWRkaW5nQm90dG9tXG4gICAgICAgIHJldHVybiBzaXplXG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbnRlbnRTaXplID0gdGhpcy5nZXRDb250ZW50U2l6ZS5iaW5kKHRoaXMpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRVc2VkU2NhbGVWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFmZmVjdGVkQnlTY2FsZSA/IE1hdGguYWJzKHZhbHVlKSA6IDE7XG4gICAgfVxuICAgIC8qKiDorr7nva7mnIDlpKdpdGVt5pWw6YePICovXG4gICAgcHVibGljIHRvdGFsKHZhbHVlOiBudW1iZXIpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnJlbGVhc2UoKVxuICAgICAgICB0aGlzLm1heEl0ZW1Ub3RhbCA9IHZhbHVlXG4gICAgICAgIHRoaXMubW9yZVJlbUxlc3NBZGQoKVxuICAgICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgICBpZiAodGhpcy5mb290ZXIgJiYgdGhpcy5mb290ZXJbJ2luZGV4J10gKyAxID49IHRoaXMubWF4SXRlbVRvdGFsKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLmZvb3RlclsnaW5kZXgnXSArIDEgLSB0aGlzLm1heEl0ZW1Ub3RhbFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGNoaWxkWydpbmRleCddIC0gb2Zmc2V0XG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtKGNoaWxkLCBjaGlsZFsnaW5kZXgnXSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY2FsY3VsYXRlQm91bmRhcnkoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIC8qKiDmu5rliqjliLDlpLTpg6ggKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9IZWFkZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0xlZnQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDmu5rliqjliLDlsL7pg6ggKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9Gb290ZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20odGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVzZXRTY3JvbGxWaWV3KCkge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcucmVzZXQoKVxuICAgIH1cbiAgICBwdWJsaWMgaXNPdXRPZkJvdW5kYXJ5SGVhZGVyKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gbm9kZS53aWR0aCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVgpICogMlxuICAgICAgICBsZXQgaGVpZ2h0ID0gLW5vZGUuaGVpZ2h0ICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWSkgKiAyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIod2lkdGgsIGhlaWdodCkpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgcHVibGljIGlzT3V0T2ZCb3VuZGFyeUZvb3Rlcihub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IC1ub2RlLndpZHRoICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWCkgKiAyXG4gICAgICAgIGxldCBoZWlnaHQgPSBub2RlLmhlaWdodCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVkpICogMlxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KGNjLnYyKHdpZHRoLCBoZWlnaHQpKVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkgcmV0dXJuXG4gICAgICAgIHRoaXMucmVmcmVzaEhlYWRlcigpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAtMSlcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkgcmV0dXJuXG4gICAgICAgIHRoaXMucmVmcmVzaEZvb3RlcigpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAxKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Cb3R0b20odGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgIH1cbiAgICBwcml2YXRlIHNjcm9sbFRvTGVmdCh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMKSByZXR1cm5cbiAgICAgICAgdGhpcy5yZWZyZXNoSGVhZGVyKClcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmRlbHRhTW92ZSA9IGNjLnYyKDEsIDApXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0xlZnQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgIH1cbiAgICBwcml2YXRlIHNjcm9sbFRvUmlnaHQodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgIT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCkgcmV0dXJuXG4gICAgICAgIHRoaXMucmVmcmVzaEZvb3RlcigpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigtMSwgMClcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvUmlnaHQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgIH1cbiAgICBwcml2YXRlIHJlZnJlc2hIZWFkZXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbShjaGlsZCwgaSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlZnJlc2hGb290ZXIoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWF4SXRlbVRvdGFsXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gLS1pbmRleFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbShjaGlsZCwgaW5kZXgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBtb3JlUmVtTGVzc0FkZCgpIHtcbiAgICAgICAgLy8g5LiN5aSf55qE5oOF5Ya15LiLXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRoaXMubWF4SXRlbVRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMubWF4UHJlZmFiVG90YWwpIGJyZWFrXG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKVxuICAgICAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBjaGlsZC5nZXRDb21wb25lbnQoVUlTcHVlckl0ZW0pIHx8IGNoaWxkLmFkZENvbXBvbmVudChVSVNwdWVySXRlbSlcbiAgICAgICAgICAgICAgICBzY3JpcHQuaW5pdCh0aGlzLCB0aGlzLnJlZnJlc2hJdGVtLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoaWxkKVxuICAgICAgICAgICAgICAgIGlmIChpID09IDApIHRoaXMuc2V0SGVhZGVyU3RhcnRQb3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWkmuS9meeahOaDheWGteS4i1xuICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPiB0aGlzLm1heEl0ZW1Ub3RhbCkge1xuICAgICAgICAgICAgdmFyIHRvdGFsID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgLSB0aGlzLm1heEl0ZW1Ub3RhbFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5mb290ZXJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZWZyZXNoSXRlbSh0YXJnZXQ6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMucmVmcmVzaEl0ZW1FdmVudHMsIHRhcmdldCwgaW5kZXgpXG4gICAgfVxuICAgIHB1YmxpYyBzZXRIZWFkZXJTdGFydFBvcygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlcikgcmV0dXJuXG4gICAgICAgIGxldCBwb3MgPSBjYy5WZWMyLlpFUk9cbiAgICAgICAgcG9zLnkgPSAoMSAtIHRoaXMuaGVhZGVyLmFuY2hvclkpICogLXRoaXMuaGVhZGVyLmhlaWdodCAtIHRoaXMucGFkZGluZ1RvcCArICgxIC0gdGhpcy5ub2RlLmFuY2hvclkpICogdGhpcy52aWV3U2l6ZS5oZWlnaHRcbiAgICAgICAgcG9zLnggPSB0aGlzLmhlYWRlci5hbmNob3JYICogdGhpcy5oZWFkZXIud2lkdGggKyB0aGlzLnBhZGRpbmdMZWZ0IC0gdGhpcy5ub2RlLmFuY2hvclggKiB0aGlzLnZpZXdTaXplLndpZHRoXG4gICAgICAgIHRoaXMuaGVhZGVyLnNldFBvc2l0aW9uKHBvcylcbiAgICB9XG59XG4iXX0=