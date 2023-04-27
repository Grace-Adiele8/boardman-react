import React from "react";
import DefaultLayout from "../../ui/layout/DefaultLayout";
import ApiHero from "../components/ApiHero";
import ApiAbout from "../components/ApiAbout";

function Api() {
  return (
    <div>
      <DefaultLayout>
        <ApiHero />
        <ApiAbout />
      </DefaultLayout>
    </div>
  );
}

export default Api;
