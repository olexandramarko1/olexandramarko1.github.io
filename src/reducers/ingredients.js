import { GET_INGREDIENTS } from "../actions/types.js";

const initialState = {
  ingredients: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    default:
      return state;
  }
}
