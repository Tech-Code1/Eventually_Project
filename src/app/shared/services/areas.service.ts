import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AreaDTO } from '../DTOs/AreaDTO';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = environment.baseUrl;

  areas$:Observable<AreaDTO[]> = this.httpClient
  .get<AreaDTO[]>(
    `${this.baseUrl}api/areas`
  ).pipe(
  shareReplay(1))
  }
