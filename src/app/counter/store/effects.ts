import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';

import { CountActions } from './actions';

@Injectable({ providedIn: 'root' })
export class CounterEffects implements OnInitEffects {

  private loadCounter$ = createEffect(() => this._actions$.pipe(
    ofType(CountActions.load),
    map(() => CountActions.loadSuccess({ value: -3 })),
    catchError(err => of(CountActions.loadError()))
  ));

  constructor(
    private readonly _actions$: Actions
  ) { }

  public ngrxOnInitEffects(): Action {
    return CountActions.load();
  }

}
