var React=require("react");
export default class FooterMenus extends React.Component{
	constructor(){
		super();
	};
	render(){
		return(
			<footer class="footer">
				<div class="btn-long col-red">
					<a href="javascript:void(0)"><i class="icon icon-down"></i><span>快速下单</span></a>
				</div>
			</footer>
		)
	}
}
