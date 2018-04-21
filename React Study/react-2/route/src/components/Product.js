import React,{Component} from 'react'
import {BrowserRouter,Route,NavLink,Redirect,Switch} from 'react-router-dom'
import Detail from './Detail'
class Product extends Component{
    constructor(){
        super();
    }
    render(){
        let {histroy,localtion,match}=this.props
        return(
            <div>
                <p>Product</p>
                {/* {跳转配置 路由传参} */}
                <NavLink to={match.url+'/detail/001'}>商品001</NavLink>
                <NavLink to={match.url+'/detail/002?a=1&b=2'}>商品002</NavLink>
                <NavLink to={{pathname:match.url+'/detail/003',search:'?a=11&b=12'}}>商品003</NavLink>
                {/* {展示区} */}
                <Route path={match.url+'/detail/:id'}  component={Detail}/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this)
    }
}

export default Product