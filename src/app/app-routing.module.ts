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
import {SignInComponent} from "./sign-in/sign-in.component";
import {AuthGuardService} from "./sign-up/auth-guard.service";
import {LibraryAppComponent} from "./library-app/library-app.component";
import {MainPageComponent} from "./library-app/main-page/main-page.component";
import {FavouritesPageComponent} from "./library-app/favourites-page/favourites-page.component";
import {RequestBookComponent} from "./library-app/request-book/request-book.component";

const routes: Routes = [
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-up-details', component: DetailSignUpComponent, children: [
      { path: 'personal-information', component: PersonalInformationComponent },
      { path: 'confirm', component: ConfirmComponent },
      { path: '**', redirectTo: 'personal-information', pathMatch: 'full' }
    ] },
  { path: 'main-page', component: LibraryAppComponent,
    // canActivate: [AuthGuardService],
    children: [
      { path: 'all-books', component: MainPageComponent },
      { path: 'favourite-books', component: FavouritesPageComponent },
      { path: 'request-book', component: RequestBookComponent },
      { path: '**', redirectTo: 'all-books', pathMatch: 'full' }
    ]
  },
  { path: 'admin', component: AdminTabViewComponent, children: [
      { path: 'books', component: BookPanelComponent },
      { path: 'users', component: UsersPanelComponent },
      { path: '**', redirectTo: 'books', pathMatch: 'full' }
    ] },
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: '**', redirectTo: 'sign-in' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
