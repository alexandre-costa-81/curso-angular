import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { AuthService } from './../../core/auth.service';

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement> | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
    console.log(this.userNameInput? 'verdadeiro':'falso');
    this.userNameInput?.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authservice.authenticate(userName, password).subscribe(
      res => this.router.navigate(['user', userName]),
      err => {
        this.loginForm.reset();
        this.userNameInput?.nativeElement.focus();
        alert('Invalid user name or password')
      }
    );
  }
}
