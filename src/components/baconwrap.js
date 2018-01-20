import React, { Component } from 'react'
import '../css/bacon.css'
import Bacon from './bacon'

export default class BaconList extends Component {
  constructor() {
    super()
    this.newBacon = this.newBacon.bind(this)
    this.removebox = this.removebox.bind(this)
    this.clearList = this.clearList.bind(this)

    this.state = {
      modules: [],
      index: 0,
    }
  }

  removebox(index) {
    console.log('removing box nr ' + index)
    var arr = this.state.modules.filter(item => item.props.index !== index)
    console.log(arr)
    this.setState({ modules: arr })
  }

  newBacon() {
    this.setState({
      modules: this.state.modules.concat(
        <Bacon onDelete={this.removebox} key={this.state.index} index={this.state.index} />
      ),
      index: this.state.index + 1,
    })
  }

  clearList() {
    this.setState({
      index: 0,
      modules: [],
    })
  }

  render() {
    return (
      <div id="baconwrap">
        <div className="actions">
          <button id="addbacon" onClick={this.newBacon}>
            ADD
          </button>
          <button id="clear" onClick={this.clearList}>
            CLEAR
          </button>
        </div>

        <div className="bacons">{this.state.modules}</div>
      </div>
    )
  }
}
