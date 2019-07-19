import { EventEmitter, TemplateRef, IterableDiffers, OnInit, DoCheck } from '@angular/core';
import { ThyTransferSelectEvent, ThyTransferItem, ThyTransferDragEvent } from './transfer.interface';
import { ThyTransferComponent } from './transfer.component';
import { SortablejsOptions } from 'angular-sortablejs';
export declare class ThyTransferListComponent implements OnInit, DoCheck {
    private root;
    private differs;
    draggableOptions: SortablejsOptions;
    private _dragModel;
    private _diff;
    title: string;
    items: ThyTransferItem[];
    draggable: boolean;
    template: TemplateRef<any>;
    draggableUpdate: EventEmitter<ThyTransferDragEvent>;
    select: EventEmitter<ThyTransferSelectEvent>;
    hostClass: string;
    constructor(root: ThyTransferComponent, differs: IterableDiffers);
    ngOnInit(): void;
    ngDoCheck(): void;
    onSelect(item: any): void;
    onDragStart(event: any): void;
    onDragUpdate(event: any): void;
}
