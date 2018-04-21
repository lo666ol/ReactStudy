import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import '../assets/css/wish.css'

class Wish extends Component{
    constructor(){
        super();
        this.state={
            msg:'留言板~写出你的故事',
            list:[
                {name:'along',cont:'Do not give up easilt~'}
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1><br/>
                <input type='text'  ref='iptName'/><br/>
                <input type='text'  ref='iptCont'/><br/>
                <input type='button' onClick={this.add.bind(this)} value='click me'/>    
                <ul>
                    { this.state.list.map((item,index)=>{
                        return  <li key={index}>姓名：{item.name}~~内容{item.cont}</li>
                     })}
                </ul>            
            </div>
        )
    }
    add(){
        let arr=[...this.state.list];//结构赋值 给一个新的数组
        arr.push({
            name:this.refs.iptName.value,
            cont:this.refs.iptCont.value
        })
        this.setState({
            list:arr
        })
        //添加后把内容清空
        this.refs.iptName.value=this.refs.iptCont.value=""
        this.refs.iptName.focus();

    }
}


export default Wish;