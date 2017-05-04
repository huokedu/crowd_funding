var React=require("react");

export default class winnerUp extends React.Component{
    constructor(){
		super();
	};
	
    render(){
    	var {isShowUp} = this.props;
      return(
        <div class="modal-comfirm">
			<div class="content" >
				<div class="modal-tit">幸运用户</div>
				<span class="close-x" onClick={this.props.handlePopUp}><i>x</i></span>
				<div class="rank-list winnerList">
					<table cellspacing="0" cellpadding="0">
						<tbody>
							<tr class="bg-white">
								<td class="col1">
									<span class="num">1</span>
								</td>
								<td>121143
								</td>
							</tr>
							<tr class="bg-white">
								<td class="col1">
									<span class="num">1</span>
								</td>
								<td>121143
								</td>
							</tr>
							<tr class="bg-white">
								<td class="col1">
									<span class="num">1</span>
								</td>
								<td>121143
								</td>
							</tr><tr class="bg-white">
								<td class="col1">
									<span class="num">1</span>
								</td>
								<td>121143
								</td>
							</tr>
							<tr class="bg-white">
								<td class="col1">
									<span class="num">1</span>
								</td>
								<td>121143
								</td>
							</tr>
							<tr class="bg-white">
								<td class="col1">
									<span class="num">1</span>
								</td>
								<td>121143
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
      )
    }
}