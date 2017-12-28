// Angular Imports
import { NgModule } from '@angular/core';

// This Module's Components
import { SpinnerComponent } from './spinner.component';
import { SpinnerService } from './spinner.service';

@NgModule({
    imports: [
    ],
    entryComponents: [SpinnerComponent],
    declarations: [
        SpinnerComponent
    ],
    exports: [
        SpinnerComponent
    ],
    providers: [SpinnerService]
})
export class SpinnerModule {

}