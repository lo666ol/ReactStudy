import React, { Component } from 'react';
import {connect} from 'react-redux'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[]
    }

    //订阅公告状态 但是第一次拿不到  设置第一次可以拿到数据
    this.state=this.props.store.getState()


    props.store.subscribe(()=>{
      // console.log('状态发生了改变')
      this.setState(this.props.store.getState())
    })  
  }
    
  render() {
    return (
      <div>
          <h1>Redux  5.x</h1>
          <input type='text' ref='ipt'/>
          <input type='button' value='click me' onClick={this.send.bind(this)}/>
          <ul>
            {
            this.state.list.map((item,index)=>{
                return <li key={index}>{item}</li>
              })
            }
          </ul>
        </div>
    );
  }
  send(){
    //在view层向state发送action
    this.props.store.dispatch({type:'ADD_ITEM',payload:this.refs.ipt.value})
    // console.log(this.props.store.getState())
    
    // this.setState({
      //   list:this.state.list.concat(this.refs.ipt.value)
      // })
    // this.refs.ipt.value=''
  }
}

export default App;
//connect创建一个高阶组件 串接另一个组件  再返回一个新组 Container
// export default connect()(App)