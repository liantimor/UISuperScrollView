
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
                var script = child_1.addComponent(UISuperItem_1.default);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF5QjtJQUd4QjtRQUZGLFFBQVEsQ0FBQztZQUNOLFdBQVcsRUFBRSxJQUFJO1NBQ3BCLENBQUM7a0RBQWdDO0lBRy9CO1FBRkYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLFdBQVc7U0FDM0IsQ0FBQzt5REFBNEI7SUFJM0I7UUFIRixRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLE1BQU07WUFDZixXQUFXLEVBQUUsYUFBYTtTQUM3QixDQUFDO2lEQUF5QjtJQUVqQjtRQUFULFFBQVE7MERBQWdDO0lBR3RDO1FBRkYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLGNBQWM7U0FDOUIsQ0FBQzsyREFBa0M7SUFFQztRQUFwQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7NERBQW9EO0lBakN2RSxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBeU1qQztJQUFELG9CQUFDO0NBek1ELEFBeU1DLENBek0wQyxFQUFFLENBQUMsU0FBUyxHQXlNdEQ7a0JBek1vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3B1ZXJTY3JvbGxWaWV3IGZyb20gJy4vVUlTdXBlclNjcm9sbFZpZXcnO1xuaW1wb3J0IFVJU3B1ZXJJdGVtIGZyb20gJy4vVUlTdXBlckl0ZW0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBlbnVtIFVJU3VwZXJBeGlzIHtcbiAgICBIT1JJWk9OVEFMID0gMCxcbiAgICBWRVJUSUNBTCA9IDFcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN1cGVyTGF5b3V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKFVJU3VwZXJBeGlzKSxcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5o6S5YiX5pa55ZCRXCJcbiAgICB9KSBzdGFydEF4aXM6IFVJU3VwZXJBeGlzID0gVUlTdXBlckF4aXMuVkVSVElDQUxcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIrovrnot51cIlxuICAgIH0pIHBhZGRpbmdUb3A6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIvovrnot51cIlxuICAgIH0pIHBhZGRpbmdCb3R0b206IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlt6bovrnot51cIlxuICAgIH0pIHBhZGRpbmdMZWZ0OiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5Y+z6L656LedXCJcbiAgICB9KSBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLpl7TpmpRcIlxuICAgIH0pIHNwYWNpbmc6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlj6/lpI3nlKjnmoRJdGVt5pWwXCJcbiAgICB9KSBtYXhQcmVmYWJUb3RhbDogbnVtYmVyID0gMjBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIml0ZW0gUHJlZmFiXCJcbiAgICB9KSBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSBhZmZlY3RlZEJ5U2NhbGU6IGJvb2xlYW4gPSB0cnVlXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5L2/55SoaXRlbeWtkOiKgueCueWMheWbtOebklwiXG4gICAgfSkgY2hpbGRCb3VuZGluZ0JveDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBAcHJvcGVydHkoY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcikgcmVmcmVzaEl0ZW1FdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgbWF4SXRlbVRvdGFsOiBudW1iZXIgPSAwXG5cbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3OiBVSVNwdWVyU2Nyb2xsVmlldyA9IG51bGxcbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFZpZXcoKTogVUlTcHVlclNjcm9sbFZpZXcge1xuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoVUlTcHVlclNjcm9sbFZpZXcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbFZpZXdcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlYWRlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jaGlsZHJlblswXVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZm9vdGVyKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuW3RoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMV1cbiAgICB9XG4gICAgLy8g6YeN5YaZXG4gICAgcHVibGljIGdldENvbnRlbnRTaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyIHx8ICF0aGlzLmZvb3RlcikgcmV0dXJuIHRoaXMuc2Nyb2xsVmlldy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IHNpemUgPSBjYy5TaXplLlpFUk9cbiAgICAgICAgbGV0IF9oZWFkZXIsIF9mb290ZXJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgLy8g6K+l6L655qGG5YyF5ZCr6Ieq6Lqr5ZKM5bey5r+A5rS755qE5a2Q6IqC54K555qE5LiW55WM6L655qGGICjms6jmhI/vvIHkvb/nlKjmraTmlrnms5Xml7Yg5bqV5bGC5Luj56CB5Lya6YGN5Y6G5omA5pyJ5a2Q6IqC54K5IOW5tuWMheWQq+aJgOacieWtkOiKgueCueeahOS4lueVjOi+ueahhiDlrZDoioLngrnotorlpJrmgKfog73otorlt64pXG4gICAgICAgICAgICBfaGVhZGVyID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLmhlYWRlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54TWluLCB0aGlzLmhlYWRlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55TWF4KSlcbiAgICAgICAgICAgIF9mb290ZXIgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHRoaXMuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnhNYXgsIHRoaXMuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnlNaW4pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6K+l6L655qGG5YyF5ZCr6Ieq6Lqr55qE5LiW55WM6L655qGGICjov5nph4zkuLvopoHmmK/kv67mlLlnZXRCb3VuZGluZ0JveFRvV29ybGTku6PnoIEg5Y675o6J6YGN5Y6G5a2Q6IqC54K555qE5Luj56CBKVxuICAgICAgICAgICAgLy8g6L+Z6YeM5Y+q6ZyA6KaB6K6h566XaXRlbeacrOi6q+eahOS4lueVjOi+ueahhuWNs+WPryAo5oCn6IO95pyA5LyYKVxuICAgICAgICAgICAgX2hlYWRlciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5oZWFkZXJbJ2dldEJvdW5kaW5nJ10oKS54TWluLCB0aGlzLmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnlNYXgpKVxuICAgICAgICAgICAgX2Zvb3RlciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS54TWF4LCB0aGlzLmZvb3RlclsnZ2V0Qm91bmRpbmcnXSgpLnlNaW4pKVxuICAgICAgICB9XG4gICAgICAgIHNpemUud2lkdGggPSBfZm9vdGVyLnggLSBfaGVhZGVyLnggKyB0aGlzLnBhZGRpbmdMZWZ0ICsgdGhpcy5wYWRkaW5nUmlnaHRcbiAgICAgICAgc2l6ZS5oZWlnaHQgPSBfaGVhZGVyLnkgLSBfZm9vdGVyLnkgKyB0aGlzLnBhZGRpbmdUb3AgKyB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICAgICAgcmV0dXJuIHNpemVcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSA9IHRoaXMuZ2V0Q29udGVudFNpemUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0VXNlZFNjYWxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZmZlY3RlZEJ5U2NhbGUgPyBNYXRoLmFicyh2YWx1ZSkgOiAxO1xuICAgIH1cbiAgICAvKiog6K6+572u5pyA5aSnaXRlbeaVsOmHjyAqL1xuICAgIHB1YmxpYyB0b3RhbCh2YWx1ZTogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIHRoaXMubWF4SXRlbVRvdGFsID0gdmFsdWVcbiAgICAgICAgdGhpcy5tb3JlUmVtTGVzc0FkZCgpXG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmZvb3RlciAmJiB0aGlzLmZvb3RlclsnaW5kZXgnXSArIDEgPj0gdGhpcy5tYXhJdGVtVG90YWwpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuZm9vdGVyWydpbmRleCddICsgMSAtIHRoaXMubWF4SXRlbVRvdGFsXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gY2hpbGRbJ2luZGV4J10gLSBvZmZzZXRcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaW5kZXhcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW0oY2hpbGQsIGNoaWxkWydpbmRleCddKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jYWxjdWxhdGVCb3VuZGFyeSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIC8qKiDmu5rliqjliLDlpLTpg6ggKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9IZWFkZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0xlZnQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDmu5rliqjliLDlsL7pg6ggKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9Gb290ZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20odGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsVG9Ub3AodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgIT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hTdGFydCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAtMSlcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkgcmV0dXJuXG4gICAgICAgIHRoaXMucmVmcmVzaEVuZCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAxKVxuICAgICAgICAvKipcbiAgICAgICAgICogaXRlbeWwuuWvuOS4jeS4gOiHtOaXtiBpdGVt5Lya5Zyo5b2T5YmN5bin6YeN572u5L2N572uIOeEtuWQjuWcqOS4i+S4gOW4p+a7muWKqOiuoeeulyAo6L+Z6YeM5YW35L2T5bu26L+f5aSa5bCR5bin5LiN56Gu5a6a77yM5Zug5Li65Lmf6K64aXRlbeabtOaWsOWwuuWvuOaYr+W8guatpeeahO+8jOi/memHjOS4jeWOu+iAg+iZkSlcbiAgICAgICAgICog6buY6K6k5Y+q5piv6K6k5Li65b2T5YmN5bin5Lya5pu05paw5a6M5omA5pyJaXRlbeWwuuWvuFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvQm90dG9tKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZCkpXG4gICAgfVxuICAgIHByaXZhdGUgc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzICE9IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hTdGFydCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigxLCAwKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzICE9IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hFbmQoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZGVsdGFNb3ZlID0gY2MudjIoLTEsIDApXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpdGVt5bC65a+45LiN5LiA6Ie05pe2IGl0ZW3kvJrlnKjlvZPliY3luKfph43nva7kvY3nva4g54S25ZCO5Zyo5LiL5LiA5bin5rua5Yqo6K6h566XICjov5nph4zlhbfkvZPlu7bov5/lpJrlsJHluKfkuI3noa7lrprvvIzlm6DkuLrkuZ/orrhpdGVt5pu05paw5bC65a+45piv5byC5q2l55qE77yM6L+Z6YeM5LiN5Y676ICD6JmRKVxuICAgICAgICAgKiDpu5jorqTlj6rmmK/orqTkuLrlvZPliY3luKfkvJrmm7TmlrDlrozmiYDmnIlpdGVt5bC65a+4XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpKVxuICAgIH1cbiAgICBwcml2YXRlIHJlZnJlc2hTdGFydCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2hpbGRbJ2luZGV4J10gPSBpXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtKGNoaWxkLCBpKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaEVuZCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tYXhJdGVtVG90YWxcbiAgICAgICAgLy8g5LiK55uR5ZCs5LiLXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gLS1pbmRleFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbShjaGlsZCwgaW5kZXgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBtb3JlUmVtTGVzc0FkZCgpIHtcbiAgICAgICAgLy8g5LiN5aSf55qE5oOF5Ya15LiLXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRoaXMubWF4SXRlbVRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMubWF4UHJlZmFiVG90YWwpIGJyZWFrXG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKVxuICAgICAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBjaGlsZC5hZGRDb21wb25lbnQoVUlTcHVlckl0ZW0pXG4gICAgICAgICAgICAgICAgLy8g5bCG6L+Z5LiJ5Liq5pa55rOV5Lul5Zue6LCD55qE5pa55byP5Lyg6YCS6L+H5Y67ICjlr7nlpJbkuI3lhazlvIDosIPnlKgpXG4gICAgICAgICAgICAgICAgc2NyaXB0LmluaXQodGhpcywgdGhpcy5yZWZyZXNoSXRlbS5iaW5kKHRoaXMpLCB0aGlzLmlzT3V0T2ZCb3VuZGFyeVRvcC5iaW5kKHRoaXMpLCB0aGlzLmlzT3V0T2ZCb3VuZGFyeUJvdHRvbS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlpJrkvZnnmoTmg4XlhrXkuItcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID4gdGhpcy5tYXhJdGVtVG90YWwpIHtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gdGhpcy5tYXhJdGVtVG90YWxcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuZm9vdGVyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaEl0ZW0odGFyZ2V0OiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnJlZnJlc2hJdGVtRXZlbnRzLCB0YXJnZXQsIGluZGV4KVxuICAgIH1cbiAgICBwcml2YXRlIGlzT3V0T2ZCb3VuZGFyeVRvcChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IG5vZGUud2lkdGggKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVYKSAqIDJcbiAgICAgICAgbGV0IGhlaWdodCA9IC1ub2RlLmhlaWdodCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVkpICogMlxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KGNjLnYyKHdpZHRoLCBoZWlnaHQpKVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5Qm90dG9tKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gLW5vZGUud2lkdGggKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVYKSAqIDJcbiAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUuaGVpZ2h0ICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWSkgKiAyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIod2lkdGgsIGhlaWdodCkpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG59XG4iXX0=