var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export var ThyUploadStatus;
(function (ThyUploadStatus) {
    ThyUploadStatus["started"] = "started";
    ThyUploadStatus["uploading"] = "uploading";
    ThyUploadStatus["done"] = "done";
})(ThyUploadStatus || (ThyUploadStatus = {}));
var ThyUploaderService = /** @class */ (function () {
    function ThyUploaderService() {
    }
    ThyUploaderService.prototype._secondsToHuman = function (sec) {
        return new Date(sec * 1000).toISOString().substr(11, 8);
    };
    ThyUploaderService.prototype._humanizeBytes = function (bytes) {
        if (bytes === 0) {
            return '0 Byte';
        }
        var k = 1024;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    ThyUploaderService.prototype.upload = function (uploadFile) {
        var _this = this;
        uploadFile.fileName = uploadFile.fileName || uploadFile.nativeFile.name;
        return new Observable(function (observer) {
            var xhr = new XMLHttpRequest();
            var time = new Date().getTime();
            var speed = 0;
            var estimatedTime = null;
            if (!uploadFile.progress) {
                uploadFile.progress = {
                    status: ThyUploadStatus.started,
                    percentage: 0,
                    startTime: time
                };
            }
            xhr.upload.addEventListener('progress', function (event) {
                if (event.lengthComputable) {
                    var percentage = Math.round((event.loaded * 100) / event.total);
                    if (percentage === 100) {
                        percentage = 99;
                    }
                    var diff = new Date().getTime() - time;
                    speed = Math.round(event.loaded / diff * 1000);
                    var progressStartTime = (uploadFile.progress && uploadFile.progress.startTime) || new Date().getTime();
                    estimatedTime = Math.ceil((event.total - event.loaded) / speed);
                    uploadFile.progress.status = ThyUploadStatus.uploading;
                    uploadFile.progress.percentage = percentage;
                    uploadFile.progress.speed = speed;
                    uploadFile.progress.speedHuman = _this._humanizeBytes(speed) + "/s";
                    uploadFile.progress.startTime = progressStartTime;
                    uploadFile.progress.estimatedTime = estimatedTime;
                    uploadFile.progress.estimatedTimeHuman = _this._secondsToHuman(estimatedTime);
                    observer.next({ status: ThyUploadStatus.uploading, uploadFile: uploadFile });
                }
            }, false);
            xhr.upload.addEventListener('error', function (e) {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    var speedTime = (new Date().getTime() - uploadFile.progress.startTime) * 1000;
                    var speedAverage = Math.round(uploadFile.nativeFile.size / speedTime);
                    uploadFile.progress.status = ThyUploadStatus.done;
                    uploadFile.progress.percentage = 100;
                    uploadFile.progress.speed = speedAverage;
                    uploadFile.progress.speedHuman = _this._humanizeBytes(speed) + "/s";
                    uploadFile.progress.estimatedTime = estimatedTime;
                    uploadFile.progress.estimatedTimeHuman = _this._secondsToHuman(estimatedTime || 0);
                    uploadFile.responseStatus = xhr.status;
                    try {
                        uploadFile.response = JSON.parse(xhr.response);
                    }
                    catch (e) {
                        uploadFile.response = xhr.response;
                    }
                    // file.responseHeaders = this.parseResponseHeaders(xhr.getAllResponseHeaders());
                    observer.next({ status: ThyUploadStatus.done, uploadFile: uploadFile });
                    observer.complete();
                }
            };
            xhr.open(uploadFile.method, uploadFile.url, true);
            xhr.withCredentials = uploadFile.withCredentials ? true : false;
            try {
                var formData_1 = new FormData();
                Object.keys(uploadFile.data || {}).forEach(function (key) { return formData_1.append(key, uploadFile.data[key]); });
                Object.keys(uploadFile.headers || {}).forEach(function (key) { return xhr.setRequestHeader(key, uploadFile.headers[key]); });
                formData_1.append(uploadFile.fileField || 'file', uploadFile.nativeFile, uploadFile.fileName);
                observer.next({ status: ThyUploadStatus.started, uploadFile: uploadFile });
                xhr.send(formData_1);
            }
            catch (error) {
                observer.error(error);
                observer.complete();
            }
            return function () {
                xhr.abort();
            };
        });
    };
    ThyUploaderService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [])
    ], ThyUploaderService);
    return ThyUploaderService;
}());
export { ThyUploaderService };
//# sourceMappingURL=uploader.service.js.map