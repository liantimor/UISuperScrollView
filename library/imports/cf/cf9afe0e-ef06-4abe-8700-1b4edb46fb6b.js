"use strict";
cc._RF.push(module, 'cf9af4O7wZKvocAG07bRvtr', 'UISuperScrollView');
// cores/UISuperScrollView.ts

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
/*
 * @Author: steveJobs
 * @Email: icipiqkm@gmail.com
 * @Date: 2020-11-19 01:15:04
 * @Last Modified by: steveJobs
 * @Last Modified time: 2020-12-04 14:35:43
 * @Description: Description
 */
var UISuperLayout_1 = require("./UISuperLayout");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var EPSILON = 1e-4;
var UISpuerScrollView = /** @class */ (function (_super) {
    __extends(UISpuerScrollView, _super);
    function UISpuerScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerOutOffset = 200;
        _this.headerMultiple = 2;
        _this.footerOutOffset = 200;
        _this.footerMultiple = 2;
        _this.pullDownEvents = [];
        _this.pullUpEvents = [];
        _this.isMoveHeader = false;
        _this.isMoveFooter = false;
        _this.isLockHeader = false;
        _this.isLockFooter = false;
        _this.headerProgress = 0;
        _this.footerProgress = 0;
        _this._layout = null;
        return _this;
    }
    Object.defineProperty(UISpuerScrollView.prototype, "view", {
        get: function () { return this['_view']; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "autoScrolling", {
        get: function () { return this['_autoScrolling']; },
        set: function (value) { this['_autoScrolling'] = value; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "layout", {
        get: function () {
            if (this._layout == null)
                this._layout = this.content.getComponent(UISuperLayout_1.default);
            return this._layout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isHeader", {
        /** 当前头部的item是否真的是数据的开头 也就是0 */
        get: function () {
            var _a, _b, _c, _d;
            if (this.layout.headerToFooter) {
                if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) {
                    return ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.header['index']) == 0;
                }
            }
            else {
                if ((_c = this.layout) === null || _c === void 0 ? void 0 : _c.footer) {
                    return ((_d = this.layout) === null || _d === void 0 ? void 0 : _d.footer['index']) == this.layout.maxItemTotal - 1;
                }
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        /** 当前尾部的item是否真的是数据的结尾 */
        get: function () {
            var _a, _b, _c;
            if (this.layout.headerToFooter) {
                if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) {
                    return this.layout.footer['index'] == this.layout.maxItemTotal - 1;
                }
            }
            else {
                if ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.header) {
                    return ((_c = this.layout) === null || _c === void 0 ? void 0 : _c.header['index']) == 0;
                }
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isCalculPull", {
        /** 是否需要计算？如果上拉/下拉事件没有监听者则不需要相关的计算 */
        get: function () {
            return this.pullDownEvents.length > 0 || this.pullUpEvents.length > 0;
        },
        enumerable: false,
        configurable: true
    });
    UISpuerScrollView.prototype.calculateBoundary = function () {
        this['_calculateBoundary']();
    };
    UISpuerScrollView.prototype.getHowMuchOutOfBoundary = function (offset) {
        return this['_getHowMuchOutOfBoundary'](offset);
    };
    UISpuerScrollView.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
    };
    UISpuerScrollView.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
    };
    UISpuerScrollView.prototype.onChangeSize = function () {
        var widget = this.view.getComponent(cc.Widget);
        if (!widget)
            return;
        widget.updateAlignment();
    };
    /** 释放 功能用于上拉加载下拉刷新 解锁头尾固定的尺寸 */
    UISpuerScrollView.prototype.release = function () {
        this.isMoveHeader = false;
        this.isMoveFooter = false;
        if (this.isLockHeader || this.isLockFooter) {
            var outOfBoundary = this.getHowMuchOutOfBoundary();
            var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
            var autoScroll = true;
            if (offset == 0 || this.isLockHeader && offset < 0 || this.isLockFooter && offset > 0) {
                this.clearProgress();
                autoScroll = false;
            }
            this.isLockHeader = false;
            this.isLockFooter = false;
            if (autoScroll) {
                this['_outOfBoundaryAmountDirty'] = true;
                this['_processInertiaScroll']();
            }
        }
        else {
            this.clearProgress();
        }
    };
    /**重置列表 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(高度|缩放|尺寸) 时保证内容显示正确 */
    UISpuerScrollView.prototype.reset = function () {
        this['_outOfBoundaryAmountDirty'] = true;
        var offset = this.getHowMuchOutOfBoundary();
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            this['_processInertiaScroll']();
        }
    };
    UISpuerScrollView.prototype._onTouchMoved = function (event, captureListeners) {
        _super.prototype['_onTouchMoved'].call(this, event, captureListeners);
        if (this.isCalculPull) {
            var outOfBoundary = this.getHowMuchOutOfBoundary();
            var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
            if (offset > 0 && this.isHeader && !this.isLockHeader && !this.isLockFooter) {
                this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
                this.isMoveHeader = this.headerProgress >= this.headerMultiple;
                this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: this.isMoveHeader ? "wait" : "touch" });
                this.emitPullUpEvent({ action: false, progress: 0, progressStage: "release" });
            }
            else if (offset < 0 && this.isFooter && !this.isLockFooter && !this.isLockHeader) {
                this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
                this.isMoveFooter = this.footerProgress >= this.footerMultiple;
                this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: this.isMoveFooter ? "wait" : "touch" });
                this.emitPullDownEvent({ action: false, progress: 0, progressStage: "release" });
            }
        }
    };
    UISpuerScrollView.prototype._dispatchEvent = function (event) {
        _super.prototype['_dispatchEvent'].call(this, event);
        if (event == 'scroll-ended') {
            this.layout.scrollToHeaderOrFooter = false; //功能用于控制循环滚动时使用scrollTo方法滚动带来的效果问题 
        }
    };
    UISpuerScrollView.prototype._getContentTopBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.topBoundary; //返回头部item上边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this._getContentBottomBoundary() + viewSize.height;
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 headerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentBottomBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.bottomBoundary; //返回尾部item上边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 footerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentLeftBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.leftBoundary; //返回头部item左边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 headerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentRightBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.rightBoundary; //返回头部item右边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this._getContentLeftBoundary() + viewSize.width;
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 footerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._startAutoScroll = function (deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) { // 如果没有刷新/加载的监听者 则不计算 
            if (this.isMoveHeader && !this.isLockHeader) { // 锁住头部 意思就是已经触发了下拉事件 应用层应该做些刷新的动作
                this.isLockHeader = true;
                this.vertical && (deltaMove.y -= this.headerOutOffset);
                this.horizontal && (deltaMove.x += this.headerOutOffset);
                this.emitPullDownEvent({ action: true, progress: this.headerProgress, progressStage: 'lock' });
            }
            else if (this.isMoveFooter && !this.isLockFooter) { // 锁住尾部 意思就是已经触发了上拉事件 应用层应该做些加载的动作
                this.isLockFooter = true;
                this.vertical && (deltaMove.y += this.footerOutOffset);
                this.horizontal && (deltaMove.x -= this.footerOutOffset);
                this.emitPullUpEvent({ action: true, progress: this.footerProgress, progressStage: 'lock' });
            }
        }
        _super.prototype['_startAutoScroll'].call(this, deltaMove, timeInSecond, attenuated);
    };
    UISpuerScrollView.prototype._updateScrollBar = function (outOfBoundary) {
        _super.prototype['_updateScrollBar'].call(this, outOfBoundary);
        if (!this.isCalculPull)
            return; // 如果没有刷新/加载的监听者 则不计算 
        if (this['_autoScrollBraking'])
            return; // 自动回弹时不计算 （非手动）
        if (!this.autoScrolling)
            return; // 非自动滚动时不计算 
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0) { // 下滑
            var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset; //根据参数 headerOutOffset 计算当前下滑的办百分比
            var progressStage = void 0;
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1);
                progressStage = 'lock'; //锁定状态
            }
            else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
                progressStage = 'release'; //释放状态
            }
            this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: progressStage });
        }
        else if (offset < 0) { //上拉
            var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset; //根据参数 footerOutOffset 计算当前下滑的办百分比
            var progressStage = void 0;
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1);
                progressStage = 'lock'; //锁定状态
            }
            else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
                progressStage = 'release'; //释放状态
            }
            this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: progressStage });
        }
        else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
            if (!this.isLockHeader && !this.isLockFooter) {
                this.clearProgress();
            }
        }
    };
    UISpuerScrollView.prototype.clearProgress = function () {
        this.headerProgress = 0;
        this.footerProgress = 0;
        this.emitPullDownEvent({ action: false, progress: 0, progressStage: 'release' });
        this.emitPullUpEvent({ action: false, progress: 0, progressStage: 'release' });
    };
    UISpuerScrollView.prototype.emitPullDownEvent = function (data) {
        cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data);
    };
    UISpuerScrollView.prototype.emitPullUpEvent = function (data) {
        cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data);
    };
    __decorate([
        property({
            displayName: "顶部偏移量",
            tooltip: "下拉时超过此偏移会发送下拉事件"
        })
    ], UISpuerScrollView.prototype, "headerOutOffset", void 0);
    __decorate([
        property({ displayName: "满足触发Header的倍数" })
    ], UISpuerScrollView.prototype, "headerMultiple", void 0);
    __decorate([
        property({
            displayName: "底部偏移量",
            tooltip: "上拉时超过此偏移会发送上拉事件"
        })
    ], UISpuerScrollView.prototype, "footerOutOffset", void 0);
    __decorate([
        property({ displayName: "满足触发Footer的倍数" })
    ], UISpuerScrollView.prototype, "footerMultiple", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            displayName: "下拉事件"
        })
    ], UISpuerScrollView.prototype, "pullDownEvents", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            displayName: "上拉事件"
        })
    ], UISpuerScrollView.prototype, "pullUpEvents", void 0);
    UISpuerScrollView = __decorate([
        ccclass,
        menu("UISpuerScrollView")
    ], UISpuerScrollView);
    return UISpuerScrollView;
}(cc.ScrollView));
exports.default = UISpuerScrollView;

cc._RF.pop();