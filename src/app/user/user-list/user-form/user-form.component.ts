import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../../service/user.service";
import {ErrorState} from "../../../model/error-state";
import {MarkType} from "../../../model/mark-type";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],

})
export class UserFormComponent implements OnInit {
  userForm!: FormGroup; // Use the non-null assertion operator to tell TypeScript that it will be initialized in ngOnInit
  matcher = new ErrorState();
  markTypes = Object.values(MarkType);
  selectedMarkType?: number;

  shifts = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
    'Saturday(1)', 'Saturday(2)', 'Saturday(3)', 'Sunday(1)', 'Sunday(2)', 'Sunday(3)', 'Sunday(4)'];

  constructor(
    private dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { mode: string, formData: any },
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {

    this.userForm = this.formBuilder.group({
      id: [this.data.formData ? this.data.formData.id:''],
      name: [this.data.formData ? this.data.formData.name : '', Validators.required],
      dateOfBirth: [this.data.formData ? this.data.formData.dateOfBirth : '', Validators.required],
      startWorkingDate: [this.data.formData ? this.data.formData.startWorkingDate : '', Validators.required],
      markType: [this.data.formData ? this.data.formData.markType.id : '', Validators.required],
      schedule: this.formBuilder.group({
        shift1: [this.getShiftValue('shift1')],
        shift2: [this.getShiftValue('shift2')],
        shift3: [this.getShiftValue('shift3')],
        shift4: [this.getShiftValue('shift4')],
        shift5: [this.getShiftValue('shift5')],
        shift6: [this.getShiftValue('shift6')],
        shift7: [this.getShiftValue('shift7')],
        shift8: [this.getShiftValue('shift8')],
        shift9: [this.getShiftValue('shift9')],
        shift10: [this.getShiftValue('shift10')],
        shift11: [this.getShiftValue('shift11')],
        shift12: [this.getShiftValue('shift12')],
      }),
    });
  }
  getShiftValue(shiftKey: string): boolean {
    return this.data.formData ? this.data.formData.schedule[shiftKey] : false;
  }

  get scheduleControls() {
    return (this.userForm.get('schedule') as FormGroup).controls as { [key: string]: FormControl };
  }

  saveUser() {
    const userData = this.userForm.value;
console.log(userData);
    if (this.data.mode === 'add') {
      this.userService.addUser(userData).subscribe(
        (response) => {
          this.dialogRef.close(true);
        },
        (error) => {
          // Handle error
        }
      );
    } else if (this.data.mode === 'edit') {
      this.userService.updateUser(userData).subscribe(
        (response) => {
          this.dialogRef.close(true);
        },
        (error) => {
          // Handle error
        }
      );
    }
  }
  closeDialog() {
    this.dialogRef.close(); // Close the dialog without passing any result
  }

}
