import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import jwt_decode from 'jwt-decode';

import { TokenService } from '../token/token.service';
import { User } from './user';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null);

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() &&
        this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    if (token !== null) {
      const user: User = jwt_decode(token) as User;
      this.userSubject.next(user);
      console.log(user);
    }
  }
}
