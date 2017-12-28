import { apply, put, take, takeEvery, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { Injectable } from '@angular/core';
import { SearchService } from '../services/search.service';
import { SearchAction } from '../actions/search.action';
import { SpinnerService } from '../../../factory';

@Injectable()
export class SearchSaga {
    sagas;
    constructor(private searchAction: SearchAction, private searchService: SearchService, private spinnerService: SpinnerService) {
        this.sagas = [
            apply(this, this.watchList, [searchAction, searchService, spinnerService]),
        ]
    }

    *watchList(searchAction, searchService, spinnerService) {
        yield takeEvery(SearchAction.SEARCH, this.search, searchAction, searchService, spinnerService);
    }

    *search(searchAction, searchService, spinnerService, action) {
        try {
            yield put({ type: SearchAction.SEARCH_STARTED, payload: { usersLoading: true } });
            spinnerService.show();
            // const uplaod$ = yield apply(searchService, searchService.search)
            const res = yield apply(searchService, searchService.search,[action.payload.search]);
            yield put({ type: SearchAction.SEARCH_SUCCEEDED, payload: { counts: res._body } });
            spinnerService.hide();
        } catch (error) {
            yield put({ type: SearchAction.SEARCH_FAILED, error });
            spinnerService.hide();
        }
    }

}
