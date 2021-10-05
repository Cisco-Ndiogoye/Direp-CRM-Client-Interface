import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { LoadPrescriber } from './../../features/prescriber/prescriber-state/prescriber.actions';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/core/reducer';
import { Prescriber } from 'src/app/core/classes/prescriber';
import { selectPrescriberSelector } from '../../features/prescriber/prescriber-state/prescriber.selectors'

@Component({
  selector: 'app-prescribers-list-page',
  templateUrl: './prescribers-list-page.component.html',
  styleUrls: ['./prescribers-list-page.component.scss']
})
export class PrescribersListPageComponent implements OnInit {

  readonly prescriberList$ : Observable<Prescriber[]>
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource : Prescriber[]

  constructor(private store: Store<AppState>) {

    this.store.dispatch(new LoadPrescriber())
    this.prescriberList$ = this.store.pipe(select(selectPrescriberSelector)).pipe(
      map((value) => {
        this.dataSource = value
        return value
      })
    )
    console.log(this.dataSource)

  }

  ngOnInit(): void {
  }

}
