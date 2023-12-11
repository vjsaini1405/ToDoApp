import { takeEvery, put, call } from "redux-saga/effects";

import { API } from "../../services";
import { todo, todoFailed, todoLoadMoreFailed, todoLodeMore, todoLodeMoreSuccess, todoSuccess } from "./slice";

function* getToDoList({ payload }) {
  try {
    const response = yield call(API.getTodoList, payload);
    // console.log("responese====>>>",response);
    yield put(todoSuccess(response));
  } catch (error) {
    yield put(todoFailed());
  }
}

function* getToDoLodeMoreList({ payload }) {
    try {
        // console.log("payload",payload);
      const response = yield call(API.getTodoList, payload);
      // console.log("responese====>>>",response);
      yield put(todoLodeMoreSuccess(response));
    } catch (error) {
      yield put(todoLoadMoreFailed());
    }
  }

export default function* todoSaga() {
  yield takeEvery(todo, getToDoList);
  yield takeEvery(todoLodeMore,getToDoLodeMoreList)
}