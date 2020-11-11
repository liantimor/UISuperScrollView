"use strict";
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
        this.node.on(cc.Node.EventType.CHILD_REORDER, this.listenFooter, this);
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
    UISuperLayout.prototype.listenFooter = function () {
        this.header.off(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.header.off(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.header.off(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
        this.footer.off(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.footer.off(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.footer.off(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
        this.footer.on(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.footer.on(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.footer.on(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
    };
    UISuperLayout.prototype.resetScrollView = function (event) {
        this.scrollView.reset();
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