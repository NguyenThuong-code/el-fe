import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'user',
    loadChildren:()=> import('./user/user.module').then(b => b.UserModule)
  },
  {
    path:'',
    loadChildren:()=> import('./home/home.module').then(b => b.HomeModule)
  }
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
