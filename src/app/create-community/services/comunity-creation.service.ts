import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';
import { buildFormData } from '../../shared/utils/buildFormData';

@Injectable({
  providedIn: 'root',
})
export class ComunityCreationService {
  constructor(private httpClient: HttpClient) {}
  private comunityCreationDTO: any = {};
  baseUrl = environment.baseUrl;
  public AddStepInfo(info: any) {
    console.log(info);
    this.comunityCreationDTO = {
      ...this.comunityCreationDTO,
      ...info,
    };
  }

  public FinishComunityCreation() {

    let finalDTO = {
      name: this.comunityCreationDTO.nameCommunity,
      areaId: this.comunityCreationDTO.areaCommunity,
      otherArea: this.comunityCreationDTO.areaOtherCommunity,
      email: this.comunityCreationDTO.emailCommunity,
      facebook:this.comunityCreationDTO.socialFacebook,
      linkedin:this.comunityCreationDTO.socialLinkedin,
      instagram:this.comunityCreationDTO.socialInstagram,
      github:this.comunityCreationDTO.socialGithub,
      twitter:this.comunityCreationDTO.socialTwitter,
      discord:this.comunityCreationDTO.socialDiscord,
      description: this.comunityCreationDTO.descriptionCommunity,
      logo: this.comunityCreationDTO.logo,
      banner: this.comunityCreationDTO.banner
    };
    debugger
    let formData = buildFormData(finalDTO);


    return this.httpClient.post(`${this.baseUrl}api/comunities`, formData);
  }
}
