import { VIDEOGAMES_ORIGIN } from "../../actiontypes";

export default function vgorigin(payload) {
  return {
    type: VIDEOGAMES_ORIGIN,
    payload,
  };
}