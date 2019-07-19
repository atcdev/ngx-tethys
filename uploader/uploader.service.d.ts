import { Observable } from 'rxjs';
export declare enum ThyUploadStatus {
    started = "started",
    uploading = "uploading",
    done = "done"
}
export interface ThyUploadResponse {
    status: ThyUploadStatus;
    uploadFile?: ThyUploadFile;
}
export interface ThyUploadFile {
    identifier?: string;
    method: string;
    url: string;
    withCredentials?: Boolean;
    nativeFile: File;
    fileField?: string;
    fileName?: string;
    headers?: {
        [key: string]: string;
    };
    data?: {
        [key: string]: string;
    };
    responseStatus?: any;
    response?: any;
    responseHeaders?: any;
    progress?: {
        status: ThyUploadStatus;
        percentage: number;
        speed?: number;
        speedHuman?: string;
        startTime: number | null;
        endTime?: number | null;
        estimatedTime?: number | null;
        estimatedTimeHuman?: string | null;
    };
}
export declare class ThyUploaderService {
    constructor();
    _secondsToHuman(sec: number): string;
    _humanizeBytes(bytes: number): string;
    upload(uploadFile: ThyUploadFile): Observable<ThyUploadResponse>;
}
