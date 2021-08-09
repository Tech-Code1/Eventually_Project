import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TokenGuard } from '../../guards/token.guard';


const routes:Routes=[
      {
        path:'datos-basicos',
        loadChildren:()=> import('../step1/step1.module').then(x=>x.Step1Module),
        canActivate:[
          TokenGuard
        ]
      },
      {
        path:'conociendo-la-comunidad',
        loadChildren:()=> import('../step2/step2.module').then(x=>x.Step2Module),
        canActivate:[
          TokenGuard
        ]
      },
      {
        path:'ultimos-detalles',
        loadChildren:()=> import('../step3/step3.module').then(x=>x.Step3Module),
        canActivate:[
          TokenGuard
        ]
      },
      {
        path:'crear-comunidad',
        loadChildren:()=> import('../../create-community/create-community.module').then(x=>x.CreateCommunityModule),
        canActivate:[
          TokenGuard
        ]
      }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class CreateCommunityRoutingModule { }
