import { Component, OnInit, Input } from '@angular/core';
import { RestService } from "app/services/rest.service";

/**Hero Cards Component */
@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss']
})
export class HeroCardsComponent implements OnInit {

  @Input() heroesList: any[];
  @Input() title: string;
  @Input() infiniteHeroes;

  private default_resolution = '/standard_fantastic.';
  imagesOnly = true;

  /**
   * Constructor
   * @param service {RestService} Rest service.
   */
  constructor(
    private service: RestService
  ) {
    this.heroesList = [];
    this.title = "Heroes";
    this.service.resetPage();
    this.infiniteHeroes = true;
   }

  ngOnInit() {
  }

  /**Make request to the server to obtain more heroes */
  loadMore() {
    var self = this;
    if (!this.service.getIsloading()) {
      this.service.increasePage();
      var newHeroesPromise = this.service.getHeroes();
      newHeroesPromise.then((response) => {
        response.forEach(function (hero) {
          self.heroesList.push(hero);
        });
      });
    }
  }

  /**
   * Add the selected hero on the favorite list
   * @param hero {any} hero to be favorited.
   */
  favorite(hero){
    hero.favorite = !hero.favorite;

    if(hero.favorite) {
      this.service.favorite(hero.id.toString()).then(() => {});
    } else {
      this.service.unfavorite(hero.id.toString()).then(() => {});
    }
  }

  /**
   * Return the image of the selected hero.
   * @param hero selected hero.
   */
  getHeroImage(hero) {
    return hero.thumbnail.path + this.default_resolution + hero.thumbnail.extension;
  }

  /**Activated/deactivate the hero images filter */
  switchImagesOnly() {
    this.imagesOnly = !this.imagesOnly;
  }

  /** displayed the heroes*/
  get heroes() {
    return this.heroesList.filter((hero) => {
      return (this.imagesOnly && !hero.thumbnail.path.includes('image_not_available')) || !this.imagesOnly;
    });
  }

}
