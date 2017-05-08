import { Injectable } from '@angular/core';
import data from './all_heroes.json';

import { API_BASE_URL } from '../../config/config';

@Injectable()
export class RestService {

  public heroes: any[] = data;

  constructor() { }

  getHeros() {
    return this.heroes;
  }

  getFavorites(){
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
    return [];
  }

}
