import { SORT_VGAMES } from "../../actiontypes";

export default function sortvgames(payload) {
  return {
    type: SORT_VGAMES,
    payload,
  };
}