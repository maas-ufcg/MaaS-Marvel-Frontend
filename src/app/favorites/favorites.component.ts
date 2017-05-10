import { Component, OnInit } from '@angular/core';
import { RestService } from "app/services/rest.service";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  favoriteHeroes = [];

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() { 
    this.restService.getFavorites().then(favorites => {
      this.favoriteHeroes = favorites;
    })

  }

}
