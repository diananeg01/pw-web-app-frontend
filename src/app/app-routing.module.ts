import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {DetailSignUpComponent} from "./sign-up/detail-sign-up/detail-sign-up.component";

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up/more', component: DetailSignUpComponent },
  { path: '**', redirectTo: 'sign-up' },
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
