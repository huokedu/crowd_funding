var React=require("react");
import Content from "./Content";
import List from "./List";
export default class Tab extends React.Component{
	constructor(){
      super();
      this.state ={
        list : ['商品详情','规格参数'],
        content:[
         {item:'内容一'},
         {item:'内容二'}
       ],
        current:0
      }
  }
  handleClick(index){
    this.setState({ current:index});

  }
  currentClass(index){

    return this.state.current === index ? 'current' : '';
  }
  contentClass(index){
    return this.state.current === index ? 'active' : '';
  }
    render(){
      return(
        <div>
            <ul id="tab" >
              { this.state.list.map( (val,index ) => {
                    return (<List currentClass={this.currentClass.bind(this)} handleClick={this.handleClick.bind(this)} val={val} key={index} index={index} /> )
              }) }
            </ul>
            <div id="content" >
              { this.state.content.map( ( val,index ) => {
                  return ( <Content key={index} val={val.item} index={index}  contentClass = { this.contentClass.bind(this) } /> )
              })}

            </div>
        </div>
      )
    }
}
