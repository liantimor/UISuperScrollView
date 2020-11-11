
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
            this.isEmitProgress = true;
            this['_outOfBoundaryAmountDirty'] = true;
            this['_processInertiaScroll']();
        }
    };
    /**
     * 重置列表
     * 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(高度|缩放|尺寸) 时保证内容显示正确
     */
    UISpuerScrollView.prototype.reset = function () {
        this['_outOfBoundaryAmountDirty'] = true;
        var offset = this.getHowMuchOutOfBoundary();
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            this.isEmitProgress = false;
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
            // let progress = Math.min(offset / this.headerOutOffset, 1)
            var progress = offset / this.headerOutOffset;
            this.emitPullDownEvent({ refresh: false, progress: progress });
        }
        else if (offset < 0 && this.isFooter && !this.isLockFooter) {
            // let progress = Math.min(-offset / this.footerOutOffset, 1)
            var progress = -offset / this.footerOutOffset;
            this.emitPullUpEvent({ refresh: false, progress: progress });
        }
        else {
            this.emitPullDownEvent({ refresh: false, progress: 0 });
            this.emitPullUpEvent({ refresh: false, progress: 0 });
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBRXJCO0lBQStDLHFDQUFhO0lBQTVEO1FBQUEscUVBZ1BDO1FBNU9NLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBSTdCLGtCQUFZLEdBQVcsR0FBRyxDQUFBO1FBSzFCLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBSzdCLGtCQUFZLEdBQVcsR0FBRyxDQUFBO1FBSTFCLG9CQUFjLEdBQWdDLEVBQUUsQ0FBQTtRQUloRCxrQkFBWSxHQUFnQyxFQUFFLENBQUE7UUFFMUMsZUFBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBSXZCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGdCQUFVLEdBQVksS0FBSyxDQUFBO1FBQzNCLG9CQUFjLEdBQVksS0FBSyxDQUFBO1FBQy9CLGFBQU8sR0FBa0IsSUFBSSxDQUFBOztJQTBNekMsQ0FBQztJQW5ORyxzQkFBVyxtQ0FBSTthQUFmLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQVcsNENBQWE7YUFDeEIsY0FBNkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFENUQsVUFBeUIsS0FBYyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lB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Q3BCLE9BQU8sRUFBRSxpQkFBaUI7U0FDN0IsQ0FBQzs4REFBOEI7SUFLN0I7UUFIRixRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsTUFBTTtZQUNuQixPQUFPLEVBQUUsa0JBQWtCO1NBQzlCLENBQUM7MkRBQTJCO0lBSTFCO1FBSEYsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWTtZQUMvQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzZEQUFpRDtJQUloRDtRQUhGLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQzsyREFBK0M7SUExQmhDLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBZ1ByQztJQUFELHdCQUFDO0NBaFBELEFBZ1BDLENBaFA4QyxFQUFFLENBQUMsVUFBVSxHQWdQM0Q7a0JBaFBvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTdXBlckxheW91dCBmcm9tICcuL1VJU3VwZXJMYXlvdXQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IEVQU0lMT04gPSAxZS00O1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3B1ZXJTY3JvbGxWaWV3IGV4dGVuZHMgY2MuU2Nyb2xsVmlldyB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6aG26YOo5YGP56e76YePXCIsXG4gICAgICAgIHRvb2x0aXA6IFwi5LiL5ouJ5pe26LaF6L+H5q2k5YGP56e75Lya5Y+R6YCB5LiL5ouJ5LqL5Lu2XCJcbiAgICB9KSBoZWFkZXJPdXRPZmZzZXQ6IG51bWJlciA9IDIwMFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIumhtumDqOmrmOW6plwiLFxuICAgICAgICB0b29sdGlwOiBcIuW9k+S4i+aLieS6i+S7tuinpuWPkeaXtiDpobbpg6jov73liqDnmoTpq5jluqZcIlxuICAgIH0pIGhlYWRlckhlaWdodDogbnVtYmVyID0gMTAwXG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlupXpg6jlgY/np7vph49cIixcbiAgICAgICAgdG9vbHRpcDogXCLkuIrmi4nml7botoXov4fmraTlgY/np7vkvJrlj5HpgIHkuIrmi4nkuovku7ZcIlxuICAgIH0pIGZvb3Rlck91dE9mZnNldDogbnVtYmVyID0gMjAwXG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlupXpg6jpq5jluqZcIixcbiAgICAgICAgdG9vbHRpcDogXCLlvZPkuIrmi4nkuovku7bop6blj5Hml7Yg5bqV6YOo6L+95Yqg55qE6auY5bqmXCJcbiAgICB9KSBmb290ZXJIZWlnaHQ6IG51bWJlciA9IDEwMFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS4i+aLieS6i+S7tlwiXG4gICAgfSkgcHVsbERvd25FdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5LiK5ouJ5LqL5Lu2XCJcbiAgICB9KSBwdWxsVXBFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgZGVsdGFNb3ZlID0gY2MuVmVjMi5aRVJPXG4gICAgcHVibGljIGdldCB2aWV3KCk6IGNjLk5vZGUgeyByZXR1cm4gdGhpc1snX3ZpZXcnXSB9XG4gICAgcHVibGljIHNldCBhdXRvU2Nyb2xsaW5nKHZhbHVlOiBib29sZWFuKSB7IHRoaXNbJ19hdXRvU2Nyb2xsaW5nJ10gPSB2YWx1ZSB9XG4gICAgcHVibGljIGdldCBhdXRvU2Nyb2xsaW5nKCkgeyByZXR1cm4gdGhpc1snX2F1dG9TY3JvbGxpbmcnXSB9XG4gICAgcHJpdmF0ZSBpc01vdmVIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNNb3ZlRm9vdGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzTG9ja0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0xvY2tGb290ZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNBdXRvQmFjazogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0VtaXRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBfbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIHByaXZhdGUgZ2V0IGxheW91dCgpOiBVSVN1cGVyTGF5b3V0IHtcbiAgICAgICAgaWYgKHRoaXMuX2xheW91dCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXlvdXQgPSB0aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KFVJU3VwZXJMYXlvdXQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheW91dFxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc0hlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0Py5oZWFkZXIgJiYgdGhpcy5sYXlvdXQ/LmhlYWRlclsnaW5kZXgnXSA9PSAwIHx8IGZhbHNlXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzRm9vdGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQ/LmZvb3RlciAmJiB0aGlzLmxheW91dD8uZm9vdGVyWydpbmRleCddID09IHRoaXMubGF5b3V0Py5tYXhJdGVtVG90YWwgLSAxIHx8IGZhbHNlXG4gICAgfVxuICAgIC8qKiDmmK/lkKbpnIDopoHorqHnrpfvvJ/lpoLmnpzkuIrmi4kv5LiL5ouJ5LqL5Lu25rKh5pyJ55uR5ZCs6ICF5YiZ5LiN6ZyA6KaB55u45YWz55qE6K6h566XICovXG4gICAgcHJpdmF0ZSBnZXQgaXNDYWxjdWxQdWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdWxsRG93bkV2ZW50cy5sZW5ndGggPiAwIHx8IHRoaXMucHVsbFVwRXZlbnRzLmxlbmd0aCA+IDBcbiAgICB9XG4gICAgcHVibGljIGNhbGN1bGF0ZUJvdW5kYXJ5KCkge1xuICAgICAgICB0aGlzWydfY2FsY3VsYXRlQm91bmRhcnknXSgpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShvZmZzZXQ/OiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0SG93TXVjaE91dE9mQm91bmRhcnknXShvZmZzZXQpXG4gICAgfVxuICAgIHB1YmxpYyByZWxlYXNlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvY2tIZWFkZXIgfHwgdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlSGVhZGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlRm9vdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrSGVhZGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrRm9vdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSB0cnVlXG4gICAgICAgICAgICB0aGlzWydfb3V0T2ZCb3VuZGFyeUFtb3VudERpcnR5J10gPSB0cnVlXG4gICAgICAgICAgICB0aGlzWydfcHJvY2Vzc0luZXJ0aWFTY3JvbGwnXSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6YeN572u5YiX6KGoXG4gICAgICog5b2T5YiX6KGo5ruR5Yqo5Yiw5bqV6YOo5pe2IOeEtuWQjuS4jeeuoemAmui/h+S7gOS5iOaWueW8jyjlkIzmraV85byC5q2lKeWHj+WwkeS6huaVtOS9k+eahCjpq5jluqZ857yp5pS+fOWwuuWvuCkg5pe25L+d6K+B5YaF5a655pi+56S65q2j56GuXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzWydfb3V0T2ZCb3VuZGFyeUFtb3VudERpcnR5J10gPSB0cnVlXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KClcbiAgICAgICAgaWYgKCFvZmZzZXQuZnV6enlFcXVhbHMoY2MudjIoMCwgMCksIEVQU0lMT04pKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW1pdFByb2dyZXNzID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXNbJ19wcm9jZXNzSW5lcnRpYVNjcm9sbCddKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9vblRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgc3VwZXJbJ19vblRvdWNoTW92ZWQnXShldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICAgICAgbGV0IGRlbHRhID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54IC0gZXZlbnQuZ2V0UHJldmlvdXNMb2NhdGlvbigpLngsIGV2ZW50LmdldExvY2F0aW9uKCkueSAtIGV2ZW50LmdldFByZXZpb3VzTG9jYXRpb24oKS55KVxuICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCAmJiBkZWx0YS55ICE9IDAgfHwgdGhpcy5ob3Jpem9udGFsICYmIGRlbHRhLnggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWx0YU1vdmUgPSBkZWx0YVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBdXRvQmFjayA9IGZhbHNlXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpumcgOimgeiuoeeul1xuICAgICAgICBpZiAodGhpcy5pc0NhbGN1bFB1bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSB0cnVlXG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSBvZmZzZXQgPj0gdGhpcy5oZWFkZXJPdXRPZmZzZXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDwgMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSBvZmZzZXQgPD0gLXRoaXMuZm9vdGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgICAgICBzdXBlclsnX2Rpc3BhdGNoRXZlbnQnXShldmVudClcbiAgICAgICAgaWYgKGV2ZW50ID09ICdzY3JvbGwtZW5kZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhTW92ZSA9IGNjLlZlYzIuWkVST1xuICAgICAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc0F1dG9CYWNrID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRUb3BCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbFxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCB0aGlzLmxheW91dC5oZWFkZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueU1heCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKDAsIHRoaXMubGF5b3V0LmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnlNYXgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbG9jYWwueSArIHRoaXMubGF5b3V0LnBhZGRpbmdUb3BcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSGVhZGVyICYmIHRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuaGVhZGVySGVpZ2h0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50Qm90dG9tQm91bmRhcnkoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5jaGlsZEJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoMCwgdGhpcy5sYXlvdXQuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnlNaW4pKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCB0aGlzLmxheW91dC5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS55TWluKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCA9IGxvY2FsLnkgLSB0aGlzLmxheW91dC5wYWRkaW5nQm90dG9tXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Zvb3RlciAmJiB0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIG9mZnNldCAtPSB0aGlzLmZvb3RlckhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudExlZnRCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbFxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih0aGlzLmxheW91dC5oZWFkZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueE1pbiwgMCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHRoaXMubGF5b3V0LmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnhNaW4sIDApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbG9jYWwueCAtIHRoaXMubGF5b3V0LnBhZGRpbmdMZWZ0XG4gICAgICAgICAgICBpZiAodGhpcy5pc0hlYWRlciAmJiB0aGlzLmlzTG9ja0hlYWRlcikge1xuICAgICAgICAgICAgICAgIG9mZnNldCAtPSB0aGlzLmhlYWRlckhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudFJpZ2h0Qm91bmRhcnkoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5jaGlsZEJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIodGhpcy5sYXlvdXQuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnhNYXgsIDApKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih0aGlzLmxheW91dC5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS54TWF4LCAwKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCA9IGxvY2FsLnggKyB0aGlzLmxheW91dC5wYWRkaW5nUmlnaHRcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRm9vdGVyICYmIHRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuZm9vdGVySGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mZnNldFxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0QXV0b1Njcm9sbChkZWx0YU1vdmUsIHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZCkge1xuICAgICAgICBpZiAodGhpcy5pc0NhbGN1bFB1bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92ZUhlYWRlciAmJiAhdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja0hlYWRlciA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsICYmIChkZWx0YU1vdmUueSAtPSB0aGlzLmhlYWRlckhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWwgJiYgKGRlbHRhTW92ZS54ICs9IHRoaXMuaGVhZGVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyByZWZyZXNoOiB0cnVlLCBwcm9ncmVzczogMSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlRm9vdGVyICYmICF0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrRm9vdGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgJiYgKGRlbHRhTW92ZS55ICs9IHRoaXMuZm9vdGVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCAmJiAoZGVsdGFNb3ZlLnggLT0gdGhpcy5mb290ZXJIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyByZWZyZXNoOiB0cnVlLCBwcm9ncmVzczogMSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyWydfc3RhcnRBdXRvU2Nyb2xsJ10oZGVsdGFNb3ZlLCB0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgfVxuICAgIHByaXZhdGUgX2lzTmVjZXNzYXJ5QXV0b1Njcm9sbEJyYWtlKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXJbJ19pc05lY2Vzc2FyeUF1dG9TY3JvbGxCcmFrZSddKClcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5pc0F1dG9CYWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgcHJpdmF0ZSBfdXBkYXRlU2Nyb2xsQmFyKG91dE9mQm91bmRhcnkpIHtcbiAgICAgICAgc3VwZXJbJ191cGRhdGVTY3JvbGxCYXInXShvdXRPZkJvdW5kYXJ5KVxuICAgICAgICBpZiAoIXRoaXMuaXNDYWxjdWxQdWxsKSByZXR1cm5cbiAgICAgICAgLy8g6Ieq5Yqo5Zue5by55pe25LiN5Y+R6YCB5LqL5Lu2IOWPquacieWcqOaJi+WKqOa7keWKqOaXtuaJjeinpuWPkVxuICAgICAgICBpZiAodGhpc1snX2F1dG9TY3JvbGxCcmFraW5nJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyByZWZyZXNoOiBmYWxzZSwgcHJvZ3Jlc3M6IDAgfSlcbiAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiAwIH0pXG4gICAgICAgICAgICB0aGlzLmlzQXV0b0JhY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNBdXRvQmFjaykgcmV0dXJuXG5cbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgIGlmIChvZmZzZXQgPiAwICYmIHRoaXMuaXNIZWFkZXIgJiYgIXRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICAvLyBsZXQgcHJvZ3Jlc3MgPSBNYXRoLm1pbihvZmZzZXQgLyB0aGlzLmhlYWRlck91dE9mZnNldCwgMSlcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IG9mZnNldCAvIHRoaXMuaGVhZGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiBwcm9ncmVzcyB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8IDAgJiYgdGhpcy5pc0Zvb3RlciAmJiAhdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIC8vIGxldCBwcm9ncmVzcyA9IE1hdGgubWluKC1vZmZzZXQgLyB0aGlzLmZvb3Rlck91dE9mZnNldCwgMSlcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IC1vZmZzZXQgLyB0aGlzLmZvb3Rlck91dE9mZnNldFxuICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyByZWZyZXNoOiBmYWxzZSwgcHJvZ3Jlc3M6IHByb2dyZXNzIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiAwIH0pXG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IHJlZnJlc2g6IGZhbHNlLCBwcm9ncmVzczogMCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbWl0UHVsbERvd25FdmVudChkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYodGhpcy5pc0VtaXRQcm9ncmVzcyl7XG4gICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5wdWxsRG93bkV2ZW50cywgdGhpcywgZGF0YSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGVtaXRQdWxsVXBFdmVudChkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbWl0UHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnB1bGxVcEV2ZW50cywgdGhpcywgZGF0YSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19