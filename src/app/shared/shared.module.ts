import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { RouterModule } from '@angular/router';
import { NewCommunityComponent } from './new-community/new-community.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavAuthComponent,
    NewCommunityComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    NavAuthComponent,
    NewCommunityComponent
  ]
})
export class SharedModule { }
