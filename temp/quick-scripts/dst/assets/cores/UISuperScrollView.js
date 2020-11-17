
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cores/UISuperScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
            this.layout.scrollToHeaderOrFooter = false;
        }
    };
    UISpuerScrollView.prototype._getContentTopBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.topBoundary;
        }
        else {
            local = this._getContentBottomBoundary() + viewSize.height;
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentBottomBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.bottomBoundary;
        }
        else {
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentLeftBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.leftBoundary;
        }
        else {
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentRightBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.rightBoundary;
        }
        else {
            local = this._getContentLeftBoundary() + viewSize.width;
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._startAutoScroll = function (deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
            if (this.isMoveHeader && !this.isLockHeader) {
                this.isLockHeader = true;
                this.vertical && (deltaMove.y -= this.headerOutOffset);
                this.horizontal && (deltaMove.x += this.headerOutOffset);
                this.emitPullDownEvent({ action: true, progress: this.headerProgress, progressStage: 'lock' });
            }
            else if (this.isMoveFooter && !this.isLockFooter) {
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
            return;
        if (this['_autoScrollBraking'])
            return;
        if (!this.autoScrolling)
            return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0) {
            var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
            var progressStage = void 0;
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1);
                progressStage = 'lock';
            }
            else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
                progressStage = 'release';
            }
            this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: progressStage });
        }
        else if (offset < 0) {
            var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
            var progressStage = void 0;
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1);
                progressStage = 'lock';
            }
            else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
                progressStage = 'release';
            }
            this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: progressStage });
        }
        else if (offset == 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDdEMsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFDbEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBUXJCO0lBQStDLHFDQUFhO0lBQTVEO1FBQUEscUVBOE9DO1FBMU9NLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBQ1ksb0JBQWMsR0FBVyxDQUFDLENBQUE7UUFJbkUscUJBQWUsR0FBVyxHQUFHLENBQUE7UUFDWSxvQkFBYyxHQUFXLENBQUMsQ0FBQTtRQUluRSxvQkFBYyxHQUFnQyxFQUFFLENBQUE7UUFJaEQsa0JBQVksR0FBZ0MsRUFBRSxDQUFBO1FBSXpDLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLG9CQUFjLEdBQVcsQ0FBQyxDQUFBO1FBQzFCLG9CQUFjLEdBQVcsQ0FBQyxDQUFBO1FBQzFCLGFBQU8sR0FBa0IsSUFBSSxDQUFBOztJQWtOekMsQ0FBQztJQTNORyxzQkFBVyxtQ0FBSTthQUFmLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQVcsNENBQWE7YUFDeEIsY0FBNkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFENUQsVUFBeUIsS0FBYyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBUzNFLHNCQUFZLHFDQUFNO2FBQWxCO1lBQ0ks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LENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBek9FO1FBSEYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE9BQU87WUFDcEIsT0FBTyxFQUFFLGlCQUFpQjtTQUM3QixDQUFDOzhEQUE4QjtJQUNZO1FBQTNDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsQ0FBQzs2REFBMkI7SUFJbkU7UUFIRixRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUsaUJBQWlCO1NBQzdCLENBQUM7OERBQThCO0lBQ1k7UUFBM0MsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxDQUFDOzZEQUEyQjtJQUluRTtRQUhGLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQzs2REFBaUQ7SUFJaEQ7UUFIRixRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZO1lBQy9CLFdBQVcsRUFBRSxNQUFNO1NBQ3RCLENBQUM7MkRBQStDO0lBbEJoQyxpQkFBaUI7UUFGckMsT0FBTztRQUNQLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztPQUNMLGlCQUFpQixDQThPckM7SUFBRCx3QkFBQztDQTlPRCxBQThPQyxDQTlPOEMsRUFBRSxDQUFDLFVBQVUsR0E4TzNEO2tCQTlPb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQgZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHksIG1lbnUgfSA9IGNjLl9kZWNvcmF0b3I7XG5jb25zdCBFUFNJTE9OID0gMWUtNDtcbmV4cG9ydCBpbnRlcmZhY2UgVUlTdXBlckhlYWRlckFuZEZvb3RlckV2ZW50IHtcbiAgICBhY3Rpb246IGJvb2xlYW4sXG4gICAgcHJvZ3Jlc3M6IG51bWJlcixcbiAgICBwcm9ncmVzc1N0YWdlOiBcInRvdWNoXCIgfCBcIndhaXRcIiB8IFwibG9ja1wiIHwgXCJyZWxlYXNlXCIsXG59XG5AY2NjbGFzc1xuQG1lbnUoXCJVSVNwdWVyU2Nyb2xsVmlld1wiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTcHVlclNjcm9sbFZpZXcgZXh0ZW5kcyBjYy5TY3JvbGxWaWV3IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLpobbpg6jlgY/np7vph49cIixcbiAgICAgICAgdG9vbHRpcDogXCLkuIvmi4nml7botoXov4fmraTlgY/np7vkvJrlj5HpgIHkuIvmi4nkuovku7ZcIlxuICAgIH0pIGhlYWRlck91dE9mZnNldDogbnVtYmVyID0gMjAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5ruh6Laz6Kem5Y+RSGVhZGVy55qE5YCN5pWwXCIgfSkgaGVhZGVyTXVsdGlwbGU6IG51bWJlciA9IDJcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlupXpg6jlgY/np7vph49cIixcbiAgICAgICAgdG9vbHRpcDogXCLkuIrmi4nml7botoXov4fmraTlgY/np7vkvJrlj5HpgIHkuIrmi4nkuovku7ZcIlxuICAgIH0pIGZvb3Rlck91dE9mZnNldDogbnVtYmVyID0gMjAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5ruh6Laz6Kem5Y+RRm9vdGVy55qE5YCN5pWwXCIgfSkgZm9vdGVyTXVsdGlwbGU6IG51bWJlciA9IDJcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIvmi4nkuovku7ZcIlxuICAgIH0pIHB1bGxEb3duRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS4iuaLieS6i+S7tlwiXG4gICAgfSkgcHVsbFVwRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIHB1YmxpYyBnZXQgdmlldygpOiBjYy5Ob2RlIHsgcmV0dXJuIHRoaXNbJ192aWV3J10gfVxuICAgIHB1YmxpYyBzZXQgYXV0b1Njcm9sbGluZyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzWydfYXV0b1Njcm9sbGluZyddID0gdmFsdWUgfVxuICAgIHB1YmxpYyBnZXQgYXV0b1Njcm9sbGluZygpIHsgcmV0dXJuIHRoaXNbJ19hdXRvU2Nyb2xsaW5nJ10gfVxuICAgIHByaXZhdGUgaXNNb3ZlSGVhZGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzTW92ZUZvb3RlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0xvY2tIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNMb2NrRm9vdGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGhlYWRlclByb2dyZXNzOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBmb290ZXJQcm9ncmVzczogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgX2xheW91dDogVUlTdXBlckxheW91dCA9IG51bGxcbiAgICBwcml2YXRlIGdldCBsYXlvdXQoKTogVUlTdXBlckxheW91dCB7XG4gICAgICAgIGlmICh0aGlzLl9sYXlvdXQgPT0gbnVsbCkgdGhpcy5fbGF5b3V0ID0gdGhpcy5jb250ZW50LmdldENvbXBvbmVudChVSVN1cGVyTGF5b3V0KVxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzSGVhZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0Py5oZWFkZXJbJ2luZGV4J10gPT0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5mb290ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQ/LmZvb3RlclsnaW5kZXgnXSA9PSB0aGlzLmxheW91dC5tYXhJdGVtVG90YWwgLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNGb290ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5mb290ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddID09IHRoaXMubGF5b3V0Lm1heEl0ZW1Ub3RhbCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0Py5oZWFkZXJbJ2luZGV4J10gPT0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8qKiDmmK/lkKbpnIDopoHorqHnrpfvvJ/lpoLmnpzkuIrmi4kv5LiL5ouJ5LqL5Lu25rKh5pyJ55uR5ZCs6ICF5YiZ5LiN6ZyA6KaB55u45YWz55qE6K6h566XICovXG4gICAgcHVibGljIGdldCBpc0NhbGN1bFB1bGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1bGxEb3duRXZlbnRzLmxlbmd0aCA+IDAgfHwgdGhpcy5wdWxsVXBFdmVudHMubGVuZ3RoID4gMFxuICAgIH1cbiAgICBwdWJsaWMgY2FsY3VsYXRlQm91bmRhcnkoKSB7XG4gICAgICAgIHRoaXNbJ19jYWxjdWxhdGVCb3VuZGFyeSddKClcbiAgICB9XG4gICAgcHVibGljIGdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KG9mZnNldD86IGNjLlZlYzIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeSddKG9mZnNldClcbiAgICB9XG4gICAgcHVibGljIHJlbGVhc2UoKSB7XG4gICAgICAgIHRoaXMuaXNNb3ZlSGVhZGVyID0gZmFsc2VcbiAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5pc0xvY2tIZWFkZXIgfHwgdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kYXJ5ID0gdGhpcy5nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeSgpXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbCA/IG91dE9mQm91bmRhcnkueSA6IC1vdXRPZkJvdW5kYXJ5LnhcbiAgICAgICAgICAgIGxldCBhdXRvU2Nyb2xsID0gdHJ1ZVxuICAgICAgICAgICAgaWYgKG9mZnNldCA9PSAwIHx8IHRoaXMuaXNMb2NrSGVhZGVyICYmIG9mZnNldCA8IDAgfHwgdGhpcy5pc0xvY2tGb290ZXIgJiYgb2Zmc2V0ID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9ncmVzcygpXG4gICAgICAgICAgICAgICAgYXV0b1Njcm9sbCA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmlzTG9ja0hlYWRlciA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmlzTG9ja0Zvb3RlciA9IGZhbHNlXG4gICAgICAgICAgICBpZiAoYXV0b1Njcm9sbCkge1xuICAgICAgICAgICAgICAgIHRoaXNbJ19vdXRPZkJvdW5kYXJ5QW1vdW50RGlydHknXSA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzWydfcHJvY2Vzc0luZXJ0aWFTY3JvbGwnXSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3MoKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKumHjee9ruWIl+ihqCDlvZPliJfooajmu5HliqjliLDlupXpg6jml7Yg54S25ZCO5LiN566h6YCa6L+H5LuA5LmI5pa55byPKOWQjOatpXzlvILmraUp5YeP5bCR5LqG5pW05L2T55qEKOmrmOW6pnznvKnmlL585bC65a+4KSDml7bkv53or4HlhoXlrrnmmL7npLrmraPnoa4gKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXNbJ19vdXRPZkJvdW5kYXJ5QW1vdW50RGlydHknXSA9IHRydWVcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICBpZiAoIW9mZnNldC5mdXp6eUVxdWFscyhjYy52MigwLCAwKSwgRVBTSUxPTikpIHtcbiAgICAgICAgICAgIHRoaXNbJ19wcm9jZXNzSW5lcnRpYVNjcm9sbCddKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9vblRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgc3VwZXJbJ19vblRvdWNoTW92ZWQnXShldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICAgICAgaWYgKHRoaXMuaXNDYWxjdWxQdWxsKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCAmJiB0aGlzLmlzSGVhZGVyICYmICF0aGlzLmlzTG9ja0hlYWRlciAmJiAhdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclByb2dyZXNzID0gb2Zmc2V0IDwgRVBTSUxPTiA/IDAgOiBvZmZzZXQgLyB0aGlzLmhlYWRlck91dE9mZnNldFxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPSBvZmZzZXQgPCBFUFNJTE9OID8gMCA6IG9mZnNldCAvIHRoaXMuaGVhZGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSB0aGlzLmhlYWRlclByb2dyZXNzID49IHRoaXMuaGVhZGVyTXVsdGlwbGVcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgYWN0aW9uOiBmYWxzZSwgcHJvZ3Jlc3M6IHRoaXMuaGVhZGVyUHJvZ3Jlc3MsIHByb2dyZXNzU3RhZ2U6IHRoaXMuaXNNb3ZlSGVhZGVyID8gXCJ3YWl0XCIgOiBcInRvdWNoXCIgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiAwLCBwcm9ncmVzc1N0YWdlOiBcInJlbGVhc2VcIiB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPCAwICYmIHRoaXMuaXNGb290ZXIgJiYgIXRoaXMuaXNMb2NrRm9vdGVyICYmICF0aGlzLmlzTG9ja0hlYWRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPSAtb2Zmc2V0IDwgRVBTSUxPTiA/IDAgOiAtb2Zmc2V0IC8gdGhpcy5mb290ZXJPdXRPZmZzZXRcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZUZvb3RlciA9IHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPj0gdGhpcy5mb290ZXJNdWx0aXBsZVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgYWN0aW9uOiBmYWxzZSwgcHJvZ3Jlc3M6IHRoaXMuZm9vdGVyUHJvZ3Jlc3MsIHByb2dyZXNzU3RhZ2U6IHRoaXMuaXNNb3ZlRm9vdGVyID8gXCJ3YWl0XCIgOiBcInRvdWNoXCIgfSlcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgYWN0aW9uOiBmYWxzZSwgcHJvZ3Jlc3M6IDAsIHByb2dyZXNzU3RhZ2U6IFwicmVsZWFzZVwiIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgICAgICBzdXBlclsnX2Rpc3BhdGNoRXZlbnQnXShldmVudClcbiAgICAgICAgaWYgKGV2ZW50ID09ICdzY3JvbGwtZW5kZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb0hlYWRlck9yRm9vdGVyID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50VG9wQm91bmRhcnkoKSB7XG4gICAgICAgIGxldCB2aWV3U2l6ZSA9IHRoaXMudmlldy5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgIGxldCBsb2NhbCA9IDBcblxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmhlYWRlciAmJiB0aGlzLmxheW91dC5nZXRSZWFsbHlTaXplKCkuaGVpZ2h0ID4gdmlld1NpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0LnRvcEJvdW5kYXJ5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMuX2dldENvbnRlbnRCb3R0b21Cb3VuZGFyeSgpICsgdmlld1NpemUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNIZWFkZXIgJiYgdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgIGxvY2FsICs9IHRoaXMuaGVhZGVyT3V0T2Zmc2V0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsXG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRCb3R0b21Cb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IGxvY2FsID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3RlciAmJiB0aGlzLmxheW91dC5nZXRSZWFsbHlTaXplKCkuaGVpZ2h0ID4gdmlld1NpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0LmJvdHRvbUJvdW5kYXJ5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0Lm5vZGUueSAtIHRoaXMubGF5b3V0Lm5vZGUuZ2V0QW5jaG9yUG9pbnQoKS55ICogdmlld1NpemUuaGVpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRm9vdGVyICYmIHRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICBsb2NhbCAtPSB0aGlzLmZvb3Rlck91dE9mZnNldFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFxuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50TGVmdEJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgdmlld1NpemUgPSB0aGlzLnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICBsZXQgbG9jYWwgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS53aWR0aCA+IHZpZXdTaXplLndpZHRoKSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0LmxlZnRCb3VuZGFyeVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5ub2RlLnggLSB0aGlzLmxheW91dC5ub2RlLmdldEFuY2hvclBvaW50KCkueCAqIHZpZXdTaXplLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzSGVhZGVyICYmIHRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICBsb2NhbCAtPSB0aGlzLmhlYWRlck91dE9mZnNldFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsb2NhbFxuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50UmlnaHRCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IGxvY2FsID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3RlciAmJiB0aGlzLmxheW91dC5nZXRSZWFsbHlTaXplKCkud2lkdGggPiB2aWV3U2l6ZS53aWR0aCkge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5yaWdodEJvdW5kYXJ5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMuX2dldENvbnRlbnRMZWZ0Qm91bmRhcnkoKSArIHZpZXdTaXplLndpZHRoXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNGb290ZXIgJiYgdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIGxvY2FsICs9IHRoaXMuZm9vdGVyT3V0T2Zmc2V0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsXG4gICAgfVxuICAgIHByaXZhdGUgX3N0YXJ0QXV0b1Njcm9sbChkZWx0YU1vdmUsIHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZCkge1xuICAgICAgICBpZiAodGhpcy5pc0NhbGN1bFB1bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92ZUhlYWRlciAmJiAhdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja0hlYWRlciA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsICYmIChkZWx0YU1vdmUueSAtPSB0aGlzLmhlYWRlck91dE9mZnNldClcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWwgJiYgKGRlbHRhTW92ZS54ICs9IHRoaXMuaGVhZGVyT3V0T2Zmc2V0KVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyBhY3Rpb246IHRydWUsIHByb2dyZXNzOiB0aGlzLmhlYWRlclByb2dyZXNzLCBwcm9ncmVzc1N0YWdlOiAnbG9jaycgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc01vdmVGb290ZXIgJiYgIXRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvY2tGb290ZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbCAmJiAoZGVsdGFNb3ZlLnkgKz0gdGhpcy5mb290ZXJPdXRPZmZzZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsICYmIChkZWx0YU1vdmUueCAtPSB0aGlzLmZvb3Rlck91dE9mZnNldClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IGFjdGlvbjogdHJ1ZSwgcHJvZ3Jlc3M6IHRoaXMuZm9vdGVyUHJvZ3Jlc3MsIHByb2dyZXNzU3RhZ2U6ICdsb2NrJyB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyWydfc3RhcnRBdXRvU2Nyb2xsJ10oZGVsdGFNb3ZlLCB0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgfVxuICAgIHByaXZhdGUgX3VwZGF0ZVNjcm9sbEJhcihvdXRPZkJvdW5kYXJ5KSB7XG4gICAgICAgIHN1cGVyWydfdXBkYXRlU2Nyb2xsQmFyJ10ob3V0T2ZCb3VuZGFyeSlcbiAgICAgICAgaWYgKCF0aGlzLmlzQ2FsY3VsUHVsbCkgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzWydfYXV0b1Njcm9sbEJyYWtpbmcnXSkgcmV0dXJuXG4gICAgICAgIGlmICghdGhpcy5hdXRvU2Nyb2xsaW5nKSByZXR1cm5cbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBvZmZzZXQgPCBFUFNJTE9OID8gMCA6IG9mZnNldCAvIHRoaXMuaGVhZGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NTdGFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJQcm9ncmVzcyA9IHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPT0gMSA/IHRoaXMuaGVhZGVyUHJvZ3Jlc3MgOiBNYXRoLm1heChwcm9ncmVzcywgMSlcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1N0YWdlID0gJ2xvY2snXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPSBwcm9ncmVzcyA8IHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPyBwcm9ncmVzcyA6IHRoaXMuaGVhZGVyUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1N0YWdlID0gJ3JlbGVhc2UnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgYWN0aW9uOiBmYWxzZSwgcHJvZ3Jlc3M6IHRoaXMuaGVhZGVyUHJvZ3Jlc3MsIHByb2dyZXNzU3RhZ2U6IHByb2dyZXNzU3RhZ2UgfSlcblxuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8IDApIHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IC1vZmZzZXQgPCBFUFNJTE9OID8gMCA6IC1vZmZzZXQgLyB0aGlzLmZvb3Rlck91dE9mZnNldFxuICAgICAgICAgICAgbGV0IHByb2dyZXNzU3RhZ2VcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPSB0aGlzLmZvb3RlclByb2dyZXNzID09IDEgPyB0aGlzLmZvb3RlclByb2dyZXNzIDogTWF0aC5tYXgocHJvZ3Jlc3MsIDEpXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NTdGFnZSA9ICdsb2NrJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclByb2dyZXNzID0gcHJvZ3Jlc3MgPCB0aGlzLmZvb3RlclByb2dyZXNzID8gcHJvZ3Jlc3MgOiB0aGlzLmZvb3RlclByb2dyZXNzXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NTdGFnZSA9ICdyZWxlYXNlJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogdGhpcy5mb290ZXJQcm9ncmVzcywgcHJvZ3Jlc3NTdGFnZTogcHJvZ3Jlc3NTdGFnZSB9KVxuXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID09IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0xvY2tIZWFkZXIgJiYgIXRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclByb2dyZXNzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGNsZWFyUHJvZ3Jlc3MoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPSAwXG4gICAgICAgIHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPSAwXG4gICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogMCwgcHJvZ3Jlc3NTdGFnZTogJ3JlbGVhc2UnIH0pXG4gICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgYWN0aW9uOiBmYWxzZSwgcHJvZ3Jlc3M6IDAsIHByb2dyZXNzU3RhZ2U6ICdyZWxlYXNlJyB9KVxuICAgIH1cbiAgICBwcml2YXRlIGVtaXRQdWxsRG93bkV2ZW50KGRhdGE6IFVJU3VwZXJIZWFkZXJBbmRGb290ZXJFdmVudCkge1xuICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5wdWxsRG93bkV2ZW50cywgdGhpcywgZGF0YSlcbiAgICB9XG4gICAgcHJpdmF0ZSBlbWl0UHVsbFVwRXZlbnQoZGF0YTogVUlTdXBlckhlYWRlckFuZEZvb3RlckV2ZW50KSB7XG4gICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnB1bGxVcEV2ZW50cywgdGhpcywgZGF0YSlcbiAgICB9XG59XG4iXX0=