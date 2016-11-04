import { Component } from '@angular/core';
import { Router } from '@angular/router';

import LoginService from '../services/login-service';
import template from '../../html/templates/login-template.html';

@Component({
  selector: 'login-component',
  template
})
export default class LoginComponent {
  userName;
  password;
  loginService = null;
  error = null;

  constructor(loginServiceArg: LoginService, router: Router) {
    this.loginService = loginServiceArg;
    this.router = router;
  }

  ngOnInit() {
    this.error = null;
  }

  login() {
    const ret  = this.loginService.login(this.userName, this.password);
    if (ret) {
      this.router.navigate([ '/home' ]);
    }
    else {
      this.error = "Invalid user name or password";
    }
  }
}
