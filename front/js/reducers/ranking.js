import { FETCH_RANDOM_NUMBERS } from "../actions";

export function ranking(state = {}, action) {
    switch (action.type) {
        case FETCH_RANDOM_NUMBERS:
            const numbers = action.payload.reduce((acc, val) => {
                const previousStateValue = acc[val] ? 0 : state[val] || 0;
                const previousAccumulatorValue = acc[val] || 0;
                return {
                    ...acc,
                    [val]: previousStateValue + previousAccumulatorValue + 1,
                };
            }, {});
            return { ...state, ...numbers };
        default:
            return state;
    }
}
