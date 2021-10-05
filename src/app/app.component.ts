import { AppComponentFacade } from './app.component.facade';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [AppComponentFacade]
})
export class AppComponent {

  readonly isLoggedIn$: Observable<boolean>;
  readonly isLoggedOut$: Observable<boolean>;

  constructor(private readonly _appComponentFacade: AppComponentFacade){
    this.isLoggedIn$ = this._appComponentFacade.isLoggedIn$;
    this.isLoggedOut$ = this._appComponentFacade.isLoggedOut$;
  }

}
