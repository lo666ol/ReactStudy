import React,{Component} from 'react'
import { Prompt} from 'react-router-dom'

class Reg extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h3>Reg</h3>
                <Prompt
                    when={true}
                    // message="确认离开？"
                    message={this.out.bind(this)}
                />
            </div>
        )
    }
    out(to,historyType){
    // console.log(to,historyType);
        if (window.confirm('离开去向'+to.pathname)){
            return true
        }else{
            return false
        }
  }
}

export default Reg