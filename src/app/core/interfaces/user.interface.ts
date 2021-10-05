import { Role } from "../enums/role.enum";

export interface IUser {

  id: number,
  accountId: number,
  email: string,
  username: string,
  password: string,
  role: Role,

}
