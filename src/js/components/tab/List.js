import React from 'react';

export default class List extends React.Component{

    handleClick(){

       this.props.handleClick(this.props.index);
    }
    render(){
      return(
          <li className={this.props.currentClass(this.props.index)} onClick={ this.handleClick.bind(this)} >{this.props.val}</li>
      )
    }
}