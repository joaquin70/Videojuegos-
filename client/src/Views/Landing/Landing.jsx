import { getVideogames } from "../../Redux/Actions/getvgames";
import sortvgames from "../../Redux/Actions/sortvgame";
import {useDispatch} from "react-redux";
import {useEffect} from "react"
import {Link} from "react-router-dom";
import stl from "./Landing.module.css";

export default function LandingPage() {
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getVideogames());
  }, []);
  function handleSortvideogames(e) {
    dispatch(sortvgames("asc"));
  }
return(
  <div className={stl.lpcontainer}>
    <Link to='/home'>
      <button className={stl.but} onClick={handleSortvideogames}>Iniciar</button>
    </Link>
  </div>
)

}