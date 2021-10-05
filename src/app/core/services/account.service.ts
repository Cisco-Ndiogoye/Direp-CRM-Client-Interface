import { Account } from './../classes/account';
import { IAccount } from './../interfaces/account.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { CacheService } from './cache.service';
import { environment } from '../../../environments/environment';
import { PasswordDTO } from '../classes/passwordDTO';


@Injectable({
  providedIn: 'root'
})
export class AccountService extends CacheService{

  constructor(private http: HttpClient) {
    super()
  }

  getAccountsList() {
    return this.http.get(`${environment.url}/account/`).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getAccountById(id: number) {
    return this.http.get<IAccount>(`${environment.url}/account/`+ id.toString()).pipe(
      map((resp) => {
        return resp
      })
    )
  }

  getAccountByUsername(username: string) {
    return this.http.get<IAccount>(`${environment.url}/account/username/` + username).pipe(
      map(resp => {
        return resp
      })
    )
  }

  getAccountByEmail(email: string) {
    return this.http.get<IAccount>(`${environment.url}/account/email/` + email).pipe(
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

  createAccount(account: Account) {
    return this.http.post<IAccount>(`${environment.url}/account/`, account).pipe(
      map(resp => {
        return resp
      })
    )
  }

  updateAccount(account: Account) {
    return this.http.put<IAccount>(`${environment.url}/account/`, account).pipe(
      map(resp => {
        return resp
      })
    )
  }

  updatePassword(passwordDto: PasswordDTO, id: number) {
    return this.http.put<IAccount>(`${environment.url}/account/password/` + id.toString(), passwordDto).pipe(
      map(resp => {
        return resp
      })
    )
  }

  deleteAccount(id: number) {
    return this.http.delete(`${environment.url}/account/` + id.toString()).pipe(
      map(resp => {
        return resp
      })
    )
  }
}
