import React from "react";
import { About } from "./molecules/About";
import { Contact } from "./molecules/Contact";
import { Footer } from "./molecules/Footer";
import { Header1 } from "./molecules/Header1";
import { Header2 } from "./molecules/Header2";
import { SKills } from "./molecules/Skills";

function App() {
  return (
   <div>
    <Header1/>
  <div className="page-content">
    <div id="content">
      <Header2/>
      <About/>
      <SKills/>
      <Contact/>
      <Footer/>
    </div>
  </div>
  <div id="scrolltop"><a className="btn btn-secondary" href="#top"><span className="icon"><i className="fas fa-angle-up fa-x" /></span></a></div>
</div>

  );
}

export default App;
