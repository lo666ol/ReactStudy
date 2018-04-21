import React,{Components} from 'react'

export default class App extends Components{
  constructor(){
    super();
    this.state={
        masg:'hell react'
    }
  }
  render(){
      return (
          <div>{this.state.msg}</div>
      )
  }
}
