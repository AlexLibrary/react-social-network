import React, { useState, useEffect } from "react";
import styles from './style.module.scss'

const StatusWithHooks = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status)
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true)
  }
  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const changeStatus = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div className={styles.status} >
      <span>Status:</span>
      {!editMode &&
        <div className={styles.status_output} onClick={activateEditMode}>
          <span>{props.status || '------'}</span>
        </div>
      }
      {editMode &&
        <div className={styles.status_input}>
          <input autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={changeStatus} />
        </div>
      }
    </div >
  )

}

export default StatusWithHooks;
