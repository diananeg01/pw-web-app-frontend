import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {PersonalInformationComponent} from "./personal-information/personal-information.component";
import {ConfirmComponent} from "./confirm/confirm.component";

const routes: Routes = [
  { path: 'personal-information', component: PersonalInformationComponent },
  { path: 'confirm', component: ConfirmComponent },
  { path: '**', redirectTo: 'personal-information', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DetailSignUpRoutingModule { }
