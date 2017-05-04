import { Injectable } from '@angular/core';
import { AuthenticatedUser } from '../models/authenticated-user';
import { UserCredentials } from '../models/user-credentials';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
import { API_BASE_URL } from '../../config/config';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  authenticatedUser: AuthenticatedUser;

  constructor(private http: Http, private router: Router) { 
    this.authenticatedUser = <AuthenticatedUser> JSON.parse(localStorage.getItem('currentUser'));
  }

  login(userCredentials: UserCredentials) {
     return this.http.post(API_BASE_URL + "/users/authenticate", JSON.stringify(userCredentials), this.options)
                      .map((response: Response) => {
                        console.log(response.status);
       if(response.status == 200) {
          let data = response.json()
          this.authenticatedUser = <AuthenticatedUser> data;
          localStorage.setItem('currentUser', JSON.stringify(this.authenticatedUser));
          return data;
       }
    }).catch((err: any, caugth) => {
      if(err.status == 401) {
        throw new Error('Bad credentials.');
      } else {
        throw new Error('Internal server error.');
      }
    }).toPromise();
   }

   isLoggedIn():boolean {
     return (localStorage.getItem('currentUser') != null) && (this.authenticatedUser != null);
   }

   logout() {
     localStorage.removeItem('currentUser');
     this.authenticatedUser = null;
     this.router.navigate(['/login']);
   }

   get options() {
     let options = new RequestOptions();
     let headers = new Headers({'Content-Type': 'application/json', 'charset': 'UTF-8'});

     if(this.isLoggedIn()) {
       headers.append('Authorization', this.authenticatedUser.token);
     }
     
     options.headers = headers;

     return options;
   }

}
