import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'

//1.引入状态管理  
import {createStore} from 'redux'
//解决view层拿到数据能够同步渲染
import {Provider} from 'react-redux'
import reducer from './store/reducer'
import state from './store/state'

//2 createStore打造store对象  连接reducer和state  并打造reducer和state
let store=createStore(reducer,state);
ReactDOM.render(
    //挂载到根组件
    <Provider  store={store}>
        <App />
     </Provider>,
    document.getElementById('app')
)

