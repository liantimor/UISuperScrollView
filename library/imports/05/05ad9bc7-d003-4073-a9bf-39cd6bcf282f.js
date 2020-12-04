"use strict";
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
 * @Last Modified time: 2020-12-04 14:41:01
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
        this.node['saveOriginSize'] = this.saveOriginSize.bind(this);
        var widget = this.node.getComponent(cc.Widget);
        if (widget) {
            cc.warn("UISuperItem: item不允许挂cc.Widget组件 请手动移除");
            this.node.removeComponent(widget);
        }
    };
    UISpuerItem.prototype.saveOriginSize = function () {
        this.originSize = cc.size(this.width, this.height);
        this.node.setContentSize(this.originSize);
        this.originScale = cc.v2(this.node.scaleX, this.node.scaleY);
    };
    UISpuerItem.prototype.init = function (layout) {
        this.layout = layout;
        this.layout.node.on(UISuperLayout_1.UIChangeBrotherEvnet, this.onChangeBrother, this);
        this.saveOriginSize();
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