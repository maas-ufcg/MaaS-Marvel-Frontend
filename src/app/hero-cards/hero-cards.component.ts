import { Component, OnInit, Input } from '@angular/core';
import { RestService } from "app/services/rest.service";

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss']
})
export class HeroCardsComponent implements OnInit {

  @Input() heroesList: any[];
  @Input() title: string;

  private default_resolution = '/standard_fantastic.';
  imagesOnly = true;
  constructor(
    private service: RestService
  ) {
    this.heroesList = [];
    this.title = "Heroes";
   }

  ngOnInit() { }

  favorite(hero){
    hero.favorite = !hero.favorite;
    
    if(hero.favorite) {
      this.service.favorite(hero.id.toString()).then(() => {});
    } else {
      this.service.unfavorite(hero.id.toString()).then(() => {}); 
    }
  }
 
  getHeroImage(hero) {
    return hero.thumbnail.path + this.default_resolution + hero.thumbnail.extension;
  }

  switchImagesOnly() {
    this.imagesOnly = !this.imagesOnly;
    console.log(this.imagesOnly);
  }

  get heroes() {
    return this.heroesList.filter((hero) => {
      return (this.imagesOnly && !hero.thumbnail.path.includes('image_not_available')) || !this.imagesOnly;
    });
  }

}
