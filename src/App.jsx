import HomeHero from "./components/modules/Home/components/homehero/HomeHero";
import HomeRisk from "./components/modules/Home/components/homerisk/HomeRisk";
import HomeTransact from "./components/modules/Home/components/hometransact/HomeTransact";

import HomeWorks from "./components/modules/Home/components/homeworks/HomeWorks";

import Footer from "./components/ui/footer/Footer";
import NavBar from "./components/ui/navbar/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <HomeHero />
      <HomeWorks />
      <HomeRisk />
      <HomeTransact />
      <Footer />
    </>
  );
}

export default App;
