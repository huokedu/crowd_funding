import React from 'react';

export default class Progress extends React.Component{
	constructor(){
	      super();
	      this.state = {
			total:"5000",
			leftNo:"1000"
		};
	  }
	
    render(){
    	const styleComponentHeader = {
			percent: {
				width: this.props.progress+"%"
			},
			//还可以定义其他的样式
		};
		const {total,leftNo} = this.state;
      return(
      	<div>
	      
			<div class="progress-box"><p class="progress" style={styleComponentHeader.percent}></p></div>
			<div class="col-999 mg-b1">总计 {this.state.total}人次<span class="fr">剩余 <label class="blue">{this.state.leftNo}</label></span></div>
		</div>
		)
    }
}