import { combineReducers } from "redux";
import { latest } from "./reducers/latest";
import { ranking } from "./reducers/ranking";

export const rootReducer = combineReducers({ latest, ranking });
