
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBK0MscUNBQWE7SUFBNUQ7UUFBQSxxRUFvRkM7UUFuRlUsZUFBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBSXZCLGFBQU8sR0FBa0IsSUFBSSxDQUFBOztJQStFekMsQ0FBQztJQWxGRyxzQkFBVyxtQ0FBSTthQUFmLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQVcsNENBQWE7YUFDeEIsY0FBNkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFENUQsVUFBeUIsS0FBYyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBRzNFLHNCQUFZLHFDQUFNO2FBQWxCO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUE7YUFDMUQ7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDdkIsQ0FBQzs7O09BQUE7SUFDTyx5Q0FBYSxHQUFyQixVQUFzQixLQUEwQixFQUFFLGdCQUFnQjtRQUM5RCxpQkFBTSxlQUFlLENBQUMsWUFBQyxLQUFLLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQTtRQUMvQyxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdB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Q0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUM3RjtZQUNELE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFBO1NBQzlDO1FBQ0QsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQW5GZ0IsaUJBQWlCO1FBRHJDLE9BQU87T0FDYSxpQkFBaUIsQ0FvRnJDO0lBQUQsd0JBQUM7Q0FwRkQsQUFvRkMsQ0FwRjhDLEVBQUUsQ0FBQyxVQUFVLEdBb0YzRDtrQkFwRm9CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVN1cGVyTGF5b3V0IGZyb20gJy4vVUlTdXBlckxheW91dCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3B1ZXJTY3JvbGxWaWV3IGV4dGVuZHMgY2MuU2Nyb2xsVmlldyB7XG4gICAgcHVibGljIGRlbHRhTW92ZSA9IGNjLlZlYzIuWkVST1xuICAgIHB1YmxpYyBnZXQgdmlldygpOiBjYy5Ob2RlIHsgcmV0dXJuIHRoaXNbJ192aWV3J10gfVxuICAgIHB1YmxpYyBzZXQgYXV0b1Njcm9sbGluZyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzWydfYXV0b1Njcm9sbGluZyddID0gdmFsdWUgfVxuICAgIHB1YmxpYyBnZXQgYXV0b1Njcm9sbGluZygpIHsgcmV0dXJuIHRoaXNbJ19hdXRvU2Nyb2xsaW5nJ10gfVxuICAgIHByaXZhdGUgX2xheW91dDogVUlTdXBlckxheW91dCA9IG51bGxcbiAgICBwcml2YXRlIGdldCBsYXlvdXQoKTogVUlTdXBlckxheW91dCB7XG4gICAgICAgIGlmICh0aGlzLl9sYXlvdXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbGF5b3V0ID0gdGhpcy5jb250ZW50LmdldENvbXBvbmVudChVSVN1cGVyTGF5b3V0KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRcbiAgICB9XG4gICAgcHJpdmF0ZSBfb25Ub3VjaE1vdmVkKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoLCBjYXB0dXJlTGlzdGVuZXJzKSB7XG4gICAgICAgIHN1cGVyWydfb25Ub3VjaE1vdmVkJ10oZXZlbnQsIGNhcHR1cmVMaXN0ZW5lcnMpXG4gICAgICAgIGxldCBkZWx0YSA9IGNjLnYyKGV2ZW50LmdldExvY2F0aW9uKCkueCAtIGV2ZW50LmdldFByZXZpb3VzTG9jYXRpb24oKS54LCBldmVudC5nZXRMb2NhdGlvbigpLnkgLSBldmVudC5nZXRQcmV2aW91c0xvY2F0aW9uKCkueSlcbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwgJiYgZGVsdGEueSAhPSAwIHx8IHRoaXMuaG9yaXpvbnRhbCAmJiBkZWx0YS54ICE9IDApIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGFNb3ZlID0gZGVsdGFcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9kaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHN1cGVyWydfZGlzcGF0Y2hFdmVudCddKGV2ZW50KVxuICAgICAgICBpZiAoZXZlbnQgPT0gJ3Njcm9sbC1lbmRlZCcpIHtcbiAgICAgICAgICAgIHRoaXMuZGVsdGFNb3ZlID0gY2MuVmVjMi5aRVJPXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2FsY3VsYXRlQm91bmRhcnkoKSB7XG4gICAgICAgIHRoaXNbJ19jYWxjdWxhdGVCb3VuZGFyeSddKClcbiAgICB9XG4gICAgcHVibGljIGdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KG9mZnNldD86IGNjLlZlYzIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeSddKG9mZnNldClcbiAgICB9XG4gICAgX2dldENvbnRlbnRUb3BCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbFxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCB0aGlzLmxheW91dC5oZWFkZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueU1heCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKDAsIHRoaXMubGF5b3V0LmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnlNYXgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbG9jYWwueSArIHRoaXMubGF5b3V0LnBhZGRpbmdUb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cbiAgICBfZ2V0Q29udGVudEJvdHRvbUJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3Rlcikge1xuICAgICAgICAgICAgbGV0IGxvY2FsXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuY2hpbGRCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKDAsIHRoaXMubGF5b3V0LmZvb3Rlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55TWluKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoMCwgdGhpcy5sYXlvdXQuZm9vdGVyWydnZXRCb3VuZGluZyddKCkueU1pbikpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQgPSBsb2NhbC55IC0gdGhpcy5sYXlvdXQucGFkZGluZ0JvdHRvbVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgX2dldENvbnRlbnRMZWZ0Qm91bmRhcnkoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5jaGlsZEJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIodGhpcy5sYXlvdXQuaGVhZGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnhNaW4sIDApKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih0aGlzLmxheW91dC5oZWFkZXJbJ2dldEJvdW5kaW5nJ10oKS54TWluLCAwKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCA9IGxvY2FsLnggLSB0aGlzLmxheW91dC5wYWRkaW5nTGVmdFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgX2dldENvbnRlbnRSaWdodEJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3Rlcikge1xuICAgICAgICAgICAgbGV0IGxvY2FsXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuY2hpbGRCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHRoaXMubGF5b3V0LmZvb3Rlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54TWF4LCAwKSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIodGhpcy5sYXlvdXQuZm9vdGVyWydnZXRCb3VuZGluZyddKCkueE1heCwgMCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvZmZzZXQgPSBsb2NhbC54ICsgdGhpcy5sYXlvdXQucGFkZGluZ1JpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mZnNldFxuICAgIH1cbn1cbiJdfQ==