import { createStore, compose } from "redux";

import { rootReducer } from "../rootReducer";
import { fetchRandomNumbers } from "../actions";

const store = createStore(rootReducer);

describe("numbers ranking", () => {
  it("should add latest numbers to ranking numbers", () => {
    store.dispatch(fetchRandomNumbers([1, 2, 3, 4, 5]));
    store.dispatch(fetchRandomNumbers([1, 2, 3, 4, 5]));
    store.dispatch(fetchRandomNumbers([10, 5, 3, 2, 1]));
    store.dispatch(fetchRandomNumbers([1, 2, 3, 3, 7]));
    store.dispatch(fetchRandomNumbers([10, 10, 10, 9, 9]));
    store.dispatch(fetchRandomNumbers([8, 8, 8, 8, 8]));
    store.dispatch(fetchRandomNumbers([1, 2, 3, 4, 5]));
    store.dispatch(fetchRandomNumbers([7, 7, 7, 7, 7]));

    expect(store.getState().ranking).toEqual({
      1: 5,
      2: 5,
      3: 6,
      4: 3,
      5: 4,
      7: 6,
      8: 5,
      9: 2,
      10: 4
    });
  });
});
