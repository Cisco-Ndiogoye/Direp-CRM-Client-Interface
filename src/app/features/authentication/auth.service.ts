import { AccountService } from '../../core/services/account.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private accountService: AccountService) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post<string>(
      `${environment.url}/auth/login`,
      {
        username,
        password,
      },
      {
        observe: 'response'
      }
    ).pipe(
      map((resp) => {
        const token = resp.headers.get('authorization').replace('Bearer', '') as string
        return token
      }),
    )
  }

}




