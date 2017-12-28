import { combineReducers } from 'redux';
import { routerReducer } from '@angular-redux/router';
import { composeReducers, defaultFormReducer } from '@angular-redux/form';
import { HomeReducer } from '../home/api/reducers';

export const rootReducer = composeReducers(
    defaultFormReducer(),
    combineReducers({
        router: routerReducer,
        home: HomeReducer
    })
);
