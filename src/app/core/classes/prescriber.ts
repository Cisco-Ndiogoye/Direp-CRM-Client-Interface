import { IPrescriber } from './../interfaces/prescriber.interface';


export class Prescriber implements IPrescriber{

  constructor(
    public id = 0,
    public firstName = '',
    public lastName = '',
    public organization = '',
    public service = '',
    public titre = '',
    public speciality = '',
    public prescriberClass = '',
    public email = '',
    public phoneNumber = ''
  ) {}


  static Build(prescriber: IPrescriber) {
    if(!prescriber) { return new Prescriber(); }

    return new Prescriber(
      prescriber.id,
      prescriber.firstName,
      prescriber.lastName,
      prescriber.organization,
      prescriber.titre,
      prescriber.service,
      prescriber.speciality,
      prescriber.prescriberClass,
      prescriber.email,
      prescriber.phoneNumber,
    )
  }

  toJson(): Object {
    const serialized = Object.assign(this)
    delete serialized.id;
    return serialized;
  }
}
