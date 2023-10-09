import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import getvgamebyid from "../../redux/Actions/getbyid";

export default function VideogameDetails(props) {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getvgamebyid(id));
  }, [dispatch]);
  var detail = useSelector((state) => state.videodetails);
}