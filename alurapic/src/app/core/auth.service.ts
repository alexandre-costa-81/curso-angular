import { TokenService } from './token/token.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private tokenService: TokenService) { }

  authenticate(userName: string, password: string) {

    return this.http
      .post(
        API_URL + '/login',
        { email: userName, password: password },
        { observe: 'body' })
      .pipe(tap((res: any) => {
        const authToken = res?.accessToken;
        this.tokenService.setToken(authToken);
        console.log(authToken);
    }))
  }
}
