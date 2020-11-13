
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/UISuperScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBRXJCO0lBQStDLHFDQUFhO0lBQTVEO1FBQUEscUVBMlFDO1FBdlFNLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBSTdCLGtCQUFZLEdBQVcsR0FBRyxDQUFBO1FBSzFCLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBSzdCLGtCQUFZLEdBQVcsR0FBRyxDQUFBO1FBSTFCLG9CQUFjLEdBQWdDLEVBQUUsQ0FBQTtRQUloRCxrQkFBWSxHQUFnQyxFQUFFLENBQUE7UUFHMUMsZUFBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBSXZCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGdCQUFVLEdBQVksS0FBSyxDQUFBO1FBQzNCLG9CQUFjLEdBQVksS0FBSyxDQUFBO1FBQy9CLHNCQUFnQixHQUFZLElBQUksQ0FBQTtRQUNoQyxnQkFBVSxHQUFZLEtBQUssQ0FBQTtRQUMzQixhQUFPLEdBQWtCLElBQUksQ0FBQTs7SUFrT3pDLENBQUM7SUE3T0csc0JBQVcsbUNBQUk7YUFBZixjQUE2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ25ELHNCQUFXLDRDQUFhO2FBQ3hCLGNBQTZCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQyxDQUFDO2FBRDVELFVBQXlCLEtBQWMsSUFBSSxJ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MkRBQStDO0lBMUJoQyxpQkFBaUI7UUFEckMsT0FBTztPQUNhLGlCQUFpQixDQTJRckM7SUFBRCx3QkFBQztDQTNRRCxBQTJRQyxDQTNROEMsRUFBRSxDQUFDLFVBQVUsR0EyUTNEO2tCQTNRb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQgZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5jb25zdCBFUFNJTE9OID0gMWUtNDtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNwdWVyU2Nyb2xsVmlldyBleHRlbmRzIGNjLlNjcm9sbFZpZXcge1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIumhtumDqOWBj+enu+mHj1wiLFxuICAgICAgICB0b29sdGlwOiBcIuS4i+aLieaXtui2hei/h+atpOWBj+enu+S8muWPkemAgeS4i+aLieS6i+S7tlwiXG4gICAgfSkgaGVhZGVyT3V0T2Zmc2V0OiBudW1iZXIgPSAyMDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLpobbpg6jpq5jluqZcIixcbiAgICAgICAgdG9vbHRpcDogXCLlvZPkuIvmi4nkuovku7bop6blj5Hml7Yg6aG26YOo6L+95Yqg55qE6auY5bqmXCJcbiAgICB9KSBoZWFkZXJIZWlnaHQ6IG51bWJlciA9IDEwMFxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5bqV6YOo5YGP56e76YePXCIsXG4gICAgICAgIHRvb2x0aXA6IFwi5LiK5ouJ5pe26LaF6L+H5q2k5YGP56e75Lya5Y+R6YCB5LiK5ouJ5LqL5Lu2XCJcbiAgICB9KSBmb290ZXJPdXRPZmZzZXQ6IG51bWJlciA9IDIwMFxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5bqV6YOo6auY5bqmXCIsXG4gICAgICAgIHRvb2x0aXA6IFwi5b2T5LiK5ouJ5LqL5Lu26Kem5Y+R5pe2IOW6lemDqOi/veWKoOeahOmrmOW6plwiXG4gICAgfSkgZm9vdGVySGVpZ2h0OiBudW1iZXIgPSAxMDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIvmi4nkuovku7ZcIlxuICAgIH0pIHB1bGxEb3duRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS4iuaLieS6i+S7tlwiXG4gICAgfSkgcHVsbFVwRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuXG4gICAgcHJpdmF0ZSBfb3V0T2ZCb3VuZGFyeUFtb3VudERpcnR5OiBib29sZWFuXG4gICAgcHVibGljIGRlbHRhTW92ZSA9IGNjLlZlYzIuWkVST1xuICAgIHB1YmxpYyBnZXQgdmlldygpOiBjYy5Ob2RlIHsgcmV0dXJuIHRoaXNbJ192aWV3J10gfVxuICAgIHB1YmxpYyBzZXQgYXV0b1Njcm9sbGluZyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzWydfYXV0b1Njcm9sbGluZyddID0gdmFsdWUgfVxuICAgIHB1YmxpYyBnZXQgYXV0b1Njcm9sbGluZygpIHsgcmV0dXJuIHRoaXNbJ19hdXRvU2Nyb2xsaW5nJ10gfVxuICAgIHByaXZhdGUgaXNNb3ZlSGVhZGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzTW92ZUZvb3RlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0xvY2tIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNMb2NrRm9vdGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzQXV0b0JhY2s6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNFbWl0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgY29udGVudE9yaWdpblBvczogY2MuVmVjMiA9IG51bGxcbiAgICBwcml2YXRlIHJlbGVhc2Vpbmc6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgX2xheW91dDogVUlTdXBlckxheW91dCA9IG51bGxcbiAgICBwcml2YXRlIGdldCBsYXlvdXQoKTogVUlTdXBlckxheW91dCB7XG4gICAgICAgIGlmICh0aGlzLl9sYXlvdXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbGF5b3V0ID0gdGhpcy5jb250ZW50LmdldENvbXBvbmVudChVSVN1cGVyTGF5b3V0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNIZWFkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQ/LmhlYWRlclsnaW5kZXgnXSA9PSAwXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNGb290ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddID09IHRoaXMubGF5b3V0Lm1heEl0ZW1Ub3RhbCAtIDFcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICAvKiog5piv5ZCm6ZyA6KaB6K6h566X77yf5aaC5p6c5LiK5ouJL+S4i+aLieS6i+S7tuayoeacieebkeWQrOiAheWImeS4jemcgOimgeebuOWFs+eahOiuoeeulyAqL1xuICAgIHB1YmxpYyBnZXQgaXNDYWxjdWxQdWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdWxsRG93bkV2ZW50cy5sZW5ndGggPiAwIHx8IHRoaXMucHVsbFVwRXZlbnRzLmxlbmd0aCA+IDBcbiAgICB9XG4gICAgcHVibGljIGNhbGN1bGF0ZUJvdW5kYXJ5KCkge1xuICAgICAgICB0aGlzWydfY2FsY3VsYXRlQm91bmRhcnknXSgpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShvZmZzZXQ/OiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0SG93TXVjaE91dE9mQm91bmRhcnknXShvZmZzZXQpXG4gICAgfVxuICAgIHB1YmxpYyByZWxlYXNlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvY2tIZWFkZXIgfHwgdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlSGVhZGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlRm9vdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrSGVhZGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrRm9vdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLnJlbGVhc2VpbmcgPSB0cnVlXG4gICAgICAgICAgICB0aGlzLl9vdXRPZkJvdW5kYXJ5QW1vdW50RGlydHkgPSB0cnVlXG4gICAgICAgICAgICB0aGlzWydfcHJvY2Vzc0luZXJ0aWFTY3JvbGwnXSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHN0b3BBdXRvU2Nyb2xsKCkge1xuICAgICAgICBzdXBlclsnc3RvcEF1dG9TY3JvbGwnXSgpXG4gICAgICAgIHRoaXMuY2xlYXJQcm9ncmVzcygpXG4gICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSBmYWxzZVxuICAgIH1cbiAgICBwcml2YXRlIF9hZGp1c3RDb250ZW50T3V0T2ZCb3VuZGFyeSgpIHtcbiAgICAgICAgdGhpcy5fb3V0T2ZCb3VuZGFyeUFtb3VudERpcnR5ID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXNbJ19pc091dE9mQm91bmRhcnknXSgpKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gdGhpcy5nZXRDb250ZW50UG9zaXRpb24oKS5hZGQob3V0T2ZCb3VuZGFyeSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29udGVudE9yaWdpblBvcykge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudE9yaWdpblBvcyA9IG5ld1Bvc2l0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnNldFBvc2l0aW9uKG5ld1Bvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVTY3JvbGxCYXIoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jb250ZW50T3JpZ2luUG9zLmZ1enp5RXF1YWxzKG5ld1Bvc2l0aW9uLCBFUFNJTE9OKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnNldEhlYWRlclN0YXJ0UG9zKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDph43nva7liJfooahcbiAgICAgKiDlvZPliJfooajmu5HliqjliLDlupXpg6jml7Yg54S25ZCO5LiN566h6YCa6L+H5LuA5LmI5pa55byPKOWQjOatpXzlvILmraUp5YeP5bCR5LqG5pW05L2T55qEKOmrmOW6pnznvKnmlL585bC65a+4KSDml7bkv53or4HlhoXlrrnmmL7npLrmraPnoa5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuX291dE9mQm91bmRhcnlBbW91bnREaXJ0eSA9IHRydWVcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICBpZiAoIW9mZnNldC5mdXp6eUVxdWFscyhjYy52MigwLCAwKSwgRVBTSUxPTikpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5yZWxlYXNlaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclByb2dyZXNzKClcbiAgICAgICAgICAgICAgICB0aGlzLmlzRW1pdFByb2dyZXNzID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXNbJ19wcm9jZXNzSW5lcnRpYVNjcm9sbCddKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9vblRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgc3VwZXJbJ19vblRvdWNoTW92ZWQnXShldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICAgICAgbGV0IGRlbHRhID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54IC0gZXZlbnQuZ2V0UHJldmlvdXNMb2NhdGlvbigpLngsIGV2ZW50LmdldExvY2F0aW9uKCkueSAtIGV2ZW50LmdldFByZXZpb3VzTG9jYXRpb24oKS55KVxuICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCAmJiBkZWx0YS55ICE9IDAgfHwgdGhpcy5ob3Jpem9udGFsICYmIGRlbHRhLnggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWx0YU1vdmUgPSBkZWx0YVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBdXRvQmFjayA9IGZhbHNlXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpumcgOimgeiuoeeul1xuICAgICAgICBpZiAodGhpcy5pc0NhbGN1bFB1bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSB0cnVlXG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSBvZmZzZXQgPj0gdGhpcy5oZWFkZXJPdXRPZmZzZXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDwgMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSBvZmZzZXQgPD0gLXRoaXMuZm9vdGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgICAgICBzdXBlclsnX2Rpc3BhdGNoRXZlbnQnXShldmVudClcbiAgICAgICAgaWYgKGV2ZW50ID09ICdzY3JvbGwtZW5kZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhTW92ZSA9IGNjLlZlYzIuWkVST1xuICAgICAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc0F1dG9CYWNrID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5yZWxlYXNlaW5nID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50VG9wQm91bmRhcnkoKSB7XG4gICAgICAgIGxldCB2aWV3U2l6ZSA9IHRoaXMudmlldy5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgIGxldCBsb2NhbCA9IDBcbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS5oZWlnaHQgPiB2aWV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5sYXlvdXQuaGVhZGVyQm91bmRhcnlZICsgdGhpcy5sYXlvdXQucGFkZGluZ1RvcFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLl9nZXRDb250ZW50Qm90dG9tQm91bmRhcnkoKSArIHZpZXdTaXplLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzSGVhZGVyICYmIHRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICBsb2NhbCArPSB0aGlzLmhlYWRlckhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFxuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50Qm90dG9tQm91bmRhcnkoKSB7XG4gICAgICAgIGxldCB2aWV3U2l6ZSA9IHRoaXMudmlldy5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgIGxldCBsb2NhbCA9IDBcbiAgXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS5oZWlnaHQgPiB2aWV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5sYXlvdXQuZm9vdGVyQm91bmRhcnlZIC0gdGhpcy5sYXlvdXQucGFkZGluZ0JvdHRvbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5ub2RlLnkgLSB0aGlzLmxheW91dC5ub2RlLmdldEFuY2hvclBvaW50KCkueSAqIHZpZXdTaXplLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Zvb3RlciAmJiB0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgbG9jYWwgLT0gdGhpcy5mb290ZXJIZWlnaHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxcbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudExlZnRCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IGxvY2FsID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmhlYWRlciAmJiB0aGlzLmxheW91dC5nZXRSZWFsbHlTaXplKCkud2lkdGggPiB2aWV3U2l6ZS53aWR0aCkge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5oZWFkZXJCb3VuZGFyeVggLSB0aGlzLmxheW91dC5wYWRkaW5nTGVmdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5ub2RlLnggLSB0aGlzLmxheW91dC5ub2RlLmdldEFuY2hvclBvaW50KCkueCAqIHZpZXdTaXplLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzSGVhZGVyICYmIHRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICBsb2NhbCAtPSB0aGlzLmhlYWRlckhlaWdodFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFxuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50UmlnaHRCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IGxvY2FsID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3RlciAmJiB0aGlzLmxheW91dC5nZXRSZWFsbHlTaXplKCkud2lkdGggPiB2aWV3U2l6ZS53aWR0aCkge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5mb290ZXJCb3VuZGFyeVggKyB0aGlzLmxheW91dC5wYWRkaW5nUmlnaHRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5fZ2V0Q29udGVudExlZnRCb3VuZGFyeSgpICsgdmlld1NpemUud2lkdGhcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Zvb3RlciAmJiB0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgbG9jYWwgKz0gdGhpcy5mb290ZXJIZWlnaHRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3RhcnRBdXRvU2Nyb2xsKGRlbHRhTW92ZSwgdGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2FsY3VsUHVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlSGVhZGVyICYmICF0aGlzLmlzTG9ja0hlYWRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrSGVhZGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgJiYgKGRlbHRhTW92ZS55IC09IHRoaXMuaGVhZGVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCAmJiAoZGVsdGFNb3ZlLnggKz0gdGhpcy5oZWFkZXJIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IHJlZnJlc2g6IHRydWUsIHByb2dyZXNzOiAxIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmVGb290ZXIgJiYgIXRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvY2tGb290ZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbCAmJiAoZGVsdGFNb3ZlLnkgKz0gdGhpcy5mb290ZXJIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsICYmIChkZWx0YU1vdmUueCAtPSB0aGlzLmZvb3RlckhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IHJlZnJlc2g6IHRydWUsIHByb2dyZXNzOiAxIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXJbJ19zdGFydEF1dG9TY3JvbGwnXShkZWx0YU1vdmUsIHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG5cbiAgICBwcml2YXRlIF9pc05lY2Vzc2FyeUF1dG9TY3JvbGxCcmFrZSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHN1cGVyWydfaXNOZWNlc3NhcnlBdXRvU2Nyb2xsQnJha2UnXSgpXG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNBdXRvQmFjayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICAgIHByaXZhdGUgX3VwZGF0ZVNjcm9sbEJhcihvdXRPZkJvdW5kYXJ5KSB7XG4gICAgICAgIHN1cGVyWydfdXBkYXRlU2Nyb2xsQmFyJ10ob3V0T2ZCb3VuZGFyeSlcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FsY3VsUHVsbCkgcmV0dXJuXG4gICAgICAgIC8vIOiHquWKqOWbnuW8ueaXtuS4jeWPkemAgeS6i+S7tiDlj6rmnInlnKjmiYvliqjmu5Hliqjml7bmiY3op6blj5FcbiAgICAgICAgaWYgKHRoaXNbJ19hdXRvU2Nyb2xsQnJha2luZyddKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3MoKVxuICAgICAgICAgICAgdGhpcy5pc0F1dG9CYWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzQXV0b0JhY2spIHJldHVyblxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbCA/IG91dE9mQm91bmRhcnkueSA6IC1vdXRPZkJvdW5kYXJ5LnhcbiAgICAgICAgaWYgKG9mZnNldCA+IDAgJiYgdGhpcy5pc0hlYWRlciAmJiAhdGhpcy5pc0xvY2tIZWFkZXIpIHtcblxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gb2Zmc2V0IDwgRVBTSUxPTiA/IDAgOiBvZmZzZXQgLyB0aGlzLmhlYWRlck91dE9mZnNldFxuICAgICAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IHJlZnJlc2g6IGZhbHNlLCBwcm9ncmVzczogcHJvZ3Jlc3MgfSlcbiAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiAwIH0pXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDwgMCAmJiB0aGlzLmlzRm9vdGVyICYmICF0aGlzLmlzTG9ja0Zvb3Rlcikge1xuXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAtb2Zmc2V0IDwgRVBTSUxPTiA/IDAgOiAtb2Zmc2V0IC8gdGhpcy5mb290ZXJPdXRPZmZzZXRcbiAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiBwcm9ncmVzcyB9KVxuICAgICAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IHJlZnJlc2g6IGZhbHNlLCBwcm9ncmVzczogMCB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhclByb2dyZXNzKClcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHByaXZhdGUgY2xlYXJQcm9ncmVzcygpIHtcbiAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IHJlZnJlc2g6IGZhbHNlLCBwcm9ncmVzczogMCB9KVxuICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IHJlZnJlc2g6IGZhbHNlLCBwcm9ncmVzczogMCB9KVxuICAgIH1cbiAgICBwcml2YXRlIGVtaXRQdWxsRG93bkV2ZW50KGRhdGE6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5pc0VtaXRQcm9ncmVzcykge1xuICAgICAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMucHVsbERvd25FdmVudHMsIHRoaXMsIGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBlbWl0UHVsbFVwRXZlbnQoZGF0YTogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmlzRW1pdFByb2dyZXNzKSB7XG4gICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5wdWxsVXBFdmVudHMsIHRoaXMsIGRhdGEpXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=