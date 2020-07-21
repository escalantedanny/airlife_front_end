import React from "react";

// core components
import Navbar from "components/Navbars/NavbarComponent.js";
import CartText from "components/body/CarText";
import Problem from "components/body/Problem";
import Beneficios from "components/body/Beneficios";
import Donde from "components/body/Donde";
import Certificaciones from "components/body/Certificaciones";
import Banner from "components/Navbars/Banner";
import Nuestra from "components/body/Nuestra";
import Footer from  'components/Footers/Footer';


class Index extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <main ref="main">
          <Banner />
        </main>
        <CartText />
        <Nuestra />
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
