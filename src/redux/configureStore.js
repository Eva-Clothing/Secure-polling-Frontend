import { createStore, applyMiddleware,  combineReducers,compose } from "redux";
import {voteReducer} from "./reducers/vote"
import {dataReducer} from "./reducers/data"
import {lineReducer} from "./reducers/line"
import {barReducer} from "./reducers/bar"
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
);

const store = createStore(
  combineReducers({
      vote: voteReducer,
      data: dataReducer,
      line: lineReducer,
      bar: barReducer
  }),
  enhancer
);

export default store;