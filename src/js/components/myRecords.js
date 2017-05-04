var React=require("react");
import Header from "./header";
import MyRecordList from "./recordList/MyRecordList";
export default class MyRecords extends React.Component{
	constructor(){
 		super();
 	};
	render(){
		return(
			<div class="flex">
			  <Header />
			  <div class="body">
			   	<MyRecordList />
			  </div>
			</div>
		)
	}
	
}