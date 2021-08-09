import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing/home-routing.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { HomeMidSectionComponent } from './home-mid-section/home-mid-section.component';
import { HomeEndSectionComponent } from './home-end-section/home-end-section.component';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    HomeLayoutComponent,
    HomeHeaderComponent,
    HomeMidSectionComponent,
    HomeEndSectionComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
