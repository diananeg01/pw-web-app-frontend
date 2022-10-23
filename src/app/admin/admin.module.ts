import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookPanelComponent } from './admin-tab-view/book-panel/book-panel.component';
import { UsersPanelComponent } from './admin-tab-view/users-panel/users-panel.component';
import { AdminTabViewComponent } from './admin-tab-view/admin-tab-view.component';
import {ToolbarModule} from "primeng/toolbar";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {RippleModule} from "primeng/ripple";
import {RatingModule} from "primeng/rating";
import {DialogModule} from "primeng/dialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {InputNumberModule} from "primeng/inputnumber";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {FormsModule} from "@angular/forms";
import {TabMenuModule} from "primeng/tabmenu";



@NgModule({
  declarations: [
    BookPanelComponent,
    UsersPanelComponent,
    AdminTabViewComponent
  ],
  imports: [
    CommonModule,
    ToolbarModule,
    FileUploadModule,
    TableModule,
    RippleModule,
    RatingModule,
    DialogModule,
    RadioButtonModule,
    ConfirmDialogModule,
    ToastModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    TabMenuModule
  ]
})
export class AdminModule { }
