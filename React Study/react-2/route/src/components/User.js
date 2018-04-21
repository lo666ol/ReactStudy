import React,{Component} from 'react'

class User extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <p>User</p>
                <p>数据预载: 用户名{this.props.data.username}</p>
            </div>
        )
    }
}

export default User