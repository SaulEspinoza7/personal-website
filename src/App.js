
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Init from "./myProjects/Init";
import Miami from "./myProjects/Miami";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/personal-website/' element={<Home />}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/projects/init' element={<Init/>}/>
        <Route path='/projects/miamiGuide' element={<Miami/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
