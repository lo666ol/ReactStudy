import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import Cont from './components/Cont';
import Constr from './components/Constr'
import Event from './components/Event'
import Data from './components/Data'
import Wish from './components/refs'
import WishBind from './components/refsBind'

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<Cont/>,document.querySelector('#app'));
ReactDOM.render(<Constr/>,document.querySelector('#app'));
ReactDOM.render(<Event/>,document.querySelector('#app'));
ReactDOM.render(<Data/>,document.querySelector('#app'));
ReactDOM.render(<Wish/>,document.querySelector('#app'));
ReactDOM.render(<WishBind/>,document.querySelector('#app'));