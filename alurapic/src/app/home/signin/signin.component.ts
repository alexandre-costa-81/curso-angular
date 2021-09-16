import { AuthService } from './../../core/auth.service';
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    const userName = this.loginForm.get('userName')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authservice.authenticate(userName, password).subscribe(
      res => {
        if (Object.keys(res).length > 0) {
          console.log(res);
        } else {
          console.log(res);
          this.loginForm.reset();
        }
      },
      err => {
        console.log(err);
        this.loginForm.reset();
      }
    );
  }
}
