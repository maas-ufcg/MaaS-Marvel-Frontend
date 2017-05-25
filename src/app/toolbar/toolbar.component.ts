import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router/";
import { AuthenticationService } from '../services/authentication.service';

/** Toolbar Component */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  /**
   * COnstructor.
   * @param router {Router} Navigation and url manipulation provider.
   * @param activatedRoute {ActivatedRoute} Route associated with this component.
   * @param authenticationService {AuthenticationService} Authentication service.
   */
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() { }

  /**
   * Make the user logout
   */
  logout() {
    this.authenticationService.logout();
  }

  /**
   * return de authenticated user
   */
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
