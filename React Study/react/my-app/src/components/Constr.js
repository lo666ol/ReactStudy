import React,{Component} from 'react'
class Constr extends Component{
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
                  <Header/>
                  <Foot/>
            </div>
        )
    }
}

class Header extends Component{
    render(){
        return(
            <div id='hd'>我是一个Header组件</div>
        )
    }
}

class Foot extends Component{
    render(){
        return (
            <div id='ft'>我是一个Foot组件</div>
        )
    }
}


export default Constr;
  
