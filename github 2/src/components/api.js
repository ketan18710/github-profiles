import React,{useState,useRef,useEffect,createContext} from 'react'
import {connect} from 'react-redux';
//import {NavLink,Link} from 'react-dom-router'
import { Item } from 'semantic-ui-react';
import * as actionCreater from '../store/actions/action'
import { ShowProfiles } from './ShowProfiles';
import Users from './users/Users'
const ShowContext = createContext()
function Api(props) {
    const [inputText,setInputText] = useState('');
    const [submitClicked, setSubmitClicked] = useState(false)
    const inputRef = useRef(0)
    useEffect(()=>{
        
    })
    const handleUserName =(e)=> {
        //props.changeUsername(e)
        setInputText(e.target.value)
        console.log(inputRef.current.value)
        
    };
    const handleSubmit = (e) => {
        console.log('x')
        props.getUserData(e,inputText);
        setInputText(inputText)
        console.log(submitClicked,'prev')
        setSubmitClicked(true)
        console.log(submitClicked,'after')
    }

    const handlePage = (e) => {
        props.fetchUserData(e,e.target.innerText)
        console.log(e.target.innerText)
    }
    // if(props.grabbedUserData === true){
            
    //     return <ShowProfiles/>;
    // }

     
    const  {grabbedData} = props 
    
    //const listOfUsers = username.map((item)=><li>{item}</li>)
    return (
        
        <div>
            <ShowContext.Provider value={inputText}/>
            <h3>{props.payload}</h3>
            <input ref={inputRef} type ="text" placeholder="enter github username"  onChange={handleUserName}/>
            <br/>
            <button type="submit" onClick={handleSubmit}>search</button>
            
            <h3>{props.message}</h3>
            {/* <h3>{usernames.length ===30 ? usernames.map((item,i)=><li ref={inputRef} onClick={handlePage} key={i}>{item}</li> ): null }</h3> */}
            {(submitClicked && grabbedData ) && <Users />}
            {/* {(submitClicked && grabbedData === false ) && <h4>No Data Found</h4>} */}
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
        payload : state.paylaod
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
export {ShowContext}