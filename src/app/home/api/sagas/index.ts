import { Injectable } from '@angular/core';
import { apply, put, take, takeEvery, all, fork } from 'redux-saga/effects';
import { UploadSaga } from './upload.saga';
import { SearchSaga } from './search.saga';

@Injectable()
export class HomeSaga {
    sagas;
    constructor(private uploadSaga: UploadSaga, private searchSaga: SearchSaga) {
        this.sagas = [
            ...uploadSaga.sagas,
            ...searchSaga.sagas,
        ]
    }
}