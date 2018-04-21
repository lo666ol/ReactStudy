import React,{Component} from 'react'
export default class Fetch extends Component{
    constructor(){
        super();
        this.state={
            list:[
                {"name":"along"}
            ]
        }
    }
    render(){
        return(
            <div>hello</div>
        )
    }
    //在渲染结束之后执行一次
    // componentDidMount(){
    //     fetch(
    //         '/data/along.json'
    //     ).then(
    //         res=>res.json()
    //     ).then(
    //        data=>console.log(data)
    //     )
    // }
    componentDidMount(){
        fetch('/data/along.json').then(
            res=>res.text()
        ).then(
            data=>console.log(data)
        )
    }
}