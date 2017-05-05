import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroes: Array<any>;
  private default_resolution = '/standard_fantastic.';

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.restService.getHeros().then(res => {
      this.heroes = res;
    });
  }

  favorite(hero) {
    hero.favorite = !hero.favorite;
  }

  getHeroImage(hero) {
    return hero.thumbnail.path + this.default_resolution + hero.thumbnail.extension;
  }

}
