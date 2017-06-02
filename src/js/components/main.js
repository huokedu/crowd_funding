import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Strategy from "./strategy";
import Records from "./records";
import MyRecords from "./myRecords";

import BodyIndex from "./bodyIndex";
import ProductsComponents from "./productsDetail/productsDetails";

export default class Main extends React.Component {
	constructor() {
		super();
	};
	
	render() {
		return( 
			<Router history={hashHistory} >
			    <Route path="/" component={BodyIndex}/>
		    	<Route path="/details/:id" component={ProductsComponents}></Route>
		    	<Route path="/strategy" component={Strategy}></Route>
		   		<Route path="/records" component={Records}></Route>
		   		<Route path="/myRecords" component={MyRecords}></Route>
		   </Router>
		)
	}
}