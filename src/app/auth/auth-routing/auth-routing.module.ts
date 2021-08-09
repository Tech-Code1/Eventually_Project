import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';


const routes:Routes=[
  {
    path:'',
    component:AuthLayoutComponent,
    children:[
      {
        path:'iniciar-sesion',
        loadChildren:()=> import('../login/login.module').then(x=>x.LoginModule)
      },
      {
        path:'registrarse',
        loadChildren:()=> import('../register/register.module').then(x=>x.RegisterModule)
      },
      {
        path:'recuperar-contraseña',
        loadChildren:()=> import('../recover-password/recover.module').then(x=>x.RecoverModule)
      },
      {
        path:'**',
        pathMatch:'full',
        redirectTo:'/auth/iniciar-sesion'
      }
    ],
  },
  {
    path:'**',
    pathMatch:'full',
    redirectTo:'/auth/iniciar-sesion'
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
export class AuthRoutingModule { }
