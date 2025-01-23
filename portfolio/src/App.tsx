import { useEffect } from "react";
import "./App.css";

import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
