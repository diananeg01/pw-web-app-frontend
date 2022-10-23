import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPanelComponent } from './admin-tab-view/book-panel/book-panel.component';
import { UsersPanelComponent } from './admin-tab-view/users-panel/users-panel.component';
import { AdminTabViewComponent } from './admin-tab-view/admin-tab-view.component';



@NgModule({
  declarations: [
    BookPanelComponent,
    UsersPanelComponent,
    AdminTabViewComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
