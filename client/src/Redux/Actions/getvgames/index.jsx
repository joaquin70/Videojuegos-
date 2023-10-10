import axios from "axios";
import { GET_VIDEOGAMES } from "../../actiontypes";

export const getVideogames = () => {
  return async function (dispatch) {
    const videogames = await axios.get("http://localhost:3001/videogames");
   // console.log(result);
    dispatch({ type: GET_VIDEOGAMES, payload: videogames });
  };
};