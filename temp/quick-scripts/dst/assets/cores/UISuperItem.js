
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cores/UISuperItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05ad9vH0ANAc6m/Oc1rzygv', 'UISuperItem');
// cores/UISuperItem.ts

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
/*
 * @Author: steveJobs
 * @Email: icipiqkm@gmail.com
 * @Date: 2020-11-19 01:15:38
 * @Last Modified by: steveJobs
 * @Last Modified time: 2020-12-03 15:10:51
 * @Description: Description
 */
var UISuperLayout_1 = require("./UISuperLayout");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UISpuerItem = /** @class */ (function (_super) {
    __extends(UISpuerItem, _super);
    function UISpuerItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(UISpuerItem.prototype, "width", {
        /** 根据可视范围 和 一组item的个数 去掉 边距/间隔 来计算本item的真实宽度 */
        get: function () {
            if (this.layout.vertical) {
                // 垂直滑动时 固定宽度
                return (this.layout.accommodWidth - this.layout.spacingWidth) / this.layout.column;
            }
            else {
                // 水平模式时 宽度随意
                return this.node.width * this.layout.getUsedScaleValue(this.node.scaleX);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerItem.prototype, "height", {
        /** 根据可视范围 和 一组item的个数 去掉 边距/间隔 来计算本item的真实高度 */
        get: function () {
            if (this.layout.horizontal) {
                // 水平模式时 固定高度
                return (this.layout.accommodHeight - this.layout.spacingWidth) / this.layout.column;
            }
            else {
                // 垂直滑动时 高度随意
                return this.node.height * this.layout.getUsedScaleValue(this.node.scaleY);
            }
        },
        enumerable: false,
        configurable: true
    });
    UISpuerItem.prototype.onLoad = function () {
        // 向node写入一个方法 省去了先获取组件然后调用的步骤
        this.node['watchSelf'] = this.watchSelf.bind(this);
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            cc.warn("UISuperItem: item不允许挂cc.Widget组件 请手动移除");
            this.node.removeComponent(widget);
        }
    };
    UISpuerItem.prototype.init = function (layout) {
        this.layout = layout;
        this.layout.node.on(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.originSize = cc.size(this.width, this.height);
        this.node.setContentSize(this.originSize);
        this.originScale = cc.v2(this.node.scaleX, this.node.scaleY);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.onChangeBrother();
    };
    UISpuerItem.prototype.onDestroy = function () {
        this.layout.node.off(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.watchSize, this);
        this.node.off(cc.Node.EventType.SCALE_CHANGED, this.watchSize, this);
        this.unlisten();
    };
    /**
     * 当兄弟节点的顺序变化时 来改变自己监听的对象
     * 0,1,2,3,4,5,6,7,8,9 例如列表中共有10个item 0是header 9是footer
     * 正序排列时 监听的顺序是 9->8->7->6->5->4->3->2->1->0 0的 brother=null
     * 向下填充的逻辑是 0跑到9后面 0=footer 0的brother=9 相对9的位置设置自己 此时1=header
     * 向上填充的逻辑是 9跑到0前面 此时9=header 9的brother=null 主动设置自己相对于0前面位置之后 0的brother=9 8=footer
     */
    UISpuerItem.prototype.onChangeBrother = function () {
        var _a;
        var _brother = this.layout.getBrotherNode(this.node); //获取我应该监听的那个兄弟
        if ((_brother === null || _brother === void 0 ? void 0 : _brother.uuid) == ((_a = this.brother) === null || _a === void 0 ? void 0 : _a.uuid))
            return; //如果没有变化 则跳过
        this.unlisten(); //我的兄弟换人了？先移除我原来的
        this.brother = _brother; //他是我的兄弟
        this.listen(); //监听他
        this.watchBrother(); //相对兄弟节点来设置自己的位置
    };
    UISpuerItem.prototype.listen = function () {
        var _a, _b;
        (_a = this.brother) === null || _a === void 0 ? void 0 : _a.on('leave', this.unlisten, this);
        (_b = this.brother) === null || _b === void 0 ? void 0 : _b.on(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
    };
    UISpuerItem.prototype.unlisten = function () {
        var _a, _b;
        (_a = this.brother) === null || _a === void 0 ? void 0 : _a.off('leave', this.unlisten, this);
        (_b = this.brother) === null || _b === void 0 ? void 0 : _b.off(cc.Node.EventType.POSITION_CHANGED, this.watchBrother, this);
        this.brother = null;
    };
    /** 当我的尺寸/缩放改变时 */
    UISpuerItem.prototype.watchSize = function () {
        if (this.layout.column > 1) { //如果是Grid模式 不允许修改尺寸/缩放 强制改回来
            this.node.setContentSize(this.originSize);
            this.node.setScale(this.originScale);
        }
        else {
            if (this.layout.vertical && (this.node.getContentSize().width != this.originSize.width || this.node.scaleX != this.originScale.x)) {
                cc.warn("垂直排列不允许修改【宽度】");
                this.node.width = this.originSize.width;
                this.node.scaleX = this.originScale.x;
            }
            else if (this.layout.horizontal && (this.node.getContentSize().height != this.originSize.height || this.node.scaleY != this.originScale.y)) {
                cc.warn("水平排列不允许修改【高度】");
                this.node.height = this.originSize.height;
                this.node.scaleY = this.originScale.y;
            }
            // 如果我监听了兄弟节点就设置自己相对兄弟节点的位置，否则 我就发送一个位置变化的消息 让监听我的兄弟相对我做出变化
            this.brother && this.watchBrother();
            this.layout.resetScrollView();
            this.node.emit(cc.Node.EventType.POSITION_CHANGED);
        }
        if (this.node['index'] == 0 && this.layout.isNormalSize) {
            this.node.setPosition(this.layout.getGroupHeader(this.node));
        }
    };
    // 设置自己相对于上一个兄弟节点的位置
    UISpuerItem.prototype.watchBrother = function () {
        if (!this.brother)
            return;
        if (this.layout.headerToFooter) { //正序排列时
            this.headerToFooterRelativeToFooter(this.brother);
        }
        else { //倒序排列时
            this.footerToHeaderRelativeToFooter(this.brother);
        }
    };
    UISpuerItem.prototype.isOutOfBoundary = function (offset) {
        if (this.layout.vertical && offset.y == 0)
            return true;
        if (this.layout.horizontal && offset.x == 0)
            return true;
        return false;
    };
    /** 从下到上排序方向 检查头部是否需要向上填充 */
    UISpuerItem.prototype.footerToHeaderWatchHeader = function () {
        // 如果不是头部一组的任意一个时跳过 比如一组有3个item 只计算 0，1，2 
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column)
            return;
        // 如果此时【尾部】已经是最后一个数据时
        var index = this.layout.footer['index'] + 1;
        if (index >= this.layout.maxItemTotal) {
            if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = 0;
        }
        // 计算超出的偏移量 (从下到上排序方向时 头部在 下尾部在上 检测【头部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 + 1
        this.node['index'] = index;
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的节点 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 将自己的节点索引设置到尾部
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
    };
    /** 从下到上排序方向 检查尾部是否需要向下填充 */
    UISpuerItem.prototype.footerToHeaderWatchFooter = function () {
        // 如果不是尾部一组的任意一个时跳过 比如一组有3个item 只计算末尾的3个item 
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column)
            return;
        // 如果此时【头部】已经是第一个数据时
        var index = this.layout.header['index'] - 1;
        if (index < 0) {
            // 如果没有使用无限循环功能 否则不往下走
            if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = this.node['index'];
        }
        // 计算超出的偏移量 (从下到上排序方向时 头部在 下尾部在上 检测【尾部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 - 1
        this.node['index'] = index;
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的兄弟 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 因为我是尾部 我监听了别人，此时移除我的所有监听 因为我马上就要成为老大 老大不需要监听任何人
        this.unlisten();
        // 因为我是老大 我不能相对别人来设置自己的相对位置，所以我需要主动设置自己(相对上一个老大的位置来设置自己) 别人都会相对我的位置做出变化
        this.footerToHeaderRelativeToHeader(this.layout.header);
        // 将自己的节点索引设置到头部
        this.layout.setSiblingIndex(this.node, 0);
    };
    /** 从上到下排序方向 检查头部是否需要向下填充 */
    UISpuerItem.prototype.headerToFooterWatchHeader = function () {
        // 如果不是头部一组的任意一个时跳过 比如一组有3个item 只计算 0，1，2 
        if (this.layout.getSiblingIndex(this.node) >= this.layout.column)
            return;
        // 如果此时【尾部】已经是第一个数据时  
        var index = this.layout.footer['index'] + 1;
        if (index > this.layout.maxItemTotal - 1) {
            // 如果没有使用无限循环功能 否则不往下走
            if (!this.layout.footerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = 0;
        }
        // 计算超出的偏移量 (从下到上排序方向时 头部在下 尾部在上 检测【尾部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryHeader(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 + 1
        this.node['index'] = index;
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的兄弟 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 将自己的节点索引设置到尾部
        this.layout.setSiblingIndex(this.node, this.layout.children.length - 1);
    };
    /** 从上到下排序方向 检查尾部是否需要向上填充 */
    UISpuerItem.prototype.headerToFooterWatchFooter = function () {
        // 如果不是尾部一组的任意一个时跳过 比如一组有3个item 只计算末尾的3个item 
        if (this.layout.getSiblingIndex(this.node) < this.layout.children.length - this.layout.column)
            return;
        // 如果此时【头部】已经是第一个数据时 
        var index = this.layout.header['index'] - 1;
        if (index < 0) {
            // 如果没有使用无限循环功能 否则不往下走
            if (!this.layout.headerLoop || this.layout.scrollToHeaderOrFooter)
                return;
            index = this.node['index'];
        }
        // 计算超出的偏移量 (从上到下排序方向时 头部在上 尾部在下 检测【尾部】是否超出下边框)
        var offset = this.layout.isOutOfBoundaryFooter(this.node);
        // 没有超出时跳过
        if (!this.isOutOfBoundary(offset))
            return;
        // 将自己的数据索引 - 1
        this.node['index'] = index;
        // 发送通知到应用层 刷新显示
        this.layout.notifyRefreshItem(this.node);
        // 发给监听我的兄弟 通知我离开了 移除对我的所有监听
        this.node.emit("leave");
        // 因为我是尾部 我监听了别人，此时移除我的所有监听 因为我马上就要成为老大 老大不需要监听任何人
        this.unlisten();
        // 因为我是老大 我不能相对别人来设置自己的相对位置，所以我需要主动设置自己(相对上一个老大的位置来设置自己) 别人都会相对我的位置做出变化
        this.headerToFooterRelativeToHeader(this.layout.header);
        // 将自己的节点索引设置到尾部
        this.layout.setSiblingIndex(this.node, 0);
    };
    /** isScrollToFooter=true 向下滑动 */
    UISpuerItem.prototype.watchSelf = function (isScrollToFooter) {
        if (isScrollToFooter) {
            if (this.layout.headerToFooter) {
                // 从【上到下排序】方向 检查【尾部】是否需要向上填充
                this.headerToFooterWatchFooter();
            }
            else {
                // 从【下到上排序】方向 检查【头部】是否需要向上填充
                this.footerToHeaderWatchHeader();
            }
        }
        else {
            if (this.layout.headerToFooter) {
                // 从【上到下排序】方向 检查【头部】是否需要向下填充
                this.headerToFooterWatchHeader();
            }
            else {
                // 从【下到上排序】方向 检查【尾部】是否需要向下填充
                this.footerToHeaderWatchFooter();
            }
        }
    };
    /** 从下到上 从右到左 排序方向  设置自己到相对node的头部 */
    UISpuerItem.prototype.footerToHeaderRelativeToHeader = function (relative) {
        var pos = this.node.getPosition();
        // 从下到上
        if (this.layout.vertical) {
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupFooter(this.node).x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = relative.y;
            }
            if (this.node['index'] == 0) {
                pos.x = this.layout.getGroupHeader(this.node).x;
            }
        }
        else {
            // 从右到左
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = this.layout.getGroupFooter(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            if (this.node['index'] == 0) {
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
        }
        this.node.setPosition(pos);
    };
    /** 从下到上 从右到左 排序方向 设置自己到相对node的尾部 */
    UISpuerItem.prototype.footerToHeaderRelativeToFooter = function (relative) {
        var pos = this.node.getPosition();
        // 从下到上
        if (this.layout.vertical) {
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupHeader(this.node).x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = relative.y;
            }
        }
        else {
            // 从右到左
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
        }
        this.node.setPosition(pos);
    };
    /** 从上到下 从左到右 排序方向 设置自己到相对node的头部 */
    UISpuerItem.prototype.headerToFooterRelativeToHeader = function (relative) {
        var pos = this.node.getPosition();
        // 从上到下
        if (this.layout.vertical) {
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupFooter(this.node).x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = relative.y;
            }
            if (this.node['index'] == 0) {
                pos.x = this.layout.getGroupHeader(this.node).x;
            }
        }
        else {
            // 从左到右
            if (this.layout.isGroupHeader(relative)) {
                pos.x = this.layout.getGroupLeftX(this.node, relative);
                pos.y = this.layout.getGroupFooter(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupTopY(this.node, relative);
            }
            if (this.node['index'] == 0) {
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
        }
        this.node.setPosition(pos);
    };
    /** 从上到下 从左到右 排序方向 设置自己到相对node尾部 */
    UISpuerItem.prototype.headerToFooterRelativeToFooter = function (relative) {
        var pos = this.node.getPosition();
        // 从上到下
        if (this.layout.vertical) {
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupHeader(this.node).x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
            else {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = relative.y;
            }
        }
        else {
            // 从左到右
            if (this.layout.isGroupFooter(relative)) {
                pos.x = this.layout.getGroupRightX(this.node, relative);
                pos.y = this.layout.getGroupHeader(this.node).y;
            }
            else {
                pos.x = relative.x;
                pos.y = this.layout.getGroupBottomY(this.node, relative);
            }
        }
        this.node.setPosition(pos);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsaURBQXNFO0FBQ2hFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXlDLCtCQUFZO0lBQXJEOztJQXdWQSxDQUFDO0lBbFZHLHNCQUFZLDhCQUFLO1FBRGpCLGdEQUFnRDthQUNoRDtZQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLGFBQWE7Z0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7YUFDckY7aUJBQU07Z0JBQ0gsYUFBYTtnQkFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUMzRTtRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0JBQU07UUFEbEIsZ0RBQWdEO2FBQ2hEO1lBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDeEIsYUFBYTtnQkFDYixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTthQUN0RjtpQkFBTTtnQkFDSCxhQUFhO2dCQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJ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Q0FBQyxDQUFBO2dCQUN2RCxHQUFHLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUE7YUFDckI7U0FDSjthQUFNO1lBQ0gsT0FBTztZQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQ3JDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTtnQkFDdkQsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ2xEO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQTtnQkFDbEIsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2FBQzNEO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBdlZnQixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBd1YvQjtJQUFELGtCQUFDO0NBeFZELEFBd1ZDLENBeFZ3QyxFQUFFLENBQUMsU0FBUyxHQXdWcEQ7a0JBeFZvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IHN0ZXZlSm9ic1xuICogQEVtYWlsOiBpY2lwaXFrbUBnbWFpbC5jb21cbiAqIEBEYXRlOiAyMDIwLTExLTE5IDAxOjE1OjM4XG4gKiBATGFzdCBNb2RpZmllZCBieTogc3RldmVKb2JzXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIwLTEyLTAzIDE1OjEwOjUxXG4gKiBARGVzY3JpcHRpb246IERlc2NyaXB0aW9uXG4gKi9cbmltcG9ydCBVSVN1cGVyTGF5b3V0LCB7IFVJQ2hhbmdlQnJvdGhlckV2bmV0IH0gZnJvbSAnLi9VSVN1cGVyTGF5b3V0JztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTcHVlckl0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByaXZhdGUgbGF5b3V0OiBVSVN1cGVyTGF5b3V0XG4gICAgcHJpdmF0ZSBicm90aGVyOiBjYy5Ob2RlXG4gICAgcHJpdmF0ZSBvcmlnaW5TaXplOiBjYy5TaXplXG4gICAgcHJpdmF0ZSBvcmlnaW5TY2FsZTogY2MuVmVjMlxuICAgIC8qKiDmoLnmja7lj6/op4bojIPlm7Qg5ZKMIOS4gOe7hGl0ZW3nmoTkuKrmlbAg5Y675o6JIOi+uei3nS/pl7TpmpQg5p2l6K6h566X5pysaXRlbeeahOecn+WunuWuveW6piAqL1xuICAgIHByaXZhdGUgZ2V0IHdpZHRoKCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwpIHtcbiAgICAgICAgICAgIC8vIOWeguebtOa7keWKqOaXtiDlm7rlrprlrr3luqZcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5sYXlvdXQuYWNjb21tb2RXaWR0aCAtIHRoaXMubGF5b3V0LnNwYWNpbmdXaWR0aCkgLyB0aGlzLmxheW91dC5jb2x1bW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOawtOW5s+aooeW8j+aXtiDlrr3luqbpmo/mhI9cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUud2lkdGggKiB0aGlzLmxheW91dC5nZXRVc2VkU2NhbGVWYWx1ZSh0aGlzLm5vZGUuc2NhbGVYKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDmoLnmja7lj6/op4bojIPlm7Qg5ZKMIOS4gOe7hGl0ZW3nmoTkuKrmlbAg5Y675o6JIOi+uei3nS/pl7TpmpQg5p2l6K6h566X5pysaXRlbeeahOecn+WunumrmOW6piAqL1xuICAgIHByaXZhdGUgZ2V0IGhlaWdodCgpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Lmhvcml6b250YWwpIHtcbiAgICAgICAgICAgIC8vIOawtOW5s+aooeW8j+aXtiDlm7rlrprpq5jluqZcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5sYXlvdXQuYWNjb21tb2RIZWlnaHQgLSB0aGlzLmxheW91dC5zcGFjaW5nV2lkdGgpIC8gdGhpcy5sYXlvdXQuY29sdW1uXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlnoLnm7Tmu5Hliqjml7Yg6auY5bqm6ZqP5oSPXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmhlaWdodCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHRoaXMubm9kZS5zY2FsZVkpXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvLyDlkJFub2Rl5YaZ5YWl5LiA5Liq5pa55rOVIOecgeWOu+S6huWFiOiOt+WPlue7hOS7tueEtuWQjuiwg+eUqOeahOatpemqpFxuICAgICAgICB0aGlzLm5vZGVbJ3dhdGNoU2VsZiddID0gdGhpcy53YXRjaFNlbGYuYmluZCh0aGlzKVxuICAgICAgICBsZXQgd2lkZ2V0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpXG4gICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJVSVN1cGVySXRlbTogaXRlbeS4jeWFgeiuuOaMgmNjLldpZGdldOe7hOS7tiDor7fmiYvliqjnp7vpmaRcIilcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDb21wb25lbnQod2lkZ2V0KVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBpbml0KGxheW91dDogVUlTdXBlckxheW91dCkge1xuICAgICAgICB0aGlzLmxheW91dCA9IGxheW91dFxuICAgICAgICB0aGlzLmxheW91dC5ub2RlLm9uKFVJQ2hhbmdlQnJvdGhlckV2bmV0LCB0aGlzLm9uQ2hhbmdlQnJvdGhlciwgdGhpcylcbiAgICAgICAgdGhpcy5vcmlnaW5TaXplID0gY2Muc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodClcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKHRoaXMub3JpZ2luU2l6ZSlcbiAgICAgICAgdGhpcy5vcmlnaW5TY2FsZSA9IGNjLnYyKHRoaXMubm9kZS5zY2FsZVgsIHRoaXMubm9kZS5zY2FsZVkpXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMud2F0Y2hTaXplLCB0aGlzKVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0NBTEVfQ0hBTkdFRCwgdGhpcy53YXRjaFNpemUsIHRoaXMpXG4gICAgICAgIHRoaXMub25DaGFuZ2VCcm90aGVyKClcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxheW91dC5ub2RlLm9mZihVSUNoYW5nZUJyb3RoZXJFdm5ldCwgdGhpcy5vbkNoYW5nZUJyb3RoZXIsIHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLndhdGNoU2l6ZSwgdGhpcylcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5TQ0FMRV9DSEFOR0VELCB0aGlzLndhdGNoU2l6ZSwgdGhpcylcbiAgICAgICAgdGhpcy51bmxpc3RlbigpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOW9k+WFhOW8n+iKgueCueeahOmhuuW6j+WPmOWMluaXtiDmnaXmlLnlj5joh6rlt7Hnm5HlkKznmoTlr7nosaFcbiAgICAgKiAwLDEsMiwzLDQsNSw2LDcsOCw5IOS+i+WmguWIl+ihqOS4reWFseaciTEw5LiqaXRlbSAw5pivaGVhZGVyIDnmmK9mb290ZXIgXG4gICAgICog5q2j5bqP5o6S5YiX5pe2IOebkeWQrOeahOmhuuW6j+aYryA5LT44LT43LT42LT41LT40LT4zLT4yLT4xLT4wIDDnmoQgYnJvdGhlcj1udWxsIFxuICAgICAqIOWQkeS4i+Whq+WFheeahOmAu+i+keaYryAw6LeR5YiwOeWQjumdoiAwPWZvb3RlciAw55qEYnJvdGhlcj05IOebuOWvuTnnmoTkvY3nva7orr7nva7oh6rlt7Eg5q2k5pe2MT1oZWFkZXIgXG4gICAgICog5ZCR5LiK5aGr5YWF55qE6YC76L6R5pivIDnot5HliLAw5YmN6Z2iIOatpOaXtjk9aGVhZGVyIDnnmoRicm90aGVyPW51bGwg5Li75Yqo6K6+572u6Ieq5bex55u45a+55LqOMOWJjemdouS9jee9ruS5i+WQjiAw55qEYnJvdGhlcj05IDg9Zm9vdGVyXG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkNoYW5nZUJyb3RoZXIoKSB7XG4gICAgICAgIGxldCBfYnJvdGhlciA9IHRoaXMubGF5b3V0LmdldEJyb3RoZXJOb2RlKHRoaXMubm9kZSkgLy/ojrflj5bmiJHlupTor6Xnm5HlkKznmoTpgqPkuKrlhYTlvJ9cbiAgICAgICAgaWYgKF9icm90aGVyPy51dWlkID09IHRoaXMuYnJvdGhlcj8udXVpZCkgcmV0dXJuIC8v5aaC5p6c5rKh5pyJ5Y+Y5YyWIOWImei3s+i/h1xuICAgICAgICB0aGlzLnVubGlzdGVuKCkgLy/miJHnmoTlhYTlvJ/mjaLkurrkuobvvJ/lhYjnp7vpmaTmiJHljp/mnaXnmoRcbiAgICAgICAgdGhpcy5icm90aGVyID0gX2Jyb3RoZXIgLy/ku5bmmK/miJHnmoTlhYTlvJ9cbiAgICAgICAgdGhpcy5saXN0ZW4oKSAvL+ebkeWQrOS7llxuICAgICAgICB0aGlzLndhdGNoQnJvdGhlcigpIC8v55u45a+55YWE5byf6IqC54K55p2l6K6+572u6Ieq5bex55qE5L2N572uXG4gICAgfVxuICAgIHByaXZhdGUgbGlzdGVuKCkge1xuICAgICAgICB0aGlzLmJyb3RoZXI/Lm9uKCdsZWF2ZScsIHRoaXMudW5saXN0ZW4sIHRoaXMpXG4gICAgICAgIHRoaXMuYnJvdGhlcj8ub24oY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgdGhpcy53YXRjaEJyb3RoZXIsIHRoaXMpXG4gICAgfVxuICAgIHByaXZhdGUgdW5saXN0ZW4oKSB7XG4gICAgICAgIHRoaXMuYnJvdGhlcj8ub2ZmKCdsZWF2ZScsIHRoaXMudW5saXN0ZW4sIHRoaXMpXG4gICAgICAgIHRoaXMuYnJvdGhlcj8ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsIHRoaXMud2F0Y2hCcm90aGVyLCB0aGlzKVxuICAgICAgICB0aGlzLmJyb3RoZXIgPSBudWxsXG4gICAgfVxuICAgIC8qKiDlvZPmiJHnmoTlsLrlr7gv57yp5pS+5pS55Y+Y5pe2ICovXG4gICAgcHJpdmF0ZSB3YXRjaFNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5jb2x1bW4gPiAxKSB7IC8v5aaC5p6c5pivR3JpZOaooeW8jyDkuI3lhYHorrjkv67mlLnlsLrlr7gv57yp5pS+IOW8uuWItuaUueWbnuadpVxuICAgICAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKHRoaXMub3JpZ2luU2l6ZSlcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRTY2FsZSh0aGlzLm9yaWdpblNjYWxlKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsICYmICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS53aWR0aCAhPSB0aGlzLm9yaWdpblNpemUud2lkdGggfHwgdGhpcy5ub2RlLnNjYWxlWCAhPSB0aGlzLm9yaWdpblNjYWxlLngpKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuWeguebtOaOkuWIl+S4jeWFgeiuuOS/ruaUueOAkOWuveW6puOAkVwiKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS53aWR0aCA9IHRoaXMub3JpZ2luU2l6ZS53aWR0aFxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZVggPSB0aGlzLm9yaWdpblNjYWxlLnhcblxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmxheW91dC5ob3Jpem9udGFsICYmICh0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUoKS5oZWlnaHQgIT0gdGhpcy5vcmlnaW5TaXplLmhlaWdodCB8fCB0aGlzLm5vZGUuc2NhbGVZICE9IHRoaXMub3JpZ2luU2NhbGUueSkpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwi5rC05bmz5o6S5YiX5LiN5YWB6K645L+u5pS544CQ6auY5bqm44CRXCIpXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmhlaWdodCA9IHRoaXMub3JpZ2luU2l6ZS5oZWlnaHRcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVZID0gdGhpcy5vcmlnaW5TY2FsZS55XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpoLmnpzmiJHnm5HlkKzkuoblhYTlvJ/oioLngrnlsLHorr7nva7oh6rlt7Hnm7jlr7nlhYTlvJ/oioLngrnnmoTkvY3nva7vvIzlkKbliJkg5oiR5bCx5Y+R6YCB5LiA5Liq5L2N572u5Y+Y5YyW55qE5raI5oGvIOiuqeebkeWQrOaIkeeahOWFhOW8n+ebuOWvueaIkeWBmuWHuuWPmOWMllxuICAgICAgICAgICAgdGhpcy5icm90aGVyICYmIHRoaXMud2F0Y2hCcm90aGVyKClcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnJlc2V0U2Nyb2xsVmlldygpXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VEKVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGVbJ2luZGV4J10gPT0gMCAmJiB0aGlzLmxheW91dC5pc05vcm1hbFNpemUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih0aGlzLmxheW91dC5nZXRHcm91cEhlYWRlcih0aGlzLm5vZGUpKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOiuvue9ruiHquW3seebuOWvueS6juS4iuS4gOS4quWFhOW8n+iKgueCueeahOS9jee9rlxuICAgIHB1YmxpYyB3YXRjaEJyb3RoZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5icm90aGVyKSByZXR1cm5cbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclRvRm9vdGVyKSB7IC8v5q2j5bqP5o6S5YiX5pe2XG4gICAgICAgICAgICB0aGlzLmhlYWRlclRvRm9vdGVyUmVsYXRpdmVUb0Zvb3Rlcih0aGlzLmJyb3RoZXIpXG4gICAgICAgIH0gZWxzZSB7Ly/lgJLluo/mjpLliJfml7ZcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyVG9IZWFkZXJSZWxhdGl2ZVRvRm9vdGVyKHRoaXMuYnJvdGhlcilcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIGlzT3V0T2ZCb3VuZGFyeShvZmZzZXQ6IGNjLlZlYzIpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsICYmIG9mZnNldC55ID09IDApIHJldHVybiB0cnVlXG4gICAgICAgIGlmICh0aGlzLmxheW91dC5ob3Jpem9udGFsICYmIG9mZnNldC54ID09IDApIHJldHVybiB0cnVlXG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICAvKiog5LuO5LiL5Yiw5LiK5o6S5bqP5pa55ZCRIOajgOafpeWktOmDqOaYr+WQpumcgOimgeWQkeS4iuWhq+WFhSAqL1xuICAgIHByaXZhdGUgZm9vdGVyVG9IZWFkZXJXYXRjaEhlYWRlcigpIHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5piv5aS06YOo5LiA57uE55qE5Lu75oSP5LiA5Liq5pe26Lez6L+HIOavlOWmguS4gOe7hOaciTPkuKppdGVtIOWPquiuoeeulyAw77yMMe+8jDIgXG4gICAgICAgIGlmICh0aGlzLmxheW91dC5nZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlKSA+PSB0aGlzLmxheW91dC5jb2x1bW4pIHJldHVyblxuICAgICAgICAvLyDlpoLmnpzmraTml7bjgJDlsL7pg6jjgJHlt7Lnu4/mmK/mnIDlkI7kuIDkuKrmlbDmja7ml7ZcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddICsgMVxuICAgICAgICBpZiAoaW5kZXggPj0gdGhpcy5sYXlvdXQubWF4SXRlbVRvdGFsKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMubGF5b3V0LmZvb3Rlckxvb3AgfHwgdGhpcy5sYXlvdXQuc2Nyb2xsVG9IZWFkZXJPckZvb3RlcikgcmV0dXJuXG4gICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgfVxuICAgICAgICAvLyDorqHnrpfotoXlh7rnmoTlgY/np7vph48gKOS7juS4i+WIsOS4iuaOkuW6j+aWueWQkeaXtiDlpLTpg6jlnKgg5LiL5bC+6YOo5Zyo5LiKIOajgOa1i+OAkOWktOmDqOOAkeaYr+WQpui2heWHuuS4i+i+ueahhilcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMubGF5b3V0LmlzT3V0T2ZCb3VuZGFyeUZvb3Rlcih0aGlzLm5vZGUpXG4gICAgICAgIC8vIOayoeaciei2heWHuuaXtui3s+i/h1xuICAgICAgICBpZiAoIXRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHJldHVyblxuICAgICAgICAvLyDlsIboh6rlt7HnmoTmlbDmja7ntKLlvJUgKyAxXG4gICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgIC8vIOWPkemAgemAmuefpeWIsOW6lOeUqOWxgiDliLfmlrDmmL7npLpcbiAgICAgICAgdGhpcy5sYXlvdXQubm90aWZ5UmVmcmVzaEl0ZW0odGhpcy5ub2RlKVxuICAgICAgICAvLyDlj5Hnu5nnm5HlkKzmiJHnmoToioLngrkg6YCa55+l5oiR56a75byA5LqGIOenu+mZpOWvueaIkeeahOaJgOacieebkeWQrFxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImxlYXZlXCIpXG4gICAgICAgIC8vIOWwhuiHquW3seeahOiKgueCuee0ouW8leiuvue9ruWIsOWwvumDqFxuICAgICAgICB0aGlzLmxheW91dC5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLCB0aGlzLmxheW91dC5jaGlsZHJlbi5sZW5ndGggLSAxKVxuICAgIH1cbiAgICAvKiog5LuO5LiL5Yiw5LiK5o6S5bqP5pa55ZCRIOajgOafpeWwvumDqOaYr+WQpumcgOimgeWQkeS4i+Whq+WFhSAqL1xuICAgIHByaXZhdGUgZm9vdGVyVG9IZWFkZXJXYXRjaEZvb3RlcigpIHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5piv5bC+6YOo5LiA57uE55qE5Lu75oSP5LiA5Liq5pe26Lez6L+HIOavlOWmguS4gOe7hOaciTPkuKppdGVtIOWPquiuoeeul+acq+WwvueahDPkuKppdGVtIFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQuZ2V0U2libGluZ0luZGV4KHRoaXMubm9kZSkgPCB0aGlzLmxheW91dC5jaGlsZHJlbi5sZW5ndGggLSB0aGlzLmxheW91dC5jb2x1bW4pIHJldHVyblxuICAgICAgICAvLyDlpoLmnpzmraTml7bjgJDlpLTpg6jjgJHlt7Lnu4/mmK/nrKzkuIDkuKrmlbDmja7ml7ZcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5sYXlvdXQuaGVhZGVyWydpbmRleCddIC0gMVxuICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInkvb/nlKjml6DpmZDlvqrnjq/lip/og70g5ZCm5YiZ5LiN5b6A5LiL6LWwXG4gICAgICAgICAgICBpZiAoIXRoaXMubGF5b3V0LmhlYWRlckxvb3AgfHwgdGhpcy5sYXlvdXQuc2Nyb2xsVG9IZWFkZXJPckZvb3RlcikgcmV0dXJuXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMubm9kZVsnaW5kZXgnXVxuICAgICAgICB9XG4gICAgICAgIC8vIOiuoeeul+i2heWHuueahOWBj+enu+mHjyAo5LuO5LiL5Yiw5LiK5o6S5bqP5pa55ZCR5pe2IOWktOmDqOWcqCDkuIvlsL7pg6jlnKjkuIog5qOA5rWL44CQ5bC+6YOo44CR5piv5ZCm6LaF5Ye65LiL6L655qGGKVxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5sYXlvdXQuaXNPdXRPZkJvdW5kYXJ5SGVhZGVyKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5rKh5pyJ6LaF5Ye65pe26Lez6L+HXG4gICAgICAgIGlmICghdGhpcy5pc091dE9mQm91bmRhcnkob2Zmc2V0KSkgcmV0dXJuXG4gICAgICAgIC8vIOWwhuiHquW3seeahOaVsOaNrue0ouW8lSAtIDFcbiAgICAgICAgdGhpcy5ub2RlWydpbmRleCddID0gaW5kZXhcbiAgICAgICAgLy8g5Y+R6YCB6YCa55+l5Yiw5bqU55So5bGCIOWIt+aWsOaYvuekulxuICAgICAgICB0aGlzLmxheW91dC5ub3RpZnlSZWZyZXNoSXRlbSh0aGlzLm5vZGUpXG4gICAgICAgIC8vIOWPkee7meebkeWQrOaIkeeahOWFhOW8nyDpgJrnn6XmiJHnprvlvIDkuoYg56e76Zmk5a+55oiR55qE5omA5pyJ55uR5ZCsXG4gICAgICAgIHRoaXMubm9kZS5lbWl0KFwibGVhdmVcIilcbiAgICAgICAgLy8g5Zug5Li65oiR5piv5bC+6YOoIOaIkeebkeWQrOS6huWIq+S6uu+8jOatpOaXtuenu+mZpOaIkeeahOaJgOacieebkeWQrCDlm6DkuLrmiJHpqazkuIrlsLHopoHmiJDkuLrogIHlpKcg6ICB5aSn5LiN6ZyA6KaB55uR5ZCs5Lu75L2V5Lq6XG4gICAgICAgIHRoaXMudW5saXN0ZW4oKVxuICAgICAgICAvLyDlm6DkuLrmiJHmmK/ogIHlpKcg5oiR5LiN6IO955u45a+55Yir5Lq65p2l6K6+572u6Ieq5bex55qE55u45a+55L2N572u77yM5omA5LulXGLmiJHpnIDopoHkuLvliqjorr7nva7oh6rlt7Eo55u45a+55LiK5LiA5Liq6ICB5aSn55qE5L2N572u5p2l6K6+572u6Ieq5bexKSDliKvkurrpg73kvJrnm7jlr7nmiJHnmoTkvY3nva7lgZrlh7rlj5jljJZcbiAgICAgICAgdGhpcy5mb290ZXJUb0hlYWRlclJlbGF0aXZlVG9IZWFkZXIodGhpcy5sYXlvdXQuaGVhZGVyKVxuICAgICAgICAvLyDlsIboh6rlt7HnmoToioLngrnntKLlvJXorr7nva7liLDlpLTpg6hcbiAgICAgICAgdGhpcy5sYXlvdXQuc2V0U2libGluZ0luZGV4KHRoaXMubm9kZSwgMClcbiAgICB9XG4gICAgLyoqIOS7juS4iuWIsOS4i+aOkuW6j+aWueWQkSDmo4Dmn6XlpLTpg6jmmK/lkKbpnIDopoHlkJHkuIvloavlhYUgKi9cbiAgICBwcml2YXRlIGhlYWRlclRvRm9vdGVyV2F0Y2hIZWFkZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOS4jeaYr+WktOmDqOS4gOe7hOeahOS7u+aEj+S4gOS4quaXtui3s+i/hyDmr5TlpoLkuIDnu4TmnIkz5LiqaXRlbSDlj6rorqHnrpcgMO+8jDHvvIwyIFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQuZ2V0U2libGluZ0luZGV4KHRoaXMubm9kZSkgPj0gdGhpcy5sYXlvdXQuY29sdW1uKSByZXR1cm5cbiAgICAgICAgLy8g5aaC5p6c5q2k5pe244CQ5bC+6YOo44CR5bey57uP5piv56ys5LiA5Liq5pWw5o2u5pe2ICBcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddICsgMVxuICAgICAgICBpZiAoaW5kZXggPiB0aGlzLmxheW91dC5tYXhJdGVtVG90YWwgLSAxKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInkvb/nlKjml6DpmZDlvqrnjq/lip/og70g5ZCm5YiZ5LiN5b6A5LiL6LWwXG4gICAgICAgICAgICBpZiAoIXRoaXMubGF5b3V0LmZvb3Rlckxvb3AgfHwgdGhpcy5sYXlvdXQuc2Nyb2xsVG9IZWFkZXJPckZvb3RlcikgcmV0dXJuXG4gICAgICAgICAgICBpbmRleCA9IDBcbiAgICAgICAgfVxuICAgICAgICAvLyDorqHnrpfotoXlh7rnmoTlgY/np7vph48gKOS7juS4i+WIsOS4iuaOkuW6j+aWueWQkeaXtiDlpLTpg6jlnKjkuIsg5bC+6YOo5Zyo5LiKIOajgOa1i+OAkOWwvumDqOOAkeaYr+WQpui2heWHuuS4i+i+ueahhilcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMubGF5b3V0LmlzT3V0T2ZCb3VuZGFyeUhlYWRlcih0aGlzLm5vZGUpXG4gICAgICAgIC8vIOayoeaciei2heWHuuaXtui3s+i/h1xuICAgICAgICBpZiAoIXRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHJldHVyblxuICAgICAgICAvLyDlsIboh6rlt7HnmoTmlbDmja7ntKLlvJUgKyAxXG4gICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgIC8vIOWPkemAgemAmuefpeWIsOW6lOeUqOWxgiDliLfmlrDmmL7npLpcbiAgICAgICAgdGhpcy5sYXlvdXQubm90aWZ5UmVmcmVzaEl0ZW0odGhpcy5ub2RlKVxuICAgICAgICAvLyDlj5Hnu5nnm5HlkKzmiJHnmoTlhYTlvJ8g6YCa55+l5oiR56a75byA5LqGIOenu+mZpOWvueaIkeeahOaJgOacieebkeWQrFxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImxlYXZlXCIpXG4gICAgICAgIC8vIOWwhuiHquW3seeahOiKgueCuee0ouW8leiuvue9ruWIsOWwvumDqFxuICAgICAgICB0aGlzLmxheW91dC5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLCB0aGlzLmxheW91dC5jaGlsZHJlbi5sZW5ndGggLSAxKVxuICAgIH1cbiAgICAvKiog5LuO5LiK5Yiw5LiL5o6S5bqP5pa55ZCRIOajgOafpeWwvumDqOaYr+WQpumcgOimgeWQkeS4iuWhq+WFhSAqL1xuICAgIHByaXZhdGUgaGVhZGVyVG9Gb290ZXJXYXRjaEZvb3RlcigpIHtcbiAgICAgICAgLy8g5aaC5p6c5LiN5piv5bC+6YOo5LiA57uE55qE5Lu75oSP5LiA5Liq5pe26Lez6L+HIOavlOWmguS4gOe7hOaciTPkuKppdGVtIOWPquiuoeeul+acq+WwvueahDPkuKppdGVtIFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQuZ2V0U2libGluZ0luZGV4KHRoaXMubm9kZSkgPCB0aGlzLmxheW91dC5jaGlsZHJlbi5sZW5ndGggLSB0aGlzLmxheW91dC5jb2x1bW4pIHJldHVyblxuICAgICAgICAvLyDlpoLmnpzmraTml7bjgJDlpLTpg6jjgJHlt7Lnu4/mmK/nrKzkuIDkuKrmlbDmja7ml7YgXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGF5b3V0LmhlYWRlclsnaW5kZXgnXSAtIDFcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5L2/55So5peg6ZmQ5b6q546v5Yqf6IO9IOWQpuWImeS4jeW+gOS4i+i1sFxuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5oZWFkZXJMb29wIHx8IHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyT3JGb290ZXIpIHJldHVyblxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLm5vZGVbJ2luZGV4J11cbiAgICAgICAgfVxuICAgICAgICAvLyDorqHnrpfotoXlh7rnmoTlgY/np7vph48gKOS7juS4iuWIsOS4i+aOkuW6j+aWueWQkeaXtiDlpLTpg6jlnKjkuIog5bC+6YOo5Zyo5LiLIOajgOa1i+OAkOWwvumDqOOAkeaYr+WQpui2heWHuuS4i+i+ueahhilcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMubGF5b3V0LmlzT3V0T2ZCb3VuZGFyeUZvb3Rlcih0aGlzLm5vZGUpXG4gICAgICAgIC8vIOayoeaciei2heWHuuaXtui3s+i/h1xuICAgICAgICBpZiAoIXRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHJldHVyblxuICAgICAgICAvLyDlsIboh6rlt7HnmoTmlbDmja7ntKLlvJUgLSAxXG4gICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgIC8vIOWPkemAgemAmuefpeWIsOW6lOeUqOWxgiDliLfmlrDmmL7npLpcbiAgICAgICAgdGhpcy5sYXlvdXQubm90aWZ5UmVmcmVzaEl0ZW0odGhpcy5ub2RlKVxuICAgICAgICAvLyDlj5Hnu5nnm5HlkKzmiJHnmoTlhYTlvJ8g6YCa55+l5oiR56a75byA5LqGIOenu+mZpOWvueaIkeeahOaJgOacieebkeWQrFxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImxlYXZlXCIpXG4gICAgICAgIC8vIOWboOS4uuaIkeaYr+WwvumDqCDmiJHnm5HlkKzkuobliKvkurrvvIzmraTml7bnp7vpmaTmiJHnmoTmiYDmnInnm5HlkKwg5Zug5Li65oiR6ams5LiK5bCx6KaB5oiQ5Li66ICB5aSnIOiAgeWkp+S4jemcgOimgeebkeWQrOS7u+S9leS6ulxuICAgICAgICB0aGlzLnVubGlzdGVuKClcbiAgICAgICAgLy8g5Zug5Li65oiR5piv6ICB5aSnIOaIkeS4jeiDveebuOWvueWIq+S6uuadpeiuvue9ruiHquW3seeahOebuOWvueS9jee9ru+8jOaJgOS7pVxi5oiR6ZyA6KaB5Li75Yqo6K6+572u6Ieq5bexKOebuOWvueS4iuS4gOS4quiAgeWkp+eahOS9jee9ruadpeiuvue9ruiHquW3sSkg5Yir5Lq66YO95Lya55u45a+55oiR55qE5L2N572u5YGa5Ye65Y+Y5YyWXG4gICAgICAgIHRoaXMuaGVhZGVyVG9Gb290ZXJSZWxhdGl2ZVRvSGVhZGVyKHRoaXMubGF5b3V0LmhlYWRlcilcbiAgICAgICAgLy8g5bCG6Ieq5bex55qE6IqC54K557Si5byV6K6+572u5Yiw5bC+6YOoXG4gICAgICAgIHRoaXMubGF5b3V0LnNldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUsIDApXG4gICAgfVxuICAgIC8qKiBpc1Njcm9sbFRvRm9vdGVyPXRydWUg5ZCR5LiL5ruR5YqoICovXG4gICAgcHVibGljIHdhdGNoU2VsZihpc1Njcm9sbFRvRm9vdGVyOiBib29sZWFuKSB7XG4gICAgICAgIGlmIChpc1Njcm9sbFRvRm9vdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDku47jgJDkuIrliLDkuIvmjpLluo/jgJHmlrnlkJEg5qOA5p+l44CQ5bC+6YOo44CR5piv5ZCm6ZyA6KaB5ZCR5LiK5aGr5YWFXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUb0Zvb3RlcldhdGNoRm9vdGVyKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO44CQ5LiL5Yiw5LiK5o6S5bqP44CR5pa55ZCRIOajgOafpeOAkOWktOmDqOOAkeaYr+WQpumcgOimgeWQkeS4iuWhq+WFhVxuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVG9IZWFkZXJXYXRjaEhlYWRlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICAvLyDku47jgJDkuIrliLDkuIvmjpLluo/jgJHmlrnlkJEg5qOA5p+l44CQ5aS06YOo44CR5piv5ZCm6ZyA6KaB5ZCR5LiL5aGr5YWFXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJUb0Zvb3RlcldhdGNoSGVhZGVyKClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO44CQ5LiL5Yiw5LiK5o6S5bqP44CR5pa55ZCRIOajgOafpeOAkOWwvumDqOOAkeaYr+WQpumcgOimgeWQkeS4i+Whq+WFhVxuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyVG9IZWFkZXJXYXRjaEZvb3RlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOS7juS4i+WIsOS4iiDku47lj7PliLDlt6Yg5o6S5bqP5pa55ZCRICDorr7nva7oh6rlt7HliLDnm7jlr7lub2Rl55qE5aS06YOoICovXG4gICAgcHJpdmF0ZSBmb290ZXJUb0hlYWRlclJlbGF0aXZlVG9IZWFkZXIocmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIC8vIOS7juS4i+WIsOS4ilxuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwSGVhZGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBGb290ZXIodGhpcy5ub2RlKS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cEJvdHRvbVkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cExlZnRYKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICAgICAgcG9zLnkgPSByZWxhdGl2ZS55XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlWydpbmRleCddID09IDApIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5LuO5Y+z5Yiw5bemXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEhlYWRlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwUmlnaHRYKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cEZvb3Rlcih0aGlzLm5vZGUpLnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSByZWxhdGl2ZS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cFRvcFkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVbJ2luZGV4J10gPT0gMCkge1xuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS55XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcylcbiAgICB9XG4gICAgLyoqIOS7juS4i+WIsOS4iiDku47lj7PliLDlt6Yg5o6S5bqP5pa55ZCRIOiuvue9ruiHquW3seWIsOebuOWvuW5vZGXnmoTlsL7pg6ggKi9cbiAgICBwcml2YXRlIGZvb3RlclRvSGVhZGVyUmVsYXRpdmVUb0Zvb3RlcihyZWxhdGl2ZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcbiAgICAgICAgLy8g5LuO5LiL5Yiw5LiKXG4gICAgICAgIGlmICh0aGlzLmxheW91dC52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmlzR3JvdXBGb290ZXIocmVsYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cEhlYWRlcih0aGlzLm5vZGUpLnhcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwVG9wWSh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwUmlnaHRYKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICAgICAgcG9zLnkgPSByZWxhdGl2ZS55XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDku47lj7PliLDlt6ZcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwRm9vdGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBMZWZ0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gcmVsYXRpdmUueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBCb3R0b21ZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcylcbiAgICB9XG4gICAgLyoqIOS7juS4iuWIsOS4iyDku47lt6bliLDlj7Mg5o6S5bqP5pa55ZCRIOiuvue9ruiHquW3seWIsOebuOWvuW5vZGXnmoTlpLTpg6ggKi9cbiAgICBwcml2YXRlIGhlYWRlclRvRm9vdGVyUmVsYXRpdmVUb0hlYWRlcihyZWxhdGl2ZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcbiAgICAgICAgLy8g5LuO5LiK5Yiw5LiLXG4gICAgICAgIGlmICh0aGlzLmxheW91dC52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmlzR3JvdXBIZWFkZXIocmVsYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cEZvb3Rlcih0aGlzLm5vZGUpLnhcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwVG9wWSh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwTGVmdFgodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgICAgICBwb3MueSA9IHJlbGF0aXZlLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGVbJ2luZGV4J10gPT0gMCkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS54XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDku47lt6bliLDlj7NcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwSGVhZGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBMZWZ0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBGb290ZXIodGhpcy5ub2RlKS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gcmVsYXRpdmUueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBUb3BZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlWydpbmRleCddID09IDApIHtcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpXG4gICAgfVxuICAgIC8qKiDku47kuIrliLDkuIsg5LuO5bem5Yiw5Y+zIOaOkuW6j+aWueWQkSDorr7nva7oh6rlt7HliLDnm7jlr7lub2Rl5bC+6YOoICovXG4gICAgcHJpdmF0ZSBoZWFkZXJUb0Zvb3RlclJlbGF0aXZlVG9Gb290ZXIocmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIC8vIOS7juS4iuWIsOS4i1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwRm9vdGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cEJvdHRvbVkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cFJpZ2h0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gcmVsYXRpdmUueVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5LuO5bem5Yiw5Y+zXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEZvb3RlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwUmlnaHRYKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cEhlYWRlcih0aGlzLm5vZGUpLnlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSByZWxhdGl2ZS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cEJvdHRvbVkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKVxuICAgIH1cbn1cbiJdfQ==