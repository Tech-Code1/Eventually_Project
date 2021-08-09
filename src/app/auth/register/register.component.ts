import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { element } from 'protractor';
import { AuthService } from '../services/auth.service';
import { AreaOfInterest, SelectAreaOfInterest } from './areaOfInterest';
import { registerDTO } from '../../DTOs/registerDTO';
import Swal from 'sweetalert2';
import { AreasService } from 'src/app/shared/services/areas.service';
import { map } from 'rxjs/operators';
import { AreaDTO } from '../../shared/DTOs/AreaDTO';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  step:any = 1;
  submitted: any = false;

  public stepStyle!: {
    title: string;
    validated: boolean;
    withoutValidating: boolean;
  };

  multistep = new FormGroup ({
    userDetails: new FormGroup({
      nick: new FormControl("", Validators.required),
      email: new FormControl("")
    }),

    userPass: new FormGroup({
      pass: new FormControl(""),
      passRepeat: new FormControl("")
    }),

      userAreaOfInterest: new FormGroup({
      areaOfInterest: new FormControl(0)
    })
  })


  areaOfInterest: AreaOfInterest[];
  /* areaSelected: Number = 0; */
  areaSelected: any = {};
  selectAreaOfInterest: AreaOfInterest[]
  clickNumber: Number=0;


  constructor(private renderer2: Renderer2,
    private authService: AuthService,
    private router: Router,
    public areaService: AreasService) {
    this.areaOfInterest = []
    this.selectAreaOfInterest = []

  }


  ngOnInit(): void {

    this.areaService.areas$.pipe(
      map(resp =>
      {
        let originalAreas = resp.slice(0)
        let areaDTOs: AreaDTO[] = [
          {
            name: "Seleccionar área",
            id: 0
          }
        ]

        return areaDTOs.concat(resp.slice(0));
      })
    ).subscribe(
      areas => this.areaOfInterest = areas
    )

    this.areaSelected = 0;

    this.multistep.get("userAreaOfInterest")?.get("areaOfInterest")?.valueChanges.subscribe((option:number) => {
      if (option == 0){
        return
      }
      let currentOption = this.areaOfInterest.find(area => area.id == option)
      console.log(currentOption);
      if(currentOption){
        this.selectAreaOfInterest.push(currentOption);
        this.multistep.get("userAreaOfInterest")?.get("areaOfInterest")?.setValue(0)

        console.log(this.selectAreaOfInterest);
        this.areaOfInterest = this.areaOfInterest.filter(area => area.id != option)
      }
    })

  }

  removeArea(area:AreaOfInterest){
    this.selectAreaOfInterest = this.selectAreaOfInterest.filter(areaRemove => areaRemove.id != area.id)
    this.areaOfInterest.push(area)
  }

  get userDetails() {
    return (this.multistep.controls.userDetails as FormGroup).controls;
  }

changeStyle(){
  if(!this.step){
        this.stepStyle.withoutValidating
  }else if (this.step){
    this.stepStyle.validated
  }
}
  submit() {
    this.submitted = true;
    if(!(this.multistep.valid)){
      return;
    }

    if(this.step < 3){
      this.step += 1;
    } else  {
      let selectedAreas = this.selectAreaOfInterest.filter(area => area.id > 0).map(area => area.id)
      let registerDTO = {
        email: this.multistep.get("userDetails")
        ?.get("email")?.value,
        password: this.multistep?.get("userPass")
        ?.get("pass")?.value,
        userName: this.multistep?.get("userDetails")?.get
        ("nick")?.value,
        areas: selectedAreas
      }

      this.authService.register(registerDTO).
      subscribe(resp  => {
        this.router.navigate(['/inicio'])
        Swal.fire("Te has registrado con exito")
      });
    }
  }

  previous() {
    this.step -= 1;
}

}
