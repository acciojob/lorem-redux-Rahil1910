import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; 
import { Provider } from 'react-redux';
import store from './components/store.js';
import "regenerator-runtime/runtime";


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root"));
