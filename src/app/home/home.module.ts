import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from '../shared/shared.module';

import { UploadComponent } from './upload/upload.component';
import { UploadAction } from './api/actions/upload.action';
import { UploadSaga } from './api/sagas/upload.saga';
import { UploadService } from './api/services/upload.service';

import { SearchComponent } from './search/search.component';
import { SearchAction } from './api/actions/search.action';
import { SearchSaga } from './api/sagas/search.saga';
import { SearchService } from './api/services/search.service';

import { AboutUsComponent } from './about-us/about-us.component';
import { UploadDialog } from './upload/dialog/upload.dialog';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        FlexLayoutModule
    ],
    declarations: [
        UploadComponent, SearchComponent, HomeComponent, AboutUsComponent, UploadDialog
    ],
    entryComponents: [UploadDialog],
    bootstrap: [

    ],
    providers: [
        UploadAction, UploadSaga, UploadService, SearchAction, SearchSaga, SearchService
    ]
})

export class HomeModule { }

