import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailSignUpComponent} from "./detail-sign-up.component";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {ConfirmComponent} from "./confirm/confirm.component";
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../../app-routing.module";
import {ToastModule} from "primeng/toast";
import {StepsModule} from "primeng/steps";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";



@NgModule({
  declarations: [
    DetailSignUpComponent,
    PersonalInformationComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
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
  ]
})
export class DetailSignUpModule { }
