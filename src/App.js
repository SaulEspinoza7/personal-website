
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/personal-website/' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
