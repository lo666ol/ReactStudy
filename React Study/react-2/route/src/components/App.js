import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,NavLink,Redirect,Switch} from 'react-router-dom'
import '../assets/css/App.css'
// 导入根组件
import Home from './Home'
import Login from './Login'
import Reg from './Reg'
import Product from './Product'
import User from './User'
import Error from './Error'
//导入自定义组件
import AuthRoute from '../guard/AuthRoute'
class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div id='cont'>
                    <h1>React.Route4</h1>
                    <NavLink to='/home'>首页</NavLink>
                    <NavLink to='/login'>登录</NavLink>
                    <NavLink to='/reg'>注册</NavLink>
                    <NavLink to='/product'>商品</NavLink>
                    <NavLink to='/user'>用户</NavLink>
                <hr/>
                {/* {Swich组件排他性} */}
                <Switch>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/login' component={Login}></Route>
                    <Route path='/reg' component={Reg}></Route>
                    {/* {授权路由，路由守卫} */}
                    <AuthRoute path='/user' component={User}></AuthRoute>
                    <Route path='/product' component={Product}></Route>
                    {/* {指定默认显示组件} */}
                    <Redirect exact from='/' to='/home'/>
                    {/* {指定在响应错误的url时显示页面} */}
                    <Route component={Error}/>
                </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;