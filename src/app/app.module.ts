import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AppRoutingModule} from "./app-routing.module";
import {GoogleLoginProvider, SocialAuthService, SocialAuthServiceConfig} from "angularx-social-login";
import {AuthGuardService} from "./sign-up/auth-guard.service";
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {DetailSignUpModule} from "./sign-up/detail-sign-up/detail-sign-up.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AdminModule} from "./admin/admin.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SignInModule} from "./sign-in/sign-in.module";
import {LibraryAppModule} from "./library-app/library-app.module";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    DetailSignUpModule,
    SignInModule,
    LibraryAppModule,
    AdminModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ToastModule,
    StepsModule,
    CardModule,
    InputTextModule,
    PasswordModule,
    FormsModule,
    ButtonModule,
    RippleModule
  ],
  providers: [
    {
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: true, //keeps the user signed in
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('210196115863-h4kah9l2uub83u36hkd829sficksfmu4.apps.googleusercontent.com') //clientID
        }
      ]
    } as SocialAuthServiceConfig
  },
    AuthGuardService,
    SocialAuthService,
    MessageService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
