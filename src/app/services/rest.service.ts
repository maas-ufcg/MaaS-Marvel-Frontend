import { Injectable } from '@angular/core';

@Injectable()
export class RestService {

  private heros: any[] = [
    {id: 1, name: 'Hero 01', favorite: true},
    {id: 2, name: 'Hero 02', favorite: false},
    {id: 3, name: 'Hero 03', favorite: false},
    {id: 4, name: 'Hero 04', favorite: true},
    {id: 5, name: 'Hero 05', favorite: false}
  ];

  constructor() { }

  getHeros() {
    return this.heros;
  }

}
