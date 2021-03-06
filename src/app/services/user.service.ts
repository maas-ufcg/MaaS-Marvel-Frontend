import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { UserInfo } from '../models/user-info';
import { AuthenticationService } from './authentication.service';
import { AuthenticatedUser } from '../models/authenticated-user';
import { API_BASE_URL } from '../../config/config';
import { UserCredentials } from '../models/user-credentials';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/**User Service. */
@Injectable()
export class UserService {

  /**
   * Constructor
   * @param router {Router} Navigation and url manipulation provider.
   * @param authenticationService {AuthenticationService} Authentication Service.
   * @param http {Http} Performs http requests.
   */
  constructor(private router: Router, private authenticationService: AuthenticationService, private http: Http) { }

  /**
   * Register a new user on the system
   * @param userInfo {UserInfo} user to be registred
   */
  register(userInfo: UserInfo) {
    return this.http.post(API_BASE_URL + "/users/register", JSON.stringify(userInfo), this.options)
      .map((response: Response) => {
        if (response.status == 201) {
          this.authenticationService.login(<UserCredentials>{ email: userInfo.email, password: userInfo.password }).then(res => {
            if (res.success) {
              this.router.navigate(['/home']);
            }
          });
        }

        return response.json();
      }).catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }

  /**Return the security options */
  get options() {
    return this.authenticationService.options;
  }

}
