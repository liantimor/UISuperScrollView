
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