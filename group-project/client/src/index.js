import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import './styles.css';

import rootReducer from "./redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
);

store.subscribe(() => {
  console.log(store.getState());
})

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
document.getElementById('root'));
registerServiceWorker();
