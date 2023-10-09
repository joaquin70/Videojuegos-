import REact from "react";

export default function Paging({
  vgamesPerPage,
  allVgames,
  currpage,
  actualPAge,
}) {
  const pageNumbers = [];
  const maxpage = Math.ceil(allVgames / vgamesPerPage);

  for (let i = 0; i < maxpage; i++) {
    pageNumbers.push(i + 1);
  }
}