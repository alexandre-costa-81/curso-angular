import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkUserNameTaken() {

        return (control: AbstractControl) => {
            return control
              .valueChanges
              .pipe(debounceTime(300))
              .pipe(switchMap(userName => {
                  return this.signUpService.checkUserNameTaken(userName);
              }))
              .pipe(map(isTaken => Array.isArray(isTaken) ? isTaken.length > 0 ? { userNameTaken: true } : null : null))
              .pipe(first());
        }
    }
}
