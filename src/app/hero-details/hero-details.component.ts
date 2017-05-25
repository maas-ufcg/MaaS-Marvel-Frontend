import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";

import { RestService } from "app/services/rest.service";

/** Hero Details Component */
@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit, OnDestroy {

  hero;
  id;
  subscription: Subscription;
  recomendations: any[];

  private default_resolution = '/standard_fantastic.';

  /**
   * Constructor
   * @param route {ActivatedRoute} Route associated with this component. 
   * @param restService {RestService} Rest service.
   * @param router {Router} Navigation and url manipulation provider.
   */
  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private router: Router
  ) {
    this.hero = {};
  }

  /**Return the image of the selected hero */
  getHeroImage(hero) {
    if (hero.thumbnail) {
      return hero.thumbnail.path + this.default_resolution + hero.thumbnail.extension;
    }
  }

  /**Return a list of heroes to recommend for the user */
  getRecomendation() {
    this.restService.getRecomendations(this.hero.id, this.hero.name).then(heroes => {
      this.recomendations = heroes;
    });
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.restService.getHero(this.id).then(res => {
          if (!res) {
            this.router.navigate(['notFound'])
          }
          this.hero = res;
          this.getRecomendation();
        })
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
