import { all } from "redux-saga/effects";

const sagas: Array<string> = [
  // spawn(middleware),
];

export default function* rootSaga() {
  yield all([...sagas]);
}
