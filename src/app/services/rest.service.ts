import { Injectable } from '@angular/core';
import data from './all_heroes.json';

@Injectable()
export class RestService {

  private heroes: any[] = data;

  constructor() { }

  getHeros() {
    return this.heroes;
  }

}
