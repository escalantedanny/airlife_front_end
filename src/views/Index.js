import React from "react";

// core components
import Navbar from "components/Navbars/NavbarComponent.js";
import CartText from "components/body/CarText";
import Problem from "components/body/Problem";
import Beneficios from "components/body/Beneficios";
import Donde from "components/body/Donde";
import Certificaciones from "components/body/Certificaciones";
import Footer from  'components/Footers/Footer';


class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <img alt="Transporte Page" src={require("assets/img/banner/Banner.png")} />
        </main>
        <CartText />
        <Problem />
        <Beneficios />
        <Donde />
        <Certificaciones />
        <Footer />
      </>
    );
  }
}

export default Index;
