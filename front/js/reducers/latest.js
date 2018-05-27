import { FETCH_RANDOM_NUMBERS } from "../actions";

export function latest(state = [], action) {
  switch (action.type) {
    case FETCH_RANDOM_NUMBERS:
      return action.payload;
    default:
      return state;
  }
}
