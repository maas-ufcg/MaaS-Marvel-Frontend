import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { RestService } from "app/services/rest.service";

/** Search Bar Component */
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  name = '';

  /**
   * Constructor.
   * @param restService {RestService} Rest service.
   * @param router {Router} Navigation and url manipulation provider.
   */
  constructor(
    private restService: RestService,
    private router: Router
  ) { }

  /**
   * Search Command.
   */
  search() {
    this.router.navigate(['/home'], {queryParams: {'name': this.name}});
    this.name = "";
  }

}
