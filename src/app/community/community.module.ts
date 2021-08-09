import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';

let routes: Routes = [
  {
    path: "",
    component: CommunityComponent,
  }
]


@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    CommunityComponent,
  ],
  exports: [
    RouterModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class CommunityModule { }
