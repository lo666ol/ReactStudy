import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
export default class FetchJsonp extends Component{
    constructor(){
        super();
        this.state={
           data:'杨文龙',
           msg:'五'
        }
    }
    render(){
        return(
            <div>
                <div>{this.state.msg}</div>
            </div>
        )
    }
    componentDidMount(){
        fetchJsonp(
            `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.state.data}` ,
            {
                jsonpCallback:'cb'
            }
        
         ).then(
             res=>res.json()
         ).then(
            //  data=>console.log(data)
            data=>this.setState({msg:data.s})
         )
    }

}