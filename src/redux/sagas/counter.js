import { put, takeEvery, delay } from "redux-saga/effects";
import { createAction } from "redux-actions";
import { increment } from "redux/modules/counter";
import { startAsyncTask, endAsyncTask } from "redux/modules/asyncTask";

export const incrementA = createAction("[counter] add async");

export function* incrementAsync() {
  yield put(startAsyncTask());
  yield delay(1000);
  yield put(increment());
  yield put(endAsyncTask());
}

export function* watchIncrementAsync() {
  yield takeEvery(incrementA, incrementAsync);
}
