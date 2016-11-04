import { Component } from '@angular/core';
import { Router } from '@angular/router';

import template from '../../html/templates/header-template.html';
import LoginService from '../services/login-service';

@Component({
  selector: 'header-component',
  template,
  styles: [ require('!raw!less!../../css/header.less') ],
})
export default class HeaderComponent {
  loginService = null;
  router = null;

  constructor(loginServiceArg: LoginService, router: Router) {
    this.loginService = loginServiceArg;
    this.router = router;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate([ '/home' ]);
  }
}
