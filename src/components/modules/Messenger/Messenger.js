import React from 'react'
import { setGlobalError } from "../../../reducers/reducer_app";
import styles from './style.module.scss'
import { connect } from 'react-redux'

const Messenger = (props) => {
  if (props.globalError) {
    setTimeout(() => {
      props.setGlobalError(null)
    }, 5000)
    return (
      <div className={`${styles.message}`}>
        {props.globalError}
      </div>
    )
  } else {
    return <div></div>
  }
}

const mapStateToProps = (state) => ({
  globalError: state.app.globalError
})

const MessengerContainer = connect(mapStateToProps, { setGlobalError })(Messenger);

export default MessengerContainer
