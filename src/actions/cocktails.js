import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";
import { GET_COCKTAILS, DELETE_COCKTAIL, ADD_COCKTAIL } from "./types";

export const getCocktails = () => (dispatch) => {
  axios
    .get("/cocktails/")
    .then((res) => {
      dispatch({
        type: GET_COCKTAILS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const deleteCocktail = (id) => (dispatch) => {
  axios
    .delete("/cocktails/${id}")
    .then((res) => {
      dispatch({
        type: DELETE_COCKTAIL,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

export const addCocktail = (cocktail) => (dispatch, getState) => {
  axios
    .post("/cocktails/", cocktail, tokenConfig(getState))
    .then((res) => {
      dispatch(createMessage({ addCocktail: "Cocktail Added" }));
      dispatch({
        type: ADD_COCKTAIL,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
