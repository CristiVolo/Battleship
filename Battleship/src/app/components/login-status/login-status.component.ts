import { Component, OnInit } from '@angular/core';
import {OktaAuthService} from '@okta/okta-angular';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {

  isAuthenticated = false;
  userFullName: string | undefined;

  constructor(private oktaAuthService: OktaAuthService) { }

  ngOnInit(): void {

    // Subscribe to authentication state changes
    this.oktaAuthService.$authenticationState.subscribe(
      (result) => {
        this.isAuthenticated = result;
        this.getUserDetails();
      }
    );

  }

  // tslint:disable-next-line:typedef
  getUserDetails() {
    if (this.isAuthenticated) {
      this.oktaAuthService.getUser().then(
        (res) => {
          this.userFullName = res.name;
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  logout() {
    // Terminates session with Okta and removes current tokens.
    this.oktaAuthService.signOut();
  }

}