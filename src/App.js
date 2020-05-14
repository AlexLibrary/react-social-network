import React from "react";
import styles from './App.module.scss'
import { initializeApp, setGlobalError } from "./reducers/reducer_app";
import { connect, Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./redux_store";
import Preloader from "./components/modules/Preloader";
import Messenger from "./components/modules/Messenger/Messenger";
import SideBar from "./components/Header/Header";
import Body from "./components/Body/Body";

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
      <div className={styles.App}>
        <SideBar />
        <Body />
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
