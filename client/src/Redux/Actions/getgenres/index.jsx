import { GET_GENRES } from "../../actiontypes/index";

import axios from "axios";

export default function getGenres() {
  return async function (dispatch) {
    var result = await axios.get(`http://localhost:3001/genre`);
    return dispatch({
      type: GET_GENRES,
      payload: result.data,
    });
  };
}