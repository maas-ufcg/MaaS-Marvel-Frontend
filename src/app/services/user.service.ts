import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { UserInfo } from '../models/user-info';
import { AuthenticationService } from './authentication.service';
import { AuthenticatedUser } from '../models/authenticated-user';
import { API_BASE_URL } from '../../config/config';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private authenticationService: AuthenticationService, private http: Http) { }

  register(userInfo: UserInfo) {
    return this.http.post(API_BASE_URL + "/users/register", JSON.stringify(userInfo), this.options)
                      .map((response: Response) => {
       if(response.status == 201) {
          this.authenticationService.setAuthenticatedUser(<AuthenticatedUser> response.json());
       } 

       return response.json();
    }).catch((err: any, caugth) => {
      console.log(err);
         throw new Error(err.json().message);
    }).toPromise();
  }

  get options() {
    return this.authenticationService.options;
  }

}
