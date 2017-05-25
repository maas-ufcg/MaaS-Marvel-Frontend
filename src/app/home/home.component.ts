import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { MdDialog } from '@angular/material';

import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  heroes: Array<any>;
  name: string;
  subscription: Subscription;
  errorMessage: String;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
  ) {
    this.heroes = [];
   }

  ngOnInit() {
    this.subscription = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.name = queryParams['name'];
        this.exibition();
      }
    );

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  exibition() {
    this.errorMessage = null;
    
    if (this.name && this.name != '') {
      this.restService.search(this.name).then(res => {
        if (res.length != 0) {
          this.heroes = res;
        } else {
          this.errorMessage = "No heroes match your search.";
        }
      });
    } else {
      this.restService.getHeroes().then(res => {
        this.heroes = res;
      });
    }
  }
}

@Component({
  selector: 'search-not-found-dialog',
  template: `<h4>Hero Not Found...</h4>`,
})
export class SearchNotFoundDialog { }
