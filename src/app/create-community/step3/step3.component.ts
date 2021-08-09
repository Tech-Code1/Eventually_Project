import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ComunityCreationService } from '../services/comunity-creation.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component implements OnInit {
  stepThree: FormGroup;

  constructor(formBuilder: FormBuilder,
    private comunityCreationService:ComunityCreationService,
    private router:Router) {
    this.stepThree = formBuilder.group({
      logo: [],
      banner: [],
    });
  }

  images: any = {};
  ngOnInit(): void {}
  onSubmit() {
    if(!this.stepThree.valid){
      return;
    }

    this.comunityCreationService.AddStepInfo(this.stepThree.value);
    this.comunityCreationService.FinishComunityCreation().subscribe(comunity =>
      {
          Swal.fire('Se ha creado la comunidad');
          this.router.navigate(['/comunidades']);
      })

  }

  showImgPreview(event: any, fieldName: string) {
    const input = event.target as HTMLInputElement;
    if (input && input.files) {
      let file = input.files[0];
      this.stepThree.get(fieldName)?.setValue(file);
      // File Preview
      const reader = new FileReader();
      reader.onload = () => {
        this.images[fieldName] = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
