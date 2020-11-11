
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
        _this.isChange = false;
        return _this;
    }
    item.prototype.show = function (info, index, removeFunc) {
        this.label.string = "" + info.title;
        this.index = index;
        this.removeFunc = removeFunc;
    };
    item.prototype.onRemMe = function () {
        this.removeFunc(this.index);
    };
    item.prototype.onClick = function () {
        this.isChange = !this.isChange;
        if (this.isChange) {
            this.node.height *= 10;
        }
        else {
            this.node.height /= 10;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBdUJDO1FBckJ1QixXQUFLLEdBQWEsSUFBSSxDQUFBO1FBR2xDLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBa0I1QixDQUFDO0lBakJVLG1CQUFJLEdBQVgsVUFBWSxJQUFTLEVBQUUsS0FBYSxFQUFFLFVBQW9CO1FBQ3RELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUcsSUFBSSxDQUFDLEtBQU8sQ0FBQTtRQUNuQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQTtJQUNoQyxDQUFDO0lBQ0Qsc0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFRCxzQkFBTyxHQUFQO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDOUIsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFDO1lBQ2IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFBO1NBQ3pCO2FBQUk7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxFQUFFLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBcEJtQjtRQUFuQixRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt1Q0FBdUI7SUFGekIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXVCeEI7SUFBRCxXQUFDO0NBdkJELEFBdUJDLENBdkJpQyxFQUFFLENBQUMsU0FBUyxHQXVCN0M7a0JBdkJvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBsYWJlbDogY2MuTGFiZWwgPSBudWxsXG4gICAgcHJpdmF0ZSByZW1vdmVGdW5jOiBGdW5jdGlvblxuICAgIHByaXZhdGUgaW5kZXhcbiAgICBwcml2YXRlIGlzQ2hhbmdlID0gZmFsc2VcbiAgICBwdWJsaWMgc2hvdyhpbmZvOiBhbnksIGluZGV4OiBudW1iZXIsIHJlbW92ZUZ1bmM6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gYCR7aW5mby50aXRsZX1gXG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleFxuICAgICAgICB0aGlzLnJlbW92ZUZ1bmMgPSByZW1vdmVGdW5jXG4gICAgfVxuICAgIG9uUmVtTWUoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRnVuYyh0aGlzLmluZGV4KVxuICAgIH1cblxuICAgIG9uQ2xpY2soKSB7XG4gICAgICAgIHRoaXMuaXNDaGFuZ2UgPSAhdGhpcy5pc0NoYW5nZVxuICAgICAgICBpZih0aGlzLmlzQ2hhbmdlKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKj0gMTBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0IC89IDEwXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=