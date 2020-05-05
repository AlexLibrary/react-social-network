import React from "react";
import HeaderContainer from "./components/Header/Container";
import Page from "./components/Page";
import Footer from "./components/Footer";
import './App.scss'
import { initializeApp, setGlobalError } from "./reducers/reducer_app";
import { connect, Provider } from "react-redux";
import Preloader from "./components/modules/Preloader";
import Messenger from "./components/modules/Messenger/Messenger";
import { HashRouter } from "react-router-dom";
import store from "./redux_store";
const S = 'App';

class App extends React.Component {

  showErrorMessage = ({ reason }) => {
    console.error(reason);
    const { response: { data: { message }, status } } = reason
    this.props.setGlobalError(`Error: ${status} (${message})`)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener('unhandledrejection', this.showErrorMessage)
  }
  componentWillUnmount() {
    window.removeEventListener('unhandledrejection', this.showErrorMessage)
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
        <Messenger />
      </div>
    )

  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = connect(mapStateToProps, { initializeApp, setGlobalError })(App);

/* <HashRouter> / <BrowserRouter basename={process.env.PUBLIC_URL}> (for GitHub pages) */
const MainApp = () => (
  <HashRouter >
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
)

export default MainApp;
