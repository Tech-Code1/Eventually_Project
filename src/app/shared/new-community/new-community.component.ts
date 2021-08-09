import { Component, Input, OnInit } from '@angular/core';
import { ComunityDTO } from '../../DTOs/ComunityDTO';
import { ComunityService } from '../../create-community/services/comunity.service';

@Component({
  selector: 'app-new-community',
  templateUrl: './new-community.component.html',
  styleUrls: ['./new-community.component.scss']
})
export class NewCommunityComponent implements OnInit {

  constructor() { }

  @Input()
  comunity?:ComunityDTO;
  ngOnInit(): void {

  }

}
