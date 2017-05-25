import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router/";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  currentButton = 1;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {

  }

  logout() {
    this.authenticationService.logout();
  }

  get authenticatedUser() {
    return this.authenticationService.authenticatedUser;
  }

    /**
   * Navigate to the specific URI.
   * @param uri URI
   */
/*  routing(uri) {
    this.router.navigate([uri], {relativeTo: this.route});
  }*/
  

}
