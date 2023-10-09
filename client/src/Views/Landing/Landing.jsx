import { getVideogames } from "../../Redux/Actions/getvgames";
import sortvgames from "../../Redux/Actions/sortvgame";
import {useDispatch} from "react-redux";
import {useEffect} from "react"



export default function LandingPage() {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getVideogames());
  }, []);
  function handleSortvideogames(e) {
    dispatch(sortvgames("asc"));
  }


}