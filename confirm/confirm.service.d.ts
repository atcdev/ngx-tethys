import { ConfirmOption, ContentKeyParams } from './confirm-option.interface';
import { ThyModalService } from '../modal/modal.service';
import { ThyTranslate } from '../shared';
export declare class ThyConfirmService {
    private modalService;
    private translate;
    private _option;
    constructor(modalService: ThyModalService, translate: ThyTranslate);
    show(option: ConfirmOption): void;
    delete(title: string, content: string, action: Function): void;
    deleteTranslateKey(titleKey: string, contentKey: ContentKeyParams | string, action: Function): void;
    private _formatOption;
}
