import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<string> {
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
        return resp.headers.get('authorization').replace('Bearer', '') as string
      }),
    )
  }

}

