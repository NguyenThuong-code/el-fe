import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../service/user.service";
import {User} from "../../../model/user";

@Component({
  selector: 'co',
  templateUrl: 'common-dialog.component.html',
  styleUrls: ['common-dialog.component.scss']
})
export class CommonDialogComponent  {
  constructor(
      public dialogRef: MatDialogRef<CommonDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: User,
      private userService: UserService// Inject your service
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    console.log(this.data)
    this.userService.deleteUserById(this.data.id)
        .subscribe(response => {
          // Handle the response as needed (e.g., show a success message)
          console.log('User deleted successfully', response);
          this.dialogRef.close(true); // Close the dialog with a success indicator
        }, error => {
          // Handle errors (e.g., show an error message)
          console.error('Error deleting user', error);
          this.dialogRef.close(false); // Close the dialog with a failure indicator
        });
  }
}
