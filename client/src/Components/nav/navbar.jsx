import { useDispatch } from "react-redux";
import getVgbyName from "../../redux/Actions/getbyname";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function handleinputChange(e) {
    e.precentDefault(), setName(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getVgbyName(name));
    setName("");
  }
}