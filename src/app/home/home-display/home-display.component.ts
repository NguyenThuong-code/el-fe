import { Component, OnInit } from '@angular/core';
import {Login} from "../../model/login";
import {AuthenService} from "../../service/authen.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-display',
  templateUrl: './home-display.component.html',
  styleUrls: ['./home-display.component.css']
})
export class HomeDisplayComponent implements OnInit {



  ngOnInit(): void {
  }

  isLoggedIn = false;
  loginData: Login = new Login();

  constructor(private authService: AuthenService,
              private router: Router) {}

  login() {
    // Use your authentication service to make the HTTP request
    this.authService.login(this.loginData).subscribe(
      (response) => {
        // Handle the successful response here
       // console.log('Login successful:', response);
        sessionStorage.setItem('token', response.token);
        this.isLoggedIn = true;
        this.router.navigate(['/user/display']);// Set isLoggedIn to true or perform other actions as needed
      },
      (error: HttpErrorResponse) => {
       // console.error('Login error:', error);
        alert("Please check your username or password")
      }
    );
  }

}
