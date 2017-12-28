import { Injectable } from '@angular/core';
import { all } from 'redux-saga/effects';
import { HomeSaga } from '../home/api/sagas';


@Injectable()
export class RootSaga {
    public sagas;

    constructor(private homeSaga: HomeSaga) {
        this.sagas = function* () {
            yield all([...homeSaga.sagas]);
        }
    }
}