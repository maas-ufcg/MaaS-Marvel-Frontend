import { Component } from '@angular/core';
import { RestService } from "app/services/rest.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  name = '';

  constructor(
    private restService: RestService
  ) { }

  search() {
    this.restService.search(this.name);
  }

}
