import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1/step1.component';
import { CreateCommunityRoutingModule } from './create-community-routing/create-community-routing.module';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { CreateCommunityComponent } from './create-community.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComunityCreationService } from './services/comunity-creation.service';

let routes: Routes = [
  {
    path: "",
    component: CreateCommunityComponent,
  },
  {
    path:'**',
    redirectTo:'/crear-comunidad'
  }
]

@NgModule({
  declarations: [
    Step1Component,
    Step2Component,
    Step3Component,
    CreateCommunityComponent
  ],
  exports: [
    Step1Component
  ],
  imports: [
    CommonModule,
    CreateCommunityRoutingModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[
    ComunityCreationService
  ]
})
export class CreateCommunityModule { }
