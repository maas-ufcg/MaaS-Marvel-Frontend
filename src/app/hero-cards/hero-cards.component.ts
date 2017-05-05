import { Component, OnInit, Input } from '@angular/core';
import { RestService } from "app/services/rest.service";

@Component({
  selector: 'app-hero-cards',
  templateUrl: './hero-cards.component.html',
  styleUrls: ['./hero-cards.component.scss']
})
export class HeroCardsComponent implements OnInit {

  @Input() heroes: any[];

  constructor() { }

  ngOnInit() { }

  favorite(hero){
    hero.favorite = !hero.favorite;
  }

}
