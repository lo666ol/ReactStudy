import React,{Component} from 'react'
import Titel from './Title'
import Search from './Search'
import List from './List'
export default class Baidu extends Component{
    constructor(){
        super();
        this.state={
            title:'我是百度搜索主题',
            list:[]
        }
    }  
    render(){
        return(
            <React.Fragment>
                <Titel title={this.state.title}></Titel>
                <Search callback={this.updated.bind(this)}></Search>
                <List list={this.state.list}></List>
            </React.Fragment>
        )
    }  

    updated(res){
        res.json().then(
            data=>this.setState({list:data.s})
        )
    }
}