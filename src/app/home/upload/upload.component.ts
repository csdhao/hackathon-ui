import { Component, Inject, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatCheckbox, MatFormField, MatSort } from '@angular/material';

import { select } from '@angular-redux/store';
import { UploadAction } from '../api/actions/upload.action';

// 为 AppComponent 组件类添加注解
@Component({
    selector: 'hackathon-upload',
    templateUrl: 'upload.component.html',
    styleUrls: ['upload.component.scss']
})

export class UploadComponent {
    file = {
        path: '/Users/ding_hao/hackathon/bigData.json',
        host: 'vm10050.global.shareddev.acxiom.net',
        username: 'hading',
        password: '*******',
        port: '22'
    }

    constructor( @Inject(UploadAction) public uploadAction: any) {
    }
    upload() {
        this.uploadAction.upload();
    }
}