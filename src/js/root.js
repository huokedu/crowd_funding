import React from 'react';
import ReactDOM from 'react-dom';

import Main from "./components/main";
import {Router,Route,hashHistory} from 'react-router';

export default class Root extends React.Component{
  render(){
    return (
      //这里替换了之前的 Index，变成了程序的入口
      /*<Router history={hashHistory}>
					    <Route path="/" component={IndexList}/>
				    	<Route path="/details/:id" component={NewsDetails}></Route>
      </Router>*/
     <Main/>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('example'));
