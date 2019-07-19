var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { ThyRowDirective } from './thy-row.directive';
import { ThyColDirective } from './thy-clo.directive';
import { ThyAutofocusDirective } from './thy-autofocus.directive';
import { ThyEnterDirective } from './thy-enter.directive';
import { ThyCtrlEnterDirective } from './thy-ctrl-enter.directive';
import { ThyShowDirective } from './thy-show';
import { ThyStopPropagationDirective } from './thy-stop-propagation.directive';
import { ThyMarkdownParserDirective } from './thy-markdown/thy-markdown-parser.directive';
import { ThyMarkdownParserService, ThyDefaultMarkdownParserService } from './thy-markdown/thy-markdown-parser.service';
import { ThyContextMenuDirective } from './thy-contextmenu.directive';
var ThyDirectiveModule = /** @class */ (function () {
    function ThyDirectiveModule() {
    }
    ThyDirectiveModule = __decorate([
        NgModule({
            declarations: [
                ThyRowDirective,
                ThyColDirective,
                ThyAutofocusDirective,
                ThyEnterDirective,
                ThyCtrlEnterDirective,
                ThyShowDirective,
                ThyStopPropagationDirective,
                ThyMarkdownParserDirective,
                ThyContextMenuDirective
            ],
            exports: [
                ThyRowDirective,
                ThyColDirective,
                ThyCtrlEnterDirective,
                ThyAutofocusDirective,
                ThyEnterDirective,
                ThyShowDirective,
                ThyStopPropagationDirective,
                ThyMarkdownParserDirective,
                ThyContextMenuDirective
            ],
            providers: [
                {
                    provide: ThyMarkdownParserService,
                    useClass: ThyDefaultMarkdownParserService
                }
            ],
        })
    ], ThyDirectiveModule);
    return ThyDirectiveModule;
}());
export { ThyDirectiveModule };
//# sourceMappingURL=module.js.map