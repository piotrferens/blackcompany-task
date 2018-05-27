import { createStore, compose } from "redux";

import { rootReducer } from "./rootReducer";

const reduxDevtool =
    process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

export const store = createStore(rootReducer, reduxDevtool());
