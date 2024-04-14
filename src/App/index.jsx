import React from "react";
import GlobalStyle from "../styles/global";
import Header from "../components/header";
import Footer from "../components/footer";
import Newsletter from "../components/newsletter";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
