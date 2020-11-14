
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
        _this.total = 0;
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
    testPanel.prototype.overScene = function (event, scene) {
        cc.director.loadScene(scene);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RDdCLE9BQU87T0FDYSxTQUFTLENBNEo3QjtJQUFELGdCQUFDO0NBNUpELEFBNEpDLENBNUpzQyxFQUFFLENBQUMsU0FBUyxHQTRKbEQ7a0JBNUpvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQsIHsgVUlTdXBlckF4aXMgfSBmcm9tICcuL1VJU3VwZXJMYXlvdXQnO1xuaW1wb3J0IGl0ZW0gZnJvbSAnLi9pdGVtJztcbmltcG9ydCBVSVNwdWVyU2Nyb2xsVmlldyBmcm9tICcuL1VJU3VwZXJTY3JvbGxWaWV3JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGVzdFBhbmVsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShVSVN1cGVyTGF5b3V0KSBsYXlvdXQ6IFVJU3VwZXJMYXlvdXQgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGhlYWRlcjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgcmVmcmVzaGluZzogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgZm9vdGVyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBsb2FkaW5nOiBjYy5Ob2RlID0gbnVsbFxuICAgIHByaXZhdGUgaXNSYW5kb21IZWlnaHQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNSYW5kb21XaWR0aDogYm9vbGVhbiA9IGZhbHNlXG4gICAgLy8g5qih5ouf5pWw5o2u5oC75pWwXG4gICAgcHJpdmF0ZSB0b3RhbDogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgZGF0YXM6IGFueVtdID0gW11cblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IGAke2l9YCxcbiAgICAgICAgICAgICAgICByYW5kb21XaWR0aDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgICAgICByYW5kb21IZWlnaHQ6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgIH1cbiAgICAvLyDliLfmlrDmlbDmja5cbiAgICByZWZyZXNoSXRlbUV2ZW50KG5vZGU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpIHtcbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmRhdGFzW2luZGV4XVxuICAgICAgICBpZiAodGhpcy5pc1JhbmRvbUhlaWdodCkge1xuICAgICAgICAgICAgbm9kZS5oZWlnaHQgPSBpbmZvLnJhbmRvbUhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzUmFuZG9tV2lkdGgpIHtcbiAgICAgICAgICAgIG5vZGUud2lkdGggPSBpbmZvLnJhbmRvbVdpZHRoXG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQoaXRlbSkuc2hvdyhpbmZvLCBpbmRleCwgdGhpcy5vblJlbW92ZUl0ZW0uYmluZCh0aGlzKSlcbiAgICB9XG5cbiAgICB0b0hlYWRlcigpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9IZWFkZXIoMC41KVxuICAgIH1cbiAgICB0b0Zvb3RlcigpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9Gb290ZXIoMC41KVxuICAgIH1cbiAgICBhZGRJdGVtKCkge1xuICAgICAgICAvLyDmtYvor5Xku6PnoIEg5re75Yqg5pWw5o2uXG4gICAgICAgIHRoaXMuZGF0YXMucHVzaCh7XG4gICAgICAgICAgICB0aXRsZTogYCR7dGhpcy5kYXRhcy5sZW5ndGh9YCxcbiAgICAgICAgICAgIHJhbmRvbVdpZHRoOiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICAgICAgcmFuZG9tSGVpZ2h0OiAxMDAgKiAoMSArIE1hdGgucmFuZG9tKCkpLFxuICAgICAgICB9KVxuICAgICAgICBjYy5sb2coXCLmt7vliqDmlbDmja4g5b2T5YmN5oC75pWwOlwiLCB0aGlzLmRhdGFzLmxlbmd0aClcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIHJlbUl0ZW0oKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDliKDpmaTmlbDmja5cbiAgICAgICAgdGhpcy5kYXRhcy5wb3AoKVxuICAgICAgICBjYy5sb2coXCLliKDpmaTmlbDmja4g5b2T5YmN5oC75pWwOlwiLCB0aGlzLmRhdGFzLmxlbmd0aClcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuXG4gICAgcmFuZG9tSGVpZ2h0KCkge1xuICAgICAgICAvLyDmtYvor5Xku6PnoIEg6ZqP5py65bC65a+4XG4gICAgICAgIHRoaXMuaXNSYW5kb21IZWlnaHQgPSAhdGhpcy5pc1JhbmRvbUhlaWdodFxuICAgICAgICB0aGlzLnRvSGVhZGVyKClcbiAgICB9XG4gICAgcmFuZG9tV2lkdGgoKSB7XG4gICAgICAgIC8vIOa1i+ivleS7o+eggSDpmo/mnLrlsLrlr7hcbiAgICAgICAgdGhpcy5pc1JhbmRvbVdpZHRoID0gIXRoaXMuaXNSYW5kb21XaWR0aFxuICAgICAgICB0aGlzLnRvSGVhZGVyKClcbiAgICB9XG4gICAgLyoqXG4gICAgKiDkuIvmi4nliLfmlrBcbiAgICAqIOaguOW/g+S7o+eggSDor7fnnIsg56ys5LiA5q2lIOesrOS6jOatpSDlhbbkvZnnmoTpg73mmK/kuIDkupvnmoTmlYjmnpzmtYvor5Xku6PnoIEg5L2g5Y+v5Lul6Ieq5bex5a6e546w5Lu75L2V5pWI5p6cXG4gICAgKi9cblxuICAgIHB1bGxEb3duUmVmcmVzaChzY3JvbGw6IFVJU3B1ZXJTY3JvbGxWaWV3LCBldmVudDogeyByZWZyZXNoOiBib29sZWFuLCBwcm9ncmVzczogbnVtYmVyIH0pIHtcbiAgICAgICAgLy8g5qih5ouf5Luj56CBICDkuIDkuptVSeaViOaenFxuICAgICAgICB0aGlzLnBsYXlBbmltKHRoaXMuaGVhZGVyLCBldmVudCwgJ+advuW8gOWIt+aWsOWTpicsICfnu6fnu63mu5EnKVxuXG4gICAgICAgIC8vIGV2ZW50LnJlZnJlc2g9dHJ1ZSDku6PooajpnIDopoHliLfmlrDmlbDmja5cbiAgICAgICAgaWYgKGV2ZW50LnJlZnJlc2gpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuW8gOWni+W8guatpeWIt+aWsOaVsOaNrlwiKVxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoaW5nLmFjdGl2ZSA9IHRydWVcbiAgICAgICAgICAgIC8vIOesrOS4gOatpSAg5qih5ouf5Yi35paw5pWw5o2uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5kYXRhc1tpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzW2ldLnRpdGxlID0gYCR7ZGF0YS50aXRsZX0gLSAke2l9YFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5qih5ouf5byC5q2l5bu26L+fXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hpbmcuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAvLyDnrKzkuozmraUg5Yi35pawXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5Yi35paw5oiQ5Yqf77yBXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOS4iuaLieWKoOi9vVxuICAgICAqIOaguOW/g+S7o+eggSDor7fnnIsg56ys5LiA5q2lIOesrOS6jOatpSDlhbbkvZnnmoTpg73mmK/kuIDkupvnmoTmlYjmnpzmtYvor5Xku6PnoIEg5L2g5Y+v5Lul6Ieq5bex5a6e546w5Lu75L2V5pWI5p6cXG4gICAgICovXG4gICAgcHVsbFVwTG9hZChzY3JvbGw6IFVJU3B1ZXJTY3JvbGxWaWV3LCBldmVudDogeyByZWZyZXNoOiBib29sZWFuLCBwcm9ncmVzczogbnVtYmVyIH0pIHtcbiAgICAgICAgLy8g5qih5ouf5Luj56CBIOS4gOS6m1VJ5pWI5p6cXG4gICAgICAgIHRoaXMucGxheUFuaW0odGhpcy5mb290ZXIsIGV2ZW50LCAn5p2+5byA5Yqg6L295pu05aSaJywgJ+e7p+e7rea7kScpXG4gICAgICAgIC8vIGV2ZW50LnJlZnJlc2g9dHJ1ZSDku6PooajpnIDopoHliqDovb3mlbDmja5cbiAgICAgICAgaWYgKGV2ZW50LnJlZnJlc2gpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuW8gOWni+W8guatpeWKoOi9vTEw5p2h5pWw5o2uXCIpXG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZy5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAvLyDnrKzkuIDmraUgIOaooeaLn+WinuWKoDEw5p2h5pWw5o2uXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogYCR7dGhpcy5kYXRhcy5sZW5ndGh9YCxcbiAgICAgICAgICAgICAgICAgICAgcmFuZG9tV2lkdGg6IDEwMCAqICgxICsgTWF0aC5yYW5kb20oKSksXG4gICAgICAgICAgICAgICAgICAgIHJhbmRvbUhlaWdodDogMTAwICogKDEgKyBNYXRoLnJhbmRvbSgpKSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5qih5ouf5byC5q2l5bu26L+f5Yqg6L29XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgICAgICAvLyDnrKzkuozmraUg5Yi35pawXG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5pWw5o2u5Yqg6L295oiQ5Yqf77yBXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9XG4gICAgfVxuICAgIG9uUmVtb3ZlSXRlbShpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIC8vIOWIoOmZpOeCueWHu+eahOmCo+adoeaVsOaNrlxuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgLy8g5Yi35pawXG4gICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgIH1cblxuICAgIC8qKiDmtYvor5Xku6PnoIEgKi9cbiAgICBwcml2YXRlIHBsYXlBbmltKG5vZGU6IGNjLk5vZGUsIGV2ZW50OiB7IHJlZnJlc2g6IGJvb2xlYW4sIHByb2dyZXNzOiBudW1iZXIgfSwgbXNnMTogc3RyaW5nLCBtc2cyOiBzdHJpbmcpIHtcbiAgICAgICAgbm9kZS5vcGFjaXR5ID0gZXZlbnQucHJvZ3Jlc3MgKiAyNTVcbiAgICAgICAgbGV0IHNjYWxlID0gdGhpcy5sYXlvdXQuc3RhcnRBeGlzID09IFVJU3VwZXJBeGlzLlZFUlRJQ0FMID8gY2MudjIoMSwgZXZlbnQucHJvZ3Jlc3MpIDogY2MudjIoZXZlbnQucHJvZ3Jlc3MsIDEpXG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzcyA+PSAxKSB7XG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpLnN0cmluZyA9IG1zZzFcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5vZGUuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbCkuc3RyaW5nID0gbXNnMlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzcyA+PSAxLjMpIHtcbiAgICAgICAgICAgIGlmICghbm9kZVsncGxheWluZyddKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjYxOCwgMSwgMSkuZWFzaW5nKGNjLmVhc2VFbGFzdGljT3V0KDAuMjM2KSkpXG4gICAgICAgICAgICAgICAgbm9kZVsncGxheWluZyddID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbm9kZS5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICBub2RlWydwbGF5aW5nJ10gPSBmYWxzZVxuICAgICAgICAgICAgbm9kZS5zZXRTY2FsZShzY2FsZSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBvdmVyU2NlbmUoZXZlbnQ6IGFueSwgc2NlbmU6IHN0cmluZykge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoc2NlbmUpXG4gICAgfVxuXG5cbn1cbiJdfQ==