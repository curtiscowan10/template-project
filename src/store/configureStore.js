import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./configureSagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = () =>
    combineReducers({
    // reducer: file,
    });

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
