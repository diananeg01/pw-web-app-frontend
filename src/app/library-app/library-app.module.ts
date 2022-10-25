import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from "primeng/ripple";
import {CardModule} from "primeng/card";
import { MenubarComponent } from './menubar/menubar.component';
import {MenubarModule} from "primeng/menubar";
import { LibraryAppComponent } from './library-app.component';
import { FavouritesPageComponent } from './favourites-page/favourites-page.component';
import { RequestBookComponent } from './request-book/request-book.component';
import { BookViewComponent } from '../admin/admin-tab-view/book-panel/book-view/book-view.component';



@NgModule({
  declarations: [
    MainPageComponent,
    MenubarComponent,
    LibraryAppComponent,
    FavouritesPageComponent,
    RequestBookComponent,
    BookViewComponent
  ],
  imports: [
    CommonModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    RippleModule,
    CardModule,
    MenubarModule,
    RatingModule
  ]
})
export class LibraryAppModule { }
