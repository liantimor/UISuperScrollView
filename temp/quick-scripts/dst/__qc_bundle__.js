
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/cores/UISuperItem');
require('./assets/cores/UISuperLayout');
require('./assets/cores/UISuperScrollView');
require('./assets/examples/chat/chatItem');
require('./assets/examples/chat/chatPanel');
require('./assets/examples/main');
require('./assets/examples/vertical/verticalItem');
require('./assets/examples/vertical/verticalLoadAndRefresh');
require('./assets/examples/vertical/verticalSimple');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0746fbblyhFY4dsGbqYC+cs', 'main');
// examples/main.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var main = /** @class */ (function (_super) {
    __extends(main, _super);
    function main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    main.prototype.goto = function (event, scene) {
        cc.director.loadScene(scene);
    };
    main = __decorate([
        ccclass
    ], main);
    return main;
}(cc.Component));
exports.default = main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQWtDLHdCQUFZO0lBQTlDOztJQUlBLENBQUM7SUFIRyxtQkFBSSxHQUFKLFVBQUssS0FBVSxFQUFFLEtBQWE7UUFDMUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUhnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBSXhCO0lBQUQsV0FBQztDQUpELEFBSUMsQ0FKaUMsRUFBRSxDQUFDLFNBQVMsR0FJN0M7a0JBSm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGdvdG8oZXZlbnQ6IGFueSwgc2NlbmU6IHN0cmluZyl7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSlcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cores/UISuperItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05ad9vH0ANAc6m/Oc1rzygv', 'UISuperItem');
// cores/UISuperItem.ts

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
var UISpuerItem = /** @class */ (function (_super) {
    __extends(UISpuerItem, _super);
    function UISpuerItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UISpuerItem.prototype, "width", {
        get: function () {
            if (this.layout.vertical) {
                return (this.layout.accommodWidth - this.layout.spacingWidth) / this.layout.column;
            }
            else {
                return this.node.width * this.layout.getUsedScaleValue(this.node.scaleX);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "height", {
        get: function () {
            if (this.layout.horizontal) {
                return (this.layout.accommodHeight - this.layout.spacingWidth) / this.layout.column;
            }
            else {
                return this.node.height * this.layout.getUsedScaleValue(this.node.scaleY);
            }
        },
        enumerable: false,
        configurable: true
    });
    UISpuerItem.prototype.onLoad = function () {
        this.node['watchSelf'] = this.watchSelf.bind(this);
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            cc.warn("UISuperItem: item不允许挂cc.Widget组件 请手动移除");
            this.node.removeComponent(widget);
        }
    };
    UISpuerItem.prototype.init = function (layout) {
        this.layout = layout;
        this.layout.node.on(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.originSize = cc.size(this.width, this.height);
        this.node.setContentSize(this.originSize);
        this.originScale = cc.v2(this.node.scaleX, this.node.scaleY);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.onChangeBrother();
    };
    UISpuerItem.prototype.onDisable = function () {
        this.layout.node.off(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.off(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.unlisten();
    };
    UISpuerItem.prototype.onChangeBrother = function () {
        var _a;
        var _brother = this.layout.getBrotherNode(this.node);
        if ((_brother === null || _brother === void 0 ? void 0 : _brother.uuid) == ((_a = this.brother) === null || _a === void 0 ? void 0 : _a.uuid))
            return;
        this.unlisten();
        this.brother = _brother;
        this.listen();
        this.watchBrother();
    };
    UISpuerItem.prototype.listen = function () {
        var _a, _b;
        (_a = this.brother) === null || _a === void 0 ? void 0 : _a.on('leave', this.unlisten, this);
        (_b = this.brother) === null || _b === void 0 ? void 0 : _b.on(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
    };
    UISpuerItem.prototype.unlisten = function () {
        var _a, _b;
        (_a = this.brother) === null || _a === void 0 ? void 0 : _a.off('leave', this.unlisten, this);
        (_b = this.brother) === null || _b === void 0 ? void 0 : _b.off(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
        this.brother = null;
    };
    UISpuerItem.prototype.watchSize = function () {
        if (this.layout.column > 1) {
            this.node.setContentSize(this.originSize);
            this.node.setScale(this.originScale);
        }
        else {
            this.brother ? this.watchBrother() : this.node.emit(cc.Node.EventType.POSITION_CHANGED);
            this.layout.resetScrollView();
        }
    };
    // 设置自己相对于上一个兄弟节点的位置
    UISpuerItem.prototype.watchBrother = function () {
        if (!this.brother)
            return;
        if (this.layout.headerToFooter) {
            this.headerToFooterRelativeToFooter(this.brother);
        }
        else {
            this.footerToHeaderRelativeToFooter(this.brother);
        }
    };
    UISpuerItem.prototype.isOutOfBoundary = function (offset) {
        if (this.layout.vertical && offset.y == 0)
            return true;
        if (this.layout.horizontal && offset.x == 0)
            return true;
        return false;
    };
    /** 从下到上排序方向 检查头部是否需要向上填充 */
    UISpuerItem.prototype.footerToHeaderWatchHeader = function () {
        // 如果不是头部一组的任意一个时跳过 比如一组有3个item 只计算 0，1，2 
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column)
            return;
        // 如果此时【尾部】已经是最后一个数据时
        var index = this.layout.footer['index'] + 1;
        if (index >= this.layout.maxItemTotal) {
            if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = 0;
        }
        // 计算超出的偏移量 (从下到上排序方向时 头部在 下尾部在上 检测【头部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 + 1
        this.node['index'] = index;
        // this.node['index'] = this.layout.footer['index'] + 1
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的节点 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 将自己的节点索引设置到尾部
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
    };
    /** 从下到上排序方向 检查尾部是否需要向下填充 */
    UISpuerItem.prototype.footerToHeaderWatchFooter = function () {
        // 如果不是尾部一组的任意一个时跳过 比如一组有3个item 只计算末尾的3个item 
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column)
            return;
        // 如果此时【头部】已经是第一个数据时
        var index = this.layout.header['index'] - 1;
        if (index < 0) {
            if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = this.node['index'];
        }
        // 计算超出的偏移量 (从下到上排序方向时 头部在 下尾部在上 检测【尾部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 - 1
        this.node['index'] = index;
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的兄弟 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 因为我是尾部 我监听了别人，此时移除我的所有监听 因为我马上就要成为老大 老大不需要监听任何人
        this.unlisten();
        // 因为我是老大 我不能相对别人来设置自己的相对位置，所以我需要主动设置自己(相对上一个老大的位置来设置自己) 别人都会相对我的位置做出变化
        this.footerToHeaderRelativeToHeader(this.layout.header);
        // 将自己的节点索引设置到头部
        this.layout.setSiblingIndex(this.node, 0);
    };
    /** 从上到下排序方向 检查头部是否需要向下填充 */
    UISpuerItem.prototype.headerToFooterWatchHeader = function () {
        // 如果不是头部一组的任意一个时跳过 比如一组有3个item 只计算 0，1，2 
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column)
            return;
        // 如果此时【尾部】已经是第一个数据时  
        var index = this.layout.footer['index'] + 1;
        if (index > this.layout.maxItemTotal - 1) {
            if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = 0;
        }
        // 计算超出的偏移量 (从下到上排序方向时 头部在下 尾部在上 检测【尾部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 + 1
        this.node['index'] = index;
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的兄弟 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 将自己的节点索引设置到尾部
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
    };
    /** 从上到下排序方向 检查尾部是否需要向上填充 */
    UISpuerItem.prototype.headerToFooterWatchFooter = function () {
        // 如果不是尾部一组的任意一个时跳过 比如一组有3个item 只计算末尾的3个item 
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column)
            return;
        // 如果此时【头部】已经是第一个数据时 
        var index = this.layout.header['index'] - 1;
        if (index < 0) {
            if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = this.node['index'];
        }
        // 计算超出的偏移量 (从上到下排序方向时 头部在上 尾部在下 检测【尾部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 - 1
        this.node['index'] = index;
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的兄弟 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 因为我是尾部 我监听了别人，此时移除我的所有监听 因为我马上就要成为老大 老大不需要监听任何人
        this.unlisten();
        // 因为我是老大 我不能相对别人来设置自己的相对位置，所以我需要主动设置自己(相对上一个老大的位置来设置自己) 别人都会相对我的位置做出变化
        this.headerToFooterRelativeToHeader(this.layout.header);
        // 将自己的节点索引设置到尾部
        this.layout.setSiblingIndex(this.node, 0);
    };
    /** isScrollToFooter=true 向下滑动 */
    UISpuerItem.prototype.watchSelf = function (isScrollToFooter) {
        if (isScrollToFooter) {
            if (this.layout.headerToFooter) {
                // 从【上到下排序】方向 检查【尾部】是否需要向上填充
                this.headerToFooterWatchFooter();
            }
            else {
                // 从【下到上排序】方向 检查【头部】是否需要向上填充
                this.footerToHeaderWatchHeader();
            }
        }
        else {
            if (this.layout.headerToFooter) {
                // 从【上到下排序】方向 检查【头部】是否需要向下填充
                this.headerToFooterWatchHeader();
            }
            else {
                // 从【下到上排序】方向 检查【尾部】是否需要向下填充
                this.footerToHeaderWatchFooter();
            }
        }
    };
    /** 从下到上 从右到左 排序方向  设置自己到相对node的头部 */
    UISpuerItem.prototype.footerToHeaderRelativeToHeader = function (relative) {
        var pos = this.node.getPosition();
        // 从下到上
        if (this.layout.vertical) {
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupFooter(this.node).x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = relative.y;
            }
            if (this.node['index'] == 0) {
                pos.x = this.layout.getGroupHeader(this.node).x;
            }
        }
        else {
            // 从右到左
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = this.layout.getGroupFooter(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            if (this.node['index'] == 0) {
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
        }
        this.node.setPosition(pos);
    };
    /** 从下到上 从右到左 排序方向 设置自己到相对node的尾部 */
    UISpuerItem.prototype.footerToHeaderRelativeToFooter = function (relative) {
        var pos = this.node.getPosition();
        // 从下到上
        if (this.layout.vertical) {
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupHeader(this.node).x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = relative.y;
            }
        }
        else {
            // 从右到左
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
        }
        this.node.setPosition(pos);
    };
    /** 从上到下 从左到右 排序方向 设置自己到相对node的头部 */
    UISpuerItem.prototype.headerToFooterRelativeToHeader = function (relative) {
        var pos = this.node.getPosition();
        // 从上到下
        if (this.layout.vertical) {
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupFooter(this.node).x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = relative.y;
            }
            if (this.node['index'] == 0) {
                pos.x = this.layout.getGroupHeader(this.node).x;
            }
        }
        else {
            // 从左到右
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = this.layout.getGroupFooter(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            if (this.node['index'] == 0) {
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
        }
        this.node.setPosition(pos);
    };
    /** 从上到下 从左到右 排序方向 设置自己到相对node尾部 */
    UISpuerItem.prototype.headerToFooterRelativeToFooter = function (relative) {
        var pos = this.node.getPosition();
        // 从上到下
        if (this.layout.vertical) {
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupHeader(this.node).x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = relative.y;
            }
        }
        else {
            // 从左到右
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
        }
        this.node.setPosition(pos);
    };
    UISpuerItem = __decorate([
        ccclass
    ], UISpuerItem);
    return UISpuerItem;
}(cc.Component));
exports.default = UISpuerItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBc0U7QUFDaEUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBeUMsK0JBQVk7SUFBckQ7O0lBd1RBLENBQUM7SUFuVEcsc0JBQVksOEJBQUs7YUFBakI7WUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO2dCQUN0QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTthQUNyRjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUMzRTtRQUNMLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVksK0JBQU07YUFBbEI7WUFDSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUN4QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTthQUN0RjtpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUM1RTtRQUNMLENBQUM7OztPQUFBO0lBQ0QsNEJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJ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LENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDbEQ7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO2dCQUNsQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7YUFDM0Q7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUF2VGdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0F3VC9CO0lBQUQsa0JBQUM7Q0F4VEQsQUF3VEMsQ0F4VHdDLEVBQUUsQ0FBQyxTQUFTLEdBd1RwRDtrQkF4VG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTdXBlckxheW91dCwgeyBVSUNoYW5nZUJyb3RoZXJFdm5ldCB9IGZyb20gJy4vVUlTdXBlckxheW91dCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3B1ZXJJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwcml2YXRlIGxheW91dDogVUlTdXBlckxheW91dFxuICAgIHByaXZhdGUgYnJvdGhlcjogY2MuTm9kZVxuICAgIHByaXZhdGUgb3JpZ2luU2l6ZTogY2MuU2l6ZVxuICAgIHByaXZhdGUgb3JpZ2luU2NhbGU6IGNjLlZlYzJcbiAgICBwcml2YXRlIGdldCB3aWR0aCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubGF5b3V0LmFjY29tbW9kV2lkdGggLSB0aGlzLmxheW91dC5zcGFjaW5nV2lkdGgpIC8gdGhpcy5sYXlvdXQuY29sdW1uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLndpZHRoICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUodGhpcy5ub2RlLnNjYWxlWClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBoZWlnaHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5ob3Jpem9udGFsKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubGF5b3V0LmFjY29tbW9kSGVpZ2h0IC0gdGhpcy5sYXlvdXQuc3BhY2luZ1dpZHRoKSAvIHRoaXMubGF5b3V0LmNvbHVtblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5oZWlnaHQgKiB0aGlzLmxheW91dC5nZXRVc2VkU2NhbGVWYWx1ZSh0aGlzLm5vZGUuc2NhbGVZKVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5ub2RlWyd3YXRjaFNlbGYnXSA9IHRoaXMud2F0Y2hTZWxmLmJpbmQodGhpcylcbiAgICAgICAgbGV0IHdpZGdldCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuV2lkZ2V0KVxuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICBjYy53YXJuKFwiVUlTdXBlckl0ZW06IGl0ZW3kuI3lhYHorrjmjIJjYy5XaWRnZXTnu4Tku7Yg6K+35omL5Yqo56e76ZmkXCIpXG4gICAgICAgICAgICB0aGlzLm5vZGUucmVtb3ZlQ29tcG9uZW50KHdpZGdldClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgaW5pdChsYXlvdXQ6IFVJU3VwZXJMYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBsYXlvdXRcbiAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5vbihVSUNoYW5nZUJyb3RoZXJFdm5ldCwgdGhpcy5vbkNoYW5nZUJyb3RoZXIsIHRoaXMpXG4gICAgICAgIHRoaXMub3JpZ2luU2l6ZSA9IGNjLnNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLm9yaWdpblNpemUpXG4gICAgICAgIHRoaXMub3JpZ2luU2NhbGUgPSBjYy52Mih0aGlzLm5vZGUuc2NhbGVYLCB0aGlzLm5vZGUuc2NhbGVZKVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLndhdGNoU2l6ZSwgdGhpcylcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNDQUxFX0NIQU5HRUQsIHRoaXMud2F0Y2hTaXplLCB0aGlzKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlQnJvdGhlcigpXG4gICAgfVxuICAgIG9uRGlzYWJsZSgpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5vZmYoVUlDaGFuZ2VCcm90aGVyRXZuZXQsIHRoaXMub25DaGFuZ2VCcm90aGVyLCB0aGlzKVxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy53YXRjaFNpemUsIHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0NBTEVfQ0hBTkdFRCwgdGhpcy53YXRjaFNpemUsIHRoaXMpXG4gICAgICAgIHRoaXMudW5saXN0ZW4oKVxuICAgIH1cbiAgICBwcml2YXRlIG9uQ2hhbmdlQnJvdGhlcigpIHtcbiAgICAgICAgbGV0IF9icm90aGVyID0gdGhpcy5sYXlvdXQuZ2V0QnJvdGhlck5vZGUodGhpcy5ub2RlKVxuICAgICAgICBpZiAoX2Jyb3RoZXI/LnV1aWQgPT0gdGhpcy5icm90aGVyPy51dWlkKSByZXR1cm5cbiAgICAgICAgdGhpcy51bmxpc3RlbigpXG4gICAgICAgIHRoaXMuYnJvdGhlciA9IF9icm90aGVyXG4gICAgICAgIHRoaXMubGlzdGVuKClcbiAgICAgICAgdGhpcy53YXRjaEJyb3RoZXIoKVxuICAgIH1cbiAgICBwcml2YXRlIGxpc3RlbigpIHtcbiAgICAgICAgdGhpcy5icm90aGVyPy5vbignbGVhdmUnLCB0aGlzLnVubGlzdGVuLCB0aGlzKVxuICAgICAgICB0aGlzLmJyb3RoZXI/Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsIHRoaXMud2F0Y2hCcm90aGVyLCB0aGlzKVxuICAgIH1cbiAgICBwcml2YXRlIHVubGlzdGVuKCkge1xuICAgICAgICB0aGlzLmJyb3RoZXI/Lm9mZignbGVhdmUnLCB0aGlzLnVubGlzdGVuLCB0aGlzKVxuICAgICAgICB0aGlzLmJyb3RoZXI/Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VELCB0aGlzLndhdGNoQnJvdGhlciwgdGhpcylcbiAgICAgICAgdGhpcy5icm90aGVyID0gbnVsbFxuICAgIH1cbiAgICBwcml2YXRlIHdhdGNoU2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNvbHVtbiA+IDEpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLm9yaWdpblNpemUpXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUodGhpcy5vcmlnaW5TY2FsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYnJvdGhlciA/IHRoaXMud2F0Y2hCcm90aGVyKCkgOiB0aGlzLm5vZGUuZW1pdChjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VEKVxuICAgICAgICAgICAgdGhpcy5sYXlvdXQucmVzZXRTY3JvbGxWaWV3KClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDorr7nva7oh6rlt7Hnm7jlr7nkuo7kuIrkuIDkuKrlhYTlvJ/oioLngrnnmoTkvY3nva5cbiAgICBwdWJsaWMgd2F0Y2hCcm90aGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuYnJvdGhlcikgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmxheW91dC5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXJUb0Zvb3RlclJlbGF0aXZlVG9Gb290ZXIodGhpcy5icm90aGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb290ZXJUb0hlYWRlclJlbGF0aXZlVG9Gb290ZXIodGhpcy5icm90aGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5KG9mZnNldDogY2MuVmVjMikge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwgJiYgb2Zmc2V0LnkgPT0gMCkgcmV0dXJuIHRydWVcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Lmhvcml6b250YWwgJiYgb2Zmc2V0LnggPT0gMCkgcmV0dXJuIHRydWVcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIC8qKiDku47kuIvliLDkuIrmjpLluo/mlrnlkJEg5qOA5p+l5aS06YOo5piv5ZCm6ZyA6KaB5ZCR5LiK5aGr5YWFICovXG4gICAgcHJpdmF0ZSBmb290ZXJUb0hlYWRlcldhdGNoSGVhZGVyKCkge1xuICAgICAgICAvLyDlpoLmnpzkuI3mmK/lpLTpg6jkuIDnu4TnmoTku7vmhI/kuIDkuKrml7bot7Pov4cg5q+U5aaC5LiA57uE5pyJM+S4qml0ZW0g5Y+q6K6h566XIDDvvIwx77yMMiBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmdldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUpID49IHRoaXMubGF5b3V0LmNvbHVtbikgcmV0dXJuXG4gICAgICAgIC8vIOWmguaenOatpOaXtuOAkOWwvumDqOOAkeW3sue7j+aYr+acgOWQjuS4gOS4quaVsOaNruaXtlxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxheW91dC5mb290ZXJbJ2luZGV4J10gKyAxXG4gICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmxheW91dC5tYXhJdGVtVG90YWwpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5sYXlvdXQuZm9vdGVyTG9vcCB8fCB0aGlzLmxheW91dC5zY3JvbGxUb0hlYWRlck9yRm9vdGVyKSByZXR1cm5cbiAgICAgICAgICAgIGluZGV4ID0gMFxuICAgICAgICB9XG4gICAgICAgIC8vIOiuoeeul+i2heWHuueahOWBj+enu+mHjyAo5LuO5LiL5Yiw5LiK5o6S5bqP5pa55ZCR5pe2IOWktOmDqOWcqCDkuIvlsL7pg6jlnKjkuIog5qOA5rWL44CQ5aS06YOo44CR5piv5ZCm6LaF5Ye65LiL6L655qGGKVxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5sYXlvdXQuaXNPdXRPZkJvdW5kYXJ5Rm9vdGVyKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5rKh5pyJ6LaF5Ye65pe26Lez6L+HXG4gICAgICAgIGlmICghdGhpcy5pc091dE9mQm91bmRhcnkob2Zmc2V0KSkgcmV0dXJuXG4gICAgICAgIC8vIOWwhuiHquW3seeahOaVsOaNrue0ouW8lSArIDFcbiAgICAgICAgdGhpcy5ub2RlWydpbmRleCddID0gaW5kZXhcbiAgICAgICAgLy8gdGhpcy5ub2RlWydpbmRleCddID0gdGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddICsgMVxuICAgICAgICAvLyDlj5HpgIHpgJrnn6XliLDlupTnlKjlsYIg5Yi35paw5pi+56S6XG4gICAgICAgIHRoaXMubGF5b3V0Lm5vdGlmeVJlZnJlc2hJdGVtKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5Y+R57uZ55uR5ZCs5oiR55qE6IqC54K5IOmAmuefpeaIkeemu+W8gOS6hiDnp7vpmaTlr7nmiJHnmoTmiYDmnInnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJsZWF2ZVwiKVxuICAgICAgICAvLyDlsIboh6rlt7HnmoToioLngrnntKLlvJXorr7nva7liLDlsL7pg6hcbiAgICAgICAgdGhpcy5sYXlvdXQuc2V0U2libGluZ0luZGV4KHRoaXMubm9kZSwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICB9XG4gICAgLyoqIOS7juS4i+WIsOS4iuaOkuW6j+aWueWQkSDmo4Dmn6XlsL7pg6jmmK/lkKbpnIDopoHlkJHkuIvloavlhYUgKi9cbiAgICBwcml2YXRlIGZvb3RlclRvSGVhZGVyV2F0Y2hGb290ZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOS4jeaYr+WwvumDqOS4gOe7hOeahOS7u+aEj+S4gOS4quaXtui3s+i/hyDmr5TlpoLkuIDnu4TmnIkz5LiqaXRlbSDlj6rorqHnrpfmnKvlsL7nmoQz5LiqaXRlbSBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmdldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUpIDwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gdGhpcy5sYXlvdXQuY29sdW1uKSByZXR1cm5cbiAgICAgICAgLy8g5aaC5p6c5q2k5pe244CQ5aS06YOo44CR5bey57uP5piv56ys5LiA5Liq5pWw5o2u5pe2XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGF5b3V0LmhlYWRlclsnaW5kZXgnXSAtIDFcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5oZWFkZXJMb29wIHx8IHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyT3JGb290ZXIpIHJldHVyblxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLm5vZGVbJ2luZGV4J11cbiAgICAgICAgfVxuICAgICAgICAvLyDorqHnrpfotoXlh7rnmoTlgY/np7vph48gKOS7juS4i+WIsOS4iuaOkuW6j+aWueWQkeaXtiDlpLTpg6jlnKgg5LiL5bC+6YOo5Zyo5LiKIOajgOa1i+OAkOWwvumDqOOAkeaYr+WQpui2heWHuuS4i+i+ueahhilcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMubGF5b3V0LmlzT3V0T2ZCb3VuZGFyeUhlYWRlcih0aGlzLm5vZGUpXG4gICAgICAgIC8vIOayoeaciei2heWHuuaXtui3s+i/h1xuICAgICAgICBpZiAoIXRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHJldHVyblxuICAgICAgICAvLyDlsIboh6rlt7HnmoTmlbDmja7ntKLlvJUgLSAxXG4gICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgIC8vIOWPkemAgemAmuefpeWIsOW6lOeUqOWxgiDliLfmlrDmmL7npLpcbiAgICAgICAgdGhpcy5sYXlvdXQubm90aWZ5UmVmcmVzaEl0ZW0odGhpcy5ub2RlKVxuICAgICAgICAvLyDlj5Hnu5nnm5HlkKzmiJHnmoTlhYTlvJ8g6YCa55+l5oiR56a75byA5LqGIOenu+mZpOWvueaIkeeahOaJgOacieebkeWQrFxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImxlYXZlXCIpXG4gICAgICAgIC8vIOWboOS4uuaIkeaYr+WwvumDqCDmiJHnm5HlkKzkuobliKvkurrvvIzmraTml7bnp7vpmaTmiJHnmoTmiYDmnInnm5HlkKwg5Zug5Li65oiR6ams5LiK5bCx6KaB5oiQ5Li66ICB5aSnIOiAgeWkp+S4jemcgOimgeebkeWQrOS7u+S9leS6ulxuICAgICAgICB0aGlzLnVubGlzdGVuKClcbiAgICAgICAgLy8g5Zug5Li65oiR5piv6ICB5aSnIOaIkeS4jeiDveebuOWvueWIq+S6uuadpeiuvue9ruiHquW3seeahOebuOWvueS9jee9ru+8jOaJgOS7pVxi5oiR6ZyA6KaB5Li75Yqo6K6+572u6Ieq5bexKOebuOWvueS4iuS4gOS4quiAgeWkp+eahOS9jee9ruadpeiuvue9ruiHquW3sSkg5Yir5Lq66YO95Lya55u45a+55oiR55qE5L2N572u5YGa5Ye65Y+Y5YyWXG4gICAgICAgIHRoaXMuZm9vdGVyVG9IZWFkZXJSZWxhdGl2ZVRvSGVhZGVyKHRoaXMubGF5b3V0LmhlYWRlcilcbiAgICAgICAgLy8g5bCG6Ieq5bex55qE6IqC54K557Si5byV6K6+572u5Yiw5aS06YOoXG4gICAgICAgIHRoaXMubGF5b3V0LnNldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUsIDApXG4gICAgfVxuICAgIC8qKiDku47kuIrliLDkuIvmjpLluo/mlrnlkJEg5qOA5p+l5aS06YOo5piv5ZCm6ZyA6KaB5ZCR5LiL5aGr5YWFICovXG4gICAgcHJpdmF0ZSBoZWFkZXJUb0Zvb3RlcldhdGNoSGVhZGVyKCkge1xuICAgICAgICAvLyDlpoLmnpzkuI3mmK/lpLTpg6jkuIDnu4TnmoTku7vmhI/kuIDkuKrml7bot7Pov4cg5q+U5aaC5LiA57uE5pyJM+S4qml0ZW0g5Y+q6K6h566XIDDvvIwx77yMMiBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmdldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUpID49IHRoaXMubGF5b3V0LmNvbHVtbikgcmV0dXJuXG4gICAgICAgIC8vIOWmguaenOatpOaXtuOAkOWwvumDqOOAkeW3sue7j+aYr+esrOS4gOS4quaVsOaNruaXtiAgXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGF5b3V0LmZvb3RlclsnaW5kZXgnXSArIDFcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5sYXlvdXQubWF4SXRlbVRvdGFsIC0gMSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5mb290ZXJMb29wIHx8IHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyT3JGb290ZXIpIHJldHVyblxuICAgICAgICAgICAgaW5kZXggPSAwXG4gICAgICAgIH1cbiAgICAgICAgLy8g6K6h566X6LaF5Ye655qE5YGP56e76YePICjku47kuIvliLDkuIrmjpLluo/mlrnlkJHml7Yg5aS06YOo5Zyo5LiLIOWwvumDqOWcqOS4iiDmo4DmtYvjgJDlsL7pg6jjgJHmmK/lkKbotoXlh7rkuIvovrnmoYYpXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmxheW91dC5pc091dE9mQm91bmRhcnlIZWFkZXIodGhpcy5ub2RlKVxuICAgICAgICAvLyDmsqHmnInotoXlh7rml7bot7Pov4dcbiAgICAgICAgaWYgKCF0aGlzLmlzT3V0T2ZCb3VuZGFyeShvZmZzZXQpKSByZXR1cm5cbiAgICAgICAgLy8g5bCG6Ieq5bex55qE5pWw5o2u57Si5byVICsgMVxuICAgICAgICB0aGlzLm5vZGVbJ2luZGV4J10gPSBpbmRleFxuICAgICAgICAvLyDlj5HpgIHpgJrnn6XliLDlupTnlKjlsYIg5Yi35paw5pi+56S6XG4gICAgICAgIHRoaXMubGF5b3V0Lm5vdGlmeVJlZnJlc2hJdGVtKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5Y+R57uZ55uR5ZCs5oiR55qE5YWE5byfIOmAmuefpeaIkeemu+W8gOS6hiDnp7vpmaTlr7nmiJHnmoTmiYDmnInnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJsZWF2ZVwiKVxuICAgICAgICAvLyDlsIboh6rlt7HnmoToioLngrnntKLlvJXorr7nva7liLDlsL7pg6hcbiAgICAgICAgdGhpcy5sYXlvdXQuc2V0U2libGluZ0luZGV4KHRoaXMubm9kZSwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICB9XG4gICAgLyoqIOS7juS4iuWIsOS4i+aOkuW6j+aWueWQkSDmo4Dmn6XlsL7pg6jmmK/lkKbpnIDopoHlkJHkuIrloavlhYUgKi9cbiAgICBwcml2YXRlIGhlYWRlclRvRm9vdGVyV2F0Y2hGb290ZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOS4jeaYr+WwvumDqOS4gOe7hOeahOS7u+aEj+S4gOS4quaXtui3s+i/hyDmr5TlpoLkuIDnu4TmnIkz5LiqaXRlbSDlj6rorqHnrpfmnKvlsL7nmoQz5LiqaXRlbSBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmdldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUpIDwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gdGhpcy5sYXlvdXQuY29sdW1uKSByZXR1cm5cbiAgICAgICAgLy8g5aaC5p6c5q2k5pe244CQ5aS06YOo44CR5bey57uP5piv56ys5LiA5Liq5pWw5o2u5pe2IFxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxheW91dC5oZWFkZXJbJ2luZGV4J10gLSAxXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5sYXlvdXQuaGVhZGVyTG9vcCB8fCB0aGlzLmxheW91dC5zY3JvbGxUb0hlYWRlck9yRm9vdGVyKSByZXR1cm5cbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5ub2RlWydpbmRleCddXG4gICAgICAgIH1cbiAgICAgICAgLy8g6K6h566X6LaF5Ye655qE5YGP56e76YePICjku47kuIrliLDkuIvmjpLluo/mlrnlkJHml7Yg5aS06YOo5Zyo5LiKIOWwvumDqOWcqOS4iyDmo4DmtYvjgJDlsL7pg6jjgJHmmK/lkKbotoXlh7rkuIvovrnmoYYpXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmxheW91dC5pc091dE9mQm91bmRhcnlGb290ZXIodGhpcy5ub2RlKVxuICAgICAgICAvLyDmsqHmnInotoXlh7rml7bot7Pov4dcbiAgICAgICAgaWYgKCF0aGlzLmlzT3V0T2ZCb3VuZGFyeShvZmZzZXQpKSByZXR1cm5cbiAgICAgICAgLy8g5bCG6Ieq5bex55qE5pWw5o2u57Si5byVIC0gMVxuICAgICAgICB0aGlzLm5vZGVbJ2luZGV4J10gPSBpbmRleFxuICAgICAgICAvLyDlj5HpgIHpgJrnn6XliLDlupTnlKjlsYIg5Yi35paw5pi+56S6XG4gICAgICAgIHRoaXMubGF5b3V0Lm5vdGlmeVJlZnJlc2hJdGVtKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5Y+R57uZ55uR5ZCs5oiR55qE5YWE5byfIOmAmuefpeaIkeemu+W8gOS6hiDnp7vpmaTlr7nmiJHnmoTmiYDmnInnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJsZWF2ZVwiKVxuICAgICAgICAvLyDlm6DkuLrmiJHmmK/lsL7pg6gg5oiR55uR5ZCs5LqG5Yir5Lq677yM5q2k5pe256e76Zmk5oiR55qE5omA5pyJ55uR5ZCsIOWboOS4uuaIkemprOS4iuWwseimgeaIkOS4uuiAgeWkpyDogIHlpKfkuI3pnIDopoHnm5HlkKzku7vkvZXkurpcbiAgICAgICAgdGhpcy51bmxpc3RlbigpXG4gICAgICAgIC8vIOWboOS4uuaIkeaYr+iAgeWkpyDmiJHkuI3og73nm7jlr7nliKvkurrmnaXorr7nva7oh6rlt7HnmoTnm7jlr7nkvY3nva7vvIzmiYDku6VcYuaIkemcgOimgeS4u+WKqOiuvue9ruiHquW3sSjnm7jlr7nkuIrkuIDkuKrogIHlpKfnmoTkvY3nva7mnaXorr7nva7oh6rlt7EpIOWIq+S6uumDveS8muebuOWvueaIkeeahOS9jee9ruWBmuWHuuWPmOWMllxuICAgICAgICB0aGlzLmhlYWRlclRvRm9vdGVyUmVsYXRpdmVUb0hlYWRlcih0aGlzLmxheW91dC5oZWFkZXIpXG4gICAgICAgIC8vIOWwhuiHquW3seeahOiKgueCuee0ouW8leiuvue9ruWIsOWwvumDqFxuICAgICAgICB0aGlzLmxheW91dC5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLCAwKVxuICAgIH1cbiAgICAvKiogaXNTY3JvbGxUb0Zvb3Rlcj10cnVlIOWQkeS4i+a7keWKqCAqL1xuICAgIHB1YmxpYyB3YXRjaFNlbGYoaXNTY3JvbGxUb0Zvb3RlcjogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNTY3JvbGxUb0Zvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO44CQ5LiK5Yiw5LiL5o6S5bqP44CR5pa55ZCRIOajgOafpeOAkOWwvumDqOOAkeaYr+WQpumcgOimgeWQkeS4iuWhq+WFhVxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVG9Gb290ZXJXYXRjaEZvb3RlcigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOS7juOAkOS4i+WIsOS4iuaOkuW6j+OAkeaWueWQkSDmo4Dmn6XjgJDlpLTpg6jjgJHmmK/lkKbpnIDopoHlkJHkuIrloavlhYVcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hIZWFkZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO44CQ5LiK5Yiw5LiL5o6S5bqP44CR5pa55ZCRIOajgOafpeOAkOWktOmDqOOAkeaYr+WQpumcgOimgeWQkeS4i+Whq+WFhVxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVG9Gb290ZXJXYXRjaEhlYWRlcigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOS7juOAkOS4i+WIsOS4iuaOkuW6j+OAkeaWueWQkSDmo4Dmn6XjgJDlsL7pg6jjgJHmmK/lkKbpnIDopoHlkJHkuIvloavlhYVcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hGb290ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDku47kuIvliLDkuIog5LuO5Y+z5Yiw5bemIOaOkuW6j+aWueWQkSAg6K6+572u6Ieq5bex5Yiw55u45a+5bm9kZeeahOWktOmDqCAqL1xuICAgIHByaXZhdGUgZm9vdGVyVG9IZWFkZXJSZWxhdGl2ZVRvSGVhZGVyKHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICAvLyDku47kuIvliLDkuIpcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEhlYWRlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwRm9vdGVyKHRoaXMubm9kZSkueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBCb3R0b21ZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBMZWZ0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gcmVsYXRpdmUueVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZVsnaW5kZXgnXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cEhlYWRlcih0aGlzLm5vZGUpLnhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOS7juWPs+WIsOW3plxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmlzR3JvdXBIZWFkZXIocmVsYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cFJpZ2h0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBGb290ZXIodGhpcy5ub2RlKS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gcmVsYXRpdmUueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBUb3BZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlWydpbmRleCddID09IDApIHtcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpXG4gICAgfVxuICAgIC8qKiDku47kuIvliLDkuIog5LuO5Y+z5Yiw5bemIOaOkuW6j+aWueWQkSDorr7nva7oh6rlt7HliLDnm7jlr7lub2Rl55qE5bC+6YOoICovXG4gICAgcHJpdmF0ZSBmb290ZXJUb0hlYWRlclJlbGF0aXZlVG9Gb290ZXIocmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIC8vIOS7juS4i+WIsOS4ilxuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwRm9vdGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cFRvcFkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cFJpZ2h0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gcmVsYXRpdmUueVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5LuO5Y+z5Yiw5bemXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEZvb3RlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwTGVmdFgodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHJlbGF0aXZlLnhcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwQm90dG9tWSh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpXG4gICAgfVxuICAgIC8qKiDku47kuIrliLDkuIsg5LuO5bem5Yiw5Y+zIOaOkuW6j+aWueWQkSDorr7nva7oh6rlt7HliLDnm7jlr7lub2Rl55qE5aS06YOoICovXG4gICAgcHJpdmF0ZSBoZWFkZXJUb0Zvb3RlclJlbGF0aXZlVG9IZWFkZXIocmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIC8vIOS7juS4iuWIsOS4i1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwSGVhZGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBGb290ZXIodGhpcy5ub2RlKS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cFRvcFkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cExlZnRYKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICAgICAgcG9zLnkgPSByZWxhdGl2ZS55XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlWydpbmRleCddID09IDApIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5LuO5bem5Yiw5Y+zXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEhlYWRlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwTGVmdFgodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwRm9vdGVyKHRoaXMubm9kZSkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHJlbGF0aXZlLnhcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwVG9wWSh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZVsnaW5kZXgnXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cEhlYWRlcih0aGlzLm5vZGUpLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKVxuICAgIH1cbiAgICAvKiog5LuO5LiK5Yiw5LiLIOS7juW3puWIsOWPsyDmjpLluo/mlrnlkJEg6K6+572u6Ieq5bex5Yiw55u45a+5bm9kZeWwvumDqCAqL1xuICAgIHByaXZhdGUgaGVhZGVyVG9Gb290ZXJSZWxhdGl2ZVRvRm9vdGVyKHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICAvLyDku47kuIrliLDkuItcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEZvb3RlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBCb3R0b21ZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBSaWdodFgodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgICAgICBwb3MueSA9IHJlbGF0aXZlLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOS7juW3puWIsOWPs1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmlzR3JvdXBGb290ZXIocmVsYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cFJpZ2h0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gcmVsYXRpdmUueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBCb3R0b21ZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcylcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/chat/chatItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99b10hZnWRCrIEdhwALstgg', 'chatItem');
// examples/chat/chatItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var chatItem = /** @class */ (function (_super) {
    __extends(chatItem, _super);
    function chatItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.other = null;
        _this.self = null;
        return _this;
    }
    chatItem.prototype.show = function (info) {
        var _a;
        this.other.active = info.type == 'other';
        this.self.active = info.type == 'self';
        var node = info.type == 'self' ? this.self : this.other;
        (_a = this.label) === null || _a === void 0 ? void 0 : _a.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
        this.background = node.getChildByName('background').getComponent(cc.Layout);
        this.label = this.background.node.getChildByName('label').getComponent(cc.Label);
        this.label.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
        this.label.overflow = cc.Label.Overflow.NONE;
        this.label.string = info.message;
        this.label['_forceUpdateRenderData']();
        this.background.updateLayout();
        this.background.node.width = this.label.node.width + 20;
        this.node.height = this.background.node.height;
    };
    chatItem.prototype.onChangeSize = function () {
        if (this.label.node.width > 600) {
            this.label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
            this.label.node.width = 600;
            this.label['_forceUpdateRenderData']();
            this.background.updateLayout();
            this.background.node.width = this.label.node.width + 20;
            this.node.height = this.background.node.height;
        }
    };
    __decorate([
        property(cc.Node)
    ], chatItem.prototype, "other", void 0);
    __decorate([
        property(cc.Node)
    ], chatItem.prototype, "self", void 0);
    chatItem = __decorate([
        ccclass
    ], chatItem);
    return chatItem;
}(cc.Component));
exports.default = chatItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy9jaGF0L2NoYXRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0JDO1FBOUJzQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLFVBQUksR0FBWSxJQUFJLENBQUE7O0lBNkIzQyxDQUFDO0lBMUJVLHVCQUFJLEdBQVgsVUFBWSxJQUFTOztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQTtRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN2RCxNQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFDO1FBRTdFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQTtRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2xELENBQUM7SUFDTywrQkFBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUE7WUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtTQUNqRDtJQUNMLENBQUM7SUE3QmtCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUFzQjtJQUNyQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FBcUI7SUFGdEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStCNUI7SUFBRCxlQUFDO0NBL0JELEFBK0JDLENBL0JxQyxFQUFFLENBQUMsU0FBUyxHQStCakQ7a0JBL0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGF0SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIG90aGVyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBzZWxmOiBjYy5Ob2RlID0gbnVsbFxuICAgIHByaXZhdGUgbGFiZWw6IGNjLkxhYmVsXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kOiBjYy5MYXlvdXRcbiAgICBwdWJsaWMgc2hvdyhpbmZvOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vdGhlci5hY3RpdmUgPSBpbmZvLnR5cGUgPT0gJ290aGVyJ1xuICAgICAgICB0aGlzLnNlbGYuYWN0aXZlID0gaW5mby50eXBlID09ICdzZWxmJ1xuICAgICAgICBsZXQgbm9kZSA9IGluZm8udHlwZSA9PSAnc2VsZicgPyB0aGlzLnNlbGYgOiB0aGlzLm90aGVyXG4gICAgICAgIHRoaXMubGFiZWw/Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5vbkNoYW5nZVNpemUsIHRoaXMpXG5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbm9kZS5nZXRDaGlsZEJ5TmFtZSgnYmFja2dyb3VuZCcpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmJhY2tncm91bmQubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIHRoaXMubGFiZWwubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMub25DaGFuZ2VTaXplLCB0aGlzKVxuICAgICAgICB0aGlzLmxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuTk9ORVxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IGluZm8ubWVzc2FnZVxuICAgICAgICB0aGlzLmxhYmVsWydfZm9yY2VVcGRhdGVSZW5kZXJEYXRhJ10oKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQudXBkYXRlTGF5b3V0KClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm5vZGUud2lkdGggPSB0aGlzLmxhYmVsLm5vZGUud2lkdGggKyAyMFxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5iYWNrZ3JvdW5kLm5vZGUuaGVpZ2h0XG4gICAgfVxuICAgIHByaXZhdGUgb25DaGFuZ2VTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbC5ub2RlLndpZHRoID4gNjAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVFxuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLndpZHRoID0gNjAwXG4gICAgICAgICAgICB0aGlzLmxhYmVsWydfZm9yY2VVcGRhdGVSZW5kZXJEYXRhJ10oKVxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnVwZGF0ZUxheW91dCgpXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQubm9kZS53aWR0aCA9IHRoaXMubGFiZWwubm9kZS53aWR0aCArIDIwXG4gICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5iYWNrZ3JvdW5kLm5vZGUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/chat/chatPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b675lsfsFJlbnH7YOQRVQo', 'chatPanel');
// examples/chat/chatPanel.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UISuperLayout_1 = require("../../cores/UISuperLayout");
var chatItem_1 = require("./chatItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var chatPanel = /** @class */ (function (_super) {
    __extends(chatPanel, _super);
    function chatPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.input = null;
        _this.aiMessages = [
            '你说啥?',
            '请说人话，谢谢!',
            '啊?',
            '啥呀?',
            '咋地了?',
            '什么情况?',
            '你不要搞事情哦'
        ];
        _this.messages = [];
        _this.index = 0;
        return _this;
    }
    chatPanel.prototype.emit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.messages.push({
                    type: "self",
                    message: this.input.string || "?"
                });
                this.input.string = "";
                this.layout.total(this.messages.length);
                this.scheduleOnce(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.messages.push({
                                    type: "other",
                                    message: "" + this.aiMessages[this.index++]
                                });
                                return [4 /*yield*/, this.layout.total(this.messages.length)];
                            case 1:
                                _a.sent();
                                this.layout.scrollToHeader();
                                if (this.index == this.aiMessages.length)
                                    this.index = 0;
                                return [2 /*return*/];
                        }
                    });
                }); }, 1);
                return [2 /*return*/];
            });
        });
    };
    chatPanel.prototype.refresh = function (node, index) {
        var info = this.messages[this.messages.length - 1 - index];
        var item = node.getComponent(chatItem_1.default);
        item.show(info);
    };
    chatPanel.prototype.goMain = function () {
        cc.director.loadScene('main');
    };
    __decorate([
        property(UISuperLayout_1.default)
    ], chatPanel.prototype, "layout", void 0);
    __decorate([
        property(cc.EditBox)
    ], chatPanel.prototype, "input", void 0);
    chatPanel = __decorate([
        ccclass
    ], chatPanel);
    return chatPanel;
}(cc.Component));
exports.default = chatPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy9jaGF0L2NoYXRQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBdUNDO1FBdEM0QixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUMvQixXQUFLLEdBQWUsSUFBSSxDQUFBO1FBQ3RDLGdCQUFVLEdBQUc7WUFDakIsTUFBTTtZQUNOLFVBQVU7WUFDVixJQUFJO1lBQ0osS0FBSztZQUNMLE1BQU07WUFDTixPQUFPO1lBQ1AsU0FBUztTQUNaLENBQUE7UUFDTyxjQUFRLEdBQVUsRUFBRSxDQUFBO1FBQ3BCLFdBQUssR0FBRyxDQUFDLENBQUE7O0lBMEJyQixDQUFDO0lBekJpQix3QkFBSSxHQUFsQjs7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDZixJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRztpQkFDcEMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7OztnQ0FDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQ0FDZixJQUFJLEVBQUUsT0FBTztvQ0FDYixPQUFPLEVBQUUsS0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBRztpQ0FDOUMsQ0FBQyxDQUFBO2dDQUNGLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dDQUE3QyxTQUE2QyxDQUFBO2dDQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dDQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNO29DQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBOzs7O3FCQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ1I7SUFDTywyQkFBTyxHQUFmLFVBQWdCLElBQWEsRUFBRSxLQUFhO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFBO1FBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUNPLDBCQUFNLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBckN3QjtRQUF4QixRQUFRLENBQUMsdUJBQWEsQ0FBQzs2Q0FBNkI7SUFDL0I7UUFBckIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQXlCO0lBRjdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1QzdCO0lBQUQsZ0JBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBdUNsRDtrQkF2Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTdXBlckxheW91dCBmcm9tICcuLi8uLi9jb3Jlcy9VSVN1cGVyTGF5b3V0JztcbmltcG9ydCBjaGF0SXRlbSBmcm9tICcuL2NoYXRJdGVtJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGF0UGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShVSVN1cGVyTGF5b3V0KSBsYXlvdXQ6IFVJU3VwZXJMYXlvdXQgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpIGlucHV0OiBjYy5FZGl0Qm94ID0gbnVsbFxuICAgIHByaXZhdGUgYWlNZXNzYWdlcyA9IFtcbiAgICAgICAgJ+S9oOivtOWVpT8nLFxuICAgICAgICAn6K+36K+05Lq66K+d77yM6LCi6LCiIScsXG4gICAgICAgICfllYo/JyxcbiAgICAgICAgJ+WVpeWRgD8nLFxuICAgICAgICAn5ZKL5Zyw5LqGPycsXG4gICAgICAgICfku4DkuYjmg4XlhrU/JyxcbiAgICAgICAgJ+S9oOS4jeimgeaQnuS6i+aDheWTpidcbiAgICBdXG4gICAgcHJpdmF0ZSBtZXNzYWdlczogYW55W10gPSBbXVxuICAgIHByaXZhdGUgaW5kZXggPSAwXG4gICAgcHJpdmF0ZSBhc3luYyBlbWl0KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJzZWxmXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmlucHV0LnN0cmluZyB8fCBcIj9cIlxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmlucHV0LnN0cmluZyA9IFwiXCJcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5tZXNzYWdlcy5sZW5ndGgpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvdGhlclwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMuYWlNZXNzYWdlc1t0aGlzLmluZGV4KytdfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxheW91dC50b3RhbCh0aGlzLm1lc3NhZ2VzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyKClcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09IHRoaXMuYWlNZXNzYWdlcy5sZW5ndGgpIHRoaXMuaW5kZXggPSAwXG4gICAgICAgIH0sIDEpXG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEgLSBpbmRleF1cbiAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmdldENvbXBvbmVudChjaGF0SXRlbSlcbiAgICAgICAgaXRlbS5zaG93KGluZm8pXG4gICAgfVxuICAgIHByaXZhdGUgZ29NYWluKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cores/UISuperLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '699eb1xVINCcZBBHwAgwDBT', 'UISuperLayout');
// cores/UISuperLayout.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISuperDirection = exports.UISuperAxis = exports.UIChangeBrotherEvnet = void 0;
var UISuperScrollView_1 = require("./UISuperScrollView");
var UISuperItem_1 = require("./UISuperItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var EPSILON = 1e-4;
exports.UIChangeBrotherEvnet = "UIChangeBrotherEvnet";
var UISuperAxis;
(function (UISuperAxis) {
    UISuperAxis[UISuperAxis["HORIZONTAL"] = 0] = "HORIZONTAL";
    UISuperAxis[UISuperAxis["VERTICAL"] = 1] = "VERTICAL";
})(UISuperAxis = exports.UISuperAxis || (exports.UISuperAxis = {}));
var UISuperDirection;
(function (UISuperDirection) {
    UISuperDirection[UISuperDirection["HEADER_TO_FOOTER"] = 0] = "HEADER_TO_FOOTER";
    UISuperDirection[UISuperDirection["FOOTER_TO_HEADER"] = 1] = "FOOTER_TO_HEADER";
})(UISuperDirection = exports.UISuperDirection || (exports.UISuperDirection = {}));
var UISuperLayout = /** @class */ (function (_super) {
    __extends(UISuperLayout, _super);
    function UISuperLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startAxis = UISuperAxis.VERTICAL;
        _this.direction = UISuperDirection.HEADER_TO_FOOTER;
        _this.paddingTop = 0;
        _this.paddingBottom = 0;
        _this.paddingLeft = 0;
        _this.paddingRight = 0;
        _this.spacing = cc.Vec2.ZERO;
        _this.column = 2;
        _this.multiple = 2;
        _this.prefab = null;
        _this.headerLoop = false;
        _this.footerLoop = false;
        _this.affectedByScale = true;
        _this.refreshItemEvents = [];
        _this._isinited = false;
        _this._maxPrefabTotal = 0;
        _this._children = []; //和this.node.children 保持同步
        _this._scrollView = null;
        _this._maxItemTotal = 0;
        _this._prevLayoutPosition = cc.Vec2.ZERO;
        _this.scrollToHeaderOrFooter = false;
        return _this;
    }
    Object.defineProperty(UISuperLayout.prototype, "layoutDirection", {
        get: function () {
            var pos = cc.Vec2.ZERO;
            if (this.vertical) {
                pos.y = this.node.y - this._prevLayoutPosition.y;
            }
            else {
                pos.x = this.node.x - this._prevLayoutPosition.x;
            }
            this._prevLayoutPosition = this.node.getPosition();
            return pos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "isScrollToFooter", {
        get: function () {
            if (this.vertical) {
                return this.layoutDirection.y < 0;
            }
            else {
                return this.layoutDirection.x > 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "children", {
        get: function () { return this._children; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "maxItemTotal", {
        get: function () { return this._maxItemTotal; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "maxPrefabTotal", {
        get: function () { return this._maxPrefabTotal; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "viewSize", {
        get: function () {
            if (!this._viewSize)
                this._viewSize = this.scrollView.view.getContentSize();
            return this._viewSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "vertical", {
        get: function () {
            return this.startAxis == UISuperAxis.VERTICAL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "horizontal", {
        get: function () {
            return this.startAxis == UISuperAxis.HORIZONTAL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerToFooter", {
        get: function () {
            return this.direction == UISuperDirection.HEADER_TO_FOOTER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerToHeader", {
        get: function () {
            return this.direction == UISuperDirection.FOOTER_TO_HEADER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "spacingWidth", {
        get: function () {
            return this.spacing.x * (this.column - 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "spacingHeight", {
        get: function () {
            return this.spacing.y * (this.column - 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "accommodWidth", {
        get: function () {
            return this.viewSize.width - this.paddingLeft - this.paddingRight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "accommodHeight", {
        get: function () {
            return this.viewSize.height - this.paddingTop - this.paddingBottom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "scrollView", {
        get: function () {
            if (!this._scrollView)
                this._scrollView = this.node.parent.parent.getComponent(UISuperScrollView_1.default);
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "header", {
        get: function () {
            return this._children[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footer", {
        get: function () {
            return this._children[this._children.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "topBoundary", {
        get: function () {
            if (this.headerToFooter) {
                return this.headerBoundaryY + this.paddingTop;
            }
            else {
                return this.footerBoundaryY + this.paddingTop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "bottomBoundary", {
        get: function () {
            if (this.headerToFooter) {
                return this.footerBoundaryY - this.paddingBottom;
            }
            else {
                return this.headerBoundaryY - this.paddingBottom;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "leftBoundary", {
        get: function () {
            if (this.headerToFooter) {
                return this.headerBoundaryX - this.paddingLeft;
            }
            else {
                return this.footerBoundaryX - this.paddingLeft;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "rightBoundary", {
        get: function () {
            if (this.headerToFooter) {
                return this.footerBoundaryX + this.paddingRight;
            }
            else {
                return this.headerBoundaryX + this.paddingRight;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerBoundaryX", {
        get: function () {
            if (this.headerToFooter) {
                return this.node.x + this.header.x - this.header.anchorX * this.getScaleWidth(this.header);
            }
            else {
                return this.node.x + this.header.x + (1 - this.header.anchorX) * this.getScaleWidth(this.header);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerBoundaryY", {
        get: function () {
            if (this.headerToFooter) {
                return this.node.y + this.header.y + (1 - this.header.anchorY) * this.getScaleHeight(this.header);
            }
            else {
                return this.node.y + this.header.y - this.header.anchorY * this.getScaleHeight(this.header);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerBoundaryX", {
        get: function () {
            if (this.headerToFooter) {
                return this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.getScaleWidth(this.footer);
            }
            else {
                return this.node.x + this.footer.x - this.footer.anchorX * this.getScaleWidth(this.footer);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerBoundaryY", {
        get: function () {
            if (this.headerToFooter) {
                return this.node.y + this.footer.y - this.footer.anchorY * this.getScaleHeight(this.footer);
            }
            else {
                return this.node.y + this.footer.y + (1 - this.footer.anchorY) * this.getScaleHeight(this.footer);
            }
        },
        enumerable: false,
        configurable: true
    });
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
        if (this.node.childrenCount == 0)
            return this.viewSize;
        var size = cc.Size.ZERO;
        if (this.headerToFooter) {
            size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight;
            size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom;
        }
        else {
            size.width = this.headerBoundaryX + -this.footerBoundaryX + this.paddingLeft + this.paddingRight;
            size.height = this.footerBoundaryY + -this.headerBoundaryY + this.paddingTop + this.paddingBottom;
        }
        return size;
    };
    /** 重置scrollview */
    UISuperLayout.prototype.resetScrollView = function () {
        this.scrollView.reset();
    };
    UISuperLayout.prototype.getUsedScaleValue = function (value) {
        return this.affectedByScale ? Math.abs(value) : 1;
    };
    /** 设置最大item数量 */
    UISuperLayout.prototype.total = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var dataOffset, reallyOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scrollView.stopAutoScroll();
                        this.scrollView.release();
                        // 初始化
                        this.initlized();
                        // 创建item
                        return [4 /*yield*/, this.asyncCreateItem(value)];
                    case 1:
                        // 创建item
                        _a.sent();
                        dataOffset = this.getDataOffset(value);
                        reallyOffset = this.getReallyOffset(dataOffset);
                        this.refreshItems(value, reallyOffset);
                        this._maxItemTotal = value;
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 获取兄弟节点 */
    UISuperLayout.prototype.getBrotherNode = function (node) {
        var index = this.getSiblingIndex(node) - 1;
        return this._children[index];
    };
    /** 是否是一组item中第一个 */
    UISuperLayout.prototype.isGroupHeader = function (node) {
        var xOry = this.getGroupHeader(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
    };
    /** 是否是一组item中最后一个 */
    UISuperLayout.prototype.isGroupFooter = function (node) {
        var xOry = this.getGroupFooter(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
    };
    /** 获取一组item中起始位置 */
    UISuperLayout.prototype.getGroupHeader = function (node) {
        var pos = cc.Vec2.ZERO;
        if (node) {
            if (this.vertical) {
                if (this.headerToFooter) {
                    pos.x = node.anchorX * this.getScaleWidth(node) + (this.paddingLeft * node.scaleX) - (this.node.anchorX * this.viewSize.width * node.scaleX);
                    pos.y = (1 - node.anchorY) * -this.getScaleHeight(node) - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
                }
                else {
                    pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
                    pos.y = node.anchorY * this.getScaleHeight(node) + this.paddingBottom - this.node.anchorY * this.viewSize.height;
                }
            }
            else {
                if (this.headerToFooter) {
                    pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
                    pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
                }
                else {
                    pos.x = this.accommodWidth * this.node.anchorX - this.getScaleWidth(node) * (1 - node.anchorX);
                    pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
                }
            }
        }
        return pos;
    };
    /** 获取一组item中结束位置 */
    UISuperLayout.prototype.getGroupFooter = function (node) {
        var pos = cc.Vec2.ZERO;
        if (node) {
            if (this.vertical) {
                pos.x = (this.accommodWidth + this.paddingLeft) * this.node.anchorX - (this.getScaleWidth(node) * (1 - node.anchorX) + this.node.anchorX * this.paddingRight);
                pos.y = node.y;
            }
            else {
                pos.x = node.x;
                pos.y = -((this.accommodHeight + this.paddingTop) * this.node.anchorY - this.getScaleHeight(node) * node.anchorY) + (1 - node.anchorY) * this.paddingBottom;
            }
        }
        return pos;
    };
    /** 获取一组item中 node 相对 relative 右偏移量 */
    UISuperLayout.prototype.getGroupRightX = function (node, relative) {
        if (!node || !relative)
            return this.getGroupHeader(node).x;
        var prevWidth = relative.x + this.getScaleWidth(relative) * (1 - relative.anchorX);
        var selfWidth = this.getScaleWidth(node) * node.anchorX;
        return prevWidth + selfWidth + this.spacing.x;
    };
    /** 获取一组item中 node 相对 relative 左偏移量 */
    UISuperLayout.prototype.getGroupLeftX = function (node, relative) {
        if (!node || !relative)
            return this.getGroupFooter(node).x;
        var prevWidth = relative.x - this.getScaleWidth(relative) * relative.anchorX;
        var selfWidth = this.getScaleWidth(node) * (1 - node.anchorX);
        return prevWidth - selfWidth - this.spacing.x;
    };
    /** 获取一组item中 node 相对 relative 下偏移量 */
    UISuperLayout.prototype.getGroupBottomY = function (node, relative) {
        var prevHeight = relative.y - this.getScaleHeight(relative) * relative.anchorY;
        var selfHeight = this.getScaleHeight(node) * (1 - node.anchorY);
        return prevHeight - selfHeight - this.spacing.y;
    };
    /** 获取一组item中 node 相对 relative 上偏移量 */
    UISuperLayout.prototype.getGroupTopY = function (node, relative) {
        var prevHeight = relative.y + this.getScaleHeight(relative) * (1 - relative.anchorY);
        var selfHeight = this.getScaleHeight(node) * node.anchorY;
        return prevHeight + selfHeight + this.spacing.y;
    };
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了头部边框 */
    UISuperLayout.prototype.isOutOfBoundaryHeader = function (node, multiple) {
        if (multiple === void 0) { multiple = 1.5; }
        var width = node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = -node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了尾部部边框 */
    UISuperLayout.prototype.isOutOfBoundaryFooter = function (node, multiple) {
        if (multiple === void 0) { multiple = 1.5; }
        var width = -node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    /** 滚动到头部 */
    UISuperLayout.prototype.scrollToHeader = function (timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToHeader();
        if (this.headerToFooter) {
            if (this.vertical) {
                this.scrollView.scrollToTop(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToLeft(timeInSecond, attenuated);
            }
        }
        else {
            if (this.vertical) {
                this.scrollView.scrollToBottom(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToRight(timeInSecond, attenuated);
            }
        }
    };
    /** 滚动到尾部 */
    UISuperLayout.prototype.scrollToFooter = function (timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToFooter();
        if (this.headerToFooter) {
            if (this.vertical) {
                this.scrollView.scrollToBottom(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToRight(timeInSecond, attenuated);
            }
        }
        else {
            if (this.vertical) {
                this.scrollView.scrollToTop(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToLeft(timeInSecond, attenuated);
            }
        }
    };
    /** 通知给定的node刷新数据 */
    UISuperLayout.prototype.notifyRefreshItem = function (target) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, target['index']);
    };
    /** 获取节点索引 */
    UISuperLayout.prototype.getSiblingIndex = function (node) {
        return this._children.indexOf(node);
    };
    /** 自定义索引方法 引擎的方法有延迟 */
    UISuperLayout.prototype.setSiblingIndex = function (node, index) {
        index = index !== -1 ? index : this._children.length - 1;
        var oldIndex = this._children.indexOf(node);
        if (index !== oldIndex) {
            this._children.splice(oldIndex, 1);
            if (index < this._children.length) {
                this._children.splice(index, 0, node);
            }
            else {
                this._children.push(node);
            }
            this.node.emit(exports.UIChangeBrotherEvnet);
        }
    };
    UISuperLayout.prototype.onLoad = function () {
        this.initlized();
    };
    /** 初始化 */
    UISuperLayout.prototype.initlized = function () {
        var _this = this;
        if (this._isinited)
            return;
        this.node.anchorX = 0.5;
        this.node.anchorY = 0.5;
        this.node.setContentSize(this.viewSize);
        this.node.getContentSize = this.getContentSize.bind(this);
        this.node.setPosition(cc.Vec2.ZERO);
        this.column = this.column < 1 ? 1 : this.column;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function () {
            var flag = _this.isScrollToFooter;
            if (_this.headerToFooter) {
                flag ? _this.footerToHeaderWatchChilds(flag) : _this.headerToFooterWatchChilds(flag);
            }
            else {
                flag ? _this.headerToFooterWatchChilds(flag) : _this.footerToHeaderWatchChilds(flag);
            }
            if (_this.vertical && 0 == _this.node.y || _this.horizontal && 0 == _this.node.x) {
                _this.header.setPosition(_this.getGroupHeader(_this.header));
                cc.error("充值了哦 归为");
            }
        }, this);
        this._isinited = true;
    };
    /** 获取缩放宽度 */
    UISuperLayout.prototype.getScaleWidth = function (node) {
        return node.width * this.getUsedScaleValue(node.scaleX);
    };
    /** 获取缩放高度 */
    UISuperLayout.prototype.getScaleHeight = function (node) {
        return node.height * this.getUsedScaleValue(node.scaleY);
    };
    /** 简单的浅拷贝 */
    UISuperLayout.prototype.getTempChildren = function () {
        var list = [];
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            list.push(child);
        }
        return list;
    };
    /** 正序更新item */
    UISuperLayout.prototype.headerToFooterWatchChilds = function (flag) {
        var children = this.getTempChildren();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child['watchSelf'](flag);
        }
    };
    /** 倒序更新item */
    UISuperLayout.prototype.footerToHeaderWatchChilds = function (flag) {
        var children = this.getTempChildren();
        for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            child['watchSelf'](flag);
        }
    };
    /** 当数据增加、减少时 获取数据偏移 */
    UISuperLayout.prototype.getDataOffset = function (value) {
        // 返回删除数据偏移
        if (this.footer && this.footer['index'] + 1 >= value) {
            var offset = this.footer['index'] + 1 - value;
            return offset == 0 ? 0 : -offset;
        }
        // 返回增加数据偏移
        if (this._maxItemTotal == 0 || value < this._maxItemTotal || this._maxItemTotal < this._maxPrefabTotal)
            return 0;
        if (this.isGroupFooter(this.footer))
            return 0;
        return value - this._maxItemTotal;
    };
    /** 当数据增加、减少时 获取节点偏移量 */
    UISuperLayout.prototype.getReallyOffset = function (dataOffset) {
        if (!this.header)
            return 0;
        if (dataOffset > 0) { // 代表增加item 表格模式下 通过偏移头部来让下方填满 填满后停止偏移
            for (var i = 0; i < dataOffset; i++) {
                if (this.isGroupFooter(this.footer))
                    return i; //返回真实的偏移量
                // 此时如果header 已经是一组item中最后一个时 向下位移 并 设置到一组item的起始位置   
                var pos = this.header.getPosition();
                if (this.vertical) { // 垂直滑动时
                    if (this.isGroupFooter(this.header)) {
                        if (this.headerToFooter) {
                            pos.y = this.getGroupBottomY(this.header, this.header);
                        }
                        else {
                            pos.y = this.getGroupTopY(this.header, this.header);
                        }
                        pos.x = this.getGroupHeader(this.header).x;
                    }
                    else {
                        pos.x = this.getGroupRightX(this.header, this.header); // 向右位移
                    }
                }
                else { // 水平滑动时
                    if (this.isGroupFooter(this.header)) {
                        if (this.headerToFooter) {
                            pos.x = this.getGroupRightX(this.header, this.header);
                        }
                        else {
                            pos.x = this.getGroupLeftX(this.header, this.header);
                        }
                        pos.y = this.getGroupHeader(this.header).y;
                    }
                    else {
                        pos.y = this.getGroupBottomY(this.header, this.header); // 向下位移
                    }
                }
                this.header.setPosition(pos);
            }
            return dataOffset;
        }
        // 代表减少了item 计算偏移量
        for (var i = 0; i < Math.abs(dataOffset); i++) {
            var pos = cc.Vec2.ZERO;
            if (this.vertical) {
                if (this.isGroupHeader(this.header)) {
                    pos.x = this.getGroupFooter(this.header).x;
                    if (this.headerToFooter) {
                        pos.y = this.getGroupTopY(this.header, this.header);
                    }
                    else {
                        pos.y = this.getGroupBottomY(this.header, this.header);
                    }
                }
                else {
                    pos.x = this.getGroupLeftX(this.header, this.header);
                    pos.y = this.header.y;
                }
            }
            else {
                if (this.isGroupHeader(this.header)) {
                    pos.y = this.getGroupFooter(this.header).y;
                    if (this.headerToFooter) {
                        pos.x = this.getGroupLeftX(this.header, this.header);
                    }
                    else {
                        pos.x = this.getGroupRightX(this.header, this.header);
                    }
                }
                else {
                    pos.y = this.getGroupTopY(this.header, this.header);
                    pos.x = this.header.x;
                }
            }
            this.header.setPosition(pos);
        }
        this.scrollView.calculateBoundary();
        return dataOffset;
    };
    /** 刷新所有item数据 根据当前item的 index 刷新 */
    UISuperLayout.prototype.refreshItems = function (value, offset) {
        if (offset === void 0) { offset = 0; }
        if (!this.header)
            return;
        var startIndex = this.header['index'] - 1 + offset;
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            startIndex++;
            if (startIndex > value - 1) {
                startIndex = 0;
            }
            else if (startIndex < 0) {
                startIndex = value - 1;
            }
            child['index'] = startIndex;
            this.notifyRefreshItem(child);
        }
    };
    /** 从头部到尾部重置数据 */
    UISuperLayout.prototype.resetToHeader = function () {
        var _a, _b;
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child['index'] = i;
            this.notifyRefreshItem(child);
        }
        if (!this.headerLoop && !this.footerLoop) {
            (_a = this.header) === null || _a === void 0 ? void 0 : _a.setPosition(this.getGroupHeader(this.header));
        }
        else if (!this.scrollToHeaderOrFooter) {
            (_b = this.header) === null || _b === void 0 ? void 0 : _b.setPosition(this.getGroupHeader(this.header));
        }
    };
    /** 从尾部到头部重置数据 */
    UISuperLayout.prototype.resetToFooter = function () {
        var index = this._maxItemTotal;
        for (var i = this._children.length - 1; i >= 0; i--) {
            var child = this._children[i];
            child['index'] = --index;
            this.notifyRefreshItem(child);
        }
    };
    /** 分帧创建item */
    UISuperLayout.prototype.asyncCreateItem = function (value) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var length, i, child, pos, total;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        (_a = this._gener) === null || _a === void 0 ? void 0 : _a.return("");
                        if (this.node.childrenCount > value) {
                            length = this.node.childrenCount - value;
                            for (i = 0; i < length; i++) {
                                child = this.footer;
                                this.remChild(child);
                                child.destroy();
                                this.node.removeChild(child);
                            }
                            if (this.header) {
                                pos = this.getGroupHeader(this.header);
                                if (this.vertical) {
                                    this.header.x = pos.x;
                                }
                                else {
                                    this.header.y = pos.y;
                                }
                            }
                            return [2 /*return*/];
                        }
                        if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.childrenCount)
                            return [2 /*return*/];
                        total = value - this.node.childrenCount;
                        this._gener = this.getGeneratorLength(total, function () {
                            var child = cc.instantiate(_this.prefab);
                            child['index'] = _this.node.childrenCount;
                            _this.addChild(child);
                            var spuerItem = child.getComponent(UISuperItem_1.default) || child.addComponent(UISuperItem_1.default);
                            _this.node.addChild(child);
                            spuerItem.init(_this);
                            if (_this.node.childrenCount == 1) {
                                var pos = _this.getGroupHeader(_this.header);
                                _this.header.setPosition(pos);
                                _this.scrollView.calculateBoundary();
                            }
                            var selfHorW, viewHorW;
                            if (_this.vertical) {
                                selfHorW = _this.getReallySize().height;
                                viewHorW = _this.viewSize.height;
                            }
                            else {
                                selfHorW = _this.getReallySize().width;
                                viewHorW = _this.viewSize.width;
                            }
                            if (selfHorW >= viewHorW * _this.multiple && _this.isGroupFooter(_this.footer)) {
                                _this._maxPrefabTotal = _this.node.childrenCount; //固定item数量 不在继续创建
                                return false;
                            }
                            return true;
                        });
                        return [4 /*yield*/, this.exeGenerator(this._gener, 10)];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 同步添加本地变量 children 并发送 UIChangeBrotherEvnet 通知*/
    UISuperLayout.prototype.addChild = function (node) {
        this._children.push(node);
        this.node.emit(exports.UIChangeBrotherEvnet);
    };
    /** 同步移除本地变量 children 并发送 UIChangeBrotherEvnet 通知 */
    UISuperLayout.prototype.remChild = function (node) {
        var index = this._children.indexOf(node);
        if (index != -1) {
            this._children.splice(index, 1);
        }
        this.node.emit(exports.UIChangeBrotherEvnet);
    };
    /** 分帧加载 */
    UISuperLayout.prototype.getGeneratorLength = function (length, callback) {
        var _i, i, result;
        var params = [];
        for (_i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 5];
                    result = callback.apply(void 0, __spreadArrays([i], params));
                    if (!result) return [3 /*break*/, 3];
                    return [4 /*yield*/];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3: return [2 /*return*/];
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    };
    /** 分帧执行 */
    UISuperLayout.prototype.exeGenerator = function (generator, duration) {
        return new Promise(function (resolve, reject) {
            var gen = generator;
            var execute = function () {
                var startTime = new Date().getTime();
                for (var iter = gen.next();; iter = gen.next()) {
                    if (iter == null || iter.done) {
                        resolve();
                        return;
                    }
                    if (new Date().getTime() - startTime > duration) {
                        setTimeout(function () { return execute(); }, cc.director.getDeltaTime() * 1000);
                        return;
                    }
                }
            };
            execute();
        });
    };
    __decorate([
        property({ type: cc.Enum(UISuperAxis), displayName: "排列方向" })
    ], UISuperLayout.prototype, "startAxis", void 0);
    __decorate([
        property({ type: cc.Enum(UISuperDirection), displayName: "排列子节点的方向" })
    ], UISuperLayout.prototype, "direction", void 0);
    __decorate([
        property({ displayName: "上边距" })
    ], UISuperLayout.prototype, "paddingTop", void 0);
    __decorate([
        property({ displayName: "下边距" })
    ], UISuperLayout.prototype, "paddingBottom", void 0);
    __decorate([
        property({ displayName: "左边距" })
    ], UISuperLayout.prototype, "paddingLeft", void 0);
    __decorate([
        property({ displayName: "右边距" })
    ], UISuperLayout.prototype, "paddingRight", void 0);
    __decorate([
        property({ displayName: "间隔" })
    ], UISuperLayout.prototype, "spacing", void 0);
    __decorate([
        property({ displayName: "每组item个数", tooltip: "单行的列数 或 单列的行数" })
    ], UISuperLayout.prototype, "column", void 0);
    __decorate([
        property({ displayName: "item创建倍率", tooltip: "相对于view的尺寸 默认2倍" })
    ], UISuperLayout.prototype, "multiple", void 0);
    __decorate([
        property({ type: cc.Prefab, displayName: "item Prefab" })
    ], UISuperLayout.prototype, "prefab", void 0);
    __decorate([
        property({ displayName: "头部滑动循环" })
    ], UISuperLayout.prototype, "headerLoop", void 0);
    __decorate([
        property({ displayName: "尾部滑动循环" })
    ], UISuperLayout.prototype, "footerLoop", void 0);
    __decorate([
        property
    ], UISuperLayout.prototype, "affectedByScale", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], UISuperLayout.prototype, "refreshItemEvents", void 0);
    UISuperLayout = __decorate([
        ccclass,
        menu("UISuperLayout")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVyTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQW9EO0FBQ3BELDZDQUF3QztBQUNsQyxJQUFBLEtBQThCLEVBQUUsQ0FBQyxVQUFVLEVBQXpDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBQSxFQUFFLElBQUksVUFBa0IsQ0FBQztBQUNsRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDUixRQUFBLG9CQUFvQixHQUFHLHNCQUFzQixDQUFBO0FBQzFELElBQVksV0FHWDtBQUhELFdBQVksV0FBVztJQUNuQix5REFBYyxDQUFBO0lBQ2QscURBQVksQ0FBQTtBQUNoQixDQUFDLEVBSFcsV0FBVyxHQUFYLG1CQUFXLEtBQVgsbUJBQVcsUUFHdEI7QUFDRCxJQUFZLGdCQUdYO0FBSEQsV0FBWSxnQkFBZ0I7SUFDeEIsK0VBQW9CLENBQUE7SUFDcEIsK0VBQW9CLENBQUE7QUFDeEIsQ0FBQyxFQUhXLGdCQUFnQixHQUFoQix3QkFBZ0IsS0FBaEIsd0JBQWdCLFFBRzNCO0FBR0Q7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUF1bUJDO1FBdG1Ca0UsZUFBUyxHQUFnQixXQUFXLENBQUMsUUFBUSxDQUFBO1FBQ3BDLGVBQVMsR0FBcUIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUE7UUFDckcsZ0JBQVUsR0FBVyxDQUFDLENBQUE7UUFDdEIsbUJBQWEsR0FBVyxDQUFDLENBQUE7UUFDekIsaUJBQVcsR0FBVyxDQUFDLENBQUE7UUFDdkIsa0JBQVksR0FBVyxDQUFDLENBQUE7UUFDekIsYUFBTyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBQ0MsWUFBTSxHQUFXLENBQUMsQ0FBQTtRQUNoQixjQUFRLEdBQVcsQ0FBQyxDQUFBO1FBQzVCLFlB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NUI7UUFBMUQsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxDQUFDO2lEQUF5QjtJQUM5QztRQUFwQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7cURBQTRCO0lBQzNCO1FBQXBDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsQ0FBQztxREFBNEI7SUFDdEQ7UUFBVCxRQUFROzBEQUFnQztJQUNKO1FBQXBDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQzs0REFBb0Q7SUFkdkUsYUFBYTtRQUZqQyxPQUFPO1FBQ1AsSUFBSSxDQUFDLGVBQWUsQ0FBQztPQUNELGFBQWEsQ0F1bUJqQztJQUFELG9CQUFDO0NBdm1CRCxBQXVtQkMsQ0F2bUIwQyxFQUFFLENBQUMsU0FBUyxHQXVtQnREO2tCQXZtQm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTcHVlclNjcm9sbFZpZXcgZnJvbSAnLi9VSVN1cGVyU2Nyb2xsVmlldyc7XG5pbXBvcnQgVUlTcHVlckl0ZW0gZnJvbSAnLi9VSVN1cGVySXRlbSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgRVBTSUxPTiA9IDFlLTQ7XG5leHBvcnQgY29uc3QgVUlDaGFuZ2VCcm90aGVyRXZuZXQgPSBcIlVJQ2hhbmdlQnJvdGhlckV2bmV0XCJcbmV4cG9ydCBlbnVtIFVJU3VwZXJBeGlzIHtcbiAgICBIT1JJWk9OVEFMID0gMCxcbiAgICBWRVJUSUNBTCA9IDFcbn1cbmV4cG9ydCBlbnVtIFVJU3VwZXJEaXJlY3Rpb24ge1xuICAgIEhFQURFUl9UT19GT09URVIgPSAwLFxuICAgIEZPT1RFUl9UT19IRUFERVIgPSAxLFxufVxuQGNjY2xhc3NcbkBtZW51KFwiVUlTdXBlckxheW91dFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTdXBlckxheW91dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShVSVN1cGVyQXhpcyksIGRpc3BsYXlOYW1lOiBcIuaOkuWIl+aWueWQkVwiIH0pIHN0YXJ0QXhpczogVUlTdXBlckF4aXMgPSBVSVN1cGVyQXhpcy5WRVJUSUNBTFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVUlTdXBlckRpcmVjdGlvbiksIGRpc3BsYXlOYW1lOiBcIuaOkuWIl+WtkOiKgueCueeahOaWueWQkVwiIH0pIGRpcmVjdGlvbjogVUlTdXBlckRpcmVjdGlvbiA9IFVJU3VwZXJEaXJlY3Rpb24uSEVBREVSX1RPX0ZPT1RFUlxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuS4iui+uei3nVwiIH0pIHBhZGRpbmdUb3A6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLkuIvovrnot51cIiB9KSBwYWRkaW5nQm90dG9tOiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5bem6L656LedXCIgfSkgcGFkZGluZ0xlZnQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlj7Povrnot51cIiB9KSBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLpl7TpmpRcIiB9KSBzcGFjaW5nOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5q+P57uEaXRlbeS4quaVsFwiLCB0b29sdGlwOiBcIuWNleihjOeahOWIl+aVsCDmiJYg5Y2V5YiX55qE6KGM5pWwXCIgfSkgY29sdW1uOiBudW1iZXIgPSAyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwiaXRlbeWIm+W7uuWAjeeOh1wiLCB0b29sdGlwOiBcIuebuOWvueS6jnZpZXfnmoTlsLrlr7gg6buY6K6kMuWAjVwiIH0pIG11bHRpcGxlOiBudW1iZXIgPSAyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCBkaXNwbGF5TmFtZTogXCJpdGVtIFByZWZhYlwiIH0pIHByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWktOmDqOa7keWKqOW+queOr1wiIH0pIGhlYWRlckxvb3A6IGJvb2xlYW4gPSBmYWxzZVxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWwvumDqOa7keWKqOW+queOr1wiIH0pIGZvb3Rlckxvb3A6IGJvb2xlYW4gPSBmYWxzZVxuICAgIEBwcm9wZXJ0eSBhZmZlY3RlZEJ5U2NhbGU6IGJvb2xlYW4gPSB0cnVlXG4gICAgQHByb3BlcnR5KGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpIHJlZnJlc2hJdGVtRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIHByaXZhdGUgX2dlbmVyOiBHZW5lcmF0b3JcbiAgICBwcml2YXRlIF9pc2luaXRlZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBfbWF4UHJlZmFiVG90YWw6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9jaGlsZHJlbjogY2MuTm9kZVtdID0gW10gLy/lkox0aGlzLm5vZGUuY2hpbGRyZW4g5L+d5oyB5ZCM5q2lXG4gICAgcHJpdmF0ZSBfdmlld1NpemU6IGNjLlNpemVcbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3OiBVSVNwdWVyU2Nyb2xsVmlldyA9IG51bGxcbiAgICBwcml2YXRlIF9tYXhJdGVtVG90YWw6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9wcmV2TGF5b3V0UG9zaXRpb246IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk9cbiAgICBwdWJsaWMgc2Nyb2xsVG9IZWFkZXJPckZvb3RlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBnZXQgbGF5b3V0RGlyZWN0aW9uKCk6IGNjLlZlYzIge1xuICAgICAgICBsZXQgcG9zID0gY2MuVmVjMi5aRVJPXG4gICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICBwb3MueSA9IHRoaXMubm9kZS55IC0gdGhpcy5fcHJldkxheW91dFBvc2l0aW9uLnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcy54ID0gdGhpcy5ub2RlLnggLSB0aGlzLl9wcmV2TGF5b3V0UG9zaXRpb24ueFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZMYXlvdXRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIHJldHVybiBwb3NcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNTY3JvbGxUb0Zvb3RlcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheW91dERpcmVjdGlvbi55IDwgMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0RGlyZWN0aW9uLnggPiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBjaGlsZHJlbigpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuIH1cbiAgICBwdWJsaWMgZ2V0IG1heEl0ZW1Ub3RhbCgpIHsgcmV0dXJuIHRoaXMuX21heEl0ZW1Ub3RhbCB9XG4gICAgcHVibGljIGdldCBtYXhQcmVmYWJUb3RhbCgpIHsgcmV0dXJuIHRoaXMuX21heFByZWZhYlRvdGFsIH1cbiAgICBwdWJsaWMgZ2V0IHZpZXdTaXplKCk6IGNjLlNpemUge1xuICAgICAgICBpZiAoIXRoaXMuX3ZpZXdTaXplKSB0aGlzLl92aWV3U2l6ZSA9IHRoaXMuc2Nyb2xsVmlldy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdTaXplXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTFxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhvcml6b250YWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGVhZGVyVG9Gb290ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmRpcmVjdGlvbiA9PSBVSVN1cGVyRGlyZWN0aW9uLkhFQURFUl9UT19GT09URVJcbiAgICB9XG4gICAgcHVibGljIGdldCBmb290ZXJUb0hlYWRlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09IFVJU3VwZXJEaXJlY3Rpb24uRk9PVEVSX1RPX0hFQURFUlxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNwYWNpbmdXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2luZy54ICogKHRoaXMuY29sdW1uIC0gMSlcbiAgICB9XG4gICAgcHVibGljIGdldCBzcGFjaW5nSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGFjaW5nLnkgKiAodGhpcy5jb2x1bW4gLSAxKVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGFjY29tbW9kV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdTaXplLndpZHRoIC0gdGhpcy5wYWRkaW5nTGVmdCAtIHRoaXMucGFkZGluZ1JpZ2h0XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYWNjb21tb2RIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZpZXdTaXplLmhlaWdodCAtIHRoaXMucGFkZGluZ1RvcCAtIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFZpZXcoKTogVUlTcHVlclNjcm9sbFZpZXcge1xuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXcpIHRoaXMuX3Njcm9sbFZpZXcgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoVUlTcHVlclNjcm9sbFZpZXcpXG4gICAgICAgIHJldHVybiB0aGlzLl9zY3JvbGxWaWV3XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBoZWFkZXIoKTogY2MuTm9kZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlblswXVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGZvb3RlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW3RoaXMuX2NoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgfVxuICAgIHB1YmxpYyBnZXQgdG9wQm91bmRhcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJCb3VuZGFyeVkgKyB0aGlzLnBhZGRpbmdUb3BcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvb3RlckJvdW5kYXJ5WSArIHRoaXMucGFkZGluZ1RvcFxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgYm90dG9tQm91bmRhcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb290ZXJCb3VuZGFyeVkgLSB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhlYWRlckJvdW5kYXJ5WSAtIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgbGVmdEJvdW5kYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlYIC0gdGhpcy5wYWRkaW5nTGVmdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9vdGVyQm91bmRhcnlYIC0gdGhpcy5wYWRkaW5nTGVmdFxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgcmlnaHRCb3VuZGFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvb3RlckJvdW5kYXJ5WCArIHRoaXMucGFkZGluZ1JpZ2h0XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXJCb3VuZGFyeVggKyB0aGlzLnBhZGRpbmdSaWdodFxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaGVhZGVyQm91bmRhcnlYKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS54ICsgdGhpcy5oZWFkZXIueCAtIHRoaXMuaGVhZGVyLmFuY2hvclggKiB0aGlzLmdldFNjYWxlV2lkdGgodGhpcy5oZWFkZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnggKyB0aGlzLmhlYWRlci54ICsgKDEgLSB0aGlzLmhlYWRlci5hbmNob3JYKSAqIHRoaXMuZ2V0U2NhbGVXaWR0aCh0aGlzLmhlYWRlcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGhlYWRlckJvdW5kYXJ5WSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUueSArIHRoaXMuaGVhZGVyLnkgKyAoMSAtIHRoaXMuaGVhZGVyLmFuY2hvclkpICogdGhpcy5nZXRTY2FsZUhlaWdodCh0aGlzLmhlYWRlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUueSArIHRoaXMuaGVhZGVyLnkgLSB0aGlzLmhlYWRlci5hbmNob3JZICogdGhpcy5nZXRTY2FsZUhlaWdodCh0aGlzLmhlYWRlcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0IGZvb3RlckJvdW5kYXJ5WCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUueCArIHRoaXMuZm9vdGVyLnggKyAoMSAtIHRoaXMuZm9vdGVyLmFuY2hvclgpICogdGhpcy5nZXRTY2FsZVdpZHRoKHRoaXMuZm9vdGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS54ICsgdGhpcy5mb290ZXIueCAtIHRoaXMuZm9vdGVyLmFuY2hvclggKiB0aGlzLmdldFNjYWxlV2lkdGgodGhpcy5mb290ZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldCBmb290ZXJCb3VuZGFyeVkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnkgKyB0aGlzLmZvb3Rlci55IC0gdGhpcy5mb290ZXIuYW5jaG9yWSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQodGhpcy5mb290ZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnkgKyB0aGlzLmZvb3Rlci55ICsgKDEgLSB0aGlzLmZvb3Rlci5hbmNob3JZKSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQodGhpcy5mb290ZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIGdldENvbnRlbnRTaXplKCkge1xuICAgICAgICBsZXQgc2l6ZSA9IHRoaXMuZ2V0UmVhbGx5U2l6ZSgpXG4gICAgICAgIGxldCB2aWV3U2l6ZSA9IHRoaXMuc2Nyb2xsVmlldy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgaWYgKHNpemUuaGVpZ2h0IDwgdmlld1NpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBzaXplLmhlaWdodCA9IHZpZXdTaXplLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplLndpZHRoIDwgdmlld1NpemUud2lkdGgpIHtcbiAgICAgICAgICAgIHNpemUud2lkdGggPSB2aWV3U2l6ZS53aWR0aFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplXG4gICAgfVxuICAgIHB1YmxpYyBnZXRSZWFsbHlTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPT0gMCkgcmV0dXJuIHRoaXMudmlld1NpemVcbiAgICAgICAgbGV0IHNpemUgPSBjYy5TaXplLlpFUk9cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHNpemUud2lkdGggPSB0aGlzLmZvb3RlckJvdW5kYXJ5WCArIC10aGlzLmhlYWRlckJvdW5kYXJ5WCArIHRoaXMucGFkZGluZ0xlZnQgKyB0aGlzLnBhZGRpbmdSaWdodFxuICAgICAgICAgICAgc2l6ZS5oZWlnaHQgPSB0aGlzLmhlYWRlckJvdW5kYXJ5WSArIC10aGlzLmZvb3RlckJvdW5kYXJ5WSArIHRoaXMucGFkZGluZ1RvcCArIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHRoaXMuaGVhZGVyQm91bmRhcnlYICsgLXRoaXMuZm9vdGVyQm91bmRhcnlYICsgdGhpcy5wYWRkaW5nTGVmdCArIHRoaXMucGFkZGluZ1JpZ2h0XG4gICAgICAgICAgICBzaXplLmhlaWdodCA9IHRoaXMuZm9vdGVyQm91bmRhcnlZICsgLXRoaXMuaGVhZGVyQm91bmRhcnlZICsgdGhpcy5wYWRkaW5nVG9wICsgdGhpcy5wYWRkaW5nQm90dG9tXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemVcbiAgICB9XG5cbiAgICAvKiog6YeN572uc2Nyb2xsdmlldyAqL1xuICAgIHB1YmxpYyByZXNldFNjcm9sbFZpZXcoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5yZXNldCgpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRVc2VkU2NhbGVWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFmZmVjdGVkQnlTY2FsZSA/IE1hdGguYWJzKHZhbHVlKSA6IDFcbiAgICB9XG4gICAgLyoqIOiuvue9ruacgOWkp2l0ZW3mlbDph48gKi9cbiAgICBwdWJsaWMgYXN5bmMgdG90YWwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcucmVsZWFzZSgpXG4gICAgICAgIC8vIOWIneWni+WMllxuICAgICAgICB0aGlzLmluaXRsaXplZCgpXG4gICAgICAgIC8vIOWIm+W7uml0ZW1cbiAgICAgICAgYXdhaXQgdGhpcy5hc3luY0NyZWF0ZUl0ZW0odmFsdWUpXG4gICAgICAgIGxldCBkYXRhT2Zmc2V0ID0gdGhpcy5nZXREYXRhT2Zmc2V0KHZhbHVlKVxuICAgICAgICBsZXQgcmVhbGx5T2Zmc2V0ID0gdGhpcy5nZXRSZWFsbHlPZmZzZXQoZGF0YU9mZnNldClcbiAgICAgICAgdGhpcy5yZWZyZXNoSXRlbXModmFsdWUsIHJlYWxseU9mZnNldClcbiAgICAgICAgdGhpcy5fbWF4SXRlbVRvdGFsID0gdmFsdWVcbiAgICB9XG4gICAgLyoqIOiOt+WPluWFhOW8n+iKgueCuSAqL1xuICAgIHB1YmxpYyBnZXRCcm90aGVyTm9kZShub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0U2libGluZ0luZGV4KG5vZGUpIC0gMVxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW5baW5kZXhdXG4gICAgfVxuICAgIC8qKiDmmK/lkKbmmK/kuIDnu4RpdGVt5Lit56ys5LiA5LiqICovXG4gICAgcHVibGljIGlzR3JvdXBIZWFkZXIobm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgeE9yeSA9IHRoaXMuZ2V0R3JvdXBIZWFkZXIobm9kZSlcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMudmVydGljYWwgPyBjYy52Mih4T3J5LngsIDApIDogY2MudjIoMCwgeE9yeS55KVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXMudmVydGljYWwgPyBjYy52Mihub2RlLngsIDApIDogY2MudjIoMCwgbm9kZS55KVxuICAgICAgICByZXR1cm4gc2VsZi5mdXp6eUVxdWFscyhwb3MsIEVQU0lMT04pXG4gICAgfVxuICAgIC8qKiDmmK/lkKbmmK/kuIDnu4RpdGVt5Lit5pyA5ZCO5LiA5LiqICovXG4gICAgcHVibGljIGlzR3JvdXBGb290ZXIobm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgeE9yeSA9IHRoaXMuZ2V0R3JvdXBGb290ZXIobm9kZSlcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMudmVydGljYWwgPyBjYy52Mih4T3J5LngsIDApIDogY2MudjIoMCwgeE9yeS55KVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXMudmVydGljYWwgPyBjYy52Mihub2RlLngsIDApIDogY2MudjIoMCwgbm9kZS55KVxuICAgICAgICByZXR1cm4gc2VsZi5mdXp6eUVxdWFscyhwb3MsIEVQU0lMT04pXG4gICAgfVxuICAgIC8qKiDojrflj5bkuIDnu4RpdGVt5Lit6LW35aeL5L2N572uICovXG4gICAgcHVibGljIGdldEdyb3VwSGVhZGVyKG5vZGU6IGNjLk5vZGUpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IHBvcyA9IGNjLlZlYzIuWkVST1xuICAgICAgICBpZiAobm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgICAgICBwb3MueCA9IG5vZGUuYW5jaG9yWCAqIHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSArICh0aGlzLnBhZGRpbmdMZWZ0ICogbm9kZS5zY2FsZVgpIC0gKHRoaXMubm9kZS5hbmNob3JYICogdGhpcy52aWV3U2l6ZS53aWR0aCAqIG5vZGUuc2NhbGVYKVxuICAgICAgICAgICAgICAgICAgICBwb3MueSA9ICgxIC0gbm9kZS5hbmNob3JZKSAqIC10aGlzLmdldFNjYWxlSGVpZ2h0KG5vZGUpIC0gdGhpcy5wYWRkaW5nVG9wICsgKDEgLSB0aGlzLm5vZGUuYW5jaG9yWSkgKiB0aGlzLnZpZXdTaXplLmhlaWdodFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy54ID0gbm9kZS5hbmNob3JYICogdGhpcy5nZXRTY2FsZVdpZHRoKG5vZGUpICsgdGhpcy5wYWRkaW5nTGVmdCAtIHRoaXMubm9kZS5hbmNob3JYICogdGhpcy52aWV3U2l6ZS53aWR0aFxuICAgICAgICAgICAgICAgICAgICBwb3MueSA9IG5vZGUuYW5jaG9yWSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQobm9kZSkgKyB0aGlzLnBhZGRpbmdCb3R0b20gLSB0aGlzLm5vZGUuYW5jaG9yWSAqIHRoaXMudmlld1NpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgICAgICBwb3MueCA9IG5vZGUuYW5jaG9yWCAqIHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSArIHRoaXMucGFkZGluZ0xlZnQgLSB0aGlzLm5vZGUuYW5jaG9yWCAqIHRoaXMudmlld1NpemUud2lkdGhcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSAoMSAtIG5vZGUuYW5jaG9yWSkgKiAtbm9kZS5oZWlnaHQgLSB0aGlzLnBhZGRpbmdUb3AgKyAoMSAtIHRoaXMubm9kZS5hbmNob3JZKSAqIHRoaXMudmlld1NpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmFjY29tbW9kV2lkdGggKiB0aGlzLm5vZGUuYW5jaG9yWCAtIHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSAqICgxIC0gbm9kZS5hbmNob3JYKVxuICAgICAgICAgICAgICAgICAgICBwb3MueSA9ICgxIC0gbm9kZS5hbmNob3JZKSAqIC1ub2RlLmhlaWdodCAtIHRoaXMucGFkZGluZ1RvcCArICgxIC0gdGhpcy5ub2RlLmFuY2hvclkpICogdGhpcy52aWV3U2l6ZS5oZWlnaHRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc1xuICAgIH1cbiAgICAvKiog6I635Y+W5LiA57uEaXRlbeS4ree7k+adn+S9jee9riAqL1xuICAgIHB1YmxpYyBnZXRHcm91cEZvb3Rlcihub2RlOiBjYy5Ob2RlKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCBwb3MgPSBjYy5WZWMyLlpFUk9cbiAgICAgICAgaWYgKG5vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSAodGhpcy5hY2NvbW1vZFdpZHRoICsgdGhpcy5wYWRkaW5nTGVmdCkgKiB0aGlzLm5vZGUuYW5jaG9yWCAtICh0aGlzLmdldFNjYWxlV2lkdGgobm9kZSkgKiAoMSAtIG5vZGUuYW5jaG9yWCkgKyB0aGlzLm5vZGUuYW5jaG9yWCAqIHRoaXMucGFkZGluZ1JpZ2h0KVxuICAgICAgICAgICAgICAgIHBvcy55ID0gbm9kZS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gbm9kZS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSAtKCh0aGlzLmFjY29tbW9kSGVpZ2h0ICsgdGhpcy5wYWRkaW5nVG9wKSAqIHRoaXMubm9kZS5hbmNob3JZIC0gdGhpcy5nZXRTY2FsZUhlaWdodChub2RlKSAqIG5vZGUuYW5jaG9yWSkgKyAoMSAtIG5vZGUuYW5jaG9yWSkgKiB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zXG4gICAgfVxuICAgIC8qKiDojrflj5bkuIDnu4RpdGVt5LitIG5vZGUg55u45a+5IHJlbGF0aXZlIOWPs+WBj+enu+mHjyAqL1xuICAgIHB1YmxpYyBnZXRHcm91cFJpZ2h0WChub2RlOiBjYy5Ob2RlLCByZWxhdGl2ZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUgfHwgIXJlbGF0aXZlKSByZXR1cm4gdGhpcy5nZXRHcm91cEhlYWRlcihub2RlKS54XG4gICAgICAgIGxldCBwcmV2V2lkdGggPSByZWxhdGl2ZS54ICsgdGhpcy5nZXRTY2FsZVdpZHRoKHJlbGF0aXZlKSAqICgxIC0gcmVsYXRpdmUuYW5jaG9yWClcbiAgICAgICAgbGV0IHNlbGZXaWR0aCA9IHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSAqIG5vZGUuYW5jaG9yWFxuICAgICAgICByZXR1cm4gcHJldldpZHRoICsgc2VsZldpZHRoICsgdGhpcy5zcGFjaW5nLnhcbiAgICB9XG4gICAgLyoqIOiOt+WPluS4gOe7hGl0ZW3kuK0gbm9kZSDnm7jlr7kgcmVsYXRpdmUg5bem5YGP56e76YePICovXG4gICAgcHVibGljIGdldEdyb3VwTGVmdFgobm9kZTogY2MuTm9kZSwgcmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlIHx8ICFyZWxhdGl2ZSkgcmV0dXJuIHRoaXMuZ2V0R3JvdXBGb290ZXIobm9kZSkueFxuICAgICAgICBsZXQgcHJldldpZHRoID0gcmVsYXRpdmUueCAtIHRoaXMuZ2V0U2NhbGVXaWR0aChyZWxhdGl2ZSkgKiByZWxhdGl2ZS5hbmNob3JYXG4gICAgICAgIGxldCBzZWxmV2lkdGggPSB0aGlzLmdldFNjYWxlV2lkdGgobm9kZSkgKiAoMSAtIG5vZGUuYW5jaG9yWClcbiAgICAgICAgcmV0dXJuIHByZXZXaWR0aCAtIHNlbGZXaWR0aCAtIHRoaXMuc3BhY2luZy54XG4gICAgfVxuICAgIC8qKiDojrflj5bkuIDnu4RpdGVt5LitIG5vZGUg55u45a+5IHJlbGF0aXZlIOS4i+WBj+enu+mHjyAqL1xuICAgIHB1YmxpYyBnZXRHcm91cEJvdHRvbVkobm9kZTogY2MuTm9kZSwgcmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHByZXZIZWlnaHQgPSByZWxhdGl2ZS55IC0gdGhpcy5nZXRTY2FsZUhlaWdodChyZWxhdGl2ZSkgKiByZWxhdGl2ZS5hbmNob3JZXG4gICAgICAgIGxldCBzZWxmSGVpZ2h0ID0gdGhpcy5nZXRTY2FsZUhlaWdodChub2RlKSAqICgxIC0gbm9kZS5hbmNob3JZKVxuICAgICAgICByZXR1cm4gcHJldkhlaWdodCAtIHNlbGZIZWlnaHQgLSB0aGlzLnNwYWNpbmcueVxuICAgIH1cbiAgICAvKiog6I635Y+W5LiA57uEaXRlbeS4rSBub2RlIOebuOWvuSByZWxhdGl2ZSDkuIrlgY/np7vph48gKi9cbiAgICBwdWJsaWMgZ2V0R3JvdXBUb3BZKG5vZGU6IGNjLk5vZGUsIHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcmVsYXRpdmUueSArIHRoaXMuZ2V0U2NhbGVIZWlnaHQocmVsYXRpdmUpICogKDEgLSByZWxhdGl2ZS5hbmNob3JZKVxuICAgICAgICBsZXQgc2VsZkhlaWdodCA9IHRoaXMuZ2V0U2NhbGVIZWlnaHQobm9kZSkgKiBub2RlLmFuY2hvcllcbiAgICAgICAgcmV0dXJuIHByZXZIZWlnaHQgKyBzZWxmSGVpZ2h0ICsgdGhpcy5zcGFjaW5nLnlcbiAgICB9XG4gICAgLyoqIOWIpOaWree7meWumueahCBub2RlIOS5mOS7pSBtdWx0aXBsZSDlgI3mlbDlkI4g5piv5ZCm6LaF5Ye65LqG5aS06YOo6L655qGGICovXG4gICAgcHVibGljIGlzT3V0T2ZCb3VuZGFyeUhlYWRlcihub2RlOiBjYy5Ob2RlLCBtdWx0aXBsZTogbnVtYmVyID0gMS41KSB7XG4gICAgICAgIGxldCB3aWR0aCA9IG5vZGUud2lkdGggKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVYKSAqIG11bHRpcGxlXG4gICAgICAgIGxldCBoZWlnaHQgPSAtbm9kZS5oZWlnaHQgKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVZKSAqIG11bHRpcGxlXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIod2lkdGgsIGhlaWdodCkpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgLyoqIOWIpOaWree7meWumueahCBub2RlIOS5mOS7pSBtdWx0aXBsZSDlgI3mlbDlkI4g5piv5ZCm6LaF5Ye65LqG5bC+6YOo6YOo6L655qGGICovXG4gICAgcHVibGljIGlzT3V0T2ZCb3VuZGFyeUZvb3Rlcihub2RlOiBjYy5Ob2RlLCBtdWx0aXBsZTogbnVtYmVyID0gMS41KSB7XG4gICAgICAgIGxldCB3aWR0aCA9IC1ub2RlLndpZHRoICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWCkgKiBtdWx0aXBsZVxuICAgICAgICBsZXQgaGVpZ2h0ID0gbm9kZS5oZWlnaHQgKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVZKSAqIG11bHRpcGxlXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIod2lkdGgsIGhlaWdodCkpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgLyoqIOa7muWKqOWIsOWktOmDqCAqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0hlYWRlcih0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IZWFkZXJPckZvb3RlciA9IHRpbWVJblNlY29uZCA+IDBcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgdGhpcy5yZXNldFRvSGVhZGVyKClcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvTGVmdCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5rua5Yqo5Yiw5bC+6YOoICovXG4gICAgcHVibGljIHNjcm9sbFRvRm9vdGVyKHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hlYWRlck9yRm9vdGVyID0gdGltZUluU2Vjb25kID4gMFxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKVxuICAgICAgICB0aGlzLnJlc2V0VG9Gb290ZXIoKVxuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Cb3R0b20odGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0xlZnQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDpgJrnn6Xnu5nlrprnmoRub2Rl5Yi35paw5pWw5o2uICovXG4gICAgcHVibGljIG5vdGlmeVJlZnJlc2hJdGVtKHRhcmdldDogY2MuTm9kZSkge1xuICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5yZWZyZXNoSXRlbUV2ZW50cywgdGFyZ2V0LCB0YXJnZXRbJ2luZGV4J10pXG4gICAgfVxuICAgIC8qKiDojrflj5boioLngrnntKLlvJUgKi9cbiAgICBwdWJsaWMgZ2V0U2libGluZ0luZGV4KG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgICB9XG4gICAgLyoqIOiHquWumuS5iee0ouW8leaWueazlSDlvJXmk47nmoTmlrnms5XmnInlu7bov58gKi9cbiAgICBwdWJsaWMgc2V0U2libGluZ0luZGV4KG5vZGU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCAhPT0gLTEgPyBpbmRleCA6IHRoaXMuX2NoaWxkcmVuLmxlbmd0aCAtIDFcbiAgICAgICAgdmFyIG9sZEluZGV4ID0gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihub2RlKVxuICAgICAgICBpZiAoaW5kZXggIT09IG9sZEluZGV4KSB7XG4gICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2Uob2xkSW5kZXgsIDEpXG4gICAgICAgICAgICBpZiAoaW5kZXggPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDAsIG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChVSUNoYW5nZUJyb3RoZXJFdm5ldClcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGxpemVkKClcbiAgICB9XG4gICAgLyoqIOWIneWni+WMliAqL1xuICAgIHByaXZhdGUgaW5pdGxpemVkKCkge1xuICAgICAgICBpZiAodGhpcy5faXNpbml0ZWQpIHJldHVyblxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDAuNVxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWSA9IDAuNVxuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUodGhpcy52aWV3U2l6ZSlcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbnRlbnRTaXplID0gdGhpcy5nZXRDb250ZW50U2l6ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy5WZWMyLlpFUk8pXG4gICAgICAgIHRoaXMuY29sdW1uID0gdGhpcy5jb2x1bW4gPCAxID8gMSA6IHRoaXMuY29sdW1uXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VELCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgZmxhZyA9IHRoaXMuaXNTY3JvbGxUb0Zvb3RlclxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICBmbGFnID8gdGhpcy5mb290ZXJUb0hlYWRlcldhdGNoQ2hpbGRzKGZsYWcpIDogdGhpcy5oZWFkZXJUb0Zvb3RlcldhdGNoQ2hpbGRzKGZsYWcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYWcgPyB0aGlzLmhlYWRlclRvRm9vdGVyV2F0Y2hDaGlsZHMoZmxhZykgOiB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hDaGlsZHMoZmxhZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsICYmIDAgPT0gdGhpcy5ub2RlLnkgfHwgdGhpcy5ob3Jpem9udGFsICYmIDAgPT0gdGhpcy5ub2RlLngpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5zZXRQb3NpdGlvbih0aGlzLmdldEdyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKSlcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihcIuWFheWAvOS6huWTpiDlvZLkuLpcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcylcbiAgICAgICAgdGhpcy5faXNpbml0ZWQgPSB0cnVlXG4gICAgfVxuICAgIC8qKiDojrflj5bnvKnmlL7lrr3luqYgKi9cbiAgICBwcml2YXRlIGdldFNjYWxlV2lkdGgobm9kZTogY2MuTm9kZSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBub2RlLndpZHRoICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWClcbiAgICB9XG4gICAgLyoqIOiOt+WPlue8qeaUvumrmOW6piAqL1xuICAgIHByaXZhdGUgZ2V0U2NhbGVIZWlnaHQobm9kZTogY2MuTm9kZSk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBub2RlLmhlaWdodCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVkpXG4gICAgfVxuICAgIC8qKiDnroDljZXnmoTmtYXmi7fotJ0gKi9cbiAgICBwcml2YXRlIGdldFRlbXBDaGlsZHJlbigpIHtcbiAgICAgICAgbGV0IGxpc3QgPSBbXVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuX2NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGlzdC5wdXNoKGNoaWxkKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0XG4gICAgfVxuICAgIC8qKiDmraPluo/mm7TmlrBpdGVtICovXG4gICAgcHJpdmF0ZSBoZWFkZXJUb0Zvb3RlcldhdGNoQ2hpbGRzKGZsYWcpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5nZXRUZW1wQ2hpbGRyZW4oKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2hpbGRbJ3dhdGNoU2VsZiddKGZsYWcpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWAkuW6j+abtOaWsGl0ZW0gKi9cbiAgICBwcml2YXRlIGZvb3RlclRvSGVhZGVyV2F0Y2hDaGlsZHMoZmxhZykge1xuICAgICAgICBsZXQgY2hpbGRyZW4gPSB0aGlzLmdldFRlbXBDaGlsZHJlbigpXG4gICAgICAgIGZvciAobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkWyd3YXRjaFNlbGYnXShmbGFnKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDlvZPmlbDmja7lop7liqDjgIHlh4/lsJHml7Yg6I635Y+W5pWw5o2u5YGP56e7ICovXG4gICAgcHJpdmF0ZSBnZXREYXRhT2Zmc2V0KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgLy8g6L+U5Zue5Yig6Zmk5pWw5o2u5YGP56e7XG4gICAgICAgIGlmICh0aGlzLmZvb3RlciAmJiB0aGlzLmZvb3RlclsnaW5kZXgnXSArIDEgPj0gdmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmZvb3RlclsnaW5kZXgnXSArIDEgLSB2YWx1ZVxuICAgICAgICAgICAgcmV0dXJuIG9mZnNldCA9PSAwID8gMCA6IC1vZmZzZXRcbiAgICAgICAgfVxuICAgICAgICAvLyDov5Tlm57lop7liqDmlbDmja7lgY/np7tcbiAgICAgICAgaWYgKHRoaXMuX21heEl0ZW1Ub3RhbCA9PSAwIHx8IHZhbHVlIDwgdGhpcy5fbWF4SXRlbVRvdGFsIHx8IHRoaXMuX21heEl0ZW1Ub3RhbCA8IHRoaXMuX21heFByZWZhYlRvdGFsKSByZXR1cm4gMFxuICAgICAgICBpZiAodGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuZm9vdGVyKSkgcmV0dXJuIDBcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gdGhpcy5fbWF4SXRlbVRvdGFsXG4gICAgfVxuICAgIC8qKiDlvZPmlbDmja7lop7liqDjgIHlh4/lsJHml7Yg6I635Y+W6IqC54K55YGP56e76YePICovXG4gICAgcHJpdmF0ZSBnZXRSZWFsbHlPZmZzZXQoZGF0YU9mZnNldDogbnVtYmVyKSB7XG4gICAgICAgIGlmICghdGhpcy5oZWFkZXIpIHJldHVybiAwXG4gICAgICAgIGlmIChkYXRhT2Zmc2V0ID4gMCkgeyAvLyDku6Pooajlop7liqBpdGVtIOihqOagvOaooeW8j+S4iyDpgJrov4flgY/np7vlpLTpg6jmnaXorqnkuIvmlrnloavmu6Eg5aGr5ruh5ZCO5YGc5q2i5YGP56e7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFPZmZzZXQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBGb290ZXIodGhpcy5mb290ZXIpKSByZXR1cm4gaSAvL+i/lOWbnuecn+WunueahOWBj+enu+mHj1xuICAgICAgICAgICAgICAgIC8vIOatpOaXtuWmguaenGhlYWRlciDlt7Lnu4/mmK/kuIDnu4RpdGVt5Lit5pyA5ZCO5LiA5Liq5pe2IOWQkeS4i+S9jeenuyDlubYg6K6+572u5Yiw5LiA57uEaXRlbeeahOi1t+Wni+S9jee9riAgIFxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmhlYWRlci5nZXRQb3NpdGlvbigpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHsgLy8g5Z6C55u05ruR5Yqo5pe2XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBGb290ZXIodGhpcy5oZWFkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5nZXRHcm91cEJvdHRvbVkodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBUb3BZKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikueFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmdldEdyb3VwUmlnaHRYKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcikgLy8g5ZCR5Y+z5L2N56e7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDmsLTlubPmu5Hliqjml7ZcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm91cEZvb3Rlcih0aGlzLmhlYWRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmdldEdyb3VwUmlnaHRYKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmdldEdyb3VwTGVmdFgodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKS55XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5nZXRHcm91cEJvdHRvbVkodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKSAvLyDlkJHkuIvkvY3np7tcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5zZXRQb3NpdGlvbihwb3MpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZGF0YU9mZnNldFxuICAgICAgICB9XG4gICAgICAgIC8vIOS7o+ihqOWHj+WwkeS6hml0ZW0g6K6h566X5YGP56e76YePXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTWF0aC5hYnMoZGF0YU9mZnNldCk7IGkrKykge1xuICAgICAgICAgICAgbGV0IHBvcyA9IGNjLlZlYzIuWkVST1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuZ2V0R3JvdXBGb290ZXIodGhpcy5oZWFkZXIpLnhcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5nZXRHcm91cFRvcFkodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwQm90dG9tWSh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuZ2V0R3JvdXBMZWZ0WCh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5oZWFkZXIueVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm91cEhlYWRlcih0aGlzLmhlYWRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwRm9vdGVyKHRoaXMuaGVhZGVyKS55XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuZ2V0R3JvdXBMZWZ0WCh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuZ2V0R3JvdXBSaWdodFgodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwVG9wWSh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5oZWFkZXIueFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnNldFBvc2l0aW9uKHBvcylcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY2FsY3VsYXRlQm91bmRhcnkoKVxuICAgICAgICByZXR1cm4gZGF0YU9mZnNldFxuICAgIH1cbiAgICAvKiog5Yi35paw5omA5pyJaXRlbeaVsOaNriDmoLnmja7lvZPliY1pdGVt55qEIGluZGV4IOWIt+aWsCAqL1xuICAgIHByaXZhdGUgcmVmcmVzaEl0ZW1zKHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyID0gMCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyKSByZXR1cm5cbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0aGlzLmhlYWRlclsnaW5kZXgnXSAtIDEgKyBvZmZzZXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLl9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIHN0YXJ0SW5kZXgrK1xuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPiB2YWx1ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gMFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydEluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0SW5kZXggPSB2YWx1ZSAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gc3RhcnRJbmRleFxuICAgICAgICAgICAgdGhpcy5ub3RpZnlSZWZyZXNoSXRlbShjaGlsZClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5LuO5aS06YOo5Yiw5bC+6YOo6YeN572u5pWw5o2uICovXG4gICAgcHJpdmF0ZSByZXNldFRvSGVhZGVyKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuX2NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2hpbGRbJ2luZGV4J10gPSBpXG4gICAgICAgICAgICB0aGlzLm5vdGlmeVJlZnJlc2hJdGVtKGNoaWxkKVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5oZWFkZXJMb29wICYmICF0aGlzLmZvb3Rlckxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyPy5zZXRQb3NpdGlvbih0aGlzLmdldEdyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKSlcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5zY3JvbGxUb0hlYWRlck9yRm9vdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcj8uc2V0UG9zaXRpb24odGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOS7juWwvumDqOWIsOWktOmDqOmHjee9ruaVsOaNriAqL1xuICAgIHByaXZhdGUgcmVzZXRUb0Zvb3RlcigpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fbWF4SXRlbVRvdGFsXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLl9jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5fY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gLS1pbmRleFxuICAgICAgICAgICAgdGhpcy5ub3RpZnlSZWZyZXNoSXRlbShjaGlsZClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5YiG5bin5Yib5bu6aXRlbSAqL1xuICAgIHByaXZhdGUgYXN5bmMgYXN5bmNDcmVhdGVJdGVtKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fZ2VuZXI/LnJldHVybihcIlwiKVxuICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPiB2YWx1ZSkge1xuICAgICAgICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gdmFsdWVcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmZvb3RlclxuICAgICAgICAgICAgICAgIHRoaXMucmVtQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V0R3JvdXBIZWFkZXIodGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIueCA9IHBvcy54XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIueSA9IHBvcy55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX21heFByZWZhYlRvdGFsID4gMCAmJiB0aGlzLl9tYXhQcmVmYWJUb3RhbCA9PSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCkgcmV0dXJuXG5cbiAgICAgICAgbGV0IHRvdGFsID0gdmFsdWUgLSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudFxuICAgICAgICB0aGlzLl9nZW5lciA9IHRoaXMuZ2V0R2VuZXJhdG9yTGVuZ3RoKHRvdGFsLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYilcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnRcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICBsZXQgc3B1ZXJJdGVtID0gY2hpbGQuZ2V0Q29tcG9uZW50KFVJU3B1ZXJJdGVtKSB8fCBjaGlsZC5hZGRDb21wb25lbnQoVUlTcHVlckl0ZW0pXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICBzcHVlckl0ZW0uaW5pdCh0aGlzKVxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5zZXRQb3NpdGlvbihwb3MpXG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNhbGN1bGF0ZUJvdW5kYXJ5KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzZWxmSG9yVywgdmlld0hvcldcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgc2VsZkhvclcgPSB0aGlzLmdldFJlYWxseVNpemUoKS5oZWlnaHRcbiAgICAgICAgICAgICAgICB2aWV3SG9yVyA9IHRoaXMudmlld1NpemUuaGVpZ2h0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbGZIb3JXID0gdGhpcy5nZXRSZWFsbHlTaXplKCkud2lkdGhcbiAgICAgICAgICAgICAgICB2aWV3SG9yVyA9IHRoaXMudmlld1NpemUud2lkdGhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzZWxmSG9yVyA+PSB2aWV3SG9yVyAqIHRoaXMubXVsdGlwbGUgJiYgdGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuZm9vdGVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21heFByZWZhYlRvdGFsID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgLy/lm7rlrpppdGVt5pWw6YePIOS4jeWcqOe7p+e7reWIm+W7ulxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdGhpcy5leGVHZW5lcmF0b3IodGhpcy5fZ2VuZXIsIDEwKVxuICAgIH1cbiAgICAvKiog5ZCM5q2l5re75Yqg5pys5Zyw5Y+Y6YePIGNoaWxkcmVuIOW5tuWPkemAgSBVSUNoYW5nZUJyb3RoZXJFdm5ldCDpgJrnn6UqL1xuICAgIHByaXZhdGUgYWRkQ2hpbGQobm9kZTogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLl9jaGlsZHJlbi5wdXNoKG5vZGUpXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFVJQ2hhbmdlQnJvdGhlckV2bmV0KVxuICAgIH1cbiAgICAvKiog5ZCM5q2l56e76Zmk5pys5Zyw5Y+Y6YePIGNoaWxkcmVuIOW5tuWPkemAgSBVSUNoYW5nZUJyb3RoZXJFdm5ldCDpgJrnn6UgKi9cbiAgICBwcml2YXRlIHJlbUNoaWxkKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihub2RlKVxuICAgICAgICBpZiAoaW5kZXggIT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuZW1pdChVSUNoYW5nZUJyb3RoZXJFdm5ldClcbiAgICB9XG4gICAgLyoqIOWIhuW4p+WKoOi9vSAqL1xuICAgIHByaXZhdGUgKiBnZXRHZW5lcmF0b3JMZW5ndGgobGVuZ3RoOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgLi4ucGFyYW1zOiBhbnkpOiBHZW5lcmF0b3Ige1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soaSwgLi4ucGFyYW1zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHlpZWxkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDliIbluKfmiafooYwgKi9cbiAgICBwcml2YXRlIGV4ZUdlbmVyYXRvcihnZW5lcmF0b3I6IEdlbmVyYXRvciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdlbiA9IGdlbmVyYXRvclxuICAgICAgICAgICAgbGV0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlciA9IGdlbi5uZXh0KCk7IDsgaXRlciA9IGdlbi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gbnVsbCB8fCBpdGVyLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXhlY3V0ZSgpLCBjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKSAqIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4ZWN1dGUoKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/vertical/verticalSimple.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c53978e9hHxrD0f/3bH9LP', 'verticalSimple');
// examples/vertical/verticalSimple.ts

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
var UISuperLayout_1 = require("../../cores/UISuperLayout");
var verticalItem_1 = require("./verticalItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var verticalSimple = /** @class */ (function (_super) {
    __extends(verticalSimple, _super);
    function verticalSimple() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.total = 500;
        _this.init = false;
        _this.datas = [];
        return _this;
    }
    verticalSimple.prototype.onLoad = function () {
        if (this.init) {
            for (var i = 0; i < this.total; i++) {
                this.datas.push({ message: "" + this.datas.length });
            }
            this.layout.total(this.datas.length);
        }
    };
    verticalSimple.prototype.onRefreshEvent = function (node, index) {
        var info = this.datas[index];
        node.getComponent(verticalItem_1.default).show(info, index, this.onRemove.bind(this));
    };
    verticalSimple.prototype.onRemove = function (index) {
        this.datas.splice(index, 1);
        this.layout.total(this.datas.length);
    };
    verticalSimple.prototype.addItem = function (event, value) {
        for (var i = 0; i < value; i++) {
            this.datas.push({ message: "" + this.datas.length });
        }
        this.layout.total(this.datas.length);
    };
    verticalSimple.prototype.gotoHeader = function () {
        this.layout.scrollToHeader(0.618);
    };
    verticalSimple.prototype.gotoFooter = function () {
        this.layout.scrollToFooter(0.618);
    };
    verticalSimple.prototype.gotoMain = function () {
        cc.director.loadScene('main');
    };
    __decorate([
        property(UISuperLayout_1.default)
    ], verticalSimple.prototype, "layout", void 0);
    __decorate([
        property
    ], verticalSimple.prototype, "total", void 0);
    __decorate([
        property
    ], verticalSimple.prototype, "init", void 0);
    verticalSimple = __decorate([
        ccclass
    ], verticalSimple);
    return verticalSimple;
}(cc.Component));
exports.default = verticalSimple;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy92ZXJ0aWNhbC92ZXJ0aWNhbFNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsK0NBQTBDO0FBQ3BDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBc0NDO1FBcEM0QixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUMzQyxXQUFLLEdBQVcsR0FBRyxDQUFBO1FBQ25CLFVBQUksR0FBWSxLQUFLLENBQUE7UUFDdkIsV0FBSyxHQUFVLEVBQUUsQ0FBQTs7SUFpQzdCLENBQUM7SUFoQ0csK0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBUSxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDdkM7SUFDTCxDQUFDO0lBRU8sdUNBQWMsR0FBdEIsVUFBdUIsSUFBYSxFQUFFLEtBQWE7UUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFDTyxpQ0FBUSxHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDTyxnQ0FBTyxHQUFmLFVBQWdCLEtBQVUsRUFBRSxLQUFVO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVEsRUFBRSxDQUFDLENBQUE7U0FDdkQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDTyxtQ0FBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDTyxtQ0FBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDTyxpQ0FBUSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFuQ3dCO1FBQXhCLFFBQVEsQ0FBQyx1QkFBYSxDQUFDO2tEQUE2QjtJQUMzQztRQUFULFFBQVE7aURBQW9CO0lBQ25CO1FBQVQsUUFBUTtnREFBc0I7SUFKZCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBc0NsQztJQUFELHFCQUFDO0NBdENELEFBc0NDLENBdEMyQyxFQUFFLENBQUMsU0FBUyxHQXNDdkQ7a0JBdENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQgZnJvbSAnLi4vLi4vY29yZXMvVUlTdXBlckxheW91dCc7XG5pbXBvcnQgdmVydGljYWxJdGVtIGZyb20gJy4vdmVydGljYWxJdGVtJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVydGljYWxTaW1wbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFVJU3VwZXJMYXlvdXQpIGxheW91dDogVUlTdXBlckxheW91dCA9IG51bGxcbiAgICBAcHJvcGVydHkgdG90YWw6IG51bWJlciA9IDUwMFxuICAgIEBwcm9wZXJ0eSBpbml0OiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGRhdGFzOiBhbnlbXSA9IFtdXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7IG1lc3NhZ2U6IGAke3RoaXMuZGF0YXMubGVuZ3RofWAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlZnJlc2hFdmVudChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5kYXRhc1tpbmRleF1cbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQodmVydGljYWxJdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpXG4gICAgfVxuICAgIHByaXZhdGUgb25SZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbShldmVudDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHsgbWVzc2FnZTogYCR7dGhpcy5kYXRhcy5sZW5ndGh9YCB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9IZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyKDAuNjE4KVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9Gb290ZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvRm9vdGVyKDAuNjE4KVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9NYWluKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/vertical/verticalItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34da2XkCIpPIp4Pkg7X+5GV', 'verticalItem');
// examples/vertical/verticalItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var verticalItem = /** @class */ (function (_super) {
    __extends(verticalItem, _super);
    function verticalItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    verticalItem.prototype.show = function (info, index, remove) {
        this.index = index;
        this.remove = remove;
        this.label.string = info.message;
    };
    verticalItem.prototype.onRemove = function () {
        this.remove(this.index);
    };
    verticalItem.prototype.onClick = function () {
    };
    __decorate([
        property(cc.Label)
    ], verticalItem.prototype, "label", void 0);
    verticalItem = __decorate([
        ccclass
    ], verticalItem);
    return verticalItem;
}(cc.Component));
exports.default = verticalItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy92ZXJ0aWNhbC92ZXJ0aWNhbEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQWMzQixDQUFDO0lBWFUsMkJBQUksR0FBWCxVQUFZLElBQVMsRUFBRSxLQUFhLEVBQUUsTUFBZ0I7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNwQyxDQUFDO0lBQ08sK0JBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ08sOEJBQU8sR0FBZjtJQUVBLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNJO0lBSE4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlCaEM7SUFBRCxtQkFBQztDQWpCRCxBQWlCQyxDQWpCeUMsRUFBRSxDQUFDLFNBQVMsR0FpQnJEO2tCQWpCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVydGljYWxJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlclxuICAgIHByaXZhdGUgcmVtb3ZlOiBGdW5jdGlvblxuICAgIHB1YmxpYyBzaG93KGluZm86IGFueSwgaW5kZXg6IG51bWJlciwgcmVtb3ZlOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICAgICAgdGhpcy5yZW1vdmUgPSByZW1vdmVcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBpbmZvLm1lc3NhZ2VcbiAgICB9XG4gICAgcHJpdmF0ZSBvblJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5pbmRleClcbiAgICB9XG4gICAgcHJpdmF0ZSBvbkNsaWNrKCkge1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/vertical/verticalLoadAndRefresh.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee163WdQsJDXI9MrARu99Qg', 'verticalLoadAndRefresh');
// examples/vertical/verticalLoadAndRefresh.ts

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
var UISuperLayout_1 = require("../../cores/UISuperLayout");
var verticalItem_1 = require("./verticalItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var verticalLoadAndRefresh = /** @class */ (function (_super) {
    __extends(verticalLoadAndRefresh, _super);
    function verticalLoadAndRefresh() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.header = null;
        _this.footer = null;
        _this.layout = null;
        _this.refreshTotal = 1;
        _this.total = 10;
        _this.datas = [];
        return _this;
    }
    verticalLoadAndRefresh.prototype.onLoad = function () {
        this.header.scaleY = 0;
        this.footer.scaleY = 0;
    };
    verticalLoadAndRefresh.prototype.onRefreshEvent = function (node, index) {
        var info = this.datas[index];
        node.getComponent(verticalItem_1.default).show(info, index, this.onRemove.bind(this));
    };
    verticalLoadAndRefresh.prototype.onRemove = function (index) {
        this.datas.splice(index, 1);
        this.layout.total(this.datas.length);
    };
    verticalLoadAndRefresh.prototype.gotoHeader = function () {
        this.layout.scrollToHeader(0.618);
    };
    verticalLoadAndRefresh.prototype.gotoFooter = function () {
        this.layout.scrollToFooter(0.618);
    };
    verticalLoadAndRefresh.prototype.gotoMain = function () {
        cc.director.loadScene('main');
    };
    verticalLoadAndRefresh.prototype.onHeaderEvent = function (scrollView, event) {
        var _this = this;
        this.header.opacity = event.progress * 255;
        var label = this.header.getComponentInChildren(cc.Label);
        if (event.progressStage == "touch") {
            label.string = "↓ 下拉刷新";
        }
        if (event.progressStage == "wait") {
            label.string = "↑ 松开刷新";
        }
        if (event.progressStage == "lock") {
            label.string = this.datas.length == 0 ? "没有数据" : "刷新中...";
        }
        if (event.progressStage == 'release') {
            label.string = "";
        }
        if (event.progress > 2) {
            if (!this.header['playing']) {
                this.header.runAction(cc.scaleTo(0.618, 1, 1).easing(cc.easeElasticOut(0.236)));
                this.header['playing'] = true;
            }
        }
        else {
            this.header.stopAllActions();
            this.header['playing'] = false;
            this.header.scaleY = event.progress;
        }
        if (event.action) {
            for (var i = 0; i < this.datas.length; i++) {
                var info = this.datas[i];
                info.message = i + " - (\u5237\u65B0\u6B21\u6570" + this.refreshTotal + ")";
            }
            this.scheduleOnce(function () { return _this.layout.total(_this.datas.length); }, 0.5);
            this.refreshTotal++;
        }
    };
    verticalLoadAndRefresh.prototype.onFooterEvent = function (scrollView, event) {
        var _this = this;
        this.footer.opacity = event.progress * 255;
        var label = this.footer.getComponentInChildren(cc.Label);
        if (event.progressStage == "touch") {
            label.string = "↑ 上拉加载";
        }
        if (event.progressStage == "wait") {
            label.string = "↓ 松开加载";
        }
        if (event.progressStage == "lock") {
            label.string = "加载中...";
        }
        if (event.progressStage == 'release') {
            label.string = "";
        }
        if (event.progress > 2) {
            if (!this.footer['playing']) {
                this.footer.runAction(cc.scaleTo(0.618, 1, 1).easing(cc.easeElasticOut(0.236)));
                this.footer['playing'] = true;
            }
        }
        else {
            this.footer.stopAllActions();
            this.footer['playing'] = false;
            this.footer.scaleY = event.progress;
        }
        if (event.action) {
            for (var i = 0; i < this.total; i++) {
                this.datas.push({ message: "" + this.datas.length });
            }
            this.scheduleOnce(function () { return _this.layout.total(_this.datas.length); }, 0.5);
        }
    };
    __decorate([
        property(cc.Node)
    ], verticalLoadAndRefresh.prototype, "header", void 0);
    __decorate([
        property(cc.Node)
    ], verticalLoadAndRefresh.prototype, "footer", void 0);
    __decorate([
        property(UISuperLayout_1.default)
    ], verticalLoadAndRefresh.prototype, "layout", void 0);
    verticalLoadAndRefresh = __decorate([
        ccclass
    ], verticalLoadAndRefresh);
    return verticalLoadAndRefresh;
}(cc.Component));
exports.default = verticalLoadAndRefresh;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy92ZXJ0aWNhbC92ZXJ0aWNhbExvYWRBbmRSZWZyZXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUV0RCwrQ0FBMEM7QUFDcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFpR0M7UUFoR3NCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFDdEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUNoQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUM3QyxrQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUN4QixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1YsV0FBSyxHQUFVLEVBQUUsQ0FBQTs7SUEyRjdCLENBQUM7SUExRkcsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUNPLCtDQUFjLEdBQXRCLFVBQXVCLElBQWEsRUFBRSxLQUFhO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBQ08seUNBQVEsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxL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LE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtTQUN0QztRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBUSxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDckU7SUFDTCxDQUFDO0lBL0ZrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFBdUI7SUFDdEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQXVCO0lBQ2hCO1FBQXhCLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzBEQUE2QjtJQUhwQyxzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQWlHMUM7SUFBRCw2QkFBQztDQWpHRCxBQWlHQyxDQWpHbUQsRUFBRSxDQUFDLFNBQVMsR0FpRy9EO2tCQWpHb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQgZnJvbSAnLi4vLi4vY29yZXMvVUlTdXBlckxheW91dCc7XG5pbXBvcnQgeyBVSVN1cGVySGVhZGVyQW5kRm9vdGVyRXZlbnQgfSBmcm9tICcuLi8uLi9jb3Jlcy9VSVN1cGVyU2Nyb2xsVmlldyc7XG5pbXBvcnQgdmVydGljYWxJdGVtIGZyb20gJy4vdmVydGljYWxJdGVtJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVydGljYWxMb2FkQW5kUmVmcmVzaCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGhlYWRlcjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgZm9vdGVyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShVSVN1cGVyTGF5b3V0KSBsYXlvdXQ6IFVJU3VwZXJMYXlvdXQgPSBudWxsXG4gICAgcHJpdmF0ZSByZWZyZXNoVG90YWw6IG51bWJlciA9IDFcbiAgICBwcml2YXRlIHRvdGFsID0gMTBcbiAgICBwcml2YXRlIGRhdGFzOiBhbnlbXSA9IFtdXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmhlYWRlci5zY2FsZVkgPSAwXG4gICAgICAgIHRoaXMuZm9vdGVyLnNjYWxlWSA9IDBcbiAgICB9XG4gICAgcHJpdmF0ZSBvblJlZnJlc2hFdmVudChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5kYXRhc1tpbmRleF1cbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQodmVydGljYWxJdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpXG4gICAgfVxuICAgIHByaXZhdGUgb25SZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIHByaXZhdGUgZ290b0hlYWRlcigpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9IZWFkZXIoMC42MTgpXG4gICAgfVxuICAgIHByaXZhdGUgZ290b0Zvb3RlcigpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9Gb290ZXIoMC42MTgpXG4gICAgfVxuICAgIHByaXZhdGUgZ290b01haW4oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckV2ZW50KHNjcm9sbFZpZXc6IGFueSwgZXZlbnQ6IFVJU3VwZXJIZWFkZXJBbmRGb290ZXJFdmVudCkge1xuICAgICAgICB0aGlzLmhlYWRlci5vcGFjaXR5ID0gZXZlbnQucHJvZ3Jlc3MgKiAyNTVcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5oZWFkZXIuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbClcbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzU3RhZ2UgPT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkyDkuIvmi4nliLfmlrBcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwid2FpdFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkSDmnb7lvIDliLfmlrBcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwibG9ja1wiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLmRhdGFzLmxlbmd0aCA9PSAwID8gXCLmsqHmnInmlbDmja5cIiA6IFwi5Yi35paw5LitLi4uXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3NTdGFnZSA9PSAncmVsZWFzZScpIHtcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3MgPiAyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGVhZGVyWydwbGF5aW5nJ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjYxOCwgMSwgMSkuZWFzaW5nKGNjLmVhc2VFbGFzdGljT3V0KDAuMjM2KSkpXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJbJ3BsYXlpbmcnXSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyWydwbGF5aW5nJ10gPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2NhbGVZID0gZXZlbnQucHJvZ3Jlc3NcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5kYXRhc1tpXTtcbiAgICAgICAgICAgICAgICBpbmZvLm1lc3NhZ2UgPSBgJHtpfSAtICjliLfmlrDmrKHmlbAke3RoaXMucmVmcmVzaFRvdGFsfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aCksIDAuNSlcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRvdGFsKytcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Gb290ZXJFdmVudChzY3JvbGxWaWV3OiBhbnksIGV2ZW50OiBVSVN1cGVySGVhZGVyQW5kRm9vdGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb290ZXIub3BhY2l0eSA9IGV2ZW50LnByb2dyZXNzICogMjU1XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZm9vdGVyLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpXG5cbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzU3RhZ2UgPT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkSDkuIrmi4nliqDovb1cIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwid2FpdFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkyDmnb7lvIDliqDovb1cIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwibG9ja1wiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuWKoOi9veS4rS4uLlwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzU3RhZ2UgPT0gJ3JlbGVhc2UnKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzID4gMikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvb3RlclsncGxheWluZyddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb290ZXIucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC42MTgsIDEsIDEpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjIzNikpKVxuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyWydwbGF5aW5nJ10gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvb3Rlci5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICB0aGlzLmZvb3RlclsncGxheWluZyddID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnNjYWxlWSA9IGV2ZW50LnByb2dyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmFjdGlvbikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goeyBtZXNzYWdlOiBgJHt0aGlzLmRhdGFzLmxlbmd0aH1gIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aCksIDAuNSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
