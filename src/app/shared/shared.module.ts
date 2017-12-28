import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CdkTableModule } from '@angular/cdk/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatSelectModule,
    MatProgressSpinnerModule, MatChipsModule, MatSidenavModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatListModule,
    MatTooltipModule, MatSliderModule, MatDialogModule, MatRadioModule, MatCheckboxModule,
    MatExpansionModule, MatSlideToggleModule, MatTableModule, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
import { SpinnerModule } from '../factory/spinner/spinner.module';
import { HttpModule } from '@angular/http';

const MatModules = [
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatTooltipModule,
    MatSliderModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatTableModule,
    CdkTableModule,
    MatDatepickerModule,
    MatNativeDateModule
];
@NgModule({
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatModules,
        HttpModule,
        SpinnerModule
    ],
    declarations: [

    ],
    exports: [
        CommonModule, FormsModule, ReactiveFormsModule, FlexLayoutModule, MatModules, SpinnerModule
    ]
})
export class SharedModule {
}
