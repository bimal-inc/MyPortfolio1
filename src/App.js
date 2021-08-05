import React, { useState } from 'react';
import Topbar from './components/topbar/topbar'
import Menu from './components/menu/menu'
import Contact from './components/contact/contact'
import Intro from './components/intro/Intro'
import Testo from './components/testo/testo'
import Portfolio from './components/portfolio/Portfolio'
import Work from './components/work/Work'
import './app.scss'
// import { useEffect , useRef } from 'react'
function App() {
  const [menuOpen,setMenuOpen] = useState(false);

  return (
  

    <div className="App">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro />
      <Portfolio />
      <Work />
      <Testo />
      <Contact />

    </div>
    </div>
  
  );
}

export default App;
