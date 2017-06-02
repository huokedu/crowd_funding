import React from 'react';
import Header from "./header";
import RecordList from "./recordList/RecordList";

export default class Records extends React.Component{
	constructor(){
 		super();
 		this.state={
 			title:"往期记录"
 		}
 	};
	render(){
		return(
			<div class="flex">
			  <Header title={this.state.title}/>
			  <div class="body">
			   <RecordList/>
			  </div>
			</div>
		)
	}
	
}