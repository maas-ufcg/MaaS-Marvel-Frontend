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
  subscritpion: Subscription;

  constructor(
    private route: ActivatedRoute,
    private restService: RestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subscritpion = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        this.restService.getHero(this.id).then(res => {
          this.hero = res;
          if (this.hero == null) {
            this.router.navigate(['notFound'])
          }
        })
      }
    );
  }

  ngOnDestroy() {
    this.subscritpion.unsubscribe();
  }

}
