import AboutHero from "./components/About/components/Abouthero/AboutHero";
import HomeHero from "./components/Home/components/homehero/HomeHero";

import NavBar from "./components/ui/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <AboutHero />
      <NavBar />
      <HomeHero />
    </>
  );
}

export default App;
