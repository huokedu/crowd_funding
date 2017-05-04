var React=require("react");
import Header from "./header";
import RecordList from "./recordList/RecordList";

export default class Records extends React.Component{
	constructor(){
 		super();
 	};
	render(){
		return(
			<div class="flex">
			  <Header />
			  <div class="body">
			   <RecordList/>
			  </div>
			</div>
		)
	}
	
}