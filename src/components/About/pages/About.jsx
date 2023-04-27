import React from "react";
import AboutHero from "../components/Abouthero/AboutHero";
import AboutWhy from "../components/AboutWhy/AboutWhy";
import AboutBenefits from "../components/AboutBenefits/AboutBenefits";
import DefaultLayout from "../../ui/layout/DefaultLayout";

function About() {
  return (
    <div>
      <DefaultLayout>
        <AboutHero />
        <AboutWhy />
        <AboutBenefits />
      </DefaultLayout>
    </div>
  );
}

export default About;
