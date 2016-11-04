import { Injectable } from '@angular/core';

@Injectable()
export default class LoginService {
  loggedIn = false;
  login(userName, password) {
    this.loggedIn =  userName === 'admin' && password === 'admin';
    return this.loggedIn;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logout() {
    this.loggedIn = false;
  }
}
