import { useEffect } from "react";
import "./App.css";
import BackgroundParticles from "./components/BackgroundParticles";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mail from "./components/Mail";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <BackgroundParticles />
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Mail />
    </>
  );
}

export default App;
