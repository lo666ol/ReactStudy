import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
export default class Search extends Component{
   constructor(){
       super();
       this.state={
           ipt:''
       }
       this.changeSerach=this.changeSerach.bind(this)
   }
   render(){
       return(
           <input value={this.state.ipt} onChange={this.changeSerach}/>
       )
   }
   changeSerach(ev){
    this.setState({ipt:ev.target.value});
    fetchJsonp(
      `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${ev.target.value}`,
      {
        jsonpCallback:'cb'
      }
    ).then(
        //将数据甩出去
      res => this.props.callback(res)
    )
  }
}