import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LoginService } from "./../../services/login_service";

@Component({
  selector: 'app-user-profile',
  providers: [NavbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private navbarComponent: NavbarComponent;
  private location: Location;
  private loginService: LoginService;
  router: any;
  constructor( private NavbarComponent: NavbarComponent, private Location: Location, LoginService: LoginService ) {
    this.navbarComponent = NavbarComponent;
    this.location = Location;
    this.loginService = LoginService;
  }

  ngOnInit() {
    if (!this.loginService.checkToken()) {
      this.router.navigate(["/login"]);
    }
    this.navbarComponent.setCurrentLocation(this.location.path());
  }

}
