"use strict";
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