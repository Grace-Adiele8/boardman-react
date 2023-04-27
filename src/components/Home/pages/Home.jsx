import React from "react";
import DefaultLayout from "../../ui/layout/DefaultLayout";
import HomeHero from "../components/homehero/HomeHero";
import HomePayment from "../components/homepayment/HomePayment";
import HomeRisk from "../components/homerisk/HomeRisk";
import HomeTransact from "../components/hometransact/HomeTransact";
import HomePartners from "../components/homepartners/HomePartners";
import HomePricing from "../components/homepricing/HomePricing";
import HomeWorks from "../components/homeworks/HomeWorks";
import HomeClient from "../components/homeclient/HomeClient";

function Home() {
  return (
    <div>
      <DefaultLayout>
        <HomeHero />
        <HomeWorks />
        <HomeRisk />
        <HomeTransact />
        <HomePayment />
        <HomeClient />
        <HomePartners />
        <HomePricing />
      </DefaultLayout>
    </div>
  );
}

export default Home;
