import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { RestService } from "app/services/rest.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  name = '';

  constructor(
    private restService: RestService,
    private router: Router
  ) { }

  search() {
    this.router.navigate(['/home'], {queryParams: {'name': this.name}});
    this.name = "";
  }

}
