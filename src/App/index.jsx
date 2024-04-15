import React from "react";
import GlobalStyle from "../styles/global";
import Header from "../components/header";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import MenuFooter from "../components/menu-footer";
import NewCollectionSection from "../components/new-collection-section";
import BenefitsBlock from "../components/benefits-block";
import Brands from "../components/brands";
import MainBanner from "../components/main-banner";
import ShelfProducts from "../components/shelf-products";
import Modal from "../components/Modal";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainBanner />
      <BenefitsBlock />
      <Brands /> 
      <ShelfProducts />
      <NewCollectionSection />
      <Newsletter />
      <MenuFooter />
      <Modal/>
      
      <Footer />
    </>
    
  );
}

export default App;
