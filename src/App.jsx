import AboutBenefits from "./components/About/components/AboutBenefits/AboutBenefits";
import AboutWhy from "./components/About/components/AboutWhy/AboutWhy";
import AboutHero from "./components/About/components/Abouthero/AboutHero";

import NavBar from "./components/ui/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <AboutHero />
      <AboutWhy />
      <AboutBenefits />
    </>
  );
}

export default App;
