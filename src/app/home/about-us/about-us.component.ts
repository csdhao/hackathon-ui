import { Component, Inject, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatCheckbox, MatFormField, MatSort } from '@angular/material';

import { select } from '@angular-redux/store';
 

// 为 AppComponent 组件类添加注解
@Component({
    selector: 'hackathon-about-us',
    templateUrl: 'about-us.component.html',
    styleUrls: ['about-us.component.scss']
})

export class AboutUsComponent {
}