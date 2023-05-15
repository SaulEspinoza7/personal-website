
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/personal-website' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
