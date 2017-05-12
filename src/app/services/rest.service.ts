import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthenticationService } from './authentication.service';
import { API_BASE_URL } from '../../config/config';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class RestService {
  private heroes = [];

  constructor(
    private http: Http, private authenticationService: AuthenticationService
  ) { }


  getHeroes(): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heroes", this.options)
      .map((res) => {
        if (res.status == 200) {
          this.heroes = <any[]>res.json();
          this.getFavorites();
          return this.heroes;
        }
      }).catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }

  favorite(heroId: string) {
    return this.http.post(API_BASE_URL + "/heroes/favorite/" + heroId, {}, this.options)
      .catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }


  unfavorite(heroId: string) {
    return this.http.delete(API_BASE_URL + "/heroes/favorite/" + heroId, this.options)
      .catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }

  getFavorites(): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heroes/favorite", this.options)
      .map(res => {
        if (res.status === 200) {
          let favoriteIds = res.json().favorites;
          
          favoriteIds.forEach(id => {
            let hero = this.heroes.find((hero) => {
              return hero.id === id;
            });
            
            hero.favorite = true;
          });
          
          return this.favorites;
        }

      }).catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }

  get favorites() {
    return this.heroes.filter((hero) => {
      return hero.favorite;
    });
  }

  get options() {
    return this.authenticationService.options;
  }

  getHero(id: number): Promise<any> {
    return this.http.get(API_BASE_URL + "/heroes/" + id, this.options)
      .map((res) => {
        if (res.status == 200) {
          let hero = <any>res.json().hero;
          return hero;
        }
      }).catch((err: any, caught) => {
        throw new Error(err.json().message)
      }).toPromise();
  }

  search(name: string): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heroes/search/params?name=" + name, this.options)
      .map((res) => {
        return res.json().result;
      }).catch((err: any, caught) => {
        throw new Error(err.json().message)
      }).toPromise();
  }
}
