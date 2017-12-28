import { UploadAction } from '../actions/upload.action';
import { UploadState } from "../models/upload.model";

const initialState: UploadState = {
    upload: {},
    uploading: false
};

export function UploadReducer(state: UploadState = initialState, { type, payload }) {
    switch (type) {
        case UploadAction.UPLOAD_STARTED:
            return {
                ...state,
                ...payload,
            };
        case UploadAction.UPLOAD_SUCCEEDED:
            return {
                ...state,
                ...payload,
            };

        default:
            return state;
    }
}
