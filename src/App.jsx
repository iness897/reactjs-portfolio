import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Competences from "./components/competences/Competences";
import Portfolio from "./components/portfolio/Portfolio";
import Parcours from "./components/parcours/Parcours";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react"
import Menu from "./components/menu/Menu";




function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       
       <div className="sections">
         <Intro />
         <Competences />
         <Portfolio />
         <Parcours />
         <Contact />

       </div>
    </div>
  );
}

export default App;
