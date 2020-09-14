import React,{useState,useRef, useEffect} from 'react'
import {ShowContext} from './api'
import {connect} from 'react-redux';
import * as actionCreater from '../store/actions/action'
const ShowProfiles = (props) => {
    // const [username, setUsername] = useState('')
    // const [repos, setRepos] = useState([])
    const [count, setCount] = useState(0)
    const [favoriteUser,setFavoriteUser] = useState([])
    
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const username = urlParams.get('username')
        // setUsername(user)
        props.fetchUserData(username)
        props.getUserRepos(username)
        
        
        // setRepos(props.userRepos)
        // console.log(repos[1],'repos')
        
    },[])
    const handleFavoriteUser =()=>{
        props.getFavoriteUser(props.userLogin)
        setFavoriteUser([...favoriteUser,props.userLogin])
        

    }
    console.log("congrats you are added as a favorite",props)
    const repos = props.userRepos
    const listRepos = repos.length !==0 && (repos.map((item)=><li key={item.id}>{item.name}</li>) )

    return (
        <div>
            <h3>{props.payload}</h3>
            <h1>username : {props.userName}</h1>
            <h2>name     : {props.userLogin} </h2>
            <img src={props.userAvatar} alt='users_image'></img>
            <button onClick={handleFavoriteUser}>mark as favorite</button>
            <h3>followers : {props.userFollowers}</h3>
            <h3>following : {props.userFollowing}</h3>
            <h3>Bio : {props.userBio}</h3>
            <h3>Blog : {props.userBlog}</h3>
            <ol><li>{listRepos}</li></ol>
            
            {/* <h3>{Repos.length >= 1 ? Repos.map((item,i)=><li key={item.indexOf(i)}>{item.name}</li> ): null }</h3> */}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        userName:state.userName,
        userLogin:state.userLogin,
        userRepos_url:state.userRepos_url,
        userRepos : state.userRepos,
        userAvatar:state.userAvatar,
        userFollowers:state.userFollowers,
        FavoriteUsers:state.FavoriteUsers,
        userGithub : state.userGithub,
        userBlog : state.userBlog,
        userBio:state.userBio,
        userFollowing: state.userFollowing,
        payload:state.payload
    }
};
const mapDispatchToProps = dispatch => {
    return{
        fetchUserData:(login)=>dispatch(actionCreater.fetchUserData(login)),
        getUserRepos:(login)=>dispatch(actionCreater.getUserRepos(login)),
        getFavoriteUser:(username)=>dispatch(actionCreater.getFavoriteUser(username)),
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowProfiles) 