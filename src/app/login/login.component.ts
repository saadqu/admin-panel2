import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  providers: [NavbarComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private navbarComponent: NavbarComponent;
  private location: Location;
  constructor( private NavbarComponent: NavbarComponent, private Location: Location ) {
    this.navbarComponent = NavbarComponent;
    this.location = Location;
  }

  ngOnInit() {
    this.navbarComponent.setCurrentLocation(this.location.path());
  }

}
