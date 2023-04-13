import HomeClient from "./components/modules/Home/components/homeclient/HomeClient";
import HomeHero from "./components/modules/Home/components/homehero/HomeHero";
import HomePartners from "./components/modules/Home/components/homepartners/HomePartners";
import HomePayment from "./components/modules/Home/components/homepayment/HomePayment";
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
      <HomePayment />
      <HomeClient />
      <HomePartners />
      <Footer />
    </>
  );
}

export default App;
