import React,{useState,useRef, useEffect} from 'react'
import {ShowContext} from './api'
import {connect} from 'react-redux';
import * as actionCreater from '../store/actions/action'
import { Grid } from 'semantic-ui-react'
import ProfileInfo from './ProfileInfo'
import Repo from './Repo'
const ShowProfiles = (props) => {
    // const [username, setUsername] = useState('')
    // const [repos, setRepos] = useState([])
    
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
    console.log("congrats you are added as a favorite",props)
    const repos = props.userRepos
    console.log(repos[0],'repos[0]')
    const listRepos = repos.length !==0 && (repos.map((item)=><li key={item.id}>{item.name}</li>) )
    function show_repos(){
        var rows=[]
        for(var i =0;i<repos.length;){
            if(i%3===0){     
            var row = <Grid.Row>
                    {(i<repos.length) && row__column({
                        repo_clone_url: repos[i].clone_url, 
                        repo_name: repos[i].name, 
                        repo_url: repos[i].html_url,
                        description: repos[i].description,
                        forks_count : repos[i].forks_count
                    })}
                    {(i+1<repos.length) && row__column({
                        repo_clone_url: repos[i+1].clone_url, 
                        repo_name: repos[i+1].name, 
                        repo_url: repos[i+1].html_url,
                        description: repos[i+1].description,
                        forks_count : repos[i+1].forks_count
                    })}
                    {(i+2<repos.length) && row__column({
                        repo_clone_url: repos[i+2].clone_url, 
                        repo_name: repos[i+2].name, 
                        repo_url: repos[i+2].html_url,
                        description: repos[i+2].description,
                        forks_count : repos[i+2].forks_count
                    })}
                </Grid.Row>
                rows.push(row)
                i = i+3
            }
        }
        return rows
    }
    function row__column(data){
        return <Grid.Column>
                    <Repo 
                        resetInterval= {null}
                        repo_clone_url={data.repo_clone_url}
                        repo_name={data.repo_name}
                        repo_url={data.repo_url}
                        forks_count={data.forks_count}
                        description={data.description}
                    />
                </Grid.Column>
    }
    return (
        <div className="showProfile">
            <ProfileInfo name={props.name}  followers={props.userFollowers} following={props.userFollowing} username={props.userLogin} img={props.userAvatar} bio={props.userBio}/>
            <Grid columns={3} divided>  
                {show_repos()}
            </Grid>
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
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(ShowProfiles) 