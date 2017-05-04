var React=require("react");

export default class Content extends React.Component{
    render(){
        return(
            <div className={this.props.contentClass(this.props.index)} > { this.props.val  }</div>
        )
    }
}