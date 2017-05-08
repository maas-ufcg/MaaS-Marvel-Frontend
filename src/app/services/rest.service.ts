import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthenticationService } from './authentication.service';
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
    return this.http.get(API_BASE_URL + "/heroes", this.options)
    .map((res) => {
      if(res.status == 200) {
        this.heroes = <any[]> res.json();
        return this.heroes;
      }
    
    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();
  }

  favorite(heroId:number) {
    return this.http.post(API_BASE_URL + "/heroes/favorite/" + heroId, {}, this.options)
    .map(res => {
      return res.status; 

    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();
  }


  unfavorite(heroId:number) {
    return this.http.delete(API_BASE_URL + "/heroes/favorite/" + heroId, this.options)
    .map(res => {
      return res.status; 

    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();
  }

  get options() {
    return this.authenticationService.options;
  }

  getFavorites() {
    let favorites = []
    for (var index = 0; index < this.heroes.length; index++) {
      if(this.heroes[index].favorite) {
        favorites.push(this.heroes[index]);
      }
    }
    return favorites;
  }

  getHero(id:number) {
    for (var index = 0; index < this.heroes.length; index++) {
      if(this.heroes[index].id == id) {
        return this.heroes[index];
      }
    }
    return null;
  }

  search(name:string) {
    
  }

}
