import React,{useState,useRef,useEffect,createContext} from 'react'
import {connect} from 'react-redux';
//import {NavLink,Link} from 'react-dom-router'
import { Item } from 'semantic-ui-react';
import * as actionCreater from '../store/actions/action'
import { ShowProfiles } from './ShowProfiles';
import Users from './users/Users'
import { AddHeader } from './header/Header'


function Api(props) {
    const [inputText,setInputText] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false)
    const inputRef = useRef(0)
    useEffect(()=>{
        
    })
    const handleUserName =(e)=> {
        // props.changeUsername(e)
        setInputText(e.target.value)
        console.log(inputRef.current.value)
        
    };
    const handleSubmit = (e) => {
        console.log('x',inputText)
        props.getUserData(e,inputText);
        setInputText(inputText)
        console.log(submitClicked,'prev')
        setSubmitClicked(true)
        console.log(submitClicked,'after')
    }

    // const handlePage = (e) => {
    //     props.fetchUserData(e,e.target.innerText)
    //     console.log(e.target.innerText)
    // }
    // if(props.grabbedUserData === true){
            
    //     return <ShowProfiles/>;
    // }

     console.log(props.paylaod)
    const  {grabbedData} = props 
    
    //const listOfUsers = username.map((item)=><li>{item}</li>)
    return (
        
        <div>
           
            <AddHeader inputText={inputText} handleUserName={handleUserName} handleSubmit={handleSubmit}/>
            <h3>{props.payload}</h3>
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
        changeUsername: e => dispatch(actionCreater.changeUsername(e)), 
        getUserData:(e, username)=>dispatch(actionCreater.getUserData(e,username)),
        fetchUserData:(e, login)=>dispatch(actionCreater.fetchUserData(e,login))
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Api);
