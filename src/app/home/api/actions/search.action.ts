import { Injectable } from '@angular/core';
import { SearchState } from '../models/search.model';
import { dispatch } from '@angular-redux/store';

@Injectable()
export class SearchAction {
    static readonly SEARCH = 'home/SEARCH';
    static readonly SEARCH_STARTED = 'home/SEARCH_STARTED';
    static readonly SEARCH_SUCCEEDED = 'home/SEARCH_SUCCEEDED';
    static readonly SEARCH_FAILED = 'home/SEARCH_FAILED';
    static readonly SEARCH_CANCELLED = 'home/SEARCH_CANCELLED';

    searchStart = (payload) => ({
        type: SearchAction.SEARCH_STARTED,
        payload
    });
    searchSucceeded = (payload: SearchState) => ({
        type: SearchAction.SEARCH_SUCCEEDED,
        payload
    });
    searchFailed = (payload) => ({
        type: SearchAction.SEARCH_FAILED,
        payload
    });

    @dispatch()
    search = (payload) => ({
        type: SearchAction.SEARCH,
        payload
    });

    searchCanceled = () => ({
        type: SearchAction.SEARCH_CANCELLED
    });


}
