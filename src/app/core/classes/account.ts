import { Role } from '../enums/role.enum';
import { IAccount } from '../interfaces/account.interface';
import { Team } from './team';




export class Account implements IAccount{

  constructor(
    public id = 0,
    public firstName = '',
    public lastName = '',
    public email = '',
    public username = '',
    public password = '',
    public phoneNumber = '',
    public role = Role.None,
    public team = new Team()
  ) {}


  static Build(account: IAccount) {
    if(!account) { return new Account(); }

    if(typeof account.role === 'string') {
      switch (account.role) {
        case 'ADMINISTRATOR':
          account.role = Role.Administrator;
          break;

        case 'MANAGER':
          account.role = Role.Manager;
          break;

        case 'REPRESENTATIVE':
          account.role = Role.Representative;
          break;

        default:
          account.role = Role.None;
          break;
      }
    }

    return new Account(
      account.id,
      account.firstName,
      account.lastName,
      account.email,
      account.username,
      account.password,
      account.phoneNumber,
      account.role,
      account.team
    )
  }

  toJson(): Object {
    const serialized = Object.assign(this)
    delete serialized.id;
    return serialized;
  }
}
