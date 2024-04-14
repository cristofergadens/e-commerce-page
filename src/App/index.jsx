import React from "react";
import GlobalStyle from "../styles/global";
import Header from "../components/header";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";
import MenuFooter from "../components/menu-footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Newsletter />
      <MenuFooter />
      <Footer />
    </>
  );
}

export default App;
