import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthenticationService } from './authentication.service';
import { API_BASE_URL } from '../../config/config';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class RestService {
  private heroes : any[];
  private favorites = [];

  constructor(
    private http: Http, private authenticationService: AuthenticationService
  ) { }

  getHeros(): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heroes", this.options)
    .map((res) => {
      if(res.status == 200) {
        this.heroes = <any[]> res.json();
        this.loadFavorites();
        return this.heroes;
      } 
    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();
  }

  favorite(heroId:string) {
    return this.http.post(API_BASE_URL + "/heroes/favorite/" + heroId, {}, this.options)
    .map(res => {
      return res.status;

    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();
  }


  unfavorite(heroId:string) {
    return this.http.delete(API_BASE_URL + "/heroes/favorite/" + heroId, this.options)
    .map(res => {
      if(res.status === 200) {
        this.favorites.splice(this.favorites.indexOf(heroId), 1);
      }
    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();
  }

  get options() {
    return this.authenticationService.options;
  }

  loadFavorites() {
    return this.http.get(API_BASE_URL + "/heroes/favorite", this.options) 
    .map(res => {
      if(res.status === 200) {
       this.favorites = res.json().favorites;
       this.heroes.map(hero => this.favorites.indexOf(hero.id) > -1 ? hero.favorite = true: hero.favorite = false);
      }
      
    }).catch((err: any, caugth) => {
      throw new Error(err.json().message);
    }).toPromise();

  }

  getFavorites() {
    return this.heroes.filter(hero => hero.favorite);
  }

  getHero(id:number) {
    return this.heroes.filter(hero => hero.id === id);
  }

  search(name:string) {
    
  }

}
