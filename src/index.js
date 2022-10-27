import React from 'react';
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import {Provider} from 'react-redux'
import { createStore } from 'redux'

const defaultState = {
  cash: 0
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_CASH":
      return {...state, cash: state.cash + action.payload}
    case "GET_CASH":
      return {...state, cash: state.cash - action.payload}


    default:
      return state
  } 
}
const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);