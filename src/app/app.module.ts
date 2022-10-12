import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {AppRoutingModule} from "./app-routing.module";
import {GoogleLoginProvider, SocialAuthService} from "angularx-social-login";
import {AuthGuardService} from "./sign-up/auth-guard.service";
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import { PersonalInformationComponent } from './sign-up/detail-sign-up/personal-information/personal-information.component';
import { ConfirmComponent } from './sign-up/detail-sign-up/confirm/confirm.component';
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {MessageService} from "primeng/api";
import {ButtonModule} from "primeng/button";
import { DetailSignUpComponent } from './sign-up/detail-sign-up/detail-sign-up.component';
import {RippleModule} from "primeng/ripple";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    PersonalInformationComponent,
    ConfirmComponent,
    DetailSignUpComponent
  ],
  imports: [
    BrowserModule,
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
    }
  },
    AuthGuardService,
    SocialAuthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
