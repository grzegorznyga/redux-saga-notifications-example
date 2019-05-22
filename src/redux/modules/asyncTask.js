import { createAction, handleActions } from "redux-actions";

// Reducer
export const ASYNCTASK_START = "ASYNCTASK_START";
export const ASYNCTASK_END = "ASYNCTASK_END";
export const startAsyncTask = createAction(ASYNCTASK_START);
export const endAsyncTask = createAction(ASYNCTASK_END);
export default handleActions(
  {
    ASYNCTASK_START: (state, action) => state + 1,
    ASYNCTASK_END: (state, action) => state - 1
  },
  false
);

// Selectors
export const selectIsAsyncTask = state => state.asyncTask > 0;
