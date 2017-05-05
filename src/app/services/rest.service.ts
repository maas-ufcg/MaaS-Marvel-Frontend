import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthenticationService } from './authentication.service';
import { Hero } from '../models/hero'; 
import { API_BASE_URL } from '../../config/config';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {
  private heroes : any[];
  constructor(
    private http: Http, private authenticationService: AuthenticationService
  ) { }

  getHeros(): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heros", this.options)
    .map((res) => {
      if(res.status == 200) {
        return <any[]> res.json();
      }
    
    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();
  }

  get options() {
    return this.authenticationService.options;
  }
  
}
