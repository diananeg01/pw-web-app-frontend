import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {DetailSignUpComponent} from "./sign-up/detail-sign-up/detail-sign-up.component";
import {
  PersonalInformationComponent
} from "./sign-up/detail-sign-up/personal-information/personal-information.component";
import {ConfirmComponent} from "./sign-up/detail-sign-up/confirm/confirm.component";
import {AdminTabViewComponent} from "./admin/admin-tab-view/admin-tab-view.component";
import {BookPanelComponent} from "./admin/admin-tab-view/book-panel/book-panel.component";
import {UsersPanelComponent} from "./admin/admin-tab-view/users-panel/users-panel.component";

const routes: Routes = [
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up-details', component: DetailSignUpComponent, children: [
      { path: 'personal-information', component: PersonalInformationComponent },
      { path: 'confirm', component: ConfirmComponent },
      { path: '**', redirectTo: 'personal-information', pathMatch: 'full' }
    ] },
  { path: 'admin', component: AdminTabViewComponent, children: [
      { path: 'books', component: BookPanelComponent },
      { path: 'users', component: UsersPanelComponent },
      { path: '**', redirectTo: 'books', pathMatch: 'full' }
    ] },
  { path: '', redirectTo: 'sign-up', pathMatch: 'full' },
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
