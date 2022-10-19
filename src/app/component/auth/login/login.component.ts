import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginError: string = '';
  constructor(
    private loginService: LoginServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }

  onSubmit(form: FormGroup): void {
    this.loginError = '';
    if(form.valid) {
      if(this.loginService.checkLoginUser(form.value)) {
        this.router.navigate(['dashboard']);
      } else {
        this.loginError = "Credential is not Valid"
      }
    }
  }
}
