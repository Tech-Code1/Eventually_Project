import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverPasswordComponent } from './recover-password.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const recoverRoute:Routes = [
  {
      path:'',
      component: RecoverPasswordComponent
  },
  {
    path:'**',
    redirectTo:'/auth/recuperar-contraseña'
  }
]


@NgModule({
  declarations: [RecoverPasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(recoverRoute),
    ReactiveFormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class RecoverModule { }
