import { Component, OnInit } from '@angular/core';

/**Connect Component */
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  register: boolean;

  /**Default constructor */
  constructor() { }

  ngOnInit() {
  }

  /**Switch the form */
  switchForm() {
    this.register = !this.register;
  }

}
