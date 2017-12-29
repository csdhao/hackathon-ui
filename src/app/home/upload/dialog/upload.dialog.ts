import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
    selector: 'upload-dialog',
    templateUrl: 'upload.dialog.html',
})
export class UploadDialog {

    constructor(
        public dialogRef: MatDialogRef<UploadDialog>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

}