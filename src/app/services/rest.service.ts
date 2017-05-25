import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { AuthenticationService } from './authentication.service';
import { API_BASE_URL } from '../../config/config';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

/**Rest Service */
@Injectable()
export class RestService {
  private heroes = [];
  private favorites = [];
  private page = 0;
  private isLoading = false;

  /**
   * Consturctor
   * @param http {Http} Performs http requests. 
   * @param authenticationService {AuthenticationService} Authentication Service.
   */
  constructor(
    private http: Http, private authenticationService: AuthenticationService
  ) { }
  
  getIsloading() : boolean {
    return this.isLoading;
  }
  
  resetPage() {
    this.page = 0;
  }

  increasePage() {
    this.page++;
  }

  /**
   * Make a http request to recover a list of heroes.
   */
  getHeroes(): Promise<any[]> {
    if (!this.isLoading) {
      this.isLoading = true;

      return this.http.get(API_BASE_URL + "/heroes?page=" + this.page, this.options)
        .map((res) => {
          if (res.status == 200) {
            this.heroes = <any[]>res.json();
            this.getFavorites();
            this.isLoading = false;
            return this.heroes;
          }
        }).catch((err: any, caugth) => {
          throw new Error(err.json().message);
        }).toPromise();
    }
  }

  /**
   * Favorite a hero
   * @param heroId {string} Hero's ID
   */
  favorite(heroId: string) {
    return this.http.post(API_BASE_URL + "/heroes/favorite/" + heroId, {}, this.options)
      .catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }

  /**
   * Unfavorite a hero
   * @param heroId {string} Hero's ID
   */
  unfavorite(heroId: string) {
    return this.http.delete(API_BASE_URL + "/heroes/favorite/" + heroId, this.options)
      .catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }

  /**
   * Make a http request to recover the favorites heroes of the user.
   */
  getFavorites(): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heroes/favorite", this.options)
      .map(res => {
        if (res.status === 200) {
          this.favorites = [];
          let favoriteIds = res.json().favorites;
          favoriteIds.forEach(id => {
            this.getHero(id).then(hero => {
              hero.favorite = true;
              this.favorites.push(hero);
            });
          });
        }
        return this.favorites;
      }).catch((err: any, caugth) => {
        throw new Error(err.json().message);
      }).toPromise();
  }

  get options() {
    return this.authenticationService.options;
  }

  /**
   * Make a http request to recover an hero by id.
   * @param id hero's ID.
   */
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

  /**
   * Make a http request to recover the search result
   * @param name {string} name of the of the hero sought
   */
  search(name: string): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heroes/search?name=" + name, this.options)
      .map((res) => {
        return res.json().result;
      }).catch((err: any, caught) => {
        throw new Error(err.json().message)
      }).toPromise();
  }

  /**
   * Make a http request to recover the recommendations.
   * @param id Id of the actual hero.
   * @param name Name of the selected hero.
   */
  getRecomendations(id, name): Promise<any[]> {
    return this.http.get(API_BASE_URL + "/heroes/recommendation/params?name=" + name + "&&id=" + id, this.options)
      .map((res) => {
        return res.json().result;
      }).catch((err: any, caught) => {
        throw new Error(err.json().message)
      }).toPromise();
  }
}
