import { ActionReducer, MetaReducer } from "@ngrx/store";

export const debug = (reducer: ActionReducer<any>): ActionReducer<any> => (state, action) => {
  console.log('state', state);
  console.log('action', action);

  return reducer(state, action);
};

export const metaReducers: MetaReducer<any>[] = [debug];
