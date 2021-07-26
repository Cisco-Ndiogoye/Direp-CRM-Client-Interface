import { Role } from "src/app/auth/auth.enum";


export interface IAccount {
  id: number,
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  phoneNumber: string,
  role: Role,
}

export class Account implements IAccount{

  constructor(
    public id = 0,
    public firstName = '',
    public lastName = '',
    public email = '',
    public username = '',
    public phoneNumber = '',
    public role = Role.None,
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
      account.phoneNumber,
      account.role
    )
  }

  toJson(): Object {
    const serialized = Object.assign(this)
    delete serialized.id;
    return serialized;
  }
}
