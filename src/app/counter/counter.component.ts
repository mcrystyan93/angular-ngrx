import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CountActions } from './store/actions';
import { selectCount } from './store/reducers';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.less']
})
export class CounterComponent {
  public count$!: Observable<number>;

  constructor(
    private readonly _store: Store
  ) {
    this.count$ = this._store.select(selectCount);
  }

  public increment() {
    this._store.dispatch(CountActions.increment());
  }

  public decrement() {
    this._store.dispatch(CountActions.decrement());
  }

  public reset() {
    this._store.dispatch(CountActions.reset());
  }
}
