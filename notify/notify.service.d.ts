import { ThyNotifyOption } from './notify-option.interface';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { Subject } from 'rxjs';
export declare class ThyNotifyService {
    private clf;
    notifyQueue$: Subject<any>;
    private _notifyQueue;
    private _option;
    private _lastNotifyId;
    private _notifyLoader;
    constructor(clf: ComponentLoaderFactory);
    show(option: ThyNotifyOption): void;
    success(title?: string, content?: string, detail?: string): void;
    info(title?: string, content?: string, detail?: string): void;
    warning(title?: string, content?: string, detail?: string): void;
    error(title?: string, content?: string, detail?: string): void;
    removeItemById(id: number): void;
    private _loadNotifyContainerComponent;
    private _formatOption;
}
