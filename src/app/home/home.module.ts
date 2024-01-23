import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {HomeDisplayComponent} from "./home-display/home-display.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [HomeDisplayComponent],
  imports: [
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ]
})
export class HomeModule { }
