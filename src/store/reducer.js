import { initialState } from "./initialState";

//create the logic that manipulates the state
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT": {
      const copy = { ...state };
      copy.count += 1;
      return copy;
    }

    case "DECREMENT": {
      const copy = { ...state };
      copy.count -= 1;
      return copy;
    }

    case "RESET": {
      const copy = { ...state };
      copy.count = 0;
      return copy;
    }

    default:
      console.log("Reducer started!");
      return state;
  }
}
