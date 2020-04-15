import React from "react";
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header";
import Page from "./components/Page";
import Footer from "./components/Footer";
import './App.scss'
const S = 'App';

const App = () => {
  return (
    <BrowserRouter>
      <div className={`${S}`}>
        <Header />
        <Page />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
