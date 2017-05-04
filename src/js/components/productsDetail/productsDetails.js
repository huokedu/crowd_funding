var React=require("react");
import Header from "../header";
import Footer from "../footer";

import Tab from "../tab/Tab";
import IsJoinPopUp from "../up/isJoinPopUp"
import Progress from "../progress/Progress";
export default class newsDetails extends React.Component{
	constructor() {
		super();
		this.state = {
			  info: '',
			  isTouchGetRichBtn:true, //可以点击为true,否则为false
			  isShowUp:false, //默认弹出框隐藏
			  upInfo:{
			  	title:"恭喜您, 参与成功!",
			  	picUrl:"./src/images/success.png",
			  	content:"请等待系统为您揭晓抽奖结果"
			  }
			};
	}
	componentDidMount() {
		this.setState({
						info:this.props.location.query
					});
	};
	
	 handleGetRichBtn(e) {
	 	console.log(e);
	 	//点击一次后按钮置灰
	 	this.setState({
	 		isShowUp:true
	 	})
	 	
   };
   //确定弹窗
   comfiredPopUp(e){
	 	this.setState({
	 		isShowUp:false
	 	})
   };
   //取消弹窗
   canclePopUp(e){
	 	this.setState({
	 		isShowUp:false
	 	})
   };
	render(){
		var {upInfo,isTouchGetRichBtn,isShowUp} = this.state;
		return( 
			<div class="flex">
			<Header />
			<div class=" body detail-box">
				<div class="banner">
			    <div class="swiper-container">
			        <div class="swiper-wrapper">
			            <div class="swiper-slide"><img src={this.state.info.urls}/></div>
			        </div>
			        <div class="swiper-pagination"></div>
			    </div>
				</div>
				<div class="detail-tit">
					<span class="tip live">进行中</span>
					<strong>{this.state.info.title}</strong>
				</div>
				<div class="col-999 mg-t1">第一期1号</div>
				<Progress/>
				
				<p class="t-time">开始时间为：03月12日10:00 <span class="fr">计算方式<i class="wb_arrow_right arrow-white"></i></span></p>
				<p class="info-tip">本次活动没人只能参加一次，每次消耗10个乐豆，同时本次活动将开设1个幸运用户，这位幸运用户可以获得完美本次活动的产品。</p>
				<div class="detail-info tab">
					<Tab/>
				</div>
		</div>
			<Footer isTouchGetRichBtn={isTouchGetRichBtn} handleGetRichBtn={this.handleGetRichBtn.bind(this)}/>
			<IsJoinPopUp upInfo={upInfo} isShowUp={isShowUp} canclePopUp={this.canclePopUp.bind(this)} comfiredPopUp={this.comfiredPopUp.bind(this)}/>
		</div>
		)
	}
}
