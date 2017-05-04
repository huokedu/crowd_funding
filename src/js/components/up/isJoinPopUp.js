var React=require("react");

export default class IsJoinPopUp extends React.Component{
    constructor(){
		super();
	};
	
    render(){
    	var {isShowUp,upInfo} = this.props;
      return(
          <div class={isShowUp?"modal-comfirm":"modal-comfirm hide"}>
			  <div class="content">
			  	<p class="bean-img"><img src="./src/images/bean.png" width="40%"/></p>
			    <p >确认消耗<span class="orange">10</span>个乐豆</p>
			    <p >参与本次活动</p>
			    <div class="bordr-top mg-bt1">
				    <a href="javascript:void(0)" class="btn-item bordr-right" onClick={this.props.canclePopUp}>否</a>
				    <a href="javascript:void(0)" class="btn-item" onClick={this.props.comfiredPopUp}><span class="blue">是</span></a>
			    </div>
			  </div>
		</div>
      )
    }
}