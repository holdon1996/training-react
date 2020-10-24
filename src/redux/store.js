import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger'
import dataReducer from './DataReducers';

const store = createStore(dataReducer, composeWithDevTools(applyMiddleware()));

export default store;
