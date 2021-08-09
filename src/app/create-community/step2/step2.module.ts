import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step2Component } from './step2.component';
import { RouterModule, Routes } from '@angular/router';

let routes: Routes = [
  {
    path: "",
    component: Step2Component,
  },
  {
    path:'**',
    redirectTo:'/crear-comunidad/conociendo-la-comunidad'
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Step2Module { }
