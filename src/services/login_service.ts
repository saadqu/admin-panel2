import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private token: any;
  private router: Router;
  constructor(private Router: Router,) {}

  checkToken() {
    this.token = sessionStorage.getItem("token");
    console.log('From Service',sessionStorage.getItem('token'));

    if (this.token && this.token != null) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
      sessionStorage.clear();
  }

  login() {
    sessionStorage.setItem('token', 'saad');
  }
}
