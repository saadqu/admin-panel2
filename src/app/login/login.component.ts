import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { Location } from "@angular/common";
import { Router } from "@angular/router";
import { AdminLayoutComponent } from "app/layouts/admin-layout/admin-layout.component";
import { LoginService } from "./../../services/login_service";

@Component({
  selector: "app-login",
  providers: [NavbarComponent, AdminLayoutComponent],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private navbarComponent: NavbarComponent;
  private location: Location;
  private router: Router;
  private adminLayoutComponent: AdminLayoutComponent;
  private loginService: LoginService;

  constructor(
    private NavbarComponent: NavbarComponent,
    private Location: Location,
    private Router: Router,
    private AdminLayoutComponent: AdminLayoutComponent,
    private LoginService: LoginService
  ) {
    this.navbarComponent = NavbarComponent;
    this.location = Location;
    this.router = Router;
    this.adminLayoutComponent = AdminLayoutComponent;
    this.loginService = LoginService;
  }

  ngOnInit() {
  }

  onClick() {
    this.adminLayoutComponent.showNavbar();
    this.loginService.login();
    this.router.navigate(["/dashboard"]);
  }
}
