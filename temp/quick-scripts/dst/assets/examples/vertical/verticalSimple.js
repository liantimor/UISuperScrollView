
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
        var _this = this;
        if (this.init) {
            for (var i = 0; i < this.total; i++) {
                this.datas.push({ message: "" + this.datas.length });
            }
            this.layout.total(this.datas.length);
        }
        this.scheduleOnce(function () {
            _this.layout.scrollView.node.width = _this.layout.scrollView.node.width + 100;
        }, 3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy92ZXJ0aWNhbC92ZXJ0aWNhbFNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsK0NBQTBDO0FBQ3BDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBeUNDO1FBdkM0QixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUMzQyxXQUFLLEdBQVcsR0FBRyxDQUFBO1FBQ25CLFVBQUksR0FBWSxLQUFLLENBQUE7UUFDdkIsV0FBSyxHQUFVLEVBQUUsQ0FBQTs7SUFvQzdCLENBQUM7SUFuQ0csK0JBQU0sR0FBTjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFRLEVBQUUsQ0FBQyxDQUFBO2FBQ3ZEO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtTQUN2QztRQUNELElBQUksQ0FBQyxZQUFZLENBQUM7WUFDZCxLQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQy9FLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUNULENBQUM7SUFFTyx1Q0FBYyxHQUF0QixVQUF1QixJQUFhLEVBQUUsS0FBYTtRQUMvQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzVCLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDL0UsQ0FBQztJQUNPLGlDQUFRLEdBQWhCLFVBQWlCLEtBQWE7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNPLGdDQUFPLEdBQWYsVUFBZ0IsS0FBVSxFQUFFLEtBQVU7UUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBUSxFQUFFLENBQUMsQ0FBQTtTQUN2RDtRQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNPLG1DQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUNPLG1DQUFVLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUNPLGlDQUFRLEdBQWhCO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDakMsQ0FBQztJQXRDd0I7UUFBeEIsUUFBUSxDQUFDLHVCQUFhLENBQUM7a0RBQTZCO0lBQzNDO1FBQVQsUUFBUTtpREFBb0I7SUFDbkI7UUFBVCxRQUFRO2dEQUFzQjtJQUpkLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0F5Q2xDO0lBQUQscUJBQUM7Q0F6Q0QsQUF5Q0MsQ0F6QzJDLEVBQUUsQ0FBQyxTQUFTLEdBeUN2RDtrQkF6Q29CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTdXBlckxheW91dCBmcm9tICcuLi8uLi9jb3Jlcy9VSVN1cGVyTGF5b3V0JztcbmltcG9ydCB2ZXJ0aWNhbEl0ZW0gZnJvbSAnLi92ZXJ0aWNhbEl0ZW0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB2ZXJ0aWNhbFNpbXBsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVUlTdXBlckxheW91dCkgbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIEBwcm9wZXJ0eSB0b3RhbDogbnVtYmVyID0gNTAwXG4gICAgQHByb3BlcnR5IGluaXQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgZGF0YXM6IGFueVtdID0gW11cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluaXQpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHsgbWVzc2FnZTogYCR7dGhpcy5kYXRhcy5sZW5ndGh9YCB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVmlldy5ub2RlLndpZHRoID0gdGhpcy5sYXlvdXQuc2Nyb2xsVmlldy5ub2RlLndpZHRoICsgMTAwXG4gICAgICAgIH0sIDMpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlZnJlc2hFdmVudChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5kYXRhc1tpbmRleF1cbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQodmVydGljYWxJdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpXG4gICAgfVxuICAgIHByaXZhdGUgb25SZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbShldmVudDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHsgbWVzc2FnZTogYCR7dGhpcy5kYXRhcy5sZW5ndGh9YCB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9IZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyKDAuNjE4KVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9Gb290ZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvRm9vdGVyKDAuNjE4KVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9NYWluKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKVxuICAgIH1cbn1cbiJdfQ==