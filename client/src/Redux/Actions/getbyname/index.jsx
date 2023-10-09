import { GET_VGAMES_BY_NAME } from "../../actiontypes/index";
import axios from "axios";

export default function getVgbyName(name) {
  return async function (dispatch) {
    try {
      var result = await axios.get(
        `http://localhost:3001/videogames?name=${name}`
      );
      console.log(result);
      return dispatch({
        type: GET_VGAMES_BY_NAME,
        payload: result.data,
      });
    } catch (error) {
      console.log("Error in Action GET_VGAMES_BY_NAME: ");
    }
  };
}