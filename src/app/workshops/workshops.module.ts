import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkshopsComponent } from './workshops.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

let routes: Routes = [
  {
    path: "",
    component: WorkshopsComponent,
  }
]

@NgModule({
  declarations: [WorkshopsComponent],
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class WorkshopsModule { }
