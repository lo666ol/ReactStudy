import React from 'react';
import Child from './Child';
class Parsent extends React.Component {
  state={
    bl:false,
    msg2:'父数据'
  };
  constructor(props){
    super(props);
    console.log('parent 1 getDefaultProps',this.state.msg2);
    this.state={msg1:'qq',msg3:'bmw'};
    console.log('parent 2 getInitailState');
  }
  //函数渲染完成后只执行一次
  componentWillMount(){
    console.log('parent 3 componentWillMount');
  }
  render(){
    console.log('parent render');
    return (
      <div>
        <h3>parent</h3>
        <input type="button" value="按钮" onClick={(e)=>{this.setState({bl:!this.state.bl})}}/>
        <input type="button" value="更新父1" onClick={(e)=>{this.setState({msg2:Math.random()})}}/>
        <input type="button" value="更新父3" onClick={(e)=>{this.setState({msg3:Math.random()})}}/>
        {this.state.bl && <Child></Child>}
      </div>
    )
  }
  shouldComponentUpdate(){
    console.log('parent 3.5 shouldComponentUpdate');
    //自定义渲染函数，替换react内部渲染机制
    return true;
  }
  componentDidMount(){
    console.log('parent 4 componentDidMount');
  }
  componentWillUpdate(){
    console.log('parent 5 componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('parent 6 componentDidUpdate');
  }
}

export default Parsent;