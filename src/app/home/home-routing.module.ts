import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserListComponent} from "../user/user-list/user-list.component";
import {HomeDisplayComponent} from "./home-display/home-display.component";

const routes: Routes = [
  {
    path: '',
    component:HomeDisplayComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
