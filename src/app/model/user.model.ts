import {UserRole} from "./user-role";

export class UserModel {
  id?: number;
  username?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  userRole?: UserRole;
}
