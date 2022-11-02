import {RoleEnum} from "./role.enum";

export class UserModel {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  role?: RoleEnum;
}
