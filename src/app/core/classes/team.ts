import { ITeam } from "../interfaces/team.interface";


export class Team implements ITeam{

  constructor(
    public id = 0,
    public teamDesignation = '',
  ) {}


  static Build(team: ITeam) {
    if(!team) { return new Team(); }

    return new Team(
      team.id,
      team.teamDesignation
    )
  }

  toJson(): Object {
    const serialized = Object.assign(this)
    delete serialized.id;
    return serialized;
  }
}
