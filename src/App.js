import React from "react";
import HeaderContainer from "./components/Header/Container";
import Page from "./components/Page";
import Footer from "./components/Footer";
import './App.scss'
import { initializeApp } from "./reducers/reducer_app";
import { connect } from "react-redux";
import Preloader from "./components/modules/Preloader";
const S = 'App';

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {

    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className={`${S}`}>
        <HeaderContainer />
        <Page />
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, { initializeApp })(App);
