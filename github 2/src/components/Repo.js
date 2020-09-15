import React,{useState,useEffect} from 'react'
import { Card ,Icon} from 'semantic-ui-react'
import copy from "copy-to-clipboard";
import './Repo.scss'
import {connect} from 'react-redux';
import * as actionCreater from '../store/actions/action'
function Repo(props) {
    const [isCopied, setCopied] = useState(false);
    function handleCopy() {
        var text = props.repo_clone_url
        copy(text.toString());
        console.log('iscopied_prev',isCopied)
        setCopied(true);
        console.log('iscopied_after',isCopied)
        setTimeout(()=>{
            setCopied(false)
            console.log('iscopied_clear',isCopied)
        },4000)
    }
    const [star_profile, setStar_profile] = useState(false)
    function starClick(){
        if(!star_profile){
            var data = {
                resetInterval : props.resetInterval,
                repo_clone_url : props.repo_clone_url,
                repo_name : props.repo_name,
                repo_url : props.repo_url,
                forks_count : props.forks_count,
                description : props.description,
                repo_id : props.repo_id,
            }
            props.addFavoriteRepo(props.repo_id,data)
            console.log(props.FavoriteRepos,'FavoriteRepos')
        }else{
            props.removeFavoriteRepo(props.repo_id)
        }
        setStar_profile(!star_profile)
    }
    useEffect(() => {
        //console.log(props.repo_id,'repo_id')
        var favouriteRepos = props.FavoriteRepos
        //console.log(favouriteRepos,'fav_repos')
        if(favouriteRepos.hasOwnProperty(props.repo_id)){
            setStar_profile(true)
        }else{
            setStar_profile(false)
        }
    }, [props.repo_id,props.FavoriteRepos])
    function text_truncate(str, length, ending) {
        if (length == null) {
          length = 100;
        }
        if (ending == null) {
          ending = '...';
        }
        if (str.length > length) {
          return str.substring(0, length - ending.length) + ending;
        } else {
          return str;
        }
    };
    return (
        <div className="repo">
            <Card >
                <Card.Content>
                    <Card.Header><a href={props.repo_url} rel="noopener noreferrer" target="_blank">{props.repo_name}</a></Card.Header>
                    <Card.Meta>
                        <span>
                            <Icon name="fork"/> {props.forks_count}   Forks
                        </span>
                        <span onClick={() => handleCopy()}>
                            {isCopied === false ? <p><Icon name="clipboard"/> Click to copy repository clone link</p> : <p id="clipboard_check"><Icon name="clipboard check"/>Copied to clipboard</p>}
                        </span>
                        <span onClick={()=>starClick()}>
                            {star_profile ? <Icon className="profile_star" color="blue" name="star "/> : <Icon className="profile_star" name="star outline"/>}
                        </span>
                    </Card.Meta>
                    <Card.Description>
                        {props.description ? text_truncate(props.description,50,'...') : <p>description not provided</p>}
                    </Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        FavoriteRepos : state.FavoriteRepos,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        //changeUsername: e => dispatch(actionCreater.changeUsername(e)), 
        addFavoriteRepo:(id,data)=>dispatch(actionCreater.addFavoriteRepo(id,data)),
        removeFavoriteRepo:( id)=>dispatch(actionCreater.removeFavoriteRepo(id)),
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(Repo);
