import axios from "axios";

export default function deletegame(payload) {
  return async function (dispatch) {
    try {
      await axios.delete(`http://localhost:3001/videogames/${payload}`);
    } catch (error) {
      console.log(error);
    }
  };
}