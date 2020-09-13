import React,{useContext, useEffect} from 'react'
import {ShowContext} from './api'
import {connect} from 'react-redux';
import axios from 'axios'
import * as actionCreater from '../store/actions/action'
const ShowProfiles = (props) => {
    useEffect(() => {
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const page_type = urlParams.get('username')
        console.log('page_type',page_type)
    }, [])
    const inputText = useContext(ShowContext)
    console.log(inputText,"shoe something ")
    console.log(props.userRepos)
    const handleUserRepos = (e) =>{
        props.getUserRepos(e,props.userLogin)
    
    }
    const { Repos } = props.userRepos
    console.log(toString(Repos) ,"show me something")
    return (
        <div>
            <h1>username : {props.userName}</h1>
            <h2>name     : {props.userLogin} </h2>
            <img src={props.userAvatar} alt='users_image'></img>
            <h3>followers : {props.userFollowers}</h3>
            <h3>following : {props.userFollowing}</h3>
            <h3>Bio : {props.userBio}</h3>
            <h3>Blog : {props.userBlog}</h3>
            <button onClick={handleUserRepos}>userRepos</button>
            
            {/* <h3>{Repos.length >= 1 ? Repos.map((item,i)=><li key={item.indexOf(i)}>{item.name}</li> ): null }</h3> */}
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {
        userName:state.userName,
        userLogin:state.userLogin,
        userRepos_url:state.userRepos,
        userRepos : state.userRepos,
        userAvatar:state.userAvatar,
        userFollowers:state.userFollowers,
        userFavorite:state.userFavorite,
        userGithub : state.userGithub,
        userBlog : state.userBlog,
        userBio:state.userBio,
        userFollowing:"",
    }
};

const mapDispatchToProps = dispatch =>{
    return{
        getUserRepos :(e,login)=>dispatch(actionCreater.getUserRepos(e,login))
    }
    
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowProfiles) 