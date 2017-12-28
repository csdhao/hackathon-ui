import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import logger from 'redux-logger';
import 'hammerjs';
import freeze from 'redux-freeze';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rootReducer } from './store/reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideReduxForms } from '@angular-redux/form';
import { HomeModule } from './home/home.module';
import createSagaMiddleware from 'redux-saga';
import { RootSaga } from './store/saga';
import { HomeSaga } from './home/api/sagas';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        NgReduxRouterModule,
        NgReduxModule,
        SharedModule,
        CoreModule,
        AppRoutingModule,
        HomeModule
    ],
    providers: [RootSaga, HomeSaga],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(
        ngRedux: NgRedux<any>,
        ngReduxRouter: NgReduxRouter,
        devTools: DevToolsExtension,
        rootSaga: RootSaga
    ) {
        const sagaMiddleware = createSagaMiddleware();
        const middleware = isDevMode() ?
            [
                // freeze,
                logger,
                // createEpicMiddleware(rootEpic),
                sagaMiddleware
            ] :
            [
                logger,
                // createEpicMiddleware(rootEpic),
                sagaMiddleware
            ];

        ngRedux.configureStore(
            rootReducer,
            {},
            middleware,
            devTools.isEnabled() ? [devTools.enhancer()] : []);
        sagaMiddleware.run(rootSaga.sagas);
        ngReduxRouter.initialize();
        provideReduxForms(ngRedux);
    }
}
