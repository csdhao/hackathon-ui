import { apply, put, take, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Injectable } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { UploadAction } from '../actions/upload.action';
import { SpinnerService } from '../../../factory';

@Injectable()
export class UploadSaga {
    sagas;
    constructor(private uploadAction: UploadAction, private uploadService: UploadService, private spinnerService: SpinnerService) {
        this.sagas = [
            apply(this, this.watchList, [uploadAction, uploadService, spinnerService]),
        ]
    }

    *watchList(uploadAction, uploadService, spinnerService) {
        yield takeEvery(UploadAction.UPLOAD, this.upload, uploadAction, uploadService, spinnerService);
    }

    *upload(uploadAction, uploadService, spinnerService) {
        try {
            yield put({ type: UploadAction.UPLOAD_STARTED, payload: { uploading: true } });
            spinnerService.show();
            // const uplaod$ = yield apply(uploadService, uploadService.upload)
            const res = yield apply(uploadService, uploadService.upload);
            let status = false;
            while (!status) {
                yield delay(5*1000);
                let res_status = yield apply(uploadService, uploadService.getStatus, [res._body]);
                if(res_status._body == "done"){
                    status = true;
                    break;
                }
            }
            yield put({ type: UploadAction.UPLOAD_SUCCEEDED, payload: { uploading: false } });
            spinnerService.hide();
        } catch (error) {
            yield put({ type: UploadAction.UPLOAD_FAILED, error });
            spinnerService.hide();
        }
    }

}
