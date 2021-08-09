import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

let routes: Routes = [
  {
    path: "",
    component: ShopComponent,
  }
]

@NgModule({
  declarations: [ShopComponent],
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
export class ShopModule { }
