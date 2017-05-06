import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../../models/user-info';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userInfo: UserInfo;
  private error: string;

  constructor(private userService: UserService, private router: Router) { 
    this.userInfo = new UserInfo();
  }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.userInfo).then(res => {
      if(res.success) {
        this.router.navigate(['/home']);
      }
    }).catch((err: Error) => {
      this.error = err.message;
    });
  }

}
