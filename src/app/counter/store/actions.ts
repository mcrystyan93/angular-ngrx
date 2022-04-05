import { createAction, props } from "@ngrx/store";

enum ActionTypes {
  Load = '[Counter Component] Load',
  LoadSuccess = '[Counter Component] Load Success',
  LoadError = '[Counter Component] Load Error',
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset'
}
export namespace CountActions {
  export const increment = createAction(ActionTypes.Increment);
  export const decrement = createAction(ActionTypes.Decrement);
  export const reset = createAction(ActionTypes.Reset);
  export const load = createAction(ActionTypes.Load);
  export const loadSuccess = createAction(ActionTypes.LoadSuccess, props<{ value: number }>());
  export const loadError = createAction(ActionTypes.LoadError);
}
