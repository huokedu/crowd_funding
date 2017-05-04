var React=require("react");
import { raiseList } from "../common/api";
import { Router, Route, Link, browserHistory } from 'react-router';
import Tloader from 'react-touch-loader';

import Header from "./header";
import Footer from "./footer";
import Tab from "./tab/Tab";
export default class IndexList extends React.Component{
	constructor() {
		super();
		this.state = {
			news: ''
		};
	};
	//在完成首次渲染之前调用，此时仍可以修改组件的state
	componentDidMount() {
		var data = {
			code: '123',
			code2:'1234'
		};
		var params = {
		        method: 'POST',
		        /*mode:'cors',
		        cache: 'default',
		        headers: {
	        	  'Content-Type': 'application/x-www-form-urlencoded',
		          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE'
		        },*/
		        body:data
	      };
		//请求网络数据
		fetch(raiseList)
			.then(response => response.json())//获取数据，相当于.then(function(response){return response.json()})
			.then((responseText) =>{//处理数据
				if(responseText){
					console.log("接口请求成功！",responseText);
					this.setState({
						news:responseText.list
					});
					this.getData();
				}
			})
			.catch(function(err) {// 捕获错误
				console.log("请求数据失败：",err);
			});
	};
	//获取数据function
	getData(date) {
		console.log("data",this.state);
	};
	/*//获取当前新闻内容并且保存在state中传到下一个页面
	getNewsInfo(newsInfo) {
		console.log(newsInfo);
		this.setState({newsInfo: newsInfo});
	};*/
	render(){
		const {news} = this.state;
		//key={index}放在li标签里面回有警告
		const newsList = news.length
			? news.map((newsItem, index) => (
			 <Link to={{ pathname: '/details/1', query: {urls: newsItem.raiseIcon,title: newsItem.raiseName} }} key={index} >
				<div class="wrap">
					<div class="goods">
						<a class="good-a" href="javascript:void(0)">
							<div>
								<span class="item-tit">{newsItem.currentPeriod}期{newsItem.currentNum}号
			      		<label class="arrow-down">
							</label></span>
								<span class="time">开奖倒计时 <label>00:20:44</label></span>
							</div>
							<div class="img">
								<span class={newsItem.currentStatus == "0"?"status status_orange":"status status_green"}><i>{newsItem.currentStatus == "1"?"即将开始":"已经结束"}</i></span>
								<img src={newsItem.raiseIcon} />
								<div class='open-time'>{newsItem.outTime=1?newsItem.outTime:""}开始参加</div>
							</div>
							<div class="index-padding">
								<h4 class="font-15 col-000">{newsItem.raiseName}</h4>
								<p class="col-666">
									￥{newsItem.productPrice}
								</p>
								<p class="result-font"><span>查看结果<i class="wb_arrow_right"></i></span></p>
							</div>
						</a>
					</div>
				</div>
			</Link>
			))
			: <div class="none-news">没有加载到任何新闻</div>;
		return( 
			<div class="flex">
			<Header/>
				<main class="body">
					<div class="good-list">
	   					{newsList}
					</div>
			   	</main>
			   	
		   	</div>
		)
	}
}
