import React from "react";
import GlobalStyle from "../styles/global";
import Header from "../components/header";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import MenuFooter from "../components/menu-footer";
import NewCollectionSection from "../components/new-collection-section";
import BenefitsBlock from "../components/benefits-block";
import Brands from "../components/brands";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <BenefitsBlock />
      <Brands /> 
      <NewCollectionSection />
      <Newsletter />
      <MenuFooter />
      <Footer />
    </>
    
  );
}

export default App;
