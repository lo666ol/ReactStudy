// import User from '../components/User'
import {Route,Redirect} from 'react-router-dom'
import React from 'react'
//自定义路由   ...rest延展符 在结构的时候是除了component其它的全部解出来
// const AuthRoute=({component:User,...rest})=>(
//     // console.log(User),
//     //在不用ES6引入user组件的时候，结构拿到user组件
//     // <Route path='/user' component={User}/>
//     <Route {...rest} render={props=>
//         Math.random()>0.5?<User {...props}/>:<Redirect to='/login'/>
//     }/>
// )



//路由前置守卫
class AuthRoute extends React.Component{
    constructor(){
        super();
        this.state={
            user:{}
        }
    }
    componentDidMount(){
        fetch(
            '/data/user.json'
        ).then(
            res=>res.json()
        ).then(
            data=>{
            // console.log(data);
            data.hasAuthed=true;
            this.setState({user:data})
        }
        )
    }
    render(){
        let {component:User, ...rest}=this.props;
        if (!this.state.user.hasAuthed) return null;//避免第一次做渲染
        return <Route {...rest} render={props =>
          this.state.user.auth?
            <User data={this.state.user.data} {...props} />:
            <Redirect to="/login"/>
        } />
      }
}
export default AuthRoute;  