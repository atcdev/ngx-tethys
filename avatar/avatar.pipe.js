var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Pipe } from '@angular/core';
import { ThyAvatarService } from './avatar.service';
var AvatarShortNamePipe = /** @class */ (function () {
    function AvatarShortNamePipe() {
    }
    AvatarShortNamePipe.prototype.transform = function (name) {
        if (!name) {
            return;
        }
        name = name.trim();
        if (/^[\u4e00-\u9fa5]+$/.test(name)) {
            if (name.length > 2) {
                return name.substr(name.length - 2, 2);
            }
        }
        if (/^[a-zA-Z\/ ]+$/.test(name)) {
            if (name.indexOf(' ') > 0) {
                var ens = name.split(' ');
                return (ens[0].substr(0, 1) + ens[1].substr(0, 1)).toUpperCase();
            }
        }
        if (name.length > 2) {
            return name.substr(0, 2).toUpperCase();
        }
        return name.toUpperCase();
    };
    AvatarShortNamePipe = __decorate([
        Pipe({ name: 'avatarShortName' })
    ], AvatarShortNamePipe);
    return AvatarShortNamePipe;
}());
export { AvatarShortNamePipe };
var AvatarBgColorPipe = /** @class */ (function () {
    function AvatarBgColorPipe() {
    }
    AvatarBgColorPipe.prototype.transform = function (name) {
        if (!name) {
            return;
        }
        var colors = ['#2cccda', '#2dbcff', '#4e8af9', '#7076fa', '#9473fd', '#ef7ede', '#99d75a', '#66c060', '#39ba5d'];
        var nameArray = name.split('');
        var code = name && name.length > 0 ? nameArray.reduce(function (result, item) {
            result.value += item.charCodeAt(0);
            return result;
        }, { value: 0 }).value : 0;
        return {
            'background-color': colors[(code % 9)]
        };
    };
    AvatarBgColorPipe = __decorate([
        Pipe({ name: 'avatarBgColor' })
    ], AvatarBgColorPipe);
    return AvatarBgColorPipe;
}());
export { AvatarBgColorPipe };
var AvatarSrcPipe = /** @class */ (function () {
    function AvatarSrcPipe(thyAvatarService) {
        this.thyAvatarService = thyAvatarService;
    }
    AvatarSrcPipe.prototype.transform = function (src, size) {
        return this.thyAvatarService.avatarSrcTransform(src, size);
    };
    AvatarSrcPipe = __decorate([
        Pipe({ name: 'thyAvatarSrc' }),
        __metadata("design:paramtypes", [ThyAvatarService])
    ], AvatarSrcPipe);
    return AvatarSrcPipe;
}());
export { AvatarSrcPipe };
export var AvatarPipes = [
    AvatarShortNamePipe,
    AvatarBgColorPipe,
    AvatarSrcPipe
];
//# sourceMappingURL=avatar.pipe.js.map