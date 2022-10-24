import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  usernameOrEmail: any;
  password: any;

  signInForm: FormGroup = new FormGroup({
    usernameOrEmail: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private router: Router,
              private socialAuthService: SocialAuthService) {
  }

  loginWithGoogle(): void {
    // this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['main-page']));
  }

  ngOnInit(): void {
    this.usernameOrEmail = '';
    this.password = '';
  }

  signIn() {
    this.router.navigate(["main-page"]);
  }
}
