import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlreadyLoggedInGuard } from './guards/already-logged-in.guard';
import { CreateCommunityRoutingModule } from './create-community/create-community-routing/create-community-routing.module';
import { TokenGuard } from './guards/token.guard';

const routes: Routes = [
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(x=>x.AuthModule),
    canActivate:[AlreadyLoggedInGuard]
  },
  {
    path:'comunidades',
    loadChildren: ()=> import('./community/community.module').then(x=>x.CommunityModule)
  },
  {
    path:'crear-comunidad',
    loadChildren: ()=> import('./create-community/create-community.module').then(x=>x.CreateCommunityModule)
  },
  {
    path:'tienda',
    loadChildren: ()=> import('./shop/shop.module').then(x=>x.ShopModule)
  },
  {
    path:'talleres',
    loadChildren: ()=> import('./workshops/workshops.module').then(x=>x.WorkshopsModule)
  },
  {
    path:'eventos',
    loadChildren: ()=> import('./events/events.module').then(x=>x.EventsModule)
  },
  {
    path:'inicio',
    loadChildren: ()=> import('./home/home.module').then(x=>x.HomeModule)
  },
  {
    path:'perfil',
    loadChildren: ()=> import('./user/user.module').then(x=>x.UserModule)
  },
  {
    path:'**',
    redirectTo:'/auth/iniciar-sesion'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
