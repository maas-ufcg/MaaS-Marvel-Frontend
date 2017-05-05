import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  register: boolean;

  constructor() { }

  ngOnInit() {
  }

  switchForm() {
    this.register = !this.register;
  }

}
