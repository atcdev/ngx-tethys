import { Component, Input, ElementRef, HostBinding, OnInit } from '@angular/core';
import { isNumber } from '../util/helpers';
import { UpdateHostClassService } from '../shared/update-host-class.service';

const sizeArray = [22, 24, 30, 38, 48, 68, 110, 160, 320];
const DEFAULT_SIZE = 38;

@Component({
    selector: 'thy-avatar',
    templateUrl: './avatar.component.html',
    providers: [
        UpdateHostClassService
    ]
})
export class ThyAvatarComponent implements OnInit {

    _src: string;
    _name: string;
    _size: number;

    public avatarSrc: string;
    public avatarName?: string;

    @HostBinding('class.thy-avatar') _isAvatar = true;

    @Input() thyShowName: boolean;

    @Input()
    set thySrc(value: string) {
        this._setAvatarSrc(value);
    }

    @Input()
    set thyName(value: string) {
        this._name = value;
        this._setAvatarName();
    }

    @Input()
    set thySize(value: number) {
        this._setAvatarSize(value * 1);
    }

    // @Input()
    // set thyMember(value: AvatarMemberInfo) {
    //     this._member = value;
    //     this._setAvatarSrc(this._member && this._member.avatar);
    //     this._setAvatarName();
    // }

    private _setAvatarSize(size: number) {
        if (sizeArray.indexOf(size) > -1) {
            this._size = size;
        } else if (size > sizeArray[sizeArray.length - 1]) {
            this._size = sizeArray[sizeArray.length - 1];
        } else {
            this._size = DEFAULT_SIZE;
        }
    }

    private _setAvatarSrc(src: string) {
        this._src = src;
    }

    private _setAvatarName() {
        this.avatarName = this._name;
    }

    constructor(
        private updateHostClassService: UpdateHostClassService,
        private elementRef: ElementRef
    ) {
        updateHostClassService.initializeElement(elementRef.nativeElement);
    }

    ngOnInit() {
        if (!this._size) {
            this._setAvatarSize(DEFAULT_SIZE);
        }
        this.updateHostClassService.updateClass([`thy-avatar-${this._size}`]);
    }
}
