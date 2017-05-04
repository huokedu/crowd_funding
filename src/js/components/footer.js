var React=require("react");
import {Router, Route, Link, browserHistory} from 'react-router'

export default class ComFooter extends React.Component{
	constructor(){
		super();
	};
	render(){
		
		return(
			<footer class="footer">
			<div class="footer-main">
				 <div class="item">
					 <Link to={`/records`}>
					 	<label class="ico ico1"></label>
					 	<b>往期记录</b>
				 	 </Link>
				 </div>
				 <div class="item footer-center-btn" onClick={this.props.handleGetRichBtn}>
				 	<a href="javascript:;" class={this.props.isTouchGetRichBtn?"btns btn-red":"btns btn-gray"}>我要夺宝</a>
				 </div>
				 <div class="item ">
	 				<Link to={`/myRecords`}>
					 	<label class="ico ico2"></label>
					 	<b>参与记录</b>
				 	</Link>
				 </div>
			  </div>
		</footer>
		)
	}
}
