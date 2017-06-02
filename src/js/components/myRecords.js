import React from 'react';
import Header from "./header";
import MyRecordList from "./recordList/MyRecordList";
export default class MyRecords extends React.Component{
	constructor(){
 		super();
 		this.state={
 			title:"我的众筹"
 		}
 	};
	render(){
		return(
			<div class="flex">
			  <Header title={this.state.title}/>
			  <div class="body">
			   	<MyRecordList />
			  </div>
			</div>
		)
	}
	
}