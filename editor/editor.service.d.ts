import { OnInit, OnDestroy, ElementRef, Renderer2 } from '@angular/core';
export interface ThyEditorConfig {
    type?: string;
    placeholder?: string;
    uploadImg?: {
        multiple?: boolean;
        acceptType?: string | string[];
    };
}
export interface ThyEditorOptions {
    placeholder: string;
    fontSize: string;
    theme: string;
    maxHeight: number;
    isHeightFull: boolean;
    className: string;
    autofocus: boolean;
    type: string;
    locale: string;
    hideButtons: string[];
    additionalButtons: string[];
    replaceButtons: string[];
    extendButtons: string[];
    uploadImgMultiple: boolean;
    uploadImgAcceptType: string | string[];
}
export declare class ThyEditorService implements OnInit, OnDestroy {
    private renderer;
    options: ThyEditorOptions;
    toolbars: any;
    headers: any;
    elementRef: ElementRef;
    editorWrap: any;
    textareaDom: any;
    previewDom: any;
    header_action: Boolean;
    isPreview: Boolean;
    tableOptions: {
        table_action: boolean;
        tableActiveX: number;
        tableActiveY: number;
        tableMenu: number[][][];
    };
    constructor(renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    getSelection(): {
        target: any;
        start: any;
        end: any;
        text: any;
    };
    hasSelection(): boolean;
    emojiFn(htmlstr: string): void;
    insertText(text: string, start: number, end: number): void;
    getInsertText(text: string, start: number, end: number): string;
    clearSelection(): void;
    setFocus(star: number, end: number): void;
    isRowFirst(start: number): boolean;
    getRowText(start: number): any;
    insertContent(content: string, change?: Function): void;
    setOptions(config: ThyEditorConfig): void;
    setToolbars(): void;
    initEditor(config: {}, elementRef: ElementRef, editorWrap: ElementRef): void;
    focusEditor(): void;
    blurEditor(): void;
    getLocaleText(key: string): any;
    insert(flag: any, title: string, sel: any, keepSelection: any, search: any, replace: any, change: Function): void;
    styleFn(param: string, event: Event, change: Function): void;
    togglePreview(): void;
    setTextareaHeight(): void;
    setTable(x: number, y: number, action: boolean): void;
    insertTable(change: Function): void;
    clear(): void;
}
