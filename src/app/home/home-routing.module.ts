import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { UploadComponent } from './upload/upload.component';
import { SearchComponent } from './search/search.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'upload'
            },
            {
                path: 'upload',
                component: UploadComponent
            },
            {
                path: 'search',
                component: SearchComponent
            },
            {
                path: 'aboutus',
                component: AboutUsComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }
