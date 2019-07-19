import { Observable } from 'rxjs';
export declare class ThyTranslate {
    instant(key: string | Array<string>, interpolateParams?: Object): string | any;
    get(key: string | Array<string>, interpolateParams?: Object): Observable<string | any>;
}
