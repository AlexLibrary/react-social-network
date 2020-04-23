import React, { useState } from "react";
// import './style.scss'
const S = 'Page_Items_Profile_About_Status';

const StatusWithHooks = (props) => {
  // console.log('---PROPS_STATUS', props.status);

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

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
    <div className={`${S}`} >
      <span>Status:</span>
      {!editMode &&
        <div className={`${S}__output`} onClick={activateEditMode}>
          <span>{props.status || '------'}</span>
        </div>
      }
      {editMode &&
        <div className={`${S}__input`}>
          <input autoFocus={true} value={status} onBlur={deactivateEditMode} onChange={changeStatus} />
        </div>
      }
    </div >
  )

}

export default StatusWithHooks;
