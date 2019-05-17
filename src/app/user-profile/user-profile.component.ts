import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'app/components/navbar/navbar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  providers: [NavbarComponent],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  private navbarComponent: NavbarComponent;
  private location: Location;
  loginService: any;
  constructor( private NavbarComponent: NavbarComponent, private Location: Location ) {
    this.navbarComponent = NavbarComponent;
    this.location = Location;
  }

  ngOnInit() {
    if (!this.loginService.checkToken()) {
      this.router.navigate(["/login"]);
    }
    this.navbarComponent.setCurrentLocation(this.location.path());
  }

}
