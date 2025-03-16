import { put, takeEvery, call } from "redux-saga/effects";

function* fetchDataApi() {
  yield put({ type: "LOADING" });
  return yield fetch("https://api.freeapi.app/api/v1/public/randomproducts?").then((res) => res.json());
}

function* fetchDataSaga() {
  try {
    const data = yield call(fetchDataApi);
    yield put({ type: "SET_DATA", payload: data });
  } catch (error) {
    yield put({ type: "ERROR", payload: error.message });
  }
}

export function* fetchData() {
  yield takeEvery("FETCH_DATA", fetchDataSaga);
}
