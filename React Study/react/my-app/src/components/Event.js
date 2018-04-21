import React,{Component} from 'react'
import ReactDom from 'react-dom'
class Event extends Component{
    constructor(){
        super();
        //状态机 存储数据
        this.state={
            msg:'hell react',
            arr:['hello','word'],
            num:520,
            show:function(){
                // console.log('我是被执行的show函数')
            }
        }
    }
    render(){
        return(
            <div>
                  <div>{this.state.msg}</div>
                  <div>{this.state.arr[0]+this.state.arr[1]}</div>
                  <div>{this.state.num+60}</div>
                  <div>{this.state.show()}</div>
                  <Header num={this.state.num}/>
                  <Foot/>
            </div>
        )
    }
}

class Header extends Component{
    constructor(){
        super();
        //为点击事件绑定this，防止this丢失
        this.show=this.show.bind(this);    
    }
    render(){
        return(
            <div>
            <div id='hd'>我是一个Header组件</div>
            <input type='button' value='click me' onClick={this.show.bind(this)} />
            <input type='button' value='click me2' onClick={this.show.bind(this,12)} />
            </div>
        )
    }
    show(arg){
        console.log(this,arg)
    }
}

class Foot extends Component{
    render(){
        return (
            <div id='ft'>我是一个Foot组件</div>
        )
    }
}


export default Event;
  
