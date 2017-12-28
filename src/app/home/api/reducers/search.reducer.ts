import { SearchAction } from '../actions/search.action';
import { SearchState } from "../models/search.model";

const initialState: SearchState = {
    search: {},
    counts: 0,
    searching: false
};

export function SearchReducer(state: SearchState = initialState, { type, payload }) {
    switch (type) {
        case SearchAction.SEARCH_STARTED:
            return {
                ...state,
                ...payload,
            };
        case SearchAction.SEARCH_SUCCEEDED:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
}
