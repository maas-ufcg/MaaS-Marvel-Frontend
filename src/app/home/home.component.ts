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

  heroes = [];
  name: string;
  subscription: Subscription;

  constructor(
    private restService: RestService,
    private route: ActivatedRoute,
    public dialog: MdDialog
  ) { }

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
    if (this.name && this.name != '') {
      console.log('exibindo: ' + this.name)
      let result = this.restService.search(this.name);
      if (result.length != 0) {
        this.heroes = result;
      } else {
        this.openDialog();
      }
    } else {
      console.log('exibindo todos')
      this.heroes = this.restService.getHeros();
    }
  }

  openDialog() {
    this.dialog.open(SearchNotFoundDialog);
  }
}

@Component({
  selector: 'search-not-found-dialog',
  template: `<h4>Hero Not Found...</h4>`,
})
export class SearchNotFoundDialog {}
