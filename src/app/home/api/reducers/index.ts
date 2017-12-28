import { combineReducers } from 'redux';
import { UploadReducer } from "./upload.reducer";
import { SearchReducer } from "./search.reducer";

export const HomeReducer = combineReducers({
    upload: UploadReducer,
    search: SearchReducer,
});
