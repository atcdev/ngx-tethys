var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThyTreeComponent } from './tree.component';
import { ThyTreeNodeComponent } from './tree-node.component';
import { ThyTreeReplaceRegionComponent } from './tree-replace-region.component';
import { ThyInputModule } from '../input';
import { ThyButtonModule } from '../button';
import { ThyDirectiveModule } from '../directive';
import { SortablejsModule } from 'angular-sortablejs';
import { ThyTreeService } from './tree.service';
import { ThyListModule } from '../list';
import { ThyOptionModule } from '../core/option';
import { FormsModule } from '@angular/forms';
import { ThyLoadingModule } from '../loading';
var ThyTreeModule = /** @class */ (function () {
    function ThyTreeModule() {
    }
    ThyTreeModule = __decorate([
        NgModule({
            declarations: [
                ThyTreeComponent,
                ThyTreeNodeComponent,
                ThyTreeReplaceRegionComponent
            ],
            imports: [
                CommonModule,
                ThyInputModule,
                ThyButtonModule,
                ThyDirectiveModule,
                SortablejsModule,
                FormsModule,
                ThyListModule,
                ThyOptionModule,
                ThyLoadingModule
            ],
            entryComponents: [ThyTreeComponent],
            exports: [
                ThyTreeComponent,
                ThyTreeNodeComponent,
                ThyTreeReplaceRegionComponent
            ],
            providers: [ThyTreeService]
        })
    ], ThyTreeModule);
    return ThyTreeModule;
}());
export { ThyTreeModule };
//# sourceMappingURL=tree.module.js.map