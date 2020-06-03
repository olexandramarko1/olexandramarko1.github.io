import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { GET_CAFES } from "./types";

export const getCafes = () => (dispatch) => {
  axios
    .get("/cafes/")
    .then((res) => {
      dispatch({
        type: GET_CAFES,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
