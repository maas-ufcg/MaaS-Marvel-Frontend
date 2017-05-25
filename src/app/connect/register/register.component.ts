import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../../models/user-info';
import { UserService } from '../../services/user.service';

/**Register Component */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userInfo: UserInfo;
  private error: string;

  /**
   * Constructor. 
   * @param userService {UserService} User service. 
   * @param router {Router} Navigation and url manipulation provider.
   */  
  constructor(private userService: UserService, private router: Router) { 
    this.userInfo = new UserInfo();
  }

  ngOnInit() { }

  /**
   * Register a new user on the system.
   */
  register() {
    console.log(this.userInfo);
    this.userService.register(this.userInfo).then(res => {
      if(res.success) {
        this.router.navigate(['/home']);
      }
    }).catch((err: Error) => {
      this.error = err.message;
    });
  }

}
