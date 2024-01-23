import {UserListComponent} from "./user-list/user-list.component";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgModule} from "@angular/core";
import {UserRoutingModule} from "./user-routing.module";
import { UserScheduleComponent } from './user-list/user-schedule/user-schedule.component';
import {MatIconModule} from "@angular/material/icon";

import { UserFormComponent } from './user-list/user-form/user-form.component';
import {MatDatepickerModule} from "@angular/material/datepicker";


import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
    declarations: [
        UserListComponent,
        UserScheduleComponent,
        UserFormComponent
    ],
    exports: [
        UserListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatTableModule,
        MatCheckboxModule,
        MatPaginatorModule,
        MatDialogModule,
        MatFormFieldModule,
        UserRoutingModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,

    ]
})
export class UserModule { }
