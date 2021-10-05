import { IUser } from "../interfaces/user.interface";
import { Role } from "../enums/role.enum";


export class User implements IUser {

  constructor(
    public id = 0,
    public accountId = 0,
    public email = '',
    public username = '',
    public password = '',
    public role = Role.None
    ) {}

  static Build(user: IUser) {
    if(!user) {
      return new User();
    }

    if(typeof user.role === 'string') {
      switch (user.role) {
        case 'ADMINISTRATOR':
          user.role = Role.Administrator;
          break;

        case 'MANAGER':
          user.role = Role.Manager;
          break;

        case 'REPRESENTATIVE':
          user.role = Role.Representative;
          break;

        default:
          user.role = Role.None;
          break;
      }
    }

    return new User(
      user.id,
      user.accountId,
      user.email,
      user.username,
      user.password,
      user.role
    )
  }

  toJson(): Object {
    const serialized = Object.assign(this)
    delete serialized.id;
    delete serialized.accountId;
    return serialized;
  }

}


