import React, { Component } from 'react';
import logo from '../assets/images/logo.svg';
import '../assets/css/App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      msg:'我是一个标题'
    }
  }
  
  render(){
    return(
      <div>
       <h1>{this.state.msg}</h1>
       <Child></Child>
     </div>
    )
  }
}

class Child extends Component{
  constructor(){
    super();
    this.state={
      list:[1,2,3],
      msg2:'我是子组件'
    }
  }
  render(){
    return(
      <div>
        <p id=''>{this.state.msg2}</p>
      </div>
    )
  }
}


export default App;
