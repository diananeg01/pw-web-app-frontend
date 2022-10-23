import {Component, OnInit} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {UserModel} from "../../../model/user.model";
import {RoleEnum} from "../../../model/role.enum";

@Component({
  selector: 'pw-users-panel',
  templateUrl: './users-panel.component.html',
  styleUrls: ['./users-panel.component.scss']
})
export class UsersPanelComponent implements OnInit {

  users: UserModel[] = [];
  selectedUsers: UserModel[] = [];
  user: UserModel;
  userDialog: boolean;
  submitted: boolean;

  constructor(private messageService: MessageService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    //ia din endpoint
  }

  makeAdmin(user: UserModel) {
    user.role = RoleEnum.ADMIN;
    //endpoint
  }

  deleteUser(user: UserModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.username + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(val => val.id !== user.id);
        this.user = {};
        //endpoint
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'User Deleted!', life: 3000});
      }
    });
  }

  deleteSelectedUsers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.users = this.users.filter(val => !this.selectedUsers.includes(val));
        this.selectedUsers = [];
        //endpoint
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Users Deleted!', life: 3000});
      }
    });
  }
}
