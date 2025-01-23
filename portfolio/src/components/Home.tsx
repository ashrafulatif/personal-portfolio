import BackgroundParticles from "./BackgroundParticles";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import Footer from "./Footer";
import Mail from "./Mail";
import Loader from "./Loader";
import { useEffect, useState } from "react";

const Home = () => {
  const [load, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  return load !== true ? (
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
  ) : (
    <Loader />
  );
};

export default Home;
