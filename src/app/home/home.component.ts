import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { MdDialog } from '@angular/material';

import { RestService } from 'app/services/rest.service';

/** Home Component */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  /**Heroes list */
  heroes: Array<any>;
  /**Hero name */
  name: string;
  subscription: Subscription;
  errorMessage: String;
  searchHeroes:boolean = false;

  /**
   * Constructor
   * @param restService {RestService} Rest Service
   * @param route {ActivatedRoute} Route associated with this component.
   */
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

  /** Show the heroes cards */
  exibition() {
    this.errorMessage = null;
    if (this.name && this.name != '') {
      this.searchHeroes = true;
      this.restService.search(this.name).then(res => {
        if (res.length != 0) {
          this.heroes = res;
        } else {
          this.errorMessage = "No heroes match your search.";
        }
      });
    } else {
      this.searchHeroes = false;
      this.restService.getHeroes().then(res => {
        this.heroes = res;
      });
    }
  }
}

/** Hero Not Found Componetn */
@Component({
  selector: 'search-not-found-dialog',
  template: `<h4>Hero Not Found...</h4>`,
})
export class SearchNotFoundDialog { }
