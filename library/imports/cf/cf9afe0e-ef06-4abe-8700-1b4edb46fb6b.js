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
            return ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.header['index']) == 0 || false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        get: function () {
            var _a, _b, _c;
            return ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.footer['index']) == ((_c = this.layout) === null || _c === void 0 ? void 0 : _c.maxItemTotal) - 1 || false;
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
            this['_outOfBoundaryAmountDirty'] = true;
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
        }
    };
    UISpuerScrollView.prototype._getContentTopBoundary = function () {
        var _a;
        var offset = 0;
        if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) {
            var local = void 0;
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.header.getBoundingBoxToWorld().yMax));
            }
            else {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.header['getBounding']().yMax));
            }
            offset = local.y + this.layout.paddingTop;
            if (this.isHeader && this.isLockHeader) {
                offset += this.headerHeight;
            }
        }
        return offset;
    };
    UISpuerScrollView.prototype._getContentBottomBoundary = function () {
        var _a;
        var offset = 0;
        if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) {
            var local = void 0;
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.footer.getBoundingBoxToWorld().yMin));
            }
            else {
                local = this.view.convertToNodeSpaceAR(cc.v2(0, this.layout.footer['getBounding']().yMin));
            }
            offset = local.y - this.layout.paddingBottom;
            if (this.isFooter && this.isLockFooter) {
                offset -= this.footerHeight;
            }
        }
        return offset;
    };
    UISpuerScrollView.prototype._getContentLeftBoundary = function () {
        var _a;
        var offset = 0;
        if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) {
            var local = void 0;
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.header.getBoundingBoxToWorld().xMin, 0));
            }
            else {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.header['getBounding']().xMin, 0));
            }
            offset = local.x - this.layout.paddingLeft;
            if (this.isHeader && this.isLockHeader) {
                offset -= this.headerHeight;
            }
        }
        return offset;
    };
    UISpuerScrollView.prototype._getContentRightBoundary = function () {
        var _a;
        var offset = 0;
        if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) {
            var local = void 0;
            if (this.layout.childBoundingBox) {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.footer.getBoundingBoxToWorld().xMax, 0));
            }
            else {
                local = this.view.convertToNodeSpaceAR(cc.v2(this.layout.footer['getBounding']().xMax, 0));
            }
            offset = local.x + this.layout.paddingRight;
            if (this.isFooter && this.isLockFooter) {
                offset += this.footerHeight;
            }
        }
        return offset;
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
            this.emitPullDownEvent({ refresh: false, progress: 0 });
            this.emitPullUpEvent({ refresh: false, progress: 0 });
            this.isAutoBack = true;
        }
        if (this.isAutoBack)
            return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0 && this.isHeader && !this.isLockHeader) {
            var progress = Math.min(offset / this.headerOutOffset, 1);
            this.emitPullDownEvent({ refresh: false, progress: progress });
        }
        else if (offset < 0 && this.isFooter && !this.isLockFooter) {
            var progress = Math.min(-offset / this.footerOutOffset, 1);
            this.emitPullUpEvent({ refresh: false, progress: progress });
        }
        else {
            this.emitPullDownEvent({ refresh: false, progress: 0 });
            this.emitPullUpEvent({ refresh: false, progress: 0 });
        }
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