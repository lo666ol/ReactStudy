import React,{Component} from 'react'
import '../assets/css/nav.css'
export default class Nav extends Component{
    state={
        list:['首页','国内','国际','娱乐','社会'],
        left:0
      };
      render(){
        return (
          <div id="nav">
            <ul className="cl">
              {
                this.state.list.map((val,index)=>{
                  return (
                    <li key={index} onClick={this.posLine.bind(this,index)}>
                      <a href="javascript:;">{val}</a>
                    </li>
                  )
                })
              }
            </ul>
            <em ref="em" style={{left:this.state.left+'px'}}></em>
          </div>
        )
      }
      posLine(index,ev){
        // console.log(ev.currentTarget);
        // this.refs.em.style.left = ev.target.offsetLeft + 'px';
        // console.log(ev.currentTarget)
        this.setState({
          left:ev.currentTarget.offsetWidth*index
        })
      }
    
}
