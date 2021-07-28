import Topbar from "./components/topbar/Topbar"
import Intro from "./components/intro/intro"
import Contact from "./components/contact/Contact"
import Testimonials from "./components/testimonials/Testimonials"
import Works from "./components/works/Works"
import Portfolio from "./components/portfolio/Portfolio"
import Menu from "./components/menu/Menu"
import "./app.scss"
import {useState} from "react";

function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
    <Intro/>
    <Portfolio/>
    <Works/>
    <Testimonials/>
    <Contact/>

    </div>
    </div>
  );
}

export default App;
