import React,{Component} from 'react'

class Layouts extends Component{
  render(){
    return(
      <div> 
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Layouts;