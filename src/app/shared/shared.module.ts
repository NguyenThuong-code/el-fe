import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {NavBarComponent} from "./nav-bar/nav-bar.component";
import { CommonDialogComponent } from './function/common-dialog/common-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {UserModule} from "../user/user.module";


@NgModule({
  declarations: [NavBarComponent, CommonDialogComponent],
  exports: [
    NavBarComponent
  ],
    imports: [
        CommonModule,
        SharedRoutingModule,
        MatDialogModule,
        MatButtonModule,
        UserModule
    ]
})
export class SharedModule { }
