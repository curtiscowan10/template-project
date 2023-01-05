import { all } from "redux-saga/effects";

const sagas = [
    // spawn(middleware),
];

export default function* rootSaga() {
    yield all([...sagas]);
}
