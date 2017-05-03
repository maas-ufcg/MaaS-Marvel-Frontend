import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router/";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

  }

    /**
   * Navigate to the specific URI.
   * @param uri URI
   */
/*  routing(uri) {
    this.router.navigate([uri], {relativeTo: this.route});
  }*/
  

}
