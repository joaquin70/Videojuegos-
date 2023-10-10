import "./App.css";
import {Route,Routes} from "react-router-dom";
import LandingPage from "./Views/Landing/Landing";
import HomePage from "./Views/Home/Home";
import AddVideogame from "./Views/add/add";
import VideogameDetails from "./Components/detail/detail";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<LandingPage/>}/>
        <Route path="/videogame" element={<AddVideogame/>}/>
        <Route path="videogame/:id" element={<VideogameDetails/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="*" element={<LandingPage/>}/>
        </Routes>
    </div>
  );
}
export default App;
