
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
require('./assets/UISuperItem');
require('./assets/UISuperLayout');
require('./assets/UISuperScrollView');
require('./assets/item');
require('./assets/testPanel');

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
var UISpuerScrollView = /** @class */ (function (_super) {
    __extends(UISpuerScrollView, _super);
    function UISpuerScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.deltaMove = cc.Vec2.ZERO;
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
    UISpuerScrollView.prototype._onTouchMoved = function (event, captureListeners) {
        _super.prototype['_onTouchMoved'].call(this, event, captureListeners);
        var delta = cc.v2(event.getLocation().x - event.getPreviousLocation().x, event.getLocation().y - event.getPreviousLocation().y);
        if (this.vertical && delta.y != 0 || this.horizontal && delta.x != 0) {
            this.deltaMove = delta;
        }
    };
    UISpuerScrollView.prototype._dispatchEvent = function (event) {
        _super.prototype['_dispatchEvent'].call(this, event);
        if (event == 'scroll-ended') {
            this.deltaMove = cc.Vec2.ZERO;
        }
    };
    UISpuerScrollView.prototype.calculateBoundary = function () {
        this['_calculateBoundary']();
    };
    UISpuerScrollView.prototype.getHowMuchOutOfBoundary = function (offset) {
        return this['_getHowMuchOutOfBoundary'](offset);
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
        }
        return offset;
    };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBK0MscUNBQWE7SUFBNUQ7UUFBQSxxRUF1RkM7UUFsRlUsZUFBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBR3ZCLGFBQU8sR0FBa0IsSUFBSSxDQUFBOztJQStFekMsQ0FBQztJQWpGRyxzQkFBVyxtQ0FBSTthQUFmLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQVcsNENBQWE7YUFBeEIsY0FBNkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRTVELHNCQUFZLHFDQUFNO2FBQWxCO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUE7YUFDMUQ7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDdkIsQ0FBQzs7O09BQUE7SUFDTyx5Q0FBYSxHQUFyQixVQUFzQixLQUEwQixFQUFFLGdCQUFnQjtRQUM5RCxpQkFBTSxlQUFlLENBQUMsWUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUMvQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFD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LEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUM3RjtZQUNELE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFBO1NBQzlDO1FBQ0QsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQXRGZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0F1RnJDO0lBQUQsd0JBQUM7Q0F2RkQsQUF1RkMsQ0F2RjhDLEVBQUUsQ0FBQyxVQUFVLEdBdUYzRDtrQkF2Rm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVN1cGVyTGF5b3V0IGZyb20gJy4vVUlTdXBlckxheW91dCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3B1ZXJTY3JvbGxWaWV3IGV4dGVuZHMgY2MuU2Nyb2xsVmlldyB7XG4gICAgcHJpdmF0ZSBfdG9wQm91bmRhcnk6IG51bWJlclxuICAgIHByaXZhdGUgX2JvdHRvbUJvdW5kYXJ5OiBudW1iZXJcbiAgICBwcml2YXRlIF9sZWZ0Qm91bmRhcnk6IG51bWJlclxuICAgIHByaXZhdGUgX3JpZ2h0Qm91bmRhcnk6IG51bWJlclxuICAgIHB1YmxpYyBkZWx0YU1vdmUgPSBjYy5WZWMyLlpFUk9cbiAgICBwdWJsaWMgZ2V0IHZpZXcoKTogY2MuTm9kZSB7IHJldHVybiB0aGlzWydfdmlldyddIH1cbiAgICBwdWJsaWMgZ2V0IGF1dG9TY3JvbGxpbmcoKSB7IHJldHVybiB0aGlzWydfYXV0b1Njcm9sbGluZyddIH1cbiAgICBwcml2YXRlIF9sYXlvdXQ6IFVJU3VwZXJMYXlvdXQgPSBudWxsXG4gICAgcHJpdmF0ZSBnZXQgbGF5b3V0KCk6IFVJU3VwZXJMYXlvdXQge1xuICAgICAgICBpZiAodGhpcy5fbGF5b3V0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2xheW91dCA9IHRoaXMuY29udGVudC5nZXRDb21wb25lbnQoVUlTdXBlckxheW91dClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0XG4gICAgfVxuICAgIHByaXZhdGUgX29uVG91Y2hNb3ZlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCwgY2FwdHVyZUxpc3RlbmVycykge1xuICAgICAgICBzdXBlclsnX29uVG91Y2hNb3ZlZCddKGV2ZW50LCBjYXB0dXJlTGlzdGVuZXJzKVxuICAgICAgICBsZXQgZGVsdGEgPSBjYy52MihldmVudC5nZXRMb2NhdGlvbigpLnggLSBldmVudC5nZXRQcmV2aW91c0xvY2F0aW9uKCkueCwgZXZlbnQuZ2V0TG9jYXRpb24oKS55IC0gZXZlbnQuZ2V0UHJldmlvdXNMb2NhdGlvbigpLnkpXG4gICAgICAgIGlmICh0aGlzLnZlcnRpY2FsICYmIGRlbHRhLnkgIT0gMCB8fCB0aGlzLmhvcml6b250YWwgJiYgZGVsdGEueCAhPSAwKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhTW92ZSA9IGRlbHRhXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgICAgICBzdXBlclsnX2Rpc3BhdGNoRXZlbnQnXShldmVudClcbiAgICAgICAgaWYgKGV2ZW50ID09ICdzY3JvbGwtZW5kZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhTW92ZSA9IGNjLlZlYzIuWkVST1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNhbGN1bGF0ZUJvdW5kYXJ5KCkge1xuICAgICAgICB0aGlzWydfY2FsY3VsYXRlQm91bmRhcnknXSgpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShvZmZzZXQ/OiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0SG93TXVjaE91dE9mQm91bmRhcnknXShvZmZzZXQpXG4gICAgfVxuICAgIF9nZXRDb250ZW50VG9wQm91bmRhcnkoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5jaGlsZEJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoMCwgdGhpcy5sYXlvdXQuaGVhZGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnlNYXgpKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCB0aGlzLmxheW91dC5oZWFkZXJbJ2dldEJvdW5kaW5nJ10oKS55TWF4KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCA9IGxvY2FsLnkgKyB0aGlzLmxheW91dC5wYWRkaW5nVG9wXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mZnNldDtcbiAgICB9XG4gICAgX2dldENvbnRlbnRCb3R0b21Cb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5mb290ZXIpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbFxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCB0aGlzLmxheW91dC5mb290ZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueU1pbikpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKDAsIHRoaXMubGF5b3V0LmZvb3RlclsnZ2V0Qm91bmRpbmcnXSgpLnlNaW4pKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbG9jYWwueSAtIHRoaXMubGF5b3V0LnBhZGRpbmdCb3R0b21cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICAgIF9nZXRDb250ZW50TGVmdEJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmhlYWRlcikge1xuICAgICAgICAgICAgbGV0IGxvY2FsXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuY2hpbGRCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHRoaXMubGF5b3V0LmhlYWRlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54TWluLCAwKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIodGhpcy5sYXlvdXQuaGVhZGVyWydnZXRCb3VuZGluZyddKCkueE1pbiwgMCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQgPSBsb2NhbC54IC0gdGhpcy5sYXlvdXQucGFkZGluZ0xlZnRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICAgIF9nZXRDb250ZW50UmlnaHRCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5mb290ZXIpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbFxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih0aGlzLmxheW91dC5mb290ZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueE1heCwgMCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHRoaXMubGF5b3V0LmZvb3RlclsnZ2V0Qm91bmRpbmcnXSgpLnhNYXgsIDApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbG9jYWwueCArIHRoaXMubGF5b3V0LnBhZGRpbmdSaWdodFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(node.width * 2, -node.height * 2));
        return offset;
    };
    UISuperLayout.prototype.isOutOfBoundaryBottom = function (node) {
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(-node.width * 2, node.height * 2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7NERBQW9EO0lBakN2RSxhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcU1qQztJQUFELG9CQUFDO0NBck1ELEFBcU1DLENBck0wQyxFQUFFLENBQUMsU0FBUyxHQXFNdEQ7a0JBck1vQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3B1ZXJTY3JvbGxWaWV3IGZyb20gJy4vVUlTdXBlclNjcm9sbFZpZXcnO1xuaW1wb3J0IFVJU3B1ZXJJdGVtIGZyb20gJy4vVUlTdXBlckl0ZW0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBlbnVtIFVJU3VwZXJBeGlzIHtcbiAgICBIT1JJWk9OVEFMID0gMCxcbiAgICBWRVJUSUNBTCA9IDFcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN1cGVyTGF5b3V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKFVJU3VwZXJBeGlzKSxcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5o6S5YiX5pa55ZCRXCJcbiAgICB9KSBzdGFydEF4aXM6IFVJU3VwZXJBeGlzID0gVUlTdXBlckF4aXMuVkVSVElDQUxcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIrovrnot51cIlxuICAgIH0pIHBhZGRpbmdUb3A6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIvovrnot51cIlxuICAgIH0pIHBhZGRpbmdCb3R0b206IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlt6bovrnot51cIlxuICAgIH0pIHBhZGRpbmdMZWZ0OiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5Y+z6L656LedXCJcbiAgICB9KSBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLpl7TpmpRcIlxuICAgIH0pIHNwYWNpbmc6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlj6/lpI3nlKjnmoRJdGVt5pWwXCJcbiAgICB9KSBtYXhQcmVmYWJUb3RhbDogbnVtYmVyID0gMjBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIml0ZW0gUHJlZmFiXCJcbiAgICB9KSBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSBhZmZlY3RlZEJ5U2NhbGU6IGJvb2xlYW4gPSB0cnVlXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5L2/55SoaXRlbeWtkOiKgueCueWMheWbtOebklwiXG4gICAgfSkgY2hpbGRCb3VuZGluZ0JveDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBAcHJvcGVydHkoY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcikgcmVmcmVzaEl0ZW1FdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgbWF4SXRlbVRvdGFsOiBudW1iZXIgPSAwXG5cbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3OiBVSVNwdWVyU2Nyb2xsVmlldyA9IG51bGxcbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFZpZXcoKTogVUlTcHVlclNjcm9sbFZpZXcge1xuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoVUlTcHVlclNjcm9sbFZpZXcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbFZpZXdcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlYWRlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jaGlsZHJlblswXVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZm9vdGVyKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuW3RoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMV1cbiAgICB9XG4gICAgLy8g6YeN5YaZXG4gICAgcHVibGljIGdldENvbnRlbnRTaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyIHx8ICF0aGlzLmZvb3RlcikgcmV0dXJuIHRoaXMuc2Nyb2xsVmlldy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IHNpemUgPSBjYy5TaXplLlpFUk9cbiAgICAgICAgbGV0IF9oZWFkZXIsIF9mb290ZXJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgLy8g6K+l6L655qGG5YyF5ZCr6Ieq6Lqr5ZKM5bey5r+A5rS755qE5a2Q6IqC54K555qE5LiW55WM6L655qGGICjms6jmhI/vvIHkvb/nlKjmraTmlrnms5Xml7Yg5bqV5bGC5Luj56CB5Lya6YGN5Y6G5omA5pyJ5a2Q6IqC54K5IOW5tuWMheWQq+aJgOacieWtkOiKgueCueeahOS4lueVjOi+ueahhiDlrZDoioLngrnotorlpJrmgKfog73otorlt64pXG4gICAgICAgICAgICBfaGVhZGVyID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLmhlYWRlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54TWluLCB0aGlzLmhlYWRlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55TWF4KSlcbiAgICAgICAgICAgIF9mb290ZXIgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHRoaXMuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnhNYXgsIHRoaXMuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnlNaW4pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6K+l6L655qGG5YyF5ZCr6Ieq6Lqr55qE5LiW55WM6L655qGGICjov5nph4zkuLvopoHmmK/kv67mlLlnZXRCb3VuZGluZ0JveFRvV29ybGTku6PnoIEg5Y675o6J6YGN5Y6G5a2Q6IqC54K555qE5Luj56CBKVxuICAgICAgICAgICAgLy8g6L+Z6YeM5Y+q6ZyA6KaB6K6h566XaXRlbeacrOi6q+eahOS4lueVjOi+ueahhuWNs+WPryAo5oCn6IO95pyA5LyYKVxuICAgICAgICAgICAgX2hlYWRlciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5oZWFkZXJbJ2dldEJvdW5kaW5nJ10oKS54TWluLCB0aGlzLmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnlNYXgpKVxuICAgICAgICAgICAgX2Zvb3RlciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS54TWF4LCB0aGlzLmZvb3RlclsnZ2V0Qm91bmRpbmcnXSgpLnlNaW4pKVxuICAgICAgICB9XG4gICAgICAgIHNpemUud2lkdGggPSBfZm9vdGVyLnggLSBfaGVhZGVyLnggKyB0aGlzLnBhZGRpbmdMZWZ0ICsgdGhpcy5wYWRkaW5nUmlnaHRcbiAgICAgICAgc2l6ZS5oZWlnaHQgPSBfaGVhZGVyLnkgLSBfZm9vdGVyLnkgKyB0aGlzLnBhZGRpbmdUb3AgKyB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICAgICAgcmV0dXJuIHNpemVcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSA9IHRoaXMuZ2V0Q29udGVudFNpemUuYmluZCh0aGlzKVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0VXNlZFNjYWxlVmFsdWUodmFsdWU6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5hZmZlY3RlZEJ5U2NhbGUgPyBNYXRoLmFicyh2YWx1ZSkgOiAxO1xuICAgIH1cbiAgICAvKiog6K6+572u5pyA5aSnaXRlbeaVsOmHjyAqL1xuICAgIHB1YmxpYyB0b3RhbCh2YWx1ZTogbnVtYmVyKTogdGhpcyB7XG4gICAgICAgIHRoaXMubWF4SXRlbVRvdGFsID0gdmFsdWVcbiAgICAgICAgdGhpcy5tb3JlUmVtTGVzc0FkZCgpXG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmZvb3RlciAmJiB0aGlzLmZvb3RlclsnaW5kZXgnXSArIDEgPj0gdGhpcy5tYXhJdGVtVG90YWwpIHtcbiAgICAgICAgICAgIG9mZnNldCA9IHRoaXMuZm9vdGVyWydpbmRleCddICsgMSAtIHRoaXMubWF4SXRlbVRvdGFsXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gY2hpbGRbJ2luZGV4J10gLSBvZmZzZXRcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaW5kZXhcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW0oY2hpbGQsIGNoaWxkWydpbmRleCddKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jYWxjdWxhdGVCb3VuZGFyeSgpXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuICAgIC8qKiDmu5rliqjliLDlpLTpg6ggKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9IZWFkZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Ub3AodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0xlZnQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDmu5rliqjliLDlsL7pg6ggKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9Gb290ZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9Cb3R0b20odGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgc2Nyb2xsVG9Ub3AodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgIT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hTdGFydCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAtMSlcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkgcmV0dXJuXG4gICAgICAgIHRoaXMucmVmcmVzaEVuZCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigwLCAxKVxuICAgICAgICAvKipcbiAgICAgICAgICogaXRlbeWwuuWvuOS4jeS4gOiHtOaXtiBpdGVt5Lya5Zyo5b2T5YmN5bin6YeN572u5L2N572uIOeEtuWQjuWcqOS4i+S4gOW4p+a7muWKqOiuoeeulyAo6L+Z6YeM5YW35L2T5bu26L+f5aSa5bCR5bin5LiN56Gu5a6a77yM5Zug5Li65Lmf6K64aXRlbeabtOaWsOWwuuWvuOaYr+W8guatpeeahO+8jOi/memHjOS4jeWOu+iAg+iZkSlcbiAgICAgICAgICog6buY6K6k5Y+q5piv6K6k5Li65b2T5YmN5bin5Lya5pu05paw5a6M5omA5pyJaXRlbeWwuuWvuFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvQm90dG9tKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZCkpXG4gICAgfVxuICAgIHByaXZhdGUgc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzICE9IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hTdGFydCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5kZWx0YU1vdmUgPSBjYy52MigxLCAwKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBzY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzICE9IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hFbmQoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZGVsdGFNb3ZlID0gY2MudjIoLTEsIDApXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpdGVt5bC65a+45LiN5LiA6Ie05pe2IGl0ZW3kvJrlnKjlvZPliY3luKfph43nva7kvY3nva4g54S25ZCO5Zyo5LiL5LiA5bin5rua5Yqo6K6h566XICjov5nph4zlhbfkvZPlu7bov5/lpJrlsJHluKfkuI3noa7lrprvvIzlm6DkuLrkuZ/orrhpdGVt5pu05paw5bC65a+45piv5byC5q2l55qE77yM6L+Z6YeM5LiN5Y676ICD6JmRKVxuICAgICAgICAgKiDpu5jorqTlj6rmmK/orqTkuLrlvZPliY3luKfkvJrmm7TmlrDlrozmiYDmnIlpdGVt5bC65a+4XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpKVxuICAgIH1cbiAgICBwcml2YXRlIHJlZnJlc2hTdGFydCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5vZGUuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgY2hpbGRbJ2luZGV4J10gPSBpXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtKGNoaWxkLCBpKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaEVuZCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5tYXhJdGVtVG90YWxcbiAgICAgICAgLy8g5LiK55uR5ZCs5LiLXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLm5vZGUuY2hpbGRyZW5baV1cbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gLS1pbmRleFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbShjaGlsZCwgaW5kZXgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBtb3JlUmVtTGVzc0FkZCgpIHtcbiAgICAgICAgLy8g5LiN5aSf55qE5oOF5Ya15LiLXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50XG4gICAgICAgIGZvciAobGV0IGkgPSBpbmRleDsgaSA8IHRoaXMubWF4SXRlbVRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpID49IHRoaXMubWF4UHJlZmFiVG90YWwpIGJyZWFrXG4gICAgICAgICAgICBpZiAoIXRoaXMubm9kZS5jaGlsZHJlbltpXSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGlsZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKVxuICAgICAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgICAgIGxldCBzY3JpcHQgPSBjaGlsZC5hZGRDb21wb25lbnQoVUlTcHVlckl0ZW0pXG4gICAgICAgICAgICAgICAgLy8g5bCG6L+Z5LiJ5Liq5pa55rOV5Lul5Zue6LCD55qE5pa55byP5Lyg6YCS6L+H5Y67ICjlr7nlpJbkuI3lhazlvIDosIPnlKgpXG4gICAgICAgICAgICAgICAgc2NyaXB0LmluaXQodGhpcywgdGhpcy5yZWZyZXNoSXRlbS5iaW5kKHRoaXMpLCB0aGlzLmlzT3V0T2ZCb3VuZGFyeVRvcC5iaW5kKHRoaXMpLCB0aGlzLmlzT3V0T2ZCb3VuZGFyeUJvdHRvbS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlpJrkvZnnmoTmg4XlhrXkuItcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID4gdGhpcy5tYXhJdGVtVG90YWwpIHtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gdGhpcy5tYXhJdGVtVG90YWxcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuZm9vdGVyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaEl0ZW0odGFyZ2V0OiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnJlZnJlc2hJdGVtRXZlbnRzLCB0YXJnZXQsIGluZGV4KVxuICAgIH1cbiAgICBwcml2YXRlIGlzT3V0T2ZCb3VuZGFyeVRvcChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIobm9kZS53aWR0aCAqIDIsIC1ub2RlLmhlaWdodCAqIDIpKVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5Qm90dG9tKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuc2Nyb2xsVmlldy5nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShjYy52Migtbm9kZS53aWR0aCAqIDIsIG5vZGUuaGVpZ2h0ICogMikpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/UISuperItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05ad9vH0ANAc6m/Oc1rzygv', 'UISuperItem');
// UISuperItem.ts

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
    UISpuerItem.prototype.onLoad = function () {
        this.node['getBounding'] = this.getBounding.bind(this);
    };
    UISpuerItem.prototype.init = function (layout, refreshItemCallback, isOutOfBoundaryTop, isOutOfBoundaryBottom) {
        this.layout = layout;
        this.refreshItemCallback = refreshItemCallback;
        this.isOutOfBoundaryTop = isOutOfBoundaryTop;
        this.isOutOfBoundaryBottom = isOutOfBoundaryBottom;
    };
    UISpuerItem.prototype.getBounding = function () {
        this.node.parent['_updateWorldMatrix']();
        var width = this.node.getContentSize().width;
        var height = this.node.getContentSize().height;
        var rect = cc.rect(-this.node.getAnchorPoint().x * width, -this.node.getAnchorPoint().y * height, width, height);
        this.node['_calculWorldMatrix']();
        rect.transformMat4(rect, this.node['_worldMatrix']);
        return rect;
    };
    Object.defineProperty(UISpuerItem.prototype, "isHeader", {
        get: function () {
            return this.node.getSiblingIndex() == 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "isFooter", {
        get: function () {
            return this.node.getSiblingIndex() == this.layout.node.childrenCount - 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "isUpdateHeader", {
        get: function () {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y > 0 && this.isHeader) {
                return true;
            }
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x < 0 && this.isHeader) {
                return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "isUpdateFooter", {
        get: function () {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y < 0 && this.isFooter) {
                return true;
            }
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x > 0 && this.isFooter) {
                return true;
            }
            return false;
        },
        enumerable: false,
        configurable: true
    });
    UISpuerItem.prototype.isOutOfBoundary = function (offset) {
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && offset.y == 0) {
            return true;
        }
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && offset.x == 0) {
            return true;
        }
        return false;
    };
    UISpuerItem.prototype.relativePositionBottom = function (prevNode) {
        if (prevNode) {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
                var prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY);
                var offset = (prevNode.y - (prevHeight * prevNode.anchorY)) - (this.node.height * (1 - this.node.anchorY)) - this.layout.spacing.y;
                this.node.y = offset;
            }
            else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
                var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
                var offset = prevNode.x + (prevWidth * (1 - prevNode.anchorX)) + (this.node.width * this.node.anchorX) + this.layout.spacing.x;
                this.node.x = offset;
            }
        }
    };
    UISpuerItem.prototype.relativePositionTop = function (prevNode) {
        if (prevNode) {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
                var prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY);
                var offset = prevNode.y + (prevHeight * (1 - prevNode.anchorY)) + (this.node.height * this.node.anchorY) + this.layout.spacing.y;
                this.node.y = offset;
            }
            else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
                var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
                var offset = prevNode.x - (prevWidth * prevNode.anchorX) - (this.node.width * (1 - this.node.anchorX)) - this.layout.spacing.x;
                this.node.x = offset;
            }
        }
    };
    UISpuerItem.prototype.watchBrother = function () {
        var prevIndex = this.node.getSiblingIndex() - 1;
        var prevNode = this.node.parent.children[prevIndex];
        this.relativePositionBottom(prevNode);
    };
    UISpuerItem.prototype.watchSelf = function () {
        // 向下填充
        if (this.isUpdateHeader) {
            if (this.layout.footer['index'] + 1 == this.layout.maxItemTotal)
                return;
            var offset = this.isOutOfBoundaryTop(this.node);
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = this.layout.footer['index'] + 1;
                this.relativePositionBottom(this.layout.footer);
                this.node.setSiblingIndex(this.layout.node.childrenCount - 1);
                this.refreshItemCallback(this.node, this.node['index']);
            }
        }
        // 向上填充
        if (this.isUpdateFooter) {
            if (this.layout.header['index'] == 0)
                return;
            var offset = this.isOutOfBoundaryBottom(this.node);
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = this.layout.header['index'] - 1;
                this.relativePositionTop(this.layout.header);
                this.node.setSiblingIndex(0);
                this.refreshItemCallback(this.node, this.node['index']);
            }
        }
    };
    UISpuerItem.prototype.update = function (dt) {
        this.watchBrother();
        this.watchSelf();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNwRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzVCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTthQUMxRDtTQUNKO0lBQ0wsQ0FBQztJQUNELDRCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtJQUNwQixDQUFDO0lBckhnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBc0gvQjtJQUFELGtCQUFDO0NBdEhELEFBc0hDLENBdEh3QyxFQUFFLENBQUMsU0FBUyxHQXNIcEQ7a0JBdEhvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQsIHsgVUlTdXBlckF4aXMgfSBmcm9tICcuL1VJU3VwZXJMYXlvdXQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNwdWVySXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBsYXlvdXQ6IFVJU3VwZXJMYXlvdXRcbiAgICBwcml2YXRlIHJlZnJlc2hJdGVtQ2FsbGJhY2s6IEZ1bmN0aW9uXG4gICAgcHJpdmF0ZSBpc091dE9mQm91bmRhcnlUb3A6IEZ1bmN0aW9uXG4gICAgcHJpdmF0ZSBpc091dE9mQm91bmRhcnlCb3R0b206IEZ1bmN0aW9uXG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZVsnZ2V0Qm91bmRpbmcnXSA9IHRoaXMuZ2V0Qm91bmRpbmcuYmluZCh0aGlzKVxuICAgIH1cbiAgICBwdWJsaWMgaW5pdChsYXlvdXQ6IFVJU3VwZXJMYXlvdXQsIHJlZnJlc2hJdGVtQ2FsbGJhY2s6IEZ1bmN0aW9uLCBpc091dE9mQm91bmRhcnlUb3A6IEZ1bmN0aW9uLCBpc091dE9mQm91bmRhcnlCb3R0b206IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMubGF5b3V0ID0gbGF5b3V0XG4gICAgICAgIHRoaXMucmVmcmVzaEl0ZW1DYWxsYmFjayA9IHJlZnJlc2hJdGVtQ2FsbGJhY2tcbiAgICAgICAgdGhpcy5pc091dE9mQm91bmRhcnlUb3AgPSBpc091dE9mQm91bmRhcnlUb3BcbiAgICAgICAgdGhpcy5pc091dE9mQm91bmRhcnlCb3R0b20gPSBpc091dE9mQm91bmRhcnlCb3R0b21cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRCb3VuZGluZygpIHtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudFsnX3VwZGF0ZVdvcmxkTWF0cml4J10oKVxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aFxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0XG4gICAgICAgIGxldCByZWN0ID0gY2MucmVjdCgtdGhpcy5ub2RlLmdldEFuY2hvclBvaW50KCkueCAqIHdpZHRoLCAtdGhpcy5ub2RlLmdldEFuY2hvclBvaW50KCkueSAqIGhlaWdodCwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgdGhpcy5ub2RlWydfY2FsY3VsV29ybGRNYXRyaXgnXSgpO1xuICAgICAgICByZWN0LnRyYW5zZm9ybU1hdDQocmVjdCwgdGhpcy5ub2RlWydfd29ybGRNYXRyaXgnXSk7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzSGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpID09IDBcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNGb290ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkgPT0gdGhpcy5sYXlvdXQubm9kZS5jaGlsZHJlbkNvdW50IC0gMVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc1VwZGF0ZUhlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS55ID4gMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS54IDwgMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc1VwZGF0ZUZvb3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS55IDwgMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS54ID4gMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5KG9mZnNldDogY2MuVmVjMikge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMICYmIG9mZnNldC55ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMICYmIG9mZnNldC54ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWxhdGl2ZVBvc2l0aW9uQm90dG9tKHByZXZOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcHJldk5vZGUuaGVpZ2h0ICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVZKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAocHJldk5vZGUueSAtIChwcmV2SGVpZ2h0ICogcHJldk5vZGUuYW5jaG9yWSkpIC0gKHRoaXMubm9kZS5oZWlnaHQgKiAoMSAtIHRoaXMubm9kZS5hbmNob3JZKSkgLSB0aGlzLmxheW91dC5zcGFjaW5nLnlcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IG9mZnNldFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCkge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2V2lkdGggPSBwcmV2Tm9kZS53aWR0aCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHByZXZOb2RlLnNjYWxlWClcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcHJldk5vZGUueCArIChwcmV2V2lkdGggKiAoMSAtIHByZXZOb2RlLmFuY2hvclgpKSArICh0aGlzLm5vZGUud2lkdGggKiB0aGlzLm5vZGUuYW5jaG9yWCkgKyB0aGlzLmxheW91dC5zcGFjaW5nLnhcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG9mZnNldFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVsYXRpdmVQb3NpdGlvblRvcChwcmV2Tm9kZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAocHJldk5vZGUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldkhlaWdodCA9IHByZXZOb2RlLmhlaWdodCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHByZXZOb2RlLnNjYWxlWSlcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gcHJldk5vZGUueSArIChwcmV2SGVpZ2h0ICogKDEgLSBwcmV2Tm9kZS5hbmNob3JZKSkgKyAodGhpcy5ub2RlLmhlaWdodCAqIHRoaXMubm9kZS5hbmNob3JZKSArIHRoaXMubGF5b3V0LnNwYWNpbmcueVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gb2Zmc2V0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZXaWR0aCA9IHByZXZOb2RlLndpZHRoICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVYKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwcmV2Tm9kZS54IC0gKHByZXZXaWR0aCAqIHByZXZOb2RlLmFuY2hvclgpIC0gKHRoaXMubm9kZS53aWR0aCAqICgxIC0gdGhpcy5ub2RlLmFuY2hvclgpKSAtIHRoaXMubGF5b3V0LnNwYWNpbmcueFxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gb2Zmc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSB3YXRjaEJyb3RoZXIoKSB7XG4gICAgICAgIGxldCBwcmV2SW5kZXggPSB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkgLSAxXG4gICAgICAgIGxldCBwcmV2Tm9kZSA9IHRoaXMubm9kZS5wYXJlbnQuY2hpbGRyZW5bcHJldkluZGV4XVxuICAgICAgICB0aGlzLnJlbGF0aXZlUG9zaXRpb25Cb3R0b20ocHJldk5vZGUpXG4gICAgfVxuICAgIHByaXZhdGUgd2F0Y2hTZWxmKCkge1xuICAgICAgICAvLyDlkJHkuIvloavlhYVcbiAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGVIZWFkZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5mb290ZXJbJ2luZGV4J10gKyAxID09IHRoaXMubGF5b3V0Lm1heEl0ZW1Ub3RhbCkgcmV0dXJuXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5pc091dE9mQm91bmRhcnlUb3AodGhpcy5ub2RlKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVbJ2luZGV4J10gPSB0aGlzLmxheW91dC5mb290ZXJbJ2luZGV4J10gKyAxXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGl2ZVBvc2l0aW9uQm90dG9tKHRoaXMubGF5b3V0LmZvb3RlcilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2libGluZ0luZGV4KHRoaXMubGF5b3V0Lm5vZGUuY2hpbGRyZW5Db3VudCAtIDEpXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbUNhbGxiYWNrKHRoaXMubm9kZSwgdGhpcy5ub2RlWydpbmRleCddKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOWQkeS4iuWhq+WFhVxuICAgICAgICBpZiAodGhpcy5pc1VwZGF0ZUZvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclsnaW5kZXgnXSA9PSAwKSByZXR1cm5cbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmlzT3V0T2ZCb3VuZGFyeUJvdHRvbSh0aGlzLm5vZGUpXG4gICAgICAgICAgICBpZiAodGhpcy5pc091dE9mQm91bmRhcnkob2Zmc2V0KSkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IHRoaXMubGF5b3V0LmhlYWRlclsnaW5kZXgnXSAtIDFcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGF0aXZlUG9zaXRpb25Ub3AodGhpcy5sYXlvdXQuaGVhZGVyKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoMClcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtQ2FsbGJhY2sodGhpcy5ub2RlLCB0aGlzLm5vZGVbJ2luZGV4J10pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMud2F0Y2hCcm90aGVyKClcbiAgICAgICAgdGhpcy53YXRjaFNlbGYoKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/testPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f08ceM6rcFNG74icWsXSxPT', 'testPanel');
// testPanel.ts

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
var item_1 = require("./item");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var testPanel = /** @class */ (function (_super) {
    __extends(testPanel, _super);
    function testPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.isRandomHeight = false;
        _this.isRandomWidth = false;
        // 模拟数据总数
        _this.total = 10000;
        _this.datas = [];
        return _this;
    }
    testPanel.prototype.onLoad = function () {
        for (var i = 0; i < this.total; i++) {
            this.datas.push({
                title: "" + i,
                randomWidth: 100 * (1 + Math.random()),
                randomHeight: 100 * (1 + Math.random()),
            });
        }
        this.layout.total(this.datas.length);
    };
    // 刷新数据
    testPanel.prototype.refreshItemEvent = function (node, index) {
        var info = this.datas[index];
        node.getComponent(item_1.default).show(info);
        if (this.isRandomHeight) {
            node.height = info.randomHeight;
        }
        if (this.isRandomWidth) {
            node.width = info.randomWidth;
        }
    };
    testPanel.prototype.toHeader = function () {
        this.layout.scrollToHeader(0.5);
    };
    testPanel.prototype.toFooter = function () {
        this.layout.scrollToFooter(0.5);
    };
    testPanel.prototype.addItem = function () {
        // 测试代码 添加数据
        this.datas.push({
            title: "" + this.datas.length,
            randomWidth: 100 * (1 + Math.random()),
            randomHeight: 100 * (1 + Math.random()),
        });
        cc.log("添加数据 当前总数:", this.datas.length);
        this.layout.total(this.datas.length);
    };
    testPanel.prototype.remItem = function () {
        // 测试代码 删除数据
        this.datas.pop();
        cc.log("删除数据 当前总数:", this.datas.length);
        this.layout.total(this.datas.length);
    };
    testPanel.prototype.randomHeight = function () {
        // 测试代码 随机尺寸
        this.isRandomHeight = !this.isRandomHeight;
        this.toHeader();
    };
    testPanel.prototype.randomWidth = function () {
        // 测试代码 随机尺寸
        this.isRandomWidth = !this.isRandomWidth;
        this.toHeader();
    };
    __decorate([
        property(UISuperLayout_1.default)
    ], testPanel.prototype, "layout", void 0);
    testPanel = __decorate([
        ccclass
    ], testPanel);
    return testPanel;
}(cc.Component));
exports.default = testPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBRUQsZ0NBQVksR0FBWjtRQUNJLFlBQVk7UUFDWixJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQTtRQUMxQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUNELCtCQUFXLEdBQVg7UUFDSSxZQUFZO1FBQ1osSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUE7UUFDeEMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUE1RHdCO1FBQXhCLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzZDQUE2QjtJQUZwQyxTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBK0Q3QjtJQUFELGdCQUFDO0NBL0RELEFBK0RDLENBL0RzQyxFQUFFLENBQUMsU0FBUyxHQStEbEQ7a0JBL0RvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQgZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmltcG9ydCBpdGVtIGZyb20gJy4vaXRlbSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVUlTdXBlckxheW91dCkgbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIHByaXZhdGUgaXNSYW5kb21IZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNSYW5kb21XaWR0aDogYm9vbGVhbiA9IGZhbHNlXG4gICAgLy8g5qih5ouf5pWw5o2u5oC75pWwXG4gICAgcHJpdmF0ZSB0b3RhbDogbnVtYmVyID0gMTAwMDBcbiAgICBwcml2YXRlIGRhdGFzOiBhbnlbXSA9IFtdXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7aX1gLFxuICAgICAgICAgICAgICAgIHJhbmRvbVdpZHRoOiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgICAgIHJhbmRvbUhlaWdodDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIC8vIOWIt+aWsOaVsOaNrlxuICAgIHJlZnJlc2hJdGVtRXZlbnQobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgaW5mbyA9IHRoaXMuZGF0YXNbaW5kZXhdXG4gICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50KGl0ZW0pLnNob3coaW5mbylcbiAgICAgICAgaWYgKHRoaXMuaXNSYW5kb21IZWlnaHQpIHtcbiAgICAgICAgICAgIG5vZGUuaGVpZ2h0ID0gaW5mby5yYW5kb21IZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1JhbmRvbVdpZHRoKSB7XG4gICAgICAgICAgICBub2RlLndpZHRoID0gaW5mby5yYW5kb21XaWR0aFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdG9IZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyKDAuNSlcbiAgICB9XG4gICAgdG9Gb290ZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvRm9vdGVyKDAuNSlcbiAgICB9XG4gICAgYWRkSXRlbSgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOa3u+WKoOaVsOaNrlxuICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xuICAgICAgICAgICAgdGl0bGU6IGAke3RoaXMuZGF0YXMubGVuZ3RofWAsXG4gICAgICAgICAgICByYW5kb21XaWR0aDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgIHJhbmRvbUhlaWdodDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgfSlcbiAgICAgICAgY2MubG9nKFwi5re75Yqg5pWw5o2uIOW9k+WJjeaAu+aVsDpcIiwgdGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgIH1cbiAgICByZW1JdGVtKCkge1xuICAgICAgICAvLyDmtYvor5Xku6PnoIEg5Yig6Zmk5pWw5o2uXG4gICAgICAgIHRoaXMuZGF0YXMucG9wKClcbiAgICAgICAgY2MubG9nKFwi5Yig6Zmk5pWw5o2uIOW9k+WJjeaAu+aVsDpcIiwgdGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgIH1cblxuICAgIHJhbmRvbUhlaWdodCgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOmaj+acuuWwuuWvuFxuICAgICAgICB0aGlzLmlzUmFuZG9tSGVpZ2h0ID0gIXRoaXMuaXNSYW5kb21IZWlnaHRcbiAgICAgICAgdGhpcy50b0hlYWRlcigpXG4gICAgfVxuICAgIHJhbmRvbVdpZHRoKCkge1xuICAgICAgICAvLyDmtYvor5Xku6PnoIEg6ZqP5py65bC65a+4XG4gICAgICAgIHRoaXMuaXNSYW5kb21XaWR0aCA9ICF0aGlzLmlzUmFuZG9tV2lkdGhcbiAgICAgICAgdGhpcy50b0hlYWRlcigpXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/item.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f7c845RaBRP1K72l1864tqD', 'item');
// item.ts

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
var item = /** @class */ (function (_super) {
    __extends(item, _super);
    function item() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    item.prototype.show = function (info) {
        this.label.string = info.title;
    };
    __decorate([
        property(cc.Label)
    ], item.prototype, "label", void 0);
    item = __decorate([
        ccclass
    ], item);
    return item;
}(cc.Component));
exports.default = item;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBT0M7UUFMdUIsV0FBSyxHQUFhLElBQUksQ0FBQTs7SUFLOUMsQ0FBQztJQUhVLG1CQUFJLEdBQVgsVUFBWSxJQUFTO1FBQ2pCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDbEMsQ0FBQztJQUptQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FBdUI7SUFGekIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQU94QjtJQUFELFdBQUM7Q0FQRCxBQU9DLENBUGlDLEVBQUUsQ0FBQyxTQUFTLEdBTzdDO2tCQVBvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBsYWJlbDogY2MuTGFiZWwgPSBudWxsXG5cbiAgICBwdWJsaWMgc2hvdyhpbmZvOiBhbnkpIHtcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBpbmZvLnRpdGxlXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------
