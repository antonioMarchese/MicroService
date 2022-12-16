"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Content = void 0;
class Content {
    get value() {
        return this.content;
    }
    validationContentLenght(content) {
        return content.length >= 5 && content.length <= 240;
    }
    constructor(content) {
        const isContentLengthValid = this.validationContentLenght(content);
        if (!isContentLengthValid) {
            throw new Error('Content length error.');
        }
        this.content = content;
    }
}
exports.Content = Content;
//# sourceMappingURL=content.js.map