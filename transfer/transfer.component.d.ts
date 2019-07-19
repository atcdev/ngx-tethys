import { EventEmitter, TemplateRef, OnInit } from '@angular/core';
import { ThyTransferItem, ThyTransferChangeEvent, ThyTransferSelectEvent, ThyTransferDragEvent } from './transfer.interface';
export declare class ThyTransferComponent implements OnInit {
    hostClass: string;
    leftDataSource: ThyTransferItem[];
    rightDataSource: ThyTransferItem[];
    leftTitle: string;
    rightTitle: string;
    leftDraggable: boolean;
    rightDraggable: boolean;
    private _canMove;
    private _autoMove;
    thyData: ThyTransferItem[];
    thyTitles: string[];
    thyAutoMove: boolean;
    thyCanMove: Function;
    thyLeftDraggable: boolean;
    thyRightDraggable: boolean;
    thyDraggableUpdate: EventEmitter<ThyTransferDragEvent>;
    thyChange: EventEmitter<ThyTransferChangeEvent>;
    templateRef: TemplateRef<any>;
    ngOnInit(): void;
    initializeTransferData(data: ThyTransferItem[]): void;
    onSelect(from: string, event: ThyTransferSelectEvent): void;
    onMove(to: string): void;
    onDragUpdate(event: ThyTransferDragEvent): void;
}
export declare enum TransferDirection {
    left = "left",
    right = "right"
}
