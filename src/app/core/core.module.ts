import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { MainNavComponent } from './main-nav/main-nav.component';
import {MatButtonModule, MatMenuModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    SharedModule
  ],
  declarations: [MainNavComponent],
  exports: [MainNavComponent]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
