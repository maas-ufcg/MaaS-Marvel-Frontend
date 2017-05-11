import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute, Router } from "@angular/router";

import { RestService } from "app/services/rest.service";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit, OnDestroy {

  hero;
  id;
  subscription: Subscription;

  private default_resolution = '/standard_fantastic.';

  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private router: Router
  ) { 
    this.hero = {};
  }

  getHeroImage() {
    if(this.hero.thumbnail){
      return this.hero.thumbnail.path + this.default_resolution + this.hero.thumbnail.extension;
    }
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        console.log(this.id)
        this.restService.getHero(this.id).then(res => {
          if (!res) {
            this.router.navigate(['notFound'])
          }
          this.hero = res;
          console.log(this.hero)
        })
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
