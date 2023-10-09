import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import postvgame from "../../Redux/Actions/postvgame";
import getVideogames from "../../Redux/Actions/getvgames";
import getGenres from "../../Redux/Actions/getgenres";
import getplatforms from "../../Redux/Actions/getplatforms";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Name is required";
  } else if (!input.rating || input.rating < 0 || input.rating > 5) {
    errors.rating = "Rating must be a number between 0-5";
  }
  return errors;
}

export default function AddVideogame() {
  const dispatch = useDispatch();
  const history = useLocation();

  useEffect(() => {
    dispatch(getgenres());
    dispatch(getplatforms());
  }, []);

  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    reldate: "",
    rating: "",
    platform: [],
    genre: [],
  });

  const [errors, setErrors] = useState({});
  let allGenres = useSelector((state) => state.genres);
  let allplatforms = useSelector((state) => state.platforms);
  allgenres = allgenres.filter((p) => p !== "All");

  const handleOnChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setErrors((prevErrors) =>
      validate({ ...input, [e.target.name]: e.target.value })
    );
  };
  const handlePlatforms = (e) => {
    const platform = e.target.value;

    if (e.target.checked) {
      setInput((prevState) => ({
        ...prevState,
        platform: [...prevState.platform, platform],
      }));
    } else {
      setInput((prevState) => ({
        ...prevState,
        platform: prevState.platform.filter((p) => p !== platform),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.name) {
      return alert("Name is required");
    }
    if (!/^\d{4}\-\d{1,2}\-\d{1,2}$/.test(input.reldate)) {
      return alert(
        "Wrong released date format. Should be YYYY-MM-DD OR YYYY-M-D"
      );
    }
    if (!input.rating) {
      return alert("Rating is required");
    }
    if (
      !/^(?:[1-9]\d{0,2}(?:,\d{3})*|0)(?:\.\d+)?$/.test(input.rating) ||
      input.rating < 0 ||
      input.rating > 5
    ) {
      return alert("Wrong format for Rating. Should be a number between 0-5");
    }
    if (input.platform.length === 0) {
      return alert("Platform is required");
    }
    dispatch(postvgame(input));
    dispatch(getVideogames());
    alert(`Videogame ${input.name} has been added`);
    setInput({
      name: "",
      image: "",
      description: "",
      reldate: "",
      rating: 0,
      platform: [],
      genre: [],
    });
  };
}