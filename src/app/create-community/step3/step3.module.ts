import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step3Component } from './step3.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let routes: Routes = [
  {
    path: "",
    component: Step3Component,
  },
  {
    path:'**',
    redirectTo:'/crear-comunidad/ultimos-detalles'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Step3Module { }
