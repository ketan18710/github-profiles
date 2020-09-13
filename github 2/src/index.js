import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

import {applyMiddleware,createStore} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from './store/reducres/reducer'
// thunk middle ware allow us to do multiple async action


const middleware = applyMiddleware(thunk)

const store = createStore(reducer,middleware)

// store.dispatch((dispatch)=>{
//     dispatch({type:"FETCH_USERS_"})
//     axios.get("https://api.github.com/user/repos")
//     .then((response)=>{
//         dispatch({type:"RECIEVE_USER",payload:response.data})
//     }).catch((err)=>{
//         dispatch({type:"ERR",payload:"err"})
//     })
// })

ReactDOM.render(<Provider store={store}><App/></Provider>,document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

