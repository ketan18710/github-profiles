import React,{useState,useRef, useEffect} from 'react'
import {ShowContext} from './api'
import {connect} from 'react-redux';
import * as actionCreater from '../store/actions/action'
const ShowProfiles = (props) => {
    // const [username, setUsername] = useState('')
    // const [repos, setRepos] = useState([])
    const [count, setCount] = useState(0)
    const repositories = useRef([])
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const username = urlParams.get('username')
        // setUsername(user)
        props.fetchUserData(username)
        props.getUserRepos(username)
        repositories.current = props.userRepos
        console.log(repositories,'repos')
        setCount(count+1)
        // setRepos(props.userRepos)
        // console.log(repos[1],'repos')
        
    },[props.userRepos])

    return (
        <div>
            <h3>{count}</h3>
            {/* <h1>username : {props.userName}</h1>
            <h2>name     : {props.userLogin} </h2>
            <img src={props.userAvatar} alt='users_image'></img>
            <h3>followers : {props.userFollowers}</h3>
            <h3>following : {props.userFollowing}</h3>
            <h3>Bio : {props.userBio}</h3>
            <h3>Blog : {props.userBlog}</h3> */}
            
            {/* <h3>{Repos.length >= 1 ? Repos.map((item,i)=><li key={item.indexOf(i)}>{item.name}</li> ): null }</h3> */}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        userName:state.userName,
        userLogin:state.userLogin,
        userRepos : state.userRepos,
        userAvatar:state.userAvatar,
        userFollowers:state.userFollowers,
        userFavorite:state.userFavorite,
        userGithub : state.userGithub,
        userBlog : state.userBlog,
        userBio:state.userBio,
        userFollowing: state.userFollowing,
    }
};
const mapDispatchToProps = dispatch => {
    return{
        fetchUserData:(login)=>dispatch(actionCreater.fetchUserData(login)),
        getUserRepos:(login)=>dispatch(actionCreater.getUserRepos(login)),
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowProfiles) 