import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const loginRoute:Routes = [
  {
      path:'',
      component:LoginComponent
  },
  {
    path:'**',
    redirectTo:'/auth/Iniciar-sesion'
  }
]


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(loginRoute),
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class LoginModule { }
