
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