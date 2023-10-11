import React from "react";
import  { useState } from "react";
import { useDispatch } from "react-redux";
import getvgbyName from "../../Redux/Actions/getbyname";
import stl from "./Nav.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleinputChange(e) {
    e.precentDefault();
    setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getvgbyName(name));
    setName("");
  }
  return (
    <div className={stl.sbcontainer}>
      <input
        className={stl.sbinput}
        onChange={(e) => handleinputChange(e)}
        type="text"
        placeholder="Search by name"
        value={name}
      />
      <button
        className={stl.sbbot}
        onClick={(e) => handleSubmit(e)}
        type="submit"
      >
        Search
      </button>
    </div>
  );
}