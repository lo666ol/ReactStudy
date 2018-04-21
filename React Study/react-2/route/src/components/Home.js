import React,{Component} from 'react'
import querystring from 'query-string'
class Home extends Component{
    constructor(){
        super();
    }
    render(){
        let {history}=this.props
        return(
            <div>
                <h2>Home</h2>
                {/* {编程式导航  在history API中添加要跳转的地址} */}
                <input type='button' value='click me' onClick={()=>{history.push({pathname:'/product/Detail/003',search:querystring.stringify({a:1,b:2}) })
                }}/>
            </div>
        )
    }
    componentDidMount(){
        console.log(this)
    }
}

export default Home