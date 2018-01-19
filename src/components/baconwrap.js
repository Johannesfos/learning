import React, { Component } from 'react';

//CSS files
import '../css/bacon.css';

//components
import Bacon from './bacon';




class Baconwrap extends Component {

  constructor(){
    super();
    this.state = {
      modules: [
      ],
      index: 0

    }
  }

  removebox(index){
    console.log("removing box nr " + index)
    //var arr = this.state.modules;
    //arr = arr.splice(index, 1);
    //this.setState({modules: arr});
  }

  newBacon(){
    this.setState({
      modules: this.state.modules.concat(<Bacon deletebacon={this.removebox} key={this.state.index} index={this.state.index} />),
      index: this.state.index + 1
    })
    
  }


  render() {
    return (
      <div id="baconwrap">
       <button id="addbacon" onClick={this.newBacon.bind(this)}>ADD</button>
      {
        
          this.state.modules 
         
      }
       

      </div>
    );
  }
}

export default Baconwrap;
