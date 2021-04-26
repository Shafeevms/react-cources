import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.scss';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { cardListReducer } from './store/cardListReducer';
import { filterReducer } from './store/filterReducer';

const rootReducer = combineReducers({
  cardList: cardListReducer,
  filter: filterReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
