import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

let routes: Routes = [
  {
    path: "",
    component: ProfileComponent,
  }
]

@NgModule({
  declarations: [
    ProfileComponent
  ],
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
export class UserModule { }
