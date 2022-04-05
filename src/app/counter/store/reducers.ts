import { createFeature, createReducer, on } from "@ngrx/store";
import { CountActions } from "./actions";

interface CountState {
  count: number;
};
const initialState: CountState = {
  count: 0
};
export const COUNT_STATE_NAME = 'count';
export const countFeature = createFeature({
  name: COUNT_STATE_NAME,
  reducer: createReducer(
    initialState,
    on(CountActions.increment, state => ({ ...state, count: state.count + 1 })),
    on(CountActions.decrement, state => ({ ...state, count: state.count - 1 })),
    on(CountActions.reset, state => ({ ...state, count: 0 })),
    on(CountActions.loadSuccess, (state, { value }) => ({ ...state, count: value }))
  )
});

export const {
  name,
  selectCount,
  selectCountState
} = countFeature;
