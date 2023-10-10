import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import card from "../../Components/Card/Card";
import Paging from "../../Components/Paging/Paging";

import genrefilter from "../../Redux/Actions/genrefilter/index";
import vgorigin from "../../Redux/Actions/vgorigin/index";
import sortvgames from "../../redux/Actions/sortvgame/index";
import SearchBar from "../../Components/nav/navbar";
import getGenres from "../../Redux/Actions/getgenres";
import { getVideogames } from "../../Redux/Actions/getvgames";
import deletegame from "../../Redux/Actions/deletegame";

export default function HomePage() {
  const dispatch = useDispatch();
  allVgames = useSelector((state) => state.videogames);
  const allgenres = useSelector((state) => state.genres);
  const [currentPage, setCurrentPage] = useState(1);
  const [vgamesPerPage] = useState(8);
  const lastVgameIndex = currentPage * vgamesPerPage;
  const firstVgIndex = lastVgameIndex - vgamesPerPage;
  const currentVgames = allVgames.slice(firstVgIndex, lastVgameIndex);
  const [render, setRender] = useState("");

  const actualPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getVideogames());
    dispatch(getGenres());
  }, [dispatch]);

  function handleDelete(id) {
    dispatch(deletegame(id));
    alert("The game has been removed");
    dispatch(getVideogames());
  }
  function handleGenreFilter(e) {
    e.preventDefault();
    dispatch(genrefilter(e.target.value));
  }
  function handleOriginFilter(e) {
    dispatch(vgorigin(e.target.value));
    setCurrentPage(1);
  }
  function handleShowAll(e) {
    dispatch(vgorigin("All"));
    dispatch(sortvgames("asc"));
  }
  function handleSortcgames(e) {
    e.preventDefault();
    dispatch(sortvgames(e.target.value));
    setRender(`Order${e.target.value}`);
  }
}