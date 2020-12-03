
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
require('./assets/cores/UISuperItem');
require('./assets/cores/UISuperLayout');
require('./assets/cores/UISuperScrollView');
require('./assets/examples/chat/chatItem');
require('./assets/examples/chat/chatPanel');
require('./assets/examples/main');
require('./assets/examples/vertical/verticalItem');
require('./assets/examples/vertical/verticalLoadAndRefresh');
require('./assets/examples/vertical/verticalSimple');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0746fbblyhFY4dsGbqYC+cs', 'main');
// examples/main.ts

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
var main = /** @class */ (function (_super) {
    __extends(main, _super);
    function main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    main.prototype.goto = function (event, scene) {
        cc.director.loadScene(scene);
    };
    main = __decorate([
        ccclass
    ], main);
    return main;
}(cc.Component));
exports.default = main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQWtDLHdCQUFZO0lBQTlDOztJQUlBLENBQUM7SUFIRyxtQkFBSSxHQUFKLFVBQUssS0FBVSxFQUFFLEtBQWE7UUFDMUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUhnQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBSXhCO0lBQUQsV0FBQztDQUpELEFBSUMsQ0FKaUMsRUFBRSxDQUFDLFNBQVMsR0FJN0M7a0JBSm9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIGdvdG8oZXZlbnQ6IGFueSwgc2NlbmU6IHN0cmluZyl7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShzY2VuZSlcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/vertical/verticalItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34da2XkCIpPIp4Pkg7X+5GV', 'verticalItem');
// examples/vertical/verticalItem.ts

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
var verticalItem = /** @class */ (function (_super) {
    __extends(verticalItem, _super);
    function verticalItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    verticalItem.prototype.show = function (info, index, remove) {
        this.index = index;
        this.remove = remove;
        this.label.string = info.message;
    };
    verticalItem.prototype.onRemove = function () {
        this.remove(this.index);
    };
    verticalItem.prototype.onClick = function () {
    };
    __decorate([
        property(cc.Label)
    ], verticalItem.prototype, "label", void 0);
    verticalItem = __decorate([
        ccclass
    ], verticalItem);
    return verticalItem;
}(cc.Component));
exports.default = verticalItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy92ZXJ0aWNhbC92ZXJ0aWNhbEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUFpQkM7UUFkRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQWMzQixDQUFDO0lBWFUsMkJBQUksR0FBWCxVQUFZLElBQVMsRUFBRSxLQUFhLEVBQUUsTUFBZ0I7UUFDbEQsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUNwQyxDQUFDO0lBQ08sK0JBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ08sOEJBQU8sR0FBZjtJQUVBLENBQUM7SUFiRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOytDQUNJO0lBSE4sWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQWlCaEM7SUFBRCxtQkFBQztDQWpCRCxBQWlCQyxDQWpCeUMsRUFBRSxDQUFDLFNBQVMsR0FpQnJEO2tCQWpCb0IsWUFBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVydGljYWxJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIHByaXZhdGUgaW5kZXg6IG51bWJlclxuICAgIHByaXZhdGUgcmVtb3ZlOiBGdW5jdGlvblxuICAgIHB1YmxpYyBzaG93KGluZm86IGFueSwgaW5kZXg6IG51bWJlciwgcmVtb3ZlOiBGdW5jdGlvbikge1xuICAgICAgICB0aGlzLmluZGV4ID0gaW5kZXhcbiAgICAgICAgdGhpcy5yZW1vdmUgPSByZW1vdmVcbiAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBpbmZvLm1lc3NhZ2VcbiAgICB9XG4gICAgcHJpdmF0ZSBvblJlbW92ZSgpIHtcbiAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5pbmRleClcbiAgICB9XG4gICAgcHJpdmF0ZSBvbkNsaWNrKCkge1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cores/UISuperScrollView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cf9af4O7wZKvocAG07bRvtr', 'UISuperScrollView');
// cores/UISuperScrollView.ts

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
 * @Date: 2020-11-19 01:15:04
 * @Last Modified by: steveJobs
 * @Last Modified time: 2020-11-19 01:16:52
 * @Description: Description
 */
var UISuperLayout_1 = require("./UISuperLayout");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var EPSILON = 1e-4;
var UISpuerScrollView = /** @class */ (function (_super) {
    __extends(UISpuerScrollView, _super);
    function UISpuerScrollView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerOutOffset = 200;
        _this.headerMultiple = 2;
        _this.footerOutOffset = 200;
        _this.footerMultiple = 2;
        _this.pullDownEvents = [];
        _this.pullUpEvents = [];
        _this.isMoveHeader = false;
        _this.isMoveFooter = false;
        _this.isLockHeader = false;
        _this.isLockFooter = false;
        _this.headerProgress = 0;
        _this.footerProgress = 0;
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
            if (this._layout == null)
                this._layout = this.content.getComponent(UISuperLayout_1.default);
            return this._layout;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isHeader", {
        get: function () {
            var _a, _b, _c, _d;
            if (this.layout.headerToFooter) {
                if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) {
                    return ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.header['index']) == 0;
                }
            }
            else {
                if ((_c = this.layout) === null || _c === void 0 ? void 0 : _c.footer) {
                    return ((_d = this.layout) === null || _d === void 0 ? void 0 : _d.footer['index']) == this.layout.maxItemTotal - 1;
                }
            }
            return true;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        get: function () {
            var _a, _b, _c;
            if (this.layout.headerToFooter) {
                if ((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) {
                    return this.layout.footer['index'] == this.layout.maxItemTotal - 1;
                }
            }
            else {
                if ((_b = this.layout) === null || _b === void 0 ? void 0 : _b.header) {
                    return ((_c = this.layout) === null || _c === void 0 ? void 0 : _c.header['index']) == 0;
                }
            }
            return true;
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
        this.isMoveHeader = false;
        this.isMoveFooter = false;
        if (this.isLockHeader || this.isLockFooter) {
            var outOfBoundary = this.getHowMuchOutOfBoundary();
            var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
            var autoScroll = true;
            if (offset == 0 || this.isLockHeader && offset < 0 || this.isLockFooter && offset > 0) {
                this.clearProgress();
                autoScroll = false;
            }
            this.isLockHeader = false;
            this.isLockFooter = false;
            if (autoScroll) {
                this['_outOfBoundaryAmountDirty'] = true;
                this['_processInertiaScroll']();
            }
        }
        else {
            this.clearProgress();
        }
    };
    /**重置列表 当列表滑动到底部时 然后不管通过什么方式(同步|异步)减少了整体的(高度|缩放|尺寸) 时保证内容显示正确 */
    UISpuerScrollView.prototype.reset = function () {
        this['_outOfBoundaryAmountDirty'] = true;
        var offset = this.getHowMuchOutOfBoundary();
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
            this['_processInertiaScroll']();
        }
    };
    UISpuerScrollView.prototype._onTouchMoved = function (event, captureListeners) {
        _super.prototype['_onTouchMoved'].call(this, event, captureListeners);
        if (this.isCalculPull) {
            var outOfBoundary = this.getHowMuchOutOfBoundary();
            var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
            if (offset > 0 && this.isHeader && !this.isLockHeader && !this.isLockFooter) {
                this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
                this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
                this.isMoveHeader = this.headerProgress >= this.headerMultiple;
                this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: this.isMoveHeader ? "wait" : "touch" });
                this.emitPullUpEvent({ action: false, progress: 0, progressStage: "release" });
            }
            else if (offset < 0 && this.isFooter && !this.isLockFooter && !this.isLockHeader) {
                this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
                this.isMoveFooter = this.footerProgress >= this.footerMultiple;
                this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: this.isMoveFooter ? "wait" : "touch" });
                this.emitPullDownEvent({ action: false, progress: 0, progressStage: "release" });
            }
        }
    };
    UISpuerScrollView.prototype._dispatchEvent = function (event) {
        _super.prototype['_dispatchEvent'].call(this, event);
        if (event == 'scroll-ended') {
            this.layout.scrollToHeaderOrFooter = false;
        }
    };
    UISpuerScrollView.prototype._getContentTopBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.topBoundary;
        }
        else {
            local = this._getContentBottomBoundary() + viewSize.height;
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentBottomBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.bottomBoundary;
        }
        else {
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentLeftBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.leftBoundary;
        }
        else {
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentRightBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.rightBoundary;
        }
        else {
            local = this._getContentLeftBoundary() + viewSize.width;
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerOutOffset;
        }
        return local;
    };
    UISpuerScrollView.prototype._startAutoScroll = function (deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
            if (this.isMoveHeader && !this.isLockHeader) {
                this.isLockHeader = true;
                this.vertical && (deltaMove.y -= this.headerOutOffset);
                this.horizontal && (deltaMove.x += this.headerOutOffset);
                this.emitPullDownEvent({ action: true, progress: this.headerProgress, progressStage: 'lock' });
            }
            else if (this.isMoveFooter && !this.isLockFooter) {
                this.isLockFooter = true;
                this.vertical && (deltaMove.y += this.footerOutOffset);
                this.horizontal && (deltaMove.x -= this.footerOutOffset);
                this.emitPullUpEvent({ action: true, progress: this.footerProgress, progressStage: 'lock' });
            }
        }
        _super.prototype['_startAutoScroll'].call(this, deltaMove, timeInSecond, attenuated);
    };
    UISpuerScrollView.prototype._updateScrollBar = function (outOfBoundary) {
        _super.prototype['_updateScrollBar'].call(this, outOfBoundary);
        if (!this.isCalculPull)
            return;
        if (this['_autoScrollBraking'])
            return;
        if (!this.autoScrolling)
            return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0) {
            var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
            var progressStage = void 0;
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1);
                progressStage = 'lock';
            }
            else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
                progressStage = 'release';
            }
            this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: progressStage });
        }
        else if (offset < 0) {
            var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
            var progressStage = void 0;
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1);
                progressStage = 'lock';
            }
            else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
                progressStage = 'release';
            }
            this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: progressStage });
        }
        else if (offset == 0) {
            if (!this.isLockHeader && !this.isLockFooter) {
                this.clearProgress();
            }
        }
    };
    UISpuerScrollView.prototype.clearProgress = function () {
        this.headerProgress = 0;
        this.footerProgress = 0;
        this.emitPullDownEvent({ action: false, progress: 0, progressStage: 'release' });
        this.emitPullUpEvent({ action: false, progress: 0, progressStage: 'release' });
    };
    UISpuerScrollView.prototype.emitPullDownEvent = function (data) {
        cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data);
    };
    UISpuerScrollView.prototype.emitPullUpEvent = function (data) {
        cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data);
    };
    __decorate([
        property({
            displayName: "顶部偏移量",
            tooltip: "下拉时超过此偏移会发送下拉事件"
        })
    ], UISpuerScrollView.prototype, "headerOutOffset", void 0);
    __decorate([
        property({ displayName: "满足触发Header的倍数" })
    ], UISpuerScrollView.prototype, "headerMultiple", void 0);
    __decorate([
        property({
            displayName: "底部偏移量",
            tooltip: "上拉时超过此偏移会发送上拉事件"
        })
    ], UISpuerScrollView.prototype, "footerOutOffset", void 0);
    __decorate([
        property({ displayName: "满足触发Footer的倍数" })
    ], UISpuerScrollView.prototype, "footerMultiple", void 0);
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
        ccclass,
        menu("UISpuerScrollView")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsaURBQTRDO0FBQ3RDLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBQ2xELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQVFyQjtJQUErQyxxQ0FBYTtJQUE1RDtRQUFBLHFFQThPQztRQTFPTSxxQkFBZSxHQUFXLEdBQUcsQ0FBQTtRQUNZLG9CQUFjLEdBQVcsQ0FBQyxDQUFBO1FBSW5FLHFCQUFlLEdBQVcsR0FBRyxDQUFBO1FBQ1ksb0JBQWMsR0FBVyxDQUFDLENBQUE7UUFJbkUsb0JBQWMsR0FBZ0MsRUFBRSxDQUFBO1FBSWhELGtCQUFZLEdBQWdDLEVBQUUsQ0FBQTtRQUl6QyxrQkFBWSxHQUFZLEtBQUssQ0FBQTtRQUM3QixrQkFBWSxHQUFZLEtBQUssQ0FBQTtRQUM3QixrQkFBWSxHQUFZLEtBQUssQ0FBQTtRQUM3QixrQkFBWSxHQUFZLEtBQUssQ0FBQTtRQUM3QixvQkFBYyxHQUFXLENBQUMsQ0FBQTtRQUMxQixvQkFBYyxHQUFXLENBQUMsQ0FBQTtRQUMxQixhQUFPLEdBQWtCLElBQUksQ0FBQTs7SUFrTnpDLENBQUM7SUEzTkcsc0JBQVcsbUNBQUk7YUFBZixjQUE2QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFDLENBQUM7OztPQUFBO0lBQ25ELHNCQUFXLDRDQUFhO2FBQ3hCLGNBQTZCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUEsQ0FBQyxDQUFDO2FBRDVELFVBQXlCLEtBQWMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQVMzRSxzQkFBWSxx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QyxVQUFVLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDdkUsQ0FBQztJQXpPRTtRQUhGLFFBQVEsQ0FBQztZQUNOLFdBQVcsRUFBRSxPQUFPO1lBQ3BCLE9BQU8sRUFBRSxpQkFBaUI7U0FDN0IsQ0FBQzs4REFBOEI7SUFDWTtRQUEzQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLENBQUM7NkRBQTJCO0lBSW5FO1FBSEYsUUFBUSxDQUFDO1lBQ04sV0FBVyxFQUFFLE9BQU87WUFDcEIsT0FBTyxFQUFFLGlCQUFpQjtTQUM3QixDQUFDOzhEQUE4QjtJQUNZO1FBQTNDLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsQ0FBQzs2REFBMkI7SUFJbkU7UUFIRixRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZO1lBQy9CLFdBQVcsRUFBRSxNQUFNO1NBQ3RCLENBQUM7NkRBQWlEO0lBSWhEO1FBSEYsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWTtZQUMvQixXQUFXLEVBQUUsTUFBTTtTQUN0QixDQUFDOzJEQUErQztJQWxCaEMsaUJBQWlCO1FBRnJDLE9BQU87UUFDUCxJQUFJLENBQUMsbUJBQW1CLENBQUM7T0FDTCxpQkFBaUIsQ0E4T3JDO0lBQUQsd0JBQUM7Q0E5T0QsQUE4T0MsQ0E5TzhDLEVBQUUsQ0FBQyxVQUFVLEdBOE8zRDtrQkE5T29CLGlCQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBzdGV2ZUpvYnNcbiAqIEBFbWFpbDogaWNpcGlxa21AZ21haWwuY29tXG4gKiBARGF0ZTogMjAyMC0xMS0xOSAwMToxNTowNFxuICogQExhc3QgTW9kaWZpZWQgYnk6IHN0ZXZlSm9ic1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAyMC0xMS0xOSAwMToxNjo1MlxuICogQERlc2NyaXB0aW9uOiBEZXNjcmlwdGlvblxuICovXG5pbXBvcnQgVUlTdXBlckxheW91dCBmcm9tICcuL1VJU3VwZXJMYXlvdXQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IEVQU0lMT04gPSAxZS00O1xuZXhwb3J0IGludGVyZmFjZSBVSVN1cGVySGVhZGVyQW5kRm9vdGVyRXZlbnQge1xuICAgIGFjdGlvbjogYm9vbGVhbixcbiAgICBwcm9ncmVzczogbnVtYmVyLFxuICAgIHByb2dyZXNzU3RhZ2U6IFwidG91Y2hcIiB8IFwid2FpdFwiIHwgXCJsb2NrXCIgfCBcInJlbGVhc2VcIixcbn1cbkBjY2NsYXNzXG5AbWVudShcIlVJU3B1ZXJTY3JvbGxWaWV3XCIpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNwdWVyU2Nyb2xsVmlldyBleHRlbmRzIGNjLlNjcm9sbFZpZXcge1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIumhtumDqOWBj+enu+mHj1wiLFxuICAgICAgICB0b29sdGlwOiBcIuS4i+aLieaXtui2hei/h+atpOWBj+enu+S8muWPkemAgeS4i+aLieS6i+S7tlwiXG4gICAgfSkgaGVhZGVyT3V0T2Zmc2V0OiBudW1iZXIgPSAyMDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLmu6HotrPop6blj5FIZWFkZXLnmoTlgI3mlbBcIiB9KSBoZWFkZXJNdWx0aXBsZTogbnVtYmVyID0gMlxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuW6lemDqOWBj+enu+mHj1wiLFxuICAgICAgICB0b29sdGlwOiBcIuS4iuaLieaXtui2hei/h+atpOWBj+enu+S8muWPkemAgeS4iuaLieS6i+S7tlwiXG4gICAgfSkgZm9vdGVyT3V0T2Zmc2V0OiBudW1iZXIgPSAyMDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLmu6HotrPop6blj5FGb290ZXLnmoTlgI3mlbBcIiB9KSBmb290ZXJNdWx0aXBsZTogbnVtYmVyID0gMlxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS4i+aLieS6i+S7tlwiXG4gICAgfSkgcHVsbERvd25FdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcbiAgICAgICAgZGlzcGxheU5hbWU6IFwi5LiK5ouJ5LqL5Lu2XCJcbiAgICB9KSBwdWxsVXBFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdXG4gICAgcHVibGljIGdldCB2aWV3KCk6IGNjLk5vZGUgeyByZXR1cm4gdGhpc1snX3ZpZXcnXSB9XG4gICAgcHVibGljIHNldCBhdXRvU2Nyb2xsaW5nKHZhbHVlOiBib29sZWFuKSB7IHRoaXNbJ19hdXRvU2Nyb2xsaW5nJ10gPSB2YWx1ZSB9XG4gICAgcHVibGljIGdldCBhdXRvU2Nyb2xsaW5nKCkgeyByZXR1cm4gdGhpc1snX2F1dG9TY3JvbGxpbmcnXSB9XG4gICAgcHJpdmF0ZSBpc01vdmVIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNNb3ZlRm9vdGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzTG9ja0hlYWRlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0xvY2tGb290ZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaGVhZGVyUHJvZ3Jlc3M6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIGZvb3RlclByb2dyZXNzOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBfbGF5b3V0OiBVSVN1cGVyTGF5b3V0ID0gbnVsbFxuICAgIHByaXZhdGUgZ2V0IGxheW91dCgpOiBVSVN1cGVyTGF5b3V0IHtcbiAgICAgICAgaWYgKHRoaXMuX2xheW91dCA9PSBudWxsKSB0aGlzLl9sYXlvdXQgPSB0aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KFVJU3VwZXJMYXlvdXQpXG4gICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRcbiAgICB9XG4gICAgcHJpdmF0ZSBnZXQgaXNIZWFkZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQ/LmhlYWRlclsnaW5kZXgnXSA9PSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3Rlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxheW91dD8uZm9vdGVyWydpbmRleCddID09IHRoaXMubGF5b3V0Lm1heEl0ZW1Ub3RhbCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwcml2YXRlIGdldCBpc0Zvb3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3Rlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxheW91dC5mb290ZXJbJ2luZGV4J10gPT0gdGhpcy5sYXlvdXQubWF4SXRlbVRvdGFsIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQ/LmhlYWRlclsnaW5kZXgnXSA9PSAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgLyoqIOaYr+WQpumcgOimgeiuoeeul++8n+WmguaenOS4iuaLiS/kuIvmi4nkuovku7bmsqHmnInnm5HlkKzogIXliJnkuI3pnIDopoHnm7jlhbPnmoTorqHnrpcgKi9cbiAgICBwdWJsaWMgZ2V0IGlzQ2FsY3VsUHVsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHVsbERvd25FdmVudHMubGVuZ3RoID4gMCB8fCB0aGlzLnB1bGxVcEV2ZW50cy5sZW5ndGggPiAwXG4gICAgfVxuICAgIHB1YmxpYyBjYWxjdWxhdGVCb3VuZGFyeSgpIHtcbiAgICAgICAgdGhpc1snX2NhbGN1bGF0ZUJvdW5kYXJ5J10oKVxuICAgIH1cbiAgICBwdWJsaWMgZ2V0SG93TXVjaE91dE9mQm91bmRhcnkob2Zmc2V0PzogY2MuVmVjMikge1xuICAgICAgICByZXR1cm4gdGhpc1snX2dldEhvd011Y2hPdXRPZkJvdW5kYXJ5J10ob2Zmc2V0KVxuICAgIH1cbiAgICBwdWJsaWMgcmVsZWFzZSgpIHtcbiAgICAgICAgdGhpcy5pc01vdmVIZWFkZXIgPSBmYWxzZVxuICAgICAgICB0aGlzLmlzTW92ZUZvb3RlciA9IGZhbHNlXG4gICAgICAgIGlmICh0aGlzLmlzTG9ja0hlYWRlciB8fCB0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgbGV0IG91dE9mQm91bmRhcnkgPSB0aGlzLmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KClcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnZlcnRpY2FsID8gb3V0T2ZCb3VuZGFyeS55IDogLW91dE9mQm91bmRhcnkueFxuICAgICAgICAgICAgbGV0IGF1dG9TY3JvbGwgPSB0cnVlXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID09IDAgfHwgdGhpcy5pc0xvY2tIZWFkZXIgJiYgb2Zmc2V0IDwgMCB8fCB0aGlzLmlzTG9ja0Zvb3RlciAmJiBvZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclByb2dyZXNzKClcbiAgICAgICAgICAgICAgICBhdXRvU2Nyb2xsID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaXNMb2NrSGVhZGVyID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuaXNMb2NrRm9vdGVyID0gZmFsc2VcbiAgICAgICAgICAgIGlmIChhdXRvU2Nyb2xsKSB7XG4gICAgICAgICAgICAgICAgdGhpc1snX291dE9mQm91bmRhcnlBbW91bnREaXJ0eSddID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXNbJ19wcm9jZXNzSW5lcnRpYVNjcm9sbCddKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9ncmVzcygpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoq6YeN572u5YiX6KGoIOW9k+WIl+ihqOa7keWKqOWIsOW6lemDqOaXtiDnhLblkI7kuI3nrqHpgJrov4fku4DkuYjmlrnlvI8o5ZCM5q2lfOW8guatpSnlh4/lsJHkuobmlbTkvZPnmoQo6auY5bqmfOe8qeaUvnzlsLrlr7gpIOaXtuS/neivgeWGheWuueaYvuekuuato+ehriAqL1xuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpc1snX291dE9mQm91bmRhcnlBbW91bnREaXJ0eSddID0gdHJ1ZVxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeSgpXG4gICAgICAgIGlmICghb2Zmc2V0LmZ1enp5RXF1YWxzKGNjLnYyKDAsIDApLCBFUFNJTE9OKSkge1xuICAgICAgICAgICAgdGhpc1snX3Byb2Nlc3NJbmVydGlhU2Nyb2xsJ10oKVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX29uVG91Y2hNb3ZlZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCwgY2FwdHVyZUxpc3RlbmVycykge1xuICAgICAgICBzdXBlclsnX29uVG91Y2hNb3ZlZCddKGV2ZW50LCBjYXB0dXJlTGlzdGVuZXJzKVxuICAgICAgICBpZiAodGhpcy5pc0NhbGN1bFB1bGwpIHtcbiAgICAgICAgICAgIGxldCBvdXRPZkJvdW5kYXJ5ID0gdGhpcy5nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeSgpXG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbCA/IG91dE9mQm91bmRhcnkueSA6IC1vdXRPZkJvdW5kYXJ5LnhcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiAwICYmIHRoaXMuaXNIZWFkZXIgJiYgIXRoaXMuaXNMb2NrSGVhZGVyICYmICF0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPSBvZmZzZXQgPCBFUFNJTE9OID8gMCA6IG9mZnNldCAvIHRoaXMuaGVhZGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJQcm9ncmVzcyA9IG9mZnNldCA8IEVQU0lMT04gPyAwIDogb2Zmc2V0IC8gdGhpcy5oZWFkZXJPdXRPZmZzZXRcbiAgICAgICAgICAgICAgICB0aGlzLmlzTW92ZUhlYWRlciA9IHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPj0gdGhpcy5oZWFkZXJNdWx0aXBsZVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogdGhpcy5oZWFkZXJQcm9ncmVzcywgcHJvZ3Jlc3NTdGFnZTogdGhpcy5pc01vdmVIZWFkZXIgPyBcIndhaXRcIiA6IFwidG91Y2hcIiB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgYWN0aW9uOiBmYWxzZSwgcHJvZ3Jlc3M6IDAsIHByb2dyZXNzU3RhZ2U6IFwicmVsZWFzZVwiIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9mZnNldCA8IDAgJiYgdGhpcy5pc0Zvb3RlciAmJiAhdGhpcy5pc0xvY2tGb290ZXIgJiYgIXRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb290ZXJQcm9ncmVzcyA9IC1vZmZzZXQgPCBFUFNJTE9OID8gMCA6IC1vZmZzZXQgLyB0aGlzLmZvb3Rlck91dE9mZnNldFxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZlRm9vdGVyID0gdGhpcy5mb290ZXJQcm9ncmVzcyA+PSB0aGlzLmZvb3Rlck11bHRpcGxlXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogdGhpcy5mb290ZXJQcm9ncmVzcywgcHJvZ3Jlc3NTdGFnZTogdGhpcy5pc01vdmVGb290ZXIgPyBcIndhaXRcIiA6IFwidG91Y2hcIiB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogMCwgcHJvZ3Jlc3NTdGFnZTogXCJyZWxlYXNlXCIgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9kaXNwYXRjaEV2ZW50KGV2ZW50KSB7XG4gICAgICAgIHN1cGVyWydfZGlzcGF0Y2hFdmVudCddKGV2ZW50KVxuICAgICAgICBpZiAoZXZlbnQgPT0gJ3Njcm9sbC1lbmRlZCcpIHtcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyT3JGb290ZXIgPSBmYWxzZVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRUb3BCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IGxvY2FsID0gMFxuXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS5oZWlnaHQgPiB2aWV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5sYXlvdXQudG9wQm91bmRhcnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5fZ2V0Q29udGVudEJvdHRvbUJvdW5kYXJ5KCkgKyB2aWV3U2l6ZS5oZWlnaHRcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0hlYWRlciAmJiB0aGlzLmlzTG9ja0hlYWRlcikge1xuICAgICAgICAgICAgbG9jYWwgKz0gdGhpcy5oZWFkZXJPdXRPZmZzZXRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxcbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudEJvdHRvbUJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgdmlld1NpemUgPSB0aGlzLnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICBsZXQgbG9jYWwgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS5oZWlnaHQgPiB2aWV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5sYXlvdXQuYm90dG9tQm91bmRhcnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5sYXlvdXQubm9kZS55IC0gdGhpcy5sYXlvdXQubm9kZS5nZXRBbmNob3JQb2ludCgpLnkgKiB2aWV3U2l6ZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNGb290ZXIgJiYgdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIGxvY2FsIC09IHRoaXMuZm9vdGVyT3V0T2Zmc2V0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsXG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRMZWZ0Qm91bmRhcnkoKSB7XG4gICAgICAgIGxldCB2aWV3U2l6ZSA9IHRoaXMudmlldy5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgIGxldCBsb2NhbCA9IDBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5oZWFkZXIgJiYgdGhpcy5sYXlvdXQuZ2V0UmVhbGx5U2l6ZSgpLndpZHRoID4gdmlld1NpemUud2lkdGgpIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5sYXlvdXQubGVmdEJvdW5kYXJ5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0Lm5vZGUueCAtIHRoaXMubGF5b3V0Lm5vZGUuZ2V0QW5jaG9yUG9pbnQoKS54ICogdmlld1NpemUud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNIZWFkZXIgJiYgdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgIGxvY2FsIC09IHRoaXMuaGVhZGVyT3V0T2Zmc2V0XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsXG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRSaWdodEJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgdmlld1NpemUgPSB0aGlzLnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICBsZXQgbG9jYWwgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS53aWR0aCA+IHZpZXdTaXplLndpZHRoKSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0LnJpZ2h0Qm91bmRhcnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5fZ2V0Q29udGVudExlZnRCb3VuZGFyeSgpICsgdmlld1NpemUud2lkdGhcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Zvb3RlciAmJiB0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgbG9jYWwgKz0gdGhpcy5mb290ZXJPdXRPZmZzZXRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3RhcnRBdXRvU2Nyb2xsKGRlbHRhTW92ZSwgdGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2FsY3VsUHVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNNb3ZlSGVhZGVyICYmICF0aGlzLmlzTG9ja0hlYWRlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrSGVhZGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgJiYgKGRlbHRhTW92ZS55IC09IHRoaXMuaGVhZGVyT3V0T2Zmc2V0KVxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCAmJiAoZGVsdGFNb3ZlLnggKz0gdGhpcy5oZWFkZXJPdXRPZmZzZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IGFjdGlvbjogdHJ1ZSwgcHJvZ3Jlc3M6IHRoaXMuaGVhZGVyUHJvZ3Jlc3MsIHByb2dyZXNzU3RhZ2U6ICdsb2NrJyB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTW92ZUZvb3RlciAmJiAhdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzTG9ja0Zvb3RlciA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2FsICYmIChkZWx0YU1vdmUueSArPSB0aGlzLmZvb3Rlck91dE9mZnNldClcbiAgICAgICAgICAgICAgICB0aGlzLmhvcml6b250YWwgJiYgKGRlbHRhTW92ZS54IC09IHRoaXMuZm9vdGVyT3V0T2Zmc2V0KVxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxVcEV2ZW50KHsgYWN0aW9uOiB0cnVlLCBwcm9ncmVzczogdGhpcy5mb290ZXJQcm9ncmVzcywgcHJvZ3Jlc3NTdGFnZTogJ2xvY2snIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXJbJ19zdGFydEF1dG9TY3JvbGwnXShkZWx0YU1vdmUsIHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICB9XG4gICAgcHJpdmF0ZSBfdXBkYXRlU2Nyb2xsQmFyKG91dE9mQm91bmRhcnkpIHtcbiAgICAgICAgc3VwZXJbJ191cGRhdGVTY3JvbGxCYXInXShvdXRPZkJvdW5kYXJ5KVxuICAgICAgICBpZiAoIXRoaXMuaXNDYWxjdWxQdWxsKSByZXR1cm5cbiAgICAgICAgaWYgKHRoaXNbJ19hdXRvU2Nyb2xsQnJha2luZyddKSByZXR1cm5cbiAgICAgICAgaWYgKCF0aGlzLmF1dG9TY3JvbGxpbmcpIHJldHVyblxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy52ZXJ0aWNhbCA/IG91dE9mQm91bmRhcnkueSA6IC1vdXRPZkJvdW5kYXJ5LnhcbiAgICAgICAgaWYgKG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzcyA9IG9mZnNldCA8IEVQU0lMT04gPyAwIDogb2Zmc2V0IC8gdGhpcy5oZWFkZXJPdXRPZmZzZXRcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc1N0YWdlXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclByb2dyZXNzID0gdGhpcy5oZWFkZXJQcm9ncmVzcyA9PSAxID8gdGhpcy5oZWFkZXJQcm9ncmVzcyA6IE1hdGgubWF4KHByb2dyZXNzLCAxKVxuICAgICAgICAgICAgICAgIHByb2dyZXNzU3RhZ2UgPSAnbG9jaydcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJQcm9ncmVzcyA9IHByb2dyZXNzIDwgdGhpcy5oZWFkZXJQcm9ncmVzcyA/IHByb2dyZXNzIDogdGhpcy5oZWFkZXJQcm9ncmVzc1xuICAgICAgICAgICAgICAgIHByb2dyZXNzU3RhZ2UgPSAncmVsZWFzZSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZW1pdFB1bGxEb3duRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogdGhpcy5oZWFkZXJQcm9ncmVzcywgcHJvZ3Jlc3NTdGFnZTogcHJvZ3Jlc3NTdGFnZSB9KVxuXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gLW9mZnNldCA8IEVQU0lMT04gPyAwIDogLW9mZnNldCAvIHRoaXMuZm9vdGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NTdGFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb290ZXJQcm9ncmVzcyA9IHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPT0gMSA/IHRoaXMuZm9vdGVyUHJvZ3Jlc3MgOiBNYXRoLm1heChwcm9ncmVzcywgMSlcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1N0YWdlID0gJ2xvY2snXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPSBwcm9ncmVzcyA8IHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPyBwcm9ncmVzcyA6IHRoaXMuZm9vdGVyUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1N0YWdlID0gJ3JlbGVhc2UnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiB0aGlzLmZvb3RlclByb2dyZXNzLCBwcm9ncmVzc1N0YWdlOiBwcm9ncmVzc1N0YWdlIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPT0gMCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9ja0hlYWRlciAmJiAhdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3MoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgY2xlYXJQcm9ncmVzcygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXJQcm9ncmVzcyA9IDBcbiAgICAgICAgdGhpcy5mb290ZXJQcm9ncmVzcyA9IDBcbiAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiAwLCBwcm9ncmVzc1N0YWdlOiAncmVsZWFzZScgfSlcbiAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogMCwgcHJvZ3Jlc3NTdGFnZTogJ3JlbGVhc2UnIH0pXG4gICAgfVxuICAgIHByaXZhdGUgZW1pdFB1bGxEb3duRXZlbnQoZGF0YTogVUlTdXBlckhlYWRlckFuZEZvb3RlckV2ZW50KSB7XG4gICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnB1bGxEb3duRXZlbnRzLCB0aGlzLCBkYXRhKVxuICAgIH1cbiAgICBwcml2YXRlIGVtaXRQdWxsVXBFdmVudChkYXRhOiBVSVN1cGVySGVhZGVyQW5kRm9vdGVyRXZlbnQpIHtcbiAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMucHVsbFVwRXZlbnRzLCB0aGlzLCBkYXRhKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/chat/chatItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99b10hZnWRCrIEdhwALstgg', 'chatItem');
// examples/chat/chatItem.ts

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
var chatItem = /** @class */ (function (_super) {
    __extends(chatItem, _super);
    function chatItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.other = null;
        _this.self = null;
        return _this;
    }
    chatItem.prototype.show = function (info) {
        var _a;
        this.other.active = info.type == 'other';
        this.self.active = info.type == 'self';
        var node = info.type == 'self' ? this.self : this.other;
        (_a = this.label) === null || _a === void 0 ? void 0 : _a.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
        this.background = node.getChildByName('background').getComponent(cc.Layout);
        this.label = this.background.node.getChildByName('label').getComponent(cc.Label);
        this.label.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
        this.label.overflow = cc.Label.Overflow.NONE;
        this.label.string = info.message;
        this.label['_forceUpdateRenderData']();
        this.background.updateLayout();
        this.background.node.width = this.label.node.width + 20;
        this.node.height = this.background.node.height;
    };
    chatItem.prototype.onChangeSize = function () {
        if (this.label.node.width > 600) {
            this.label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
            this.label.node.width = 600;
            this.label['_forceUpdateRenderData']();
            this.background.updateLayout();
            this.background.node.width = this.label.node.width + 20;
            this.node.height = this.background.node.height;
        }
    };
    __decorate([
        property(cc.Node)
    ], chatItem.prototype, "other", void 0);
    __decorate([
        property(cc.Node)
    ], chatItem.prototype, "self", void 0);
    chatItem = __decorate([
        ccclass
    ], chatItem);
    return chatItem;
}(cc.Component));
exports.default = chatItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy9jaGF0L2NoYXRJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBK0JDO1FBOUJzQixXQUFLLEdBQVksSUFBSSxDQUFBO1FBQ3JCLFVBQUksR0FBWSxJQUFJLENBQUE7O0lBNkIzQyxDQUFDO0lBMUJVLHVCQUFJLEdBQVgsVUFBWSxJQUFTOztRQUNqQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQTtRQUN4QyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQTtRQUN0QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUN2RCxNQUFBLElBQUksQ0FBQyxLQUFLLDBDQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFDO1FBRTdFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDaEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQTtRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFBO1FBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFBO1FBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDOUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDdkQsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ2xELENBQUM7SUFDTywrQkFBWSxHQUFwQjtRQUNJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUM3QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUE7WUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQTtZQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLEVBQUUsQ0FBQTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksRUFBRSxDQUFBO1lBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ3ZELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtTQUNqRDtJQUNMLENBQUM7SUE3QmtCO1FBQWxCLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUFzQjtJQUNyQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FBcUI7SUFGdEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQStCNUI7SUFBRCxlQUFDO0NBL0JELEFBK0JDLENBL0JxQyxFQUFFLENBQUMsU0FBUyxHQStCakQ7a0JBL0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGF0SXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIG90aGVyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBzZWxmOiBjYy5Ob2RlID0gbnVsbFxuICAgIHByaXZhdGUgbGFiZWw6IGNjLkxhYmVsXG4gICAgcHJpdmF0ZSBiYWNrZ3JvdW5kOiBjYy5MYXlvdXRcbiAgICBwdWJsaWMgc2hvdyhpbmZvOiBhbnkpIHtcbiAgICAgICAgdGhpcy5vdGhlci5hY3RpdmUgPSBpbmZvLnR5cGUgPT0gJ290aGVyJ1xuICAgICAgICB0aGlzLnNlbGYuYWN0aXZlID0gaW5mby50eXBlID09ICdzZWxmJ1xuICAgICAgICBsZXQgbm9kZSA9IGluZm8udHlwZSA9PSAnc2VsZicgPyB0aGlzLnNlbGYgOiB0aGlzLm90aGVyXG4gICAgICAgIHRoaXMubGFiZWw/Lm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5vbkNoYW5nZVNpemUsIHRoaXMpXG5cbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kID0gbm9kZS5nZXRDaGlsZEJ5TmFtZSgnYmFja2dyb3VuZCcpLmdldENvbXBvbmVudChjYy5MYXlvdXQpXG4gICAgICAgIHRoaXMubGFiZWwgPSB0aGlzLmJhY2tncm91bmQubm9kZS5nZXRDaGlsZEJ5TmFtZSgnbGFiZWwnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIHRoaXMubGFiZWwubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5TSVpFX0NIQU5HRUQsIHRoaXMub25DaGFuZ2VTaXplLCB0aGlzKVxuICAgICAgICB0aGlzLmxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuTk9ORVxuICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IGluZm8ubWVzc2FnZVxuICAgICAgICB0aGlzLmxhYmVsWydfZm9yY2VVcGRhdGVSZW5kZXJEYXRhJ10oKVxuICAgICAgICB0aGlzLmJhY2tncm91bmQudXBkYXRlTGF5b3V0KClcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLm5vZGUud2lkdGggPSB0aGlzLmxhYmVsLm5vZGUud2lkdGggKyAyMFxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5iYWNrZ3JvdW5kLm5vZGUuaGVpZ2h0XG4gICAgfVxuICAgIHByaXZhdGUgb25DaGFuZ2VTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5sYWJlbC5ub2RlLndpZHRoID4gNjAwKSB7XG4gICAgICAgICAgICB0aGlzLmxhYmVsLm92ZXJmbG93ID0gY2MuTGFiZWwuT3ZlcmZsb3cuUkVTSVpFX0hFSUdIVFxuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLndpZHRoID0gNjAwXG4gICAgICAgICAgICB0aGlzLmxhYmVsWydfZm9yY2VVcGRhdGVSZW5kZXJEYXRhJ10oKVxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLnVwZGF0ZUxheW91dCgpXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQubm9kZS53aWR0aCA9IHRoaXMubGFiZWwubm9kZS53aWR0aCArIDIwXG4gICAgICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ID0gdGhpcy5iYWNrZ3JvdW5kLm5vZGUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
        if (this.init) {
            for (var i = 0; i < this.total; i++) {
                this.datas.push({ message: "" + this.datas.length });
            }
            this.layout.total(this.datas.length);
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy92ZXJ0aWNhbC92ZXJ0aWNhbFNpbXBsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsK0NBQTBDO0FBQ3BDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBc0NDO1FBcEM0QixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUMzQyxXQUFLLEdBQVcsR0FBRyxDQUFBO1FBQ25CLFVBQUksR0FBWSxLQUFLLENBQUE7UUFDdkIsV0FBSyxHQUFVLEVBQUUsQ0FBQTs7SUFpQzdCLENBQUM7SUFoQ0csK0JBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBUSxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7U0FDdkM7SUFDTCxDQUFDO0lBRU8sdUNBQWMsR0FBdEIsVUFBdUIsSUFBYSxFQUFFLEtBQWE7UUFDL0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLHNCQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQy9FLENBQUM7SUFDTyxpQ0FBUSxHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDTyxnQ0FBTyxHQUFmLFVBQWdCLEtBQVUsRUFBRSxLQUFVO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsS0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQVEsRUFBRSxDQUFDLENBQUE7U0FDdkQ7UUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3hDLENBQUM7SUFDTyxtQ0FBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDTyxtQ0FBVSxHQUFsQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFDTyxpQ0FBUSxHQUFoQjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFuQ3dCO1FBQXhCLFFBQVEsQ0FBQyx1QkFBYSxDQUFDO2tEQUE2QjtJQUMzQztRQUFULFFBQVE7aURBQW9CO0lBQ25CO1FBQVQsUUFBUTtnREFBc0I7SUFKZCxjQUFjO1FBRGxDLE9BQU87T0FDYSxjQUFjLENBc0NsQztJQUFELHFCQUFDO0NBdENELEFBc0NDLENBdEMyQyxFQUFFLENBQUMsU0FBUyxHQXNDdkQ7a0JBdENvQixjQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQgZnJvbSAnLi4vLi4vY29yZXMvVUlTdXBlckxheW91dCc7XG5pbXBvcnQgdmVydGljYWxJdGVtIGZyb20gJy4vdmVydGljYWxJdGVtJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVydGljYWxTaW1wbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFVJU3VwZXJMYXlvdXQpIGxheW91dDogVUlTdXBlckxheW91dCA9IG51bGxcbiAgICBAcHJvcGVydHkgdG90YWw6IG51bWJlciA9IDUwMFxuICAgIEBwcm9wZXJ0eSBpbml0OiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGRhdGFzOiBhbnlbXSA9IFtdXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5pbml0KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudG90YWw7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YXMucHVzaCh7IG1lc3NhZ2U6IGAke3RoaXMuZGF0YXMubGVuZ3RofWAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvblJlZnJlc2hFdmVudChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5kYXRhc1tpbmRleF1cbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQodmVydGljYWxJdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpXG4gICAgfVxuICAgIHByaXZhdGUgb25SZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIHByaXZhdGUgYWRkSXRlbShldmVudDogYW55LCB2YWx1ZTogYW55KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFsdWU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5kYXRhcy5wdXNoKHsgbWVzc2FnZTogYCR7dGhpcy5kYXRhcy5sZW5ndGh9YCB9KVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubGF5b3V0LnRvdGFsKHRoaXMuZGF0YXMubGVuZ3RoKVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9IZWFkZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyKDAuNjE4KVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9Gb290ZXIoKSB7XG4gICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvRm9vdGVyKDAuNjE4KVxuICAgIH1cbiAgICBwcml2YXRlIGdvdG9NYWluKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/examples/chat/chatPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9b675lsfsFJlbnH7YOQRVQo', 'chatPanel');
// examples/chat/chatPanel.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UISuperLayout_1 = require("../../cores/UISuperLayout");
var chatItem_1 = require("./chatItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var chatPanel = /** @class */ (function (_super) {
    __extends(chatPanel, _super);
    function chatPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.input = null;
        _this.aiMessages = [
            '你说啥?',
            '请说人话，谢谢!',
            '啊?',
            '啥呀?',
            '咋地了?',
            '什么情况?',
            '你不要搞事情哦'
        ];
        _this.messages = [];
        _this.index = 0;
        return _this;
    }
    chatPanel.prototype.emit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.messages.push({
                    type: "self",
                    message: this.input.string || "?"
                });
                this.input.string = "";
                this.layout.total(this.messages.length);
                this.scheduleOnce(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.messages.push({
                                    type: "other",
                                    message: "" + this.aiMessages[this.index++]
                                });
                                return [4 /*yield*/, this.layout.total(this.messages.length)];
                            case 1:
                                _a.sent();
                                this.layout.scrollToHeader();
                                if (this.index == this.aiMessages.length)
                                    this.index = 0;
                                return [2 /*return*/];
                        }
                    });
                }); }, 1);
                return [2 /*return*/];
            });
        });
    };
    chatPanel.prototype.refresh = function (node, index) {
        var info = this.messages[this.messages.length - 1 - index];
        var item = node.getComponent(chatItem_1.default);
        item.show(info);
    };
    chatPanel.prototype.goMain = function () {
        cc.director.loadScene('main');
    };
    __decorate([
        property(UISuperLayout_1.default)
    ], chatPanel.prototype, "layout", void 0);
    __decorate([
        property(cc.EditBox)
    ], chatPanel.prototype, "input", void 0);
    chatPanel = __decorate([
        ccclass
    ], chatPanel);
    return chatPanel;
}(cc.Component));
exports.default = chatPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy9jaGF0L2NoYXRQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBc0Q7QUFDdEQsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBdUNDO1FBdEM0QixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUMvQixXQUFLLEdBQWUsSUFBSSxDQUFBO1FBQ3RDLGdCQUFVLEdBQUc7WUFDakIsTUFBTTtZQUNOLFVBQVU7WUFDVixJQUFJO1lBQ0osS0FBSztZQUNMLE1BQU07WUFDTixPQUFPO1lBQ1AsU0FBUztTQUNaLENBQUE7UUFDTyxjQUFRLEdBQVUsRUFBRSxDQUFBO1FBQ3BCLFdBQUssR0FBRyxDQUFDLENBQUE7O0lBMEJyQixDQUFDO0lBekJpQix3QkFBSSxHQUFsQjs7OztnQkFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDZixJQUFJLEVBQUUsTUFBTTtvQkFDWixPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLElBQUksR0FBRztpQkFDcEMsQ0FBQyxDQUFBO2dCQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtnQkFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQzs7OztnQ0FDZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQ0FDZixJQUFJLEVBQUUsT0FBTztvQ0FDYixPQUFPLEVBQUUsS0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBRztpQ0FDOUMsQ0FBQyxDQUFBO2dDQUNGLHFCQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dDQUE3QyxTQUE2QyxDQUFBO2dDQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFBO2dDQUM1QixJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNO29DQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFBOzs7O3FCQUMzRCxFQUFFLENBQUMsQ0FBQyxDQUFBOzs7O0tBQ1I7SUFDTywyQkFBTyxHQUFmLFVBQWdCLElBQWEsRUFBRSxLQUFhO1FBQ3hDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFBO1FBQzFELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQVEsQ0FBQyxDQUFBO1FBQ3RDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkIsQ0FBQztJQUNPLDBCQUFNLEdBQWQ7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBckN3QjtRQUF4QixRQUFRLENBQUMsdUJBQWEsQ0FBQzs2Q0FBNkI7SUFDL0I7UUFBckIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7NENBQXlCO0lBRjdCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F1QzdCO0lBQUQsZ0JBQUM7Q0F2Q0QsQUF1Q0MsQ0F2Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBdUNsRDtrQkF2Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVUlTdXBlckxheW91dCBmcm9tICcuLi8uLi9jb3Jlcy9VSVN1cGVyTGF5b3V0JztcbmltcG9ydCBjaGF0SXRlbSBmcm9tICcuL2NoYXRJdGVtJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjaGF0UGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShVSVN1cGVyTGF5b3V0KSBsYXlvdXQ6IFVJU3VwZXJMYXlvdXQgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpIGlucHV0OiBjYy5FZGl0Qm94ID0gbnVsbFxuICAgIHByaXZhdGUgYWlNZXNzYWdlcyA9IFtcbiAgICAgICAgJ+S9oOivtOWVpT8nLFxuICAgICAgICAn6K+36K+05Lq66K+d77yM6LCi6LCiIScsXG4gICAgICAgICfllYo/JyxcbiAgICAgICAgJ+WVpeWRgD8nLFxuICAgICAgICAn5ZKL5Zyw5LqGPycsXG4gICAgICAgICfku4DkuYjmg4XlhrU/JyxcbiAgICAgICAgJ+S9oOS4jeimgeaQnuS6i+aDheWTpidcbiAgICBdXG4gICAgcHJpdmF0ZSBtZXNzYWdlczogYW55W10gPSBbXVxuICAgIHByaXZhdGUgaW5kZXggPSAwXG4gICAgcHJpdmF0ZSBhc3luYyBlbWl0KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgdHlwZTogXCJzZWxmXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmlucHV0LnN0cmluZyB8fCBcIj9cIlxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmlucHV0LnN0cmluZyA9IFwiXCJcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5tZXNzYWdlcy5sZW5ndGgpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJvdGhlclwiLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGAke3RoaXMuYWlNZXNzYWdlc1t0aGlzLmluZGV4KytdfWBcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmxheW91dC50b3RhbCh0aGlzLm1lc3NhZ2VzLmxlbmd0aClcbiAgICAgICAgICAgIHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyKClcbiAgICAgICAgICAgIGlmICh0aGlzLmluZGV4ID09IHRoaXMuYWlNZXNzYWdlcy5sZW5ndGgpIHRoaXMuaW5kZXggPSAwXG4gICAgICAgIH0sIDEpXG4gICAgfVxuICAgIHByaXZhdGUgcmVmcmVzaChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5tZXNzYWdlc1t0aGlzLm1lc3NhZ2VzLmxlbmd0aCAtIDEgLSBpbmRleF1cbiAgICAgICAgbGV0IGl0ZW0gPSBub2RlLmdldENvbXBvbmVudChjaGF0SXRlbSlcbiAgICAgICAgaXRlbS5zaG93KGluZm8pXG4gICAgfVxuICAgIHByaXZhdGUgZ29NYWluKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21haW4nKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/cores/UISuperLayout.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '699eb1xVINCcZBBHwAgwDBT', 'UISuperLayout');
// cores/UISuperLayout.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UISuperDirection = exports.UISuperAxis = exports.UIChangeBrotherEvnet = void 0;
/*
 * @Author: steveJobs
 * @Email: icipiqkm@gmail.com
 * @Date: 2020-11-19 01:15:52
 * @Last Modified by: steveJobs
 * @Last Modified time: 2020-12-02 15:04:23
 * @Description: 名词说明 什么是一组item？
 * 垂直模式
 * 1,2,3 一组item包含 1,2,3  1是一组item中header 也是整个列表的header 3是一组item中footer 9是整个列表的footer
 * 4,5,6
 * 7,8,9
 * 调用 isGroupHeader传入 1节点 返回true  调用 isGroupFooter传入 3节点返回true
 * 调用 getGroupLeftX 传入 2节点 返回1节点位置X getGroupRightX 返回3节点位置X
 * 调用 getGroupBottomY 传入 5节点 返回8节点位置Y getGroupTopY 返回2节点位置Y
 * 水平模式
 * |1|,4,7 一组item包含 1,2,3 1是一组item中header 也是整个列表的header 3是一组item中footer 9是整个列表的footer
 * |2|,5,8
 * |3|,6,9
 */
var UISuperScrollView_1 = require("./UISuperScrollView");
var UISuperItem_1 = require("./UISuperItem");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
var EPSILON = 1e-4;
exports.UIChangeBrotherEvnet = "UIChangeBrotherEvnet";
var UISuperAxis;
(function (UISuperAxis) {
    UISuperAxis[UISuperAxis["HORIZONTAL"] = 0] = "HORIZONTAL";
    UISuperAxis[UISuperAxis["VERTICAL"] = 1] = "VERTICAL";
})(UISuperAxis = exports.UISuperAxis || (exports.UISuperAxis = {}));
var UISuperDirection;
(function (UISuperDirection) {
    UISuperDirection[UISuperDirection["HEADER_TO_FOOTER"] = 0] = "HEADER_TO_FOOTER";
    UISuperDirection[UISuperDirection["FOOTER_TO_HEADER"] = 1] = "FOOTER_TO_HEADER";
})(UISuperDirection = exports.UISuperDirection || (exports.UISuperDirection = {}));
var UISuperLayout = /** @class */ (function (_super) {
    __extends(UISuperLayout, _super);
    function UISuperLayout() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.startAxis = UISuperAxis.VERTICAL;
        _this.direction = UISuperDirection.HEADER_TO_FOOTER;
        _this.paddingTop = 0;
        _this.paddingBottom = 0;
        _this.paddingLeft = 0;
        _this.paddingRight = 0;
        _this.spacing = cc.Vec2.ZERO;
        _this.column = 2;
        _this.multiple = 2;
        _this.prefab = null;
        _this.headerLoop = false;
        _this.footerLoop = false;
        _this.affectedByScale = true;
        _this.refreshItemEvents = [];
        _this._isinited = false;
        _this._maxPrefabTotal = 0;
        _this._children = []; //和this.node.children 保持同步
        _this._scrollView = null;
        _this._maxItemTotal = 0;
        _this._prevLayoutPosition = cc.Vec2.ZERO;
        /** 当前的滚动是否是由 scrollTo 方法执行的 和touch滑动做个区分*/
        _this.scrollToHeaderOrFooter = false;
        return _this;
    }
    Object.defineProperty(UISuperLayout.prototype, "layoutDirection", {
        /** 根据上一次和本次的坐标变化计算滑动方向 */
        get: function () {
            var pos = cc.Vec2.ZERO;
            if (this.vertical) {
                pos.y = this.node.y - this._prevLayoutPosition.y;
            }
            else {
                pos.x = this.node.x - this._prevLayoutPosition.x;
            }
            this._prevLayoutPosition = this.node.getPosition();
            return pos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "isScrollToFooter", {
        /** 是否是向下滑动 */
        get: function () {
            if (this.vertical) {
                return this.layoutDirection.y < 0;
            }
            else {
                return this.layoutDirection.x > 0;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "children", {
        /** 自己维护的子节点数组 和this.node.children 保持同步 */
        get: function () { return this._children; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "maxItemTotal", {
        /** 最大数据总数 */
        get: function () { return this._maxItemTotal; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "maxPrefabTotal", {
        /** 当前被创建的item总数 */
        get: function () { return this._maxPrefabTotal; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "viewSize", {
        /** scrollView.view尺寸 */
        get: function () {
            if (!this._viewSize)
                this._viewSize = this.scrollView.view.getContentSize();
            return this._viewSize;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "vertical", {
        /** 是否是垂直模式 */
        get: function () {
            return this.startAxis == UISuperAxis.VERTICAL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "horizontal", {
        /** 是否是水平模式 */
        get: function () {
            return this.startAxis == UISuperAxis.HORIZONTAL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerToFooter", {
        /** 是否是正序排列 */
        get: function () {
            return this.direction == UISuperDirection.HEADER_TO_FOOTER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerToHeader", {
        /** 是否是倒序排列 */
        get: function () {
            return this.direction == UISuperDirection.FOOTER_TO_HEADER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "spacingWidth", {
        /** 水平间隔总宽度 (Grid 模式返回多个间隔总宽度) */
        get: function () {
            return this.spacing.x * (this.column - 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "spacingHeight", {
        /** 水平间隔总高度 (Grid 模式返回多个间隔总高度) */
        get: function () {
            return this.spacing.y * (this.column - 1);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "accommodWidth", {
        /** 可容纳item的真实宽度 */
        get: function () {
            return this.viewSize.width - this.paddingLeft - this.paddingRight;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "accommodHeight", {
        /** 可容纳item的真实高度 */
        get: function () {
            return this.viewSize.height - this.paddingTop - this.paddingBottom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "scrollView", {
        get: function () {
            if (!this._scrollView)
                this._scrollView = this.node.parent.parent.getComponent(UISuperScrollView_1.default);
            return this._scrollView;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "header", {
        /** 当前头部的item */
        get: function () {
            return this._children[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footer", {
        /** 当前尾部的item */
        get: function () {
            return this._children[this._children.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "topBoundary", {
        /** 真实的上边距 */
        get: function () {
            if (this.headerToFooter) {
                return this.headerBoundaryY + this.paddingTop;
            }
            else {
                return this.footerBoundaryY + this.paddingTop;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "bottomBoundary", {
        /** 真实的下边距 */
        get: function () {
            if (this.headerToFooter) {
                return this.footerBoundaryY - this.paddingBottom;
            }
            else {
                return this.headerBoundaryY - this.paddingBottom;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "leftBoundary", {
        /** 真实的左边距 */
        get: function () {
            if (this.headerToFooter) {
                return this.headerBoundaryX - this.paddingLeft;
            }
            else {
                return this.footerBoundaryX - this.paddingLeft;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "rightBoundary", {
        /** 真实的右边距 */
        get: function () {
            if (this.headerToFooter) {
                return this.footerBoundaryX + this.paddingRight;
            }
            else {
                return this.headerBoundaryX + this.paddingRight;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerBoundaryX", {
        /** 头部item的世界坐标边框 类似 xMin、xMax */
        get: function () {
            if (this.headerToFooter) {
                return this.node.x + this.header.x - this.header.anchorX * this.getScaleWidth(this.header);
            }
            else {
                return this.node.x + this.header.x + (1 - this.header.anchorX) * this.getScaleWidth(this.header);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "headerBoundaryY", {
        /** 头部item的世界坐标边框 类似 yMin、yMax */
        get: function () {
            if (this.headerToFooter) {
                return this.node.y + this.header.y + (1 - this.header.anchorY) * this.getScaleHeight(this.header);
            }
            else {
                return this.node.y + this.header.y - this.header.anchorY * this.getScaleHeight(this.header);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerBoundaryX", {
        /** 尾部item的世界坐标边框 类似 xMin、xMax */
        get: function () {
            if (this.headerToFooter) {
                return this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.getScaleWidth(this.footer);
            }
            else {
                return this.node.x + this.footer.x - this.footer.anchorX * this.getScaleWidth(this.footer);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "footerBoundaryY", {
        /** 尾部item的世界坐标边框 类似 yMin、yMax */
        get: function () {
            if (this.headerToFooter) {
                return this.node.y + this.footer.y - this.footer.anchorY * this.getScaleHeight(this.footer);
            }
            else {
                return this.node.y + this.footer.y + (1 - this.footer.anchorY) * this.getScaleHeight(this.footer);
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UISuperLayout.prototype, "isNormalSize", {
        get: function () {
            return this.node.getContentSize().equals(this.viewSize);
        },
        enumerable: false,
        configurable: true
    });
    /** 重写 this.node.getContentSize 动态计算头尾item 返回虚拟的尺寸 非content设置的尺寸 */
    UISuperLayout.prototype.getContentSize = function () {
        var size = this.getReallySize();
        var viewSize = this.scrollView.view.getContentSize();
        // 列表为空时 直接返回 scrollView.view 的尺寸
        if (size.height < viewSize.height) {
            size.height = viewSize.height;
        }
        if (size.width < viewSize.width) {
            size.width = viewSize.width;
        }
        return size;
    };
    /** 返回 header到 footer 之间的整体尺寸 */
    UISuperLayout.prototype.getReallySize = function () {
        if (this.node.childrenCount == 0)
            return this.viewSize;
        var size = cc.Size.ZERO;
        if (this.headerToFooter) { // 根据header和footer计算出真实的content尺寸 
            size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight;
            size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom;
        }
        else {
            size.width = this.headerBoundaryX + -this.footerBoundaryX + this.paddingLeft + this.paddingRight;
            size.height = this.footerBoundaryY + -this.headerBoundaryY + this.paddingTop + this.paddingBottom;
        }
        return size;
    };
    /** 重置scrollview */
    UISuperLayout.prototype.resetScrollView = function () {
        this.scrollView.reset();
    };
    /** 获取缩放系数 */
    UISuperLayout.prototype.getUsedScaleValue = function (value) {
        return this.affectedByScale ? Math.abs(value) : 1;
    };
    /** 设置最大item数量 */
    UISuperLayout.prototype.total = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var dataOffset, reallyOffset;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scrollView.stopAutoScroll();
                        this.scrollView.release(); // 释放（功能用于上拉加载 下拉刷新）
                        this.initlized(); // 初始化
                        return [4 /*yield*/, this.asyncCreateItem(value)]; // 分帧创建item
                    case 1:
                        _a.sent(); // 分帧创建item
                        dataOffset = this.getDataOffset(value) //获取数据偏移量（根据value相对于 _maxItemTotal 计算增加、减少的数量）
                        ;
                        reallyOffset = this.getReallyOffset(dataOffset) // 获取真实的数据偏移（Grid模式 功能用于判断是否需要偏移header来将下方填满）
                        ;
                        this.refreshItems(value, reallyOffset); //通过已有的item['index'] 加上数据偏移 来是刷新显示
                        this._maxItemTotal = value; // 记录当前总数
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 获取兄弟节点 */
    UISuperLayout.prototype.getBrotherNode = function (node) {
        var index = this.getSiblingIndex(node) - 1; // 此 getSiblingIndex 非 this.node.getSiblingIndex
        return this._children[index];
    };
    /** 是否是一组item中第一个（垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.isGroupHeader = function (node) {
        var xOry = this.getGroupHeader(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
    };
    /** 是否是一组item中最后一个（垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.isGroupFooter = function (node) {
        var xOry = this.getGroupFooter(node);
        var pos = this.vertical ? cc.v2(xOry.x, 0) : cc.v2(0, xOry.y);
        var self = this.vertical ? cc.v2(node.x, 0) : cc.v2(0, node.y);
        return self.fuzzyEquals(pos, EPSILON);
    };
    /** 获取一组item中起始位置 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.getGroupHeader = function (node) {
        var pos = cc.Vec2.ZERO;
        if (!node)
            return pos;
        if (this.vertical) {
            if (this.headerToFooter) {
                pos.x = node.anchorX * this.getScaleWidth(node) + (this.paddingLeft * node.scaleX) - (this.node.anchorX * this.viewSize.width * node.scaleX);
                pos.y = (1 - node.anchorY) * -this.getScaleHeight(node) - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
            }
            else {
                pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
                pos.y = node.anchorY * this.getScaleHeight(node) + this.paddingBottom - this.node.anchorY * this.viewSize.height;
            }
        }
        else {
            if (this.headerToFooter) {
                pos.x = node.anchorX * this.getScaleWidth(node) + this.paddingLeft - this.node.anchorX * this.viewSize.width;
                pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
            }
            else {
                pos.x = this.accommodWidth * this.node.anchorX - this.getScaleWidth(node) * (1 - node.anchorX);
                pos.y = (1 - node.anchorY) * -node.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
            }
        }
        return pos;
    };
    /** 获取一组item中结束位置 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.getGroupFooter = function (node) {
        var pos = cc.Vec2.ZERO;
        if (!node)
            return pos;
        if (this.vertical) {
            pos.x = (this.accommodWidth + this.paddingLeft) * this.node.anchorX - (this.getScaleWidth(node) * (1 - node.anchorX) + this.node.anchorX * this.paddingRight);
            pos.y = node.y;
        }
        else {
            pos.x = node.x;
            pos.y = -((this.accommodHeight + this.paddingTop) * this.node.anchorY - this.getScaleHeight(node) * node.anchorY) + (1 - node.anchorY) * this.paddingBottom;
        }
        return pos;
    };
    /** 获取一组item中 node 相对 relative 右偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.getGroupRightX = function (node, relative) {
        if (!node || !relative)
            return this.getGroupHeader(node).x;
        var prevWidth = relative.x + this.getScaleWidth(relative) * (1 - relative.anchorX);
        var selfWidth = this.getScaleWidth(node) * node.anchorX;
        return prevWidth + selfWidth + this.spacing.x;
    };
    /** 获取一组item中 node 相对 relative 左偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.getGroupLeftX = function (node, relative) {
        if (!node || !relative)
            return this.getGroupFooter(node).x;
        var prevWidth = relative.x - this.getScaleWidth(relative) * relative.anchorX;
        var selfWidth = this.getScaleWidth(node) * (1 - node.anchorX);
        return prevWidth - selfWidth - this.spacing.x;
    };
    /** 获取一组item中 node 相对 relative 下偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.getGroupBottomY = function (node, relative) {
        var prevHeight = relative.y - this.getScaleHeight(relative) * relative.anchorY;
        var selfHeight = this.getScaleHeight(node) * (1 - node.anchorY);
        return prevHeight - selfHeight - this.spacing.y;
    };
    /** 获取一组item中 node 相对 relative 上偏移量 （垂直滑动中 一组item 就是单行的所有列 、水平滑动中 一组item 就是单列中所有行）*/
    UISuperLayout.prototype.getGroupTopY = function (node, relative) {
        var prevHeight = relative.y + this.getScaleHeight(relative) * (1 - relative.anchorY);
        var selfHeight = this.getScaleHeight(node) * node.anchorY;
        return prevHeight + selfHeight + this.spacing.y;
    };
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了头部边框 （ multiple = 1 就是一个node的尺寸 默认1.5倍）*/
    UISuperLayout.prototype.isOutOfBoundaryHeader = function (node, multiple) {
        if (multiple === void 0) { multiple = 1.5; }
        var width = node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = -node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    /** 判断给定的 node 乘以 multiple 倍数后 是否超出了尾部部边框 （ multiple = 1 就是一个node的尺寸 默认1.5倍）*/
    UISuperLayout.prototype.isOutOfBoundaryFooter = function (node, multiple) {
        if (multiple === void 0) { multiple = 1.5; }
        var width = -node.width * this.getUsedScaleValue(node.scaleX) * multiple;
        var height = node.height * this.getUsedScaleValue(node.scaleY) * multiple;
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
    };
    /** 滚动到头部 （根据 排列方向、排列子节点的方向）来调用 scrollView.scrollTo... 方法 */
    UISuperLayout.prototype.scrollToHeader = function (timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToHeader();
        if (this.headerToFooter) {
            if (this.vertical) {
                this.scrollView.scrollToTop(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToLeft(timeInSecond, attenuated);
            }
        }
        else {
            if (this.vertical) {
                this.scrollView.scrollToBottom(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToRight(timeInSecond, attenuated);
            }
        }
    };
    /** 滚动到尾部（根据 排列方向、排列子节点的方向）来调用 scrollView.scrollTo... 方法 */
    UISuperLayout.prototype.scrollToFooter = function (timeInSecond, attenuated) {
        this.scrollToHeaderOrFooter = timeInSecond > 0;
        this.scrollView.stopAutoScroll();
        this.resetToFooter();
        if (this.headerToFooter) {
            if (this.vertical) {
                this.scrollView.scrollToBottom(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToRight(timeInSecond, attenuated);
            }
        }
        else {
            if (this.vertical) {
                this.scrollView.scrollToTop(timeInSecond, attenuated);
            }
            else {
                this.scrollView.scrollToLeft(timeInSecond, attenuated);
            }
        }
    };
    /** 通知给定的node刷新数据 */
    UISuperLayout.prototype.notifyRefreshItem = function (target) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, target['index']);
    };
    /** 获取节点索引 */
    UISuperLayout.prototype.getSiblingIndex = function (node) {
        return this._children.indexOf(node);
    };
    /** 自定义索引方法 这里不是通过实时修改节点索引的方法，只是模拟类似的功能，实际上并没有真正改变节点的实际顺序（优化项） */
    UISuperLayout.prototype.setSiblingIndex = function (node, index) {
        // 此方法时参考引擎原setSiblingIndex方法 去掉了修改节点索引位置的调用（item本身的zIndex没有任何变化）
        index = index !== -1 ? index : this._children.length - 1;
        var oldIndex = this._children.indexOf(node);
        if (index !== oldIndex) {
            this._children.splice(oldIndex, 1);
            if (index < this._children.length) {
                this._children.splice(index, 0, node);
            }
            else {
                this._children.push(node);
            }
            /**
             * 这里区别于原方法 原方法是改变node节点顺序后发送cc.Node.EventType.SIBLING_ORDER_CHANGED通知 这里不需要修改节点顺序
             * 这里发送一个自定义事件 模拟 SIBLING_ORDER_CHANGED 通知
             */
            this.node.emit(exports.UIChangeBrotherEvnet);
        }
    };
    UISuperLayout.prototype.onLoad = function () {
        this.initlized();
    };
    /** 初始化 */
    UISuperLayout.prototype.initlized = function () {
        var _this = this;
        if (this._isinited)
            return;
        this.node.anchorX = 0.5; //固定content的锚点为中心
        this.node.anchorY = 0.5;
        this.node.setContentSize(this.viewSize); //将content的尺寸设置与view相同 （功能用于空列表时也可以下拉刷新和加载） 
        // 重写 this.node.getContentSize 方法 因为content的真实尺寸不会随着item的数量变化
        this.node.getContentSize = this.getContentSize.bind(this);
        this.node.setPosition(cc.Vec2.ZERO);
        this.column = this.column < 1 ? 1 : this.column; // 一组item的数量 最少是1 也就是普通的水平/垂直 大于1就是Grid模式
        // 监听content位置变化 刷新header footer节点的相对位置
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function () {
            var flag = _this.isScrollToFooter; // this.isScrollToFooter = true 向下滑动 false 向上滑动
            if (_this.headerToFooter) {
                flag ? _this.footerToHeaderWatchChilds(flag) : _this.headerToFooterWatchChilds(flag); // 倒序刷新
            }
            else {
                flag ? _this.headerToFooterWatchChilds(flag) : _this.footerToHeaderWatchChilds(flag); // 正序刷新
            }
            // 当item 由多到少 并且 当content的位置被重置到初始状态时 重新设置头部的item归位
            if (_this.vertical && 0 == _this.node.y || _this.horizontal && 0 == _this.node.x) {
                _this.header.setPosition(_this.getGroupHeader(_this.header));
            }
        }, this);
        this._isinited = true;
    };
    /** 获取缩放宽度 */
    UISuperLayout.prototype.getScaleWidth = function (node) {
        return node.width * this.getUsedScaleValue(node.scaleX);
    };
    /** 获取缩放高度 */
    UISuperLayout.prototype.getScaleHeight = function (node) {
        return node.height * this.getUsedScaleValue(node.scaleY);
    };
    /** 简单的浅拷贝 */
    UISuperLayout.prototype.getTempChildren = function () {
        var list = [];
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            list.push(child);
        }
        return list;
    };
    /** 正序更新item */
    UISuperLayout.prototype.headerToFooterWatchChilds = function (flag) {
        var children = this.getTempChildren();
        for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child['watchSelf'](flag);
        }
    };
    /** 倒序更新item */
    UISuperLayout.prototype.footerToHeaderWatchChilds = function (flag) {
        var children = this.getTempChildren();
        for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            child['watchSelf'](flag);
        }
    };
    /** 当数据增加、减少时 获取数据偏移 */
    UISuperLayout.prototype.getDataOffset = function (value) {
        // 返回删除数据偏移 （比如当前最大数据值=10，新数据=9 返回-1）
        if (this.footer && this.footer['index'] + 1 >= value) {
            var offset = this.footer['index'] + 1 - value;
            return offset == 0 ? 0 : -offset;
        }
        // 返回增加数据偏移
        if (this._maxItemTotal == 0 || value < this._maxItemTotal || this._maxItemTotal < this._maxPrefabTotal)
            return 0; //比如当前最多允许创建10个item 当前显示5个 返回0
        if (this.isGroupFooter(this.footer))
            return 0; //Grid模式 如果尾部的位置是在一组item中末尾的位置时 返回 0 
        return value - this._maxItemTotal;
    };
    /**
     * 当数据增加、减少时 获取节点偏移量
     * 当前数据是这样的   增加1个     增加2个
     * 0,1,2,3           1,2,3         2,3
     * 4,5,6           4,5,6,7     4,5,6,7
     *                             8
    */
    UISuperLayout.prototype.getReallyOffset = function (dataOffset) {
        if (!this.header)
            return 0;
        if (dataOffset > 0) { // 代表增加item 表格模式下 通过偏移头部来让下方填满 填满后停止偏移
            for (var i = 0; i < dataOffset; i++) {
                if (this.isGroupFooter(this.footer))
                    return i; //返回真实的偏移量
                // 此时如果header 已经是一组item中最后一个时 向下位移 并 设置到一组item的起始位置   
                var pos = this.header.getPosition();
                if (this.vertical) { // 垂直滑动时
                    if (this.isGroupFooter(this.header)) { // 当列表中第一个item正在一组item中末尾位置时
                        if (this.headerToFooter) {
                            pos.y = this.getGroupBottomY(this.header, this.header); //正序排列时 Y轴向下偏移（垂直排列时 一组item 头在左尾在右）
                        }
                        else {
                            pos.y = this.getGroupTopY(this.header, this.header); //倒序排列时 Y轴向上偏移（垂直排列时 一组item 头在左尾在右）
                        }
                        pos.x = this.getGroupHeader(this.header).x; // X轴向头部偏移
                    }
                    else { // 第一个item没有在一组item中末尾的位置 只将第一个item向右偏移 (只偏移X轴)
                        pos.x = this.getGroupRightX(this.header, this.header); // X轴向右偏移
                    }
                }
                else { // 水平滑动时
                    if (this.isGroupFooter(this.header)) { // 当列表中第一个item正在一组item中末尾位置时
                        if (this.headerToFooter) {
                            pos.x = this.getGroupRightX(this.header, this.header); //正序排列时 X轴向右偏移（水平排列时 一组item 头在上尾在下）
                        }
                        else {
                            pos.x = this.getGroupLeftX(this.header, this.header); //倒序排列时 X轴向左偏移（水平排列时 一组item 头在上尾在下）
                        }
                        pos.y = this.getGroupHeader(this.header).y; // Y轴向头部偏移
                    }
                    else { // 第一个item没有在一组item中末尾的位置 只将第一个item向下偏移 (只偏移Y轴)
                        pos.y = this.getGroupBottomY(this.header, this.header); // Y轴向下偏移
                    }
                }
                this.header.setPosition(pos);
            }
            return dataOffset;
        }
        // 代表减少了item 计算偏移量 offset<0 【注意！这里的逻辑和上面正好相反】
        for (var i = 0; i < Math.abs(dataOffset); i++) {
            var pos = cc.Vec2.ZERO;
            if (this.vertical) {
                if (this.isGroupHeader(this.header)) {
                    pos.x = this.getGroupFooter(this.header).x;
                    if (this.headerToFooter) {
                        pos.y = this.getGroupTopY(this.header, this.header);
                    }
                    else {
                        pos.y = this.getGroupBottomY(this.header, this.header);
                    }
                }
                else {
                    pos.x = this.getGroupLeftX(this.header, this.header);
                    pos.y = this.header.y;
                }
            }
            else {
                if (this.isGroupHeader(this.header)) {
                    pos.y = this.getGroupFooter(this.header).y;
                    if (this.headerToFooter) {
                        pos.x = this.getGroupLeftX(this.header, this.header);
                    }
                    else {
                        pos.x = this.getGroupRightX(this.header, this.header);
                    }
                }
                else {
                    pos.y = this.getGroupTopY(this.header, this.header);
                    pos.x = this.header.x;
                }
            }
            this.header.setPosition(pos);
        }
        this.scrollView.calculateBoundary();
        return dataOffset;
    };
    /** 刷新所有item数据 根据当前item的 index 刷新 */
    UISuperLayout.prototype.refreshItems = function (value, offset) {
        if (offset === void 0) { offset = 0; }
        if (!this.header)
            return;
        var startIndex = this.header['index'] - 1 + offset; // 获取头部item持有的index 加上 数据偏移来计算起始index 
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            startIndex++;
            // 这里的判断用于无限循环滚动的逻辑 如果索引大于数据总数 索引归零
            if (startIndex > value - 1) {
                startIndex = 0;
            }
            else if (startIndex < 0) { // 索引小于0 索引定位到数据尾部 保持首尾相连
                startIndex = value - 1;
            }
            child['index'] = startIndex; //设置当前索引
            this.notifyRefreshItem(child);
        }
    };
    /** 从头部到尾部重置数据 */
    UISuperLayout.prototype.resetToHeader = function () {
        var _a, _b;
        for (var i = 0; i < this._children.length; i++) {
            var child = this._children[i];
            child['index'] = i;
            this.notifyRefreshItem(child);
        }
        if (!this.headerLoop && !this.footerLoop) {
            (_a = this.header) === null || _a === void 0 ? void 0 : _a.setPosition(this.getGroupHeader(this.header));
        }
        else if (!this.scrollToHeaderOrFooter) {
            (_b = this.header) === null || _b === void 0 ? void 0 : _b.setPosition(this.getGroupHeader(this.header));
        }
    };
    /** 从尾部到头部重置数据 */
    UISuperLayout.prototype.resetToFooter = function () {
        var index = this._maxItemTotal;
        for (var i = this._children.length - 1; i >= 0; i--) {
            var child = this._children[i];
            child['index'] = --index;
            this.notifyRefreshItem(child);
        }
    };
    /** 删除多余的item */
    UISuperLayout.prototype.removeChilds = function (value) {
        // 有多余的item 需要删除
        var length = this.node.childrenCount - value;
        // 删除掉多余的item
        for (var i = 0; i < length; i++) {
            var child = this.footer;
            this.remChild(child);
            child.destroy();
            this.node.removeChild(child);
        }
        if (!this.header)
            return;
        // 将头部节点的位置重置到一组item的第一个位置
        var pos = this.getGroupHeader(this.header);
        if (this.vertical) {
            this.header.x = pos.x;
        }
        else {
            this.header.y = pos.y;
        }
    };
    /** 分帧创建item */
    UISuperLayout.prototype.asyncCreateItem = function (value) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var total;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        (_a = this._gener) === null || _a === void 0 ? void 0 : _a.return(""); //取消上一次的分帧任务（如果任务正在执行）
                        // 有多余的item 需要删除 不处理
                        if (this.node.childrenCount > value)
                            return [2 /*return*/, this.removeChilds(value)
                                // 已经固定item总数 不处理
                            ];
                        // 已经固定item总数 不处理
                        if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.childrenCount)
                            return [2 /*return*/];
                        total = value - this.node.childrenCount //计算当前应该创建的总数
                        ;
                        this._gener = this.getGeneratorLength(total, function () {
                            var child = cc.instantiate(_this.prefab);
                            child['index'] = _this.node.childrenCount;
                            _this.addChild(child);
                            // 获取或添加 UISuperItem
                            var spuerItem = child.getComponent(UISuperItem_1.default) || child.addComponent(UISuperItem_1.default);
                            _this.node.addChild(child);
                            spuerItem.init(_this);
                            // 如果创建的是第一个item 设置他的起始位置 之后的item会自动相对于他来设置自己 我们只需要确定第一个位置就行了
                            if (_this.node.childrenCount == 1) {
                                var pos = _this.getGroupHeader(_this.header); //获取一组item中头部位置
                                _this.header.setPosition(pos);
                                /**
                                 * 利用cc.ScrollView的方法来设置content的起始位置 由于content在初始化的时候固定了锚点都为0.5 所以这里必然是坐标0
                                 * 如果你没有其他需求确定用0.5锚点的话 这里可以自己设置为cc.Vec2.ZERO 节省不必要的计算（实际上计算量可忽略不计）
                                 */
                                _this.scrollView.calculateBoundary();
                            }
                            var selfHorW, viewHorW;
                            if (_this.vertical) {
                                selfHorW = _this.getReallySize().height;
                                viewHorW = _this.viewSize.height;
                            }
                            else {
                                selfHorW = _this.getReallySize().width;
                                viewHorW = _this.viewSize.width;
                            }
                            /**
                             * 根据排列方向 来判断对比宽度还是高度
                             * 这里使用参数this.multiple来判断是否需要继续创建 默认为2倍 比如view可视尺寸为800 2倍就是1600
                             * 根据之前所创建的所有item的尺寸计算是否满足这个尺寸 如果满足则不再继续创建
                             * 由于是分帧加载 所以下一次创建会等这一次的返回结果 返回false 则终止分帧任务
                             */
                            if (selfHorW >= viewHorW * _this.multiple && _this.isGroupFooter(_this.footer)) {
                                _this._maxPrefabTotal = _this.node.childrenCount; //固定item数量 不在继续创建
                                return false;
                            }
                            return true;
                        });
                        return [4 /*yield*/, this.exeGenerator(this._gener, 10)]; //执行分帧任务 1帧创建10个
                    case 1:
                        _b.sent(); //执行分帧任务 1帧创建10个
                        return [2 /*return*/];
                }
            });
        });
    };
    /** 同步添加本地变量 children 并发送 UIChangeBrotherEvnet 通知*/
    UISuperLayout.prototype.addChild = function (node) {
        this._children.push(node);
        this.node.emit(exports.UIChangeBrotherEvnet);
    };
    /** 同步移除本地变量 children 并发送 UIChangeBrotherEvnet 通知 */
    UISuperLayout.prototype.remChild = function (node) {
        var index = this._children.indexOf(node);
        if (index == -1)
            return;
        this._children.splice(index, 1);
        this.node.emit(exports.UIChangeBrotherEvnet);
    };
    /** 分帧加载 */
    UISuperLayout.prototype.getGeneratorLength = function (length, callback) {
        var _i, i, result;
        var params = [];
        for (_i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 5];
                    result = callback.apply(void 0, __spreadArrays([i], params));
                    if (!result) return [3 /*break*/, 3];
                    return [4 /*yield*/];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3: return [2 /*return*/];
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    };
    /** 分帧执行 */
    UISuperLayout.prototype.exeGenerator = function (generator, duration) {
        return new Promise(function (resolve, reject) {
            var gen = generator;
            var execute = function () {
                var startTime = new Date().getTime();
                for (var iter = gen.next();; iter = gen.next()) {
                    if (iter == null || iter.done) {
                        resolve();
                        return;
                    }
                    if (new Date().getTime() - startTime > duration) {
                        setTimeout(function () { return execute(); }, cc.director.getDeltaTime() * 1000);
                        return;
                    }
                }
            };
            execute();
        });
    };
    __decorate([
        property({ type: cc.Enum(UISuperAxis), displayName: "排列方向" })
    ], UISuperLayout.prototype, "startAxis", void 0);
    __decorate([
        property({ type: cc.Enum(UISuperDirection), displayName: "排列子节点的方向" })
    ], UISuperLayout.prototype, "direction", void 0);
    __decorate([
        property({ displayName: "上边距" })
    ], UISuperLayout.prototype, "paddingTop", void 0);
    __decorate([
        property({ displayName: "下边距" })
    ], UISuperLayout.prototype, "paddingBottom", void 0);
    __decorate([
        property({ displayName: "左边距" })
    ], UISuperLayout.prototype, "paddingLeft", void 0);
    __decorate([
        property({ displayName: "右边距" })
    ], UISuperLayout.prototype, "paddingRight", void 0);
    __decorate([
        property({ displayName: "间隔" })
    ], UISuperLayout.prototype, "spacing", void 0);
    __decorate([
        property({ displayName: "每组item个数", tooltip: "单行的列数 或 单列的行数" })
    ], UISuperLayout.prototype, "column", void 0);
    __decorate([
        property({ displayName: "item创建倍率", tooltip: "相对于view的尺寸 默认2倍" })
    ], UISuperLayout.prototype, "multiple", void 0);
    __decorate([
        property({ type: cc.Prefab, displayName: "item Prefab" })
    ], UISuperLayout.prototype, "prefab", void 0);
    __decorate([
        property({ displayName: "头部滑动循环" })
    ], UISuperLayout.prototype, "headerLoop", void 0);
    __decorate([
        property({ displayName: "尾部滑动循环" })
    ], UISuperLayout.prototype, "footerLoop", void 0);
    __decorate([
        property
    ], UISuperLayout.prototype, "affectedByScale", void 0);
    __decorate([
        property(cc.Component.EventHandler)
    ], UISuperLayout.prototype, "refreshItemEvents", void 0);
    UISuperLayout = __decorate([
        ccclass,
        menu("UISuperLayout")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVyTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILHlEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDbEMsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFDbEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ1IsUUFBQSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQTtBQUMxRCxJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDbkIseURBQWMsQ0FBQTtJQUNkLHFEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBQ0QsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLCtFQUFvQixDQUFBO0lBQ3BCLCtFQUFvQixDQUFBO0FBQ3hCLENBQUMsRUFIVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUczQjtBQUdEO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBOHBCQztRQTdwQmtFLGVBQVMsR0FBZ0IsV0FBVyxDQUFDLFFBQVEsQ0FBQTtRQUNwQyxlQUFTLEdBQXFCLGdCQUFnQixDQUFDLGdCQUFnQixDQUFBO1FBQ3JHLGdCQUFVLEdBQVcsQ0FBQyxDQUFBO1FBQ3RCLG1CQUFhLEdBQVcsQ0FBQyxDQUFBO1FBQ3pCLGlCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQ3ZCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBO1FBQ3pCLGFBQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNDLFlBQU0sR0FBVyxDQUFDLENBQUE7UUFDaEIs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REFBd0I7SUFDdkI7UUFBakMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDO3VEQUF5QjtJQUN6QjtRQUFoQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7a0RBQWdDO0lBQ0M7UUFBaEUsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUM7aURBQW1CO0lBQ2hCO1FBQWxFLFFBQVEsQ0FBQyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLENBQUM7bURBQXFCO0lBQzVCO1FBQTFELFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsQ0FBQztpREFBeUI7SUFDOUM7UUFBcEMsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxDQUFDO3FEQUE0QjtJQUMzQjtRQUFwQyxRQUFRLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7cURBQTRCO0lBQ3REO1FBQVQsUUFBUTswREFBZ0M7SUFDSjtRQUFwQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7NERBQW9EO0lBZHZFLGFBQWE7UUFGakMsT0FBTztRQUNQLElBQUksQ0FBQyxlQUFlLENBQUM7T0FDRCxhQUFhLENBOHBCakM7SUFBRCxvQkFBQztDQTlwQkQsQUE4cEJDLENBOXBCMEMsRUFBRSxDQUFDLFNBQVMsR0E4cEJ0RDtrQkE5cEJvQixhQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IHN0ZXZlSm9ic1xuICogQEVtYWlsOiBpY2lwaXFrbUBnbWFpbC5jb21cbiAqIEBEYXRlOiAyMDIwLTExLTE5IDAxOjE1OjUyXG4gKiBATGFzdCBNb2RpZmllZCBieTogc3RldmVKb2JzXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIwLTEyLTAyIDE1OjA0OjIzXG4gKiBARGVzY3JpcHRpb246IOWQjeivjeivtOaYjiDku4DkuYjmmK/kuIDnu4RpdGVt77yfXG4gKiDlnoLnm7TmqKHlvI8gIFxuICogMSwyLDMg5LiA57uEaXRlbeWMheWQqyAxLDIsMyAgMeaYr+S4gOe7hGl0ZW3kuK1oZWFkZXIg5Lmf5piv5pW05Liq5YiX6KGo55qEaGVhZGVyIDPmmK/kuIDnu4RpdGVt5LitZm9vdGVyIDnmmK/mlbTkuKrliJfooajnmoRmb290ZXJcbiAqIDQsNSw2XG4gKiA3LDgsOVxuICog6LCD55SoIGlzR3JvdXBIZWFkZXLkvKDlhaUgMeiKgueCuSDov5Tlm550cnVlICDosIPnlKggaXNHcm91cEZvb3RlcuS8oOWFpSAz6IqC54K56L+U5ZuedHJ1ZSBcbiAqIOiwg+eUqCBnZXRHcm91cExlZnRYIOS8oOWFpSAy6IqC54K5IOi/lOWbnjHoioLngrnkvY3nva5YIGdldEdyb3VwUmlnaHRYIOi/lOWbnjPoioLngrnkvY3nva5YXG4gKiDosIPnlKggZ2V0R3JvdXBCb3R0b21ZIOS8oOWFpSA16IqC54K5IOi/lOWbnjjoioLngrnkvY3nva5ZIGdldEdyb3VwVG9wWSDov5Tlm54y6IqC54K55L2N572uWVxuICog5rC05bmz5qih5byPXG4gKiB8MXwsNCw3IOS4gOe7hGl0ZW3ljIXlkKsgMSwyLDMgMeaYr+S4gOe7hGl0ZW3kuK1oZWFkZXIg5Lmf5piv5pW05Liq5YiX6KGo55qEaGVhZGVyIDPmmK/kuIDnu4RpdGVt5LitZm9vdGVyIDnmmK/mlbTkuKrliJfooajnmoRmb290ZXJcbiAqIHwyfCw1LDhcbiAqIHwzfCw2LDlcbiAqL1xuaW1wb3J0IFVJU3B1ZXJTY3JvbGxWaWV3IGZyb20gJy4vVUlTdXBlclNjcm9sbFZpZXcnO1xuaW1wb3J0IFVJU3B1ZXJJdGVtIGZyb20gJy4vVUlTdXBlckl0ZW0nO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSwgbWVudSB9ID0gY2MuX2RlY29yYXRvcjtcbmNvbnN0IEVQU0lMT04gPSAxZS00O1xuZXhwb3J0IGNvbnN0IFVJQ2hhbmdlQnJvdGhlckV2bmV0ID0gXCJVSUNoYW5nZUJyb3RoZXJFdm5ldFwiXG5leHBvcnQgZW51bSBVSVN1cGVyQXhpcyB7XG4gICAgSE9SSVpPTlRBTCA9IDAsXG4gICAgVkVSVElDQUwgPSAxXG59XG5leHBvcnQgZW51bSBVSVN1cGVyRGlyZWN0aW9uIHtcbiAgICBIRUFERVJfVE9fRk9PVEVSID0gMCxcbiAgICBGT09URVJfVE9fSEVBREVSID0gMSxcbn1cbkBjY2NsYXNzXG5AbWVudShcIlVJU3VwZXJMYXlvdXRcIilcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU3VwZXJMYXlvdXQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVUlTdXBlckF4aXMpLCBkaXNwbGF5TmFtZTogXCLmjpLliJfmlrnlkJFcIiB9KSBzdGFydEF4aXM6IFVJU3VwZXJBeGlzID0gVUlTdXBlckF4aXMuVkVSVElDQUxcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5FbnVtKFVJU3VwZXJEaXJlY3Rpb24pLCBkaXNwbGF5TmFtZTogXCLmjpLliJflrZDoioLngrnnmoTmlrnlkJFcIiB9KSBkaXJlY3Rpb246IFVJU3VwZXJEaXJlY3Rpb24gPSBVSVN1cGVyRGlyZWN0aW9uLkhFQURFUl9UT19GT09URVJcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLkuIrovrnot51cIiB9KSBwYWRkaW5nVG9wOiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5LiL6L656LedXCIgfSkgcGFkZGluZ0JvdHRvbTogbnVtYmVyID0gMFxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuW3pui+uei3nVwiIH0pIHBhZGRpbmdMZWZ0OiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5Y+z6L656LedXCIgfSkgcGFkZGluZ1JpZ2h0OiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi6Ze06ZqUXCIgfSkgc3BhY2luZzogY2MuVmVjMiA9IGNjLlZlYzIuWkVST1xuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuavj+e7hGl0ZW3kuKrmlbBcIiwgdG9vbHRpcDogXCLljZXooYznmoTliJfmlbAg5oiWIOWNleWIl+eahOihjOaVsFwiIH0pIGNvbHVtbjogbnVtYmVyID0gMlxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIml0ZW3liJvlu7rlgI3njodcIiwgdG9vbHRpcDogXCLnm7jlr7nkuo52aWV355qE5bC65a+4IOm7mOiupDLlgI1cIiB9KSBtdWx0aXBsZTogbnVtYmVyID0gMlxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLlByZWZhYiwgZGlzcGxheU5hbWU6IFwiaXRlbSBQcmVmYWJcIiB9KSBwcmVmYWI6IGNjLlByZWZhYiA9IG51bGxcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlpLTpg6jmu5Hliqjlvqrnjq9cIiB9KSBoZWFkZXJMb29wOiBib29sZWFuID0gZmFsc2VcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlsL7pg6jmu5Hliqjlvqrnjq9cIiB9KSBmb290ZXJMb29wOiBib29sZWFuID0gZmFsc2VcbiAgICBAcHJvcGVydHkgYWZmZWN0ZWRCeVNjYWxlOiBib29sZWFuID0gdHJ1ZVxuICAgIEBwcm9wZXJ0eShjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKSByZWZyZXNoSXRlbUV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW11cbiAgICBwcml2YXRlIF9nZW5lcjogR2VuZXJhdG9yXG4gICAgcHJpdmF0ZSBfaXNpbml0ZWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgX21heFByZWZhYlRvdGFsOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBfY2hpbGRyZW46IGNjLk5vZGVbXSA9IFtdIC8v5ZKMdGhpcy5ub2RlLmNoaWxkcmVuIOS/neaMgeWQjOatpVxuICAgIHByaXZhdGUgX3ZpZXdTaXplOiBjYy5TaXplXG4gICAgcHJpdmF0ZSBfc2Nyb2xsVmlldzogVUlTcHVlclNjcm9sbFZpZXcgPSBudWxsXG4gICAgcHJpdmF0ZSBfbWF4SXRlbVRvdGFsOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBfcHJldkxheW91dFBvc2l0aW9uOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPXG4gICAgLyoqIOW9k+WJjeeahOa7muWKqOaYr+WQpuaYr+eUsSBzY3JvbGxUbyDmlrnms5XmiafooYznmoQg5ZKMdG91Y2jmu5HliqjlgZrkuKrljLrliIYqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0hlYWRlck9yRm9vdGVyOiBib29sZWFuID0gZmFsc2VcbiAgICAvKiog5qC55o2u5LiK5LiA5qyh5ZKM5pys5qyh55qE5Z2Q5qCH5Y+Y5YyW6K6h566X5ruR5Yqo5pa55ZCRICovXG4gICAgcHJpdmF0ZSBnZXQgbGF5b3V0RGlyZWN0aW9uKCk6IGNjLlZlYzIge1xuICAgICAgICBsZXQgcG9zID0gY2MuVmVjMi5aRVJPXG4gICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICBwb3MueSA9IHRoaXMubm9kZS55IC0gdGhpcy5fcHJldkxheW91dFBvc2l0aW9uLnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcy54ID0gdGhpcy5ub2RlLnggLSB0aGlzLl9wcmV2TGF5b3V0UG9zaXRpb24ueFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZMYXlvdXRQb3NpdGlvbiA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIHJldHVybiBwb3NcbiAgICB9XG4gICAgLyoqIOaYr+WQpuaYr+WQkeS4i+a7keWKqCAqL1xuICAgIHByaXZhdGUgZ2V0IGlzU2Nyb2xsVG9Gb290ZXIoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXREaXJlY3Rpb24ueSA8IDBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheW91dERpcmVjdGlvbi54ID4gMFxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDoh6rlt7Hnu7TmiqTnmoTlrZDoioLngrnmlbDnu4Qg5ZKMdGhpcy5ub2RlLmNoaWxkcmVuIOS/neaMgeWQjOatpSAqL1xuICAgIHB1YmxpYyBnZXQgY2hpbGRyZW4oKSB7IHJldHVybiB0aGlzLl9jaGlsZHJlbiB9XG4gICAgLyoqIOacgOWkp+aVsOaNruaAu+aVsCAqL1xuICAgIHB1YmxpYyBnZXQgbWF4SXRlbVRvdGFsKCkgeyByZXR1cm4gdGhpcy5fbWF4SXRlbVRvdGFsIH1cbiAgICAvKiog5b2T5YmN6KKr5Yib5bu655qEaXRlbeaAu+aVsCAqL1xuICAgIHB1YmxpYyBnZXQgbWF4UHJlZmFiVG90YWwoKSB7IHJldHVybiB0aGlzLl9tYXhQcmVmYWJUb3RhbCB9XG4gICAgLyoqIHNjcm9sbFZpZXcudmlld+WwuuWvuCAqL1xuICAgIHB1YmxpYyBnZXQgdmlld1NpemUoKTogY2MuU2l6ZSB7XG4gICAgICAgIGlmICghdGhpcy5fdmlld1NpemUpIHRoaXMuX3ZpZXdTaXplID0gdGhpcy5zY3JvbGxWaWV3LnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld1NpemVcbiAgICB9XG4gICAgLyoqIOaYr+WQpuaYr+WeguebtOaooeW8jyAqL1xuICAgIHB1YmxpYyBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTFxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5rC05bmz5qih5byPICovXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTFxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5q2j5bqP5o6S5YiXICovXG4gICAgcHVibGljIGdldCBoZWFkZXJUb0Zvb3RlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09IFVJU3VwZXJEaXJlY3Rpb24uSEVBREVSX1RPX0ZPT1RFUlxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5YCS5bqP5o6S5YiXICovXG4gICAgcHVibGljIGdldCBmb290ZXJUb0hlYWRlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09IFVJU3VwZXJEaXJlY3Rpb24uRk9PVEVSX1RPX0hFQURFUlxuICAgIH1cbiAgICAvKiog5rC05bmz6Ze06ZqU5oC75a695bqmIChHcmlkIOaooeW8j+i/lOWbnuWkmuS4qumXtOmalOaAu+WuveW6pikgKi9cbiAgICBwdWJsaWMgZ2V0IHNwYWNpbmdXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2luZy54ICogKHRoaXMuY29sdW1uIC0gMSlcbiAgICB9XG4gICAgLyoqIOawtOW5s+mXtOmalOaAu+mrmOW6piAoR3JpZCDmqKHlvI/ov5Tlm57lpJrkuKrpl7TpmpTmgLvpq5jluqYpICovXG4gICAgcHVibGljIGdldCBzcGFjaW5nSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGFjaW5nLnkgKiAodGhpcy5jb2x1bW4gLSAxKVxuICAgIH1cbiAgICAvKiog5Y+v5a6557qzaXRlbeeahOecn+WunuWuveW6piAqL1xuICAgIHB1YmxpYyBnZXQgYWNjb21tb2RXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1NpemUud2lkdGggLSB0aGlzLnBhZGRpbmdMZWZ0IC0gdGhpcy5wYWRkaW5nUmlnaHRcbiAgICB9XG4gICAgLyoqIOWPr+Wuuee6s2l0ZW3nmoTnnJ/lrp7pq5jluqYgKi9cbiAgICBwdWJsaWMgZ2V0IGFjY29tbW9kSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3U2l6ZS5oZWlnaHQgLSB0aGlzLnBhZGRpbmdUb3AgLSB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICB9XG4gICAgcHVibGljIGdldCBzY3JvbGxWaWV3KCk6IFVJU3B1ZXJTY3JvbGxWaWV3IHtcbiAgICAgICAgaWYgKCF0aGlzLl9zY3JvbGxWaWV3KSB0aGlzLl9zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KFVJU3B1ZXJTY3JvbGxWaWV3KVxuICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVmlld1xuICAgIH1cbiAgICAvKiog5b2T5YmN5aS06YOo55qEaXRlbSAqL1xuICAgIHB1YmxpYyBnZXQgaGVhZGVyKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW5bMF1cbiAgICB9XG4gICAgLyoqIOW9k+WJjeWwvumDqOeahGl0ZW0gKi9cbiAgICBwdWJsaWMgZ2V0IGZvb3RlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW3RoaXMuX2NoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgfVxuICAgIC8qKiDnnJ/lrp7nmoTkuIrovrnot50gKi9cbiAgICBwdWJsaWMgZ2V0IHRvcEJvdW5kYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlZICsgdGhpcy5wYWRkaW5nVG9wXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb290ZXJCb3VuZGFyeVkgKyB0aGlzLnBhZGRpbmdUb3BcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog55yf5a6e55qE5LiL6L656LedICovXG4gICAgcHVibGljIGdldCBib3R0b21Cb3VuZGFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvb3RlckJvdW5kYXJ5WSAtIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlZIC0gdGhpcy5wYWRkaW5nQm90dG9tXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOecn+WunueahOW3pui+uei3nSAqL1xuICAgIHB1YmxpYyBnZXQgbGVmdEJvdW5kYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlYIC0gdGhpcy5wYWRkaW5nTGVmdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9vdGVyQm91bmRhcnlYIC0gdGhpcy5wYWRkaW5nTGVmdFxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDnnJ/lrp7nmoTlj7Povrnot50gKi9cbiAgICBwdWJsaWMgZ2V0IHJpZ2h0Qm91bmRhcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb290ZXJCb3VuZGFyeVggKyB0aGlzLnBhZGRpbmdSaWdodFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlYICsgdGhpcy5wYWRkaW5nUmlnaHRcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5aS06YOoaXRlbeeahOS4lueVjOWdkOagh+i+ueahhiDnsbvkvLwgeE1pbuOAgXhNYXggKi9cbiAgICBwdWJsaWMgZ2V0IGhlYWRlckJvdW5kYXJ5WCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUueCArIHRoaXMuaGVhZGVyLnggLSB0aGlzLmhlYWRlci5hbmNob3JYICogdGhpcy5nZXRTY2FsZVdpZHRoKHRoaXMuaGVhZGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS54ICsgdGhpcy5oZWFkZXIueCArICgxIC0gdGhpcy5oZWFkZXIuYW5jaG9yWCkgKiB0aGlzLmdldFNjYWxlV2lkdGgodGhpcy5oZWFkZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWktOmDqGl0ZW3nmoTkuJbnlYzlnZDmoIfovrnmoYYg57G75Ly8IHlNaW7jgIF5TWF4ICovXG4gICAgcHVibGljIGdldCBoZWFkZXJCb3VuZGFyeVkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnkgKyB0aGlzLmhlYWRlci55ICsgKDEgLSB0aGlzLmhlYWRlci5hbmNob3JZKSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQodGhpcy5oZWFkZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnkgKyB0aGlzLmhlYWRlci55IC0gdGhpcy5oZWFkZXIuYW5jaG9yWSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQodGhpcy5oZWFkZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWwvumDqGl0ZW3nmoTkuJbnlYzlnZDmoIfovrnmoYYg57G75Ly8IHhNaW7jgIF4TWF4ICovXG4gICAgcHVibGljIGdldCBmb290ZXJCb3VuZGFyeVgoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnggKyB0aGlzLmZvb3Rlci54ICsgKDEgLSB0aGlzLmZvb3Rlci5hbmNob3JYKSAqIHRoaXMuZ2V0U2NhbGVXaWR0aCh0aGlzLmZvb3RlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUueCArIHRoaXMuZm9vdGVyLnggLSB0aGlzLmZvb3Rlci5hbmNob3JYICogdGhpcy5nZXRTY2FsZVdpZHRoKHRoaXMuZm9vdGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDlsL7pg6hpdGVt55qE5LiW55WM5Z2Q5qCH6L655qGGIOexu+S8vCB5TWlu44CBeU1heCAqL1xuICAgIHB1YmxpYyBnZXQgZm9vdGVyQm91bmRhcnlZKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS55ICsgdGhpcy5mb290ZXIueSAtIHRoaXMuZm9vdGVyLmFuY2hvclkgKiB0aGlzLmdldFNjYWxlSGVpZ2h0KHRoaXMuZm9vdGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS55ICsgdGhpcy5mb290ZXIueSArICgxIC0gdGhpcy5mb290ZXIuYW5jaG9yWSkgKiB0aGlzLmdldFNjYWxlSGVpZ2h0KHRoaXMuZm9vdGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNOb3JtYWxTaXplKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuZXF1YWxzKHRoaXMudmlld1NpemUpXG4gICAgfVxuICAgIC8qKiDph43lhpkgdGhpcy5ub2RlLmdldENvbnRlbnRTaXplIOWKqOaAgeiuoeeul+WktOWwvml0ZW0g6L+U5Zue6Jma5ouf55qE5bC65a+4IOmdnmNvbnRlbnTorr7nva7nmoTlsLrlr7ggKi9cbiAgICBwdWJsaWMgZ2V0Q29udGVudFNpemUoKSB7XG4gICAgICAgIGxldCBzaXplID0gdGhpcy5nZXRSZWFsbHlTaXplKClcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy5zY3JvbGxWaWV3LnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICAvLyDliJfooajkuLrnqbrml7Yg55u05o6l6L+U5ZueIHNjcm9sbFZpZXcudmlldyDnmoTlsLrlr7hcbiAgICAgICAgaWYgKHNpemUuaGVpZ2h0IDwgdmlld1NpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBzaXplLmhlaWdodCA9IHZpZXdTaXplLmhlaWdodFxuICAgICAgICB9XG4gICAgICAgIGlmIChzaXplLndpZHRoIDwgdmlld1NpemUud2lkdGgpIHtcbiAgICAgICAgICAgIHNpemUud2lkdGggPSB2aWV3U2l6ZS53aWR0aFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplXG4gICAgfVxuICAgIC8qKiDov5Tlm54gaGVhZGVy5YiwIGZvb3RlciDkuYvpl7TnmoTmlbTkvZPlsLrlr7ggKi9cbiAgICBwdWJsaWMgZ2V0UmVhbGx5U2l6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID09IDApIHJldHVybiB0aGlzLnZpZXdTaXplXG4gICAgICAgIGxldCBzaXplID0gY2MuU2l6ZS5aRVJPXG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7IC8vIOagueaNrmhlYWRlcuWSjGZvb3Rlcuiuoeeul+WHuuecn+WunueahGNvbnRlbnTlsLrlr7ggXG4gICAgICAgICAgICBzaXplLndpZHRoID0gdGhpcy5mb290ZXJCb3VuZGFyeVggKyAtdGhpcy5oZWFkZXJCb3VuZGFyeVggKyB0aGlzLnBhZGRpbmdMZWZ0ICsgdGhpcy5wYWRkaW5nUmlnaHRcbiAgICAgICAgICAgIHNpemUuaGVpZ2h0ID0gdGhpcy5oZWFkZXJCb3VuZGFyeVkgKyAtdGhpcy5mb290ZXJCb3VuZGFyeVkgKyB0aGlzLnBhZGRpbmdUb3AgKyB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNpemUud2lkdGggPSB0aGlzLmhlYWRlckJvdW5kYXJ5WCArIC10aGlzLmZvb3RlckJvdW5kYXJ5WCArIHRoaXMucGFkZGluZ0xlZnQgKyB0aGlzLnBhZGRpbmdSaWdodFxuICAgICAgICAgICAgc2l6ZS5oZWlnaHQgPSB0aGlzLmZvb3RlckJvdW5kYXJ5WSArIC10aGlzLmhlYWRlckJvdW5kYXJ5WSArIHRoaXMucGFkZGluZ1RvcCArIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaXplXG4gICAgfVxuICAgIC8qKiDph43nva5zY3JvbGx2aWV3ICovXG4gICAgcHVibGljIHJlc2V0U2Nyb2xsVmlldygpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnJlc2V0KClcbiAgICB9XG4gICAgLyoqIOiOt+WPlue8qeaUvuezu+aVsCAqL1xuICAgIHB1YmxpYyBnZXRVc2VkU2NhbGVWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFmZmVjdGVkQnlTY2FsZSA/IE1hdGguYWJzKHZhbHVlKSA6IDFcbiAgICB9XG4gICAgLyoqIOiuvue9ruacgOWkp2l0ZW3mlbDph48gKi9cbiAgICBwdWJsaWMgYXN5bmMgdG90YWwodmFsdWU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc3RvcEF1dG9TY3JvbGwoKVxuICAgICAgICB0aGlzLnNjcm9sbFZpZXcucmVsZWFzZSgpIC8vIOmHiuaUvu+8iOWKn+iDveeUqOS6juS4iuaLieWKoOi9vSDkuIvmi4nliLfmlrDvvIlcbiAgICAgICAgdGhpcy5pbml0bGl6ZWQoKSAgLy8g5Yid5aeL5YyWXG4gICAgICAgIGF3YWl0IHRoaXMuYXN5bmNDcmVhdGVJdGVtKHZhbHVlKSAvLyDliIbluKfliJvlu7ppdGVtXG4gICAgICAgIGxldCBkYXRhT2Zmc2V0ID0gdGhpcy5nZXREYXRhT2Zmc2V0KHZhbHVlKSAvL+iOt+WPluaVsOaNruWBj+enu+mHj++8iOagueaNrnZhbHVl55u45a+55LqOIF9tYXhJdGVtVG90YWwg6K6h566X5aKe5Yqg44CB5YeP5bCR55qE5pWw6YeP77yJXG4gICAgICAgIGxldCByZWFsbHlPZmZzZXQgPSB0aGlzLmdldFJlYWxseU9mZnNldChkYXRhT2Zmc2V0KSAvLyDojrflj5bnnJ/lrp7nmoTmlbDmja7lgY/np7vvvIhHcmlk5qih5byPIOWKn+iDveeUqOS6juWIpOaWreaYr+WQpumcgOimgeWBj+enu2hlYWRlcuadpeWwhuS4i+aWueWhq+a7oe+8iVxuICAgICAgICB0aGlzLnJlZnJlc2hJdGVtcyh2YWx1ZSwgcmVhbGx5T2Zmc2V0KSAvL+mAmui/h+W3suacieeahGl0ZW1bJ2luZGV4J10g5Yqg5LiK5pWw5o2u5YGP56e7IOadpeaYr+WIt+aWsOaYvuekulxuICAgICAgICB0aGlzLl9tYXhJdGVtVG90YWwgPSB2YWx1ZSAvLyDorrDlvZXlvZPliY3mgLvmlbBcbiAgICB9XG4gICAgLyoqIOiOt+WPluWFhOW8n+iKgueCuSAqL1xuICAgIHB1YmxpYyBnZXRCcm90aGVyTm9kZShub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ2V0U2libGluZ0luZGV4KG5vZGUpIC0gMSAvLyDmraQgZ2V0U2libGluZ0luZGV4IOmdniB0aGlzLm5vZGUuZ2V0U2libGluZ0luZGV4XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbltpbmRleF1cbiAgICB9XG4gICAgLyoqIOaYr+WQpuaYr+S4gOe7hGl0ZW3kuK3nrKzkuIDkuKrvvIjlnoLnm7Tmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXooYznmoTmiYDmnInliJcg44CB5rC05bmz5ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V5YiX5Lit5omA5pyJ6KGM77yJKi9cbiAgICBwdWJsaWMgaXNHcm91cEhlYWRlcihub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB4T3J5ID0gdGhpcy5nZXRHcm91cEhlYWRlcihub2RlKVxuICAgICAgICBsZXQgcG9zID0gdGhpcy52ZXJ0aWNhbCA/IGNjLnYyKHhPcnkueCwgMCkgOiBjYy52MigwLCB4T3J5LnkpXG4gICAgICAgIGxldCBzZWxmID0gdGhpcy52ZXJ0aWNhbCA/IGNjLnYyKG5vZGUueCwgMCkgOiBjYy52MigwLCBub2RlLnkpXG4gICAgICAgIHJldHVybiBzZWxmLmZ1enp5RXF1YWxzKHBvcywgRVBTSUxPTilcbiAgICB9XG4gICAgLyoqIOaYr+WQpuaYr+S4gOe7hGl0ZW3kuK3mnIDlkI7kuIDkuKrvvIjlnoLnm7Tmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXooYznmoTmiYDmnInliJcg44CB5rC05bmz5ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V5YiX5Lit5omA5pyJ6KGM77yJKi9cbiAgICBwdWJsaWMgaXNHcm91cEZvb3Rlcihub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB4T3J5ID0gdGhpcy5nZXRHcm91cEZvb3Rlcihub2RlKVxuICAgICAgICBsZXQgcG9zID0gdGhpcy52ZXJ0aWNhbCA/IGNjLnYyKHhPcnkueCwgMCkgOiBjYy52MigwLCB4T3J5LnkpXG4gICAgICAgIGxldCBzZWxmID0gdGhpcy52ZXJ0aWNhbCA/IGNjLnYyKG5vZGUueCwgMCkgOiBjYy52MigwLCBub2RlLnkpXG4gICAgICAgIHJldHVybiBzZWxmLmZ1enp5RXF1YWxzKHBvcywgRVBTSUxPTilcbiAgICB9XG4gICAgLyoqIOiOt+WPluS4gOe7hGl0ZW3kuK3otbflp4vkvY3nva4g77yI5Z6C55u05ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V6KGM55qE5omA5pyJ5YiXIOOAgeawtOW5s+a7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleWIl+S4reaJgOacieihjO+8iSovXG4gICAgcHVibGljIGdldEdyb3VwSGVhZGVyKG5vZGU6IGNjLk5vZGUpOiBjYy5WZWMyIHtcbiAgICAgICAgbGV0IHBvcyA9IGNjLlZlYzIuWkVST1xuICAgICAgICBpZiAoIW5vZGUpIHJldHVybiBwb3NcbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSBub2RlLmFuY2hvclggKiB0aGlzLmdldFNjYWxlV2lkdGgobm9kZSkgKyAodGhpcy5wYWRkaW5nTGVmdCAqIG5vZGUuc2NhbGVYKSAtICh0aGlzLm5vZGUuYW5jaG9yWCAqIHRoaXMudmlld1NpemUud2lkdGggKiBub2RlLnNjYWxlWClcbiAgICAgICAgICAgICAgICBwb3MueSA9ICgxIC0gbm9kZS5hbmNob3JZKSAqIC10aGlzLmdldFNjYWxlSGVpZ2h0KG5vZGUpIC0gdGhpcy5wYWRkaW5nVG9wICsgKDEgLSB0aGlzLm5vZGUuYW5jaG9yWSkgKiB0aGlzLnZpZXdTaXplLmhlaWdodFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IG5vZGUuYW5jaG9yWCAqIHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSArIHRoaXMucGFkZGluZ0xlZnQgLSB0aGlzLm5vZGUuYW5jaG9yWCAqIHRoaXMudmlld1NpemUud2lkdGhcbiAgICAgICAgICAgICAgICBwb3MueSA9IG5vZGUuYW5jaG9yWSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQobm9kZSkgKyB0aGlzLnBhZGRpbmdCb3R0b20gLSB0aGlzLm5vZGUuYW5jaG9yWSAqIHRoaXMudmlld1NpemUuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gbm9kZS5hbmNob3JYICogdGhpcy5nZXRTY2FsZVdpZHRoKG5vZGUpICsgdGhpcy5wYWRkaW5nTGVmdCAtIHRoaXMubm9kZS5hbmNob3JYICogdGhpcy52aWV3U2l6ZS53aWR0aFxuICAgICAgICAgICAgICAgIHBvcy55ID0gKDEgLSBub2RlLmFuY2hvclkpICogLW5vZGUuaGVpZ2h0IC0gdGhpcy5wYWRkaW5nVG9wICsgKDEgLSB0aGlzLm5vZGUuYW5jaG9yWSkgKiB0aGlzLnZpZXdTaXplLmhlaWdodFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuYWNjb21tb2RXaWR0aCAqIHRoaXMubm9kZS5hbmNob3JYIC0gdGhpcy5nZXRTY2FsZVdpZHRoKG5vZGUpICogKDEgLSBub2RlLmFuY2hvclgpXG4gICAgICAgICAgICAgICAgcG9zLnkgPSAoMSAtIG5vZGUuYW5jaG9yWSkgKiAtbm9kZS5oZWlnaHQgLSB0aGlzLnBhZGRpbmdUb3AgKyAoMSAtIHRoaXMubm9kZS5hbmNob3JZKSAqIHRoaXMudmlld1NpemUuaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc1xuICAgIH1cbiAgICAvKiog6I635Y+W5LiA57uEaXRlbeS4ree7k+adn+S9jee9riDvvIjlnoLnm7Tmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXooYznmoTmiYDmnInliJcg44CB5rC05bmz5ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V5YiX5Lit5omA5pyJ6KGM77yJKi9cbiAgICBwdWJsaWMgZ2V0R3JvdXBGb290ZXIobm9kZTogY2MuTm9kZSk6IGNjLlZlYzIge1xuICAgICAgICBsZXQgcG9zID0gY2MuVmVjMi5aRVJPXG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuIHBvc1xuICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgcG9zLnggPSAodGhpcy5hY2NvbW1vZFdpZHRoICsgdGhpcy5wYWRkaW5nTGVmdCkgKiB0aGlzLm5vZGUuYW5jaG9yWCAtICh0aGlzLmdldFNjYWxlV2lkdGgobm9kZSkgKiAoMSAtIG5vZGUuYW5jaG9yWCkgKyB0aGlzLm5vZGUuYW5jaG9yWCAqIHRoaXMucGFkZGluZ1JpZ2h0KVxuICAgICAgICAgICAgcG9zLnkgPSBub2RlLnlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBvcy54ID0gbm9kZS54XG4gICAgICAgICAgICBwb3MueSA9IC0oKHRoaXMuYWNjb21tb2RIZWlnaHQgKyB0aGlzLnBhZGRpbmdUb3ApICogdGhpcy5ub2RlLmFuY2hvclkgLSB0aGlzLmdldFNjYWxlSGVpZ2h0KG5vZGUpICogbm9kZS5hbmNob3JZKSArICgxIC0gbm9kZS5hbmNob3JZKSAqIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3NcbiAgICB9XG4gICAgLyoqIOiOt+WPluS4gOe7hGl0ZW3kuK0gbm9kZSDnm7jlr7kgcmVsYXRpdmUg5Y+z5YGP56e76YePIO+8iOWeguebtOa7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleihjOeahOaJgOacieWIlyDjgIHmsLTlubPmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXliJfkuK3miYDmnInooYzvvIkqL1xuICAgIHB1YmxpYyBnZXRHcm91cFJpZ2h0WChub2RlOiBjYy5Ob2RlLCByZWxhdGl2ZTogY2MuTm9kZSkge1xuICAgICAgICBpZiAoIW5vZGUgfHwgIXJlbGF0aXZlKSByZXR1cm4gdGhpcy5nZXRHcm91cEhlYWRlcihub2RlKS54XG4gICAgICAgIGxldCBwcmV2V2lkdGggPSByZWxhdGl2ZS54ICsgdGhpcy5nZXRTY2FsZVdpZHRoKHJlbGF0aXZlKSAqICgxIC0gcmVsYXRpdmUuYW5jaG9yWClcbiAgICAgICAgbGV0IHNlbGZXaWR0aCA9IHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSAqIG5vZGUuYW5jaG9yWFxuICAgICAgICByZXR1cm4gcHJldldpZHRoICsgc2VsZldpZHRoICsgdGhpcy5zcGFjaW5nLnhcbiAgICB9XG4gICAgLyoqIOiOt+WPluS4gOe7hGl0ZW3kuK0gbm9kZSDnm7jlr7kgcmVsYXRpdmUg5bem5YGP56e76YePIO+8iOWeguebtOa7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleihjOeahOaJgOacieWIlyDjgIHmsLTlubPmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXliJfkuK3miYDmnInooYzvvIkqL1xuICAgIHB1YmxpYyBnZXRHcm91cExlZnRYKG5vZGU6IGNjLk5vZGUsIHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICghbm9kZSB8fCAhcmVsYXRpdmUpIHJldHVybiB0aGlzLmdldEdyb3VwRm9vdGVyKG5vZGUpLnhcbiAgICAgICAgbGV0IHByZXZXaWR0aCA9IHJlbGF0aXZlLnggLSB0aGlzLmdldFNjYWxlV2lkdGgocmVsYXRpdmUpICogcmVsYXRpdmUuYW5jaG9yWFxuICAgICAgICBsZXQgc2VsZldpZHRoID0gdGhpcy5nZXRTY2FsZVdpZHRoKG5vZGUpICogKDEgLSBub2RlLmFuY2hvclgpXG4gICAgICAgIHJldHVybiBwcmV2V2lkdGggLSBzZWxmV2lkdGggLSB0aGlzLnNwYWNpbmcueFxuICAgIH1cbiAgICAvKiog6I635Y+W5LiA57uEaXRlbeS4rSBub2RlIOebuOWvuSByZWxhdGl2ZSDkuIvlgY/np7vph48g77yI5Z6C55u05ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V6KGM55qE5omA5pyJ5YiXIOOAgeawtOW5s+a7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleWIl+S4reaJgOacieihjO+8iSovXG4gICAgcHVibGljIGdldEdyb3VwQm90dG9tWShub2RlOiBjYy5Ob2RlLCByZWxhdGl2ZTogY2MuTm9kZSkge1xuICAgICAgICBsZXQgcHJldkhlaWdodCA9IHJlbGF0aXZlLnkgLSB0aGlzLmdldFNjYWxlSGVpZ2h0KHJlbGF0aXZlKSAqIHJlbGF0aXZlLmFuY2hvcllcbiAgICAgICAgbGV0IHNlbGZIZWlnaHQgPSB0aGlzLmdldFNjYWxlSGVpZ2h0KG5vZGUpICogKDEgLSBub2RlLmFuY2hvclkpXG4gICAgICAgIHJldHVybiBwcmV2SGVpZ2h0IC0gc2VsZkhlaWdodCAtIHRoaXMuc3BhY2luZy55XG4gICAgfVxuICAgIC8qKiDojrflj5bkuIDnu4RpdGVt5LitIG5vZGUg55u45a+5IHJlbGF0aXZlIOS4iuWBj+enu+mHjyDvvIjlnoLnm7Tmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXooYznmoTmiYDmnInliJcg44CB5rC05bmz5ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V5YiX5Lit5omA5pyJ6KGM77yJKi9cbiAgICBwdWJsaWMgZ2V0R3JvdXBUb3BZKG5vZGU6IGNjLk5vZGUsIHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcmVsYXRpdmUueSArIHRoaXMuZ2V0U2NhbGVIZWlnaHQocmVsYXRpdmUpICogKDEgLSByZWxhdGl2ZS5hbmNob3JZKVxuICAgICAgICBsZXQgc2VsZkhlaWdodCA9IHRoaXMuZ2V0U2NhbGVIZWlnaHQobm9kZSkgKiBub2RlLmFuY2hvcllcbiAgICAgICAgcmV0dXJuIHByZXZIZWlnaHQgKyBzZWxmSGVpZ2h0ICsgdGhpcy5zcGFjaW5nLnlcbiAgICB9XG4gICAgLyoqIOWIpOaWree7meWumueahCBub2RlIOS5mOS7pSBtdWx0aXBsZSDlgI3mlbDlkI4g5piv5ZCm6LaF5Ye65LqG5aS06YOo6L655qGGIO+8iCBtdWx0aXBsZSA9IDEg5bCx5piv5LiA5Liqbm9kZeeahOWwuuWvuCDpu5jorqQxLjXlgI3vvIkqL1xuICAgIHB1YmxpYyBpc091dE9mQm91bmRhcnlIZWFkZXIobm9kZTogY2MuTm9kZSwgbXVsdGlwbGU6IG51bWJlciA9IDEuNSkge1xuICAgICAgICBsZXQgd2lkdGggPSBub2RlLndpZHRoICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWCkgKiBtdWx0aXBsZVxuICAgICAgICBsZXQgaGVpZ2h0ID0gLW5vZGUuaGVpZ2h0ICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWSkgKiBtdWx0aXBsZVxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KGNjLnYyKHdpZHRoLCBoZWlnaHQpKVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICAgIC8qKiDliKTmlq3nu5nlrprnmoQgbm9kZSDkuZjku6UgbXVsdGlwbGUg5YCN5pWw5ZCOIOaYr+WQpui2heWHuuS6huWwvumDqOmDqOi+ueahhiDvvIggbXVsdGlwbGUgPSAxIOWwseaYr+S4gOS4qm5vZGXnmoTlsLrlr7gg6buY6K6kMS415YCN77yJKi9cbiAgICBwdWJsaWMgaXNPdXRPZkJvdW5kYXJ5Rm9vdGVyKG5vZGU6IGNjLk5vZGUsIG11bHRpcGxlOiBudW1iZXIgPSAxLjUpIHtcbiAgICAgICAgbGV0IHdpZHRoID0gLW5vZGUud2lkdGggKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVYKSAqIG11bHRpcGxlXG4gICAgICAgIGxldCBoZWlnaHQgPSBub2RlLmhlaWdodCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVkpICogbXVsdGlwbGVcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuc2Nyb2xsVmlldy5nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeShjYy52Mih3aWR0aCwgaGVpZ2h0KSlcbiAgICAgICAgcmV0dXJuIG9mZnNldFxuICAgIH1cbiAgICAvKiog5rua5Yqo5Yiw5aS06YOoIO+8iOagueaNriDmjpLliJfmlrnlkJHjgIHmjpLliJflrZDoioLngrnnmoTmlrnlkJHvvInmnaXosIPnlKggc2Nyb2xsVmlldy5zY3JvbGxUby4uLiDmlrnms5UgKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9IZWFkZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNjcm9sbFRvSGVhZGVyT3JGb290ZXIgPSB0aW1lSW5TZWNvbmQgPiAwXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpXG4gICAgICAgIHRoaXMucmVzZXRUb0hlYWRlcigpXG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1RvcCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0xlZnQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Cb3R0b20odGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9SaWdodCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOa7muWKqOWIsOWwvumDqO+8iOagueaNriDmjpLliJfmlrnlkJHjgIHmjpLliJflrZDoioLngrnnmoTmlrnlkJHvvInmnaXosIPnlKggc2Nyb2xsVmlldy5zY3JvbGxUby4uLiDmlrnms5UgKi9cbiAgICBwdWJsaWMgc2Nyb2xsVG9Gb290ZXIodGltZUluU2Vjb25kPzogbnVtYmVyLCBhdHRlbnVhdGVkPzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLnNjcm9sbFRvSGVhZGVyT3JGb290ZXIgPSB0aW1lSW5TZWNvbmQgPiAwXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpXG4gICAgICAgIHRoaXMucmVzZXRUb0Zvb3RlcigpXG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvTGVmdCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOmAmuefpee7meWumueahG5vZGXliLfmlrDmlbDmja4gKi9cbiAgICBwdWJsaWMgbm90aWZ5UmVmcmVzaEl0ZW0odGFyZ2V0OiBjYy5Ob2RlKSB7XG4gICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLnJlZnJlc2hJdGVtRXZlbnRzLCB0YXJnZXQsIHRhcmdldFsnaW5kZXgnXSlcbiAgICB9XG4gICAgLyoqIOiOt+WPluiKgueCuee0ouW8lSAqL1xuICAgIHB1YmxpYyBnZXRTaWJsaW5nSW5kZXgobm9kZTogY2MuTm9kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW4uaW5kZXhPZihub2RlKVxuICAgIH1cbiAgICAvKiog6Ieq5a6a5LmJ57Si5byV5pa55rOVIOi/memHjOS4jeaYr+mAmui/h+WunuaXtuS/ruaUueiKgueCuee0ouW8leeahOaWueazle+8jOWPquaYr+aooeaLn+exu+S8vOeahOWKn+iDve+8jOWunumZheS4iuW5tuayoeacieecn+ato+aUueWPmOiKgueCueeahOWunumZhemhuuW6j++8iOS8mOWMlumhue+8iSAqL1xuICAgIHB1YmxpYyBzZXRTaWJsaW5nSW5kZXgobm9kZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICAvLyDmraTmlrnms5Xml7blj4LogIPlvJXmk47ljp9zZXRTaWJsaW5nSW5kZXjmlrnms5Ug5Y675o6J5LqG5L+u5pS56IqC54K557Si5byV5L2N572u55qE6LCD55So77yIaXRlbeacrOi6q+eahHpJbmRleOayoeacieS7u+S9leWPmOWMlu+8iVxuICAgICAgICBpbmRleCA9IGluZGV4ICE9PSAtMSA/IGluZGV4IDogdGhpcy5fY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICB2YXIgb2xkSW5kZXggPSB0aGlzLl9jaGlsZHJlbi5pbmRleE9mKG5vZGUpXG4gICAgICAgIGlmIChpbmRleCAhPT0gb2xkSW5kZXgpIHtcbiAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShvbGRJbmRleCwgMSlcbiAgICAgICAgICAgIGlmIChpbmRleCA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnNwbGljZShpbmRleCwgMCwgbm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVuLnB1c2gobm9kZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICog6L+Z6YeM5Yy65Yir5LqO5Y6f5pa55rOVIOWOn+aWueazleaYr+aUueWPmG5vZGXoioLngrnpobrluo/lkI7lj5HpgIFjYy5Ob2RlLkV2ZW50VHlwZS5TSUJMSU5HX09SREVSX0NIQU5HRUTpgJrnn6Ug6L+Z6YeM5LiN6ZyA6KaB5L+u5pS56IqC54K56aG65bqPXG4gICAgICAgICAgICAgKiDov5nph4zlj5HpgIHkuIDkuKroh6rlrprkuYnkuovku7Yg5qih5oufIFNJQkxJTkdfT1JERVJfQ0hBTkdFRCDpgJrnn6VcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoVUlDaGFuZ2VCcm90aGVyRXZuZXQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmluaXRsaXplZCgpXG4gICAgfVxuICAgIC8qKiDliJ3lp4vljJYgKi9cbiAgICBwcml2YXRlIGluaXRsaXplZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzaW5pdGVkKSByZXR1cm5cbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclggPSAwLjUgLy/lm7rlrppjb250ZW5055qE6ZSa54K55Li65Lit5b+DXG4gICAgICAgIHRoaXMubm9kZS5hbmNob3JZID0gMC41XG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLnZpZXdTaXplKSAvL+WwhmNvbnRlbnTnmoTlsLrlr7jorr7nva7kuI52aWV355u45ZCMIO+8iOWKn+iDveeUqOS6juepuuWIl+ihqOaXtuS5n+WPr+S7peS4i+aLieWIt+aWsOWSjOWKoOi9ve+8iSBcbiAgICAgICAgLy8g6YeN5YaZIHRoaXMubm9kZS5nZXRDb250ZW50U2l6ZSDmlrnms5Ug5Zug5Li6Y29udGVudOeahOecn+WunuWwuuWvuOS4jeS8mumaj+edgGl0ZW3nmoTmlbDph4/lj5jljJZcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbnRlbnRTaXplID0gdGhpcy5nZXRDb250ZW50U2l6ZS5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihjYy5WZWMyLlpFUk8pXG4gICAgICAgIHRoaXMuY29sdW1uID0gdGhpcy5jb2x1bW4gPCAxID8gMSA6IHRoaXMuY29sdW1uIC8vIOS4gOe7hGl0ZW3nmoTmlbDph48g5pyA5bCR5pivMSDkuZ/lsLHmmK/mma7pgJrnmoTmsLTlubMv5Z6C55u0IOWkp+S6jjHlsLHmmK9Hcmlk5qih5byPXG4gICAgICAgIC8vIOebkeWQrGNvbnRlbnTkvY3nva7lj5jljJYg5Yi35pawaGVhZGVyIGZvb3RlcuiKgueCueeahOebuOWvueS9jee9rlxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGZsYWcgPSB0aGlzLmlzU2Nyb2xsVG9Gb290ZXIgLy8gdGhpcy5pc1Njcm9sbFRvRm9vdGVyID0gdHJ1ZSDlkJHkuIvmu5HliqggZmFsc2Ug5ZCR5LiK5ruR5YqoXG4gICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIGZsYWcgPyB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hDaGlsZHMoZmxhZykgOiB0aGlzLmhlYWRlclRvRm9vdGVyV2F0Y2hDaGlsZHMoZmxhZykgLy8g5YCS5bqP5Yi35pawXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZsYWcgPyB0aGlzLmhlYWRlclRvRm9vdGVyV2F0Y2hDaGlsZHMoZmxhZykgOiB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hDaGlsZHMoZmxhZykgLy8g5q2j5bqP5Yi35pawXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlvZNpdGVtIOeUseWkmuWIsOWwkSDlubbkuJQg5b2TY29udGVudOeahOS9jee9ruiiq+mHjee9ruWIsOWIneWni+eKtuaAgeaXtiDph43mlrDorr7nva7lpLTpg6jnmoRpdGVt5b2S5L2NXG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCAmJiAwID09IHRoaXMubm9kZS55IHx8IHRoaXMuaG9yaXpvbnRhbCAmJiAwID09IHRoaXMubm9kZS54KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2V0UG9zaXRpb24odGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIHRoaXMuX2lzaW5pdGVkID0gdHJ1ZVxuICAgIH1cbiAgICAvKiog6I635Y+W57yp5pS+5a695bqmICovXG4gICAgcHJpdmF0ZSBnZXRTY2FsZVdpZHRoKG5vZGU6IGNjLk5vZGUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbm9kZS53aWR0aCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVgpXG4gICAgfVxuICAgIC8qKiDojrflj5bnvKnmlL7pq5jluqYgKi9cbiAgICBwcml2YXRlIGdldFNjYWxlSGVpZ2h0KG5vZGU6IGNjLk5vZGUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbm9kZS5oZWlnaHQgKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVZKVxuICAgIH1cbiAgICAvKiog566A5Y2V55qE5rWF5ou36LSdICovXG4gICAgcHJpdmF0ZSBnZXRUZW1wQ2hpbGRyZW4oKSB7XG4gICAgICAgIGxldCBsaXN0ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLl9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxpc3QucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cbiAgICAvKiog5q2j5bqP5pu05pawaXRlbSAqL1xuICAgIHByaXZhdGUgaGVhZGVyVG9Gb290ZXJXYXRjaENoaWxkcyhmbGFnKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0VGVtcENoaWxkcmVuKClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkWyd3YXRjaFNlbGYnXShmbGFnKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDlgJLluo/mm7TmlrBpdGVtICovXG4gICAgcHJpdmF0ZSBmb290ZXJUb0hlYWRlcldhdGNoQ2hpbGRzKGZsYWcpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5nZXRUZW1wQ2hpbGRyZW4oKVxuICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjaGlsZFsnd2F0Y2hTZWxmJ10oZmxhZylcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5b2T5pWw5o2u5aKe5Yqg44CB5YeP5bCR5pe2IOiOt+WPluaVsOaNruWBj+enuyAqL1xuICAgIHByaXZhdGUgZ2V0RGF0YU9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIOi/lOWbnuWIoOmZpOaVsOaNruWBj+enuyDvvIjmr5TlpoLlvZPliY3mnIDlpKfmlbDmja7lgLw9MTDvvIzmlrDmlbDmja49OSDov5Tlm54tMe+8iVxuICAgICAgICBpZiAodGhpcy5mb290ZXIgJiYgdGhpcy5mb290ZXJbJ2luZGV4J10gKyAxID49IHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5mb290ZXJbJ2luZGV4J10gKyAxIC0gdmFsdWVcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQgPT0gMCA/IDAgOiAtb2Zmc2V0XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L+U5Zue5aKe5Yqg5pWw5o2u5YGP56e7XG4gICAgICAgIGlmICh0aGlzLl9tYXhJdGVtVG90YWwgPT0gMCB8fCB2YWx1ZSA8IHRoaXMuX21heEl0ZW1Ub3RhbCB8fCB0aGlzLl9tYXhJdGVtVG90YWwgPCB0aGlzLl9tYXhQcmVmYWJUb3RhbCkgcmV0dXJuIDAgLy/mr5TlpoLlvZPliY3mnIDlpJrlhYHorrjliJvlu7oxMOS4qml0ZW0g5b2T5YmN5pi+56S6NeS4qiDov5Tlm54wXG4gICAgICAgIGlmICh0aGlzLmlzR3JvdXBGb290ZXIodGhpcy5mb290ZXIpKSByZXR1cm4gMCAvL0dyaWTmqKHlvI8g5aaC5p6c5bC+6YOo55qE5L2N572u5piv5Zyo5LiA57uEaXRlbeS4reacq+WwvueahOS9jee9ruaXtiDov5Tlm54gMCBcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gdGhpcy5fbWF4SXRlbVRvdGFsXG4gICAgfVxuICAgIC8qKiBcbiAgICAgKiDlvZPmlbDmja7lop7liqDjgIHlh4/lsJHml7Yg6I635Y+W6IqC54K55YGP56e76YePIFxuICAgICAqIOW9k+WJjeaVsOaNruaYr+i/meagt+eahCAgIOWinuWKoDHkuKogICAgIOWinuWKoDLkuKpcbiAgICAgKiAwLDEsMiwzICAgICAgICAgICAxLDIsMyAgICAgICAgIDIsM1xuICAgICAqIDQsNSw2ICAgICAgICAgICA0LDUsNiw3ICAgICA0LDUsNiw3XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAqL1xuICAgIHByaXZhdGUgZ2V0UmVhbGx5T2Zmc2V0KGRhdGFPZmZzZXQ6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyKSByZXR1cm4gMFxuICAgICAgICBpZiAoZGF0YU9mZnNldCA+IDApIHsgLy8g5Luj6KGo5aKe5YqgaXRlbSDooajmoLzmqKHlvI/kuIsg6YCa6L+H5YGP56e75aS06YOo5p2l6K6p5LiL5pa55aGr5ruhIOWhq+a7oeWQjuWBnOatouWBj+enu1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhT2Zmc2V0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuZm9vdGVyKSkgcmV0dXJuIGkgLy/ov5Tlm57nnJ/lrp7nmoTlgY/np7vph49cbiAgICAgICAgICAgICAgICAvLyDmraTml7blpoLmnpxoZWFkZXIg5bey57uP5piv5LiA57uEaXRlbeS4reacgOWQjuS4gOS4quaXtiDlkJHkuIvkvY3np7sg5bm2IOiuvue9ruWIsOS4gOe7hGl0ZW3nmoTotbflp4vkvY3nva4gICBcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5oZWFkZXIuZ2V0UG9zaXRpb24oKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7IC8vIOWeguebtOa7keWKqOaXtlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuaGVhZGVyKSkgeyAvLyDlvZPliJfooajkuK3nrKzkuIDkuKppdGVt5q2j5Zyo5LiA57uEaXRlbeS4reacq+WwvuS9jee9ruaXtlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBCb3R0b21ZKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcikgIC8v5q2j5bqP5o6S5YiX5pe2IFnovbTlkJHkuIvlgY/np7vvvIjlnoLnm7TmjpLliJfml7Yg5LiA57uEaXRlbSDlpLTlnKjlt6blsL7lnKjlj7PvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwVG9wWSh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpIC8v5YCS5bqP5o6S5YiX5pe2IFnovbTlkJHkuIrlgY/np7vvvIjlnoLnm7TmjpLliJfml7Yg5LiA57uEaXRlbSDlpLTlnKjlt6blsL7lnKjlj7PvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikueCAvLyBY6L205ZCR5aS06YOo5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIOesrOS4gOS4qml0ZW3msqHmnInlnKjkuIDnu4RpdGVt5Lit5pyr5bC+55qE5L2N572uIOWPquWwhuesrOS4gOS4qml0ZW3lkJHlj7PlgY/np7sgKOWPquWBj+enu1jovbQpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuZ2V0R3JvdXBSaWdodFgodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKSAvLyBY6L205ZCR5Y+z5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDmsLTlubPmu5Hliqjml7ZcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm91cEZvb3Rlcih0aGlzLmhlYWRlcikpIHsgIC8vIOW9k+WIl+ihqOS4reesrOS4gOS4qml0ZW3mraPlnKjkuIDnu4RpdGVt5Lit5pyr5bC+5L2N572u5pe2XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cFJpZ2h0WCh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpIC8v5q2j5bqP5o6S5YiX5pe2IFjovbTlkJHlj7PlgY/np7vvvIjmsLTlubPmjpLliJfml7Yg5LiA57uEaXRlbSDlpLTlnKjkuIrlsL7lnKjkuIvvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmdldEdyb3VwTGVmdFgodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKSAvL+WAkuW6j+aOkuWIl+aXtiBY6L205ZCR5bem5YGP56e777yI5rC05bmz5o6S5YiX5pe2IOS4gOe7hGl0ZW0g5aS05Zyo5LiK5bC+5Zyo5LiL77yJXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBIZWFkZXIodGhpcy5oZWFkZXIpLnkgLy8gWei9tOWQkeWktOmDqOWBj+enu1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAgLy8g56ys5LiA5LiqaXRlbeayoeacieWcqOS4gOe7hGl0ZW3kuK3mnKvlsL7nmoTkvY3nva4g5Y+q5bCG56ys5LiA5LiqaXRlbeWQkeS4i+WBj+enuyAo5Y+q5YGP56e7Wei9tClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5nZXRHcm91cEJvdHRvbVkodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKSAvLyBZ6L205ZCR5LiL5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2V0UG9zaXRpb24ocG9zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFPZmZzZXRcbiAgICAgICAgfVxuICAgICAgICAvLyDku6Pooajlh4/lsJHkuoZpdGVtIOiuoeeul+WBj+enu+mHjyBvZmZzZXQ8MCDjgJDms6jmhI/vvIHov5nph4znmoTpgLvovpHlkozkuIrpnaLmraPlpb3nm7jlj43jgJFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkYXRhT2Zmc2V0KTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MuVmVjMi5aRVJPXG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBIZWFkZXIodGhpcy5oZWFkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cEZvb3Rlcih0aGlzLmhlYWRlcikueFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwVG9wWSh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBCb3R0b21ZKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cExlZnRYKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmhlYWRlci55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBGb290ZXIodGhpcy5oZWFkZXIpLnlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cExlZnRYKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cFJpZ2h0WCh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBUb3BZKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmhlYWRlci54XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2V0UG9zaXRpb24ocG9zKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jYWxjdWxhdGVCb3VuZGFyeSgpXG4gICAgICAgIHJldHVybiBkYXRhT2Zmc2V0XG4gICAgfVxuICAgIC8qKiDliLfmlrDmiYDmnIlpdGVt5pWw5o2uIOagueaNruW9k+WJjWl0ZW3nmoQgaW5kZXgg5Yi35pawICovXG4gICAgcHJpdmF0ZSByZWZyZXNoSXRlbXModmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5oZWFkZXIpIHJldHVyblxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuaGVhZGVyWydpbmRleCddIC0gMSArIG9mZnNldCAvLyDojrflj5blpLTpg6hpdGVt5oyB5pyJ55qEaW5kZXgg5Yqg5LiKIOaVsOaNruWBj+enu+adpeiuoeeul+i1t+Wni2luZGV4IFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuX2NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrXG4gICAgICAgICAgICAvLyDov5nph4znmoTliKTmlq3nlKjkuo7ml6DpmZDlvqrnjq/mu5rliqjnmoTpgLvovpEg5aaC5p6c57Si5byV5aSn5LqO5pWw5o2u5oC75pWwIOe0ouW8leW9kumbtlxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPiB2YWx1ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gMFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydEluZGV4IDwgMCkgeyAvLyDntKLlvJXlsI/kuo4wIOe0ouW8leWumuS9jeWIsOaVsOaNruWwvumDqCDkv53mjIHpppblsL7nm7jov55cbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdmFsdWUgLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IHN0YXJ0SW5kZXggLy/orr7nva7lvZPliY3ntKLlvJVcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UmVmcmVzaEl0ZW0oY2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOS7juWktOmDqOWIsOWwvumDqOmHjee9ruaVsOaNriAqL1xuICAgIHByaXZhdGUgcmVzZXRUb0hlYWRlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLl9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlSZWZyZXNoSXRlbShjaGlsZClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyTG9vcCAmJiAhdGhpcy5mb290ZXJMb29wKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcj8uc2V0UG9zaXRpb24odGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc2Nyb2xsVG9IZWFkZXJPckZvb3Rlcikge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXI/LnNldFBvc2l0aW9uKHRoaXMuZ2V0R3JvdXBIZWFkZXIodGhpcy5oZWFkZXIpKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDku47lsL7pg6jliLDlpLTpg6jph43nva7mlbDmja4gKi9cbiAgICBwcml2YXRlIHJlc2V0VG9Gb290ZXIoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX21heEl0ZW1Ub3RhbFxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuX2NoaWxkcmVuW2ldXG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IC0taW5kZXhcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UmVmcmVzaEl0ZW0oY2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIoOmZpOWkmuS9meeahGl0ZW0gKi9cbiAgICBwcml2YXRlIHJlbW92ZUNoaWxkcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIOacieWkmuS9meeahGl0ZW0g6ZyA6KaB5Yig6ZmkXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIHZhbHVlXG4gICAgICAgIC8vIOWIoOmZpOaOieWkmuS9meeahGl0ZW1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5mb290ZXJcbiAgICAgICAgICAgIHRoaXMucmVtQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZChjaGlsZClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyKSByZXR1cm5cbiAgICAgICAgLy8g5bCG5aS06YOo6IqC54K555qE5L2N572u6YeN572u5Yiw5LiA57uEaXRlbeeahOesrOS4gOS4quS9jee9rlxuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcilcbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnggPSBwb3MueFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIueSA9IHBvcy55XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIhuW4p+WIm+W7uml0ZW0gKi9cbiAgICBwcml2YXRlIGFzeW5jIGFzeW5jQ3JlYXRlSXRlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2dlbmVyPy5yZXR1cm4oXCJcIikvL+WPlua2iOS4iuS4gOasoeeahOWIhuW4p+S7u+WKoe+8iOWmguaenOS7u+WKoeato+WcqOaJp+ihjO+8iVxuICAgICAgICAvLyDmnInlpJrkvZnnmoRpdGVtIOmcgOimgeWIoOmZpCDkuI3lpITnkIZcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID4gdmFsdWUpIHJldHVybiB0aGlzLnJlbW92ZUNoaWxkcyh2YWx1ZSlcbiAgICAgICAgLy8g5bey57uP5Zu65a6aaXRlbeaAu+aVsCDkuI3lpITnkIZcbiAgICAgICAgaWYgKHRoaXMuX21heFByZWZhYlRvdGFsID4gMCAmJiB0aGlzLl9tYXhQcmVmYWJUb3RhbCA9PSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCkgcmV0dXJuXG4gICAgICAgIC8vIOW8gOWni+WIhuW4p+WIm+W7uml0ZW1cbiAgICAgICAgbGV0IHRvdGFsID0gdmFsdWUgLSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAvL+iuoeeul+W9k+WJjeW6lOivpeWIm+W7uueahOaAu+aVsFxuICAgICAgICB0aGlzLl9nZW5lciA9IHRoaXMuZ2V0R2VuZXJhdG9yTGVuZ3RoKHRvdGFsLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYilcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnRcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICAvLyDojrflj5bmiJbmt7vliqAgVUlTdXBlckl0ZW1cbiAgICAgICAgICAgIGxldCBzcHVlckl0ZW0gPSBjaGlsZC5nZXRDb21wb25lbnQoVUlTcHVlckl0ZW0pIHx8IGNoaWxkLmFkZENvbXBvbmVudChVSVNwdWVySXRlbSlcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlsZClcbiAgICAgICAgICAgIHNwdWVySXRlbS5pbml0KHRoaXMpXG4gICAgICAgICAgICAvLyDlpoLmnpzliJvlu7rnmoTmmK/nrKzkuIDkuKppdGVtIOiuvue9ruS7lueahOi1t+Wni+S9jee9riDkuYvlkI7nmoRpdGVt5Lya6Ieq5Yqo55u45a+55LqO5LuW5p2l6K6+572u6Ieq5bexIOaIkeS7rOWPqumcgOimgeehruWumuesrOS4gOS4quS9jee9ruWwseihjOS6hlxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikgLy/ojrflj5bkuIDnu4RpdGVt5Lit5aS06YOo5L2N572uXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2V0UG9zaXRpb24ocG9zKVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIOWIqeeUqGNjLlNjcm9sbFZpZXfnmoTmlrnms5XmnaXorr7nva5jb250ZW5055qE6LW35aeL5L2N572uIOeUseS6jmNvbnRlbnTlnKjliJ3lp4vljJbnmoTml7blgJnlm7rlrprkuobplJrngrnpg73kuLowLjUg5omA5Lul6L+Z6YeM5b+F54S25piv5Z2Q5qCHMCBcbiAgICAgICAgICAgICAgICAgKiDlpoLmnpzkvaDmsqHmnInlhbbku5bpnIDmsYLnoa7lrprnlKgwLjXplJrngrnnmoTor50g6L+Z6YeM5Y+v5Lul6Ieq5bex6K6+572u5Li6Y2MuVmVjMi5aRVJPIOiKguecgeS4jeW/heimgeeahOiuoeeul++8iOWunumZheS4iuiuoeeul+mHj+WPr+W/veeVpeS4jeiuoe+8iVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jYWxjdWxhdGVCb3VuZGFyeSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2VsZkhvclcsIHZpZXdIb3JXXG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHNlbGZIb3JXID0gdGhpcy5nZXRSZWFsbHlTaXplKCkuaGVpZ2h0XG4gICAgICAgICAgICAgICAgdmlld0hvclcgPSB0aGlzLnZpZXdTaXplLmhlaWdodFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmSG9yVyA9IHRoaXMuZ2V0UmVhbGx5U2l6ZSgpLndpZHRoXG4gICAgICAgICAgICAgICAgdmlld0hvclcgPSB0aGlzLnZpZXdTaXplLndpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOagueaNruaOkuWIl+aWueWQkSDmnaXliKTmlq3lr7nmr5Tlrr3luqbov5jmmK/pq5jluqZcbiAgICAgICAgICAgICAqIOi/memHjOS9v+eUqOWPguaVsHRoaXMubXVsdGlwbGXmnaXliKTmlq3mmK/lkKbpnIDopoHnu6fnu63liJvlu7og6buY6K6k5Li6MuWAjSDmr5TlpoJ2aWV35Y+v6KeG5bC65a+45Li6ODAwIDLlgI3lsLHmmK8xNjAwXG4gICAgICAgICAgICAgKiDmoLnmja7kuYvliY3miYDliJvlu7rnmoTmiYDmnIlpdGVt55qE5bC65a+46K6h566X5piv5ZCm5ruh6Laz6L+Z5Liq5bC65a+4IOWmguaenOa7oei2s+WImeS4jeWGjee7p+e7reWIm+W7uiBcbiAgICAgICAgICAgICAqIOeUseS6juaYr+WIhuW4p+WKoOi9vSDmiYDku6XkuIvkuIDmrKHliJvlu7rkvJrnrYnov5nkuIDmrKHnmoTov5Tlm57nu5Pmnpwg6L+U5ZueZmFsc2Ug5YiZ57uI5q2i5YiG5bin5Lu75YqhXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChzZWxmSG9yVyA+PSB2aWV3SG9yVyAqIHRoaXMubXVsdGlwbGUgJiYgdGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuZm9vdGVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21heFByZWZhYlRvdGFsID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgLy/lm7rlrpppdGVt5pWw6YePIOS4jeWcqOe7p+e7reWIm+W7ulxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdGhpcy5leGVHZW5lcmF0b3IodGhpcy5fZ2VuZXIsIDEwKSAvL+aJp+ihjOWIhuW4p+S7u+WKoSAx5bin5Yib5bu6MTDkuKpcbiAgICB9XG4gICAgLyoqIOWQjOatpea3u+WKoOacrOWcsOWPmOmHjyBjaGlsZHJlbiDlubblj5HpgIEgVUlDaGFuZ2VCcm90aGVyRXZuZXQg6YCa55+lKi9cbiAgICBwcml2YXRlIGFkZENoaWxkKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChub2RlKVxuICAgICAgICB0aGlzLm5vZGUuZW1pdChVSUNoYW5nZUJyb3RoZXJFdm5ldClcbiAgICB9XG4gICAgLyoqIOWQjOatpeenu+mZpOacrOWcsOWPmOmHjyBjaGlsZHJlbiDlubblj5HpgIEgVUlDaGFuZ2VCcm90aGVyRXZuZXQg6YCa55+lICovXG4gICAgcHJpdmF0ZSByZW1DaGlsZChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSByZXR1cm5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB0aGlzLm5vZGUuZW1pdChVSUNoYW5nZUJyb3RoZXJFdm5ldClcbiAgICB9XG4gICAgLyoqIOWIhuW4p+WKoOi9vSAqL1xuICAgIHByaXZhdGUgKiBnZXRHZW5lcmF0b3JMZW5ndGgobGVuZ3RoOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgLi4ucGFyYW1zOiBhbnkpOiBHZW5lcmF0b3Ige1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soaSwgLi4ucGFyYW1zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHlpZWxkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDliIbluKfmiafooYwgKi9cbiAgICBwcml2YXRlIGV4ZUdlbmVyYXRvcihnZW5lcmF0b3I6IEdlbmVyYXRvciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdlbiA9IGdlbmVyYXRvclxuICAgICAgICAgICAgbGV0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlciA9IGdlbi5uZXh0KCk7IDsgaXRlciA9IGdlbi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gbnVsbCB8fCBpdGVyLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lID4gZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gZXhlY3V0ZSgpLCBjYy5kaXJlY3Rvci5nZXREZWx0YVRpbWUoKSAqIDEwMDApXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4ZWN1dGUoKVxuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------
