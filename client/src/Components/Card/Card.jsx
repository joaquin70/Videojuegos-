import React from "react";

import { Link } from "react-router-dom";

export default function card({
  name,
  image,
  genres,
  rating,
  handleDelete,
  id,
}) {
  const genresArray = genres.split(",");
  let formattedGenres;

  if (genresArray.length > 2) {
    formattedGenres = genresArray.slice(0, 2).join(",");
  } else if (genresArray.length === 1) {
    formattedGenres = genresArray[0];
  } else {
    formattedGenres = genresArray.join(",") + " (...)";
  }

  const handleDeleteClick = () => {
    handleDelete();
  };
}