import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  private heroes: any[] = [
    {id: 1, name: 'Hero 01', favorite: true},
    {id: 2, name: 'Hero 02', favorite: false},
    {id: 3, name: 'Hero 03', favorite: false},
    {id: 4, name: 'Hero 04', favorite: true},
    {id: 5, name: 'Hero 05', favorite: false}
  ];

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
/*    this.heroes = [
      {id: 5, name: 'Hero 05', favorite: true},
      {id: 6, name: 'Hero 06', favorite: false},
    ]*/
  }

}
