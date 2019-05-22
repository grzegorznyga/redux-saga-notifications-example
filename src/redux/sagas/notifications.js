import { put, takeEvery, take, call, race, delay } from "redux-saga/effects";
import { increment } from "redux/modules/counter";
import {
  addNotification,
  removeNotification
} from "redux/modules/notifications";

///notifications
export function* createNotification(action) {
  yield put(
    addNotification({
      id: new Date().valueOf(),
      text: action.type
    })
  );
}

export function* watchNotificationActions() {
  yield takeEvery(increment, createNotification);
}

export function* watchNotificationAdd() {
  yield takeEvery(addNotification, watchNotificationRemove);
}

export function* watchNotificationRemove(action) {
  yield race({
    timer: call(notificationTimer, action), // remove after ms
    cancel: take(
      //or remove on click
      a =>
        a.type === removeNotification.toString() &&
        a.payload.id === action.payload.id
    )
  });
}

//start timer
function* notificationTimer(action) {
  yield delay(3000);
  yield put(removeNotification(action.payload));
}
