var React =require("react");
import {Router, Route, Link, browserHistory} from 'react-router'

 export default class ComHeader extends React.Component{
 	constructor(){
 		super();
 	};
	render(){
		return(
			<div class="header">
				<span class="wb_arrow"></span>
				<span>众筹夺宝</span>
				<Link to={`/strategy`} class="gl-ico">
						<span class="circle-font">
		         			<i>?</i>
		    			</span>攻略
    			</Link>
			</div>
		)
	}
	
}
