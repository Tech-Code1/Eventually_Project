import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor( private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.loginFormGroup = formBuilder
      .group(
        {
          email:["",{Validators: [Validators.required, Validators.email]}],
          password:["", {validators: [Validators.required]}]
        }
      )
     }

  ngOnDestroy(): void {
    this.componentSusbcriptions.unsubscribe();
  }

     componentSusbcriptions: Subscription = new Subscription();
    loginFormGroup: FormGroup

  ngOnInit(): void {
  }

  login() {
    if(!this.loginFormGroup.valid){
      return;
    }

    this.componentSusbcriptions
    .add( this.authService.login(this.loginFormGroup.value)
    .subscribe(()=> {
      this.router.navigate(['/inicio'])
      Swal.fire("Bienvenid@")
    }))
  }
}
