import { EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ThyModalService } from './modal.service';
export declare class ModalHeaderComponent implements OnInit {
    private bsModalService;
    private thyModalService;
    headerTemplate: TemplateRef<any>;
    isTemplateRef: boolean;
    constructor(bsModalService: BsModalService, thyModalService: ThyModalService);
    thyTitle: string;
    thyIcon: string;
    thyOnClose: EventEmitter<any>;
    ngOnInit(): void;
    closeModal(event?: Event): void;
}
