import {
  GET_COCKTAILS,
  DELETE_COCKTAIL,
  ADD_COCKTAIL,
} from "../actions/types.js";

const initialState = {
  cocktails: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_COCKTAILS:
      return {
        ...state,
        cocktails: action.payload,
      };
    case DELETE_COCKTAIL:
      return {
        ...state,
        cocktails: state.cocktails.filter(
          (cocktail) => cocktail.id !== action.payload
        ),
      };
    case ADD_COCKTAIL:
      return {
        ...state,
        leads: [...state.leads, action.payload],
      };
    default:
      return state;
  }
}
