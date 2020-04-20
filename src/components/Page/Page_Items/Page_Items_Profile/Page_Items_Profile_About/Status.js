import React from "react";
// import './style.scss'
const S = 'Page_Items_Profile_About_Status';

class Status extends React.Component {

  state = {
    editMode: false
  }

  handleActivateEditMode = () => {
    this.setState({
      editMode: true
    })
  }
  handleDeactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }


  render() {
    return (
      <div className={`${S}`} >
        <span>Status:</span>
        {!this.state.editMode &&
          <div className={`${S}_output`} onClick={this.handleActivateEditMode}>
            <span>{this.props.status}</span>
          </div>
        }
        {this.state.editMode &&
          <div className={`${S}_input`}>
            <input autoFocus={true} value={this.props.status} onBlur={this.handleDeactivateEditMode} />
          </div>
        }
      </div >
    )
  }
}

export default Status;
