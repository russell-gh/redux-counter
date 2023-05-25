import { initialState } from "./initialState";
import { INCREMENT, DECREMENT, RESET } from "./types";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  switch (action.type) {
    // case INCREMENT: {
    //   const copy = { ...state };
    //   copy.count += 1;
    //   return copy;
    // }

    case INCREMENT: {
      return { ...state, count: state.count + 1 };
    }

    case DECREMENT: {
      if (state.count === 0) return;
      const copy = { ...state };
      copy.count -= 1;
      return copy;
    }

    case RESET: {
      const copy = { ...state };
      copy.count = 0;
      return copy;
    }

    default:
      console.log("Reducer started or INVALID reducer type, probably a typo");
      return state;
  }
}
