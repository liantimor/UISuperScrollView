window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  UISuperItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "05ad9vH0ANAc6m/Oc1rzygv", "UISuperItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("./UISuperLayout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UISpuerItem = function(_super) {
      __extends(UISpuerItem, _super);
      function UISpuerItem() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      UISpuerItem.prototype.onLoad = function() {
        this.node["getBounding"] = this.getBounding.bind(this);
        this.node.on(cc.Node.EventType.POSITION_CHANGED, this.resetScrollView, this);
        this.node.on(cc.Node.EventType.SCALE_CHANGED, this.resetScrollView, this);
        this.node.on(cc.Node.EventType.SIZE_CHANGED, this.resetScrollView, this);
        this.node["watchBrother"] = this.watchBrother.bind(this);
        this.node["watchSelf"] = this.watchSelf.bind(this);
      };
      UISpuerItem.prototype.resetScrollView = function() {
        this.isFooter && this.layout.resetScrollView();
      };
      UISpuerItem.prototype.init = function(layout, refreshItemCallback) {
        this.layout = layout;
        this.refreshItemCallback = refreshItemCallback;
      };
      UISpuerItem.prototype.getBounding = function() {
        this.node.parent["_updateWorldMatrix"]();
        var width = this.node.getContentSize().width;
        var height = this.node.getContentSize().height;
        var rect = cc.rect(-this.node.getAnchorPoint().x * width, -this.node.getAnchorPoint().y * height, width, height);
        this.node["_calculWorldMatrix"]();
        rect.transformMat4(rect, this.node["_worldMatrix"]);
        return rect;
      };
      Object.defineProperty(UISpuerItem.prototype, "width", {
        get: function() {
          return this.node.width * this.layout.getUsedScaleValue(this.node.scaleX);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerItem.prototype, "height", {
        get: function() {
          return this.node.height * this.layout.getUsedScaleValue(this.node.scaleY);
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerItem.prototype, "isHeader", {
        get: function() {
          return 0 == this.node.getSiblingIndex();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerItem.prototype, "isFooter", {
        get: function() {
          return this.node.getSiblingIndex() == this.layout.node.childrenCount - 1;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerItem.prototype, "isUpdateHeader", {
        get: function() {
          if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y > 0 && this.isHeader) return true;
          if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x < 0 && this.isHeader) return true;
          return false;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerItem.prototype, "isUpdateFooter", {
        get: function() {
          if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && this.layout.scrollView.deltaMove.y < 0 && this.isFooter) return true;
          if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && this.layout.scrollView.deltaMove.x > 0 && this.isFooter) return true;
          return false;
        },
        enumerable: false,
        configurable: true
      });
      UISpuerItem.prototype.isOutOfBoundary = function(offset) {
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL && 0 == offset.y) return true;
        if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL && 0 == offset.x) return true;
        return false;
      };
      UISpuerItem.prototype.relativePositionFooter = function(prevNode) {
        if (prevNode) if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
          var prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY);
          var offset = prevNode.y - prevHeight * prevNode.anchorY - this.height * (1 - this.node.anchorY) - this.layout.spacing.y;
          this.node.y = offset;
        } else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
          var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
          var offset = prevNode.x + prevWidth * (1 - prevNode.anchorX) + this.width * this.node.anchorX + this.layout.spacing.x;
          this.node.x = offset;
        }
      };
      UISpuerItem.prototype.relativePositionHeader = function(prevNode) {
        if (prevNode) if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL) {
          var prevHeight = prevNode.height * this.layout.getUsedScaleValue(prevNode.scaleY);
          var offset = prevNode.y + prevHeight * (1 - prevNode.anchorY) + this.height * this.node.anchorY + this.layout.spacing.y;
          this.node.y = offset;
        } else if (this.layout.startAxis == UISuperLayout_1.UISuperAxis.HORIZONTAL) {
          var prevWidth = prevNode.width * this.layout.getUsedScaleValue(prevNode.scaleX);
          var offset = prevNode.x - prevWidth * prevNode.anchorX - this.width * (1 - this.node.anchorX) - this.layout.spacing.x;
          this.node.x = offset;
        }
      };
      UISpuerItem.prototype.watchBrother = function() {
        var prevIndex = this.node.getSiblingIndex() - 1;
        var prevNode = this.node.parent.children[prevIndex];
        this.relativePositionFooter(prevNode);
      };
      UISpuerItem.prototype.watchSelf = function() {
        if (this.isUpdateHeader) {
          var footer = this.layout.footer;
          var index = footer["index"] + 1;
          if (index == this.layout.maxItemTotal) return;
          var offset = this.layout.isOutOfBoundaryHeader(this.node);
          if (this.isOutOfBoundary(offset)) {
            this.node["index"] = index;
            this.refreshItemCallback(this.node, index);
            this.relativePositionFooter(footer);
            this.node.setSiblingIndex(this.layout.node.childrenCount - 1);
          }
        }
        if (this.isUpdateFooter) {
          var header = this.layout.header;
          var index = header["index"] - 1;
          if (-1 == index) return;
          var offset = this.layout.isOutOfBoundaryFooter(this.node);
          if (this.isOutOfBoundary(offset)) {
            this.node["index"] = index;
            this.node.setSiblingIndex(0);
            this.refreshItemCallback(this.node, index);
            this.relativePositionHeader(header);
          }
        }
      };
      UISpuerItem.prototype.update = function(dt) {
        this.watchBrother();
        this.watchSelf();
      };
      UISpuerItem = __decorate([ ccclass ], UISpuerItem);
      return UISpuerItem;
    }(cc.Component);
    exports.default = UISpuerItem;
    cc._RF.pop();
  }, {
    "./UISuperLayout": "UISuperLayout"
  } ],
  UISuperLayout: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "699eb1xVINCcZBBHwAgwDBT", "UISuperLayout");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.UISuperAxis = void 0;
    var UISuperScrollView_1 = require("./UISuperScrollView");
    var UISuperItem_1 = require("./UISuperItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var UISuperAxis;
    (function(UISuperAxis) {
      UISuperAxis[UISuperAxis["HORIZONTAL"] = 0] = "HORIZONTAL";
      UISuperAxis[UISuperAxis["VERTICAL"] = 1] = "VERTICAL";
    })(UISuperAxis = exports.UISuperAxis || (exports.UISuperAxis = {}));
    var UISuperLayout = function(_super) {
      __extends(UISuperLayout, _super);
      function UISuperLayout() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
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
      Object.defineProperty(UISuperLayout.prototype, "viewSize", {
        get: function() {
          this._viewSize || (this._viewSize = this.scrollView.view.getContentSize());
          return this._viewSize;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "scrollView", {
        get: function() {
          this._scrollView || (this._scrollView = this.node.parent.parent.getComponent(UISuperScrollView_1.default));
          return this._scrollView;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "header", {
        get: function() {
          return this.node.children[0];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footer", {
        get: function() {
          return this.node.children[this.node.childrenCount - 1];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerBoundaryX", {
        get: function() {
          return this.node.x + this.header.x - this.header.anchorX * this.header.width;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "headerBoundaryY", {
        get: function() {
          return this.node.y + this.header.y + (1 - this.header.anchorY) * this.header.height;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerBoundaryX", {
        get: function() {
          return this.node.x + this.footer.x + (1 - this.footer.anchorX) * this.footer.width;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISuperLayout.prototype, "footerBoundaryY", {
        get: function() {
          return this.node.y + this.footer.y - this.footer.anchorY * this.footer.height;
        },
        enumerable: false,
        configurable: true
      });
      UISuperLayout.prototype.getContentSize = function() {
        var size = this.getReallySize();
        var viewSize = this.scrollView.view.getContentSize();
        if (size.height < viewSize.height) {
          size.height = viewSize.height;
          this.setHeaderStartPos();
        }
        size.width < viewSize.width && (size.width = viewSize.width);
        return size;
      };
      UISuperLayout.prototype.getReallySize = function() {
        if (0 == this.node.childrenCount) return this.viewSize;
        var size = cc.Size.ZERO;
        size.width = this.footerBoundaryX + -this.headerBoundaryX + this.paddingLeft + this.paddingRight;
        size.height = this.headerBoundaryY + -this.footerBoundaryY + this.paddingTop + this.paddingBottom;
        return size;
      };
      UISuperLayout.prototype.onLoad = function() {
        this.node.getContentSize = this.getContentSize.bind(this);
      };
      UISuperLayout.prototype.getUsedScaleValue = function(value) {
        return this.affectedByScale ? Math.abs(value) : 1;
      };
      UISuperLayout.prototype.total = function(value) {
        this.scrollView.stopAutoScroll();
        this.scrollView.release();
        this.maxItemTotal = value;
        this.moreRemLessAdd();
        var offset = 0;
        this.footer && this.footer["index"] + 1 >= this.maxItemTotal && (offset = this.footer["index"] + 1 - this.maxItemTotal);
        for (var i = 0; i < this.node.children.length; i++) {
          var child = this.node.children[i];
          var index = child["index"] - offset;
          child["index"] = index;
          this.refreshItem(child, child["index"]);
        }
        this.scrollView.calculateBoundary();
        return this;
      };
      UISuperLayout.prototype.scrollToHeader = function(timeInSecond, attenuated) {
        this.startAxis == UISuperAxis.VERTICAL ? this.scrollToTop(timeInSecond, attenuated) : this.scrollToLeft(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.scrollToFooter = function(timeInSecond, attenuated) {
        this.startAxis == UISuperAxis.VERTICAL ? this.scrollToBottom(timeInSecond, attenuated) : this.scrollToRight(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.resetScrollView = function() {
        this.scrollView.reset();
      };
      UISuperLayout.prototype.isOutOfBoundaryHeader = function(node) {
        var width = node.width * this.getUsedScaleValue(node.scaleX);
        var height = -node.height * this.getUsedScaleValue(node.scaleY);
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
      };
      UISuperLayout.prototype.isOutOfBoundaryFooter = function(node) {
        var width = -node.width * this.getUsedScaleValue(node.scaleX);
        var height = node.height * this.getUsedScaleValue(node.scaleY);
        var offset = this.scrollView.getHowMuchOutOfBoundary(cc.v2(width, height));
        return offset;
      };
      UISuperLayout.prototype.scrollToTop = function(timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.VERTICAL) return;
        this.refreshHeader();
        this.scrollView.deltaMove = cc.v2(0, -1);
        this.scrollView.scrollToTop(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.scrollToBottom = function(timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.VERTICAL) return;
        this.refreshFooter();
        this.scrollView.deltaMove = cc.v2(0, 1);
        this.scrollView.scrollToBottom(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.scrollToLeft = function(timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.HORIZONTAL) return;
        this.refreshHeader();
        this.scrollView.deltaMove = cc.v2(1, 0);
        this.scrollView.scrollToLeft(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.scrollToRight = function(timeInSecond, attenuated) {
        if (this.startAxis != UISuperAxis.HORIZONTAL) return;
        this.refreshFooter();
        this.scrollView.deltaMove = cc.v2(-1, 0);
        this.scrollView.scrollToRight(timeInSecond, attenuated);
      };
      UISuperLayout.prototype.refreshHeader = function() {
        this.scrollView.stopAutoScroll();
        for (var i = 0; i < this.node.children.length; i++) {
          var child = this.node.children[i];
          child["index"] = i;
          this.refreshItem(child, i);
        }
      };
      UISuperLayout.prototype.refreshFooter = function() {
        this.scrollView.stopAutoScroll();
        var index = this.maxItemTotal;
        for (var i = this.node.childrenCount - 1; i >= 0; i--) {
          var child = this.node.children[i];
          child["index"] = --index;
          this.refreshItem(child, index);
        }
      };
      UISuperLayout.prototype.moreRemLessAdd = function() {
        var index = this.node.childrenCount;
        for (var i = index; i < this.maxItemTotal; i++) {
          if (i >= this.maxPrefabTotal) break;
          if (!this.node.children[i]) {
            var child_1 = cc.instantiate(this.prefab);
            child_1["index"] = i;
            var script = child_1.getComponent(UISuperItem_1.default) || child_1.addComponent(UISuperItem_1.default);
            script.init(this, this.refreshItem.bind(this));
            this.node.addChild(child_1);
            0 == i && this.setHeaderStartPos();
          }
        }
        if (this.node.childrenCount > this.maxItemTotal) {
          var total = this.node.childrenCount - this.maxItemTotal;
          for (var i = 0; i < total; i++) {
            var child = this.footer;
            child.destroy();
            this.node.removeChild(child);
          }
        }
      };
      UISuperLayout.prototype.refreshItem = function(target, index) {
        cc.Component.EventHandler.emitEvents(this.refreshItemEvents, target, index);
      };
      UISuperLayout.prototype.setHeaderStartPos = function() {
        var pos = cc.Vec2.ZERO;
        pos.y = (1 - this.header.anchorY) * -this.header.height - this.paddingTop + (1 - this.node.anchorY) * this.viewSize.height;
        pos.x = this.header.anchorX * this.header.width + this.paddingLeft - this.node.anchorX * this.viewSize.width;
        this.header.setPosition(pos);
      };
      __decorate([ property({
        type: cc.Enum(UISuperAxis),
        displayName: "\u6392\u5217\u65b9\u5411"
      }) ], UISuperLayout.prototype, "startAxis", void 0);
      __decorate([ property({
        displayName: "\u4e0a\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingTop", void 0);
      __decorate([ property({
        displayName: "\u4e0b\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingBottom", void 0);
      __decorate([ property({
        displayName: "\u5de6\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingLeft", void 0);
      __decorate([ property({
        displayName: "\u53f3\u8fb9\u8ddd"
      }) ], UISuperLayout.prototype, "paddingRight", void 0);
      __decorate([ property({
        displayName: "\u95f4\u9694"
      }) ], UISuperLayout.prototype, "spacing", void 0);
      __decorate([ property({
        displayName: "\u53ef\u590d\u7528\u7684Item\u6570"
      }) ], UISuperLayout.prototype, "maxPrefabTotal", void 0);
      __decorate([ property({
        type: cc.Prefab,
        displayName: "item Prefab"
      }) ], UISuperLayout.prototype, "prefab", void 0);
      __decorate([ property ], UISuperLayout.prototype, "affectedByScale", void 0);
      __decorate([ property({
        displayName: "\u4f7f\u7528item\u5b50\u8282\u70b9\u5305\u56f4\u76d2"
      }) ], UISuperLayout.prototype, "childBoundingBox", void 0);
      __decorate([ property(cc.Component.EventHandler) ], UISuperLayout.prototype, "refreshItemEvents", void 0);
      UISuperLayout = __decorate([ ccclass ], UISuperLayout);
      return UISuperLayout;
    }(cc.Component);
    exports.default = UISuperLayout;
    cc._RF.pop();
  }, {
    "./UISuperItem": "UISuperItem",
    "./UISuperScrollView": "UISuperScrollView"
  } ],
  UISuperScrollView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cf9af4O7wZKvocAG07bRvtr", "UISuperScrollView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("./UISuperLayout");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EPSILON = 1e-4;
    var UISpuerScrollView = function(_super) {
      __extends(UISpuerScrollView, _super);
      function UISpuerScrollView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
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
        get: function() {
          return this["_view"];
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "autoScrolling", {
        get: function() {
          return this["_autoScrolling"];
        },
        set: function(value) {
          this["_autoScrolling"] = value;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "layout", {
        get: function() {
          null == this._layout && (this._layout = this.content.getComponent(UISuperLayout_1.default));
          return this._layout;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isHeader", {
        get: function() {
          var _a, _b;
          if (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) return 0 == (null === (_b = this.layout) || void 0 === _b ? void 0 : _b.header["index"]);
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isFooter", {
        get: function() {
          var _a;
          if (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) return this.layout.footer["index"] == this.layout.maxItemTotal - 1;
          return true;
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(UISpuerScrollView.prototype, "isCalculPull", {
        get: function() {
          return this.pullDownEvents.length > 0 || this.pullUpEvents.length > 0;
        },
        enumerable: false,
        configurable: true
      });
      UISpuerScrollView.prototype.calculateBoundary = function() {
        this["_calculateBoundary"]();
      };
      UISpuerScrollView.prototype.getHowMuchOutOfBoundary = function(offset) {
        return this["_getHowMuchOutOfBoundary"](offset);
      };
      UISpuerScrollView.prototype.release = function() {
        if (this.isLockHeader || this.isLockFooter) {
          this.isMoveHeader = false;
          this.isMoveFooter = false;
          this.isLockHeader = false;
          this.isLockFooter = false;
          this.isEmitProgress = true;
          this["_outOfBoundaryAmountDirty"] = true;
          this["_processInertiaScroll"]();
        }
      };
      UISpuerScrollView.prototype._adjustContentOutOfBoundary = function() {
        this._outOfBoundaryAmountDirty = true;
        if (this._isOutOfBoundary()) {
          var outOfBoundary = this._getHowMuchOutOfBoundary(cc.v2(0, 0));
          var newPosition = this.getContentPosition().add(outOfBoundary);
          cc.error("\u8bbe\u7f6e\u4f4d\u7f6e", newPosition.x, newPosition.y);
          if (this.content) {
            this.content.setPosition(newPosition);
            this._updateScrollBar(0);
          }
        }
      };
      UISpuerScrollView.prototype.reset = function() {
        this["_outOfBoundaryAmountDirty"] = true;
        var offset = this.getHowMuchOutOfBoundary();
        if (!offset.fuzzyEquals(cc.v2(0, 0), EPSILON)) {
          this.isEmitProgress = false;
          this["_processInertiaScroll"]();
        }
      };
      UISpuerScrollView.prototype._onTouchMoved = function(event, captureListeners) {
        _super.prototype["_onTouchMoved"].call(this, event, captureListeners);
        var delta = cc.v2(event.getLocation().x - event.getPreviousLocation().x, event.getLocation().y - event.getPreviousLocation().y);
        (this.vertical && 0 != delta.y || this.horizontal && 0 != delta.x) && (this.deltaMove = delta);
        this.isAutoBack = false;
        if (this.isCalculPull) {
          this.isEmitProgress = true;
          var outOfBoundary = this.getHowMuchOutOfBoundary();
          var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
          offset > 0 && this.isHeader ? this.isMoveHeader = offset >= this.headerOutOffset : offset < 0 && this.isFooter && (this.isMoveFooter = offset <= -this.footerOutOffset);
        }
      };
      UISpuerScrollView.prototype._dispatchEvent = function(event) {
        _super.prototype["_dispatchEvent"].call(this, event);
        if ("scroll-ended" == event) {
          this.deltaMove = cc.Vec2.ZERO;
          this.isMoveHeader = false;
          this.isMoveFooter = false;
          this.isAutoBack = false;
          this.isEmitProgress = false;
        }
      };
      UISpuerScrollView.prototype._getContentTopBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) && this.layout.getReallySize().height > viewSize.height ? this.layout.headerBoundaryY + this.layout.paddingTop : this._getContentBottomBoundary() + viewSize.height;
        this.isHeader && this.isLockHeader && (local += this.headerHeight);
        return local;
      };
      UISpuerScrollView.prototype._getContentBottomBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) && this.layout.getReallySize().height > viewSize.height ? this.layout.footerBoundaryY - this.layout.paddingBottom : this.layout.node.y - this.layout.node.getAnchorPoint().y * viewSize.height;
        this.isFooter && this.isLockFooter && (local -= this.footerHeight);
        return local;
      };
      UISpuerScrollView.prototype._getContentLeftBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.header) && this.layout.getReallySize().width > viewSize.width ? this.layout.headerBoundaryX - this.layout.paddingLeft : this.layout.node.x - this.layout.node.getAnchorPoint().x * viewSize.width;
        this.isHeader && this.isLockHeader && (local -= this.headerHeight);
        return local;
      };
      UISpuerScrollView.prototype._getContentRightBoundary = function() {
        var _a;
        var viewSize = this.view.getContentSize();
        var local = 0;
        local = (null === (_a = this.layout) || void 0 === _a ? void 0 : _a.footer) && this.layout.getReallySize().width > viewSize.width ? this.layout.footerBoundaryX + this.layout.paddingRight : this._getContentLeftBoundary() + viewSize.width;
        this.isFooter && this.isLockFooter && (local += this.footerHeight);
        return local;
      };
      UISpuerScrollView.prototype._startAutoScroll = function(deltaMove, timeInSecond, attenuated) {
        if (this.isCalculPull) {
          if (this.isMoveHeader && !this.isLockHeader) {
            this.isLockHeader = true;
            this.vertical && (deltaMove.y -= this.headerHeight);
            this.horizontal && (deltaMove.x += this.headerHeight);
            this.emitPullDownEvent({
              refresh: true,
              progress: 1
            });
          }
          if (this.isMoveFooter && !this.isLockFooter) {
            this.isLockFooter = true;
            this.vertical && (deltaMove.y += this.footerHeight);
            this.horizontal && (deltaMove.x -= this.footerHeight);
            this.emitPullUpEvent({
              refresh: true,
              progress: 1
            });
          }
        }
        _super.prototype["_startAutoScroll"].call(this, deltaMove, timeInSecond, attenuated);
      };
      UISpuerScrollView.prototype._isNecessaryAutoScrollBrake = function() {
        var result = _super.prototype["_isNecessaryAutoScrollBrake"].call(this);
        result && (this.isAutoBack = true);
        return result;
      };
      UISpuerScrollView.prototype._updateScrollBar = function(outOfBoundary) {
        _super.prototype["_updateScrollBar"].call(this, outOfBoundary);
        if (!this.isCalculPull) return;
        if (this["_autoScrollBraking"]) {
          this.emitPullDownEvent({
            refresh: false,
            progress: 0
          });
          this.emitPullUpEvent({
            refresh: false,
            progress: 0
          });
          this.isAutoBack = true;
        }
        if (this.isAutoBack) return;
        if (this.horizontal && 0 == this.deltaMove.x) return;
        var offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;
        if (offset > 0 && this.isHeader && !this.isLockHeader) {
          var progress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
          this.emitPullDownEvent({
            refresh: false,
            progress: progress
          });
          this.emitPullUpEvent({
            refresh: false,
            progress: 0
          });
        } else if (offset < 0 && this.isFooter && !this.isLockFooter) {
          var progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
          this.emitPullUpEvent({
            refresh: false,
            progress: progress
          });
          this.emitPullDownEvent({
            refresh: false,
            progress: 0
          });
        } else {
          this.emitPullDownEvent({
            refresh: false,
            progress: 0
          });
          this.emitPullUpEvent({
            refresh: false,
            progress: 0
          });
        }
      };
      UISpuerScrollView.prototype.emitPullDownEvent = function(data) {
        this.isEmitProgress && cc.Component.EventHandler.emitEvents(this.pullDownEvents, this, data);
      };
      UISpuerScrollView.prototype.emitPullUpEvent = function(data) {
        this.isEmitProgress && cc.Component.EventHandler.emitEvents(this.pullUpEvents, this, data);
      };
      __decorate([ property({
        displayName: "\u9876\u90e8\u504f\u79fb\u91cf",
        tooltip: "\u4e0b\u62c9\u65f6\u8d85\u8fc7\u6b64\u504f\u79fb\u4f1a\u53d1\u9001\u4e0b\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "headerOutOffset", void 0);
      __decorate([ property({
        displayName: "\u9876\u90e8\u9ad8\u5ea6",
        tooltip: "\u5f53\u4e0b\u62c9\u4e8b\u4ef6\u89e6\u53d1\u65f6 \u9876\u90e8\u8ffd\u52a0\u7684\u9ad8\u5ea6"
      }) ], UISpuerScrollView.prototype, "headerHeight", void 0);
      __decorate([ property({
        displayName: "\u5e95\u90e8\u504f\u79fb\u91cf",
        tooltip: "\u4e0a\u62c9\u65f6\u8d85\u8fc7\u6b64\u504f\u79fb\u4f1a\u53d1\u9001\u4e0a\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "footerOutOffset", void 0);
      __decorate([ property({
        displayName: "\u5e95\u90e8\u9ad8\u5ea6",
        tooltip: "\u5f53\u4e0a\u62c9\u4e8b\u4ef6\u89e6\u53d1\u65f6 \u5e95\u90e8\u8ffd\u52a0\u7684\u9ad8\u5ea6"
      }) ], UISpuerScrollView.prototype, "footerHeight", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u4e0b\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "pullDownEvents", void 0);
      __decorate([ property({
        type: cc.Component.EventHandler,
        displayName: "\u4e0a\u62c9\u4e8b\u4ef6"
      }) ], UISpuerScrollView.prototype, "pullUpEvents", void 0);
      UISpuerScrollView = __decorate([ ccclass ], UISpuerScrollView);
      return UISpuerScrollView;
    }(cc.ScrollView);
    exports.default = UISpuerScrollView;
    cc._RF.pop();
  }, {
    "./UISuperLayout": "UISuperLayout"
  } ],
  item: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f7c845RaBRP1K72l1864tqD", "item");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var item = function(_super) {
      __extends(item, _super);
      function item() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.isChange = false;
        return _this;
      }
      item.prototype.show = function(info, index, removeFunc) {
        this.label.string = "" + info.title;
        this.index = index;
        this.removeFunc = removeFunc;
      };
      item.prototype.onRemMe = function() {
        this.removeFunc(this.index);
      };
      item.prototype.onClick = function() {
        this.isChange = !this.isChange;
        this.isChange ? this.node.height *= 10 : this.node.height /= 10;
      };
      __decorate([ property(cc.Label) ], item.prototype, "label", void 0);
      item = __decorate([ ccclass ], item);
      return item;
    }(cc.Component);
    exports.default = item;
    cc._RF.pop();
  }, {} ],
  testPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f08ceM6rcFNG74icWsXSxPT", "testPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UISuperLayout_1 = require("./UISuperLayout");
    var item_1 = require("./item");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var testPanel = function(_super) {
      __extends(testPanel, _super);
      function testPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.layout = null;
        _this.header = null;
        _this.refreshing = null;
        _this.footer = null;
        _this.loading = null;
        _this.isRandomHeight = false;
        _this.isRandomWidth = false;
        _this.total = 0;
        _this.datas = [];
        return _this;
      }
      testPanel.prototype.onLoad = function() {
        for (var i = 0; i < this.total; i++) this.datas.push({
          title: "" + i,
          randomWidth: 100 * (1 + Math.random()),
          randomHeight: 100 * (1 + Math.random())
        });
        this.layout.total(this.datas.length);
      };
      testPanel.prototype.refreshItemEvent = function(node, index) {
        var info = this.datas[index];
        this.isRandomHeight && (node.height = info.randomHeight);
        this.isRandomWidth && (node.width = info.randomWidth);
        node.getComponent(item_1.default).show(info, index, this.onRemoveItem.bind(this));
      };
      testPanel.prototype.toHeader = function() {
        this.layout.scrollToHeader(.5);
      };
      testPanel.prototype.toFooter = function() {
        this.layout.scrollToFooter(.5);
      };
      testPanel.prototype.addItem = function() {
        this.datas.push({
          title: "" + this.datas.length,
          randomWidth: 100 * (1 + Math.random()),
          randomHeight: 100 * (1 + Math.random())
        });
        cc.log("\u6dfb\u52a0\u6570\u636e \u5f53\u524d\u603b\u6570:", this.datas.length);
        this.layout.total(this.datas.length);
      };
      testPanel.prototype.remItem = function() {
        this.datas.pop();
        cc.log("\u5220\u9664\u6570\u636e \u5f53\u524d\u603b\u6570:", this.datas.length);
        this.layout.total(this.datas.length);
      };
      testPanel.prototype.randomHeight = function() {
        this.isRandomHeight = !this.isRandomHeight;
        this.toHeader();
      };
      testPanel.prototype.randomWidth = function() {
        this.isRandomWidth = !this.isRandomWidth;
        this.toHeader();
      };
      testPanel.prototype.pullDownRefresh = function(scroll, event) {
        var _this = this;
        this.playAnim(this.header, event, "\u677e\u5f00\u5237\u65b0\u54e6", "\u7ee7\u7eed\u6ed1");
        if (event.refresh) {
          cc.log("\u5f00\u59cb\u5f02\u6b65\u5237\u65b0\u6570\u636e");
          this.refreshing.active = true;
          for (var i = 0; i < this.datas.length; i++) {
            var data = this.datas[i];
            this.datas[i].title = data.title + " - " + i;
          }
          setTimeout(function() {
            _this.refreshing.active = false;
            cc.log("\u5237\u65b0\u6210\u529f\uff01");
            _this.layout.total(_this.datas.length);
          }, 1e3);
        }
      };
      testPanel.prototype.pullUpLoad = function(scroll, event) {
        var _this = this;
        this.playAnim(this.footer, event, "\u677e\u5f00\u52a0\u8f7d\u66f4\u591a", "\u7ee7\u7eed\u6ed1");
        if (event.refresh) {
          cc.log("\u5f00\u59cb\u5f02\u6b65\u52a0\u8f7d10\u6761\u6570\u636e");
          this.loading.active = true;
          for (var i = 0; i < 10; i++) this.datas.push({
            title: "" + this.datas.length,
            randomWidth: 100 * (1 + Math.random()),
            randomHeight: 100 * (1 + Math.random())
          });
          setTimeout(function() {
            _this.loading.active = false;
            cc.log("\u6570\u636e\u52a0\u8f7d\u6210\u529f\uff01");
            _this.layout.total(_this.datas.length);
          }, 1e3);
        }
      };
      testPanel.prototype.onRemoveItem = function(index) {
        this.datas.splice(index, 1);
        this.layout.total(this.datas.length);
      };
      testPanel.prototype.playAnim = function(node, event, msg1, msg2) {
        node.opacity = 255 * event.progress;
        var scale = this.layout.startAxis == UISuperLayout_1.UISuperAxis.VERTICAL ? cc.v2(1, event.progress) : cc.v2(event.progress, 1);
        event.progress >= 1 ? node.getComponentInChildren(cc.Label).string = msg1 : node.getComponentInChildren(cc.Label).string = msg2;
        if (event.progress >= 1.3) {
          if (!node["playing"]) {
            node.runAction(cc.scaleTo(.618, 1, 1).easing(cc.easeElasticOut(.236)));
            node["playing"] = true;
          }
        } else {
          node.stopAllActions();
          node["playing"] = false;
          node.setScale(scale);
        }
      };
      __decorate([ property(UISuperLayout_1.default) ], testPanel.prototype, "layout", void 0);
      __decorate([ property(cc.Node) ], testPanel.prototype, "header", void 0);
      __decorate([ property(cc.Node) ], testPanel.prototype, "refreshing", void 0);
      __decorate([ property(cc.Node) ], testPanel.prototype, "footer", void 0);
      __decorate([ property(cc.Node) ], testPanel.prototype, "loading", void 0);
      testPanel = __decorate([ ccclass ], testPanel);
      return testPanel;
    }(cc.Component);
    exports.default = testPanel;
    cc._RF.pop();
  }, {
    "./UISuperLayout": "UISuperLayout",
    "./item": "item"
  } ]
}, {}, [ "UISuperItem", "UISuperLayout", "UISuperScrollView", "item", "testPanel" ]);