import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {DetailSignUpComponent} from "./sign-up/detail-sign-up/detail-sign-up.component";
import {
  PersonalInformationComponent
} from "./sign-up/detail-sign-up/personal-information/personal-information.component";
import {ConfirmComponent} from "./sign-up/detail-sign-up/confirm/confirm.component";

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up-details', component: DetailSignUpComponent, children: [
      { path: 'personal-information', component: PersonalInformationComponent },
      { path: 'confirm', component: ConfirmComponent },
      { path: '**', redirectTo: 'personal-information', pathMatch: 'full' }
    ] },
  { path: '**', redirectTo: 'sign-up', pathMatch: 'full' },
  /*
  { path: 'sign-in', component: SignInComponent },
  { path: 'main-page', component: MainComponent, canActivate: [AuthGuardService] },
  { path: '**', component: SignInComponent }
   */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
