import { Component, OnInit } from '@angular/core';
import { RestService } from "app/services/rest.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  heroes = [];

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() { 
    this.heroes = this.restService.getHeros();
    console.log(this.heroes) 
  }
  
}
