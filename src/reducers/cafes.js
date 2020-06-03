import { GET_CAFES } from "../actions/types.js";

const initialState = {
  cafes: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CAFES:
      return {
        ...state,
        cafes: action.payload,
      };

    default:
      return state;
  }
}
