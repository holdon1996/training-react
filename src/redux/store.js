import { createStore } from "redux";
import dataReducer from './DataReducers';

const store = createStore(dataReducer);

export default store;
