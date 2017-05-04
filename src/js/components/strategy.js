var React=require("react");
import { Router, Route, Link, browserHistory } from 'react-router';
import Header from "./header";
export default class Strategy extends React.Component{
	constructor(){
 		super();
 	};
	render(){
		return(
			<div class="flex">
			<Header/>
			<div class="body">
			<div class="gl-bg">
				<div>
					<img src="./src/images/top-pic.jpg" width="100%" />
				</div>
				<div class="bg-white">
			<div class="gl_con">
				<span class="circle circle1"></span>
				<span class="circle circle2"></span>
				<div class="tit">
					<i></i>什么是龙币众筹夺宝？
				</div>
				<div class="content">
					 龙币众筹夺宝是真龙二维码会员积分平台推出的全新平台活动，真龙会员可通过极少的龙币兑换相应礼品的抽奖资格，即有机会用极少的龙币抽中高价值商品。
				</div>
				
			</div>
			<div class="gl_con">
				<div class="tit">
					<i></i>怎么参与龙币众筹夺宝？
				</div>
				<div class="content">
龙币众筹夺宝是真龙二维码会员积分平台推出的全新平台活动，真龙会员可通过极少的龙币兑换相应礼品的抽奖资格，即有机会用极少的龙币抽中高价值商品。				</div>
				<p>
					<span class="circle-font2">
         			<i>1</i> 
    			</span> 登录真龙二维码会员积分平台，点击活动中心--众筹夺宝进入众筹夺宝界面。
				</p>
				<p>
					<span class="circle-font2">
         			<i>2</i> 
    			</span> 选择显示“进行中”的心仪商品，并选择兑换的名额数参与夺宝（每个商品分配对应数量的号码，并且这些号码都是唯一的，用户兑换一个名额即可获得其中一个号码，兑换的号码越多，中奖概率越大，每个用户最多能兑换20个名额，用户获得的号码由系统按顺序发放，获得号码即参与成功了），名额兑换成功后即扣减相应龙币数。
				</p>
				
				<p>
					<span class="circle-font2">
         			<i>3</i> 
    			</span>       等待揭晓，幸运号码持有者获得该众筹商品（当众筹商品众筹满额或者众筹时间截止后，系统根据获得规格公布获奖号码）
				</p>
			</div>
		</div>
			</div>
			</div>
			</div>
		)
	}
	
}