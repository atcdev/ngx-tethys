import { EventEmitter, ElementRef, OnInit } from '@angular/core';
import { UpdateHostClassService } from '../shared/update-host-class.service';
import { ThyAvatarService } from './avatar.service';
export declare class ThyAvatarComponent implements OnInit {
    private updateHostClassService;
    private elementRef;
    private thyAvatarService;
    _src: string;
    _name: string;
    _size: number;
    _showRemove: boolean;
    avatarSrc: string;
    avatarName?: string;
    _isAvatar: boolean;
    thyOnRemove: EventEmitter<{}>;
    thyShowName: boolean;
    thySrc: string;
    thyName: string;
    thySize: number | string;
    thyShowRemove: boolean;
    thyImgClass: string;
    private _setAvatarSize;
    private _setAvatarSrc;
    private _setAvatarName;
    constructor(updateHostClassService: UpdateHostClassService, elementRef: ElementRef, thyAvatarService: ThyAvatarService);
    ngOnInit(): void;
    remove($event: Event): void;
}
