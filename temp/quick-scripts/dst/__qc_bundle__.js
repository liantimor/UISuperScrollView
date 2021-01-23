
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVySXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsaURBQXNFO0FBQ2hFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXlDLCtCQUFZO0lBQXJEOztJQTRWQSxDQUFDO0lBdFZHLHNCQUFZLDhCQUFLO1FBRGpCLGdEQUFnRDthQUNoRDtZQUNJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLGFBQWE7Z0JBQ2IsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUE7YUFDckY7aUJBQU07Z0JBQ0gsYUFBYTtnQkFDYixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTthQUMzRTtRQUNMLENBQUM7OztPQUFBO0lBRUQsc0JBQVksK0JBQU07UUFEbEIsZ0RBQWdEO2FBQ2hEO1lBQ0ksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDeEIsYUFBYTtnQkFDYixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQTthQUN0RjtpQkFBTTtnQkFDSCxhQUFhO2dCQUNiLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJ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QU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQTthQUMzRDtpQkFBTTtnQkFDSCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7Z0JBQ3ZELEdBQUcsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQTthQUNyQjtTQUNKO2FBQU07WUFDSCxPQUFPO1lBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDckMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFBO2dCQUN2RCxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7YUFDbEQ7aUJBQU07Z0JBQ0gsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFBO2dCQUNsQixHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7YUFDM0Q7U0FDSjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUEzVmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0E0Vi9CO0lBQUQsa0JBQUM7Q0E1VkQsQUE0VkMsQ0E1VndDLEVBQUUsQ0FBQyxTQUFTLEdBNFZwRDtrQkE1Vm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogc3RldmVKb2JzXG4gKiBARW1haWw6IGljaXBpcWttQGdtYWlsLmNvbVxuICogQERhdGU6IDIwMjAtMTEtMTkgMDE6MTU6MzhcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBzdGV2ZUpvYnNcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjAtMTItMDQgMTQ6NDE6MDFcbiAqIEBEZXNjcmlwdGlvbjogRGVzY3JpcHRpb25cbiAqL1xuaW1wb3J0IFVJU3VwZXJMYXlvdXQsIHsgVUlDaGFuZ2VCcm90aGVyRXZuZXQgfSBmcm9tICcuL1VJU3VwZXJMYXlvdXQnO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNwdWVySXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBsYXlvdXQ6IFVJU3VwZXJMYXlvdXRcbiAgICBwcml2YXRlIGJyb3RoZXI6IGNjLk5vZGVcbiAgICBwcml2YXRlIG9yaWdpblNpemU6IGNjLlNpemVcbiAgICBwcml2YXRlIG9yaWdpblNjYWxlOiBjYy5WZWMyXG4gICAgLyoqIOagueaNruWPr+inhuiMg+WbtCDlkowg5LiA57uEaXRlbeeahOS4quaVsCDljrvmjokg6L656LedL+mXtOmalCDmnaXorqHnrpfmnKxpdGVt55qE55yf5a6e5a695bqmICovXG4gICAgcHJpdmF0ZSBnZXQgd2lkdGgoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgLy8g5Z6C55u05ruR5Yqo5pe2IOWbuuWumuWuveW6plxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmxheW91dC5hY2NvbW1vZFdpZHRoIC0gdGhpcy5sYXlvdXQuc3BhY2luZ1dpZHRoKSAvIHRoaXMubGF5b3V0LmNvbHVtblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5rC05bmz5qih5byP5pe2IOWuveW6pumaj+aEj1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS53aWR0aCAqIHRoaXMubGF5b3V0LmdldFVzZWRTY2FsZVZhbHVlKHRoaXMubm9kZS5zY2FsZVgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOagueaNruWPr+inhuiMg+WbtCDlkowg5LiA57uEaXRlbeeahOS4quaVsCDljrvmjokg6L656LedL+mXtOmalCDmnaXorqHnrpfmnKxpdGVt55qE55yf5a6e6auY5bqmICovXG4gICAgcHJpdmF0ZSBnZXQgaGVpZ2h0KCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQuaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgLy8g5rC05bmz5qih5byP5pe2IOWbuuWumumrmOW6plxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLmxheW91dC5hY2NvbW1vZEhlaWdodCAtIHRoaXMubGF5b3V0LnNwYWNpbmdXaWR0aCkgLyB0aGlzLmxheW91dC5jb2x1bW5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWeguebtOa7keWKqOaXtiDpq5jluqbpmo/mhI9cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUuaGVpZ2h0ICogdGhpcy5sYXlvdXQuZ2V0VXNlZFNjYWxlVmFsdWUodGhpcy5ub2RlLnNjYWxlWSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8vIOWQkW5vZGXlhpnlhaXkuIDkuKrmlrnms5Ug55yB5Y675LqG5YWI6I635Y+W57uE5Lu254S25ZCO6LCD55So55qE5q2l6aqkXG4gICAgICAgIHRoaXMubm9kZVsnd2F0Y2hTZWxmJ10gPSB0aGlzLndhdGNoU2VsZi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubm9kZVsnc2F2ZU9yaWdpblNpemUnXSA9IHRoaXMuc2F2ZU9yaWdpblNpemUuYmluZCh0aGlzKVxuICAgICAgICBsZXQgd2lkZ2V0ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpXG4gICAgICAgIGlmICh3aWRnZXQpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJVSVN1cGVySXRlbTogaXRlbeS4jeWFgeiuuOaMgmNjLldpZGdldOe7hOS7tiDor7fmiYvliqjnp7vpmaRcIilcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDb21wb25lbnQod2lkZ2V0KVxuICAgICAgICB9IFxuICAgIH1cbiAgICBwdWJsaWMgc2F2ZU9yaWdpblNpemUoKSB7XG4gICAgICAgIHRoaXMub3JpZ2luU2l6ZSA9IGNjLnNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLm9yaWdpblNpemUpXG4gICAgICAgIHRoaXMub3JpZ2luU2NhbGUgPSBjYy52Mih0aGlzLm5vZGUuc2NhbGVYLCB0aGlzLm5vZGUuc2NhbGVZKVxuICAgIH1cbiAgICBwdWJsaWMgaW5pdChsYXlvdXQ6IFVJU3VwZXJMYXlvdXQpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQgPSBsYXlvdXRcbiAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5vbihVSUNoYW5nZUJyb3RoZXJFdm5ldCwgdGhpcy5vbkNoYW5nZUJyb3RoZXIsIHRoaXMpXG4gICAgICAgIHRoaXMuc2F2ZU9yaWdpblNpemUoKVxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLndhdGNoU2l6ZSwgdGhpcylcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNDQUxFX0NIQU5HRUQsIHRoaXMud2F0Y2hTaXplLCB0aGlzKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlQnJvdGhlcigpXG4gICAgfVxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQubm9kZS5vZmYoVUlDaGFuZ2VCcm90aGVyRXZuZXQsIHRoaXMub25DaGFuZ2VCcm90aGVyLCB0aGlzKVxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy53YXRjaFNpemUsIHRoaXMpXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuU0NBTEVfQ0hBTkdFRCwgdGhpcy53YXRjaFNpemUsIHRoaXMpXG4gICAgICAgIHRoaXMudW5saXN0ZW4oKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDlvZPlhYTlvJ/oioLngrnnmoTpobrluo/lj5jljJbml7Yg5p2l5pS55Y+Y6Ieq5bex55uR5ZCs55qE5a+56LGhXG4gICAgICogMCwxLDIsMyw0LDUsNiw3LDgsOSDkvovlpoLliJfooajkuK3lhbHmnIkxMOS4qml0ZW0gMOaYr2hlYWRlciA55pivZm9vdGVyIFxuICAgICAqIOato+W6j+aOkuWIl+aXtiDnm5HlkKznmoTpobrluo/mmK8gOS0+OC0+Ny0+Ni0+NS0+NC0+My0+Mi0+MS0+MCAw55qEIGJyb3RoZXI9bnVsbCBcbiAgICAgKiDlkJHkuIvloavlhYXnmoTpgLvovpHmmK8gMOi3keWIsDnlkI7pnaIgMD1mb290ZXIgMOeahGJyb3RoZXI9OSDnm7jlr7k555qE5L2N572u6K6+572u6Ieq5bexIOatpOaXtjE9aGVhZGVyIFxuICAgICAqIOWQkeS4iuWhq+WFheeahOmAu+i+keaYryA56LeR5YiwMOWJjemdoiDmraTml7Y5PWhlYWRlciA555qEYnJvdGhlcj1udWxsIOS4u+WKqOiuvue9ruiHquW3seebuOWvueS6jjDliY3pnaLkvY3nva7kuYvlkI4gMOeahGJyb3RoZXI9OSA4PWZvb3RlclxuICAgICAqL1xuICAgIHByaXZhdGUgb25DaGFuZ2VCcm90aGVyKCkge1xuICAgICAgICBsZXQgX2Jyb3RoZXIgPSB0aGlzLmxheW91dC5nZXRCcm90aGVyTm9kZSh0aGlzLm5vZGUpIC8v6I635Y+W5oiR5bqU6K+l55uR5ZCs55qE6YKj5Liq5YWE5byfXG4gICAgICAgIGlmIChfYnJvdGhlcj8udXVpZCA9PSB0aGlzLmJyb3RoZXI/LnV1aWQpIHJldHVybiAvL+WmguaenOayoeacieWPmOWMliDliJnot7Pov4dcbiAgICAgICAgdGhpcy51bmxpc3RlbigpIC8v5oiR55qE5YWE5byf5o2i5Lq65LqG77yf5YWI56e76Zmk5oiR5Y6f5p2l55qEXG4gICAgICAgIHRoaXMuYnJvdGhlciA9IF9icm90aGVyIC8v5LuW5piv5oiR55qE5YWE5byfXG4gICAgICAgIHRoaXMubGlzdGVuKCkgLy/nm5HlkKzku5ZcbiAgICAgICAgdGhpcy53YXRjaEJyb3RoZXIoKSAvL+ebuOWvueWFhOW8n+iKgueCueadpeiuvue9ruiHquW3seeahOS9jee9rlxuICAgIH1cbiAgICBwcml2YXRlIGxpc3RlbigpIHtcbiAgICAgICAgdGhpcy5icm90aGVyPy5vbignbGVhdmUnLCB0aGlzLnVubGlzdGVuLCB0aGlzKVxuICAgICAgICB0aGlzLmJyb3RoZXI/Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsIHRoaXMud2F0Y2hCcm90aGVyLCB0aGlzKVxuICAgIH1cbiAgICBwcml2YXRlIHVubGlzdGVuKCkge1xuICAgICAgICB0aGlzLmJyb3RoZXI/Lm9mZignbGVhdmUnLCB0aGlzLnVubGlzdGVuLCB0aGlzKVxuICAgICAgICB0aGlzLmJyb3RoZXI/Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VELCB0aGlzLndhdGNoQnJvdGhlciwgdGhpcylcbiAgICAgICAgdGhpcy5icm90aGVyID0gbnVsbFxuICAgIH1cbiAgICAvKiog5b2T5oiR55qE5bC65a+4L+e8qeaUvuaUueWPmOaXtiAqL1xuICAgIHByaXZhdGUgd2F0Y2hTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQuY29sdW1uID4gMSkgeyAvL+WmguaenOaYr0dyaWTmqKHlvI8g5LiN5YWB6K645L+u5pS55bC65a+4L+e8qeaUviDlvLrliLbmlLnlm57mnaVcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZSh0aGlzLm9yaWdpblNpemUpXG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0U2NhbGUodGhpcy5vcmlnaW5TY2FsZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC52ZXJ0aWNhbCAmJiAodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkud2lkdGggIT0gdGhpcy5vcmlnaW5TaXplLndpZHRoIHx8IHRoaXMubm9kZS5zY2FsZVggIT0gdGhpcy5vcmlnaW5TY2FsZS54KSkge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCLlnoLnm7TmjpLliJfkuI3lhYHorrjkv67mlLnjgJDlrr3luqbjgJFcIilcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUud2lkdGggPSB0aGlzLm9yaWdpblNpemUud2lkdGhcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuc2NhbGVYID0gdGhpcy5vcmlnaW5TY2FsZS54XG5cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5sYXlvdXQuaG9yaXpvbnRhbCAmJiAodGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuaGVpZ2h0ICE9IHRoaXMub3JpZ2luU2l6ZS5oZWlnaHQgfHwgdGhpcy5ub2RlLnNjYWxlWSAhPSB0aGlzLm9yaWdpblNjYWxlLnkpKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcIuawtOW5s+aOkuWIl+S4jeWFgeiuuOS/ruaUueOAkOmrmOW6puOAkVwiKVxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5oZWlnaHQgPSB0aGlzLm9yaWdpblNpemUuaGVpZ2h0XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlWSA9IHRoaXMub3JpZ2luU2NhbGUueVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aaC5p6c5oiR55uR5ZCs5LqG5YWE5byf6IqC54K55bCx6K6+572u6Ieq5bex55u45a+55YWE5byf6IqC54K555qE5L2N572u77yM5ZCm5YiZIOaIkeWwseWPkemAgeS4gOS4quS9jee9ruWPmOWMlueahOa2iOaBryDorqnnm5HlkKzmiJHnmoTlhYTlvJ/nm7jlr7nmiJHlgZrlh7rlj5jljJZcbiAgICAgICAgICAgIHRoaXMuYnJvdGhlciAmJiB0aGlzLndhdGNoQnJvdGhlcigpXG4gICAgICAgICAgICB0aGlzLmxheW91dC5yZXNldFNjcm9sbFZpZXcoKVxuICAgICAgICAgICAgdGhpcy5ub2RlLmVtaXQoY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRClcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlWydpbmRleCddID09IDAgJiYgdGhpcy5sYXlvdXQuaXNOb3JtYWxTaXplKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24odGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKSlcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDorr7nva7oh6rlt7Hnm7jlr7nkuo7kuIrkuIDkuKrlhYTlvJ/oioLngrnnmoTkvY3nva5cbiAgICBwdWJsaWMgd2F0Y2hCcm90aGVyKCkge1xuICAgICAgICBpZiAoIXRoaXMuYnJvdGhlcikgcmV0dXJuXG4gICAgICAgIGlmICh0aGlzLmxheW91dC5oZWFkZXJUb0Zvb3RlcikgeyAvL+ato+W6j+aOkuWIl+aXtlxuICAgICAgICAgICAgdGhpcy5oZWFkZXJUb0Zvb3RlclJlbGF0aXZlVG9Gb290ZXIodGhpcy5icm90aGVyKVxuICAgICAgICB9IGVsc2Ugey8v5YCS5bqP5o6S5YiX5pe2XG4gICAgICAgICAgICB0aGlzLmZvb3RlclRvSGVhZGVyUmVsYXRpdmVUb0Zvb3Rlcih0aGlzLmJyb3RoZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBpc091dE9mQm91bmRhcnkob2Zmc2V0OiBjYy5WZWMyKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC52ZXJ0aWNhbCAmJiBvZmZzZXQueSA9PSAwKSByZXR1cm4gdHJ1ZVxuICAgICAgICBpZiAodGhpcy5sYXlvdXQuaG9yaXpvbnRhbCAmJiBvZmZzZXQueCA9PSAwKSByZXR1cm4gdHJ1ZVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgLyoqIOS7juS4i+WIsOS4iuaOkuW6j+aWueWQkSDmo4Dmn6XlpLTpg6jmmK/lkKbpnIDopoHlkJHkuIrloavlhYUgKi9cbiAgICBwcml2YXRlIGZvb3RlclRvSGVhZGVyV2F0Y2hIZWFkZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOS4jeaYr+WktOmDqOS4gOe7hOeahOS7u+aEj+S4gOS4quaXtui3s+i/hyDmr5TlpoLkuIDnu4TmnIkz5LiqaXRlbSDlj6rorqHnrpcgMO+8jDHvvIwyIFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQuZ2V0U2libGluZ0luZGV4KHRoaXMubm9kZSkgPj0gdGhpcy5sYXlvdXQuY29sdW1uKSByZXR1cm5cbiAgICAgICAgLy8g5aaC5p6c5q2k5pe244CQ5bC+6YOo44CR5bey57uP5piv5pyA5ZCO5LiA5Liq5pWw5o2u5pe2XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGF5b3V0LmZvb3RlclsnaW5kZXgnXSArIDFcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMubGF5b3V0Lm1heEl0ZW1Ub3RhbCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5mb290ZXJMb29wIHx8IHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyT3JGb290ZXIpIHJldHVyblxuICAgICAgICAgICAgaW5kZXggPSAwXG4gICAgICAgIH1cbiAgICAgICAgLy8g6K6h566X6LaF5Ye655qE5YGP56e76YePICjku47kuIvliLDkuIrmjpLluo/mlrnlkJHml7Yg5aS06YOo5ZyoIOS4i+WwvumDqOWcqOS4iiDmo4DmtYvjgJDlpLTpg6jjgJHmmK/lkKbotoXlh7rkuIvovrnmoYYpXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmxheW91dC5pc091dE9mQm91bmRhcnlGb290ZXIodGhpcy5ub2RlKVxuICAgICAgICAvLyDmsqHmnInotoXlh7rml7bot7Pov4dcbiAgICAgICAgaWYgKCF0aGlzLmlzT3V0T2ZCb3VuZGFyeShvZmZzZXQpKSByZXR1cm5cbiAgICAgICAgLy8g5bCG6Ieq5bex55qE5pWw5o2u57Si5byVICsgMVxuICAgICAgICB0aGlzLm5vZGVbJ2luZGV4J10gPSBpbmRleFxuICAgICAgICAvLyDlj5HpgIHpgJrnn6XliLDlupTnlKjlsYIg5Yi35paw5pi+56S6XG4gICAgICAgIHRoaXMubGF5b3V0Lm5vdGlmeVJlZnJlc2hJdGVtKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5Y+R57uZ55uR5ZCs5oiR55qE6IqC54K5IOmAmuefpeaIkeemu+W8gOS6hiDnp7vpmaTlr7nmiJHnmoTmiYDmnInnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJsZWF2ZVwiKVxuICAgICAgICAvLyDlsIboh6rlt7HnmoToioLngrnntKLlvJXorr7nva7liLDlsL7pg6hcbiAgICAgICAgdGhpcy5sYXlvdXQuc2V0U2libGluZ0luZGV4KHRoaXMubm9kZSwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICB9XG4gICAgLyoqIOS7juS4i+WIsOS4iuaOkuW6j+aWueWQkSDmo4Dmn6XlsL7pg6jmmK/lkKbpnIDopoHlkJHkuIvloavlhYUgKi9cbiAgICBwcml2YXRlIGZvb3RlclRvSGVhZGVyV2F0Y2hGb290ZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOS4jeaYr+WwvumDqOS4gOe7hOeahOS7u+aEj+S4gOS4quaXtui3s+i/hyDmr5TlpoLkuIDnu4TmnIkz5LiqaXRlbSDlj6rorqHnrpfmnKvlsL7nmoQz5LiqaXRlbSBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmdldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUpIDwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gdGhpcy5sYXlvdXQuY29sdW1uKSByZXR1cm5cbiAgICAgICAgLy8g5aaC5p6c5q2k5pe244CQ5aS06YOo44CR5bey57uP5piv56ys5LiA5Liq5pWw5o2u5pe2XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGF5b3V0LmhlYWRlclsnaW5kZXgnXSAtIDFcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5L2/55So5peg6ZmQ5b6q546v5Yqf6IO9IOWQpuWImeS4jeW+gOS4i+i1sFxuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5oZWFkZXJMb29wIHx8IHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyT3JGb290ZXIpIHJldHVyblxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLm5vZGVbJ2luZGV4J11cbiAgICAgICAgfVxuICAgICAgICAvLyDorqHnrpfotoXlh7rnmoTlgY/np7vph48gKOS7juS4i+WIsOS4iuaOkuW6j+aWueWQkeaXtiDlpLTpg6jlnKgg5LiL5bC+6YOo5Zyo5LiKIOajgOa1i+OAkOWwvumDqOOAkeaYr+WQpui2heWHuuS4i+i+ueahhilcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMubGF5b3V0LmlzT3V0T2ZCb3VuZGFyeUhlYWRlcih0aGlzLm5vZGUpXG4gICAgICAgIC8vIOayoeaciei2heWHuuaXtui3s+i/h1xuICAgICAgICBpZiAoIXRoaXMuaXNPdXRPZkJvdW5kYXJ5KG9mZnNldCkpIHJldHVyblxuICAgICAgICAvLyDlsIboh6rlt7HnmoTmlbDmja7ntKLlvJUgLSAxXG4gICAgICAgIHRoaXMubm9kZVsnaW5kZXgnXSA9IGluZGV4XG4gICAgICAgIC8vIOWPkemAgemAmuefpeWIsOW6lOeUqOWxgiDliLfmlrDmmL7npLpcbiAgICAgICAgdGhpcy5sYXlvdXQubm90aWZ5UmVmcmVzaEl0ZW0odGhpcy5ub2RlKVxuICAgICAgICAvLyDlj5Hnu5nnm5HlkKzmiJHnmoTlhYTlvJ8g6YCa55+l5oiR56a75byA5LqGIOenu+mZpOWvueaIkeeahOaJgOacieebkeWQrFxuICAgICAgICB0aGlzLm5vZGUuZW1pdChcImxlYXZlXCIpXG4gICAgICAgIC8vIOWboOS4uuaIkeaYr+WwvumDqCDmiJHnm5HlkKzkuobliKvkurrvvIzmraTml7bnp7vpmaTmiJHnmoTmiYDmnInnm5HlkKwg5Zug5Li65oiR6ams5LiK5bCx6KaB5oiQ5Li66ICB5aSnIOiAgeWkp+S4jemcgOimgeebkeWQrOS7u+S9leS6ulxuICAgICAgICB0aGlzLnVubGlzdGVuKClcbiAgICAgICAgLy8g5Zug5Li65oiR5piv6ICB5aSnIOaIkeS4jeiDveebuOWvueWIq+S6uuadpeiuvue9ruiHquW3seeahOebuOWvueS9jee9ru+8jOaJgOS7pVxi5oiR6ZyA6KaB5Li75Yqo6K6+572u6Ieq5bexKOebuOWvueS4iuS4gOS4quiAgeWkp+eahOS9jee9ruadpeiuvue9ruiHquW3sSkg5Yir5Lq66YO95Lya55u45a+55oiR55qE5L2N572u5YGa5Ye65Y+Y5YyWXG4gICAgICAgIHRoaXMuZm9vdGVyVG9IZWFkZXJSZWxhdGl2ZVRvSGVhZGVyKHRoaXMubGF5b3V0LmhlYWRlcilcbiAgICAgICAgLy8g5bCG6Ieq5bex55qE6IqC54K557Si5byV6K6+572u5Yiw5aS06YOoXG4gICAgICAgIHRoaXMubGF5b3V0LnNldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUsIDApXG4gICAgfVxuICAgIC8qKiDku47kuIrliLDkuIvmjpLluo/mlrnlkJEg5qOA5p+l5aS06YOo5piv5ZCm6ZyA6KaB5ZCR5LiL5aGr5YWFICovXG4gICAgcHJpdmF0ZSBoZWFkZXJUb0Zvb3RlcldhdGNoSGVhZGVyKCkge1xuICAgICAgICAvLyDlpoLmnpzkuI3mmK/lpLTpg6jkuIDnu4TnmoTku7vmhI/kuIDkuKrml7bot7Pov4cg5q+U5aaC5LiA57uE5pyJM+S4qml0ZW0g5Y+q6K6h566XIDDvvIwx77yMMiBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmdldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUpID49IHRoaXMubGF5b3V0LmNvbHVtbikgcmV0dXJuXG4gICAgICAgIC8vIOWmguaenOatpOaXtuOAkOWwvumDqOOAkeW3sue7j+aYr+esrOS4gOS4quaVsOaNruaXtiAgXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMubGF5b3V0LmZvb3RlclsnaW5kZXgnXSArIDFcbiAgICAgICAgaWYgKGluZGV4ID4gdGhpcy5sYXlvdXQubWF4SXRlbVRvdGFsIC0gMSkge1xuICAgICAgICAgICAgLy8g5aaC5p6c5rKh5pyJ5L2/55So5peg6ZmQ5b6q546v5Yqf6IO9IOWQpuWImeS4jeW+gOS4i+i1sFxuICAgICAgICAgICAgaWYgKCF0aGlzLmxheW91dC5mb290ZXJMb29wIHx8IHRoaXMubGF5b3V0LnNjcm9sbFRvSGVhZGVyT3JGb290ZXIpIHJldHVyblxuICAgICAgICAgICAgaW5kZXggPSAwXG4gICAgICAgIH1cbiAgICAgICAgLy8g6K6h566X6LaF5Ye655qE5YGP56e76YePICjku47kuIvliLDkuIrmjpLluo/mlrnlkJHml7Yg5aS06YOo5Zyo5LiLIOWwvumDqOWcqOS4iiDmo4DmtYvjgJDlsL7pg6jjgJHmmK/lkKbotoXlh7rkuIvovrnmoYYpXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmxheW91dC5pc091dE9mQm91bmRhcnlIZWFkZXIodGhpcy5ub2RlKVxuICAgICAgICAvLyDmsqHmnInotoXlh7rml7bot7Pov4dcbiAgICAgICAgaWYgKCF0aGlzLmlzT3V0T2ZCb3VuZGFyeShvZmZzZXQpKSByZXR1cm5cbiAgICAgICAgLy8g5bCG6Ieq5bex55qE5pWw5o2u57Si5byVICsgMVxuICAgICAgICB0aGlzLm5vZGVbJ2luZGV4J10gPSBpbmRleFxuICAgICAgICAvLyDlj5HpgIHpgJrnn6XliLDlupTnlKjlsYIg5Yi35paw5pi+56S6XG4gICAgICAgIHRoaXMubGF5b3V0Lm5vdGlmeVJlZnJlc2hJdGVtKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5Y+R57uZ55uR5ZCs5oiR55qE5YWE5byfIOmAmuefpeaIkeemu+W8gOS6hiDnp7vpmaTlr7nmiJHnmoTmiYDmnInnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJsZWF2ZVwiKVxuICAgICAgICAvLyDlsIboh6rlt7HnmoToioLngrnntKLlvJXorr7nva7liLDlsL7pg6hcbiAgICAgICAgdGhpcy5sYXlvdXQuc2V0U2libGluZ0luZGV4KHRoaXMubm9kZSwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gMSlcbiAgICB9XG4gICAgLyoqIOS7juS4iuWIsOS4i+aOkuW6j+aWueWQkSDmo4Dmn6XlsL7pg6jmmK/lkKbpnIDopoHlkJHkuIrloavlhYUgKi9cbiAgICBwcml2YXRlIGhlYWRlclRvRm9vdGVyV2F0Y2hGb290ZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOS4jeaYr+WwvumDqOS4gOe7hOeahOS7u+aEj+S4gOS4quaXtui3s+i/hyDmr5TlpoLkuIDnu4TmnIkz5LiqaXRlbSDlj6rorqHnrpfmnKvlsL7nmoQz5LiqaXRlbSBcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmdldFNpYmxpbmdJbmRleCh0aGlzLm5vZGUpIDwgdGhpcy5sYXlvdXQuY2hpbGRyZW4ubGVuZ3RoIC0gdGhpcy5sYXlvdXQuY29sdW1uKSByZXR1cm5cbiAgICAgICAgLy8g5aaC5p6c5q2k5pe244CQ5aS06YOo44CR5bey57uP5piv56ys5LiA5Liq5pWw5o2u5pe2IFxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxheW91dC5oZWFkZXJbJ2luZGV4J10gLSAxXG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIC8vIOWmguaenOayoeacieS9v+eUqOaXoOmZkOW+queOr+WKn+iDvSDlkKbliJnkuI3lvoDkuIvotbBcbiAgICAgICAgICAgIGlmICghdGhpcy5sYXlvdXQuaGVhZGVyTG9vcCB8fCB0aGlzLmxheW91dC5zY3JvbGxUb0hlYWRlck9yRm9vdGVyKSByZXR1cm5cbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5ub2RlWydpbmRleCddXG4gICAgICAgIH1cbiAgICAgICAgLy8g6K6h566X6LaF5Ye655qE5YGP56e76YePICjku47kuIrliLDkuIvmjpLluo/mlrnlkJHml7Yg5aS06YOo5Zyo5LiKIOWwvumDqOWcqOS4iyDmo4DmtYvjgJDlsL7pg6jjgJHmmK/lkKbotoXlh7rkuIvovrnmoYYpXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLmxheW91dC5pc091dE9mQm91bmRhcnlGb290ZXIodGhpcy5ub2RlKVxuICAgICAgICAvLyDmsqHmnInotoXlh7rml7bot7Pov4dcbiAgICAgICAgaWYgKCF0aGlzLmlzT3V0T2ZCb3VuZGFyeShvZmZzZXQpKSByZXR1cm5cbiAgICAgICAgLy8g5bCG6Ieq5bex55qE5pWw5o2u57Si5byVIC0gMVxuICAgICAgICB0aGlzLm5vZGVbJ2luZGV4J10gPSBpbmRleFxuICAgICAgICAvLyDlj5HpgIHpgJrnn6XliLDlupTnlKjlsYIg5Yi35paw5pi+56S6XG4gICAgICAgIHRoaXMubGF5b3V0Lm5vdGlmeVJlZnJlc2hJdGVtKHRoaXMubm9kZSlcbiAgICAgICAgLy8g5Y+R57uZ55uR5ZCs5oiR55qE5YWE5byfIOmAmuefpeaIkeemu+W8gOS6hiDnp7vpmaTlr7nmiJHnmoTmiYDmnInnm5HlkKxcbiAgICAgICAgdGhpcy5ub2RlLmVtaXQoXCJsZWF2ZVwiKVxuICAgICAgICAvLyDlm6DkuLrmiJHmmK/lsL7pg6gg5oiR55uR5ZCs5LqG5Yir5Lq677yM5q2k5pe256e76Zmk5oiR55qE5omA5pyJ55uR5ZCsIOWboOS4uuaIkemprOS4iuWwseimgeaIkOS4uuiAgeWkpyDogIHlpKfkuI3pnIDopoHnm5HlkKzku7vkvZXkurpcbiAgICAgICAgdGhpcy51bmxpc3RlbigpXG4gICAgICAgIC8vIOWboOS4uuaIkeaYr+iAgeWkpyDmiJHkuI3og73nm7jlr7nliKvkurrmnaXorr7nva7oh6rlt7HnmoTnm7jlr7nkvY3nva7vvIzmiYDku6VcYuaIkemcgOimgeS4u+WKqOiuvue9ruiHquW3sSjnm7jlr7nkuIrkuIDkuKrogIHlpKfnmoTkvY3nva7mnaXorr7nva7oh6rlt7EpIOWIq+S6uumDveS8muebuOWvueaIkeeahOS9jee9ruWBmuWHuuWPmOWMllxuICAgICAgICB0aGlzLmhlYWRlclRvRm9vdGVyUmVsYXRpdmVUb0hlYWRlcih0aGlzLmxheW91dC5oZWFkZXIpXG4gICAgICAgIC8vIOWwhuiHquW3seeahOiKgueCuee0ouW8leiuvue9ruWIsOWwvumDqFxuICAgICAgICB0aGlzLmxheW91dC5zZXRTaWJsaW5nSW5kZXgodGhpcy5ub2RlLCAwKVxuICAgIH1cbiAgICAvKiogaXNTY3JvbGxUb0Zvb3Rlcj10cnVlIOWQkeS4i+a7keWKqCAqL1xuICAgIHB1YmxpYyB3YXRjaFNlbGYoaXNTY3JvbGxUb0Zvb3RlcjogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNTY3JvbGxUb0Zvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO44CQ5LiK5Yiw5LiL5o6S5bqP44CR5pa55ZCRIOajgOafpeOAkOWwvumDqOOAkeaYr+WQpumcgOimgeWQkeS4iuWhq+WFhVxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVG9Gb290ZXJXYXRjaEZvb3RlcigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOS7juOAkOS4i+WIsOS4iuaOkuW6j+OAkeaWueWQkSDmo4Dmn6XjgJDlpLTpg6jjgJHmmK/lkKbpnIDopoHlkJHkuIrloavlhYVcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hIZWFkZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgLy8g5LuO44CQ5LiK5Yiw5LiL5o6S5bqP44CR5pa55ZCRIOajgOafpeOAkOWktOmDqOOAkeaYr+WQpumcgOimgeWQkeS4i+Whq+WFhVxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyVG9Gb290ZXJXYXRjaEhlYWRlcigpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOS7juOAkOS4i+WIsOS4iuaOkuW6j+OAkeaWueWQkSDmo4Dmn6XjgJDlsL7pg6jjgJHmmK/lkKbpnIDopoHlkJHkuIvloavlhYVcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hGb290ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDku47kuIvliLDkuIog5LuO5Y+z5Yiw5bemIOaOkuW6j+aWueWQkSAg6K6+572u6Ieq5bex5Yiw55u45a+5bm9kZeeahOWktOmDqCAqL1xuICAgIHByaXZhdGUgZm9vdGVyVG9IZWFkZXJSZWxhdGl2ZVRvSGVhZGVyKHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICAvLyDku47kuIvliLDkuIpcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEhlYWRlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwRm9vdGVyKHRoaXMubm9kZSkueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBCb3R0b21ZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBMZWZ0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gcmVsYXRpdmUueVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZVsnaW5kZXgnXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cEhlYWRlcih0aGlzLm5vZGUpLnhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOS7juWPs+WIsOW3plxuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmlzR3JvdXBIZWFkZXIocmVsYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cFJpZ2h0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBGb290ZXIodGhpcy5ub2RlKS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gcmVsYXRpdmUueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBUb3BZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlWydpbmRleCddID09IDApIHtcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpXG4gICAgfVxuICAgIC8qKiDku47kuIvliLDkuIog5LuO5Y+z5Yiw5bemIOaOkuW6j+aWueWQkSDorr7nva7oh6rlt7HliLDnm7jlr7lub2Rl55qE5bC+6YOoICovXG4gICAgcHJpdmF0ZSBmb290ZXJUb0hlYWRlclJlbGF0aXZlVG9Gb290ZXIocmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIC8vIOS7juS4i+WIsOS4ilxuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwRm9vdGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cFRvcFkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cFJpZ2h0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gcmVsYXRpdmUueVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5LuO5Y+z5Yiw5bemXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEZvb3RlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwTGVmdFgodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHJlbGF0aXZlLnhcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwQm90dG9tWSh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihwb3MpXG4gICAgfVxuICAgIC8qKiDku47kuIrliLDkuIsg5LuO5bem5Yiw5Y+zIOaOkuW6j+aWueWQkSDorr7nva7oh6rlt7HliLDnm7jlr7lub2Rl55qE5aS06YOoICovXG4gICAgcHJpdmF0ZSBoZWFkZXJUb0Zvb3RlclJlbGF0aXZlVG9IZWFkZXIocmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMubm9kZS5nZXRQb3NpdGlvbigpXG4gICAgICAgIC8vIOS7juS4iuWIsOS4i1xuICAgICAgICBpZiAodGhpcy5sYXlvdXQudmVydGljYWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dC5pc0dyb3VwSGVhZGVyKHJlbGF0aXZlKSkge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBGb290ZXIodGhpcy5ub2RlKS54XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cFRvcFkodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cExlZnRYKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICAgICAgcG9zLnkgPSByZWxhdGl2ZS55XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlWydpbmRleCddID09IDApIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueFxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5LuO5bem5Yiw5Y+zXG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEhlYWRlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwTGVmdFgodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwRm9vdGVyKHRoaXMubm9kZSkueVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHJlbGF0aXZlLnhcbiAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMubGF5b3V0LmdldEdyb3VwVG9wWSh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZVsnaW5kZXgnXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmxheW91dC5nZXRHcm91cEhlYWRlcih0aGlzLm5vZGUpLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKVxuICAgIH1cbiAgICAvKiog5LuO5LiK5Yiw5LiLIOS7juW3puWIsOWPsyDmjpLluo/mlrnlkJEg6K6+572u6Ieq5bex5Yiw55u45a+5bm9kZeWwvumDqCAqL1xuICAgIHByaXZhdGUgaGVhZGVyVG9Gb290ZXJSZWxhdGl2ZVRvRm9vdGVyKHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwb3MgPSB0aGlzLm5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICAvLyDku47kuIrliLDkuItcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LnZlcnRpY2FsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQuaXNHcm91cEZvb3RlcihyZWxhdGl2ZSkpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMubGF5b3V0LmdldEdyb3VwSGVhZGVyKHRoaXMubm9kZSkueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBCb3R0b21ZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBSaWdodFgodGhpcy5ub2RlLCByZWxhdGl2ZSlcbiAgICAgICAgICAgICAgICBwb3MueSA9IHJlbGF0aXZlLnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOS7juW3puWIsOWPs1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0LmlzR3JvdXBGb290ZXIocmVsYXRpdmUpKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmxheW91dC5nZXRHcm91cFJpZ2h0WCh0aGlzLm5vZGUsIHJlbGF0aXZlKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBIZWFkZXIodGhpcy5ub2RlKS55XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gcmVsYXRpdmUueFxuICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5sYXlvdXQuZ2V0R3JvdXBCb3R0b21ZKHRoaXMubm9kZSwgcmVsYXRpdmUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKHBvcylcbiAgICB9XG59XG4iXX0=
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
 * @Last Modified time: 2020-12-04 14:35:43
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
        /** 当前头部的item是否真的是数据的开头 也就是0 */
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
        /** 当前尾部的item是否真的是数据的结尾 */
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
    UISpuerScrollView.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
    };
    UISpuerScrollView.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.SIZE_CHANGED, this.onChangeSize, this);
    };
    UISpuerScrollView.prototype.onChangeSize = function () {
        var widget = this.view.getComponent(cc.Widget);
        if (!widget)
            return;
        widget.updateAlignment();
    };
    /** 释放 功能用于上拉加载下拉刷新 解锁头尾固定的尺寸 */
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
            this.layout.scrollToHeaderOrFooter = false; //功能用于控制循环滚动时使用scrollTo方法滚动带来的效果问题 
        }
    };
    UISpuerScrollView.prototype._getContentTopBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.topBoundary; //返回头部item上边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this._getContentBottomBoundary() + viewSize.height;
        }
        if (this.isHeader && this.isLockHeader) {
            local += this.headerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 headerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentBottomBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height) {
            local = this.layout.bottomBoundary; //返回尾部item上边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        }
        if (this.isFooter && this.isLockFooter) {
            local -= this.footerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 footerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentLeftBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.leftBoundary; //返回头部item左边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        }
        if (this.isHeader && this.isLockHeader) {
            local -= this.headerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 headerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._getContentRightBoundary = function () {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        if (((_a = this.layout) === null || _a === void 0 ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width) {
            local = this.layout.rightBoundary; //返回头部item右边距
        }
        else {
            //功能用于无内容/少量内容时也可以上拉加载下拉刷新 如果所有item加起来的尺寸不足以撑满整个可视区域时 直接使用view可视尺寸
            local = this._getContentLeftBoundary() + viewSize.width;
        }
        if (this.isFooter && this.isLockFooter) {
            local += this.footerOutOffset; //功能用于上拉加载 下拉刷新 让整个content多一个 footerOutOffset 的尺寸
        }
        return local;
    };
    UISpuerScrollView.prototype._startAutoScroll = function (deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) { // 如果没有刷新/加载的监听者 则不计算 
            if (this.isMoveHeader && !this.isLockHeader) { // 锁住头部 意思就是已经触发了下拉事件 应用层应该做些刷新的动作
                this.isLockHeader = true;
                this.vertical && (deltaMove.y -= this.headerOutOffset);
                this.horizontal && (deltaMove.x += this.headerOutOffset);
                this.emitPullDownEvent({ action: true, progress: this.headerProgress, progressStage: 'lock' });
            }
            else if (this.isMoveFooter && !this.isLockFooter) { // 锁住尾部 意思就是已经触发了上拉事件 应用层应该做些加载的动作
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
            return; // 如果没有刷新/加载的监听者 则不计算 
        if (this['_autoScrollBraking'])
            return; // 自动回弹时不计算 （非手动）
        if (!this.autoScrolling)
            return; // 非自动滚动时不计算 
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0) { // 下滑
            var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset; //根据参数 headerOutOffset 计算当前下滑的办百分比
            var progressStage = void 0;
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1);
                progressStage = 'lock'; //锁定状态
            }
            else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
                progressStage = 'release'; //释放状态
            }
            this.emitPullDownEvent({ action: false, progress: this.headerProgress, progressStage: progressStage });
        }
        else if (offset < 0) { //上拉
            var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset; //根据参数 footerOutOffset 计算当前下滑的办百分比
            var progressStage = void 0;
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1);
                progressStage = 'lock'; //锁定状态
            }
            else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
                progressStage = 'release'; //释放状态
            }
            this.emitPullUpEvent({ action: false, progress: this.footerProgress, progressStage: progressStage });
        }
        else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVyU2Nyb2xsVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztHQU9HO0FBQ0gsaURBQTRDO0FBQ3RDLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBQ2xELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQztBQWdCckI7SUFBK0MscUNBQWE7SUFBNUQ7UUFBQSxxRUFnUUM7UUE1UE0scUJBQWUsR0FBVyxHQUFHLENBQUE7UUFDWSxvQkFBYyxHQUFXLENBQUMsQ0FBQTtRQUluRSxxQkFBZSxHQUFXLEdBQUcsQ0FBQTtRQUNZLG9CQUFjLEdBQVcsQ0FBQyxDQUFBO1FBSW5FLG9CQUFjLEdBQWdDLEVBQUUsQ0FBQTtRQUloRCxrQkFBWSxHQUFnQyxFQUFFLENBQUE7UUFJekMsa0JBQVksR0FBWSxLQUFLLENBQUE7UUFDN0Isa0JBQVksR0FBWSxLQUFLLENBQUE7UUFDN0Isa0JBQVksR0FBWSxLQUFLLENBQUE7UUFDN0Isa0JBQVksR0FBWSxLQUFLLENBQUE7UUFDN0Isb0JBQWMsR0FBVyxDQUFDLENBQUE7UUFDMUIsb0JBQWMsR0FBVyxDQUFDLENBQUE7UUFDMUIsYUFBTyxHQUFrQixJQUFJLENBQUE7O0lBb096QyxDQUFDO0lBN09HLHNCQUFXLG1DQUFJO2FBQWYsY0FBNkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQyxDQUFDOzs7T0FBQTtJQUNuRCxzQkFBVyw0Q0FBYTthQUN4QixjQUE2QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBLENBQUMsQ0FBQzthQUQ1RCxVQUF5QixLQUFjLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFBLENBQUMsQ0FBQzs7O09BQUE7SUFTM0Usc0JBQVks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SUFJbkU7UUFIRixRQUFRLENBQUM7WUFDTixXQUFXLEVBQUUsT0FBTztZQUNwQixPQUFPLEVBQUUsaUJBQWlCO1NBQzdCLENBQUM7OERBQThCO0lBQ1k7UUFBM0MsUUFBUSxDQUFDLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxDQUFDOzZEQUEyQjtJQUluRTtRQUhGLFFBQVEsQ0FBQztZQUNOLElBQUksRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLFlBQVk7WUFDL0IsV0FBVyxFQUFFLE1BQU07U0FDdEIsQ0FBQzs2REFBaUQ7SUFJaEQ7UUFIRixRQUFRLENBQUM7WUFDTixJQUFJLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZO1lBQy9CLFdBQVcsRUFBRSxNQUFNO1NBQ3RCLENBQUM7MkRBQStDO0lBbEJoQyxpQkFBaUI7UUFGckMsT0FBTztRQUNQLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztPQUNMLGlCQUFpQixDQWdRckM7SUFBRCx3QkFBQztDQWhRRCxBQWdRQyxDQWhROEMsRUFBRSxDQUFDLFVBQVUsR0FnUTNEO2tCQWhRb0IsaUJBQWlCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IHN0ZXZlSm9ic1xuICogQEVtYWlsOiBpY2lwaXFrbUBnbWFpbC5jb21cbiAqIEBEYXRlOiAyMDIwLTExLTE5IDAxOjE1OjA0XG4gKiBATGFzdCBNb2RpZmllZCBieTogc3RldmVKb2JzXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDIwLTEyLTA0IDE0OjM1OjQzXG4gKiBARGVzY3JpcHRpb246IERlc2NyaXB0aW9uXG4gKi9cbmltcG9ydCBVSVN1cGVyTGF5b3V0IGZyb20gJy4vVUlTdXBlckxheW91dCc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgRVBTSUxPTiA9IDFlLTQ7XG5leHBvcnQgaW50ZXJmYWNlIFVJU3VwZXJIZWFkZXJBbmRGb290ZXJFdmVudCB7XG4gICAgLyoqIOaJp+ihjOWKqOS9nCB0cnVlOua7oei2s+inpuWPkeadoeS7tiAqL1xuICAgIGFjdGlvbjogYm9vbGVhbixcbiAgICAvKiog5qC55o2u5Y+C5pWwaGVhZGVyT3V0T2Zmc2V05oiWZm9vdGVyT3V0T2Zmc2V0IOadpeiuoeeul+eahOi/m+W6puWAvCAqL1xuICAgIHByb2dyZXNzOiBudW1iZXIsXG4gICAgLyoqIOW9k+WJjei/m+W6pueKtuaAgSBcbiAgICAgKiB0b3VjaD3op6bmkbjkuK0g5q2j5Zyo6Kem5pG45ruR5Yqo5LitIFxuICAgICAqIHdhaXQ9562J5b6F5LitIOW3sue7j+a7oei2s+S6huinpuWPkeeahOabtOaWsOWKqOS9nOeahOadoeS7tiBcbiAgICAgKiBsb2NrPemUgeWumuS4rSDlvZPliY3mraPlnKjmiafooYzliLfmlrDmiJbliqDovb1cbiAgICAgKiByZWxlYXNlPemHiuaUvuS4rSBcbiAgICAgKi9cbiAgICBwcm9ncmVzc1N0YWdlOiBcInRvdWNoXCIgfCBcIndhaXRcIiB8IFwibG9ja1wiIHwgXCJyZWxlYXNlXCIsXG59XG5AY2NjbGFzc1xuQG1lbnUoXCJVSVNwdWVyU2Nyb2xsVmlld1wiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTcHVlclNjcm9sbFZpZXcgZXh0ZW5kcyBjYy5TY3JvbGxWaWV3IHtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLpobbpg6jlgY/np7vph49cIixcbiAgICAgICAgdG9vbHRpcDogXCLkuIvmi4nml7botoXov4fmraTlgY/np7vkvJrlj5HpgIHkuIvmi4nkuovku7ZcIlxuICAgIH0pIGhlYWRlck91dE9mZnNldDogbnVtYmVyID0gMjAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5ruh6Laz6Kem5Y+RSGVhZGVy55qE5YCN5pWwXCIgfSkgaGVhZGVyTXVsdGlwbGU6IG51bWJlciA9IDJcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBkaXNwbGF5TmFtZTogXCLlupXpg6jlgY/np7vph49cIixcbiAgICAgICAgdG9vbHRpcDogXCLkuIrmi4nml7botoXov4fmraTlgY/np7vkvJrlj5HpgIHkuIrmi4nkuovku7ZcIlxuICAgIH0pIGZvb3Rlck91dE9mZnNldDogbnVtYmVyID0gMjAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5ruh6Laz6Kem5Y+RRm9vdGVy55qE5YCN5pWwXCIgfSkgZm9vdGVyTXVsdGlwbGU6IG51bWJlciA9IDJcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLFxuICAgICAgICBkaXNwbGF5TmFtZTogXCLkuIvmi4nkuovku7ZcIlxuICAgIH0pIHB1bGxEb3duRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIsXG4gICAgICAgIGRpc3BsYXlOYW1lOiBcIuS4iuaLieS6i+S7tlwiXG4gICAgfSkgcHVsbFVwRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIHB1YmxpYyBnZXQgdmlldygpOiBjYy5Ob2RlIHsgcmV0dXJuIHRoaXNbJ192aWV3J10gfVxuICAgIHB1YmxpYyBzZXQgYXV0b1Njcm9sbGluZyh2YWx1ZTogYm9vbGVhbikgeyB0aGlzWydfYXV0b1Njcm9sbGluZyddID0gdmFsdWUgfVxuICAgIHB1YmxpYyBnZXQgYXV0b1Njcm9sbGluZygpIHsgcmV0dXJuIHRoaXNbJ19hdXRvU2Nyb2xsaW5nJ10gfVxuICAgIHByaXZhdGUgaXNNb3ZlSGVhZGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGlzTW92ZUZvb3RlcjogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBpc0xvY2tIZWFkZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHByaXZhdGUgaXNMb2NrRm9vdGVyOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIGhlYWRlclByb2dyZXNzOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBmb290ZXJQcm9ncmVzczogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgX2xheW91dDogVUlTdXBlckxheW91dCA9IG51bGxcbiAgICBwcml2YXRlIGdldCBsYXlvdXQoKTogVUlTdXBlckxheW91dCB7XG4gICAgICAgIGlmICh0aGlzLl9sYXlvdXQgPT0gbnVsbCkgdGhpcy5fbGF5b3V0ID0gdGhpcy5jb250ZW50LmdldENvbXBvbmVudChVSVN1cGVyTGF5b3V0KVxuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0XG4gICAgfVxuICAgIC8qKiDlvZPliY3lpLTpg6jnmoRpdGVt5piv5ZCm55yf55qE5piv5pWw5o2u55qE5byA5aS0IOS5n+WwseaYrzAgKi9cbiAgICBwcml2YXRlIGdldCBpc0hlYWRlcigpIHtcbiAgICAgICAgaWYgKHRoaXMubGF5b3V0LmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmhlYWRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmxheW91dD8uaGVhZGVyWydpbmRleCddID09IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0Py5mb290ZXJbJ2luZGV4J10gPT0gdGhpcy5sYXlvdXQubWF4SXRlbVRvdGFsIC0gMVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8qKiDlvZPliY3lsL7pg6jnmoRpdGVt5piv5ZCm55yf55qE5piv5pWw5o2u55qE57uT5bC+ICovXG4gICAgcHJpdmF0ZSBnZXQgaXNGb290ZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLmxheW91dC5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGF5b3V0Py5mb290ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5sYXlvdXQuZm9vdGVyWydpbmRleCddID09IHRoaXMubGF5b3V0Lm1heEl0ZW1Ub3RhbCAtIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0Py5oZWFkZXJbJ2luZGV4J10gPT0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIC8qKiDmmK/lkKbpnIDopoHorqHnrpfvvJ/lpoLmnpzkuIrmi4kv5LiL5ouJ5LqL5Lu25rKh5pyJ55uR5ZCs6ICF5YiZ5LiN6ZyA6KaB55u45YWz55qE6K6h566XICovXG4gICAgcHVibGljIGdldCBpc0NhbGN1bFB1bGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnB1bGxEb3duRXZlbnRzLmxlbmd0aCA+IDAgfHwgdGhpcy5wdWxsVXBFdmVudHMubGVuZ3RoID4gMFxuICAgIH1cbiAgICBwdWJsaWMgY2FsY3VsYXRlQm91bmRhcnkoKSB7XG4gICAgICAgIHRoaXNbJ19jYWxjdWxhdGVCb3VuZGFyeSddKClcbiAgICB9XG4gICAgcHVibGljIGdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KG9mZnNldD86IGNjLlZlYzIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ19nZXRIb3dNdWNoT3V0T2ZCb3VuZGFyeSddKG9mZnNldClcbiAgICB9XG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuU0laRV9DSEFOR0VELCB0aGlzLm9uQ2hhbmdlU2l6ZSwgdGhpcylcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5vbkNoYW5nZVNpemUsIHRoaXMpXG4gICAgfVxuICAgIHByaXZhdGUgb25DaGFuZ2VTaXplKCkge1xuICAgICAgICBsZXQgd2lkZ2V0ID0gdGhpcy52aWV3LmdldENvbXBvbmVudChjYy5XaWRnZXQpXG4gICAgICAgIGlmICghd2lkZ2V0KSByZXR1cm5cbiAgICAgICAgd2lkZ2V0LnVwZGF0ZUFsaWdubWVudCgpXG4gICAgfVxuICAgIC8qKiDph4rmlL4g5Yqf6IO955So5LqO5LiK5ouJ5Yqg6L295LiL5ouJ5Yi35pawIOino+mUgeWktOWwvuWbuuWumueahOWwuuWvuCAqL1xuICAgIHB1YmxpYyByZWxlYXNlKCkge1xuICAgICAgICB0aGlzLmlzTW92ZUhlYWRlciA9IGZhbHNlXG4gICAgICAgIHRoaXMuaXNNb3ZlRm9vdGVyID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMuaXNMb2NrSGVhZGVyIHx8IHRoaXMuaXNMb2NrRm9vdGVyKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgICAgICBsZXQgYXV0b1Njcm9sbCA9IHRydWVcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPT0gMCB8fCB0aGlzLmlzTG9ja0hlYWRlciAmJiBvZmZzZXQgPCAwIHx8IHRoaXMuaXNMb2NrRm9vdGVyICYmIG9mZnNldCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyUHJvZ3Jlc3MoKVxuICAgICAgICAgICAgICAgIGF1dG9TY3JvbGwgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pc0xvY2tIZWFkZXIgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5pc0xvY2tGb290ZXIgPSBmYWxzZVxuICAgICAgICAgICAgaWYgKGF1dG9TY3JvbGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzWydfb3V0T2ZCb3VuZGFyeUFtb3VudERpcnR5J10gPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpc1snX3Byb2Nlc3NJbmVydGlhU2Nyb2xsJ10oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGVhclByb2dyZXNzKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKumHjee9ruWIl+ihqCDlvZPliJfooajmu5HliqjliLDlupXpg6jml7Yg54S25ZCO5LiN566h6YCa6L+H5LuA5LmI5pa55byPKOWQjOatpXzlvILmraUp5YeP5bCR5LqG5pW05L2T55qEKOmrmOW6pnznvKnmlL585bC65a+4KSDml7bkv53or4HlhoXlrrnmmL7npLrmraPnoa4gKi9cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXNbJ19vdXRPZkJvdW5kYXJ5QW1vdW50RGlydHknXSA9IHRydWVcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICBpZiAoIW9mZnNldC5mdXp6eUVxdWFscyhjYy52MigwLCAwKSwgRVBTSUxPTikpIHtcbiAgICAgICAgICAgIHRoaXNbJ19wcm9jZXNzSW5lcnRpYVNjcm9sbCddKClcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIF9vblRvdWNoTW92ZWQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gsIGNhcHR1cmVMaXN0ZW5lcnMpIHtcbiAgICAgICAgc3VwZXJbJ19vblRvdWNoTW92ZWQnXShldmVudCwgY2FwdHVyZUxpc3RlbmVycylcbiAgICAgICAgaWYgKHRoaXMuaXNDYWxjdWxQdWxsKSB7XG4gICAgICAgICAgICBsZXQgb3V0T2ZCb3VuZGFyeSA9IHRoaXMuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoKVxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCAmJiB0aGlzLmlzSGVhZGVyICYmICF0aGlzLmlzTG9ja0hlYWRlciAmJiAhdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclByb2dyZXNzID0gb2Zmc2V0IDwgRVBTSUxPTiA/IDAgOiBvZmZzZXQgLyB0aGlzLmhlYWRlck91dE9mZnNldFxuICAgICAgICAgICAgICAgIHRoaXMuaXNNb3ZlSGVhZGVyID0gdGhpcy5oZWFkZXJQcm9ncmVzcyA+PSB0aGlzLmhlYWRlck11bHRpcGxlXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiB0aGlzLmhlYWRlclByb2dyZXNzLCBwcm9ncmVzc1N0YWdlOiB0aGlzLmlzTW92ZUhlYWRlciA/IFwid2FpdFwiIDogXCJ0b3VjaFwiIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogMCwgcHJvZ3Jlc3NTdGFnZTogXCJyZWxlYXNlXCIgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0IDwgMCAmJiB0aGlzLmlzRm9vdGVyICYmICF0aGlzLmlzTG9ja0Zvb3RlciAmJiAhdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclByb2dyZXNzID0gLW9mZnNldCA8IEVQU0lMT04gPyAwIDogLW9mZnNldCAvIHRoaXMuZm9vdGVyT3V0T2Zmc2V0XG4gICAgICAgICAgICAgICAgdGhpcy5pc01vdmVGb290ZXIgPSB0aGlzLmZvb3RlclByb2dyZXNzID49IHRoaXMuZm9vdGVyTXVsdGlwbGVcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiB0aGlzLmZvb3RlclByb2dyZXNzLCBwcm9ncmVzc1N0YWdlOiB0aGlzLmlzTW92ZUZvb3RlciA/IFwid2FpdFwiIDogXCJ0b3VjaFwiIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiAwLCBwcm9ncmVzc1N0YWdlOiBcInJlbGVhc2VcIiB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgX2Rpc3BhdGNoRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgc3VwZXJbJ19kaXNwYXRjaEV2ZW50J10oZXZlbnQpXG4gICAgICAgIGlmIChldmVudCA9PSAnc2Nyb2xsLWVuZGVkJykge1xuICAgICAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9IZWFkZXJPckZvb3RlciA9IGZhbHNlIC8v5Yqf6IO955So5LqO5o6n5Yi25b6q546v5rua5Yqo5pe25L2/55Soc2Nyb2xsVG/mlrnms5Xmu5rliqjluKbmnaXnmoTmlYjmnpzpl67popggXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudFRvcEJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgdmlld1NpemUgPSB0aGlzLnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICBsZXQgbG9jYWwgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uaGVhZGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS5oZWlnaHQgPiB2aWV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIGxvY2FsID0gdGhpcy5sYXlvdXQudG9wQm91bmRhcnkgLy/ov5Tlm57lpLTpg6hpdGVt5LiK6L656LedXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WKn+iDveeUqOS6juaXoOWGheWuuS/lsJHph4/lhoXlrrnml7bkuZ/lj6/ku6XkuIrmi4nliqDovb3kuIvmi4nliLfmlrAg5aaC5p6c5omA5pyJaXRlbeWKoOi1t+adpeeahOWwuuWvuOS4jei2s+S7peaSkea7oeaVtOS4quWPr+inhuWMuuWfn+aXtiDnm7TmjqXkvb/nlKh2aWV35Y+v6KeG5bC65a+4XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMuX2dldENvbnRlbnRCb3R0b21Cb3VuZGFyeSgpICsgdmlld1NpemUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNIZWFkZXIgJiYgdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgIGxvY2FsICs9IHRoaXMuaGVhZGVyT3V0T2Zmc2V0ICAvL+WKn+iDveeUqOS6juS4iuaLieWKoOi9vSDkuIvmi4nliLfmlrAg6K6p5pW05LiqY29udGVudOWkmuS4gOS4qiBoZWFkZXJPdXRPZmZzZXQg55qE5bC65a+4XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsXG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRCb3R0b21Cb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IGxvY2FsID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmZvb3RlciAmJiB0aGlzLmxheW91dC5nZXRSZWFsbHlTaXplKCkuaGVpZ2h0ID4gdmlld1NpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0LmJvdHRvbUJvdW5kYXJ5IC8v6L+U5Zue5bC+6YOoaXRlbeS4iui+uei3nVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/lip/og73nlKjkuo7ml6DlhoXlrrkv5bCR6YeP5YaF5a655pe25Lmf5Y+v5Lul5LiK5ouJ5Yqg6L295LiL5ouJ5Yi35pawIOWmguaenOaJgOaciWl0ZW3liqDotbfmnaXnmoTlsLrlr7jkuI3otrPku6XmkpHmu6HmlbTkuKrlj6/op4bljLrln5/ml7Yg55u05o6l5L2/55Sodmlld+WPr+inhuWwuuWvuFxuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5ub2RlLnkgLSB0aGlzLmxheW91dC5ub2RlLmdldEFuY2hvclBvaW50KCkueSAqIHZpZXdTaXplLmhlaWdodDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc0Zvb3RlciAmJiB0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgbG9jYWwgLT0gdGhpcy5mb290ZXJPdXRPZmZzZXQgIC8v5Yqf6IO955So5LqO5LiK5ouJ5Yqg6L29IOS4i+aLieWIt+aWsCDorqnmlbTkuKpjb250ZW505aSa5LiA5LiqIGZvb3Rlck91dE9mZnNldCDnmoTlsLrlr7hcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxcbiAgICB9XG4gICAgcHJpdmF0ZSBfZ2V0Q29udGVudExlZnRCb3VuZGFyeSgpIHtcbiAgICAgICAgbGV0IHZpZXdTaXplID0gdGhpcy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICAgICAgbGV0IGxvY2FsID0gMFxuICAgICAgICBpZiAodGhpcy5sYXlvdXQ/LmhlYWRlciAmJiB0aGlzLmxheW91dC5nZXRSZWFsbHlTaXplKCkud2lkdGggPiB2aWV3U2l6ZS53aWR0aCkge1xuICAgICAgICAgICAgbG9jYWwgPSB0aGlzLmxheW91dC5sZWZ0Qm91bmRhcnkgLy/ov5Tlm57lpLTpg6hpdGVt5bem6L656LedXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WKn+iDveeUqOS6juaXoOWGheWuuS/lsJHph4/lhoXlrrnml7bkuZ/lj6/ku6XkuIrmi4nliqDovb3kuIvmi4nliLfmlrAg5aaC5p6c5omA5pyJaXRlbeWKoOi1t+adpeeahOWwuuWvuOS4jei2s+S7peaSkea7oeaVtOS4quWPr+inhuWMuuWfn+aXtiDnm7TmjqXkvb/nlKh2aWV35Y+v6KeG5bC65a+4XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0Lm5vZGUueCAtIHRoaXMubGF5b3V0Lm5vZGUuZ2V0QW5jaG9yUG9pbnQoKS54ICogdmlld1NpemUud2lkdGg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNIZWFkZXIgJiYgdGhpcy5pc0xvY2tIZWFkZXIpIHtcbiAgICAgICAgICAgIGxvY2FsIC09IHRoaXMuaGVhZGVyT3V0T2Zmc2V0ICAvL+WKn+iDveeUqOS6juS4iuaLieWKoOi9vSDkuIvmi4nliLfmlrAg6K6p5pW05LiqY29udGVudOWkmuS4gOS4qiBoZWFkZXJPdXRPZmZzZXQg55qE5bC65a+4XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvY2FsXG4gICAgfVxuICAgIHByaXZhdGUgX2dldENvbnRlbnRSaWdodEJvdW5kYXJ5KCkge1xuICAgICAgICBsZXQgdmlld1NpemUgPSB0aGlzLnZpZXcuZ2V0Q29udGVudFNpemUoKVxuICAgICAgICBsZXQgbG9jYWwgPSAwXG4gICAgICAgIGlmICh0aGlzLmxheW91dD8uZm9vdGVyICYmIHRoaXMubGF5b3V0LmdldFJlYWxseVNpemUoKS53aWR0aCA+IHZpZXdTaXplLndpZHRoKSB7XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMubGF5b3V0LnJpZ2h0Qm91bmRhcnkgLy/ov5Tlm57lpLTpg6hpdGVt5Y+z6L656LedXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WKn+iDveeUqOS6juaXoOWGheWuuS/lsJHph4/lhoXlrrnml7bkuZ/lj6/ku6XkuIrmi4nliqDovb3kuIvmi4nliLfmlrAg5aaC5p6c5omA5pyJaXRlbeWKoOi1t+adpeeahOWwuuWvuOS4jei2s+S7peaSkea7oeaVtOS4quWPr+inhuWMuuWfn+aXtiDnm7TmjqXkvb/nlKh2aWV35Y+v6KeG5bC65a+4XG4gICAgICAgICAgICBsb2NhbCA9IHRoaXMuX2dldENvbnRlbnRMZWZ0Qm91bmRhcnkoKSArIHZpZXdTaXplLndpZHRoXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNGb290ZXIgJiYgdGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgIGxvY2FsICs9IHRoaXMuZm9vdGVyT3V0T2Zmc2V0IC8v5Yqf6IO955So5LqO5LiK5ouJ5Yqg6L29IOS4i+aLieWIt+aWsCDorqnmlbTkuKpjb250ZW505aSa5LiA5LiqIGZvb3Rlck91dE9mZnNldCDnmoTlsLrlr7hcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbG9jYWxcbiAgICB9XG4gICAgcHJpdmF0ZSBfc3RhcnRBdXRvU2Nyb2xsKGRlbHRhTW92ZSwgdGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ2FsY3VsUHVsbCkgeyAgLy8g5aaC5p6c5rKh5pyJ5Yi35pawL+WKoOi9veeahOebkeWQrOiAhSDliJnkuI3orqHnrpcgXG4gICAgICAgICAgICBpZiAodGhpcy5pc01vdmVIZWFkZXIgJiYgIXRoaXMuaXNMb2NrSGVhZGVyKSB7IC8vIOmUgeS9j+WktOmDqCDmhI/mgJ3lsLHmmK/lt7Lnu4/op6blj5HkuobkuIvmi4nkuovku7Yg5bqU55So5bGC5bqU6K+l5YGa5Lqb5Yi35paw55qE5Yqo5L2cXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvY2tIZWFkZXIgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbCAmJiAoZGVsdGFNb3ZlLnkgLT0gdGhpcy5oZWFkZXJPdXRPZmZzZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsICYmIChkZWx0YU1vdmUueCArPSB0aGlzLmhlYWRlck91dE9mZnNldClcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgYWN0aW9uOiB0cnVlLCBwcm9ncmVzczogdGhpcy5oZWFkZXJQcm9ncmVzcywgcHJvZ3Jlc3NTdGFnZTogJ2xvY2snIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNNb3ZlRm9vdGVyICYmICF0aGlzLmlzTG9ja0Zvb3RlcikgeyAvLyDplIHkvY/lsL7pg6gg5oSP5oCd5bCx5piv5bey57uP6Kem5Y+R5LqG5LiK5ouJ5LqL5Lu2IOW6lOeUqOWxguW6lOivpeWBmuS6m+WKoOi9veeahOWKqOS9nFxuICAgICAgICAgICAgICAgIHRoaXMuaXNMb2NrRm9vdGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljYWwgJiYgKGRlbHRhTW92ZS55ICs9IHRoaXMuZm9vdGVyT3V0T2Zmc2V0KVxuICAgICAgICAgICAgICAgIHRoaXMuaG9yaXpvbnRhbCAmJiAoZGVsdGFNb3ZlLnggLT0gdGhpcy5mb290ZXJPdXRPZmZzZXQpXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyBhY3Rpb246IHRydWUsIHByb2dyZXNzOiB0aGlzLmZvb3RlclByb2dyZXNzLCBwcm9ncmVzc1N0YWdlOiAnbG9jaycgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzdXBlclsnX3N0YXJ0QXV0b1Njcm9sbCddKGRlbHRhTW92ZSwgdGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgIH1cbiAgICBwcml2YXRlIF91cGRhdGVTY3JvbGxCYXIob3V0T2ZCb3VuZGFyeSkge1xuICAgICAgICBzdXBlclsnX3VwZGF0ZVNjcm9sbEJhciddKG91dE9mQm91bmRhcnkpXG4gICAgICAgIGlmICghdGhpcy5pc0NhbGN1bFB1bGwpIHJldHVybiAvLyDlpoLmnpzmsqHmnInliLfmlrAv5Yqg6L2955qE55uR5ZCs6ICFIOWImeS4jeiuoeeulyBcbiAgICAgICAgaWYgKHRoaXNbJ19hdXRvU2Nyb2xsQnJha2luZyddKSByZXR1cm4gLy8g6Ieq5Yqo5Zue5by55pe25LiN6K6h566XIO+8iOmdnuaJi+WKqO+8iVxuICAgICAgICBpZiAoIXRoaXMuYXV0b1Njcm9sbGluZykgcmV0dXJuIC8vIOmdnuiHquWKqOa7muWKqOaXtuS4jeiuoeeulyBcbiAgICAgICAgbGV0IG9mZnNldCA9IHRoaXMudmVydGljYWwgPyBvdXRPZkJvdW5kYXJ5LnkgOiAtb3V0T2ZCb3VuZGFyeS54XG4gICAgICAgIGlmIChvZmZzZXQgPiAwKSB7IC8vIOS4i+a7kVxuICAgICAgICAgICAgbGV0IHByb2dyZXNzID0gb2Zmc2V0IDwgRVBTSUxPTiA/IDAgOiBvZmZzZXQgLyB0aGlzLmhlYWRlck91dE9mZnNldCAvL+agueaNruWPguaVsCBoZWFkZXJPdXRPZmZzZXQg6K6h566X5b2T5YmN5LiL5ruR55qE5Yqe55m+5YiG5q+UXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NTdGFnZVxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMb2NrSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJQcm9ncmVzcyA9IHRoaXMuaGVhZGVyUHJvZ3Jlc3MgPT0gMSA/IHRoaXMuaGVhZGVyUHJvZ3Jlc3MgOiBNYXRoLm1heChwcm9ncmVzcywgMSlcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1N0YWdlID0gJ2xvY2snICAvL+mUgeWumueKtuaAgVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlclByb2dyZXNzID0gcHJvZ3Jlc3MgPCB0aGlzLmhlYWRlclByb2dyZXNzID8gcHJvZ3Jlc3MgOiB0aGlzLmhlYWRlclByb2dyZXNzXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NTdGFnZSA9ICdyZWxlYXNlJyAvL+mHiuaUvueKtuaAgVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0UHVsbERvd25FdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiB0aGlzLmhlYWRlclByb2dyZXNzLCBwcm9ncmVzc1N0YWdlOiBwcm9ncmVzc1N0YWdlIH0pXG5cbiAgICAgICAgfSBlbHNlIGlmIChvZmZzZXQgPCAwKSB7IC8v5LiK5ouJXG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3MgPSAtb2Zmc2V0IDwgRVBTSUxPTiA/IDAgOiAtb2Zmc2V0IC8gdGhpcy5mb290ZXJPdXRPZmZzZXQgIC8v5qC55o2u5Y+C5pWwIGZvb3Rlck91dE9mZnNldCDorqHnrpflvZPliY3kuIvmu5HnmoTlip7nmb7liIbmr5RcbiAgICAgICAgICAgIGxldCBwcm9ncmVzc1N0YWdlXG4gICAgICAgICAgICBpZiAodGhpcy5pc0xvY2tGb290ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclByb2dyZXNzID0gdGhpcy5mb290ZXJQcm9ncmVzcyA9PSAxID8gdGhpcy5mb290ZXJQcm9ncmVzcyA6IE1hdGgubWF4KHByb2dyZXNzLCAxKVxuICAgICAgICAgICAgICAgIHByb2dyZXNzU3RhZ2UgPSAnbG9jaycgIC8v6ZSB5a6a54q25oCBXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPSBwcm9ncmVzcyA8IHRoaXMuZm9vdGVyUHJvZ3Jlc3MgPyBwcm9ncmVzcyA6IHRoaXMuZm9vdGVyUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICBwcm9ncmVzc1N0YWdlID0gJ3JlbGVhc2UnICAvL+mHiuaUvueKtuaAgVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbWl0UHVsbFVwRXZlbnQoeyBhY3Rpb246IGZhbHNlLCBwcm9ncmVzczogdGhpcy5mb290ZXJQcm9ncmVzcywgcHJvZ3Jlc3NTdGFnZTogcHJvZ3Jlc3NTdGFnZSB9KVxuXG4gICAgICAgIH0gZWxzZSBpZiAob2Zmc2V0ID09IDApIHtcbiAgICAgICAgICAgIC8vIOato+W4uOa7keWKqOaXtiDlpoLmnpzmsqHmnInplIHlrprlpLTlkozlsL7ml7Yg6YeK5pS+5omA5pyJ6L+b5bqmXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMb2NrSGVhZGVyICYmICF0aGlzLmlzTG9ja0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJQcm9ncmVzcygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBjbGVhclByb2dyZXNzKCkge1xuICAgICAgICB0aGlzLmhlYWRlclByb2dyZXNzID0gMFxuICAgICAgICB0aGlzLmZvb3RlclByb2dyZXNzID0gMFxuICAgICAgICB0aGlzLmVtaXRQdWxsRG93bkV2ZW50KHsgYWN0aW9uOiBmYWxzZSwgcHJvZ3Jlc3M6IDAsIHByb2dyZXNzU3RhZ2U6ICdyZWxlYXNlJyB9KVxuICAgICAgICB0aGlzLmVtaXRQdWxsVXBFdmVudCh7IGFjdGlvbjogZmFsc2UsIHByb2dyZXNzOiAwLCBwcm9ncmVzc1N0YWdlOiAncmVsZWFzZScgfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBlbWl0UHVsbERvd25FdmVudChkYXRhOiBVSVN1cGVySGVhZGVyQW5kRm9vdGVyRXZlbnQpIHtcbiAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMucHVsbERvd25FdmVudHMsIHRoaXMsIGRhdGEpXG4gICAgfVxuICAgIHByaXZhdGUgZW1pdFB1bGxVcEV2ZW50KGRhdGE6IFVJU3VwZXJIZWFkZXJBbmRGb290ZXJFdmVudCkge1xuICAgICAgICBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyLmVtaXRFdmVudHModGhpcy5wdWxsVXBFdmVudHMsIHRoaXMsIGRhdGEpXG4gICAgfVxufVxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9leGFtcGxlcy92ZXJ0aWNhbC92ZXJ0aWNhbExvYWRBbmRSZWZyZXNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUFzRDtBQUV0RCwrQ0FBMEM7QUFDcEMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBb0QsMENBQVk7SUFBaEU7UUFBQSxxRUFpR0M7UUFoR3NCLFlBQU0sR0FBWSxJQUFJLENBQUE7UUFDdEIsWUFBTSxHQUFZLElBQUksQ0FBQTtRQUNoQixZQUFNLEdBQWtCLElBQUksQ0FBQTtRQUM3QyxrQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUN4QixXQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1YsV0FBSyxHQUFVLEVBQUUsQ0FBQTs7SUEyRjdCLENBQUM7SUExRkcsdUNBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7SUFDMUIsQ0FBQztJQUNPLCtDQUFjLEdBQXRCLFVBQXVCLElBQWEsRUFBRSxLQUFhO1FBQy9DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDNUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxzQkFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtJQUMvRSxDQUFDO0lBQ08seUNBQVEsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN4QyxDQUFDO0lBQ08sMkNBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBQ08sMkNBQVUsR0FBbEI7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBQ08seUNBQVEsR0FBaEI7UUFDSSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqQyxDQUFDO0lBRU8sOENBQWEsR0FBckIsVUFBc0IsVUFBZSxFQUFFLEtBQWtDO1FBQXpFLGlCQWlDQztRQWhDRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQTtRQUMxQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUN4RCxJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksT0FBTyxFQUFFO1lBQ2hDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFBO1NBQzFCO1FBQ0QsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLE1BQU0sRUFBRTtZQUMvQixLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtTQUMxQjtRQUNELElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxNQUFNLEVBQUU7WUFDL0IsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO1NBQzVEO1FBQ0QsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLFNBQVMsRUFBRTtZQUNsQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtTQUNwQjtRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQy9FLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFBO2FBQ2hDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUE7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtTQUN0QztRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLE9BQU8sR0FBTSxDQUFDLG9DQUFXLElBQUksQ0FBQyxZQUFZLE1BQUcsQ0FBQTthQUNyRDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDbEUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1NBQ3RCO0lBQ0wsQ0FBQztJQUVPLDhDQUFhLEdBQXJCLFVBQXNCLFVBQWUsRUFBRSxLQUFrQztRQUF6RSxpQkFnQ0M7UUEvQkcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUE7UUFDMUMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFeEQsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLE9BQU8sRUFBRTtZQUNoQyxLQUFLLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQTtTQUMxQjtRQUNELElBQUksS0FBSyxDQUFDLGFBQWEsSUFBSSxNQUFNLEVBQUU7WUFDL0IsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUE7U0FDMUI7UUFDRCxJQUFJLEtBQUssQ0FBQyxhQUFhLElBQUksTUFBTSxFQUFFO1lBQy9CLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFBO1NBQzFCO1FBQ0QsSUFBSSxLQUFLLENBQUMsYUFBYSxJQUFJLFNBQVMsRUFBRTtZQUNsQyxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQTtTQUNwQjtRQUNELElBQUksS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7WUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQy9FLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFBO2FBQ2hDO1NBQ0o7YUFBTTtZQUNILElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUE7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQTtTQUN0QztRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBUSxFQUFFLENBQUMsQ0FBQTthQUN2RDtZQUNELElBQUksQ0FBQyxZQUFZLENBQUMsY0FBTSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQXBDLENBQW9DLEVBQUUsR0FBRyxDQUFDLENBQUE7U0FDckU7SUFDTCxDQUFDO0lBL0ZrQjtRQUFsQixRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswREFBdUI7SUFDdEI7UUFBbEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQXVCO0lBQ2hCO1FBQXhCLFFBQVEsQ0FBQyx1QkFBYSxDQUFDOzBEQUE2QjtJQUhwQyxzQkFBc0I7UUFEMUMsT0FBTztPQUNhLHNCQUFzQixDQWlHMUM7SUFBRCw2QkFBQztDQWpHRCxBQWlHQyxDQWpHbUQsRUFBRSxDQUFDLFNBQVMsR0FpRy9EO2tCQWpHb0Isc0JBQXNCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVJU3VwZXJMYXlvdXQgZnJvbSAnLi4vLi4vY29yZXMvVUlTdXBlckxheW91dCc7XG5pbXBvcnQgeyBVSVN1cGVySGVhZGVyQW5kRm9vdGVyRXZlbnQgfSBmcm9tICcuLi8uLi9jb3Jlcy9VSVN1cGVyU2Nyb2xsVmlldyc7XG5pbXBvcnQgdmVydGljYWxJdGVtIGZyb20gJy4vdmVydGljYWxJdGVtJztcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdmVydGljYWxMb2FkQW5kUmVmcmVzaCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpIGhlYWRlcjogY2MuTm9kZSA9IG51bGxcbiAgICBAcHJvcGVydHkoY2MuTm9kZSkgZm9vdGVyOiBjYy5Ob2RlID0gbnVsbFxuICAgIEBwcm9wZXJ0eShVSVN1cGVyTGF5b3V0KSBsYXlvdXQ6IFVJU3VwZXJMYXlvdXQgPSBudWxsXG4gICAgcHJpdmF0ZSByZWZyZXNoVG90YWw6IG51bWJlciA9IDFcbiAgICBwcml2YXRlIHRvdGFsID0gMTBcbiAgICBwcml2YXRlIGRhdGFzOiBhbnlbXSA9IFtdXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmhlYWRlci5zY2FsZVkgPSAwXG4gICAgICAgIHRoaXMuZm9vdGVyLnNjYWxlWSA9IDBcbiAgICB9XG4gICAgcHJpdmF0ZSBvblJlZnJlc2hFdmVudChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpbmZvID0gdGhpcy5kYXRhc1tpbmRleF1cbiAgICAgICAgbm9kZS5nZXRDb21wb25lbnQodmVydGljYWxJdGVtKS5zaG93KGluZm8sIGluZGV4LCB0aGlzLm9uUmVtb3ZlLmJpbmQodGhpcykpXG4gICAgfVxuICAgIHByaXZhdGUgb25SZW1vdmUoaW5kZXg6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGFzLnNwbGljZShpbmRleCwgMSlcbiAgICAgICAgdGhpcy5sYXlvdXQudG90YWwodGhpcy5kYXRhcy5sZW5ndGgpXG4gICAgfVxuICAgIHByaXZhdGUgZ290b0hlYWRlcigpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9IZWFkZXIoMC42MTgpXG4gICAgfVxuICAgIHByaXZhdGUgZ290b0Zvb3RlcigpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQuc2Nyb2xsVG9Gb290ZXIoMC42MTgpXG4gICAgfVxuICAgIHByaXZhdGUgZ290b01haW4oKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkhlYWRlckV2ZW50KHNjcm9sbFZpZXc6IGFueSwgZXZlbnQ6IFVJU3VwZXJIZWFkZXJBbmRGb290ZXJFdmVudCkge1xuICAgICAgICB0aGlzLmhlYWRlci5vcGFjaXR5ID0gZXZlbnQucHJvZ3Jlc3MgKiAyNTVcbiAgICAgICAgbGV0IGxhYmVsID0gdGhpcy5oZWFkZXIuZ2V0Q29tcG9uZW50SW5DaGlsZHJlbihjYy5MYWJlbClcbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzU3RhZ2UgPT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkyDkuIvmi4nliLfmlrBcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwid2FpdFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkSDmnb7lvIDliLfmlrBcIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwibG9ja1wiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLmRhdGFzLmxlbmd0aCA9PSAwID8gXCLmsqHmnInmlbDmja5cIiA6IFwi5Yi35paw5LitLi4uXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3NTdGFnZSA9PSAncmVsZWFzZScpIHtcbiAgICAgICAgICAgIGxhYmVsLnN0cmluZyA9IFwiXCJcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQucHJvZ3Jlc3MgPiAyKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaGVhZGVyWydwbGF5aW5nJ10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhlYWRlci5ydW5BY3Rpb24oY2Muc2NhbGVUbygwLjYxOCwgMSwgMSkuZWFzaW5nKGNjLmVhc2VFbGFzdGljT3V0KDAuMjM2KSkpXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJbJ3BsYXlpbmcnXSA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyWydwbGF5aW5nJ10gPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2NhbGVZID0gZXZlbnQucHJvZ3Jlc3NcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnQuYWN0aW9uKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gdGhpcy5kYXRhc1tpXTtcbiAgICAgICAgICAgICAgICBpbmZvLm1lc3NhZ2UgPSBgJHtpfSAtICjliLfmlrDmrKHmlbAke3RoaXMucmVmcmVzaFRvdGFsfSlgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aCksIDAuNSlcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaFRvdGFsKytcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgb25Gb290ZXJFdmVudChzY3JvbGxWaWV3OiBhbnksIGV2ZW50OiBVSVN1cGVySGVhZGVyQW5kRm9vdGVyRXZlbnQpIHtcbiAgICAgICAgdGhpcy5mb290ZXIub3BhY2l0eSA9IGV2ZW50LnByb2dyZXNzICogMjU1XG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMuZm9vdGVyLmdldENvbXBvbmVudEluQ2hpbGRyZW4oY2MuTGFiZWwpXG5cbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzU3RhZ2UgPT0gXCJ0b3VjaFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkSDkuIrmi4nliqDovb1cIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwid2FpdFwiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuKGkyDmnb7lvIDliqDovb1cIlxuICAgICAgICB9XG4gICAgICAgIGlmIChldmVudC5wcm9ncmVzc1N0YWdlID09IFwibG9ja1wiKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIuWKoOi9veS4rS4uLlwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzU3RhZ2UgPT0gJ3JlbGVhc2UnKSB7XG4gICAgICAgICAgICBsYWJlbC5zdHJpbmcgPSBcIlwiXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LnByb2dyZXNzID4gMikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvb3RlclsncGxheWluZyddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb290ZXIucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC42MTgsIDEsIDEpLmVhc2luZyhjYy5lYXNlRWxhc3RpY091dCgwLjIzNikpKVxuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyWydwbGF5aW5nJ10gPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZvb3Rlci5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICB0aGlzLmZvb3RlclsncGxheWluZyddID0gZmFsc2VcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyLnNjYWxlWSA9IGV2ZW50LnByb2dyZXNzXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV2ZW50LmFjdGlvbikge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goeyBtZXNzYWdlOiBgJHt0aGlzLmRhdGFzLmxlbmd0aH1gIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB0aGlzLmxheW91dC50b3RhbCh0aGlzLmRhdGFzLmxlbmd0aCksIDAuNSlcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
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
 * @Last Modified time: 2021-01-23 18:05:39
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
            return this.scrollView.view.getContentSize();
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
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this);
        this.scrollView.view.on(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this);
        this._isinited = true;
    };
    UISuperLayout.prototype.onDestroy = function () {
        this.node.off(cc.Node.EventType.POSITION_CHANGED, this.onChangePosition, this);
        this.scrollView.view.off(cc.Node.EventType.SIZE_CHANGED, this.resetItemSize, this);
    };
    UISuperLayout.prototype.onChangePosition = function () {
        var flag = this.isScrollToFooter; // this.isScrollToFooter = true 向下滑动 false 向上滑动
        if (this.headerToFooter) {
            flag ? this.footerToHeaderWatchChilds(flag) : this.headerToFooterWatchChilds(flag); // 倒序刷新
        }
        else {
            flag ? this.headerToFooterWatchChilds(flag) : this.footerToHeaderWatchChilds(flag); // 正序刷新
        }
        // 当item 由多到少 并且 当content的位置被重置到初始状态时 重新设置头部的item归位
        if (this.vertical && 0 == this.node.y || this.horizontal && 0 == this.node.x) {
            this.header.setPosition(this.getGroupHeader(this.header));
        }
    };
    UISuperLayout.prototype.resetItemSize = function () {
        // 重新设置原始尺寸
        for (var i = 0; i < this.children.length; i++) {
            this.children[i]['saveOriginSize']();
        }
        // 改变头部位置
        var pos = this.getGroupHeader(this.header);
        if (this.vertical) {
            this.header.x = pos.x;
        }
        else {
            this.header.y = pos.y;
        }
        // 通知改变坐标事件
        for (var i = 0; i < this.children.length; i++) {
            this.children[i].emit(cc.Node.EventType.POSITION_CHANGED);
        }
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
                            // item在首次创建时立即刷新 避免显示item初始状态
                            _this.notifyRefreshItem(child);
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
                        resolve(null);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9jb3Jlcy9VSVN1cGVyTGF5b3V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCRztBQUNILHlEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDbEMsSUFBQSxLQUE4QixFQUFFLENBQUMsVUFBVSxFQUF6QyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQUEsRUFBRSxJQUFJLFVBQWtCLENBQUM7QUFDbEQsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ1IsUUFBQSxvQkFBb0IsR0FBRyxzQkFBc0IsQ0FBQTtBQUMxRCxJQUFZLFdBR1g7QUFIRCxXQUFZLFdBQVc7SUFDbkIseURBQWMsQ0FBQTtJQUNkLHFEQUFZLENBQUE7QUFDaEIsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBQ0QsSUFBWSxnQkFHWDtBQUhELFdBQVksZ0JBQWdCO0lBQ3hCLCtFQUFvQixDQUFBO0lBQ3BCLCtFQUFvQixDQUFBO0FBQ3hCLENBQUMsRUFIVyxnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQUczQjtBQUdEO0lBQTJDLGlDQUFZO0lBQXZEO1FBQUEscUVBdXJCQztRQXRyQmtFLGVBQVMsR0FBZ0IsV0FBVyxDQUFDLFFBQVEsQ0FBQTtRQUNwQyxlQUFTLEdBQXFCLGdCQUFnQixDQUFDLGdCQUFnQixDQUFBO1FBQ3JHLGdCQUFVLEdBQVcsQ0FBQyxDQUFBO1FBQ3RCLG1CQUFhLEdBQVcsQ0FBQyxDQUFBO1FBQ3pCLGlCQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQ3ZCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBO1FBQ3pCLGFBQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQTtRQUNDLFlBQU0sR0FBVyxDQUFDLENBQUE7UUFDaEIs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b2JzXG4gKiBARW1haWw6IGljaXBpcWttQGdtYWlsLmNvbVxuICogQERhdGU6IDIwMjAtMTEtMTkgMDE6MTU6NTJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBzdGV2ZUpvYnNcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMjEtMDEtMjMgMTg6MDU6MzlcbiAqIEBEZXNjcmlwdGlvbjog5ZCN6K+N6K+05piOIOS7gOS5iOaYr+S4gOe7hGl0ZW3vvJ9cbiAqIOWeguebtOaooeW8jyAgXG4gKiAxLDIsMyDkuIDnu4RpdGVt5YyF5ZCrIDEsMiwzICAx5piv5LiA57uEaXRlbeS4rWhlYWRlciDkuZ/mmK/mlbTkuKrliJfooajnmoRoZWFkZXIgM+aYr+S4gOe7hGl0ZW3kuK1mb290ZXIgOeaYr+aVtOS4quWIl+ihqOeahGZvb3RlclxuICogNCw1LDZcbiAqIDcsOCw5XG4gKiDosIPnlKggaXNHcm91cEhlYWRlcuS8oOWFpSAx6IqC54K5IOi/lOWbnnRydWUgIOiwg+eUqCBpc0dyb3VwRm9vdGVy5Lyg5YWlIDPoioLngrnov5Tlm550cnVlIFxuICog6LCD55SoIGdldEdyb3VwTGVmdFgg5Lyg5YWlIDLoioLngrkg6L+U5ZueMeiKgueCueS9jee9rlggZ2V0R3JvdXBSaWdodFgg6L+U5ZueM+iKgueCueS9jee9rlhcbiAqIOiwg+eUqCBnZXRHcm91cEJvdHRvbVkg5Lyg5YWlIDXoioLngrkg6L+U5ZueOOiKgueCueS9jee9rlkgZ2V0R3JvdXBUb3BZIOi/lOWbnjLoioLngrnkvY3nva5ZXG4gKiDmsLTlubPmqKHlvI9cbiAqIHwxfCw0LDcg5LiA57uEaXRlbeWMheWQqyAxLDIsMyAx5piv5LiA57uEaXRlbeS4rWhlYWRlciDkuZ/mmK/mlbTkuKrliJfooajnmoRoZWFkZXIgM+aYr+S4gOe7hGl0ZW3kuK1mb290ZXIgOeaYr+aVtOS4quWIl+ihqOeahGZvb3RlclxuICogfDJ8LDUsOFxuICogfDN8LDYsOVxuICovXG5pbXBvcnQgVUlTcHVlclNjcm9sbFZpZXcgZnJvbSAnLi9VSVN1cGVyU2Nyb2xsVmlldyc7XG5pbXBvcnQgVUlTcHVlckl0ZW0gZnJvbSAnLi9VSVN1cGVySXRlbSc7XG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgRVBTSUxPTiA9IDFlLTQ7XG5leHBvcnQgY29uc3QgVUlDaGFuZ2VCcm90aGVyRXZuZXQgPSBcIlVJQ2hhbmdlQnJvdGhlckV2bmV0XCJcbmV4cG9ydCBlbnVtIFVJU3VwZXJBeGlzIHtcbiAgICBIT1JJWk9OVEFMID0gMCxcbiAgICBWRVJUSUNBTCA9IDFcbn1cbmV4cG9ydCBlbnVtIFVJU3VwZXJEaXJlY3Rpb24ge1xuICAgIEhFQURFUl9UT19GT09URVIgPSAwLFxuICAgIEZPT1RFUl9UT19IRUFERVIgPSAxLFxufVxuQGNjY2xhc3NcbkBtZW51KFwiVUlTdXBlckxheW91dFwiKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlTdXBlckxheW91dCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShVSVN1cGVyQXhpcyksIGRpc3BsYXlOYW1lOiBcIuaOkuWIl+aWueWQkVwiIH0pIHN0YXJ0QXhpczogVUlTdXBlckF4aXMgPSBVSVN1cGVyQXhpcy5WRVJUSUNBTFxuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oVUlTdXBlckRpcmVjdGlvbiksIGRpc3BsYXlOYW1lOiBcIuaOkuWIl+WtkOiKgueCueeahOaWueWQkVwiIH0pIGRpcmVjdGlvbjogVUlTdXBlckRpcmVjdGlvbiA9IFVJU3VwZXJEaXJlY3Rpb24uSEVBREVSX1RPX0ZPT1RFUlxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuS4iui+uei3nVwiIH0pIHBhZGRpbmdUb3A6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLkuIvovrnot51cIiB9KSBwYWRkaW5nQm90dG9tOiBudW1iZXIgPSAwXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5bem6L656LedXCIgfSkgcGFkZGluZ0xlZnQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLlj7Povrnot51cIiB9KSBwYWRkaW5nUmlnaHQ6IG51bWJlciA9IDBcbiAgICBAcHJvcGVydHkoeyBkaXNwbGF5TmFtZTogXCLpl7TpmpRcIiB9KSBzcGFjaW5nOiBjYy5WZWMyID0gY2MuVmVjMi5aRVJPXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwi5q+P57uEaXRlbeS4quaVsFwiLCB0b29sdGlwOiBcIuWNleihjOeahOWIl+aVsCDmiJYg5Y2V5YiX55qE6KGM5pWwXCIgfSkgY29sdW1uOiBudW1iZXIgPSAyXG4gICAgQHByb3BlcnR5KHsgZGlzcGxheU5hbWU6IFwiaXRlbeWIm+W7uuWAjeeOh1wiLCB0b29sdGlwOiBcIuebuOWvueS6jnZpZXfnmoTlsLrlr7gg6buY6K6kMuWAjVwiIH0pIG11bHRpcGxlOiBudW1iZXIgPSAyXG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuUHJlZmFiLCBkaXNwbGF5TmFtZTogXCJpdGVtIFByZWZhYlwiIH0pIHByZWZhYjogY2MuUHJlZmFiID0gbnVsbFxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWktOmDqOa7keWKqOW+queOr1wiIH0pIGhlYWRlckxvb3A6IGJvb2xlYW4gPSBmYWxzZVxuICAgIEBwcm9wZXJ0eSh7IGRpc3BsYXlOYW1lOiBcIuWwvumDqOa7keWKqOW+queOr1wiIH0pIGZvb3Rlckxvb3A6IGJvb2xlYW4gPSBmYWxzZVxuICAgIEBwcm9wZXJ0eSBhZmZlY3RlZEJ5U2NhbGU6IGJvb2xlYW4gPSB0cnVlXG4gICAgQHByb3BlcnR5KGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIpIHJlZnJlc2hJdGVtRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXVxuICAgIHByaXZhdGUgX2dlbmVyOiBHZW5lcmF0b3JcbiAgICBwcml2YXRlIF9pc2luaXRlZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBfbWF4UHJlZmFiVG90YWw6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9jaGlsZHJlbjogY2MuTm9kZVtdID0gW10gLy/lkox0aGlzLm5vZGUuY2hpbGRyZW4g5L+d5oyB5ZCM5q2lXG4gICAgcHJpdmF0ZSBfdmlld1NpemU6IGNjLlNpemVcbiAgICBwcml2YXRlIF9zY3JvbGxWaWV3OiBVSVNwdWVyU2Nyb2xsVmlldyA9IG51bGxcbiAgICBwcml2YXRlIF9tYXhJdGVtVG90YWw6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIF9wcmV2TGF5b3V0UG9zaXRpb246IGNjLlZlYzIgPSBjYy5WZWMyLlpFUk9cbiAgICAvKiog5b2T5YmN55qE5rua5Yqo5piv5ZCm5piv55SxIHNjcm9sbFRvIOaWueazleaJp+ihjOeahCDlkox0b3VjaOa7keWKqOWBmuS4quWMuuWIhiovXG4gICAgcHVibGljIHNjcm9sbFRvSGVhZGVyT3JGb290ZXI6IGJvb2xlYW4gPSBmYWxzZVxuICAgIC8qKiDmoLnmja7kuIrkuIDmrKHlkozmnKzmrKHnmoTlnZDmoIflj5jljJborqHnrpfmu5HliqjmlrnlkJEgKi9cbiAgICBwcml2YXRlIGdldCBsYXlvdXREaXJlY3Rpb24oKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCBwb3MgPSBjYy5WZWMyLlpFUk9cbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgIHBvcy55ID0gdGhpcy5ub2RlLnkgLSB0aGlzLl9wcmV2TGF5b3V0UG9zaXRpb24ueVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zLnggPSB0aGlzLm5vZGUueCAtIHRoaXMuX3ByZXZMYXlvdXRQb3NpdGlvbi54XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcHJldkxheW91dFBvc2l0aW9uID0gdGhpcy5ub2RlLmdldFBvc2l0aW9uKClcbiAgICAgICAgcmV0dXJuIHBvc1xuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5ZCR5LiL5ruR5YqoICovXG4gICAgcHJpdmF0ZSBnZXQgaXNTY3JvbGxUb0Zvb3RlcigpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxheW91dERpcmVjdGlvbi55IDwgMFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGF5b3V0RGlyZWN0aW9uLnggPiAwXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOiHquW3see7tOaKpOeahOWtkOiKgueCueaVsOe7hCDlkox0aGlzLm5vZGUuY2hpbGRyZW4g5L+d5oyB5ZCM5q2lICovXG4gICAgcHVibGljIGdldCBjaGlsZHJlbigpIHsgcmV0dXJuIHRoaXMuX2NoaWxkcmVuIH1cbiAgICAvKiog5pyA5aSn5pWw5o2u5oC75pWwICovXG4gICAgcHVibGljIGdldCBtYXhJdGVtVG90YWwoKSB7IHJldHVybiB0aGlzLl9tYXhJdGVtVG90YWwgfVxuICAgIC8qKiDlvZPliY3ooqvliJvlu7rnmoRpdGVt5oC75pWwICovXG4gICAgcHVibGljIGdldCBtYXhQcmVmYWJUb3RhbCgpIHsgcmV0dXJuIHRoaXMuX21heFByZWZhYlRvdGFsIH1cbiAgICAvKiogc2Nyb2xsVmlldy52aWV35bC65a+4ICovXG4gICAgcHVibGljIGdldCB2aWV3U2l6ZSgpOiBjYy5TaXplIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2Nyb2xsVmlldy52aWV3LmdldENvbnRlbnRTaXplKClcbiAgICB9XG4gICAgLyoqIOaYr+WQpuaYr+WeguebtOaooeW8jyAqL1xuICAgIHB1YmxpYyBnZXQgdmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXJ0QXhpcyA9PSBVSVN1cGVyQXhpcy5WRVJUSUNBTFxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5rC05bmz5qih5byPICovXG4gICAgcHVibGljIGdldCBob3Jpem9udGFsKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGFydEF4aXMgPT0gVUlTdXBlckF4aXMuSE9SSVpPTlRBTFxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5q2j5bqP5o6S5YiXICovXG4gICAgcHVibGljIGdldCBoZWFkZXJUb0Zvb3RlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09IFVJU3VwZXJEaXJlY3Rpb24uSEVBREVSX1RPX0ZPT1RFUlxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5YCS5bqP5o6S5YiXICovXG4gICAgcHVibGljIGdldCBmb290ZXJUb0hlYWRlcigpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlyZWN0aW9uID09IFVJU3VwZXJEaXJlY3Rpb24uRk9PVEVSX1RPX0hFQURFUlxuICAgIH1cbiAgICAvKiog5rC05bmz6Ze06ZqU5oC75a695bqmIChHcmlkIOaooeW8j+i/lOWbnuWkmuS4qumXtOmalOaAu+WuveW6pikgKi9cbiAgICBwdWJsaWMgZ2V0IHNwYWNpbmdXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BhY2luZy54ICogKHRoaXMuY29sdW1uIC0gMSlcbiAgICB9XG4gICAgLyoqIOawtOW5s+mXtOmalOaAu+mrmOW6piAoR3JpZCDmqKHlvI/ov5Tlm57lpJrkuKrpl7TpmpTmgLvpq5jluqYpICovXG4gICAgcHVibGljIGdldCBzcGFjaW5nSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zcGFjaW5nLnkgKiAodGhpcy5jb2x1bW4gLSAxKVxuICAgIH1cbiAgICAvKiog5Y+v5a6557qzaXRlbeeahOecn+WunuWuveW6piAqL1xuICAgIHB1YmxpYyBnZXQgYWNjb21tb2RXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmlld1NpemUud2lkdGggLSB0aGlzLnBhZGRpbmdMZWZ0IC0gdGhpcy5wYWRkaW5nUmlnaHRcbiAgICB9XG4gICAgLyoqIOWPr+Wuuee6s2l0ZW3nmoTnnJ/lrp7pq5jluqYgKi9cbiAgICBwdWJsaWMgZ2V0IGFjY29tbW9kSGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy52aWV3U2l6ZS5oZWlnaHQgLSB0aGlzLnBhZGRpbmdUb3AgLSB0aGlzLnBhZGRpbmdCb3R0b21cbiAgICB9XG4gICAgcHVibGljIGdldCBzY3JvbGxWaWV3KCk6IFVJU3B1ZXJTY3JvbGxWaWV3IHtcbiAgICAgICAgaWYgKCF0aGlzLl9zY3JvbGxWaWV3KSB0aGlzLl9zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q29tcG9uZW50KFVJU3B1ZXJTY3JvbGxWaWV3KVxuICAgICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsVmlld1xuICAgIH1cbiAgICAvKiog5b2T5YmN5aS06YOo55qEaXRlbSAqL1xuICAgIHB1YmxpYyBnZXQgaGVhZGVyKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW5bMF1cbiAgICB9XG4gICAgLyoqIOW9k+WJjeWwvumDqOeahGl0ZW0gKi9cbiAgICBwdWJsaWMgZ2V0IGZvb3RlcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW3RoaXMuX2NoaWxkcmVuLmxlbmd0aCAtIDFdXG4gICAgfVxuICAgIC8qKiDnnJ/lrp7nmoTkuIrovrnot50gKi9cbiAgICBwdWJsaWMgZ2V0IHRvcEJvdW5kYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlZICsgdGhpcy5wYWRkaW5nVG9wXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb290ZXJCb3VuZGFyeVkgKyB0aGlzLnBhZGRpbmdUb3BcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog55yf5a6e55qE5LiL6L656LedICovXG4gICAgcHVibGljIGdldCBib3R0b21Cb3VuZGFyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvb3RlckJvdW5kYXJ5WSAtIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlZIC0gdGhpcy5wYWRkaW5nQm90dG9tXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOecn+WunueahOW3pui+uei3nSAqL1xuICAgIHB1YmxpYyBnZXQgbGVmdEJvdW5kYXJ5KCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlYIC0gdGhpcy5wYWRkaW5nTGVmdFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9vdGVyQm91bmRhcnlYIC0gdGhpcy5wYWRkaW5nTGVmdFxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDnnJ/lrp7nmoTlj7Povrnot50gKi9cbiAgICBwdWJsaWMgZ2V0IHJpZ2h0Qm91bmRhcnkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb290ZXJCb3VuZGFyeVggKyB0aGlzLnBhZGRpbmdSaWdodFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyQm91bmRhcnlYICsgdGhpcy5wYWRkaW5nUmlnaHRcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5aS06YOoaXRlbeeahOS4lueVjOWdkOagh+i+ueahhiDnsbvkvLwgeE1pbuOAgXhNYXggKi9cbiAgICBwdWJsaWMgZ2V0IGhlYWRlckJvdW5kYXJ5WCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUueCArIHRoaXMuaGVhZGVyLnggLSB0aGlzLmhlYWRlci5hbmNob3JYICogdGhpcy5nZXRTY2FsZVdpZHRoKHRoaXMuaGVhZGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS54ICsgdGhpcy5oZWFkZXIueCArICgxIC0gdGhpcy5oZWFkZXIuYW5jaG9yWCkgKiB0aGlzLmdldFNjYWxlV2lkdGgodGhpcy5oZWFkZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWktOmDqGl0ZW3nmoTkuJbnlYzlnZDmoIfovrnmoYYg57G75Ly8IHlNaW7jgIF5TWF4ICovXG4gICAgcHVibGljIGdldCBoZWFkZXJCb3VuZGFyeVkoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnkgKyB0aGlzLmhlYWRlci55ICsgKDEgLSB0aGlzLmhlYWRlci5hbmNob3JZKSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQodGhpcy5oZWFkZXIpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnkgKyB0aGlzLmhlYWRlci55IC0gdGhpcy5oZWFkZXIuYW5jaG9yWSAqIHRoaXMuZ2V0U2NhbGVIZWlnaHQodGhpcy5oZWFkZXIpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWwvumDqGl0ZW3nmoTkuJbnlYzlnZDmoIfovrnmoYYg57G75Ly8IHhNaW7jgIF4TWF4ICovXG4gICAgcHVibGljIGdldCBmb290ZXJCb3VuZGFyeVgoKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub2RlLnggKyB0aGlzLmZvb3Rlci54ICsgKDEgLSB0aGlzLmZvb3Rlci5hbmNob3JYKSAqIHRoaXMuZ2V0U2NhbGVXaWR0aCh0aGlzLmZvb3RlcilcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGUueCArIHRoaXMuZm9vdGVyLnggLSB0aGlzLmZvb3Rlci5hbmNob3JYICogdGhpcy5nZXRTY2FsZVdpZHRoKHRoaXMuZm9vdGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDlsL7pg6hpdGVt55qE5LiW55WM5Z2Q5qCH6L655qGGIOexu+S8vCB5TWlu44CBeU1heCAqL1xuICAgIHB1YmxpYyBnZXQgZm9vdGVyQm91bmRhcnlZKCkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS55ICsgdGhpcy5mb290ZXIueSAtIHRoaXMuZm9vdGVyLmFuY2hvclkgKiB0aGlzLmdldFNjYWxlSGVpZ2h0KHRoaXMuZm9vdGVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubm9kZS55ICsgdGhpcy5mb290ZXIueSArICgxIC0gdGhpcy5mb290ZXIuYW5jaG9yWSkgKiB0aGlzLmdldFNjYWxlSGVpZ2h0KHRoaXMuZm9vdGVyKVxuICAgICAgICB9XG4gICAgfVxuICAgIHB1YmxpYyBnZXQgaXNOb3JtYWxTaXplKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLmdldENvbnRlbnRTaXplKCkuZXF1YWxzKHRoaXMudmlld1NpemUpXG4gICAgfVxuXG4gICAgLyoqIOmHjeWGmSB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUg5Yqo5oCB6K6h566X5aS05bC+aXRlbSDov5Tlm57omZrmi5/nmoTlsLrlr7gg6Z2eY29udGVudOiuvue9rueahOWwuuWvuCAqL1xuICAgIHB1YmxpYyBnZXRDb250ZW50U2l6ZSgpIHtcbiAgICAgICAgbGV0IHNpemUgPSB0aGlzLmdldFJlYWxseVNpemUoKVxuICAgICAgICBsZXQgdmlld1NpemUgPSB0aGlzLnNjcm9sbFZpZXcudmlldy5nZXRDb250ZW50U2l6ZSgpXG4gICAgICAgIC8vIOWIl+ihqOS4uuepuuaXtiDnm7TmjqXov5Tlm54gc2Nyb2xsVmlldy52aWV3IOeahOWwuuWvuFxuICAgICAgICBpZiAoc2l6ZS5oZWlnaHQgPCB2aWV3U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgIHNpemUuaGVpZ2h0ID0gdmlld1NpemUuaGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNpemUud2lkdGggPCB2aWV3U2l6ZS53aWR0aCkge1xuICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHZpZXdTaXplLndpZHRoXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemVcbiAgICB9XG4gICAgLyoqIOi/lOWbniBoZWFkZXLliLAgZm9vdGVyIOS5i+mXtOeahOaVtOS9k+WwuuWvuCAqL1xuICAgIHB1YmxpYyBnZXRSZWFsbHlTaXplKCkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgPT0gMCkgcmV0dXJuIHRoaXMudmlld1NpemVcbiAgICAgICAgbGV0IHNpemUgPSBjYy5TaXplLlpFUk9cbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHsgLy8g5qC55o2uaGVhZGVy5ZKMZm9vdGVy6K6h566X5Ye655yf5a6e55qEY29udGVudOWwuuWvuCBcbiAgICAgICAgICAgIHNpemUud2lkdGggPSB0aGlzLmZvb3RlckJvdW5kYXJ5WCArIC10aGlzLmhlYWRlckJvdW5kYXJ5WCArIHRoaXMucGFkZGluZ0xlZnQgKyB0aGlzLnBhZGRpbmdSaWdodFxuICAgICAgICAgICAgc2l6ZS5oZWlnaHQgPSB0aGlzLmhlYWRlckJvdW5kYXJ5WSArIC10aGlzLmZvb3RlckJvdW5kYXJ5WSArIHRoaXMucGFkZGluZ1RvcCArIHRoaXMucGFkZGluZ0JvdHRvbVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2l6ZS53aWR0aCA9IHRoaXMuaGVhZGVyQm91bmRhcnlYICsgLXRoaXMuZm9vdGVyQm91bmRhcnlYICsgdGhpcy5wYWRkaW5nTGVmdCArIHRoaXMucGFkZGluZ1JpZ2h0XG4gICAgICAgICAgICBzaXplLmhlaWdodCA9IHRoaXMuZm9vdGVyQm91bmRhcnlZICsgLXRoaXMuaGVhZGVyQm91bmRhcnlZICsgdGhpcy5wYWRkaW5nVG9wICsgdGhpcy5wYWRkaW5nQm90dG9tXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNpemVcbiAgICB9XG4gICAgLyoqIOmHjee9rnNjcm9sbHZpZXcgKi9cbiAgICBwdWJsaWMgcmVzZXRTY3JvbGxWaWV3KCkge1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcucmVzZXQoKVxuICAgIH1cbiAgICAvKiog6I635Y+W57yp5pS+57O75pWwICovXG4gICAgcHVibGljIGdldFVzZWRTY2FsZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWZmZWN0ZWRCeVNjYWxlID8gTWF0aC5hYnModmFsdWUpIDogMVxuICAgIH1cbiAgICAvKiog6K6+572u5pyA5aSnaXRlbeaVsOmHjyAqL1xuICAgIHB1YmxpYyBhc3luYyB0b3RhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zdG9wQXV0b1Njcm9sbCgpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5yZWxlYXNlKCkgLy8g6YeK5pS+77yI5Yqf6IO955So5LqO5LiK5ouJ5Yqg6L29IOS4i+aLieWIt+aWsO+8iVxuICAgICAgICB0aGlzLmluaXRsaXplZCgpICAvLyDliJ3lp4vljJZcbiAgICAgICAgYXdhaXQgdGhpcy5hc3luY0NyZWF0ZUl0ZW0odmFsdWUpIC8vIOWIhuW4p+WIm+W7uml0ZW1cbiAgICAgICAgbGV0IGRhdGFPZmZzZXQgPSB0aGlzLmdldERhdGFPZmZzZXQodmFsdWUpIC8v6I635Y+W5pWw5o2u5YGP56e76YeP77yI5qC55o2udmFsdWXnm7jlr7nkuo4gX21heEl0ZW1Ub3RhbCDorqHnrpflop7liqDjgIHlh4/lsJHnmoTmlbDph4/vvIlcbiAgICAgICAgbGV0IHJlYWxseU9mZnNldCA9IHRoaXMuZ2V0UmVhbGx5T2Zmc2V0KGRhdGFPZmZzZXQpIC8vIOiOt+WPluecn+WunueahOaVsOaNruWBj+enu++8iEdyaWTmqKHlvI8g5Yqf6IO955So5LqO5Yik5pat5piv5ZCm6ZyA6KaB5YGP56e7aGVhZGVy5p2l5bCG5LiL5pa55aGr5ruh77yJXG4gICAgICAgIHRoaXMucmVmcmVzaEl0ZW1zKHZhbHVlLCByZWFsbHlPZmZzZXQpIC8v6YCa6L+H5bey5pyJ55qEaXRlbVsnaW5kZXgnXSDliqDkuIrmlbDmja7lgY/np7sg5p2l5piv5Yi35paw5pi+56S6XG4gICAgICAgIHRoaXMuX21heEl0ZW1Ub3RhbCA9IHZhbHVlIC8vIOiusOW9leW9k+WJjeaAu+aVsFxuICAgIH1cbiAgICAvKiog6I635Y+W5YWE5byf6IqC54K5ICovXG4gICAgcHVibGljIGdldEJyb3RoZXJOb2RlKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5nZXRTaWJsaW5nSW5kZXgobm9kZSkgLSAxIC8vIOatpCBnZXRTaWJsaW5nSW5kZXgg6Z2eIHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXhcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkcmVuW2luZGV4XVxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5LiA57uEaXRlbeS4reesrOS4gOS4qu+8iOWeguebtOa7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleihjOeahOaJgOacieWIlyDjgIHmsLTlubPmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXliJfkuK3miYDmnInooYzvvIkqL1xuICAgIHB1YmxpYyBpc0dyb3VwSGVhZGVyKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHhPcnkgPSB0aGlzLmdldEdyb3VwSGVhZGVyKG5vZGUpXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnZlcnRpY2FsID8gY2MudjIoeE9yeS54LCAwKSA6IGNjLnYyKDAsIHhPcnkueSlcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzLnZlcnRpY2FsID8gY2MudjIobm9kZS54LCAwKSA6IGNjLnYyKDAsIG5vZGUueSlcbiAgICAgICAgcmV0dXJuIHNlbGYuZnV6enlFcXVhbHMocG9zLCBFUFNJTE9OKVxuICAgIH1cbiAgICAvKiog5piv5ZCm5piv5LiA57uEaXRlbeS4reacgOWQjuS4gOS4qu+8iOWeguebtOa7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleihjOeahOaJgOacieWIlyDjgIHmsLTlubPmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXliJfkuK3miYDmnInooYzvvIkqL1xuICAgIHB1YmxpYyBpc0dyb3VwRm9vdGVyKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHhPcnkgPSB0aGlzLmdldEdyb3VwRm9vdGVyKG5vZGUpXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnZlcnRpY2FsID8gY2MudjIoeE9yeS54LCAwKSA6IGNjLnYyKDAsIHhPcnkueSlcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzLnZlcnRpY2FsID8gY2MudjIobm9kZS54LCAwKSA6IGNjLnYyKDAsIG5vZGUueSlcbiAgICAgICAgcmV0dXJuIHNlbGYuZnV6enlFcXVhbHMocG9zLCBFUFNJTE9OKVxuICAgIH1cbiAgICAvKiog6I635Y+W5LiA57uEaXRlbeS4rei1t+Wni+S9jee9riDvvIjlnoLnm7Tmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXooYznmoTmiYDmnInliJcg44CB5rC05bmz5ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V5YiX5Lit5omA5pyJ6KGM77yJKi9cbiAgICBwdWJsaWMgZ2V0R3JvdXBIZWFkZXIobm9kZTogY2MuTm9kZSk6IGNjLlZlYzIge1xuICAgICAgICBsZXQgcG9zID0gY2MuVmVjMi5aRVJPXG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuIHBvc1xuICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICBwb3MueCA9IG5vZGUuYW5jaG9yWCAqIHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSArICh0aGlzLnBhZGRpbmdMZWZ0ICogbm9kZS5zY2FsZVgpIC0gKHRoaXMubm9kZS5hbmNob3JYICogdGhpcy52aWV3U2l6ZS53aWR0aCAqIG5vZGUuc2NhbGVYKVxuICAgICAgICAgICAgICAgIHBvcy55ID0gKDEgLSBub2RlLmFuY2hvclkpICogLXRoaXMuZ2V0U2NhbGVIZWlnaHQobm9kZSkgLSB0aGlzLnBhZGRpbmdUb3AgKyAoMSAtIHRoaXMubm9kZS5hbmNob3JZKSAqIHRoaXMudmlld1NpemUuaGVpZ2h0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gbm9kZS5hbmNob3JYICogdGhpcy5nZXRTY2FsZVdpZHRoKG5vZGUpICsgdGhpcy5wYWRkaW5nTGVmdCAtIHRoaXMubm9kZS5hbmNob3JYICogdGhpcy52aWV3U2l6ZS53aWR0aFxuICAgICAgICAgICAgICAgIHBvcy55ID0gbm9kZS5hbmNob3JZICogdGhpcy5nZXRTY2FsZUhlaWdodChub2RlKSArIHRoaXMucGFkZGluZ0JvdHRvbSAtIHRoaXMubm9kZS5hbmNob3JZICogdGhpcy52aWV3U2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlclRvRm9vdGVyKSB7XG4gICAgICAgICAgICAgICAgcG9zLnggPSBub2RlLmFuY2hvclggKiB0aGlzLmdldFNjYWxlV2lkdGgobm9kZSkgKyB0aGlzLnBhZGRpbmdMZWZ0IC0gdGhpcy5ub2RlLmFuY2hvclggKiB0aGlzLnZpZXdTaXplLndpZHRoXG4gICAgICAgICAgICAgICAgcG9zLnkgPSAoMSAtIG5vZGUuYW5jaG9yWSkgKiAtbm9kZS5oZWlnaHQgLSB0aGlzLnBhZGRpbmdUb3AgKyAoMSAtIHRoaXMubm9kZS5hbmNob3JZKSAqIHRoaXMudmlld1NpemUuaGVpZ2h0XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5hY2NvbW1vZFdpZHRoICogdGhpcy5ub2RlLmFuY2hvclggLSB0aGlzLmdldFNjYWxlV2lkdGgobm9kZSkgKiAoMSAtIG5vZGUuYW5jaG9yWClcbiAgICAgICAgICAgICAgICBwb3MueSA9ICgxIC0gbm9kZS5hbmNob3JZKSAqIC1ub2RlLmhlaWdodCAtIHRoaXMucGFkZGluZ1RvcCArICgxIC0gdGhpcy5ub2RlLmFuY2hvclkpICogdGhpcy52aWV3U2l6ZS5oZWlnaHRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9zXG4gICAgfVxuICAgIC8qKiDojrflj5bkuIDnu4RpdGVt5Lit57uT5p2f5L2N572uIO+8iOWeguebtOa7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleihjOeahOaJgOacieWIlyDjgIHmsLTlubPmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXliJfkuK3miYDmnInooYzvvIkqL1xuICAgIHB1YmxpYyBnZXRHcm91cEZvb3Rlcihub2RlOiBjYy5Ob2RlKTogY2MuVmVjMiB7XG4gICAgICAgIGxldCBwb3MgPSBjYy5WZWMyLlpFUk9cbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm4gcG9zXG4gICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICBwb3MueCA9ICh0aGlzLmFjY29tbW9kV2lkdGggKyB0aGlzLnBhZGRpbmdMZWZ0KSAqIHRoaXMubm9kZS5hbmNob3JYIC0gKHRoaXMuZ2V0U2NhbGVXaWR0aChub2RlKSAqICgxIC0gbm9kZS5hbmNob3JYKSArIHRoaXMubm9kZS5hbmNob3JYICogdGhpcy5wYWRkaW5nUmlnaHQpXG4gICAgICAgICAgICBwb3MueSA9IG5vZGUueVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcG9zLnggPSBub2RlLnhcbiAgICAgICAgICAgIHBvcy55ID0gLSgodGhpcy5hY2NvbW1vZEhlaWdodCArIHRoaXMucGFkZGluZ1RvcCkgKiB0aGlzLm5vZGUuYW5jaG9yWSAtIHRoaXMuZ2V0U2NhbGVIZWlnaHQobm9kZSkgKiBub2RlLmFuY2hvclkpICsgKDEgLSBub2RlLmFuY2hvclkpICogdGhpcy5wYWRkaW5nQm90dG9tXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc1xuICAgIH1cbiAgICAvKiog6I635Y+W5LiA57uEaXRlbeS4rSBub2RlIOebuOWvuSByZWxhdGl2ZSDlj7PlgY/np7vph48g77yI5Z6C55u05ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V6KGM55qE5omA5pyJ5YiXIOOAgeawtOW5s+a7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleWIl+S4reaJgOacieihjO+8iSovXG4gICAgcHVibGljIGdldEdyb3VwUmlnaHRYKG5vZGU6IGNjLk5vZGUsIHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGlmICghbm9kZSB8fCAhcmVsYXRpdmUpIHJldHVybiB0aGlzLmdldEdyb3VwSGVhZGVyKG5vZGUpLnhcbiAgICAgICAgbGV0IHByZXZXaWR0aCA9IHJlbGF0aXZlLnggKyB0aGlzLmdldFNjYWxlV2lkdGgocmVsYXRpdmUpICogKDEgLSByZWxhdGl2ZS5hbmNob3JYKVxuICAgICAgICBsZXQgc2VsZldpZHRoID0gdGhpcy5nZXRTY2FsZVdpZHRoKG5vZGUpICogbm9kZS5hbmNob3JYXG4gICAgICAgIHJldHVybiBwcmV2V2lkdGggKyBzZWxmV2lkdGggKyB0aGlzLnNwYWNpbmcueFxuICAgIH1cbiAgICAvKiog6I635Y+W5LiA57uEaXRlbeS4rSBub2RlIOebuOWvuSByZWxhdGl2ZSDlt6blgY/np7vph48g77yI5Z6C55u05ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V6KGM55qE5omA5pyJ5YiXIOOAgeawtOW5s+a7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleWIl+S4reaJgOacieihjO+8iSovXG4gICAgcHVibGljIGdldEdyb3VwTGVmdFgobm9kZTogY2MuTm9kZSwgcmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlIHx8ICFyZWxhdGl2ZSkgcmV0dXJuIHRoaXMuZ2V0R3JvdXBGb290ZXIobm9kZSkueFxuICAgICAgICBsZXQgcHJldldpZHRoID0gcmVsYXRpdmUueCAtIHRoaXMuZ2V0U2NhbGVXaWR0aChyZWxhdGl2ZSkgKiByZWxhdGl2ZS5hbmNob3JYXG4gICAgICAgIGxldCBzZWxmV2lkdGggPSB0aGlzLmdldFNjYWxlV2lkdGgobm9kZSkgKiAoMSAtIG5vZGUuYW5jaG9yWClcbiAgICAgICAgcmV0dXJuIHByZXZXaWR0aCAtIHNlbGZXaWR0aCAtIHRoaXMuc3BhY2luZy54XG4gICAgfVxuICAgIC8qKiDojrflj5bkuIDnu4RpdGVt5LitIG5vZGUg55u45a+5IHJlbGF0aXZlIOS4i+WBj+enu+mHjyDvvIjlnoLnm7Tmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXooYznmoTmiYDmnInliJcg44CB5rC05bmz5ruR5Yqo5LitIOS4gOe7hGl0ZW0g5bCx5piv5Y2V5YiX5Lit5omA5pyJ6KGM77yJKi9cbiAgICBwdWJsaWMgZ2V0R3JvdXBCb3R0b21ZKG5vZGU6IGNjLk5vZGUsIHJlbGF0aXZlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBwcmV2SGVpZ2h0ID0gcmVsYXRpdmUueSAtIHRoaXMuZ2V0U2NhbGVIZWlnaHQocmVsYXRpdmUpICogcmVsYXRpdmUuYW5jaG9yWVxuICAgICAgICBsZXQgc2VsZkhlaWdodCA9IHRoaXMuZ2V0U2NhbGVIZWlnaHQobm9kZSkgKiAoMSAtIG5vZGUuYW5jaG9yWSlcbiAgICAgICAgcmV0dXJuIHByZXZIZWlnaHQgLSBzZWxmSGVpZ2h0IC0gdGhpcy5zcGFjaW5nLnlcbiAgICB9XG4gICAgLyoqIOiOt+WPluS4gOe7hGl0ZW3kuK0gbm9kZSDnm7jlr7kgcmVsYXRpdmUg5LiK5YGP56e76YePIO+8iOWeguebtOa7keWKqOS4rSDkuIDnu4RpdGVtIOWwseaYr+WNleihjOeahOaJgOacieWIlyDjgIHmsLTlubPmu5HliqjkuK0g5LiA57uEaXRlbSDlsLHmmK/ljZXliJfkuK3miYDmnInooYzvvIkqL1xuICAgIHB1YmxpYyBnZXRHcm91cFRvcFkobm9kZTogY2MuTm9kZSwgcmVsYXRpdmU6IGNjLk5vZGUpIHtcbiAgICAgICAgbGV0IHByZXZIZWlnaHQgPSByZWxhdGl2ZS55ICsgdGhpcy5nZXRTY2FsZUhlaWdodChyZWxhdGl2ZSkgKiAoMSAtIHJlbGF0aXZlLmFuY2hvclkpXG4gICAgICAgIGxldCBzZWxmSGVpZ2h0ID0gdGhpcy5nZXRTY2FsZUhlaWdodChub2RlKSAqIG5vZGUuYW5jaG9yWVxuICAgICAgICByZXR1cm4gcHJldkhlaWdodCArIHNlbGZIZWlnaHQgKyB0aGlzLnNwYWNpbmcueVxuICAgIH1cbiAgICAvKiog5Yik5pat57uZ5a6a55qEIG5vZGUg5LmY5LulIG11bHRpcGxlIOWAjeaVsOWQjiDmmK/lkKbotoXlh7rkuoblpLTpg6jovrnmoYYg77yIIG11bHRpcGxlID0gMSDlsLHmmK/kuIDkuKpub2Rl55qE5bC65a+4IOm7mOiupDEuNeWAje+8iSovXG4gICAgcHVibGljIGlzT3V0T2ZCb3VuZGFyeUhlYWRlcihub2RlOiBjYy5Ob2RlLCBtdWx0aXBsZTogbnVtYmVyID0gMS41KSB7XG4gICAgICAgIGxldCB3aWR0aCA9IG5vZGUud2lkdGggKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVYKSAqIG11bHRpcGxlXG4gICAgICAgIGxldCBoZWlnaHQgPSAtbm9kZS5oZWlnaHQgKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVZKSAqIG11bHRpcGxlXG4gICAgICAgIGxldCBvZmZzZXQgPSB0aGlzLnNjcm9sbFZpZXcuZ2V0SG93TXVjaE91dE9mQm91bmRhcnkoY2MudjIod2lkdGgsIGhlaWdodCkpXG4gICAgICAgIHJldHVybiBvZmZzZXRcbiAgICB9XG4gICAgLyoqIOWIpOaWree7meWumueahCBub2RlIOS5mOS7pSBtdWx0aXBsZSDlgI3mlbDlkI4g5piv5ZCm6LaF5Ye65LqG5bC+6YOo6YOo6L655qGGIO+8iCBtdWx0aXBsZSA9IDEg5bCx5piv5LiA5Liqbm9kZeeahOWwuuWvuCDpu5jorqQxLjXlgI3vvIkqL1xuICAgIHB1YmxpYyBpc091dE9mQm91bmRhcnlGb290ZXIobm9kZTogY2MuTm9kZSwgbXVsdGlwbGU6IG51bWJlciA9IDEuNSkge1xuICAgICAgICBsZXQgd2lkdGggPSAtbm9kZS53aWR0aCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVgpICogbXVsdGlwbGVcbiAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUuaGVpZ2h0ICogdGhpcy5nZXRVc2VkU2NhbGVWYWx1ZShub2RlLnNjYWxlWSkgKiBtdWx0aXBsZVxuICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5zY3JvbGxWaWV3LmdldEhvd011Y2hPdXRPZkJvdW5kYXJ5KGNjLnYyKHdpZHRoLCBoZWlnaHQpKVxuICAgICAgICByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICAgIC8qKiDmu5rliqjliLDlpLTpg6gg77yI5qC55o2uIOaOkuWIl+aWueWQkeOAgeaOkuWIl+WtkOiKgueCueeahOaWueWQke+8ieadpeiwg+eUqCBzY3JvbGxWaWV3LnNjcm9sbFRvLi4uIOaWueazlSAqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0hlYWRlcih0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IZWFkZXJPckZvb3RlciA9IHRpbWVJblNlY29uZCA+IDBcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgdGhpcy5yZXNldFRvSGVhZGVyKClcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvVG9wKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvTGVmdCh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSh0aW1lSW5TZWNvbmQsIGF0dGVudWF0ZWQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb1JpZ2h0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5rua5Yqo5Yiw5bC+6YOo77yI5qC55o2uIOaOkuWIl+aWueWQkeOAgeaOkuWIl+WtkOiKgueCueeahOaWueWQke+8ieadpeiwg+eUqCBzY3JvbGxWaWV3LnNjcm9sbFRvLi4uIOaWueazlSAqL1xuICAgIHB1YmxpYyBzY3JvbGxUb0Zvb3Rlcih0aW1lSW5TZWNvbmQ/OiBudW1iZXIsIGF0dGVudWF0ZWQ/OiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9IZWFkZXJPckZvb3RlciA9IHRpbWVJblNlY29uZCA+IDBcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnN0b3BBdXRvU2Nyb2xsKClcbiAgICAgICAgdGhpcy5yZXNldFRvRm9vdGVyKClcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvQm90dG9tKHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvUmlnaHQodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9Ub3AodGltZUluU2Vjb25kLCBhdHRlbnVhdGVkKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcuc2Nyb2xsVG9MZWZ0KHRpbWVJblNlY29uZCwgYXR0ZW51YXRlZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog6YCa55+l57uZ5a6a55qEbm9kZeWIt+aWsOaVsOaNriAqL1xuICAgIHB1YmxpYyBub3RpZnlSZWZyZXNoSXRlbSh0YXJnZXQ6IGNjLk5vZGUpIHtcbiAgICAgICAgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlci5lbWl0RXZlbnRzKHRoaXMucmVmcmVzaEl0ZW1FdmVudHMsIHRhcmdldCwgdGFyZ2V0WydpbmRleCddKVxuICAgIH1cbiAgICAvKiog6I635Y+W6IqC54K557Si5byVICovXG4gICAgcHVibGljIGdldFNpYmxpbmdJbmRleChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZHJlbi5pbmRleE9mKG5vZGUpXG4gICAgfVxuICAgIC8qKiDoh6rlrprkuYnntKLlvJXmlrnms5Ug6L+Z6YeM5LiN5piv6YCa6L+H5a6e5pe25L+u5pS56IqC54K557Si5byV55qE5pa55rOV77yM5Y+q5piv5qih5ouf57G75Ly855qE5Yqf6IO977yM5a6e6ZmF5LiK5bm25rKh5pyJ55yf5q2j5pS55Y+Y6IqC54K555qE5a6e6ZmF6aG65bqP77yI5LyY5YyW6aG577yJICovXG4gICAgcHVibGljIHNldFNpYmxpbmdJbmRleChub2RlOiBjYy5Ob2RlLCBpbmRleDogbnVtYmVyKSB7XG4gICAgICAgIC8vIOatpOaWueazleaXtuWPguiAg+W8leaTjuWOn3NldFNpYmxpbmdJbmRleOaWueazlSDljrvmjonkuobkv67mlLnoioLngrnntKLlvJXkvY3nva7nmoTosIPnlKjvvIhpdGVt5pys6Lqr55qEekluZGV45rKh5pyJ5Lu75L2V5Y+Y5YyW77yJXG4gICAgICAgIGluZGV4ID0gaW5kZXggIT09IC0xID8gaW5kZXggOiB0aGlzLl9jaGlsZHJlbi5sZW5ndGggLSAxXG4gICAgICAgIHZhciBvbGRJbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgICAgICAgaWYgKGluZGV4ICE9PSBvbGRJbmRleCkge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKG9sZEluZGV4LCAxKVxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdGhpcy5fY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAwLCBub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChub2RlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDov5nph4zljLrliKvkuo7ljp/mlrnms5Ug5Y6f5pa55rOV5piv5pS55Y+Ybm9kZeiKgueCuemhuuW6j+WQjuWPkemAgWNjLk5vZGUuRXZlbnRUeXBlLlNJQkxJTkdfT1JERVJfQ0hBTkdFROmAmuefpSDov5nph4zkuI3pnIDopoHkv67mlLnoioLngrnpobrluo9cbiAgICAgICAgICAgICAqIOi/memHjOWPkemAgeS4gOS4quiHquWumuS5ieS6i+S7tiDmqKHmi58gU0lCTElOR19PUkRFUl9DSEFOR0VEIOmAmuefpVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICB0aGlzLm5vZGUuZW1pdChVSUNoYW5nZUJyb3RoZXJFdm5ldClcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuaW5pdGxpemVkKClcbiAgICB9XG4gICAgLyoqIOWIneWni+WMliAqL1xuICAgIHByaXZhdGUgaW5pdGxpemVkKCkge1xuICAgICAgICBpZiAodGhpcy5faXNpbml0ZWQpIHJldHVyblxuICAgICAgICB0aGlzLm5vZGUuYW5jaG9yWCA9IDAuNSAvL+WbuuWummNvbnRlbnTnmoTplJrngrnkuLrkuK3lv4NcbiAgICAgICAgdGhpcy5ub2RlLmFuY2hvclkgPSAwLjVcbiAgICAgICAgdGhpcy5ub2RlLnNldENvbnRlbnRTaXplKHRoaXMudmlld1NpemUpIC8v5bCGY29udGVudOeahOWwuuWvuOiuvue9ruS4jnZpZXfnm7jlkIwg77yI5Yqf6IO955So5LqO56m65YiX6KGo5pe25Lmf5Y+v5Lul5LiL5ouJ5Yi35paw5ZKM5Yqg6L2977yJIFxuICAgICAgICAvLyDph43lhpkgdGhpcy5ub2RlLmdldENvbnRlbnRTaXplIOaWueazlSDlm6DkuLpjb250ZW5055qE55yf5a6e5bC65a+45LiN5Lya6ZqP552AaXRlbeeahOaVsOmHj+WPmOWMllxuICAgICAgICB0aGlzLm5vZGUuZ2V0Q29udGVudFNpemUgPSB0aGlzLmdldENvbnRlbnRTaXplLmJpbmQodGhpcylcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKGNjLlZlYzIuWkVSTylcbiAgICAgICAgdGhpcy5jb2x1bW4gPSB0aGlzLmNvbHVtbiA8IDEgPyAxIDogdGhpcy5jb2x1bW4gLy8g5LiA57uEaXRlbeeahOaVsOmHjyDmnIDlsJHmmK8xIOS5n+WwseaYr+aZrumAmueahOawtOW5sy/lnoLnm7Qg5aSn5LqOMeWwseaYr0dyaWTmqKHlvI9cbiAgICAgICAgLy8g55uR5ZCsY29udGVudOS9jee9ruWPmOWMliDliLfmlrBoZWFkZXIgZm9vdGVy6IqC54K555qE55u45a+55L2N572uXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5QT1NJVElPTl9DSEFOR0VELCB0aGlzLm9uQ2hhbmdlUG9zaXRpb24sIHRoaXMpXG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy52aWV3Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5yZXNldEl0ZW1TaXplLCB0aGlzKVxuICAgICAgICB0aGlzLl9pc2luaXRlZCA9IHRydWVcbiAgICB9XG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlBPU0lUSU9OX0NIQU5HRUQsIHRoaXMub25DaGFuZ2VQb3NpdGlvbiwgdGhpcylcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnZpZXcub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlNJWkVfQ0hBTkdFRCwgdGhpcy5yZXNldEl0ZW1TaXplLCB0aGlzKVxuICAgIH1cbiAgICBwcml2YXRlIG9uQ2hhbmdlUG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBmbGFnID0gdGhpcy5pc1Njcm9sbFRvRm9vdGVyIC8vIHRoaXMuaXNTY3JvbGxUb0Zvb3RlciA9IHRydWUg5ZCR5LiL5ruR5YqoIGZhbHNlIOWQkeS4iua7keWKqFxuICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgZmxhZyA/IHRoaXMuZm9vdGVyVG9IZWFkZXJXYXRjaENoaWxkcyhmbGFnKSA6IHRoaXMuaGVhZGVyVG9Gb290ZXJXYXRjaENoaWxkcyhmbGFnKSAvLyDlgJLluo/liLfmlrBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZsYWcgPyB0aGlzLmhlYWRlclRvRm9vdGVyV2F0Y2hDaGlsZHMoZmxhZykgOiB0aGlzLmZvb3RlclRvSGVhZGVyV2F0Y2hDaGlsZHMoZmxhZykgLy8g5q2j5bqP5Yi35pawXG4gICAgICAgIH1cbiAgICAgICAgLy8g5b2TaXRlbSDnlLHlpJrliLDlsJEg5bm25LiUIOW9k2NvbnRlbnTnmoTkvY3nva7ooqvph43nva7liLDliJ3lp4vnirbmgIHml7Yg6YeN5paw6K6+572u5aS06YOo55qEaXRlbeW9kuS9jVxuICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCAmJiAwID09IHRoaXMubm9kZS55IHx8IHRoaXMuaG9yaXpvbnRhbCAmJiAwID09IHRoaXMubm9kZS54KSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci5zZXRQb3NpdGlvbih0aGlzLmdldEdyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBwdWJsaWMgcmVzZXRJdGVtU2l6ZSgpIHtcbiAgICAgICAgLy8g6YeN5paw6K6+572u5Y6f5aeL5bC65a+4XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltpXVsnc2F2ZU9yaWdpblNpemUnXSgpXG4gICAgICAgIH1cbiAgICAgICAgLy8g5pS55Y+Y5aS06YOo5L2N572uXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldEdyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKVxuICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIueCA9IHBvcy54XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci55ID0gcG9zLnlcbiAgICAgICAgfVxuICAgICAgICAvLyDpgJrnn6XmlLnlj5jlnZDmoIfkuovku7ZcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2ldLmVtaXQoY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRClcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog6I635Y+W57yp5pS+5a695bqmICovXG4gICAgcHJpdmF0ZSBnZXRTY2FsZVdpZHRoKG5vZGU6IGNjLk5vZGUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbm9kZS53aWR0aCAqIHRoaXMuZ2V0VXNlZFNjYWxlVmFsdWUobm9kZS5zY2FsZVgpXG4gICAgfVxuICAgIC8qKiDojrflj5bnvKnmlL7pq5jluqYgKi9cbiAgICBwcml2YXRlIGdldFNjYWxlSGVpZ2h0KG5vZGU6IGNjLk5vZGUpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gbm9kZS5oZWlnaHQgKiB0aGlzLmdldFVzZWRTY2FsZVZhbHVlKG5vZGUuc2NhbGVZKVxuICAgIH1cbiAgICAvKiog566A5Y2V55qE5rWF5ou36LSdICovXG4gICAgcHJpdmF0ZSBnZXRUZW1wQ2hpbGRyZW4oKSB7XG4gICAgICAgIGxldCBsaXN0ID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLl9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGxpc3QucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGlzdFxuICAgIH1cbiAgICAvKiog5q2j5bqP5pu05pawaXRlbSAqL1xuICAgIHByaXZhdGUgaGVhZGVyVG9Gb290ZXJXYXRjaENoaWxkcyhmbGFnKSB7XG4gICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuZ2V0VGVtcENoaWxkcmVuKClcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkWyd3YXRjaFNlbGYnXShmbGFnKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDlgJLluo/mm7TmlrBpdGVtICovXG4gICAgcHJpdmF0ZSBmb290ZXJUb0hlYWRlcldhdGNoQ2hpbGRzKGZsYWcpIHtcbiAgICAgICAgbGV0IGNoaWxkcmVuID0gdGhpcy5nZXRUZW1wQ2hpbGRyZW4oKVxuICAgICAgICBmb3IgKGxldCBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBjaGlsZFsnd2F0Y2hTZWxmJ10oZmxhZylcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKiog5b2T5pWw5o2u5aKe5Yqg44CB5YeP5bCR5pe2IOiOt+WPluaVsOaNruWBj+enuyAqL1xuICAgIHByaXZhdGUgZ2V0RGF0YU9mZnNldCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIOi/lOWbnuWIoOmZpOaVsOaNruWBj+enuyDvvIjmr5TlpoLlvZPliY3mnIDlpKfmlbDmja7lgLw9MTDvvIzmlrDmlbDmja49OSDov5Tlm54tMe+8iVxuICAgICAgICBpZiAodGhpcy5mb290ZXIgJiYgdGhpcy5mb290ZXJbJ2luZGV4J10gKyAxID49IHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgb2Zmc2V0ID0gdGhpcy5mb290ZXJbJ2luZGV4J10gKyAxIC0gdmFsdWVcbiAgICAgICAgICAgIHJldHVybiBvZmZzZXQgPT0gMCA/IDAgOiAtb2Zmc2V0XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L+U5Zue5aKe5Yqg5pWw5o2u5YGP56e7XG4gICAgICAgIGlmICh0aGlzLl9tYXhJdGVtVG90YWwgPT0gMCB8fCB2YWx1ZSA8IHRoaXMuX21heEl0ZW1Ub3RhbCB8fCB0aGlzLl9tYXhJdGVtVG90YWwgPCB0aGlzLl9tYXhQcmVmYWJUb3RhbCkgcmV0dXJuIDAgLy/mr5TlpoLlvZPliY3mnIDlpJrlhYHorrjliJvlu7oxMOS4qml0ZW0g5b2T5YmN5pi+56S6NeS4qiDov5Tlm54wXG4gICAgICAgIGlmICh0aGlzLmlzR3JvdXBGb290ZXIodGhpcy5mb290ZXIpKSByZXR1cm4gMCAvL0dyaWTmqKHlvI8g5aaC5p6c5bC+6YOo55qE5L2N572u5piv5Zyo5LiA57uEaXRlbeS4reacq+WwvueahOS9jee9ruaXtiDov5Tlm54gMCBcbiAgICAgICAgcmV0dXJuIHZhbHVlIC0gdGhpcy5fbWF4SXRlbVRvdGFsXG4gICAgfVxuICAgIC8qKiBcbiAgICAgKiDlvZPmlbDmja7lop7liqDjgIHlh4/lsJHml7Yg6I635Y+W6IqC54K55YGP56e76YePIFxuICAgICAqIOW9k+WJjeaVsOaNruaYr+i/meagt+eahCAgIOWinuWKoDHkuKogICAgIOWinuWKoDLkuKpcbiAgICAgKiAwLDEsMiwzICAgICAgICAgICAxLDIsMyAgICAgICAgIDIsM1xuICAgICAqIDQsNSw2ICAgICAgICAgICA0LDUsNiw3ICAgICA0LDUsNiw3XG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgIDhcbiAgICAqL1xuICAgIHByaXZhdGUgZ2V0UmVhbGx5T2Zmc2V0KGRhdGFPZmZzZXQ6IG51bWJlcikge1xuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyKSByZXR1cm4gMFxuICAgICAgICBpZiAoZGF0YU9mZnNldCA+IDApIHsgLy8g5Luj6KGo5aKe5YqgaXRlbSDooajmoLzmqKHlvI/kuIsg6YCa6L+H5YGP56e75aS06YOo5p2l6K6p5LiL5pa55aGr5ruhIOWhq+a7oeWQjuWBnOatouWBj+enu1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhT2Zmc2V0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuZm9vdGVyKSkgcmV0dXJuIGkgLy/ov5Tlm57nnJ/lrp7nmoTlgY/np7vph49cbiAgICAgICAgICAgICAgICAvLyDmraTml7blpoLmnpxoZWFkZXIg5bey57uP5piv5LiA57uEaXRlbeS4reacgOWQjuS4gOS4quaXtiDlkJHkuIvkvY3np7sg5bm2IOiuvue9ruWIsOS4gOe7hGl0ZW3nmoTotbflp4vkvY3nva4gICBcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5oZWFkZXIuZ2V0UG9zaXRpb24oKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7IC8vIOWeguebtOa7keWKqOaXtlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuaGVhZGVyKSkgeyAvLyDlvZPliJfooajkuK3nrKzkuIDkuKppdGVt5q2j5Zyo5LiA57uEaXRlbeS4reacq+WwvuS9jee9ruaXtlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBCb3R0b21ZKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcikgIC8v5q2j5bqP5o6S5YiX5pe2IFnovbTlkJHkuIvlgY/np7vvvIjlnoLnm7TmjpLliJfml7Yg5LiA57uEaXRlbSDlpLTlnKjlt6blsL7lnKjlj7PvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwVG9wWSh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpIC8v5YCS5bqP5o6S5YiX5pe2IFnovbTlkJHkuIrlgY/np7vvvIjlnoLnm7TmjpLliJfml7Yg5LiA57uEaXRlbSDlpLTlnKjlt6blsL7lnKjlj7PvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikueCAvLyBY6L205ZCR5aS06YOo5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIOesrOS4gOS4qml0ZW3msqHmnInlnKjkuIDnu4RpdGVt5Lit5pyr5bC+55qE5L2N572uIOWPquWwhuesrOS4gOS4qml0ZW3lkJHlj7PlgY/np7sgKOWPquWBj+enu1jovbQpXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueCA9IHRoaXMuZ2V0R3JvdXBSaWdodFgodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKSAvLyBY6L205ZCR5Y+z5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyDmsLTlubPmu5Hliqjml7ZcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNHcm91cEZvb3Rlcih0aGlzLmhlYWRlcikpIHsgIC8vIOW9k+WIl+ihqOS4reesrOS4gOS4qml0ZW3mraPlnKjkuIDnu4RpdGVt5Lit5pyr5bC+5L2N572u5pe2XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cFJpZ2h0WCh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpIC8v5q2j5bqP5o6S5YiX5pe2IFjovbTlkJHlj7PlgY/np7vvvIjmsLTlubPmjpLliJfml7Yg5LiA57uEaXRlbSDlpLTlnKjkuIrlsL7lnKjkuIvvvIlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmdldEdyb3VwTGVmdFgodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKSAvL+WAkuW6j+aOkuWIl+aXtiBY6L205ZCR5bem5YGP56e777yI5rC05bmz5o6S5YiX5pe2IOS4gOe7hGl0ZW0g5aS05Zyo5LiK5bC+5Zyo5LiL77yJXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBIZWFkZXIodGhpcy5oZWFkZXIpLnkgLy8gWei9tOWQkeWktOmDqOWBj+enu1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgeyAgLy8g56ys5LiA5LiqaXRlbeayoeacieWcqOS4gOe7hGl0ZW3kuK3mnKvlsL7nmoTkvY3nva4g5Y+q5bCG56ys5LiA5LiqaXRlbeWQkeS4i+WBj+enuyAo5Y+q5YGP56e7Wei9tClcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy55ID0gdGhpcy5nZXRHcm91cEJvdHRvbVkodGhpcy5oZWFkZXIsIHRoaXMuaGVhZGVyKSAvLyBZ6L205ZCR5LiL5YGP56e7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2V0UG9zaXRpb24ocG9zKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRhdGFPZmZzZXRcbiAgICAgICAgfVxuICAgICAgICAvLyDku6Pooajlh4/lsJHkuoZpdGVtIOiuoeeul+WBj+enu+mHjyBvZmZzZXQ8MCDjgJDms6jmhI/vvIHov5nph4znmoTpgLvovpHlkozkuIrpnaLmraPlpb3nm7jlj43jgJFcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBNYXRoLmFicyhkYXRhT2Zmc2V0KTsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcG9zID0gY2MuVmVjMi5aRVJPXG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzR3JvdXBIZWFkZXIodGhpcy5oZWFkZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cEZvb3Rlcih0aGlzLmhlYWRlcikueFxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJUb0Zvb3Rlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmdldEdyb3VwVG9wWSh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBCb3R0b21ZKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cExlZnRYKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSB0aGlzLmhlYWRlci55XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0dyb3VwSGVhZGVyKHRoaXMuaGVhZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBGb290ZXIodGhpcy5oZWFkZXIpLnlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyVG9Gb290ZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cExlZnRYKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvcy54ID0gdGhpcy5nZXRHcm91cFJpZ2h0WCh0aGlzLmhlYWRlciwgdGhpcy5oZWFkZXIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwb3MueSA9IHRoaXMuZ2V0R3JvdXBUb3BZKHRoaXMuaGVhZGVyLCB0aGlzLmhlYWRlcilcbiAgICAgICAgICAgICAgICAgICAgcG9zLnggPSB0aGlzLmhlYWRlci54XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2V0UG9zaXRpb24ocG9zKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jYWxjdWxhdGVCb3VuZGFyeSgpXG4gICAgICAgIHJldHVybiBkYXRhT2Zmc2V0XG4gICAgfVxuICAgIC8qKiDliLfmlrDmiYDmnIlpdGVt5pWw5o2uIOagueaNruW9k+WJjWl0ZW3nmoQgaW5kZXgg5Yi35pawICovXG4gICAgcHJpdmF0ZSByZWZyZXNoSXRlbXModmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIgPSAwKSB7XG4gICAgICAgIGlmICghdGhpcy5oZWFkZXIpIHJldHVyblxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuaGVhZGVyWydpbmRleCddIC0gMSArIG9mZnNldCAvLyDojrflj5blpLTpg6hpdGVt5oyB5pyJ55qEaW5kZXgg5Yqg5LiKIOaVsOaNruWBj+enu+adpeiuoeeul+i1t+Wni2luZGV4IFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRoaXMuX2NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrXG4gICAgICAgICAgICAvLyDov5nph4znmoTliKTmlq3nlKjkuo7ml6DpmZDlvqrnjq/mu5rliqjnmoTpgLvovpEg5aaC5p6c57Si5byV5aSn5LqO5pWw5o2u5oC75pWwIOe0ouW8leW9kumbtlxuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPiB2YWx1ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gMFxuICAgICAgICAgICAgfSBlbHNlIGlmIChzdGFydEluZGV4IDwgMCkgeyAvLyDntKLlvJXlsI/kuo4wIOe0ouW8leWumuS9jeWIsOaVsOaNruWwvumDqCDkv53mjIHpppblsL7nm7jov55cbiAgICAgICAgICAgICAgICBzdGFydEluZGV4ID0gdmFsdWUgLSAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IHN0YXJ0SW5kZXggLy/orr7nva7lvZPliY3ntKLlvJVcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UmVmcmVzaEl0ZW0oY2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOS7juWktOmDqOWIsOWwvumDqOmHjee9ruaVsOaNriAqL1xuICAgIHByaXZhdGUgcmVzZXRUb0hlYWRlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0aGlzLl9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gaVxuICAgICAgICAgICAgdGhpcy5ub3RpZnlSZWZyZXNoSXRlbShjaGlsZClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyTG9vcCAmJiAhdGhpcy5mb290ZXJMb29wKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWRlcj8uc2V0UG9zaXRpb24odGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikpXG4gICAgICAgIH0gZWxzZSBpZiAoIXRoaXMuc2Nyb2xsVG9IZWFkZXJPckZvb3Rlcikge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXI/LnNldFBvc2l0aW9uKHRoaXMuZ2V0R3JvdXBIZWFkZXIodGhpcy5oZWFkZXIpKVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDku47lsL7pg6jliLDlpLTpg6jph43nva7mlbDmja4gKi9cbiAgICBwcml2YXRlIHJlc2V0VG9Gb290ZXIoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX21heEl0ZW1Ub3RhbFxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5fY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuX2NoaWxkcmVuW2ldXG4gICAgICAgICAgICBjaGlsZFsnaW5kZXgnXSA9IC0taW5kZXhcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UmVmcmVzaEl0ZW0oY2hpbGQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIoOmZpOWkmuS9meeahGl0ZW0gKi9cbiAgICBwcml2YXRlIHJlbW92ZUNoaWxkcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIC8vIOacieWkmuS9meeahGl0ZW0g6ZyA6KaB5Yig6ZmkXG4gICAgICAgIGxldCBsZW5ndGggPSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAtIHZhbHVlXG4gICAgICAgIC8vIOWIoOmZpOaOieWkmuS9meeahGl0ZW1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5mb290ZXJcbiAgICAgICAgICAgIHRoaXMucmVtQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KClcbiAgICAgICAgICAgIHRoaXMubm9kZS5yZW1vdmVDaGlsZChjaGlsZClcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuaGVhZGVyKSByZXR1cm5cbiAgICAgICAgLy8g5bCG5aS06YOo6IqC54K555qE5L2N572u6YeN572u5Yiw5LiA57uEaXRlbeeahOesrOS4gOS4quS9jee9rlxuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcilcbiAgICAgICAgaWYgKHRoaXMudmVydGljYWwpIHtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnggPSBwb3MueFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIueSA9IHBvcy55XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqIOWIhuW4p+WIm+W7uml0ZW0gKi9cbiAgICBwcml2YXRlIGFzeW5jIGFzeW5jQ3JlYXRlSXRlbSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX2dlbmVyPy5yZXR1cm4oXCJcIikvL+WPlua2iOS4iuS4gOasoeeahOWIhuW4p+S7u+WKoe+8iOWmguaenOS7u+WKoeato+WcqOaJp+ihjO+8iVxuICAgICAgICAvLyDmnInlpJrkvZnnmoRpdGVtIOmcgOimgeWIoOmZpCDkuI3lpITnkIZcbiAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID4gdmFsdWUpIHJldHVybiB0aGlzLnJlbW92ZUNoaWxkcyh2YWx1ZSlcbiAgICAgICAgLy8g5bey57uP5Zu65a6aaXRlbeaAu+aVsCDkuI3lpITnkIZcbiAgICAgICAgaWYgKHRoaXMuX21heFByZWZhYlRvdGFsID4gMCAmJiB0aGlzLl9tYXhQcmVmYWJUb3RhbCA9PSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCkgcmV0dXJuXG4gICAgICAgIC8vIOW8gOWni+WIhuW4p+WIm+W7uml0ZW1cbiAgICAgICAgbGV0IHRvdGFsID0gdmFsdWUgLSB0aGlzLm5vZGUuY2hpbGRyZW5Db3VudCAvL+iuoeeul+W9k+WJjeW6lOivpeWIm+W7uueahOaAu+aVsFxuICAgICAgICB0aGlzLl9nZW5lciA9IHRoaXMuZ2V0R2VuZXJhdG9yTGVuZ3RoKHRvdGFsLCAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hpbGQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYilcbiAgICAgICAgICAgIGNoaWxkWydpbmRleCddID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnRcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoY2hpbGQpXG4gICAgICAgICAgICAvLyDojrflj5bmiJbmt7vliqAgVUlTdXBlckl0ZW1cbiAgICAgICAgICAgIGxldCBzcHVlckl0ZW0gPSBjaGlsZC5nZXRDb21wb25lbnQoVUlTcHVlckl0ZW0pIHx8IGNoaWxkLmFkZENvbXBvbmVudChVSVNwdWVySXRlbSlcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlsZClcbiAgICAgICAgICAgIHNwdWVySXRlbS5pbml0KHRoaXMpXG4gICAgICAgICAgICAvLyBpdGVt5Zyo6aaW5qyh5Yib5bu65pe256uL5Y2z5Yi35pawIOmBv+WFjeaYvuekuml0ZW3liJ3lp4vnirbmgIFcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UmVmcmVzaEl0ZW0oY2hpbGQpXG4gICAgICAgICAgICAvLyDlpoLmnpzliJvlu7rnmoTmmK/nrKzkuIDkuKppdGVtIOiuvue9ruS7lueahOi1t+Wni+S9jee9riDkuYvlkI7nmoRpdGVt5Lya6Ieq5Yqo55u45a+55LqO5LuW5p2l6K6+572u6Ieq5bexIOaIkeS7rOWPqumcgOimgeehruWumuesrOS4gOS4quS9jee9ruWwseihjOS6hlxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5jaGlsZHJlbkNvdW50ID09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRHcm91cEhlYWRlcih0aGlzLmhlYWRlcikgLy/ojrflj5bkuIDnu4RpdGVt5Lit5aS06YOo5L2N572uXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIuc2V0UG9zaXRpb24ocG9zKVxuICAgICAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICAgICAqIOWIqeeUqGNjLlNjcm9sbFZpZXfnmoTmlrnms5XmnaXorr7nva5jb250ZW5055qE6LW35aeL5L2N572uIOeUseS6jmNvbnRlbnTlnKjliJ3lp4vljJbnmoTml7blgJnlm7rlrprkuobplJrngrnpg73kuLowLjUg5omA5Lul6L+Z6YeM5b+F54S25piv5Z2Q5qCHMCBcbiAgICAgICAgICAgICAgICAgKiDlpoLmnpzkvaDmsqHmnInlhbbku5bpnIDmsYLnoa7lrprnlKgwLjXplJrngrnnmoTor50g6L+Z6YeM5Y+v5Lul6Ieq5bex6K6+572u5Li6Y2MuVmVjMi5aRVJPIOiKguecgeS4jeW/heimgeeahOiuoeeul++8iOWunumZheS4iuiuoeeul+mHj+WPr+W/veeVpeS4jeiuoe+8iVxuICAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jYWxjdWxhdGVCb3VuZGFyeSgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc2VsZkhvclcsIHZpZXdIb3JXXG4gICAgICAgICAgICBpZiAodGhpcy52ZXJ0aWNhbCkge1xuICAgICAgICAgICAgICAgIHNlbGZIb3JXID0gdGhpcy5nZXRSZWFsbHlTaXplKCkuaGVpZ2h0XG4gICAgICAgICAgICAgICAgdmlld0hvclcgPSB0aGlzLnZpZXdTaXplLmhlaWdodFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZWxmSG9yVyA9IHRoaXMuZ2V0UmVhbGx5U2l6ZSgpLndpZHRoXG4gICAgICAgICAgICAgICAgdmlld0hvclcgPSB0aGlzLnZpZXdTaXplLndpZHRoXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIOagueaNruaOkuWIl+aWueWQkSDmnaXliKTmlq3lr7nmr5Tlrr3luqbov5jmmK/pq5jluqZcbiAgICAgICAgICAgICAqIOi/memHjOS9v+eUqOWPguaVsHRoaXMubXVsdGlwbGXmnaXliKTmlq3mmK/lkKbpnIDopoHnu6fnu63liJvlu7og6buY6K6k5Li6MuWAjSDmr5TlpoJ2aWV35Y+v6KeG5bC65a+45Li6ODAwIDLlgI3lsLHmmK8xNjAwXG4gICAgICAgICAgICAgKiDmoLnmja7kuYvliY3miYDliJvlu7rnmoTmiYDmnIlpdGVt55qE5bC65a+46K6h566X5piv5ZCm5ruh6Laz6L+Z5Liq5bC65a+4IOWmguaenOa7oei2s+WImeS4jeWGjee7p+e7reWIm+W7uiBcbiAgICAgICAgICAgICAqIOeUseS6juaYr+WIhuW4p+WKoOi9vSDmiYDku6XkuIvkuIDmrKHliJvlu7rkvJrnrYnov5nkuIDmrKHnmoTov5Tlm57nu5Pmnpwg6L+U5ZueZmFsc2Ug5YiZ57uI5q2i5YiG5bin5Lu75YqhXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGlmIChzZWxmSG9yVyA+PSB2aWV3SG9yVyAqIHRoaXMubXVsdGlwbGUgJiYgdGhpcy5pc0dyb3VwRm9vdGVyKHRoaXMuZm9vdGVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX21heFByZWZhYlRvdGFsID0gdGhpcy5ub2RlLmNoaWxkcmVuQ291bnQgLy/lm7rlrpppdGVt5pWw6YePIOS4jeWcqOe7p+e7reWIm+W7ulxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfSlcbiAgICAgICAgYXdhaXQgdGhpcy5leGVHZW5lcmF0b3IodGhpcy5fZ2VuZXIsIDEwKSAvL+aJp+ihjOWIhuW4p+S7u+WKoSAx5bin5Yib5bu6MTDkuKpcbiAgICB9XG4gICAgLyoqIOWQjOatpea3u+WKoOacrOWcsOWPmOmHjyBjaGlsZHJlbiDlubblj5HpgIEgVUlDaGFuZ2VCcm90aGVyRXZuZXQg6YCa55+lKi9cbiAgICBwcml2YXRlIGFkZENoaWxkKG5vZGU6IGNjLk5vZGUpIHtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW4ucHVzaChub2RlKVxuICAgICAgICB0aGlzLm5vZGUuZW1pdChVSUNoYW5nZUJyb3RoZXJFdm5ldClcbiAgICB9XG4gICAgLyoqIOWQjOatpeenu+mZpOacrOWcsOWPmOmHjyBjaGlsZHJlbiDlubblj5HpgIEgVUlDaGFuZ2VCcm90aGVyRXZuZXQg6YCa55+lICovXG4gICAgcHJpdmF0ZSByZW1DaGlsZChub2RlOiBjYy5Ob2RlKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2NoaWxkcmVuLmluZGV4T2Yobm9kZSlcbiAgICAgICAgaWYgKGluZGV4ID09IC0xKSByZXR1cm5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxuICAgICAgICB0aGlzLm5vZGUuZW1pdChVSUNoYW5nZUJyb3RoZXJFdm5ldClcbiAgICB9XG4gICAgLyoqIOWIhuW4p+WKoOi9vSAqL1xuICAgIHByaXZhdGUgKiBnZXRHZW5lcmF0b3JMZW5ndGgobGVuZ3RoOiBudW1iZXIsIGNhbGxiYWNrOiBGdW5jdGlvbiwgLi4ucGFyYW1zOiBhbnkpOiBHZW5lcmF0b3Ige1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2FsbGJhY2soaSwgLi4ucGFyYW1zKVxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHlpZWxkXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKiDliIbluKfmiafooYwgKi9cbiAgICBwcml2YXRlIGV4ZUdlbmVyYXRvcihnZW5lcmF0b3I6IEdlbmVyYXRvciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdlbiA9IGdlbmVyYXRvclxuICAgICAgICAgICAgbGV0IGV4ZWN1dGUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlciA9IGdlbi5uZXh0KCk7IDsgaXRlciA9IGdlbi5uZXh0KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZXIgPT0gbnVsbCB8fCBpdGVyLmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGV4ZWN1dGUoKSwgY2MuZGlyZWN0b3IuZ2V0RGVsdGFUaW1lKCkgKiAxMDAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleGVjdXRlKClcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=
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
