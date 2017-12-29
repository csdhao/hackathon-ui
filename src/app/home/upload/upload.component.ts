import { Component, Inject, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatCheckbox, MatFormField, MatSort } from '@angular/material';
import { MatDialog, MatDialogRef } from '@angular/material';

import { select } from '@angular-redux/store';
import { UploadAction } from '../api/actions/upload.action';
import { UploadDialog } from './dialog/upload.dialog';


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
    isUploading = false;

    @select(['home', 'upload', 'uploading']) readonly uploading$: any;

    constructor( @Inject(UploadAction) public uploadAction: any, public dialog: MatDialog) {
        this.uploading$.subscribe(payload => {
            if (this.isUploading && !payload) {
                this.openDialog();
            }
        });
    }
    upload() {
        this.openDialog();

    }

    openDialog() {
        let dialogRef = this.dialog.open(UploadDialog, {
            width: '400px',
            data: {}
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}