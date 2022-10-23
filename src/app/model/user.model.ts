import {RoleEnum} from "./role.enum";

export class UserModel {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: RoleEnum;

  constructor(id: string, username: string, firstname: string, lastname: string, email: string, password: string) {
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.role = RoleEnum.READER;
  }
}
