import React from 'react';
import Progress from "../progress/Progress";
import WinnerUp from "../up/winnerUp";

export default class MyReocrdList extends React.Component{
    constructor(){
      super();
      this.state = {
			  isShowUp:false, //默认弹出框隐藏
		};
    };
    //点击详情弹窗口
    checkDetails(e){
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
      	<div class="my_crowd my_crowd_nopadding">
				<div class="left_bottom lh2">
					<span class="col-999 ">2017-4-6 15:21:12</span>
				</div>
				<div class="my_crowd_list flex-item-box bordr-top2">
					<div class="my_crowd_left w25">
						<p class="my_crowd_img border"><img src="./src/images/demo3.png" /></p>
					</div>
					<div class="my_crowd_right">
						<p class="font-12em"><b>华为P10plus 128G手机</b> </p>
						<p class="col-999 mg-t05">期号：88856515579516</p>
						<p onClick={this.checkDetails.bind(this)}>本期参与 <span class="orange">100</span>人次&nbsp;&nbsp;<b class="blue" onClick={this.checkDetails.bind(this)}>详情<i class="wb_arrow_right"></i></b></p>
					</div>
				</div>
				<div class="left_bottom bordr-top2 flex-item-box mg-t1">
					<div class="left-b padding-t05">
						<Progress/>
					</div>
					<div class="right-b mg-t05">
						<a href="javascript:;" class="my_crowd_btn btn-orange ">追加</a>
					</div>
				</div>
				{isShowUp?<WinnerUp handlePopUp={this.handlePopUp.bind(this)}/>:""}
		</div>
      )
    }
}