import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) { }
  email: string = ''
  password: string = ''



  login() {
    if (this.email == '' || this.password == '') {
      this.auth.message = 'please fill all inputs'
      return
    }

    this.auth.login(this.email, this.password)
  }



  ngOnInit(): void {
    $('#background').particleground({
      dotColor: '#6291ae',
      lineColor: '#6291ae',
      proximity: 120,
    });
    this.auth.message=''
  }
}
