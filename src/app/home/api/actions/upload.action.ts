import { Injectable } from '@angular/core';
import { UploadState } from '../models/upload.model';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class UploadAction {
    static readonly UPLOAD = 'home/UPLOAD';
    static readonly UPLOAD_STARTED = 'home/UPLOAD_STARTED';
    static readonly UPLOAD_SUCCEEDED = 'home/UPLOAD_SUCCEEDED';
    static readonly UPLOAD_FAILED = 'home/UPLOAD_FAILED';
    static readonly UPLOAD_CANCELLED = 'home/UPLOAD_CANCELLED';

    uploadStart = (payload) => ({
        type: UploadAction.UPLOAD_STARTED,
        payload
    });
    uploadSucceeded = (payload: UploadState) => ({
        type: UploadAction.UPLOAD_SUCCEEDED,
        payload
    });
    uploadFailed = (payload) => ({
        type: UploadAction.UPLOAD_FAILED,
        payload
    });

    @dispatch()
    upload = (payload) => ({
        type: UploadAction.UPLOAD,
        payload
    });

    uploadCanceled = () => ({
        type: UploadAction.UPLOAD_CANCELLED
    });


}
