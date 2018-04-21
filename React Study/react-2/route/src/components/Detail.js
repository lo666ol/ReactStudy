import React,{Component} from 'react'

class Detail extends Component{
    constructor(){
        super();
    }
    render(){
        let {history}=this.props
        return(
            <div>
                <p>Detail</p>
                {/* {在props中拿到父组件传过来的数据} */}
                <p>参数:{this.props.match.params.id}</p>
                <p>数据:{this.props.location.search}</p>
                <p>路径:{this.props.location.pathname}</p>
                <input type='button' value='click me 返回上一级' onClick={()=>{
                    // 返回API
                    history.go(-1)
                }}/>
            </div>
        )
    }
    componentDidMount(){
        // console.log(this)
    }
}

export default Detail