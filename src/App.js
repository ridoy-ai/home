import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Research from "./components/Research";

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Research/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
