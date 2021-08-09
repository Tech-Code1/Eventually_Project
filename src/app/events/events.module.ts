import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

let routes: Routes = [
  {
    path: "",
    component: EventsComponent,
  }
]

@NgModule({
  declarations: [EventsComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class EventsModule { }
