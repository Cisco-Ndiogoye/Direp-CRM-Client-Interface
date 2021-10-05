import { TeamService } from './../../core/services/team.service';

import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { noop } from 'rxjs';
import { ITeam } from 'src/app/core/interfaces/team.interface';
import { Account } from 'src/app/core/classes/account';
import { Role } from 'src/app/core/enums/role.enum';
import { AccountService } from 'src/app/core/services/account.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  public teamList: ITeam[]
  public account: Account
  public Role = Role
  public rePassword : string = ''


  constructor(private teamService: TeamService, private accountService: AccountService) {

    this.account = new Account()
    this.teamService.getTeamsList().pipe(
      map((list: ITeam[]) => {
        this.teamList = list as ITeam[]
      })
    ).subscribe(
      noop,
      (err) => {
        console.log(err)
      }
    )

  }

  ngOnInit(): void {
  }

  addUser() {
    this.accountService.createAccount(this.account).subscribe(
      resp => {
        console.log('Utilisateur créé avec succés.')
        console.log(resp)
      },
      err => {
        console.log(err)
      }
    )
  }



}
