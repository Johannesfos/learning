import React, { Component } from 'react';

//CSS files
import '../css/bacon.css';

//components



class Bacon extends Component {

    constructor(props){
        super(props);
        this.state = {
            editing: false,
            msg: 'Text editor',
            usermsg: 'Whats on your mind?'
        };
    };
   
    removebox(){
        this.props.deletebacon(this.props.index);
    }

    editform(){
       this.setState({editing: true})
   }

    saveform(){
        var text = this.refs.newText.value;
        this.setState({
           editing: false,
           usermsg: text
        })
       
   }

   renderNormal() {
       return(
            <div>
            <div id="ingredients">
                <h3 id="textheader">{this.state.msg}</h3>
                <div id="textfield">{this.state.usermsg}</div>
                <button onClick={this.editform.bind(this)} id="edit">EDIT</button> <button id="remove" onClick={this.removebox.bind(this)}>REMOVE</button>   
            </div>
            </div>
       );
   }

   renderEdit(){
        return(
            <div>
            <div id="ingredients">
                <h3 id="textheader">{this.state.msg}</h3>
                <textarea ref="newText" defaultValue={this.state.usermsg} id="textmsg"></textarea>
                <button onClick={this.saveform.bind(this)} id="save">Save</button>
            </div>
            </div>
        );
   }

  render() {
    
    

        if(this.state.editing){
            return this.renderEdit();
        }else{
            return this.renderNormal();
        };


  }
}

export default Bacon;
