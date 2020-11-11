
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVN1cGVyTGF5b3V0LCB7IFVJU3VwZXJBeGlzIH0gZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmltcG9ydCBpdGVtIGZyb20gJy4vaXRlbSc7XG5pbXBvcnQgVUlTcHVlclNjcm9sbFZpZXcgZnJvbSAnLi9VSVN1cGVyU2Nyb2xsVmlldyc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHRlc3RQYW5lbCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG5cbiAgICBAcHJvcGVydHkoVUlTdXBlckxheW91dCkgbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBoZWFkZXI6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIHJlZnJlc2hpbmc6IGNjLk5vZGUgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGZvb3RlcjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgbG9hZGluZzogY2MuTm9kZSA9IG51bGxcbiAgICBwcml2YXRlIGlzUmFuZG9tSGVpZ2h0OiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzUmFuZG9tV2lkdGg6IGJvb2xlYW4gPSBmYWxzZVxuICAgIC8vIOaooeaLn+aVsOaNruaAu+aVsFxuICAgIHByaXZhdGUgdG90YWw6IG51bWJlciA9IDUwXG4gICAgcHJpdmF0ZSBkYXRhczogYW55W10gPSBbXVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogYCR7aX1gLFxuICAgICAgICAgICAgICAgIHJhbmRvbVdpZHRoOiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgICAgIHJhbmRvbUhlaWdodDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIC8vIOWIt+aWsOaVsOaNrlxuICAgIHJlZnJlc2hJdGVtRXZlbnQobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBsZXQgaW5mbyA9IHRoaXMuZGF0YXNbaW5kZXhdXG4gICAgICAgIGlmICh0aGlzLmlzUmFuZG9tSGVpZ2h0KSB7XG4gICAgICAgICAgICBub2RlLmhlaWdodCA9IGluZm8ucmFuZG9tSGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNSYW5kb21XaWR0aCkge1xuICAgICAgICAgICAgbm9kZS53aWR0aCA9IGluZm8ucmFuZG9tV2lkdGhcbiAgICAgICAgfVxuICAgICAgICBub2RlLmdldENvbXBvbmVudChpdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlSXRlbS5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIHRvSGVhZGVyKCkge1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb0hlYWRlcigwLjUpXG4gICAgfVxuICAgIHRvRm9vdGVyKCkge1xuICAgICAgICB0aGlzLmxheW91dC5zY3JvbGxUb0Zvb3RlcigwLjUpXG4gICAgfVxuICAgIGFkZEl0ZW0oKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDmt7vliqDmlbDmja5cbiAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgIHRpdGxlOiBgJHt0aGlzLmRhdGFzLmxlbmd0aH1gLFxuICAgICAgICAgICAgcmFuZG9tV2lkdGg6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICByYW5kb21IZWlnaHQ6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgIH0pXG4gICAgICAgIGNjLmxvZyhcIua3u+WKoOaVsOaNriDlvZPliY3mgLvmlbA6XCIsIHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG4gICAgcmVtSXRlbSgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOWIoOmZpOaVsOaNrlxuICAgICAgICB0aGlzLmRhdGFzLnBvcCgpXG4gICAgICAgIGNjLmxvZyhcIuWIoOmZpOaVsOaNriDlvZPliY3mgLvmlbA6XCIsIHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG5cbiAgICByYW5kb21IZWlnaHQoKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDpmo/mnLrlsLrlr7hcbiAgICAgICAgdGhpcy5pc1JhbmRvbUhlaWdodCA9ICF0aGlzLmlzUmFuZG9tSGVpZ2h0XG4gICAgICAgIHRoaXMudG9IZWFkZXIoKVxuICAgIH1cbiAgICByYW5kb21XaWR0aCgpIHtcbiAgICAgICAgLy8g5rWL6K+V5Luj56CBIOmaj+acuuWwuuWvuFxuICAgICAgICB0aGlzLmlzUmFuZG9tV2lkdGggPSAhdGhpcy5pc1JhbmRvbVdpZHRoXG4gICAgICAgIHRoaXMudG9IZWFkZXIoKVxuICAgIH1cbiAgICAvKipcbiAgICAqIOS4i+aLieWIt+aWsFxuICAgICog5qC45b+D5Luj56CBIOivt+eciyDnrKzkuIDmraUg56ys5LqM5q2lIOWFtuS9meeahOmDveaYr+S4gOS6m+eahOaViOaenOa1i+ivleS7o+eggSDkvaDlj6/ku6Xoh6rlt7Hlrp7njrDku7vkvZXmlYjmnpxcbiAgICAqL1xuXG4gICAgcHVsbERvd25SZWZyZXNoKHNjcm9sbDogVUlTcHVlclNjcm9sbFZpZXcsIGV2ZW50OiB7IHJlZnJlc2g6IGJvb2xlYW4sIHByb2dyZXNzOiBudW1iZXIgfSkge1xuICAgICAgICAvLyDmqKHmi5/ku6PnoIEgIOS4gOS6m1VJ5pWI5p6cXG4gICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5oZWFkZXIsIGV2ZW50LCAn5p2+5byA5Yi35paw5ZOmJywgJ+e7p+e7rea7kScpXG5cbiAgICAgICAgLy8gZXZlbnQucmVmcmVzaD10cnVlIOS7o+ihqOmcgOimgeWIt+aWsOaVsOaNrlxuICAgICAgICBpZiAoZXZlbnQucmVmcmVzaCkge1xuICAgICAgICAgICAgY2MubG9nKFwi5byA5aeL5byC5q2l5Yi35paw5pWw5o2uXCIpXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hpbmcuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8g56ys5LiA5q2lICDmqKHmi5/liLfmlrDmlbDmja5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGFzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXNbaV0udGl0bGUgPSBgJHtkYXRhLnRpdGxlfSAtICR7aX1gXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmqKHmi5/lvILmraXlu7bov59cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaGluZy5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgICAgIC8vIOesrOS6jOatpSDliLfmlrBcbiAgICAgICAgICAgICAgICBjYy5sb2coXCLliLfmlrDmiJDlip/vvIFcIilcbiAgICAgICAgICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5LiK5ouJ5Yqg6L29XG4gICAgICog5qC45b+D5Luj56CBIOivt+eciyDnrKzkuIDmraUg56ys5LqM5q2lIOWFtuS9meeahOmDveaYr+S4gOS6m+eahOaViOaenOa1i+ivleS7o+eggSDkvaDlj6/ku6Xoh6rlt7Hlrp7njrDku7vkvZXmlYjmnpxcbiAgICAgKi9cbiAgICBwdWxsVXBMb2FkKHNjcm9sbDogVUlTcHVlclNjcm9sbFZpZXcsIGV2ZW50OiB7IHJlZnJlc2g6IGJvb2xlYW4sIHByb2dyZXNzOiBudW1iZXIgfSkge1xuICAgICAgICAvLyDmqKHmi5/ku6PnoIEg5LiA5LqbVUnmlYjmnpxcbiAgICAgICAgdGhpcy5wbGF5QW5pbSh0aGlzLmZvb3RlciwgZXZlbnQsICfmnb7lvIDliqDovb3mm7TlpJonLCAn57un57ut5ruRJylcblxuICAgICAgICAvLyBldmVudC5yZWZyZXNoPXRydWUg5Luj6KGo6ZyA6KaB5Yqg6L295pWw5o2uXG4gICAgICAgIGlmIChldmVudC5yZWZyZXNoKSB7XG4gICAgICAgICAgICBjYy5sb2coXCLlvIDlp4vlvILmraXliqDovb0xMOadoeaVsOaNrlwiKVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgLy8g56ys5LiA5q2lICDmqKHmi5/lop7liqAxMOadoeaVsOaNrlxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGAke3RoaXMuZGF0YXMubGVuZ3RofWAsXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbVdpZHRoOiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgICAgICAgICByYW5kb21IZWlnaHQ6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaooeaLn+W8guatpeW7tui/n+WKoOi9vVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgLy8g56ys5LqM5q2lIOWIt+aWsFxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaVsOaNruWKoOi9veaIkOWKn++8gVwiKVxuICAgICAgICAgICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgIH1cbiAgICBvblJlbW92ZUl0ZW0oaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyDliKDpmaTngrnlh7vnmoTpgqPmnaHmlbDmja5cbiAgICAgICAgdGhpcy5kYXRhcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgICAgIC8vIOWIt+aWsFxuICAgICAgICB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aClcbiAgICB9XG5cbiAgICAvKiog5rWL6K+V5Luj56CBICovXG4gICAgcHJpdmF0ZSBwbGF5QW5pbShub2RlOiBjYy5Ob2RlLCBldmVudDogeyByZWZyZXNoOiBib29sZWFuLCBwcm9ncmVzczogbnVtYmVyIH0sIG1zZzE6IHN0cmluZywgbXNnMjogc3RyaW5nKSB7XG4gICAgICAgIG5vZGUub3BhY2l0eSA9IGV2ZW50LnByb2dyZXNzICogMjU1XG4gICAgICAgIGxldCBzY2FsZSA9IHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCA/IGNjLnYyKDEsIGV2ZW50LnByb2dyZXNzKSA6IGNjLnYyKGV2ZW50LnByb2dyZXNzLCAxKVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3MgPj0gMSkge1xuICAgICAgICAgICAgbm9kZS5nZXRDb21wb25lbnRJbkNoaWxkcmVuKGNjLkxhYmVsKS5zdHJpbmcgPSBtc2cxXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IG1zZzJcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3MgPj0gMS4zKSB7XG4gICAgICAgICAgICBpZiAoIW5vZGVbJ3BsYXlpbmcnXSkge1xuICAgICAgICAgICAgICAgIG5vZGUucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC42MTgsIDEsIDEpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjIzNikpKVxuICAgICAgICAgICAgICAgIG5vZGVbJ3BsYXlpbmcnXSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgbm9kZVsncGxheWluZyddID0gZmFsc2VcbiAgICAgICAgICAgIG5vZGUuc2V0U2NhbGUoc2NhbGUpXG4gICAgICAgIH1cbiAgICB9XG5cbn1cbiJdfQ==
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
        this.node.on(cc.Node.EventType.CHILD_REORDER, this.listenFooter, this);
    };
    UISuperLayout.prototype.getUsedScaleValue = function (value) {
        return this.affectedByScale ? Math.abs(value) : 1;
    };
    /** 设置最大item数量 */
    UISuperLayout.prototype.total = function (value) {
        this.scrollView.stopAutoScroll();
        this.scrollView.release();
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
    UISuperLayout.prototype.listenFooter = function () {
        this.header.off(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.header.off(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.header.off(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
        this.footer.off(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.footer.off(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.footer.off(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
        this.footer.on(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.footer.on(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.footer.on(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
    };
    UISuperLayout.prototype.resetScrollView = function (event) {
        this.scrollView.reset();
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
                var script = child_1.getComponent(UISuperItem_1.default) || child_1.addComponent(UISuperItem_1.default);
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
        var width = node.width * this.getUsedScaleValue(node.scaleX) * 2;
        var height = -node.height * this.getUsedScaleValue(node.scaleY) * 2;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    UISuperLayout.prototype.isOutOfBoundaryBottom = function (node) {
        var width = -node.width * this.getUsedScaleValue(node.scaleX) * 2;
        var height = node.height * this.getUsedScaleValue(node.scaleY) * 2;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3B1ZXJTY3JvbGxWaWV3IGZyb20gJy4vVUlTdXBlclNjcm9sbFZpZXcnO1xuaW1wb3J0IFVJU3B1ZXJJdGVtIGZyb20gJy4vVUlTdXBlckl0ZW0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmV4cG9ydCBlbnVtIFVJU3VwZXJBeGlzIHtcbiAgICBIT1JJWk9OVEFMID0gMCxcbiAgICBWRVJUSUNBTCA9IDFcbn1cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVN1cGVyTGF5b3V0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5FbnVtKFVJU3VwZXJBeGlzKSxcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5o6S5YiX5pa55ZCRXCJcbiAgICB9KSBzdGFydEF4aXM6IFVJU3VwZXJBeGlzID0gVUlTdXBlckF4aXMuVkVSVElDQUxcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIrovrnot51cIlxuICAgIH0pIHBhZGRpbmdUb3A6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIvovrnot51cIlxuICAgIH0pIHBhZGRpbmdCb3R0b206IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlt6bovrnot51cIlxuICAgIH0pIHBhZGRpbmdMZWZ0OiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5Y+z6L656LedXCJcbiAgICB9KSBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLpl7TpmpRcIlxuICAgIH0pIHNwYWNpbmc6IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlj6/lpI3nlKjnmoRJdGVt5pWwXCJcbiAgICB9KSBtYXhQcmVmYWJUb3RhbDogbnVtYmVyID0gMjBcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIml0ZW0gUHJlZmFiXCJcbiAgICB9KSBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcblxuICAgIEBwcm9wZXJ0eSBhZmZlY3RlZEJ5U2NhbGU6IGJvb2xlYW4gPSB0cnVlXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5L2/55SoaXRlbeWtkOiKgueCueWMheWbtOebklwiXG4gICAgfSkgY2hpbGRCb3VuZGluZ0JveDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBAcHJvcGVydHkoY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcikgcmVmcmVzaEl0ZW1FdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgbWF4SXRlbVRvdGFsOiBudW1iZXIgPSAwXG5cbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3OiBVSVNwdWVyU2Nyb2xsVmlldyA9IG51bGxcbiAgICBwdWJsaWMgZ2V0IHNjcm9sbFZpZXcoKTogVUlTcHVlclNjcm9sbFZpZXcge1xuICAgICAgICBpZiAoIXRoaXMuX3Njcm9sbFZpZXcpIHtcbiAgICAgICAgICAgIHRoaXMuX3Njcm9sbFZpZXcgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoVUlTcHVlclNjcm9sbFZpZXcpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njcm9sbFZpZXdcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IGhlYWRlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5jaGlsZHJlblswXVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXQgZm9vdGVyKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmNoaWxkcmVuW3RoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gMV1cbiAgICB9XG4gICAgLy8g6YeN5YaZXG4gICAgcHVibGljIGdldENvbnRlbnRTaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyIHx8ICF0aGlzLmZvb3RlcikgcmV0dXJuIHRoaXMuc2Nyb2xsVmlldy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IHNpemUgPSBjYy5TaXplLlpFUk9cbiAgICAgICAgbGV0IF9oZWFkZXIsIF9mb290ZXJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGRCb3VuZGluZ0JveCkge1xuICAgICAgICAgICAgLy8g6K+l6L655qGG5YyF5ZCr6Ieq6Lqr5ZKM5bey5r+A5rS755qE5a2Q6IqC54K555qE5LiW55WM6L655qGGICjms6jmhI/vvIHkvb/nlKjmraTmlrnms5Xml7Yg5bqV5bGC5Luj56CB5Lya6YGN5Y6G5omA5pyJ5a2Q6IqC54K5IOW5tuWMheWQq+aJgOacieWtkOiKgueCueeahOS4lueVjOi+ueahhiDlrZDoioLngrnotorlpJrmgKfog73otorlt64pXG4gICAgICAgICAgICBfaGVhZGVyID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mih0aGlzLmhlYWRlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS54TWluLCB0aGlzLmhlYWRlci5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS55TWF4KSlcbiAgICAgICAgICAgIF9mb290ZXIgPSB0aGlzLm5vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHRoaXMuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnhNYXgsIHRoaXMuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnlNaW4pKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6K+l6L655qGG5YyF5ZCr6Ieq6Lqr55qE5LiW55WM6L655qGGICjov5nph4zkuLvopoHmmK/kv67mlLlnZXRCb3VuZGluZ0JveFRvV29ybGTku6PnoIEg5Y675o6J6YGN5Y6G5a2Q6IqC54K555qE5Luj56CBKVxuICAgICAgICAgICAgLy8g6L+Z6YeM5Y+q6ZyA6KaB6K6h566XaXRlbeacrOi6q+eahOS4lueVjOi+ueahhuWNs+WPryAo5oCn6IO95pyA5LyYKVxuICAgICAgICAgICAgX2hlYWRlciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5oZWFkZXJbJ2dldEJvdW5kaW5nJ10oKS54TWluLCB0aGlzLmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnlNYXgpKVxuICAgICAgICAgICAgX2Zvb3RlciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIodGhpcy5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS54TWF4LCB0aGlzLmZvb3RlclsnZ2V0Qm91bmRpbmcnXSgpLnlNaW4pKVxuICAgICAgICB9XG4gICAgICAgIHNpemUud2lkdGggPSBfZm9vdGVyLnggLSBfaGVhZGVyLnggKyB0aGlzLnBhZGRpbmdMZWZ0ICsgdGhpcy5wYWRkaW5nUmlnaHRcbiAgICAgICAgc2l6ZS5oZWlnaHQgPSBfaGVhZGVyLnkgLSBfZm9vdGVyLnkgKyB0aGlzLnBhZGRpbmdUb3AgKyB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICAgICAgcmV0dXJuIHNpemVcbiAgICB9XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSA9IHRoaXMuZ2V0Q29udGVudFNpemUuYmluZCh0aGlzKVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuQ0hJTERfUkVPUkRFUiwgdGhpcy5saXN0ZW5Gb290ZXIsIHRoaXMpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRVc2VkU2NhbGVWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFmZmVjdGVkQnlTY2FsZSA/IE1hdGguYWJzKHZhbHVlKSA6IDE7XG4gICAgfVxuICAgIC8qKiDorr7nva7mnIDlpKdpdGVt5pWw6YePICovXG4gICAgcHVibGljIHRvdGFsKHZhbHVlOiBudW1iZXIpOiB0aGlzIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnJlbGVhc2UoKVxuICAgICAgICB0aGlzLm1heEl0ZW1Ub3RhbCA9IHZhbHVlXG4gICAgICAgIHRoaXMubW9yZVJlbUxlc3NBZGQoKVxuICAgICAgICBsZXQgb2Zmc2V0ID0gMFxuICAgICAgICBpZiAodGhpcy5mb290ZXIgJiYgdGhpcy5mb290ZXJbJ2luZGV4J10gKyAxID49IHRoaXMubWF4SXRlbVRvdGFsKSB7XG4gICAgICAgICAgICBvZmZzZXQgPSB0aGlzLmZvb3RlclsnaW5kZXgnXSArIDEgLSB0aGlzLm1heEl0ZW1Ub3RhbFxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IGNoaWxkWydpbmRleCddIC0gb2Zmc2V0XG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hJdGVtKGNoaWxkLCBjaGlsZFsnaW5kZXgnXSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY2FsY3VsYXRlQm91bmRhcnkoKVxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbiAgICAvKiog5rua5Yqo5Yiw5aS06YOoICovXG4gICAgcHVibGljIHNjcm9sbFRvSGVhZGVyKHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5rua5Yqo5Yiw5bC+6YOoICovXG4gICAgcHVibGljIHNjcm9sbFRvRm9vdGVyKHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMKSB7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQm90dG9tKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBsaXN0ZW5Gb290ZXIoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VELCB0aGlzLnJlc2V0U2Nyb2xsVmlldywgdGhpcylcbiAgICAgICAgdGhpcy5oZWFkZXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNDQUxFX0NIQU5HRUQsIHRoaXMucmVzZXRTY3JvbGxWaWV3LCB0aGlzKVxuICAgICAgICB0aGlzLmhlYWRlci5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLnJlc2V0U2Nyb2xsVmlldywgdGhpcylcblxuICAgICAgICB0aGlzLmZvb3Rlci5vZmYoY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgdGhpcy5yZXNldFNjcm9sbFZpZXcsIHRoaXMpXG4gICAgICAgIHRoaXMuZm9vdGVyLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5TQ0FMRV9DSEFOR0VELCB0aGlzLnJlc2V0U2Nyb2xsVmlldywgdGhpcylcbiAgICAgICAgdGhpcy5mb290ZXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5yZXNldFNjcm9sbFZpZXcsIHRoaXMpXG4gICAgICAgIFxuICAgICAgICB0aGlzLmZvb3Rlci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VELCB0aGlzLnJlc2V0U2Nyb2xsVmlldywgdGhpcylcbiAgICAgICAgdGhpcy5mb290ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuU0NBTEVfQ0hBTkdFRCwgdGhpcy5yZXNldFNjcm9sbFZpZXcsIHRoaXMpXG4gICAgICAgIHRoaXMuZm9vdGVyLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5yZXNldFNjcm9sbFZpZXcsIHRoaXMpXG4gICAgfVxuICAgIHB1YmxpYyByZXNldFNjcm9sbFZpZXcoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcucmVzZXQoKVxuICAgIH1cbiAgICBwcml2YXRlIHNjcm9sbFRvVG9wKHRpbWVJblNlY29uZD86IG51bWJlciwgYXR0ZW51YXRlZD86IGJvb2xlYW4pIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRBeGlzICE9IFVJU3VwZXJBeGlzLlZFUlRJQ0FMKSByZXR1cm5cbiAgICAgICAgdGhpcy5yZWZyZXNoU3RhcnQoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZGVsdGFNb3ZlID0gY2MudjIoMCwgLTEpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgfVxuICAgIHByaXZhdGUgc2Nyb2xsVG9Cb3R0b20odGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5zdGFydEF4aXMgIT0gVUlTdXBlckF4aXMuVkVSVElDQUwpIHJldHVyblxuICAgICAgICB0aGlzLnJlZnJlc2hFbmQoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZGVsdGFNb3ZlID0gY2MudjIoMCwgMSlcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGl0ZW3lsLrlr7jkuI3kuIDoh7Tml7YgaXRlbeS8muWcqOW9k+WJjeW4p+mHjee9ruS9jee9riDnhLblkI7lnKjkuIvkuIDluKfmu5rliqjorqHnrpcgKOi/memHjOWFt+S9k+W7tui/n+WkmuWwkeW4p+S4jeehruWumu+8jOWboOS4uuS5n+iuuGl0ZW3mm7TmlrDlsLrlr7jmmK/lvILmraXnmoTvvIzov5nph4zkuI3ljrvogIPomZEpXG4gICAgICAgICAqIOm7mOiupOWPquaYr+iupOS4uuW9k+WJjeW4p+S8muabtOaWsOWujOaJgOaciWl0ZW3lsLrlr7hcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpKVxuICAgIH1cbiAgICBwcml2YXRlIHNjcm9sbFRvTGVmdCh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMKSByZXR1cm5cbiAgICAgICAgdGhpcy5yZWZyZXNoU3RhcnQoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuZGVsdGFNb3ZlID0gY2MudjIoMSwgMClcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvTGVmdCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgfVxuICAgIHByaXZhdGUgc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0QXhpcyAhPSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMKSByZXR1cm5cbiAgICAgICAgdGhpcy5yZWZyZXNoRW5kKClcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmRlbHRhTW92ZSA9IGNjLnYyKC0xLCAwKVxuICAgICAgICAvKipcbiAgICAgICAgICogaXRlbeWwuuWvuOS4jeS4gOiHtOaXtiBpdGVt5Lya5Zyo5b2T5YmN5bin6YeN572u5L2N572uIOeEtuWQjuWcqOS4i+S4gOW4p+a7muWKqOiuoeeulyAo6L+Z6YeM5YW35L2T5bu26L+f5aSa5bCR5bin5LiN56Gu5a6a77yM5Zug5Li65Lmf6K64aXRlbeabtOaWsOWwuuWvuOaYr+W8guatpeeahO+8jOi/memHjOS4jeWOu+iAg+iZkSlcbiAgICAgICAgICog6buY6K6k5Y+q5piv6K6k5Li65b2T5YmN5bin5Lya5pu05paw5a6M5omA5pyJaXRlbeWwuuWvuFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4gdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvUmlnaHQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKSlcbiAgICB9XG4gICAgcHJpdmF0ZSByZWZyZXNoU3RhcnQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5ub2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMubm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbShjaGlsZCwgaSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHJlZnJlc2hFbmQoKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubWF4SXRlbVRvdGFsXG4gICAgICAgIC8vIOS4iuebkeWQrOS4i1xuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ldXG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IC0taW5kZXhcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW0oY2hpbGQsIGluZGV4KVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgbW9yZVJlbUxlc3NBZGQoKSB7XG4gICAgICAgIC8vIOS4jeWkn+eahOaDheWGteS4i1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudFxuICAgICAgICBmb3IgKGxldCBpID0gaW5kZXg7IGkgPCB0aGlzLm1heEl0ZW1Ub3RhbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSA+PSB0aGlzLm1heFByZWZhYlRvdGFsKSBicmVha1xuICAgICAgICAgICAgaWYgKCF0aGlzLm5vZGUuY2hpbGRyZW5baV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYilcbiAgICAgICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IGlcbiAgICAgICAgICAgICAgICBsZXQgc2NyaXB0ID0gY2hpbGQuZ2V0Q29tcG9uZW50KFVJU3B1ZXJJdGVtKSB8fCBjaGlsZC5hZGRDb21wb25lbnQoVUlTcHVlckl0ZW0pXG4gICAgICAgICAgICAgICAgLy8g5bCG6L+Z5LiJ5Liq5pa55rOV5Lul5Zue6LCD55qE5pa55byP5Lyg6YCS6L+H5Y67ICjlr7nlpJbkuI3lhazlvIDosIPnlKgpXG4gICAgICAgICAgICAgICAgc2NyaXB0LmluaXQodGhpcywgdGhpcy5yZWZyZXNoSXRlbS5iaW5kKHRoaXMpLCB0aGlzLmlzT3V0T2ZCb3VuZGFyeVRvcC5iaW5kKHRoaXMpLCB0aGlzLmlzT3V0T2ZCb3VuZGFyeUJvdHRvbS5iaW5kKHRoaXMpKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlsZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlpJrkvZnnmoTmg4XlhrXkuItcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID4gdGhpcy5tYXhJdGVtVG90YWwpIHtcbiAgICAgICAgICAgIHZhciB0b3RhbCA9IHRoaXMubm9kZS5jaGlsZHJlbkNvdW50IC0gdGhpcy5tYXhJdGVtVG90YWxcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuZm9vdGVyXG4gICAgICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZUNoaWxkKGNoaWxkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaEl0ZW0odGFyZ2V0OiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnJlZnJlc2hJdGVtRXZlbnRzLCB0YXJnZXQsIGluZGV4KVxuICAgIH1cbiAgICBwcml2YXRlIGlzT3V0T2ZCb3VuZGFyeVRvcChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCB3aWR0aCA9IG5vZGUud2lkdGggKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVYKSAqIDJcbiAgICAgICAgbGV0IGhlaWdodCA9IC1ub2RlLmhlaWdodCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVkpICogMlxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KGNjLnYyKHdpZHRoLCBoZWlnaHQpKVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5Qm90dG9tKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gLW5vZGUud2lkdGggKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVYKSAqIDJcbiAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUuaGVpZ2h0ICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWSkgKiAyXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIod2lkdGgsIGhlaWdodCkpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG59XG4iXX0=
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
var EPSILON = 1e-4;
var UISpuerScrollView = /** @class */ (function (_super) {
    __extends(UISpuerScrollView, _super);
    function UISpuerScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerOutOffset = 200;
        _this.headerHeight = 100;
        _this.footerOutOffset = 200;
        _this.footerHeight = 100;
        _this.pullDownEvents = [];
        _this.pullUpEvents = [];
        _this.deltaMove = cc.Vec2.ZERO;
        _this.isMoveHeader = false;
        _this.isMoveFooter = false;
        _this.isLockHeader = false;
        _this.isLockFooter = false;
        _this.isAutoBack = false;
        _this.isEmitProgress = false;
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
    Object.defineProperty(UISpuerScrollView.prototype, "isHeader", {
        get: function () {
            var _a, _b;
            return ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.header['index']) == 0 || false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        get: function () {
            var _a, _b, _c;
            return ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.footer['index']) == ((_c = this.layout) === null || _c === void 0 ? void 0 : _c.maxItemTotal) - 1 || false;
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
        if (this.isLockHeader || this.isLockFooter) {
            this.isMoveHeader = false;
            this.isMoveFooter = false;
            this.isLockHeader = false;
            this.isLockFooter = false;
            this.isEmitProgress = true;
            this['_outOfBoundaryAmountDirty'] = true;
            this['_processInertiaScroll']();
        }
    };
    /**
     * 重置列表
     * 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(高度|缩放|尺寸) 时保证内容显示正确
     */
    UISpuerScrollView.prototype.reset = function () {
        this['_outOfBoundaryAmountDirty'] = true;
        var offset = this.getHowMuchOutOfBoundary();
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            this.isEmitProgress = false;
            this['_processInertiaScroll']();
        }
    };
    UISpuerScrollView.prototype._onTouchMoved = function (event, captureListeners) {
        _super.prototype['_onTouchMoved'].call(this, event, captureListeners);
        var delta = cc.v2(event.getLocation().x - event.getPreviousLocation().x, event.getLocation().y - event.getPreviousLocation().y);
        if (this.vertical && delta.y != 0 || this.horizontal && delta.x != 0) {
            this.deltaMove = delta;
        }
        this.isAutoBack = false;
        // 判断是否需要计算
        if (this.isCalculPull) {
            this.isEmitProgress = true;
            var outOfBoundary = this.getHowMuchOutOfBoundary();
            var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
            if (offset > 0 && this.isHeader) {
                this.isMoveHeader = offset >= this.headerOutOffset;
            }
            else if (offset < 0 && this.isFooter) {
                this.isMoveFooter = offset <= -this.footerOutOffset;
            }
        }
    };
    UISpuerScrollView.prototype._dispatchEvent = function (event) {
        _super.prototype['_dispatchEvent'].call(this, event);
        if (event == 'scroll-ended') {
            this.deltaMove = cc.Vec2.ZERO;
            this.isMoveHeader = false;
            this.isMoveFooter = false;
            this.isAutoBack = false;
            this.isEmitProgress = false;
        }
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
            if (this.isHeader && this.isLockHeader) {
                offset += this.headerHeight;
            }
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
            if (this.isFooter && this.isLockFooter) {
                offset -= this.footerHeight;
            }
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
            if (this.isHeader && this.isLockHeader) {
                offset -= this.headerHeight;
            }
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
            if (this.isFooter && this.isLockFooter) {
                offset += this.footerHeight;
            }
        }
        return offset;
    };
    UISpuerScrollView.prototype._startAutoScroll = function (deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
            if (this.isMoveHeader && !this.isLockHeader) {
                this.isLockHeader = true;
                this.vertical && (deltaMove.y -= this.headerHeight);
                this.horizontal && (deltaMove.x += this.headerHeight);
                this.emitPullDownEvent({ refresh: true, progress: 1 });
            }
            if (this.isMoveFooter && !this.isLockFooter) {
                this.isLockFooter = true;
                this.vertical && (deltaMove.y += this.footerHeight);
                this.horizontal && (deltaMove.x -= this.footerHeight);
                this.emitPullUpEvent({ refresh: true, progress: 1 });
            }
        }
        _super.prototype['_startAutoScroll'].call(this, deltaMove, timeInSecond, attenuated);
    };
    UISpuerScrollView.prototype._isNecessaryAutoScrollBrake = function () {
        var result = _super.prototype['_isNecessaryAutoScrollBrake'].call(this);
        if (result) {
            this.isAutoBack = true;
        }
        return result;
    };
    UISpuerScrollView.prototype._updateScrollBar = function (outOfBoundary) {
        _super.prototype['_updateScrollBar'].call(this, outOfBoundary);
        if (!this.isCalculPull)
            return;
        // 自动回弹时不发送事件 只有在手动滑动时才触发
        if (this['_autoScrollBraking']) {
            this.emitPullDownEvent({ refresh: false, progress: 0 });
            this.emitPullUpEvent({ refresh: false, progress: 0 });
            this.isAutoBack = true;
        }
        if (this.isAutoBack)
            return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0 && this.isHeader && !this.isLockHeader) {
            // let progress = Math.min(offset / this.headerOutOffset, 1)
            var progress = offset / this.headerOutOffset;
            this.emitPullDownEvent({ refresh: false, progress: progress });
        }
        else if (offset < 0 && this.isFooter && !this.isLockFooter) {
            // let progress = Math.min(-offset / this.footerOutOffset, 1)
            var progress = -offset / this.footerOutOffset;
            this.emitPullUpEvent({ refresh: false, progress: progress });
        }
        else {
            this.emitPullDownEvent({ refresh: false, progress: 0 });
            this.emitPullUpEvent({ refresh: false, progress: 0 });
        }
    };
    UISpuerScrollView.prototype.emitPullDownEvent = function (data) {
        if (this.isEmitProgress) {
            cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data);
        }
    };
    UISpuerScrollView.prototype.emitPullUpEvent = function (data) {
        if (this.isEmitProgress) {
            cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data);
        }
    };
    __decorate([
        property({
            displayName: "顶部偏移量",
            tooltip: "下拉时超过此偏移会发送下拉事件"
        })
    ], UISpuerScrollView.prototype, "headerOutOffset", void 0);
    __decorate([
        property({
            displayName: "顶部高度",
            tooltip: "当下拉事件触发时 顶部追加的高度"
        })
    ], UISpuerScrollView.prototype, "headerHeight", void 0);
    __decorate([
        property({
            displayName: "底部偏移量",
            tooltip: "上拉时超过此偏移会发送上拉事件"
        })
    ], UISpuerScrollView.prototype, "footerOutOffset", void 0);
    __decorate([
        property({
            displayName: "底部高度",
            tooltip: "当上拉事件触发时 底部追加的高度"
        })
    ], UISpuerScrollView.prototype, "footerHeight", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBNEM7QUFDdEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBRXJCO0lBQStDLHFDQUFhO0lBQTVEO1FBQUEscUVBZ1BDO1FBNU9NLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBSTdCLGtCQUFZLEdBQVcsR0FBRyxDQUFBO1FBSzFCLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBSzdCLGtCQUFZLEdBQVcsR0FBRyxDQUFBO1FBSTFCLG9CQUFjLEdBQWdDLEVBQUUsQ0FBQTtRQUloRCxrQkFBWSxHQUFnQyxFQUFFLENBQUE7UUFFMUMsZUFBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFBO1FBSXZCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGtCQUFZLEdBQVksS0FBSyxDQUFBO1FBQzdCLGdCQUFVLEdBQVksS0FBSyxDQUFBO1FBQzNCLG9CQUFjLEdBQVksS0FBSyxDQUFBO1FBQy9CLGFBQU8sR0FBa0IsSUFBSSxDQUFBOztJQTBNekMsQ0FBQztJQW5ORyxzQkFBVyxtQ0FBSTthQUFmLGNBQTZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFDbkQsc0JBQVcsNENBQWE7YUFDeEIsY0FBNkIsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQSxDQUFDLENBQUM7YUFENUQsVUFBeUIsS0FBYyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBUzNFLHNCQUFZLHFDQUFNO2FBQWxCO1lBQ0ksSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyx1QkFBYSxDQUFDLENBQUE7YUFDMUQ7WUFDRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFDdkIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBWSx1Q0FBUTthQUFwQjs7WUFDSSxPQUFPLE9BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxLQUFJLE9BQUEsSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFDLE9BQU8sTUFBSyxDQUFDLElBQUksS0FBSyxDQUFBO1FBQzVFLENBQUM7OztPQUFBO0lBQ0Qsc0JBQVksdUNBQVE7YUFBcEI7O1lBQ0ksT0FBTyxPQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sS0FBSSxPQUFBLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sQ0FBQyxPQUFPLE1BQUssT0FBQSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxZQUFZLElBQUcsQ0FBQyxJQUFJLEtBQUssQ0FBQTtRQUN4RyxDQUFDOzs7T0FBQTtJQUVELHNCQUFZLDJDQUFZO1FBRHhCLHFDQUFxQzthQUNyQztZQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUN6RSxDQUFDOzs7T0FBQTtJQUNNLDZDQUFpQixHQUF4QjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUE7SUFDaEMsQ0FBQztJQUNNLG1EQUF1QixHQUE5QixVQUErQixNQUFnQjtRQUMzQyxPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFDTSxtQ0FBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUE7WUFDMUIsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsSUFBSSxDQUFBO1lBQ3hDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxFQUFFLENBQUE7U0FDbEM7SUFDTCxDQUFDO0lBQ0Q7OztPQUdHO0lBQ0ksaUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLElBQUksQ0FBQTtRQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQTtRQUMzQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQTtZQUMzQixJQUFJLENBQUMsdUJBQXVCLENBQUMsRUFBRSxDQUFBO1NBQ2xDO0lBQ0wsQ0FBQztJQUNPLHlDQUFhLEdBQXJCLFVBQXNCLEtBQTBCLEVBQUUsZ0JBQWdCO1FBQzlELGlCQUFNLGVBQWUsQ0FBQyxZQUFDLEtBQUssRUFBRSxnQkFBZ0IsQ0FBQyxDQUFBO1FBQy9DLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUMvSCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQTtTQUN6QjtRQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1FBQ3ZCLFdBQVc7UUFDWCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUE7WUFDMUIsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUE7WUFDbEQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1lBQy9ELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUM3QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFBO2FBQ3JEO2lCQUFNLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUE7YUFDdEQ7U0FDSjtJQUNMLENBQUM7SUFDTywwQ0FBYyxHQUF0QixVQUF1QixLQUFLO1FBQ3hCLGlCQUFNLGdCQUFnQixDQUFDLFlBQUMsS0FBSyxDQUFDLENBQUE7UUFDOUIsSUFBSSxLQUFLLElBQUksY0FBYyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7WUFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUE7WUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7WUFDdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUE7U0FDOUI7SUFDTCxDQUFDO0lBQ08sa0RBQXNCLEdBQTlCOztRQUNJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNkLFVBQUksSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxFQUFFO1lBQ3JCLElBQUksS0FBSyxTQUFBLENBQUE7WUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUNwRztpQkFBTTtnQkFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7YUFDN0Y7WUFDRCxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQTtZQUN6QyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUE7YUFDOUI7U0FFSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFDTyxxREFBeUIsR0FBakM7O1FBQ0ksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsVUFBSSxJQUFJLENBQUMsTUFBTSwwQ0FBRSxNQUFNLEVBQUU7WUFDckIsSUFBSSxLQUFLLFNBQUEsQ0FBQTtZQUNULElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUIsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO2FBQ3BHO2lCQUFNO2dCQUNILEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTthQUM3RjtZQUNELE1BQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFBO1lBQzVDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNwQyxNQUFNLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQTthQUM5QjtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQUNPLG1EQUF1QixHQUEvQjs7UUFDSSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDZCxVQUFJLElBQUksQ0FBQyxNQUFNLDBDQUFFLE1BQU0sRUFBRTtZQUNyQixJQUFJLEtBQUssU0FBQSxDQUFBO1lBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixFQUFFO2dCQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHFCQUFxQixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDcEc7aUJBQU07Z0JBQ0gsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQzdGO1lBQ0QsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUE7WUFDMUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3BDLE1BQU0sSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFBO2FBQzlCO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQTtJQUNqQixDQUFDO0lBQ08sb0RBQXdCLEdBQWhDOztRQUNJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNkLFVBQUksSUFBSSxDQUFDLE1BQU0sMENBQUUsTUFBTSxFQUFFO1lBQ3JCLElBQUksS0FBSyxTQUFBLENBQUE7WUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzlCLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTthQUNwRztpQkFBTTtnQkFDSCxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDN0Y7WUFDRCxNQUFNLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQTtZQUMzQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDcEMsTUFBTSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUE7YUFDOUI7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFBO0lBQ2pCLENBQUM7SUFFTyw0Q0FBZ0IsR0FBeEIsVUFBeUIsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVO1FBQ3hELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUNuRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ3JELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUE7YUFDekQ7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUNuRCxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ3JELElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBQ3ZEO1NBQ0o7UUFDRCxpQkFBTSxrQkFBa0IsQ0FBQyxZQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxDQUFDLENBQUE7SUFDbEUsQ0FBQztJQUNPLHVEQUEyQixHQUFuQztRQUNJLElBQUksTUFBTSxHQUFHLGlCQUFNLDZCQUE2QixDQUFDLFdBQUUsQ0FBQTtRQUNuRCxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1NBQ3pCO1FBQ0QsT0FBTyxNQUFNLENBQUE7SUFDakIsQ0FBQztJQUNPLDRDQUFnQixHQUF4QixVQUF5QixhQUFhO1FBQ2xDLGlCQUFNLGtCQUFrQixDQUFDLFlBQUMsYUFBYSxDQUFDLENBQUE7UUFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZO1lBQUUsT0FBTTtRQUM5Qix5QkFBeUI7UUFDekIsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3ZELElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1NBQ3pCO1FBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLE9BQU07UUFFM0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFBO1FBQy9ELElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuRCw0REFBNEQ7WUFDNUQsSUFBSSxRQUFRLEdBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUE7WUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUNqRTthQUFNLElBQUksTUFBTSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUMxRCw2REFBNkQ7WUFDN0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQTtZQUM3QyxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUMvRDthQUFNO1lBQ0gsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtZQUN2RCxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtTQUN4RDtJQUNMLENBQUM7SUFFTyw2Q0FBaUIsR0FBekIsVUFBMEIsSUFBUztRQUMvQixJQUFHLElBQUksQ0FBQyxjQUFjLEVBQUM7WUFDbkIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFBO1NBQ3hFO0lBQ0wsQ0FBQztJQUNPLDJDQUFlLEdBQXZCLFVBQXdCLElBQVM7UUFDN0IsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUN0RTtJQUNMLENBQUM7SUExT0U7UUFIRixRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUsaUJBQWlCO1NBQzdCLENBQUM7OERBQThCO0lBSTdCO1FBSEYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE1BQU07WUFDbkIsT0FBTyxFQUFFLGtCQUFrQjtTQUM5QixDQUFDOzJEQUEyQjtJQUsxQjtRQUhGLFFBQVEsQ0FBQztZQUNOLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxpQkFBaUI7U0FDN0IsQ0FBQzs4REFBOEI7SUFLN0I7UUFIRixRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsTUFBTTtZQUNuQixPQUFPLEVBQUUsa0JBQWtCO1NBQzlCLENBQUM7MkRBQTJCO0lBSTFCO1FBSEYsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWTtZQUMvQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzZEQUFpRDtJQUloRDtRQUhGLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQzsyREFBK0M7SUExQmhDLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBZ1ByQztJQUFELHdCQUFDO0NBaFBELEFBZ1BDLENBaFA4QyxFQUFFLENBQUMsVUFBVSxHQWdQM0Q7a0JBaFBvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTdXBlckxheW91dCBmcm9tICcuL1VJU3VwZXJMYXlvdXQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IEVQU0lMT04gPSAxZS00O1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3B1ZXJTY3JvbGxWaWV3IGV4dGVuZHMgY2MuU2Nyb2xsVmlldyB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi6aG26YOo5YGP56e76YePXCIsXG4gICAgICAgIHRvb2x0aXA6IFwi5LiL5ouJ5pe26LaF6L+H5q2k5YGP56e75Lya5Y+R6YCB5LiL5ouJ5LqL5Lu2XCJcbiAgICB9KSBoZWFkZXJPdXRPZmZzZXQ6IG51bWJlciA9IDIwMFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIumhtumDqOmrmOW6plwiLFxuICAgICAgICB0b29sdGlwOiBcIuW9k+S4i+aLieS6i+S7tuinpuWPkeaXtiDpobbpg6jov73liqDnmoTpq5jluqZcIlxuICAgIH0pIGhlYWRlckhlaWdodDogbnVtYmVyID0gMTAwXG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlupXpg6jlgY/np7vph49cIixcbiAgICAgICAgdG9vbHRpcDogXCLkuIrmi4nml7botoXov4fmraTlgY/np7vkvJrlj5HpgIHkuIrmi4nkuovku7ZcIlxuICAgIH0pIGZvb3Rlck91dE9mZnNldDogbnVtYmVyID0gMjAwXG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlupXpg6jpq5jluqZcIixcbiAgICAgICAgdG9vbHRpcDogXCLlvZPkuIrmi4nkuovku7bop6blj5Hml7Yg5bqV6YOo6L+95Yqg55qE6auY5bqmXCJcbiAgICB9KSBmb290ZXJIZWlnaHQ6IG51bWJlciA9IDEwMFxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS4i+aLieS6i+S7tlwiXG4gICAgfSkgcHVsbERvd25FdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5LiK5ouJ5LqL5Lu2XCJcbiAgICB9KSBwdWxsVXBFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG5cbiAgICBwdWJsaWMgZGVsdGFNb3ZlID0gY2MuVmVjMi5aRVJPXG4gICAgcHVibGljIGdldCB2aWV3KCk6IGNjLk5vZGUgeyByZXR1cm4gdGhpc1snX3ZpZXcnXSB9XG4gICAgcHVibGljIHNldCBhdXRvU2Nyb2xsaW5nKHZhbHVlOiBib29sZWFuKSB7IHRoaXNbJ19hdXRvU2Nyb2xsaW5nJ10gPSB2YWx1ZSB9XG4gICAgcHVibGljIGdldCBhdXRvU2Nyb2xsaW5nKCkgeyByZXR1cm4gdGhpc1snX2F1dG9TY3JvbGxpbmcnXSB9XG4gICAgcHJpdmF0ZSBpc01vdmVIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNNb3ZlRm9vdGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzTG9ja0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0xvY2tGb290ZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNBdXRvQmFjazogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0VtaXRQcm9ncmVzczogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBfbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIHByaXZhdGUgZ2V0IGxheW91dCgpOiBVSVN1cGVyTGF5b3V0IHtcbiAgICAgICAgaWYgKHRoaXMuX2xheW91dCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9sYXlvdXQgPSB0aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KFVJU3VwZXJMYXlvdXQpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2xheW91dFxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc0hlYWRlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0Py5oZWFkZXIgJiYgdGhpcy5sYXlvdXQ/LmhlYWRlclsnaW5kZXgnXSA9PSAwIHx8IGZhbHNlXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzRm9vdGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQ/LmZvb3RlciAmJiB0aGlzLmxheW91dD8uZm9vdGVyWydpbmRleCddID09IHRoaXMubGF5b3V0Py5tYXhJdGVtVG90YWwgLSAxIHx8IGZhbHNlXG4gICAgfVxuICAgIC8qKiDmmK/lkKbpnIDopoHorqHnrpfvvJ/lpoLmnpzkuIrmi4kv5LiL5ouJ5LqL5Lu25rKh5pyJ55uR5ZCs6ICF5YiZ5LiN6ZyA6KaB55u45YWz55qE6K6h566XICovXG4gICAgcHJpdmF0ZSBnZXQgaXNDYWxjdWxQdWxsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wdWxsRG93bkV2ZW50cy5sZW5ndGggPiAwIHx8IHRoaXMucHVsbFVwRXZlbnRzLmxlbmd0aCA+IDBcbiAgICB9XG4gICAgcHVibGljIGNhbGN1bGF0ZUJvdW5kYXJ5KCkge1xuICAgICAgICB0aGlzWydfY2FsY3VsYXRlQm91bmRhcnknXSgpXG4gICAgfVxuICAgIHB1YmxpYyBnZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShvZmZzZXQ/OiBjYy5WZWMyKSB7XG4gICAgICAgIHJldHVybiB0aGlzWydfZ2V0SG93TXVjaE91dE9mQm91bmRhcnknXShvZmZzZXQpXG4gICAgfVxuICAgIHB1YmxpYyByZWxlYXNlKCkge1xuICAgICAgICBpZiAodGhpcy5pc0xvY2tIZWFkZXIgfHwgdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlSGVhZGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNNb3ZlRm9vdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrSGVhZGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrRm9vdGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSB0cnVlXG4gICAgICAgICAgICB0aGlzWydfb3V0T2ZCb3VuZGFyeUFtb3VudERpcnR5J10gPSB0cnVlXG4gICAgICAgICAgICB0aGlzWydfcHJvY2Vzc0luZXJ0aWFTY3JvbGwnXSgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6YeN572u5YiX6KGoXG4gICAgICog5b2T5YiX6KGo5ruR5Yqo5Yiw5bqV6YOo5pe2IOeEtuWQjuS4jeeuoemAmui/h+S7gOS5iOaWueW8jyjlkIzmraV85byC5q2lKeWHj+WwkeS6huaVtOS9k+eahCjpq5jluqZ857yp5pS+fOWwuuWvuCkg5pe25L+d6K+B5YaF5a655pi+56S65q2j56GuXG4gICAgICovXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzWydfb3V0T2ZCb3VuZGFyeUFtb3VudERpcnR5J10gPSB0cnVlXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KClcbiAgICAgICAgaWYgKCFvZmZzZXQuZnV6enlFcXVhbHMoY2MudjIoMCwgMCksIEVQU0lMT04pKSB7XG4gICAgICAgICAgICB0aGlzLmlzRW1pdFByb2dyZXNzID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXNbJ19wcm9jZXNzSW5lcnRpYVNjcm9sbCddKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9vblRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgc3VwZXJbJ19vblRvdWNoTW92ZWQnXShldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICAgICAgbGV0IGRlbHRhID0gY2MudjIoZXZlbnQuZ2V0TG9jYXRpb24oKS54IC0gZXZlbnQuZ2V0UHJldmlvdXNMb2NhdGlvbigpLngsIGV2ZW50LmdldExvY2F0aW9uKCkueSAtIGV2ZW50LmdldFByZXZpb3VzTG9jYXRpb24oKS55KVxuICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCAmJiBkZWx0YS55ICE9IDAgfHwgdGhpcy5ob3Jpem9udGFsICYmIGRlbHRhLnggIT0gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWx0YU1vdmUgPSBkZWx0YVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNBdXRvQmFjayA9IGZhbHNlXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpumcgOimgeiuoeeul1xuICAgICAgICBpZiAodGhpcy5pc0NhbGN1bFB1bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSB0cnVlXG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSBvZmZzZXQgPj0gdGhpcy5oZWFkZXJPdXRPZmZzZXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDwgMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSBvZmZzZXQgPD0gLXRoaXMuZm9vdGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfZGlzcGF0Y2hFdmVudChldmVudCkge1xuICAgICAgICBzdXBlclsnX2Rpc3BhdGNoRXZlbnQnXShldmVudClcbiAgICAgICAgaWYgKGV2ZW50ID09ICdzY3JvbGwtZW5kZWQnKSB7XG4gICAgICAgICAgICB0aGlzLmRlbHRhTW92ZSA9IGNjLlZlYzIuWkVST1xuICAgICAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc0F1dG9CYWNrID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNFbWl0UHJvZ3Jlc3MgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRUb3BCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbFxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCB0aGlzLmxheW91dC5oZWFkZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueU1heCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKDAsIHRoaXMubGF5b3V0LmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnlNYXgpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbG9jYWwueSArIHRoaXMubGF5b3V0LnBhZGRpbmdUb3BcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSGVhZGVyICYmIHRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuaGVhZGVySGVpZ2h0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2Zmc2V0O1xuICAgIH1cbiAgICBwcml2YXRlIF9nZXRDb250ZW50Qm90dG9tQm91bmRhcnkoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5jaGlsZEJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIoMCwgdGhpcy5sYXlvdXQuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnlNaW4pKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52MigwLCB0aGlzLmxheW91dC5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS55TWluKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCA9IGxvY2FsLnkgLSB0aGlzLmxheW91dC5wYWRkaW5nQm90dG9tXG4gICAgICAgICAgICBpZiAodGhpcy5pc0Zvb3RlciAmJiB0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIG9mZnNldCAtPSB0aGlzLmZvb3RlckhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudExlZnRCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIpIHtcbiAgICAgICAgICAgIGxldCBsb2NhbFxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmNoaWxkQm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih0aGlzLmxheW91dC5oZWFkZXIuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkueE1pbiwgMCkpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2FsID0gdGhpcy52aWV3LmNvbnZlcnRUb05vZGVTcGFjZUFSKGNjLnYyKHRoaXMubGF5b3V0LmhlYWRlclsnZ2V0Qm91bmRpbmcnXSgpLnhNaW4sIDApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb2Zmc2V0ID0gbG9jYWwueCAtIHRoaXMubGF5b3V0LnBhZGRpbmdMZWZ0XG4gICAgICAgICAgICBpZiAodGhpcy5pc0hlYWRlciAmJiB0aGlzLmlzTG9ja0hlYWRlcikge1xuICAgICAgICAgICAgICAgIG9mZnNldCAtPSB0aGlzLmhlYWRlckhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudFJpZ2h0Qm91bmRhcnkoKSB7XG4gICAgICAgIGxldCBvZmZzZXQgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyKSB7XG4gICAgICAgICAgICBsZXQgbG9jYWxcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5jaGlsZEJvdW5kaW5nQm94KSB7XG4gICAgICAgICAgICAgICAgbG9jYWwgPSB0aGlzLnZpZXcuY29udmVydFRvTm9kZVNwYWNlQVIoY2MudjIodGhpcy5sYXlvdXQuZm9vdGVyLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpLnhNYXgsIDApKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsb2NhbCA9IHRoaXMudmlldy5jb252ZXJ0VG9Ob2RlU3BhY2VBUihjYy52Mih0aGlzLmxheW91dC5mb290ZXJbJ2dldEJvdW5kaW5nJ10oKS54TWF4LCAwKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9mZnNldCA9IGxvY2FsLnggKyB0aGlzLmxheW91dC5wYWRkaW5nUmlnaHRcbiAgICAgICAgICAgIGlmICh0aGlzLmlzRm9vdGVyICYmIHRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHRoaXMuZm9vdGVySGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9mZnNldFxuICAgIH1cblxuICAgIHByaXZhdGUgX3N0YXJ0QXV0b1Njcm9sbChkZWx0YU1vdmUsIHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZCkge1xuICAgICAgICBpZiAodGhpcy5pc0NhbGN1bFB1bGwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTW92ZUhlYWRlciAmJiAhdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja0hlYWRlciA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsICYmIChkZWx0YU1vdmUueSAtPSB0aGlzLmhlYWRlckhlaWdodClcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWwgJiYgKGRlbHRhTW92ZS54ICs9IHRoaXMuaGVhZGVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyByZWZyZXNoOiB0cnVlLCBwcm9ncmVzczogMSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlRm9vdGVyICYmICF0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrRm9vdGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgJiYgKGRlbHRhTW92ZS55ICs9IHRoaXMuZm9vdGVySGVpZ2h0KVxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCAmJiAoZGVsdGFNb3ZlLnggLT0gdGhpcy5mb290ZXJIZWlnaHQpXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyByZWZyZXNoOiB0cnVlLCBwcm9ncmVzczogMSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN1cGVyWydfc3RhcnRBdXRvU2Nyb2xsJ10oZGVsdGFNb3ZlLCB0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgfVxuICAgIHByaXZhdGUgX2lzTmVjZXNzYXJ5QXV0b1Njcm9sbEJyYWtlKCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gc3VwZXJbJ19pc05lY2Vzc2FyeUF1dG9TY3JvbGxCcmFrZSddKClcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgdGhpcy5pc0F1dG9CYWNrID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gICAgcHJpdmF0ZSBfdXBkYXRlU2Nyb2xsQmFyKG91dE9mQm91bmRhcnkpIHtcbiAgICAgICAgc3VwZXJbJ191cGRhdGVTY3JvbGxCYXInXShvdXRPZkJvdW5kYXJ5KVxuICAgICAgICBpZiAoIXRoaXMuaXNDYWxjdWxQdWxsKSByZXR1cm5cbiAgICAgICAgLy8g6Ieq5Yqo5Zue5by55pe25LiN5Y+R6YCB5LqL5Lu2IOWPquacieWcqOaJi+WKqOa7keWKqOaXtuaJjeinpuWPkVxuICAgICAgICBpZiAodGhpc1snX2F1dG9TY3JvbGxCcmFraW5nJ10pIHtcbiAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyByZWZyZXNoOiBmYWxzZSwgcHJvZ3Jlc3M6IDAgfSlcbiAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiAwIH0pXG4gICAgICAgICAgICB0aGlzLmlzQXV0b0JhY2sgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNBdXRvQmFjaykgcmV0dXJuXG5cbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgIGlmIChvZmZzZXQgPiAwICYmIHRoaXMuaXNIZWFkZXIgJiYgIXRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICAvLyBsZXQgcHJvZ3Jlc3MgPSBNYXRoLm1pbihvZmZzZXQgLyB0aGlzLmhlYWRlck91dE9mZnNldCwgMSlcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IG9mZnNldCAvIHRoaXMuaGVhZGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiBwcm9ncmVzcyB9KVxuICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8IDAgJiYgdGhpcy5pc0Zvb3RlciAmJiAhdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIC8vIGxldCBwcm9ncmVzcyA9IE1hdGgubWluKC1vZmZzZXQgLyB0aGlzLmZvb3Rlck91dE9mZnNldCwgMSlcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IC1vZmZzZXQgLyB0aGlzLmZvb3Rlck91dE9mZnNldFxuICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyByZWZyZXNoOiBmYWxzZSwgcHJvZ3Jlc3M6IHByb2dyZXNzIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgcmVmcmVzaDogZmFsc2UsIHByb2dyZXNzOiAwIH0pXG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IHJlZnJlc2g6IGZhbHNlLCBwcm9ncmVzczogMCB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBlbWl0UHVsbERvd25FdmVudChkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYodGhpcy5pc0VtaXRQcm9ncmVzcyl7XG4gICAgICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5wdWxsRG93bkV2ZW50cywgdGhpcywgZGF0YSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGVtaXRQdWxsVXBFdmVudChkYXRhOiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNFbWl0UHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnB1bGxVcEV2ZW50cywgdGhpcywgZGF0YSlcbiAgICAgICAgfVxuICAgIH1cblxufVxuIl19
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
    Object.defineProperty(UISpuerItem.prototype, "width", {
        get: function () {
            return this.node.width * this.layout.getUsedScaleValue(this.node.scaleX);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "height", {
        get: function () {
            return this.node.height * this.layout.getUsedScaleValue(this.node.scaleY);
        },
        enumerable: false,
        configurable: true
    });
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
                var offset = (prevNode.y - (prevHeight * prevNode.anchorY)) - (this.height * (1 - this.node.anchorY)) - this.layout.spacing.y;
                this.node.y = offset;
            }
            else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
                var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
                var offset = prevNode.x + (prevWidth * (1 - prevNode.anchorX)) + (this.width * this.node.anchorX) + this.layout.spacing.x;
                this.node.x = offset;
            }
        }
    };
    UISpuerItem.prototype.relativePositionTop = function (prevNode) {
        if (prevNode) {
            if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
                var prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY);
                var offset = prevNode.y + (prevHeight * (1 - prevNode.anchorY)) + (this.height * this.node.anchorY) + this.layout.spacing.y;
                this.node.y = offset;
            }
            else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
                var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
                var offset = prevNode.x - (prevWidth * prevNode.anchorX) - (this.width * (1 - this.node.anchorX)) - this.layout.spacing.x;
                this.node.x = offset;
            }
        }
    };
    // 设置自己相对于上一个兄弟节点的位置
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
                this.refreshItemCallback(this.node, this.node['index']);
                this.relativePositionBottom(this.layout.footer);
                this.node.setSiblingIndex(this.layout.node.childrenCount - 1);
            }
        }
        // 向上填充
        if (this.isUpdateFooter) {
            if (this.layout.header['index'] == 0)
                return;
            var offset = this.isOutOfBoundaryBottom(this.node);
            if (this.isOutOfBoundary(offset)) {
                this.node['index'] = this.layout.header['index'] - 1;
                this.refreshItemCallback(this.node, this.node['index']);
                this.relativePositionTop(this.layout.header);
                this.node.setSiblingIndex(0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztnQkFBRSxPQUFNO1lBQzVDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDbEQsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDcEQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO2dCQUN2RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDL0I7U0FDSjtJQUNMLENBQUM7SUFDRCw0QkFBTSxHQUFOLFVBQU8sRUFBRTtRQUNMLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQTdIZ0IsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQThIL0I7SUFBRCxrQkFBQztDQTlIRCxBQThIQyxDQTlId0MsRUFBRSxDQUFDLFNBQVMsR0E4SHBEO2tCQTlIb0IsV0FBVyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVSVN1cGVyTGF5b3V0LCB7IFVJU3VwZXJBeGlzIH0gZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTcHVlckl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgbGF5b3V0OiBVSVN1cGVyTGF5b3V0XG4gICAgcHJpdmF0ZSByZWZyZXNoSXRlbUNhbGxiYWNrOiBGdW5jdGlvblxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5VG9wOiBGdW5jdGlvblxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5Qm90dG9tOiBGdW5jdGlvblxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGVbJ2dldEJvdW5kaW5nJ10gPSB0aGlzLmdldEJvdW5kaW5nLmJpbmQodGhpcylcbiAgICB9XG4gICBcbiAgICBwdWJsaWMgaW5pdChsYXlvdXQ6IFVJU3VwZXJMYXlvdXQsIHJlZnJlc2hJdGVtQ2FsbGJhY2s6IEZ1bmN0aW9uLCBpc091dE9mQm91bmRhcnlUb3A6IEZ1bmN0aW9uLCBpc091dE9mQm91bmRhcnlCb3R0b206IEZ1bmN0aW9uKSB7XG4gICAgICAgIHRoaXMubGF5b3V0ID0gbGF5b3V0XG4gICAgICAgIHRoaXMucmVmcmVzaEl0ZW1DYWxsYmFjayA9IHJlZnJlc2hJdGVtQ2FsbGJhY2tcbiAgICAgICAgdGhpcy5pc091dE9mQm91bmRhcnlUb3AgPSBpc091dE9mQm91bmRhcnlUb3BcbiAgICAgICAgdGhpcy5pc091dE9mQm91bmRhcnlCb3R0b20gPSBpc091dE9mQm91bmRhcnlCb3R0b21cbiAgICB9XG4gICAgcHJpdmF0ZSBnZXRCb3VuZGluZygpIHtcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudFsnX3VwZGF0ZVdvcmxkTWF0cml4J10oKVxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aFxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0XG4gICAgICAgIGxldCByZWN0ID0gY2MucmVjdCgtdGhpcy5ub2RlLmdldEFuY2hvclBvaW50KCkueCAqIHdpZHRoLCAtdGhpcy5ub2RlLmdldEFuY2hvclBvaW50KCkueSAqIGhlaWdodCwgd2lkdGgsIGhlaWdodClcbiAgICAgICAgdGhpcy5ub2RlWydfY2FsY3VsV29ybGRNYXRyaXgnXSgpO1xuICAgICAgICByZWN0LnRyYW5zZm9ybU1hdDQocmVjdCwgdGhpcy5ub2RlWydfd29ybGRNYXRyaXgnXSk7XG4gICAgICAgIHJldHVybiByZWN0XG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IHdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLndpZHRoICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUodGhpcy5ub2RlLnNjYWxlWClcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmhlaWdodCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHRoaXMubm9kZS5zY2FsZVkpXG4gICAgfVxuICAgIHByaXZhdGUgZ2V0IGlzSGVhZGVyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpID09IDBcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNGb290ZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4KCkgPT0gdGhpcy5sYXlvdXQubm9kZS5jaGlsZHJlbkNvdW50IC0gMVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc1VwZGF0ZUhlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS55ID4gMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS54IDwgMCAmJiB0aGlzLmlzSGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc1VwZGF0ZUZvb3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS55IDwgMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTCAmJiB0aGlzLmxheW91dC5zY3JvbGxWaWV3LmRlbHRhTW92ZS54ID4gMCAmJiB0aGlzLmlzRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHByaXZhdGUgaXNPdXRPZkJvdW5kYXJ5KG9mZnNldDogY2MuVmVjMikge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMICYmIG9mZnNldC55ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMICYmIG9mZnNldC54ID09IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWxhdGl2ZVBvc2l0aW9uQm90dG9tKHByZXZOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcHJldk5vZGUuaGVpZ2h0ICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVZKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSAocHJldk5vZGUueSAtIChwcmV2SGVpZ2h0ICogcHJldk5vZGUuYW5jaG9yWSkpIC0gKHRoaXMuaGVpZ2h0ICogKDEgLSB0aGlzLm5vZGUuYW5jaG9yWSkpIC0gdGhpcy5sYXlvdXQuc3BhY2luZy55XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBvZmZzZXRcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLkhPUklaT05UQUwpIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJldldpZHRoID0gcHJldk5vZGUud2lkdGggKiB0aGlzLmxheW91dC5nZXRVc2VkU2NhbGVWYWx1ZShwcmV2Tm9kZS5zY2FsZVgpXG4gICAgICAgICAgICAgICAgbGV0IG9mZnNldCA9IHByZXZOb2RlLnggKyAocHJldldpZHRoICogKDEgLSBwcmV2Tm9kZS5hbmNob3JYKSkgKyAodGhpcy53aWR0aCAqIHRoaXMubm9kZS5hbmNob3JYKSArIHRoaXMubGF5b3V0LnNwYWNpbmcueFxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS54ID0gb2Zmc2V0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSByZWxhdGl2ZVBvc2l0aW9uVG9wKHByZXZOb2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmIChwcmV2Tm9kZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTCkge1xuICAgICAgICAgICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcHJldk5vZGUuaGVpZ2h0ICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVZKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwcmV2Tm9kZS55ICsgKHByZXZIZWlnaHQgKiAoMSAtIHByZXZOb2RlLmFuY2hvclkpKSArICh0aGlzLmhlaWdodCAqIHRoaXMubm9kZS5hbmNob3JZKSArIHRoaXMubGF5b3V0LnNwYWNpbmcueVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gb2Zmc2V0XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMubGF5b3V0LnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5IT1JJWk9OVEFMKSB7XG4gICAgICAgICAgICAgICAgbGV0IHByZXZXaWR0aCA9IHByZXZOb2RlLndpZHRoICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUocHJldk5vZGUuc2NhbGVYKVxuICAgICAgICAgICAgICAgIGxldCBvZmZzZXQgPSBwcmV2Tm9kZS54IC0gKHByZXZXaWR0aCAqIHByZXZOb2RlLmFuY2hvclgpIC0gKHRoaXMud2lkdGggKiAoMSAtIHRoaXMubm9kZS5hbmNob3JYKSkgLSB0aGlzLmxheW91dC5zcGFjaW5nLnhcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueCA9IG9mZnNldFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOiuvue9ruiHquW3seebuOWvueS6juS4iuS4gOS4quWFhOW8n+iKgueCueeahOS9jee9rlxuICAgIHByaXZhdGUgd2F0Y2hCcm90aGVyKCkge1xuICAgICAgICBsZXQgcHJldkluZGV4ID0gdGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpIC0gMVxuICAgICAgICBsZXQgcHJldk5vZGUgPSB0aGlzLm5vZGUucGFyZW50LmNoaWxkcmVuW3ByZXZJbmRleF1cbiAgICAgICAgdGhpcy5yZWxhdGl2ZVBvc2l0aW9uQm90dG9tKHByZXZOb2RlKVxuICAgIH1cbiAgICBwcml2YXRlIHdhdGNoU2VsZigpIHtcbiAgICAgICAgLy8g5ZCR5LiL5aGr5YWFXG4gICAgICAgIGlmICh0aGlzLmlzVXBkYXRlSGVhZGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddICsgMSA9PSB0aGlzLmxheW91dC5tYXhJdGVtVG90YWwpIHJldHVyblxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuaXNPdXRPZkJvdW5kYXJ5VG9wKHRoaXMubm9kZSlcbiAgICAgICAgICAgIGlmICh0aGlzLmlzT3V0T2ZCb3VuZGFyeShvZmZzZXQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlWydpbmRleCddID0gdGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddICsgMVxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaEl0ZW1DYWxsYmFjayh0aGlzLm5vZGUsIHRoaXMubm9kZVsnaW5kZXgnXSlcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGF0aXZlUG9zaXRpb25Cb3R0b20odGhpcy5sYXlvdXQuZm9vdGVyKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgodGhpcy5sYXlvdXQubm9kZS5jaGlsZHJlbkNvdW50IC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlkJHkuIrloavlhYVcbiAgICAgICAgaWYgKHRoaXMuaXNVcGRhdGVGb290ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5oZWFkZXJbJ2luZGV4J10gPT0gMCkgcmV0dXJuXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5pc091dE9mQm91bmRhcnlCb3R0b20odGhpcy5ub2RlKVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVbJ2luZGV4J10gPSB0aGlzLmxheW91dC5oZWFkZXJbJ2luZGV4J10gLSAxXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoSXRlbUNhbGxiYWNrKHRoaXMubm9kZSwgdGhpcy5ub2RlWydpbmRleCddKVxuICAgICAgICAgICAgICAgIHRoaXMucmVsYXRpdmVQb3NpdGlvblRvcCh0aGlzLmxheW91dC5oZWFkZXIpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCgwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLndhdGNoQnJvdGhlcigpXG4gICAgICAgIHRoaXMud2F0Y2hTZWxmKClcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
