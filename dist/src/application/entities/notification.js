"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const crypto_1 = require("crypto");
class Notification {
    constructor(props, id) {
        var _a;
        this._id = id !== null && id !== void 0 ? id : (0, crypto_1.randomUUID)();
        this.props = Object.assign(Object.assign({}, props), { createdAt: (_a = props.createdAt) !== null && _a !== void 0 ? _a : new Date() });
    }
    get id() {
        return this._id;
    }
    set content(content) {
        this.props.content = content;
    }
    get content() {
        return this.props.content;
    }
    set recipientId(recipientId) {
        this.props.recipientId = recipientId;
    }
    get recipientId() {
        return this.props.recipientId;
    }
    set category(category) {
        this.props.category = category;
    }
    get category() {
        return this.props.category;
    }
    read() {
        this.props.readAt = new Date();
    }
    unread() {
        this.props.readAt = null;
    }
    set readAt(readAt) {
        this.props.readAt = readAt;
    }
    get readAt() {
        return this.props.readAt;
    }
    get canceledAt() {
        return this.props.canceledAt;
    }
    cancel() {
        this.props.canceledAt = new Date();
    }
    get createdtAt() {
        return this.props.createdAt;
    }
}
exports.Notification = Notification;
//# sourceMappingURL=notification.js.map