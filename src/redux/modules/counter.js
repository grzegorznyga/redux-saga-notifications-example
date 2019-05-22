import { createAction, handleActions } from "redux-actions";

// Actions Creators
export const increment = createAction("[counter] add");
export const decrement = createAction("[counter] clear");

// Reducer
export default handleActions(
  new Map([[increment, state => state + 1], [decrement, state => state - 1]]),
  0
);

// Selectors
export const selectCounter = state => state.counter;
