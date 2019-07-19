import { TemplateRef, OnInit } from '@angular/core';
import { ThySlideService } from '../slide.service';
export declare class ThySlideHeaderComponent implements OnInit {
    private thySlideService;
    slideLayoutHeader: boolean;
    thyTitle: string;
    thyIcon: string;
    headerTemplate: TemplateRef<any>;
    headerOperateTemplate: TemplateRef<any>;
    constructor(thySlideService: ThySlideService);
    ngOnInit(): void;
    closeModal(event: Event): void;
}
