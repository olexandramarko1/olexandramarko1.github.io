import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_INGREDIENTS } from "./types";

export const getIngredients = () => (dispatch) => {
  axios
    .get("/ingredients/")
    .then((res) => {
      dispatch({
        type: GET_INGREDIENTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
