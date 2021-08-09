import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComunityCreationService } from '../services/comunity-creation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {


  stepOne = new FormGroup ({
    nameCommunity: new FormControl(''),
    areaCommunity: new FormControl(''),
    areaOtherCommunity: new FormControl(''),
    emailCommunity: new FormControl(''),
  })


  constructor(private comunityCreationService:ComunityCreationService,
    private router:Router) { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(!this.stepOne.valid){
      return;
    }
    this.comunityCreationService.AddStepInfo(this.stepOne.value);
    this.router.navigate(['/crear-comunidad/conociendo-la-comunidad']);
  }
}
