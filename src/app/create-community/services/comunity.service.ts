import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ComunityDTO } from '../../DTOs/ComunityDTO';

@Injectable({
  providedIn: 'root'
})
export class ComunityService {

  baseUrl  = environment.baseUrl;
  constructor(private httpClient:HttpClient) { }

  getAllComunities(){
    return this.httpClient.get<ComunityDTO[]>(`${this.baseUrl}api/comunities`);
  }
}
