var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';
import { ThyPaginationConfig } from './pagination.config';
import { ThyPaginationComponent } from './pagination.component';
import { ThyPaginationPagerComponent } from './pagination-pager.component';
import { ThyPaginationJumpComponent } from './pagination-jump.component';
var ThyPaginationModule = /** @class */ (function () {
    function ThyPaginationModule() {
    }
    ThyPaginationModule = __decorate([
        NgModule({
            declarations: [ThyPaginationComponent, ThyPaginationPagerComponent, ThyPaginationJumpComponent],
            imports: [CommonModule, FormsModule, PaginationModule.forRoot()],
            exports: [PaginationModule, ThyPaginationComponent],
            providers: [
                {
                    provide: PaginationConfig,
                    useClass: ThyPaginationConfig
                }
            ]
        })
    ], ThyPaginationModule);
    return ThyPaginationModule;
}());
export { ThyPaginationModule };
//# sourceMappingURL=pagination.module.js.map