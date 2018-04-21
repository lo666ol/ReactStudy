import React, { Component } from 'react';
import {connect} from 'react-redux'
class App extends Component {
  render() {
    let {list,add}=this.props
    return (
      <div>
          <h1>Redux  5.x</h1>
          <input type='text' ref='ipt'/>
          <input type="button" value="添加" onClick={()=>{add(this.refs.ipt.value)}}/>
          <ul>
            {
            list.map((item,index)=>{
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
    );
  }
}
const mapStatetoProps=(state,ownProps)=>{
  // console.log(state, ownProps);// ownProps调用组件时，传递的Props属性
  return {
    list:state.list
  }
};

const mapDispathToProps=(dispatch,ownProps)=>{
  return {
    add:(arg)=>{
      console.log('add',arg);
      dispatch({type:'ADD_ITEM', payload:arg})
    }
  }
};
//connect创建一个高阶组件 串接另一个组件  再返回一个新组 Container
// StateProps拿到store数据给ui层  DispatchProps是想外面发送数据
export default connect(
  mapStatetoProps,
  mapDispathToProps
)(App);