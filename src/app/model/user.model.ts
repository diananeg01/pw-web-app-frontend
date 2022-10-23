import {RoleEnum} from "./role.enum";

export class UserModel {
  id?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: RoleEnum;
}
