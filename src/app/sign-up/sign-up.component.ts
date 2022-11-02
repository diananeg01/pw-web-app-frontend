import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserEndpointService} from "../endpoints/user-endpoint.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username: any;
  email: any;
  password: any;

  signUpForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
              private socialAuthService: SocialAuthService,
              private userEndpointService: UserEndpointService) {
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['sign-up/personal-information']));
  }

  ngOnInit(): void {
    this.username = '';
    this.email = '';
    this.password = ''
  }

  signUp() {
    localStorage.setItem('username', JSON.stringify(this.username));
    localStorage.setItem('email', JSON.stringify(this.email));
    this.userEndpointService.signUp(this.username, this.email, this.password)
    this.router.navigate(["sign-up-details/personal-information"]);
  }
}
