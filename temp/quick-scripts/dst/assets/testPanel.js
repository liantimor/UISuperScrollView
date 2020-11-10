
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
    // 
    /**
    * 下拉刷新
    * 核心代码 请看 第一步 第二步 其余的都是一些的效果测试代码 你可以自己实现任何效果
    */
    testPanel.prototype.pullDownRefresh = function (scroll, event) {
        var _this = this;
        // 模拟代码  一些UI效果
        this.header.opacity = event.progress * 255;
        if (event.progress == 1) {
            this.header.getComponentInChildren(cc.Label).string = '松开刷新';
        }
        else {
            this.header.getComponentInChildren(cc.Label).string = '下拉刷新';
        }
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
            this.header.scaleY = event.progress;
        }
        else {
            this.header.scaleX = event.progress;
        }
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
        this.footer.opacity = event.progress * 255;
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
            this.footer.scaleY = event.progress;
        }
        else {
            this.footer.scaleX = event.progress;
        }
        if (event.progress == 1) {
            this.footer.getComponentInChildren(cc.Label).string = '松开加载更多';
        }
        else {
            this.footer.getComponentInChildren(cc.Label).string = '上拉加载';
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNYLFVBQVUsQ0FBQztnQkFDUCxLQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7Z0JBQzNCLFNBQVM7Z0JBQ1QsRUFBRSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDakIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUN4QyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7U0FDWDtJQUNMLENBQUM7SUFDRCxnQ0FBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixZQUFZO1FBQ1osSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzNCLEtBQUs7UUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFySndCO1FBQXhCLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzZDQUE2QjtJQUNsQztRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FBdUI7SUFDdEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQTJCO0lBQzFCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUF1QjtJQUN0QjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FBd0I7SUFOekIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXlKN0I7SUFBRCxnQkFBQztDQXpKRCxBQXlKQyxDQXpKc0MsRUFBRSxDQUFDLFNBQVMsR0F5SmxEO2tCQXpKb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVN1cGVyTGF5b3V0LCB7IFVJU3VwZXJBeGlzIH0gZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmltcG9ydCBpdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgVUlTcHVlclNjcm9sbFZpZXcgZnJvbSAnLi9VSVN1cGVyU2Nyb2xsVmlldyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVUlTdXBlckxheW91dCkgbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBoZWFkZXI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHJlZnJlc2hpbmc6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGZvb3RlcjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgbG9hZGluZzogY2MuTm9kZSA9IG51bGxcbiAgICBwcml2YXRlIGlzUmFuZG9tSGVpZ2h0OiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzUmFuZG9tV2lkdGg6IGJvb2xlYW4gPSBmYWxzZVxuICAgIC8vIOaooeaLn+aVsOaNruaAu+aVsFxuICAgIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDUwXG4gICAgcHJpdmF0ZSBkYXRhczogYW55W10gPSBbXVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7aX1gLFxuICAgICAgICAgICAgICAgIHJhbmRvbVdpZHRoOiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgICAgIHJhbmRvbUhlaWdodDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIC8vIOWIt+aWsOaVsOaNrlxuICAgIHJlZnJlc2hJdGVtRXZlbnQobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgaW5mbyA9IHRoaXMuZGF0YXNbaW5kZXhdXG4gICAgICAgIGlmICh0aGlzLmlzUmFuZG9tSGVpZ2h0KSB7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IGluZm8ucmFuZG9tSGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSYW5kb21XaWR0aCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IGluZm8ucmFuZG9tV2lkdGhcbiAgICAgICAgfVxuICAgICAgICBub2RlLmdldENvbXBvbmVudChpdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlSXRlbS5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHRvSGVhZGVyKCkge1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb0hlYWRlcigwLjUpXG4gICAgfVxuICAgIHRvRm9vdGVyKCkge1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb0Zvb3RlcigwLjUpXG4gICAgfVxuICAgIGFkZEl0ZW0oKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDmt7vliqDmlbDmja5cbiAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLmRhdGFzLmxlbmd0aH1gLFxuICAgICAgICAgICAgcmFuZG9tV2lkdGg6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICByYW5kb21IZWlnaHQ6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgIH0pXG4gICAgICAgIGNjLmxvZyhcIua3u+WKoOaVsOaNriDlvZPliY3mgLvmlbA6XCIsIHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG4gICAgcmVtSXRlbSgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOWIoOmZpOaVsOaNrlxuICAgICAgICB0aGlzLmRhdGFzLnBvcCgpXG4gICAgICAgIGNjLmxvZyhcIuWIoOmZpOaVsOaNriDlvZPliY3mgLvmlbA6XCIsIHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG5cbiAgICByYW5kb21IZWlnaHQoKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDpmo/mnLrlsLrlr7hcbiAgICAgICAgdGhpcy5pc1JhbmRvbUhlaWdodCA9ICF0aGlzLmlzUmFuZG9tSGVpZ2h0XG4gICAgICAgIHRoaXMudG9IZWFkZXIoKVxuICAgIH1cbiAgICByYW5kb21XaWR0aCgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOmaj+acuuWwuuWvuFxuICAgICAgICB0aGlzLmlzUmFuZG9tV2lkdGggPSAhdGhpcy5pc1JhbmRvbVdpZHRoXG4gICAgICAgIHRoaXMudG9IZWFkZXIoKVxuICAgIH1cbiAgICAvLyBcbiAgICAvKipcbiAgICAqIOS4i+aLieWIt+aWsFxuICAgICog5qC45b+D5Luj56CBIOivt+eciyDnrKzkuIDmraUg56ys5LqM5q2lIOWFtuS9meeahOmDveaYr+S4gOS6m+eahOaViOaenOa1i+ivleS7o+eggSDkvaDlj6/ku6Xoh6rlt7Hlrp7njrDku7vkvZXmlYjmnpxcbiAgICAqL1xuICAgIHB1bGxEb3duUmVmcmVzaChzY3JvbGw6IFVJU3B1ZXJTY3JvbGxWaWV3LCBldmVudDogeyByZWZyZXNoOiBib29sZWFuLCBwcm9ncmVzczogbnVtYmVyIH0pIHtcbiAgICAgICAgLy8g5qih5ouf5Luj56CBICDkuIDkuptVSeaViOaenFxuICAgICAgICB0aGlzLmhlYWRlci5vcGFjaXR5ID0gZXZlbnQucHJvZ3Jlc3MgKiAyNTVcbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9ICfmnb7lvIDliLfmlrAnXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSAn5LiL5ouJ5Yi35pawJ1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnNjYWxlWSA9IGV2ZW50LnByb2dyZXNzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci5zY2FsZVggPSBldmVudC5wcm9ncmVzc1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZXZlbnQucmVmcmVzaD10cnVlIOS7o+ihqOmcgOimgeWIt+aWsOaVsOaNrlxuICAgICAgICBpZiAoZXZlbnQucmVmcmVzaCkge1xuICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5byC5q2l5Yi35paw5pWw5o2uXCIpXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hpbmcuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8g56ys5LiA5q2lICDmqKHmi5/liLfmlrDmlbDmja5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbaV0udGl0bGUgPSBgJHtkYXRhLnRpdGxlfSAtICR7aX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmqKHmi5/lvILmraXlu7bov59cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaGluZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIOesrOS6jOatpSDliLfmlrBcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliLfmlrDmiJDlip/vvIFcIilcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5LiK5ouJ5Yqg6L29XG4gICAgICog5qC45b+D5Luj56CBIOivt+eciyDnrKzkuIDmraUg56ys5LqM5q2lIOWFtuS9meeahOmDveaYr+S4gOS6m+eahOaViOaenOa1i+ivleS7o+eggSDkvaDlj6/ku6Xoh6rlt7Hlrp7njrDku7vkvZXmlYjmnpxcbiAgICAgKi9cbiAgICBwdWxsVXBMb2FkKHNjcm9sbDogVUlTcHVlclNjcm9sbFZpZXcsIGV2ZW50OiB7IHJlZnJlc2g6IGJvb2xlYW4sIHByb2dyZXNzOiBudW1iZXIgfSkge1xuICAgICAgICAvLyDmqKHmi5/ku6PnoIEg5LiA5LqbVUnmlYjmnpxcbiAgICAgICAgdGhpcy5mb290ZXIub3BhY2l0eSA9IGV2ZW50LnByb2dyZXNzICogMjU1XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHtcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnNjYWxlWSA9IGV2ZW50LnByb2dyZXNzXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvb3Rlci5zY2FsZVggPSBldmVudC5wcm9ncmVzc1xuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzcyA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZvb3Rlci5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSAn5p2+5byA5Yqg6L295pu05aSaJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb290ZXIuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gJ+S4iuaLieWKoOi9vSdcbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy8gZXZlbnQucmVmcmVzaD10cnVlIOS7o+ihqOmcgOimgeWKoOi9veaVsOaNrlxuICAgICAgICBpZiAoZXZlbnQucmVmcmVzaCkge1xuICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5byC5q2l5Yqg6L29MTDmnaHmlbDmja5cIilcblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIC8vIOesrOS4gOatpSAg5qih5ouf5aKe5YqgMTDmnaHmlbDmja5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLmRhdGFzLmxlbmd0aH1gLFxuICAgICAgICAgICAgICAgICAgICByYW5kb21XaWR0aDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tSGVpZ2h0OiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmqKHmi5/lvILmraXlu7bov5/liqDovb1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIOesrOS6jOatpSDliLfmlrBcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLmlbDmja7liqDovb3miJDlip/vvIFcIilcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25SZW1vdmVJdGVtKGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgLy8g5Yig6Zmk54K55Ye755qE6YKj5p2h5pWw5o2uXG4gICAgICAgIHRoaXMuZGF0YXMuc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICAvLyDliLfmlrBcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuXG59XG4iXX0=