import { Component, OnInit } from '@angular/core';
import { ComunityService } from '../create-community/services/comunity.service';
import { ComunityDTO } from '../DTOs/ComunityDTO';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  constructor(private comunityService:ComunityService) { }
  comunities:ComunityDTO[] = [];
  ngOnInit(): void {
    this.comunityService.getAllComunities()
    .subscribe(comunities =>{
      this.comunities = comunities;
    })
  }

}
