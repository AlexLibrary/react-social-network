import React from "react";
import HeaderContainer from "./components/Header/Container";
import Page from "./components/Page";
import Footer from "./components/Footer";
import './App.scss'
import { initializeApp } from "./reducers/reducer_app";
import { connect, Provider } from "react-redux";
import Preloader from "./components/modules/Preloader";
import { HashRouter } from "react-router-dom";
import store from "./redux_store";
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

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

/* HashRouter <= BrowserRouter (for GitHub pages) */
const SamuraiJSApp = () => (
  <HashRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
)

export default SamuraiJSApp;
