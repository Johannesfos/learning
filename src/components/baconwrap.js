import React, { Component } from 'react';

//CSS files
import '../css/bacon.css';

//components
import Bacon from './bacon';




class Baconwrap extends Component {

  constructor(){
    super();
    this.newBacon = this.newBacon.bind(this);
    this.removebox = this.removebox.bind(this);

    this.state = {
      modules: [
      ],
      index: 0

    }
  }

  removebox(index){
    console.log("removing box nr " + index)
    var arr = this.state.modules.filter( item => item !== index );
    console.log(arr);
    this.setState({modules: arr});
  }

  newBacon(){
    this.setState({
      modules: this.state.modules.concat(<Bacon deletebacon={this.removebox}  key={this.state.index} index={this.state.index}/>),
      index: this.state.index + 1,
    })
  }




  render() {
    return (
      <div id="baconwrap">
       <button id="addbacon" onClick={this.newBacon}>ADD</button>
      {
        
          this.state.modules
         
      }
       

      </div>
    );
  }
}

export default Baconwrap;
