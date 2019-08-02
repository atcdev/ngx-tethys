import { InjectionToken } from '@angular/core';
export var THY_CONFIRM_DEFAULT_OPTIONS = new InjectionToken('thy-confirm-default-options');
export var THY_CONFIRM_DEFAULT_OPTIONS_PROVIDER = {
    provide: THY_CONFIRM_DEFAULT_OPTIONS,
    useValue: {
        title: '确认删除',
        okText: '确认',
        okType: 'danger',
        cancelText: 'Cancel'
    }
};
//# sourceMappingURL=confirm.config.js.map
