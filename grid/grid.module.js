var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ThyGridComponent } from './grid.component';
import { ThyGridColumnComponent } from './grid-column.component';
import { ThyPaginationModule } from '../pagination/pagination.module';
import { ThySwitchModule } from '../switch/switch.module';
import { ThyLoadingModule } from '../loading/loading.module';
import { ThyEmptyModule } from '../empty/empty.module';
import { SortablejsModule } from 'angular-sortablejs';
import { GridIsValidModelValuePipe } from './grid.pipe';
import { ThyDirectiveModule } from '../directive';
var ThyGridModule = /** @class */ (function () {
    function ThyGridModule() {
    }
    ThyGridModule = __decorate([
        NgModule({
            declarations: [
                ThyGridComponent,
                ThyGridColumnComponent,
                GridIsValidModelValuePipe
            ],
            imports: [
                CommonModule,
                FormsModule,
                ThyPaginationModule,
                ThySwitchModule,
                ThyLoadingModule,
                ThyEmptyModule,
                SortablejsModule,
                ThyDirectiveModule
            ],
            exports: [ThyGridComponent, ThyGridColumnComponent]
        })
    ], ThyGridModule);
    return ThyGridModule;
}());
export { ThyGridModule };
//# sourceMappingURL=grid.module.js.map