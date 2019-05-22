import { createAction, handleActions } from "redux-actions";
const initState = {};

// Actions Creators
export const addNotification = createAction("[notifications] add");
export const removeNotification = createAction("[notifications] remove");
export const clearFeedback = createAction("[notifications] clear");

// Reducer
export default handleActions(
  new Map([
    [
      addNotification,
      (state, action) => {
        return {
          ...state,
          [action.payload.id]: action.payload
        };
      }
    ],
    [
      removeNotification,
      (state, action) => {
        // If the name of the property to remove is constant
        const { [action.payload.id]: omit, ...rest } = state;
        return rest;
      }
    ],
    [clearFeedback, () => ({})]
  ]),
  initState
);

// Selectors
export const selectNotificationsState = state => state.notifications;
// add reselect
export const selectAllNotifications = state =>
  Object.values(selectNotificationsState(state));
