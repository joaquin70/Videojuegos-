import axios from "axios";
import { GET_VIDEOGAMES } from "../../actiontypes";

export default function getVideogames(){
  return async function (dispatch) {
    const videogames = await axios.get("http://localhost:3001/videogames");
    console.log(videogames);
    dispatch({ type: GET_VIDEOGAMES, payload: videogames });
  };
};
