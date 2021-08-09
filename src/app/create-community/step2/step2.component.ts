import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComunityCreationService } from '../services/comunity-creation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  stepTwo = new FormGroup ({
    socialFacebook: new FormControl(''),
    socialLinkedin: new FormControl(''),
    socialInstagram: new FormControl(''),
    socialGithub: new FormControl(''),
    socialTwitter: new FormControl(''),
    socialDiscord: new FormControl(''),
    descriptionCommunity: new FormControl(''),
  })


  constructor(private comunityCreationService:ComunityCreationService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.stepTwo.valid){
      return;
    }
    this.comunityCreationService.AddStepInfo(this.stepTwo.value);

    this.router.navigate(['/crear-comunidad/ultimos-detalles']);
  }

}
