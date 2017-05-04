import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCredentials } from '../../models/user-credentials';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private userCredentials: UserCredentials;
  private error: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    this.userCredentials = new UserCredentials();
   }

  ngOnInit() {
    if(this.authenticationService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }
  }

  login() {
    this.authenticationService.login(this.userCredentials).then(res => {
      if(res.success) {
        this.router.navigate(['/home']);
      } 
    }).catch((err: Error) => {
      this.error = err.message;
    });
  }
}
