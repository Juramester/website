import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../roots/Roots";

const Layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
