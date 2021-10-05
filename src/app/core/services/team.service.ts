import { Team } from './../classes/team';
import { IAccount } from './../interfaces/account.interface';
import { ITeam } from './../interfaces/team.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TeamService extends CacheService{

  constructor(private http: HttpClient) {
    super()
  }

  getTeamsList() {
    return this.http.get(`${environment.url}/team`).pipe(
      map((resp) => {
        return resp
      })
    )
  }

  getTeamById(id: number) {
    return this.http.get<ITeam>(`${environment.url}/team/`+ id.toString()).pipe(
      map((resp) => {
        return resp
      })
    )
  }

  getManagerWithTeamId(id: number) {
    return this.http.get<IAccount>(`${environment.url}/team/` + id.toString() + `/manager`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getTeamByDesignation(designation: string) {
    return this.http.get<IAccount>(`${environment.url}/team/designation/` + designation).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getAccountsByTeamId(id: number) {
    return this.http.get(`${environment.url}/account/team/` + id.toString()).pipe(
      map(resp => {
        return resp
      })
    )
  }

  createAccount(team: Team) {
    return this.http.post<ITeam>(`${environment.url}/team`, team).pipe(
      map(resp => {
        return resp
      })
    )
  }

  updateTeam(team: Team) {
    return this.http.put<ITeam>(`${environment.url}/team`, team).pipe(
      map(resp => {
        return resp
      })
    )
  }

  deleteTeam(id: number) {
    return this.http.delete(`${environment.url}/team/` + id.toString()).pipe(
      map(resp => {
        return resp
      })
    )
  }
}
