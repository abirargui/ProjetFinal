import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent  implements OnInit {

  email : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  forgetPassword() {
    this.auth.forgotPassword(this.email);
    this.email = '';
  }

}
