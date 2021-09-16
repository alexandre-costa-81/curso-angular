import { UserService } from './../user/user.service';
import { Component } from "@angular/core";
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  user$: Observable<User | null>;
  user: User | null;

  constructor(userService: UserService) {
    this.user = null;
    this.user$ = userService.getUser();
    this.user$.subscribe(user => this.user = user);
  }
}
