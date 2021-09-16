import { UserService } from './../user/user.service';
import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../user/user';

import { faCoffee, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  faUserCircle = faUserCircle;

  user$: Observable<User | null>;

  constructor(
    private userService: UserService,
    private router: Router) {

    this.user$ = userService.getUser();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
}
}
