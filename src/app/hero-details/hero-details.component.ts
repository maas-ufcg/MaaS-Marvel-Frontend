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

  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private router: Router
  ) { 
    this.hero = {};
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
        })
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
