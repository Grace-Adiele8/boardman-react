import { Route, Routes } from "react-router";
import Home from "./components/Home/pages/Home";
import About from "./components/About/pages/About";

import Api from "./components/Api/pages/Api";
import Contact from "./components/Contactus/pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Api" element={<Api />} />
        <Route path="/Contactus" element={<Contact />} />

        <Route />
      </Routes>
    </>
  );
}

export default App;
