import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroes: Array<any>;

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
    this.restService.getHeros().then(res => {
      this.heroes = res;
    });
  }
}
