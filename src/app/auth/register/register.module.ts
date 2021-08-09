import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const registerRoute:Routes =[
  {
    path:'',
    component:RegisterComponent
  },
  {
    path:'**',
    redirectTo:'/auth/registro'
  }
]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoute),
    ReactiveFormsModule,
    FormsModule
  ],
  exports:[
    RouterModule
  ]
})
export class RegisterModule { }
