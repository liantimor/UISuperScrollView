"use strict";
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