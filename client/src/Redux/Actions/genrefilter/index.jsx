import { GENRES_FILTER } from "../../actiontypes";

export default function genrefilter(payload) {
  return {
    type: GENRES_FILTER,
    payload,
  };
}