var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, ComponentFactoryResolver, NgZone } from '@angular/core';
import { RendererFactory2 } from '@angular/core';
import { PopBoxRef } from './pop-box-ref.service';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PopBoxContainerComponent } from './pop-box-container.component';
import { PopBoxOptions, popBoxConfigDefaults } from './pop-box-options.class';
import { ThyPositioningService } from '../positioning/positioning.service';
var ThyPopBoxService = /** @class */ (function () {
    function ThyPopBoxService(componentFactoryResolver, rendererFactory, clf, thyPositioningService, ngZone) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.rendererFactory = rendererFactory;
        this.clf = clf;
        this.thyPositioningService = thyPositioningService;
        this.ngZone = ngZone;
        this._loaders = [];
        this._renderer = rendererFactory.createRenderer(null, null);
    }
    ThyPopBoxService.prototype.show = function (content, config) {
        var _this = this;
        if (config.target && config.position) {
            throw new Error("target and position only set one.");
        }
        var target = config.target && (config.target.nativeElement || config.target);
        var targetLoader = this._loaders.find(function (item) {
            return item.target === target;
        });
        if (targetLoader) {
            // 已经弹出了一样的 Loader， 再次点击直接关闭
            this._hide(targetLoader);
            // 如果 target 有值返回，没有值说明通过 position 传入位置，直接关闭后再次打开
            if (target) {
                return;
            }
        }
        var _config = Object.assign({}, popBoxConfigDefaults, config, {
            target: target
        });
        var loader = this._popBoxLoader = this.clf.createLoader(config.target, null, null);
        var popBoxRef = new PopBoxRef();
        var popBoxContainerRef = loader
            .provide({ provide: PopBoxOptions, useValue: _config })
            .provide({ provide: PopBoxRef, useValue: popBoxRef })
            .attach(PopBoxContainerComponent)
            .to('body')
            // .position({ attachment: _config.placement, target: _config.target, targetOffset: '10px' })
            .show({ content: content, initialState: _config.initialState, popBoxRef: popBoxRef });
        this.thyPositioningService.setPosition({
            target: popBoxContainerRef.location,
            attach: _config.target,
            placement: _config.placement,
            offset: _config.offset,
            appendToBody: true,
            position: _config.position,
            autoAdapt: true
        });
        var _loader = {
            target: target,
            loader: loader,
            config: _config
        };
        if (target) {
            this._renderer.addClass(target, _config.openedClass);
        }
        popBoxRef.hide = function () {
            _this._hide(_loader);
        };
        popBoxRef.content = loader.getInnerComponent() || null;
        this._loaders.push(_loader);
        return popBoxRef;
    };
    ThyPopBoxService.prototype._hide = function (loader) {
        if (loader.config && loader.config.target) {
            this._renderer.removeClass(loader.config.target, loader.config.openedClass);
        }
        this._loaders = this._loaders.filter(function (item) {
            return item.target !== loader.target;
        });
        this.ngZone.runOutsideAngular(function () {
            setTimeout(function () {
                loader.loader.hide();
            });
        });
    };
    ThyPopBoxService.prototype.hide = function () {
        if (this._loaders && this._loaders.length > 0) {
            this._hide(this._loaders[this._loaders.length - 1]);
        }
    };
    ThyPopBoxService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [ComponentFactoryResolver,
            RendererFactory2,
            ComponentLoaderFactory,
            ThyPositioningService,
            NgZone])
    ], ThyPopBoxService);
    return ThyPopBoxService;
}());
export { ThyPopBoxService };
//# sourceMappingURL=pop-box.service.js.map