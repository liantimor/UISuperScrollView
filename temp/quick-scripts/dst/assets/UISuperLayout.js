
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
    // 重写
    UISuperLayout.prototype.getContentSize = function () {
        if (!this.header || !this.footer)
            return this.scrollView.view.getContentSize();
        var size = cc.Size.ZERO;
        var _header, _footer;
        if (this.childBoundingBox) {
            // 该边框包含自身和已激活的子节点的世界边框 (注意！使用此方法时 底层代码会遍历所有子节点 并包含所有子节点的世界边框 子节点越多性能越差)
            _header = this.node.convertToWorldSpaceAR(cc.v2(this.header.getBoundingBoxToWorld().xMin, this.header.getBoundingBoxToWorld().yMax));
            _footer = this.node.convertToWorldSpaceAR(cc.v2(this.footer.getBoundingBoxToWorld().xMax, this.footer.getBoundingBoxToWorld().yMin));
        }
        else {
            // 该边框包含自身的世界边框 (这里主要是修改getBoundingBoxToWorld代码 去掉遍历子节点的代码)
            // 这里只需要计算item本身的世界边框即可 (性能最优)
            _header = this.node.convertToWorldSpaceAR(cc.v2(this.header['getBounding']().xMin, this.header['getBounding']().yMax));
            _footer = this.node.convertToWorldSpaceAR(cc.v2(this.footer['getBounding']().xMax, this.footer['getBounding']().yMin));
        }
        size.width = _footer.x - _header.x + this.paddingLeft + this.paddingRight;
        size.height = _header.y - _footer.y + this.paddingTop + this.paddingBottom;
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
        this.scrollView.autoScrolling = true;
    };
    UISuperLayout.prototype.scrollToTop = function (timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.VERTICAL)
            return;
        this.refreshStart();
        this.scrollView.deltaMove = cc.v2(0, -1);
        this.scrollView.scrollToTop(timeInSecond, attenuated);
    };
    UISuperLayout.prototype.scrollToBottom = function (timeInSecond, attenuated) {
        var _this = this;
        if (this.startAxis != UISuperAxis.VERTICAL)
            return;
        this.refreshEnd();
        this.scrollView.deltaMove = cc.v2(0, 1);
        /**
         * item尺寸不一致时 item会在当前帧重置位置 然后在下一帧滚动计算 (这里具体延迟多少帧不确定，因为也许item更新尺寸是异步的，这里不去考虑)
         * 默认只是认为当前帧会更新完所有item尺寸
         */
        this.scheduleOnce(function () { return _this.scrollView.scrollToBottom(timeInSecond, attenuated); });
    };
    UISuperLayout.prototype.scrollToLeft = function (timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.HORIZONTAL)
            return;
        this.refreshStart();
        this.scrollView.deltaMove = cc.v2(1, 0);
        this.scrollView.scrollToLeft(timeInSecond, attenuated);
    };
    UISuperLayout.prototype.scrollToRight = function (timeInSecond, attenuated) {
        var _this = this;
        if (this.startAxis != UISuperAxis.HORIZONTAL)
            return;
        this.refreshEnd();
        this.scrollView.deltaMove = cc.v2(-1, 0);
        /**
         * item尺寸不一致时 item会在当前帧重置位置 然后在下一帧滚动计算 (这里具体延迟多少帧不确定，因为也许item更新尺寸是异步的，这里不去考虑)
         * 默认只是认为当前帧会更新完所有item尺寸
         */
        this.scheduleOnce(function () { return _this.scrollView.scrollToRight(timeInSecond, attenuated); });
    };
    UISuperLayout.prototype.refreshStart = function () {
        this.scrollView.stopAutoScroll();
        for (var i = 0; i < this.node.children.length; i++) {
            var child = this.node.children[i];
            child['index'] = i;
            this.refreshItem(child, i);
        }
    };
    UISuperLayout.prototype.refreshEnd = function () {
        this.scrollView.stopAutoScroll();
        var index = this.maxItemTotal;
        // 上监听下
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
                // 将这三个方法以回调的方式传递过去 (对外不公开调用)
                script.init(this, this.refreshItem.bind(this), this.isOutOfBoundaryTop.bind(this), this.isOutOfBoundaryBottom.bind(this));
                this.node.addChild(child_1);
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
    UISuperLayout.prototype.isOutOfBoundaryTop = function (node) {
        var width = node.width * this.getUsedScaleValue(node.scaleX) * 2;
        var height = -node.height * this.getUsedScaleValue(node.scaleY) * 2;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    UISuperLayout.prototype.isOutOfBoundaryBottom = function (node) {
        var width = -node.width * this.getUsedScaleValue(node.scaleX) * 2;
        var height = node.height * this.getUsedScaleValue(node.scaleY) * 2;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtRQUZGLFFBQVEsQ0FBQztZQUNOLFdBQVcsRUFBRSxLQUFLO1NBQ3JCLENBQUM7c0RBQXdCO0lBR3ZCO1FBRkYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLEtBQUs7U0FDckIsQ0FBQzt1REFBeUI7SUFHeEI7UUFGRixRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsSUFBSTtTQUNwQixDQUFDO2tEQUFnQztJQUcvQjtRQUZGLFFBQVEsQ0FBQztZQUNOLFdBQVcsRUFBRSxXQUFXO1NBQzNCLENBQUM7eURBQTRCO0lBSTNCO1FBSEYsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNO1lBQ2YsV0FBVyxFQUFFLGFBQWE7U0FDN0IsQ0FBQztpREFBeUI7SUFFakI7UUFBVCxRQUFROzBEQUFnQztJQUd0QztRQUZGLFFBQVEsQ0FBQztZQUNOLFdBQVcsRUFBRSxjQUFjO1NBQzlCLENBQUM7MkRBQWtDO0lBRUM7UUFBcEMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDOzREQUFvRDtJQWpDdkUsYUFBYTtRQURqQyxPQUFPO09BQ2EsYUFBYSxDQTJNakM7SUFBRCxvQkFBQztDQTNNRCxBQTJNQyxDQTNNMEMsRUFBRSxDQUFDLFNBQVMsR0EyTXREO2tCQTNNb0IsYUFBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVNwdWVyU2Nyb2xsVmlldyBmcm9tICcuL1VJU3VwZXJTY3JvbGxWaWV3JztcbmltcG9ydCBVSVNwdWVySXRlbSBmcm9tICcuL1VJU3VwZXJJdGVtJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5leHBvcnQgZW51bSBVSVN1cGVyQXhpcyB7XG4gICAgSE9SSVpPTlRBTCA9IDAsXG4gICAgVkVSVElDQUwgPSAxXG59XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTdXBlckxheW91dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShVSVN1cGVyQXhpcyksXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuaOkuWIl+aWueWQkVwiXG4gICAgfSkgc3RhcnRBeGlzOiBVSVN1cGVyQXhpcyA9IFVJU3VwZXJBeGlzLlZFUlRJQ0FMXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5LiK6L656LedXCJcbiAgICB9KSBwYWRkaW5nVG9wOiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5LiL6L656LedXCJcbiAgICB9KSBwYWRkaW5nQm90dG9tOiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5bem6L656LedXCJcbiAgICB9KSBwYWRkaW5nTGVmdDogbnVtYmVyID0gMFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuWPs+i+uei3nVwiXG4gICAgfSkgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6Ze06ZqUXCJcbiAgICB9KSBzcGFjaW5nOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5Y+v5aSN55So55qESXRlbeaVsFwiXG4gICAgfSkgbWF4UHJlZmFiVG90YWw6IG51bWJlciA9IDIwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICBkaXNwbGF5TmFtZTogXCJpdGVtIFByZWZhYlwiXG4gICAgfSkgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsXG5cbiAgICBAcHJvcGVydHkgYWZmZWN0ZWRCeVNjYWxlOiBib29sZWFuID0gdHJ1ZVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS9v+eUqGl0ZW3lrZDoioLngrnljIXlm7Tnm5JcIlxuICAgIH0pIGNoaWxkQm91bmRpbmdCb3g6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgQHByb3BlcnR5KGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpIHJlZnJlc2hJdGVtRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuXG4gICAgcHVibGljIG1heEl0ZW1Ub3RhbDogbnVtYmVyID0gMFxuXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVmlldzogVUlTcHVlclNjcm9sbFZpZXcgPSBudWxsXG4gICAgcHVibGljIGdldCBzY3JvbGxWaWV3KCk6IFVJU3B1ZXJTY3JvbGxWaWV3IHtcbiAgICAgICAgaWYgKCF0aGlzLl9zY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICB0aGlzLl9zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KFVJU3B1ZXJTY3JvbGxWaWV3KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxWaWV3XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWFkZXIoKTogY2MuTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuY2hpbGRyZW5bMF1cbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGZvb3RlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jaGlsZHJlblt0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDFdXG4gICAgfVxuICAgIC8vIOmHjeWGmVxuICAgIHB1YmxpYyBnZXRDb250ZW50U2l6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhlYWRlciB8fCAhdGhpcy5mb290ZXIpIHJldHVybiB0aGlzLnNjcm9sbFZpZXcudmlldy5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgIGxldCBzaXplID0gY2MuU2l6ZS5aRVJPXG4gICAgICAgIGxldCBfaGVhZGVyLCBfZm9vdGVyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgIC8vIOivpei+ueahhuWMheWQq+iHqui6q+WSjOW3sua/gOa0u+eahOWtkOiKgueCueeahOS4lueVjOi+ueahhiAo5rOo5oSP77yB5L2/55So5q2k5pa55rOV5pe2IOW6leWxguS7o+eggeS8mumBjeWOhuaJgOacieWtkOiKgueCuSDlubbljIXlkKvmiYDmnInlrZDoioLngrnnmoTkuJbnlYzovrnmoYYg5a2Q6IqC54K56LaK5aSa5oCn6IO96LaK5beuKVxuICAgICAgICAgICAgX2hlYWRlciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5oZWFkZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueE1pbiwgdGhpcy5oZWFkZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueU1heCkpXG4gICAgICAgICAgICBfZm9vdGVyID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLmZvb3Rlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54TWF4LCB0aGlzLmZvb3Rlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55TWluKSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOivpei+ueahhuWMheWQq+iHqui6q+eahOS4lueVjOi+ueahhiAo6L+Z6YeM5Li76KaB5piv5L+u5pS5Z2V0Qm91bmRpbmdCb3hUb1dvcmxk5Luj56CBIOWOu+aOiemBjeWOhuWtkOiKgueCueeahOS7o+eggSlcbiAgICAgICAgICAgIC8vIOi/memHjOWPqumcgOimgeiuoeeul2l0ZW3mnKzouqvnmoTkuJbnlYzovrnmoYbljbPlj68gKOaAp+iDveacgOS8mClcbiAgICAgICAgICAgIF9oZWFkZXIgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHRoaXMuaGVhZGVyWydnZXRCb3VuZGluZyddKCkueE1pbiwgdGhpcy5oZWFkZXJbJ2dldEJvdW5kaW5nJ10oKS55TWF4KSlcbiAgICAgICAgICAgIF9mb290ZXIgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHRoaXMuZm9vdGVyWydnZXRCb3VuZGluZyddKCkueE1heCwgdGhpcy5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS55TWluKSlcbiAgICAgICAgfVxuICAgICAgICBzaXplLndpZHRoID0gX2Zvb3Rlci54IC0gX2hlYWRlci54ICsgdGhpcy5wYWRkaW5nTGVmdCArIHRoaXMucGFkZGluZ1JpZ2h0XG4gICAgICAgIHNpemUuaGVpZ2h0ID0gX2hlYWRlci55IC0gX2Zvb3Rlci55ICsgdGhpcy5wYWRkaW5nVG9wICsgdGhpcy5wYWRkaW5nQm90dG9tXG4gICAgICAgIHJldHVybiBzaXplXG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUgPSB0aGlzLmdldENvbnRlbnRTaXplLmJpbmQodGhpcylcbiAgICB9XG4gICAgcHVibGljIGdldFVzZWRTY2FsZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWZmZWN0ZWRCeVNjYWxlID8gTWF0aC5hYnModmFsdWUpIDogMTtcbiAgICB9XG4gICAgLyoqIOiuvue9ruacgOWkp2l0ZW3mlbDph48gKi9cbiAgICBwdWJsaWMgdG90YWwodmFsdWU6IG51bWJlcik6IHRoaXMge1xuICAgICAgICB0aGlzLm1heEl0ZW1Ub3RhbCA9IHZhbHVlXG4gICAgICAgIHRoaXMubW9yZVJlbUxlc3NBZGQoKVxuICAgICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgICBpZiAodGhpcy5mb290ZXIgJiYgdGhpcy5mb290ZXJbJ2luZGV4J10gKyAxID49IHRoaXMubWF4SXRlbVRvdGFsKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLmZvb3RlclsnaW5kZXgnXSArIDEgLSB0aGlzLm1heEl0ZW1Ub3RhbFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGNoaWxkWydpbmRleCddIC0gb2Zmc2V0XG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtKGNoaWxkLCBjaGlsZFsnaW5kZXgnXSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY2FsY3VsYXRlQm91bmRhcnkoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvKiog5rua5Yqo5Yiw5aS06YOoICovXG4gICAgcHVibGljIHNjcm9sbFRvSGVhZGVyKHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5rua5Yqo5Yiw5bC+6YOoICovXG4gICAgcHVibGljIHNjcm9sbFRvRm9vdGVyKHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHJlc2V0U2Nyb2xsVmlldygpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmF1dG9TY3JvbGxpbmcgPSB0cnVlXG4gICAgfVxuICAgIHByaXZhdGUgc2Nyb2xsVG9Ub3AodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgIT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hTdGFydCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAtMSlcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkgcmV0dXJuXG4gICAgICAgIHRoaXMucmVmcmVzaEVuZCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAxKVxuICAgICAgICAvKipcbiAgICAgICAgICogaXRlbeWwuuWvuOS4jeS4gOiHtOaXtiBpdGVt5Lya5Zyo5b2T5YmN5bin6YeN572u5L2N572uIOeEtuWQjuWcqOS4i+S4gOW4p+a7muWKqOiuoeeulyAo6L+Z6YeM5YW35L2T5bu26L+f5aSa5bCR5bin5LiN56Gu5a6a77yM5Zug5Li65Lmf6K64aXRlbeabtOaWsOWwuuWvuOaYr+W8guatpeeahO+8jOi/memHjOS4jeWOu+iAg+iZkSlcbiAgICAgICAgICog6buY6K6k5Y+q5piv6K6k5Li65b2T5YmN5bin5Lya5pu05paw5a6M5omA5pyJaXRlbeWwuuWvuFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvQm90dG9tKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZCkpXG4gICAgfVxuICAgIHByaXZhdGUgc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzICE9IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hTdGFydCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigxLCAwKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzICE9IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hFbmQoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZGVsdGFNb3ZlID0gY2MudjIoLTEsIDApXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpdGVt5bC65a+45LiN5LiA6Ie05pe2IGl0ZW3kvJrlnKjlvZPliY3luKfph43nva7kvY3nva4g54S25ZCO5Zyo5LiL5LiA5bin5rua5Yqo6K6h566XICjov5nph4zlhbfkvZPlu7bov5/lpJrlsJHluKfkuI3noa7lrprvvIzlm6DkuLrkuZ/orrhpdGVt5pu05paw5bC65a+45piv5byC5q2l55qE77yM6L+Z6YeM5LiN5Y676ICD6JmRKVxuICAgICAgICAgKiDpu5jorqTlj6rmmK/orqTkuLrlvZPliY3luKfkvJrmm7TmlrDlrozmiYDmnIlpdGVt5bC65a+4XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpKVxuICAgIH1cbiAgICBwcml2YXRlIHJlZnJlc2hTdGFydCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2hpbGRbJ2luZGV4J10gPSBpXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtKGNoaWxkLCBpKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaEVuZCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tYXhJdGVtVG90YWxcbiAgICAgICAgLy8g5LiK55uR5ZCs5LiLXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gLS1pbmRleFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbShjaGlsZCwgaW5kZXgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBtb3JlUmVtTGVzc0FkZCgpIHtcbiAgICAgICAgLy8g5LiN5aSf55qE5oOF5Ya15LiLXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRoaXMubWF4SXRlbVRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMubWF4UHJlZmFiVG90YWwpIGJyZWFrXG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKVxuICAgICAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBjaGlsZC5nZXRDb21wb25lbnQoVUlTcHVlckl0ZW0pIHx8IGNoaWxkLmFkZENvbXBvbmVudChVSVNwdWVySXRlbSlcbiAgICAgICAgICAgICAgICAvLyDlsIbov5nkuInkuKrmlrnms5Xku6Xlm57osIPnmoTmlrnlvI/kvKDpgJLov4fljrsgKOWvueWkluS4jeWFrOW8gOiwg+eUqClcbiAgICAgICAgICAgICAgICBzY3JpcHQuaW5pdCh0aGlzLCB0aGlzLnJlZnJlc2hJdGVtLmJpbmQodGhpcyksIHRoaXMuaXNPdXRPZkJvdW5kYXJ5VG9wLmJpbmQodGhpcyksIHRoaXMuaXNPdXRPZkJvdW5kYXJ5Qm90dG9tLmJpbmQodGhpcykpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWkmuS9meeahOaDheWGteS4i1xuICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPiB0aGlzLm1heEl0ZW1Ub3RhbCkge1xuICAgICAgICAgICAgdmFyIHRvdGFsID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgLSB0aGlzLm1heEl0ZW1Ub3RhbFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5mb290ZXJcbiAgICAgICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZWZyZXNoSXRlbSh0YXJnZXQ6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMucmVmcmVzaEl0ZW1FdmVudHMsIHRhcmdldCwgaW5kZXgpXG4gICAgfVxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5VG9wKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gbm9kZS53aWR0aCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVgpICogMlxuICAgICAgICBsZXQgaGVpZ2h0ID0gLW5vZGUuaGVpZ2h0ICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWSkgKiAyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIod2lkdGgsIGhlaWdodCkpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgcHJpdmF0ZSBpc091dE9mQm91bmRhcnlCb3R0b20obm9kZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgd2lkdGggPSAtbm9kZS53aWR0aCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVgpICogMlxuICAgICAgICBsZXQgaGVpZ2h0ID0gbm9kZS5oZWlnaHQgKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVZKSAqIDJcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuc2Nyb2xsVmlldy5nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShjYy52Mih3aWR0aCwgaGVpZ2h0KSlcbiAgICAgICAgcmV0dXJuIG9mZnNldFxuICAgIH1cbn1cbiJdfQ==