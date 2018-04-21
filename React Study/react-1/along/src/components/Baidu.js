import React,{Component} from 'react'
import fetchJsonp from 'fetch-jsonp'
export default class Baidu extends Component{
    constructor(){
        super();
        this.state={
           list:['1'],
           title:'百度搜索框',
           ipt:''
        }
        this.changeSearch=this.changeSearch.bind(this)
    }
    render(){
        return(
            <div>
                <h1>{this.state.title}</h1>
                <input type='text' value={this.state.ipt} onChange={this.changeSearch} />
                    <ul>
                       { 
                           this.state.list.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                        }
                    </ul>
            </div>
        )
    }

    changeSearch(ev){
        // 1.
        // this.setState({ipt:ev.target.value})
        // fetchJsonp(
        //     // `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.state.ipt}`,这是一个坑 异步不能同步拿不到数据
        //     `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${ev.target.value}`,
        //     {
        //         jsonpCallback:'cb'
        //     }
        // ).then(
        //     res=>res.json()
        // ).then(
        //     data=>this.setState({list:data.s})
        // )



        // 2.利用节流来拿数据
        // this.setState({ipt:ev.target.value})
        // setTimeout(()=>{
        //     fetchJsonp(
        //         `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.state.ipt}`,//这是一个坑 异步不能同步拿不到数据
        //         {
        //             jsonpCallback:'cb'
        //         }
        //     ).then(
        //         res=>res.json()
        //     ).then(
        //         data=>this.setState({list:data.s})
        //     )
        // },0)

        //3.利用this.setState(function(prevState,props){})
        this.setState({ipt:ev.target.value})
        this.setState((prevState)=>{
            // console.log(prevState)
            fetchJsonp(
                `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${prevState.ipt}`,
                {
                    jsonpCallback:'cb'
                }
            ).then(
                res=>res.json()
            ).then(
                data=>this.setState({list:data.s})
            ).catch(
                err=>console.log(err)
            )
        })
    }

    
}