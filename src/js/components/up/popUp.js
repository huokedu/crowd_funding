var React=require("react");

export default class popUp extends React.Component{
    constructor(){
		super();
	};
	
    render(){
    	var {isShowUp,upInfo} = this.props;
      return(
          <div class={isShowUp?"modal-comfirm":"modal-comfirm hide"}>
			<div class="content">
				<p class="mg-t1"><img src={upInfo.picUrl} width="30%" /></p>
				<p class="green font-15em">{upInfo.title}</p>
				<p  class="green">{upInfo.content}</p>
				<div class="bordr-top mg-bt1" onClick={this.props.handlePopUp}>
					<a href="javascript:void(0)" class="btn-item w100"><span class="blue" >确定</span></a>
				</div>
			</div>
		</div>
      )
    }
}