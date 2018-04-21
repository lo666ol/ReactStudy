import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import '../assets/css/wish.css'

class WishBind extends Component{
    constructor(){
        super();
        this.state={
            msg:'留言板~写出你的故事',
            iptName:'along',
            iptCont:'今晚打老虎',
            list:[
                {name:'along',cont:'Do not give up easilt~'}
            ]
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1><br/>
                <input type='text'  ref='iptName' value={this.state.iptName} onChange={this.iptChange.bind(this)} name='iptName'/><br/>
                <input type='text'  ref='iptCont' value={this.state.iptCont} onChange={this.iptChange.bind(this)} name='iptCont'/><br/>
                <input type='button' onClick={this.add.bind(this)} value='click me'/>    
                <ul>
                    { this.state.list.map((item,index)=>{
                        return  <li key={index}>姓名：{item.name}~~内容{item.cont}</li>
                     })}
                </ul>            
            </div>
        )
    }
    iptChange(ev){
        // console.log(ev.target.name)
        this.setState({
            //根据表单的name双向绑定数据的值
            [ev.target.name]:ev.target.value
            
        })
    }
    add(){
        let arr=[...this.state.list];//解构赋值 给一个新的数组
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


export default WishBind;