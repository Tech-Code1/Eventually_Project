import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let routes: Routes = [
  {
    path: "",
    component: Step1Component,
  },
  {
    path:'**',
    redirectTo:'/crear-comunidad/datos-basicos'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class Step1Module { }
