import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {UserEndpointService} from "../endpoints/user-endpoint.service";
import {UserModel} from "../model/user.model";
import {UserRole} from "../model/user-role";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  username: any;
  password: any;

  constructor(private router: Router,
              private socialAuthService: SocialAuthService,
              private userEndpointService: UserEndpointService) {
  }

  loginWithGoogle(): void {
    // this.socialAuthService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
      .then(() => this.router.navigate(['main-page']));
  }

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  signIn() {
    this.userEndpointService.signIn(this.username, this.password).subscribe({
      next: (user: UserModel) => {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
        if(user.userRole === UserRole.READER) {
          this.router.navigateByUrl(`/${user.username}/main-page`);
        } else if(user.userRole === UserRole.ADMIN) {
          this.router.navigateByUrl(`/${user.username}/admin`);
        }
      }
    });
  }
}
