var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from '@angular/core';
var SelectSearchFilterPipe = /** @class */ (function () {
    function SelectSearchFilterPipe() {
    }
    SelectSearchFilterPipe.prototype.transform = function (value) {
        console.log(value);
    };
    SelectSearchFilterPipe = __decorate([
        Pipe({ name: 'selectSearchFilter' })
    ], SelectSearchFilterPipe);
    return SelectSearchFilterPipe;
}());
export { SelectSearchFilterPipe };
export var SelectPipes = [
    SelectSearchFilterPipe
];
//# sourceMappingURL=select.pipe.js.map