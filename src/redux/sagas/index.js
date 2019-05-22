import { all } from "redux-saga/effects";
import {
  watchNotificationActions,
  watchNotificationAdd
} from "./notifications";
import { watchIncrementAsync } from "./counter";

export default function* rootSaga() {
  yield all([
    watchIncrementAsync(),
    watchNotificationActions(),
    watchNotificationAdd()
  ]);
}
