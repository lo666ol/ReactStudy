import React,{Component} from 'react'
import ReactDom from 'react-dom'


//传递数据   父->子  子->父
class Data extends Component{
    constructor(){
        super();
        this.state={
            msg:'hello',
            msg2:'无',
            p:'<p>我是一个p标签啊</p>'
        }
    }
    render(){
        return(
            <div>
                <div>我是父组件的数据：{this.state.msg}</div>
                <div>我是Data的数据:{this.state.msg2}</div>
                <div dangerouslySetInnerHTML={{__html:this.state.p}}></div>
                <Child  msg={this.getChild} name={this.state.msg} msg2={this.getChild.bind(this)}/>
            </div>
        )
    }
    getChild(data){
        // console.log(data)
        this.setState({
            msg2:data
        })
    }
}

class Child extends Component{
    constructor(){
        super();
        this.state={
            msg2:'55'
        }
    }
    render(){
        return(
            <div>
                <div>我是Child组件</div>
                <div>我是接受Data的数据:{this.props.name}</div>
                <input type='button' value= 'click me' onClick={this.send.bind(this)}/>
            </div>
        )
    }
    send(){
        this.props.msg2(this.state.msg2)
    }
  
}

export default Data;