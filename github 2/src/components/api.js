import React,{useState,useRef,useEffect,createContext} from 'react'
import {connect} from 'react-redux';
//import {NavLink,Link} from 'react-dom-router'
import { Item } from 'semantic-ui-react';
import * as actionCreater from '../store/actions/action'
import { ShowProfiles } from './ShowProfiles';
import Users from './users/Users'
import { AddHeader } from './header/Header'


function Api(props) {
   
    const [submitClicked, setSubmitClicked] = useState(false)
    
    useEffect(()=>{       
        props.getUserData();
        
        setSubmitClicked(true)
    },[])

//     setTimeout(()=>{
//         console.log("userData",props)
// //localStorage.setItem("userData",JSON.stringify(props))
//         const data = localStorage.getItem("userData")
//         console.log(data)
//     },1000)
   




     
    const  {grabbedData,usernames} = props 
    console.log(grabbedData,'grabbeddata')
    console.log(usernames,'usernames')
   
    return (
        
        <div>
           
            
            <h3 style={{paddingLeft:"20em",fontFamily:"sans-serif",fontSize:"30px",color:"blueviolet"}}>{(props.message=="")&&props.payload}</h3>
            <h3>{props.message}</h3>
            
            {(submitClicked && grabbedData ) && <Users />}
           
        </div>
    )
}

const mapStateToProps = state => {
    return{
        usernames : state.usernames,
        repos : state.repos,
        id : state.id,
        users_avatar:state.users_avatar,
        followers: state.followers,
        message : state.message,
        grabbedData : state.grabbedData,
        grabbedUserData : state.grabbedUserData,
        payload : state.payload
    }
};

const mapDispatchToProps = dispatch => {
    return{
        //changeUsername: e => dispatch(actionCreater.changeUsername(e)), 
        getUserData:( )=>dispatch(actionCreater.getUserData()),
        fetchUserData:( login)=>dispatch(actionCreater.fetchUserData(login)),
        personalUserData:(login) => dispatch(actionCreater.personalUserData(login)) 
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Api);
