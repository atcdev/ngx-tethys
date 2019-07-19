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
import { Injectable } from '@angular/core';
var ThyMarkdownParserService = /** @class */ (function () {
    function ThyMarkdownParserService() {
    }
    return ThyMarkdownParserService;
}());
export { ThyMarkdownParserService };
var ThyDefaultMarkdownParserService = /** @class */ (function (_super) {
    __extends(ThyDefaultMarkdownParserService, _super);
    function ThyDefaultMarkdownParserService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThyDefaultMarkdownParserService.prototype.setEmoJies = function () {
        return null;
    };
    ThyDefaultMarkdownParserService.prototype.filterHTML = function (html) {
        return html;
    };
    ThyDefaultMarkdownParserService = __decorate([
        Injectable()
    ], ThyDefaultMarkdownParserService);
    return ThyDefaultMarkdownParserService;
}(ThyMarkdownParserService));
export { ThyDefaultMarkdownParserService };
//# sourceMappingURL=thy-markdown-parser.service.js.map