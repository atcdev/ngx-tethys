var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ThySlideOption, thySlideOptionDefaults } from './slide-options.class';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ThySlideContainerComponent } from './slide-container.component';
import { ThySlideRef } from './slide-ref.service';
var ThySlideService = /** @class */ (function () {
    function ThySlideService(clf) {
        this.clf = clf;
        this.openedSlideRefs = [];
        this._isHide = false;
    }
    ThySlideService.prototype.show = function (content, config) {
        var _this = this;
        this._isHide = false;
        setTimeout(function () {
            _this._show(content, config);
        });
    };
    ThySlideService.prototype._show = function (content, config) {
        var _this = this;
        if (this.openedSlideRefs.length > 0) {
            var openedSlideRef = this.openedSlideRefs[this.openedSlideRefs.length - 1];
            if (openedSlideRef && openedSlideRef.config) {
                var oldKey = openedSlideRef.config.key;
                var newKey = config && config.key;
                if (oldKey && newKey && oldKey === newKey) {
                    this.hide();
                    return;
                }
            }
        }
        this._config = Object.assign({}, thySlideOptionDefaults, config);
        this._slideLoader = this.clf.createLoader(null, null, null);
        var thySlideRef = new ThySlideRef();
        thySlideRef.hide = function () {
            _this.hide();
        };
        thySlideRef.content = content || null;
        this._slideLoader
            .provide({ provide: ThySlideRef, useValue: thySlideRef })
            .provide({ provide: ThySlideOption, useValue: this._config })
            .attach(ThySlideContainerComponent)
            .to('body')
            .show({
            content: content,
            initialState: this._config.initialState,
            thySlideRef: thySlideRef,
            thySlideService: this
        });
        this.openedSlideRefs.push({
            config: this._config,
            thySlideRef: this._slideLoader
        });
    };
    ThySlideService.prototype.hide = function () {
        this._isHide = true;
        this._hide();
    };
    ThySlideService.prototype._hide = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.openedSlideRefs.length > 0) {
                var openedSlideRef = _this.openedSlideRefs[_this.openedSlideRefs.length - 1];
                if (openedSlideRef && openedSlideRef.thySlideRef) {
                    openedSlideRef.thySlideRef.hide();
                    _this.openedSlideRefs.splice(_this.openedSlideRefs.length - 1, 1);
                }
            }
        }, 200);
    };
    ThySlideService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ComponentLoaderFactory])
    ], ThySlideService);
    return ThySlideService;
}());
export { ThySlideService };
//# sourceMappingURL=slide.service.js.map