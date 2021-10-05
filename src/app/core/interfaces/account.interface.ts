import { Role } from "../enums/role.enum";
import { Team } from "../classes/team";

export interface IAccount {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  phoneNumber: string,
  password: string,
  role: Role,
  team: Team
}
