import  getvgames  from "../../Redux/Actions/getvgames";
import sortvgames from "../../Redux/Actions/sortvgame";
import { Link } from "react-router-dom";
import stl from "./Landing.module.css";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getvgames());
  }, [dispatch]);
  function handleSortvideogames(e) {
    dispatch(sortvgames("asc"));
  }
  return (
    <div className={stl.lpcontainer}>
      <Link to='/home'>
      <button className={stl.but} onClick={handleSortvideogames}>Iniciar</button>
      </Link>
    </div>
  );
}