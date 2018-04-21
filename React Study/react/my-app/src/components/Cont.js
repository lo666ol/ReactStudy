import React,{Component} from 'react'
import '../assets/css/Cont.css'
class Cont extends Component{
    constructor(){
        super();
        this.state={
            msg:'hell react'
        }
    }
    render(){
        return(
            <div>
                  <div>{this.state.msg}</div>
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


export default Cont;
  
