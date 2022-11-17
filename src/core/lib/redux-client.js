import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory as createHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as formReducer } from "redux-form";

class ReduxClient {
  static getInstance(reducers) {
    if (!(ReduxClient._instance instanceof ReduxClient)) {
      if (!reducers) {
        throw new Error("Missing root reducers.");
      }

      ReduxClient._instance = new ReduxClient(reducers);
    }

    return ReduxClient._instance;
  }

  constructor(reducers) {
    this.history = createHistory();
    this.historyMiddleware = routerMiddleware(this.history);
    this.store = this._initStore(reducers);
  }

  getStore() {
    return this.store;
  }

  getHistory() {
    return this.history;
  }

  _initStore(reducers) {
    const middlewares = [thunk, this.historyMiddleware];

    const _store = createStore(
      combineReducers({
        ...reducers,
        form: formReducer,
        router: connectRouter(this.history),
      }),
      process.env.NODE_ENV === "development"
        ? composeWithDevTools(applyMiddleware(...middlewares))
        : applyMiddleware(...middlewares)
    );

    return _store;
  }
}

export default ReduxClient;
