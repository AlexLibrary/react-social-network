import React from "react";
import { BrowserRouter } from "react-router-dom"
import HeaderContainer from "./components/Header/Container";
import Page from "./components/Page";
import Footer from "./components/Footer";
import './App.scss'
const S = 'App';

const App = () => {
  return (
    <BrowserRouter>
      <div className={`${S}`}>
        <HeaderContainer />
        <Page />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
