
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
        _this.header = null;
        _this.refreshing = null;
        _this.footer = null;
        _this.loading = null;
        _this.isRandomHeight = false;
        _this.isRandomWidth = false;
        // 模拟数据总数
        _this.total = 50;
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
        if (this.isRandomHeight) {
            node.height = info.randomHeight;
        }
        if (this.isRandomWidth) {
            node.width = info.randomWidth;
        }
        node.getComponent(item_1.default).show(info, index, this.onRemoveItem.bind(this));
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
    /**
    * 下拉刷新
    * 核心代码 请看 第一步 第二步 其余的都是一些的效果测试代码 你可以自己实现任何效果
    */
    testPanel.prototype.pullDownRefresh = function (scroll, event) {
        var _this = this;
        // 模拟代码  一些UI效果
        this.playAnim(this.header, event, '松开刷新哦', '继续滑');
        // event.refresh=true 代表需要刷新数据
        if (event.refresh) {
            cc.log("开始异步刷新数据");
            this.refreshing.active = true;
            // 第一步  模拟刷新数据
            for (var i = 0; i < this.datas.length; i++) {
                var data = this.datas[i];
                this.datas[i].title = data.title + " - " + i;
            }
            // 模拟异步延迟
            setTimeout(function () {
                _this.refreshing.active = false;
                // 第二步 刷新
                cc.log("刷新成功！");
                _this.layout.total(_this.datas.length);
            }, 1000);
        }
    };
    /**
     * 上拉加载
     * 核心代码 请看 第一步 第二步 其余的都是一些的效果测试代码 你可以自己实现任何效果
     */
    testPanel.prototype.pullUpLoad = function (scroll, event) {
        var _this = this;
        // 模拟代码 一些UI效果
        this.playAnim(this.footer, event, '松开加载更多', '继续滑');
        // event.refresh=true 代表需要加载数据
        if (event.refresh) {
            cc.log("开始异步加载10条数据");
            this.loading.active = true;
            // 第一步  模拟增加10条数据
            for (var i = 0; i < 10; i++) {
                this.datas.push({
                    title: "" + this.datas.length,
                    randomWidth: 100 * (1 + Math.random()),
                    randomHeight: 100 * (1 + Math.random()),
                });
            }
            // 模拟异步延迟加载
            setTimeout(function () {
                _this.loading.active = false;
                // 第二步 刷新
                cc.log("数据加载成功！");
                _this.layout.total(_this.datas.length);
            }, 1000);
        }
    };
    testPanel.prototype.onRemoveItem = function (index) {
        // 删除点击的那条数据
        this.datas.splice(index, 1);
        // 刷新
        this.layout.total(this.datas.length);
    };
    /** 测试代码 */
    testPanel.prototype.playAnim = function (node, event, msg1, msg2) {
        node.opacity = event.progress * 255;
        var scale = this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL ? cc.v2(1, event.progress) : cc.v2(event.progress, 1);
        if (event.progress >= 1) {
            node.getComponentInChildren(cc.Label).string = msg1;
        }
        else {
            node.getComponentInChildren(cc.Label).string = msg2;
        }
        if (event.progress >= 1.3) {
            if (!node['playing']) {
                node.runAction(cc.scaleTo(0.618, 1, 1).easing(cc.easeElasticOut(0.236)));
                node['playing'] = true;
            }
        }
        else {
            node.stopAllActions();
            node['playing'] = false;
            node.setScale(scale);
        }
    };
    __decorate([
        property(UISuperLayout_1.default)
    ], testPanel.prototype, "layout", void 0);
    __decorate([
        property(cc.Node)
    ], testPanel.prototype, "header", void 0);
    __decorate([
        property(cc.Node)
    ], testPanel.prototype, "refreshing", void 0);
    __decorate([
        property(cc.Node)
    ], testPanel.prototype, "footer", void 0);
    __decorate([
        property(cc.Node)
    ], testPanel.prototype, "loading", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy90ZXN0UGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaURBQTZEO0FBQzdELCtCQUEwQjtBQUVwQixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXlKQztRQXZKNEIsWUFBTSxHQUFrQixJQUFJLENBQUE7UUFDbEMsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUN0QixnQkFBVSxHQUFZLElBQUksQ0FBQTtRQUMxQixZQUFNLEdBQVksSUFBSSxDQUFBO1FBQ3RCLGFBQU8sR0FBWSxJQUFJLENBQUE7UUFDbEMsb0JBQWMsR0FBWSxLQUFLLENBQUE7UUFDL0IsbUJBQWEsR0FBWSxLQUFLLENBQUE7UUFDdEMsU0FBUztRQUNELFdBQUssR0FBVyxFQUFFLENBQUE7UUFDbEIsV0FBSyxHQUFVLEVBQUUsQ0FBQTs7SUE4STdCLENBQUM7SUE1SUcsMEJBQU0sR0FBTjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDO2dCQUNaLEtBQUssRUFBRSxLQUFHLENBQUc7Z0JBQ2IsV0FBVyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBQ3RDLFlBQVksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQzFDLENBQUMsQ0FBQTtTQUNMO1FBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ0QsT0FBTztJQUNQLG9DQUFnQixHQUFoQixVQUFpQixJQUFhLEVBQUUsS0FBYTtRQUN6QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzVCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7U0FDbEM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFBO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxjQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQzNFLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNELDRCQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBQ0QsMkJBQU8sR0FBUDtRQUNJLFlBQVk7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNaLEtBQUssRUFBRSxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBUTtZQUM3QixXQUFXLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QyxZQUFZLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUMxQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUNELDJCQUFPLEdBQVA7UUFDSSxZQUFZO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtRQUNoQixFQUFFLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxZQUFZO1FBQ1osSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUE7UUFDMUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ25CLENBQUM7SUFDRCwrQkFBVyxHQUFYO1FBQ0ksWUFBWTtRQUNaLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBQ0Q7OztNQUdFO0lBRUYsbUNBQWUsR0FBZixVQUFnQixNQUF5QixFQUFFLEtBQTZDO1FBQXhGLGlCQXFCQztRQXBCRyxlQUFlO1FBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFakQsOEJBQThCO1FBQzlCLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNmLEVBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUE7WUFDbEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzdCLGNBQWM7WUFDZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFNLElBQUksQ0FBQyxLQUFLLFdBQU0sQ0FBRyxDQUFBO2FBQy9DO1lBQ0QsU0FBUztZQUNULFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQzlCLFNBQVM7Z0JBQ1QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDZixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNYO0lBQ0wsQ0FBQztJQUNEOzs7T0FHRztJQUNILDhCQUFVLEdBQVYsVUFBVyxNQUF5QixFQUFFLEtBQTZDO1FBQW5GLGlCQXlCQztRQXhCRyxjQUFjO1FBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFFbEQsOEJBQThCO1FBQzlCLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNmLEVBQUUsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7WUFFckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1lBQzFCLGlCQUFpQjtZQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztvQkFDWixLQUFLLEVBQUUsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVE7b0JBQzdCLFdBQVcsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO29CQUN0QyxZQUFZLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDMUMsQ0FBQyxDQUFBO2FBQ0w7WUFDRCxXQUFXO1lBQ1gsVUFBVSxDQUFDO2dCQUNQLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtnQkFDM0IsU0FBUztnQkFDVCxFQUFFLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO2dCQUNqQixLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1lBQ3hDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUNYO0lBQ0wsQ0FBQztJQUNELGdDQUFZLEdBQVosVUFBYSxLQUFhO1FBQ3RCLFlBQVk7UUFDWixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0IsS0FBSztRQUNMLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDeEMsQ0FBQztJQUVELFdBQVc7SUFDSCw0QkFBUSxHQUFoQixVQUFpQixJQUFhLEVBQUUsS0FBNkMsRUFBRSxJQUFZLEVBQUUsSUFBWTtRQUNyRyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFBO1FBQ25DLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxJQUFJLDJCQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMvRyxJQUFJLEtBQUssQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtTQUN0RDthQUFNO1lBQ0gsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1NBQ3REO1FBQ0QsSUFBSSxLQUFLLENBQUMsUUFBUSxJQUFJLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUE7YUFDekI7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQ3JCLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUE7WUFDdkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN2QjtJQUNMLENBQUM7SUFySndCO1FBQXhCLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzZDQUE2QjtJQUNsQztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FBdUI7SUFDdEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQTJCO0lBQzFCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUF1QjtJQUN0QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FBd0I7SUFOekIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlKN0I7SUFBRCxnQkFBQztDQXpKRCxBQXlKQyxDQXpKc0MsRUFBRSxDQUFDLFNBQVMsR0F5SmxEO2tCQXpKb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVN1cGVyTGF5b3V0LCB7IFVJU3VwZXJBeGlzIH0gZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmltcG9ydCBpdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgVUlTcHVlclNjcm9sbFZpZXcgZnJvbSAnLi9VSVN1cGVyU2Nyb2xsVmlldyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVUlTdXBlckxheW91dCkgbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBoZWFkZXI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHJlZnJlc2hpbmc6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGZvb3RlcjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgbG9hZGluZzogY2MuTm9kZSA9IG51bGxcbiAgICBwcml2YXRlIGlzUmFuZG9tSGVpZ2h0OiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzUmFuZG9tV2lkdGg6IGJvb2xlYW4gPSBmYWxzZVxuICAgIC8vIOaooeaLn+aVsOaNruaAu+aVsFxuICAgIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDUwXG4gICAgcHJpdmF0ZSBkYXRhczogYW55W10gPSBbXVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7aX1gLFxuICAgICAgICAgICAgICAgIHJhbmRvbVdpZHRoOiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgICAgIHJhbmRvbUhlaWdodDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIC8vIOWIt+aWsOaVsOaNrlxuICAgIHJlZnJlc2hJdGVtRXZlbnQobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgaW5mbyA9IHRoaXMuZGF0YXNbaW5kZXhdXG4gICAgICAgIGlmICh0aGlzLmlzUmFuZG9tSGVpZ2h0KSB7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IGluZm8ucmFuZG9tSGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSYW5kb21XaWR0aCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IGluZm8ucmFuZG9tV2lkdGhcbiAgICAgICAgfVxuICAgICAgICBub2RlLmdldENvbXBvbmVudChpdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlSXRlbS5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHRvSGVhZGVyKCkge1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb0hlYWRlcigwLjUpXG4gICAgfVxuICAgIHRvRm9vdGVyKCkge1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb0Zvb3RlcigwLjUpXG4gICAgfVxuICAgIGFkZEl0ZW0oKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDmt7vliqDmlbDmja5cbiAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLmRhdGFzLmxlbmd0aH1gLFxuICAgICAgICAgICAgcmFuZG9tV2lkdGg6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICByYW5kb21IZWlnaHQ6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgIH0pXG4gICAgICAgIGNjLmxvZyhcIua3u+WKoOaVsOaNriDlvZPliY3mgLvmlbA6XCIsIHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG4gICAgcmVtSXRlbSgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOWIoOmZpOaVsOaNrlxuICAgICAgICB0aGlzLmRhdGFzLnBvcCgpXG4gICAgICAgIGNjLmxvZyhcIuWIoOmZpOaVsOaNriDlvZPliY3mgLvmlbA6XCIsIHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG5cbiAgICByYW5kb21IZWlnaHQoKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDpmo/mnLrlsLrlr7hcbiAgICAgICAgdGhpcy5pc1JhbmRvbUhlaWdodCA9ICF0aGlzLmlzUmFuZG9tSGVpZ2h0XG4gICAgICAgIHRoaXMudG9IZWFkZXIoKVxuICAgIH1cbiAgICByYW5kb21XaWR0aCgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOmaj+acuuWwuuWvuFxuICAgICAgICB0aGlzLmlzUmFuZG9tV2lkdGggPSAhdGhpcy5pc1JhbmRvbVdpZHRoXG4gICAgICAgIHRoaXMudG9IZWFkZXIoKVxuICAgIH1cbiAgICAvKipcbiAgICAqIOS4i+aLieWIt+aWsFxuICAgICog5qC45b+D5Luj56CBIOivt+eciyDnrKzkuIDmraUg56ys5LqM5q2lIOWFtuS9meeahOmDveaYr+S4gOS6m+eahOaViOaenOa1i+ivleS7o+eggSDkvaDlj6/ku6Xoh6rlt7Hlrp7njrDku7vkvZXmlYjmnpxcbiAgICAqL1xuXG4gICAgcHVsbERvd25SZWZyZXNoKHNjcm9sbDogVUlTcHVlclNjcm9sbFZpZXcsIGV2ZW50OiB7IHJlZnJlc2g6IGJvb2xlYW4sIHByb2dyZXNzOiBudW1iZXIgfSkge1xuICAgICAgICAvLyDmqKHmi5/ku6PnoIEgIOS4gOS6m1VJ5pWI5p6cXG4gICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5oZWFkZXIsIGV2ZW50LCAn5p2+5byA5Yi35paw5ZOmJywgJ+e7p+e7rea7kScpXG5cbiAgICAgICAgLy8gZXZlbnQucmVmcmVzaD10cnVlIOS7o+ihqOmcgOimgeWIt+aWsOaVsOaNrlxuICAgICAgICBpZiAoZXZlbnQucmVmcmVzaCkge1xuICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5byC5q2l5Yi35paw5pWw5o2uXCIpXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hpbmcuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8g56ys5LiA5q2lICDmqKHmi5/liLfmlrDmlbDmja5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbaV0udGl0bGUgPSBgJHtkYXRhLnRpdGxlfSAtICR7aX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmqKHmi5/lvILmraXlu7bov59cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaGluZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIOesrOS6jOatpSDliLfmlrBcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliLfmlrDmiJDlip/vvIFcIilcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5LiK5ouJ5Yqg6L29XG4gICAgICog5qC45b+D5Luj56CBIOivt+eciyDnrKzkuIDmraUg56ys5LqM5q2lIOWFtuS9meeahOmDveaYr+S4gOS6m+eahOaViOaenOa1i+ivleS7o+eggSDkvaDlj6/ku6Xoh6rlt7Hlrp7njrDku7vkvZXmlYjmnpxcbiAgICAgKi9cbiAgICBwdWxsVXBMb2FkKHNjcm9sbDogVUlTcHVlclNjcm9sbFZpZXcsIGV2ZW50OiB7IHJlZnJlc2g6IGJvb2xlYW4sIHByb2dyZXNzOiBudW1iZXIgfSkge1xuICAgICAgICAvLyDmqKHmi5/ku6PnoIEg5LiA5LqbVUnmlYjmnpxcbiAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmZvb3RlciwgZXZlbnQsICfmnb7lvIDliqDovb3mm7TlpJonLCAn57un57ut5ruRJylcblxuICAgICAgICAvLyBldmVudC5yZWZyZXNoPXRydWUg5Luj6KGo6ZyA6KaB5Yqg6L295pWw5o2uXG4gICAgICAgIGlmIChldmVudC5yZWZyZXNoKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLlvIDlp4vlvILmraXliqDovb0xMOadoeaVsOaNrlwiKVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8g56ys5LiA5q2lICDmqKHmi5/lop7liqAxMOadoeaVsOaNrlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGAke3RoaXMuZGF0YXMubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVdpZHRoOiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgICAgICAgICByYW5kb21IZWlnaHQ6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaooeaLn+W8guatpeW7tui/n+WKoOi9vVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgLy8g56ys5LqM5q2lIOWIt+aWsFxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaVsOaNruWKoOi9veaIkOWKn++8gVwiKVxuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyDliKDpmaTngrnlh7vnmoTpgqPmnaHmlbDmja5cbiAgICAgICAgdGhpcy5kYXRhcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIC8vIOWIt+aWsFxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG5cbiAgICAvKiog5rWL6K+V5Luj56CBICovXG4gICAgcHJpdmF0ZSBwbGF5QW5pbShub2RlOiBjYy5Ob2RlLCBldmVudDogeyByZWZyZXNoOiBib29sZWFuLCBwcm9ncmVzczogbnVtYmVyIH0sIG1zZzE6IHN0cmluZywgbXNnMjogc3RyaW5nKSB7XG4gICAgICAgIG5vZGUub3BhY2l0eSA9IGV2ZW50LnByb2dyZXNzICogMjU1XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCA/IGNjLnYyKDEsIGV2ZW50LnByb2dyZXNzKSA6IGNjLnYyKGV2ZW50LnByb2dyZXNzLCAxKVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBtc2cxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IG1zZzJcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3MgPj0gMS4zKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGVbJ3BsYXlpbmcnXSkge1xuICAgICAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC42MTgsIDEsIDEpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjIzNikpKVxuICAgICAgICAgICAgICAgIG5vZGVbJ3BsYXlpbmcnXSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgbm9kZVsncGxheWluZyddID0gZmFsc2VcbiAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUoc2NhbGUpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==