import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import Reducer from "./reducers";
import { fetchData } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducer,applyMiddleware(sagaMiddleware))

sagaMiddleware.run(fetchData);

export default store;
