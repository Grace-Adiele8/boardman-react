import ApiAbout from "./components/Api/ApiAbout";
import ApiHero from "./components/Api/ApiHero";
import Footer from "./components/ui/footer/Footer";

import NavBar from "./components/ui/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ApiHero />
      <ApiAbout />
      <Footer />
    </>
  );
}

export default App;
