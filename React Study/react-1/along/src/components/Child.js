import React from 'react';
class Child extends React.Component {
  constructor(props){
    super(props);
    console.log('child 1 getDefaultProps');
    this.state={msg1:'qq'};
    console.log('child 2 getInitailState');
  }
  componentWillMount(){
    console.log('child 3 componentWillMount');
  }
  render(){
    console.log('child render');
    return (
      <React.Fragment>
        <h3>child</h3>
        <input type="button" value="更新子" onClick={()=>{this.setState({msg1:Math.random()})}}/>
        <div>{this.state.msg1}</div>
        {/*<div>{this.props.msg2}</div>*/}
      </React.Fragment>
    )
  }
  shouldComponentUpdate(){
    console.log('child 3.5 shouldComponentUpdate');
    //自定义渲染函数，替换react内部渲染机制
    return true;
  }
  componentDidMount(){
    console.log('child 4 componentDidMount');
  }
  componentWillUpdate(){
    console.log('child 5 componentWillUpdate');
  }
  componentDidUpdate(){
    console.log('child 6 componentDidUpdate');
  }
  componentWillUnmount(){
    console.log('child 7 componentWillUnmount');
  }
}

export default Child;