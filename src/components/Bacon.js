import React, { Component } from 'react'
import '../css/bacon.css'

class Bacon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      msg: 'Text editor',
      usermsg: 'Whats on your mind?',
    }
  }

  removebox() {
    this.props.deletebacon(this.props.index)
  }

  editform() {
    this.setState({ editing: true })
  }

  renderNormal() {
    return (
      <div>
        <div className="ingredients">
          <h3 className="textheader">
            {this.state.msg} - box nr {this.props.index}
          </h3>

          <div className="textfield">{this.state.usermsg}</div>
          <div className="actions">
            <button onClick={this.editform.bind(this)}>EDIT</button>
            <button className="delete" onClick={() => this.props.onDelete(this.props.index)}>
              REMOVE
            </button>
          </div>
        </div>
      </div>
    )
  }

  renderEdit() {
    return (
      <div>
        <div className="ingredients">
          <h3 className="textheader">{this.state.msg}</h3>
          <textarea
            ref="newText"
            value={this.state.usermsg}
            onChange={event => this.setState({ usermsg: event.target.value })}
            className="textfield-edit"
          />
          <div className="actions">
            <button onClick={() => this.setState({ editing: false })} id="save">
              Save
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.state.editing ? this.renderEdit() : this.renderNormal()
  }
}

export default Bacon
