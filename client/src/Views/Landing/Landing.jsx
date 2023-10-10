import { getVideogames } from "../../redux/Actions/getvgames";
import sortvgames from "../../Redux/Actions/sortvgame";
import { Link } from "react-router-dom";
import { getVgames } from "../../Redux/Actions/getvgames";
import stl from "./landing.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, []);
  function handleSortvideogames(e) {
    dispatch(sortvgames("asc"));
  }
  return (
    <div className={stl.lpcontainer}>
      <Link to="/home">
        <button className={stl.but} onClick={handleSortvideogames}>
          START 
        </button>
      </Link>
    </div>
  );
}