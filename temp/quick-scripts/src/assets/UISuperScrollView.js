"use strict";
cc._RF.push(module, 'cf9af4O7wZKvocAG07bRvtr', 'UISuperScrollView');
// UISuperScrollView.ts

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
var EPSILON = 1e-4;
var UISpuerScrollView = /** @class */ (function (_super) {
    __extends(UISpuerScrollView, _super);
    function UISpuerScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerOutOffset = 200;
        _this.headerHeight = 100;
        _this.footerOutOffset = 200;
        _this.footerHeight = 100;
        _this.pullDownEvents = [];
        _this.pullUpEvents = [];
        _this.deltaMove = cc.Vec2.ZERO;
        _this.isMoveHeader = false;
        _this.isMoveFooter = false;
        _this.isLockHeader = false;
        _this.isLockFooter = false;
        _this.isAutoBack = false;
        _this.isEmitProgress = false;
        _this.contentOriginPos = null;
        _this.releaseing = false;
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
            if (this._layout == null) {
                this._layout = this.content.getComponent(UISuperLayout_1.default);
            }
            return this._layout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isHeader", {
        get: function () {
            var _a, _b;
            if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) {
                return ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.header['index']) == 0;
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        get: function () {
            var _a;
            if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) {
                return this.layout.footer['index'] == this.layout.maxItemTotal - 1;
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
    UISpuerScrollView.prototype.release = function () {
        if (this.isLockHeader || this.isLockFooter) {
            this.isMoveHeader = false;
            this.isMoveFooter = false;
            this.isLockHeader = false;
            this.isLockFooter = false;
            this.isEmitProgress = true;
            this.releaseing = true;
            this._outOfBoundaryAmountDirty = true;
            this['_processInertiaScroll']();
        }
    };
    UISpuerScrollView.prototype.stopAutoScroll = function () {
        _super.prototype['stopAutoScroll'].call(this);
        this.clearProgress();
        this.isEmitProgress = false;
    };
    UISpuerScrollView.prototype._adjustContentOutOfBoundary = function () {
        this._outOfBoundaryAmountDirty = true;
        if (this['_isOutOfBoundary']()) {
            var outOfBoundary = this.getHowMuchOutOfBoundary(cc.v2(0, 0));
            var newPosition = this.getContentPosition().add(outOfBoundary);
            if (!this.contentOriginPos) {
                this.contentOriginPos = newPosition;
            }
            if (this.content) {
                this.content.setPosition(newPosition);
                this._updateScrollBar(0);
            }
            if (this.contentOriginPos.fuzzyEquals(newPosition, EPSILON)) {
                this.layout.setHeaderStartPos();
            }
        }
    };
    /**
     * 重置列表
     * 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(高度|缩放|尺寸) 时保证内容显示正确
     */
    UISpuerScrollView.prototype.reset = function () {
        this._outOfBoundaryAmountDirty = true;
        var offset = this.getHowMuchOutOfBoundary();
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            if (!this.releaseing) {
                this.clearProgress();
                this.isEmitProgress = false;
            }
            this['_processInertiaScroll']();
        }
    };
    UISpuerScrollView.prototype._onTouchMoved = function (event, captureListeners) {
        _super.prototype['_onTouchMoved'].call(this, event, captureListeners);
        var delta = cc.v2(event.getLocation().x - event.getPreviousLocation().x, event.getLocation().y - event.getPreviousLocation().y);
        if (this.vertical && delta.y != 0 || this.horizontal && delta.x != 0) {
            this.deltaMove = delta;
        }
        this.isAutoBack = false;
        // 判断是否需要计算
        if (this.isCalculPull) {
            this.isEmitProgress = true;
            var outOfBoundary = this.getHowMuchOutOfBoundary();
            var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
            if (offset > 0 && this.isHeader) {
                this.isMoveHeader = offset >= this.headerOutOffset;
            }
            else if (offset < 0 && this.isFooter) {
                this.isMoveFooter = offset <= -this.footerOutOffset;
            }
        }
    };
    UISpuerScrollView.prototype._dispatchEvent = function (event) {
        _super.prototype['_dispatchEvent'].call(this, event);
        if (event == 'scroll-ended') {
            this.deltaMove = cc.Vec2.ZERO;
            this.isMoveHeader = false;
            this.isMoveFooter = false;
            this.isAutoBack = false;
            this.isEmitProgress = false;
            this.releaseing = false;
        }
    };
    UISpuerScrollView.prototype._getContentTopBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.headerBoundaryY + this.layout.paddingTop;
        }
        else {
            local = this._getContentBottomBoundary() + viewSize.height;
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerHeight;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentBottomBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.footerBoundaryY - this.layout.paddingBottom;
        }
        else {
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerHeight;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentLeftBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.headerBoundaryX - this.layout.paddingLeft;
        }
        else {
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerHeight;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentRightBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.footerBoundaryX + this.layout.paddingRight;
        }
        else {
            local = this._getContentLeftBoundary() + viewSize.width;
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerHeight;
        }
        return local;
    };
    UISpuerScrollView.prototype._startAutoScroll = function (deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
            if (this.isMoveHeader && !this.isLockHeader) {
                this.isLockHeader = true;
                this.vertical && (deltaMove.y -= this.headerHeight);
                this.horizontal && (deltaMove.x += this.headerHeight);
                this.emitPullDownEvent({ refresh: true, progress: 1 });
            }
            if (this.isMoveFooter && !this.isLockFooter) {
                this.isLockFooter = true;
                this.vertical && (deltaMove.y += this.footerHeight);
                this.horizontal && (deltaMove.x -= this.footerHeight);
                this.emitPullUpEvent({ refresh: true, progress: 1 });
            }
        }
        _super.prototype['_startAutoScroll'].call(this, deltaMove, timeInSecond, attenuated);
    };
    UISpuerScrollView.prototype._isNecessaryAutoScrollBrake = function () {
        var result = _super.prototype['_isNecessaryAutoScrollBrake'].call(this);
        if (result) {
            this.isAutoBack = true;
        }
        return result;
    };
    UISpuerScrollView.prototype._updateScrollBar = function (outOfBoundary) {
        _super.prototype['_updateScrollBar'].call(this, outOfBoundary);
        if (!this.isCalculPull)
            return;
        // 自动回弹时不发送事件 只有在手动滑动时才触发
        if (this['_autoScrollBraking']) {
            this.clearProgress();
            this.isAutoBack = true;
        }
        if (this.isAutoBack)
            return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0 && this.isHeader && !this.isLockHeader) {
            var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
            this.emitPullDownEvent({ refresh: false, progress: progress });
            this.emitPullUpEvent({ refresh: false, progress: 0 });
        }
        else if (offset < 0 && this.isFooter && !this.isLockFooter) {
            var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
            this.emitPullUpEvent({ refresh: false, progress: progress });
            this.emitPullDownEvent({ refresh: false, progress: 0 });
        }
        else {
            this.clearProgress();
        }
    };
    UISpuerScrollView.prototype.clearProgress = function () {
        this.emitPullDownEvent({ refresh: false, progress: 0 });
        this.emitPullUpEvent({ refresh: false, progress: 0 });
    };
    UISpuerScrollView.prototype.emitPullDownEvent = function (data) {
        if (this.isEmitProgress) {
            cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data);
        }
    };
    UISpuerScrollView.prototype.emitPullUpEvent = function (data) {
        if (this.isEmitProgress) {
            cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data);
        }
    };
    __decorate([
        property({
            displayName: "顶部偏移量",
            tooltip: "下拉时超过此偏移会发送下拉事件"
        })
    ], UISpuerScrollView.prototype, "headerOutOffset", void 0);
    __decorate([
        property({
            displayName: "顶部高度",
            tooltip: "当下拉事件触发时 顶部追加的高度"
        })
    ], UISpuerScrollView.prototype, "headerHeight", void 0);
    __decorate([
        property({
            displayName: "底部偏移量",
            tooltip: "上拉时超过此偏移会发送上拉事件"
        })
    ], UISpuerScrollView.prototype, "footerOutOffset", void 0);
    __decorate([
        property({
            displayName: "底部高度",
            tooltip: "当上拉事件触发时 底部追加的高度"
        })
    ], UISpuerScrollView.prototype, "footerHeight", void 0);
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
        ccclass
    ], UISpuerScrollView);
    return UISpuerScrollView;
}(cc.ScrollView));
exports.default = UISpuerScrollView;

cc._RF.pop();