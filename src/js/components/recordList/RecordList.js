var React=require("react");
import WinnerUp from "../up/winnerUp";
export default class RecordList extends React.Component{

    constructor(){
      super();
      this.state = {
			  isShowUp:false, //默认弹出框隐藏
		};
    };
    //点击详情弹窗口
    checkDetails(e){
    	console.log(e);
    	if(!this.state.isShowUp){
    		this.setState({
	 			isShowUp:true
	 		})
    	}
    };
    //关闭弹出框
   handlePopUp(e){
   	console.log("handlePopUp",e);
	 	this.setState({
	 		isShowUp:false
	 	})
   };
    render(){
    	var {isShowUp} =this.state;
      return(
      	<div class="my_crowd">
				<div class="left_bottom lh2">
					<b class="blue">[第一期1号] </b>
					<span class="col-999 fr">开奖时间：2017-4-6 15:21:12  </span>
				</div>
				<div class="my_crowd_list flex-item-box bordr-top2">
					<div class="my_crowd_left">
						<p class="my_crowd_img border"><img src="./src/images/demo3.png" /></p>
					</div>
					<div class="my_crowd_right">
						<p class="font-12em"><b>华为P10plus 128G手机</b> </p>
						<p class="orange mg-t05">价值：4800元</p>
						<p class="col-999">总计 10000人次</p>
						<p>幸运用户: <span class="blue">100</span>名<span class="fr blue" onClick={this.checkDetails.bind(this)}>查看<i class="wb_arrow_right"></i></span></p>
					</div>
					</div>
					{isShowUp?<WinnerUp handlePopUp={this.handlePopUp.bind(this)}/>:""}

			</div>
      )
    }
}