
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Init from "./myProjects/Init";
import Miami from "./myProjects/Miami";
import CatSelector from "./myProjects/CatSelector";
import VerdeVentures from "./myProjects/VerdeVentures";

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
        <Route path='/projects/catSelector' element={<CatSelector/>}/>
        <Route path='/projects/verdeVentures' element={<VerdeVentures/>}/>
      </Routes>
       
    </div>
  );
}

export default App;
