import { ElementRef, OnInit } from '@angular/core';
import { ThyMarkdownParserService } from './thy-markdown-parser.service';
export declare class ThyMarkdownParserDirective implements OnInit {
    private elementRef;
    private thyMarkdownParserService;
    value: string;
    thyMarkdownParser: string;
    private liteMarkedOptions;
    constructor(elementRef: ElementRef, thyMarkdownParserService: ThyMarkdownParserService);
    initGantt(): void;
    initMarked(): void;
    initComponent(): void;
    parseMarked(_value: string): any;
    parseMermaid(): void;
    translateHTML(): void;
    ngOnInit(): void;
}
