import { Prescriber } from './../classes/Prescriber';
import { IPrescriber } from './../interfaces/Prescriber.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PrescriberService {

  constructor(private http: HttpClient) {  }

  getPrescribersList() {
    return this.http.get<IPrescriber[]>(`${environment.url}/prescriber/`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getPrescribersByOrganization() {
    return this.http.get<IPrescriber[]>(`${environment.url}/prescriber/organization`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getPrescribersByClass() {
    return this.http.get<IPrescriber[]>(`${environment.url}/prescriber/class`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getPrescribersByTitre() {
    return this.http.get<IPrescriber[]>(`${environment.url}/prescriber/titre`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getPrescribersByService() {
    return this.http.get<IPrescriber[]>(`${environment.url}/prescriber/service`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getPrescribersBySpeciality() {
    return this.http.get<IPrescriber[]>(`${environment.url}/prescriber/speciality`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getPrescriberById(id: number) {
    return this.http.get<IPrescriber>(`${environment.url}/prescriber/`+ id.toString()).pipe(
      map((resp) => {
        return resp
      })
    )
  }


  createPrescriber(prescriber: Prescriber) {
    return this.http.post<IPrescriber>(`${environment.url}/prescriber/`, prescriber).pipe(
      map(resp => {
        return resp
      })
    )
  }

  updatePrescriber(prescriber: Prescriber) {
    return this.http.put<IPrescriber>(`${environment.url}/prescriber/`, prescriber).pipe(
      map(resp => {
        return resp
      })
    )
  }

  deletePrescriber(id: number) {
    return this.http.delete(`${environment.url}/prescriber/` + id.toString()).pipe(
      map(resp => {
        return resp
      })
    )
  }
}
