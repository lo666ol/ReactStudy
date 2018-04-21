//必须要return否者返回一个undefined
//处理业务逻辑 交给store返回一个新的state
const reducer = (state,{type,payload}) => {
    //默认会渲染一次 
    // console.log(state,type,payload)
    switch(type){
        case 'ADD_ITEM':
            //ES6方法 将后两个合并到第一个中去
           return  Object.assign({},state,{list:state.list.concat(payload)})
        default:
            return state
    }
};
    
export default reducer;