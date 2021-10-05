import { IPasswordDTO } from "../interfaces/password.dto.interface";



export class PasswordDTO implements IPasswordDTO {

  constructor(
    public oldPassword = '',
    public newPassword = '',
    public rePassword = ''
  ) {}

  static Build(iPasswordDto: IPasswordDTO) {
    if(!iPasswordDto) { return new PasswordDTO(); }

    return new PasswordDTO(
      iPasswordDto.oldPassword,
      iPasswordDto.newPassword,
      iPasswordDto.rePassword
    )

  }

  toJson(): Object {
    const serialized = Object.assign(this)
    delete serialized.id;
    return serialized;
  }
}
