import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../footer/Footer";

function DefaultLayout({ children }) {
  return (
    <div className="default-layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default DefaultLayout;
