import React, {useState,useEffect} from 'react'
import { Card, Feed, Button ,Icon} from 'semantic-ui-react'
import {Link} from "react-router-dom";
import './User.scss'
import {connect} from 'react-redux';
import * as actionCreater from '../../store/actions/action'
function User(props) {
    const [star_profile, setStar_profile] = useState(false)
    function starClick(){
        if(!star_profile){
            var data = {
                name : props.name ? props.name : 'Name not Specified',
                profile_url : props.profile_url,
                avatar: props.image,
                username: props.username
            }
            props.addFavoriteUser(props.username,data)
        }else{
            props.removeFavoriteUser(props.username)
        }
        setStar_profile(!star_profile)
    }
    useEffect(() => {
        var favouriteUser = props.FavoriteUsers
        if(favouriteUser.hasOwnProperty(props.username)){
            console.log('yes')
            setStar_profile(true)
        }else{
            console.log('no')
            setStar_profile(false)
        }
    }, [props.username,props.FavoriteUsers])
    return (
        <div className="user">
            <Card>
                <Card.Content>
                    <Feed>
                        <Feed.Event>
                        
                        <Feed.Label className="user__image" image={props.image} />
                        <Feed.Content>
                            <Feed.Summary>
                                <h5  onMouseOver={props.handleUsers}>Login Name :{props.username}</h5>
                                <p1> Name        :  {props.name} </p1><br/>
                                <p1> Public Repos : {props.repos_no} </p1><br/>
                                <p1> Bio         :  {props.bio} </p1><br/>
                                <p1> Followers   :  {props.followers} </p1><br/>
                            </Feed.Summary>
                        </Feed.Content>
                        </Feed.Event>
                    </Feed>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                    <Button basic color='green'>
                        <Link  to={'/profile?username='+props.username}>
                            Show Repositories
                        </Link>
                    </Button>
                    <Button onClick={starClick} basic color='red'>
                        {star_profile ? 
                            <Icon className="profile_star" color="blue" name="star "/> 
                                : 
                            <Icon className="profile_star" name="star outline"
                        />}
                    </Button>
                    </div>
                </Card.Content>
            </Card>
                
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        FavoriteUsers : state.FavoriteUsers,
        profile_url : state.userGithub
    }
};

const mapDispatchToProps = dispatch => {
    return{
        //changeUsername: e => dispatch(actionCreater.changeUsername(e)), 
        addFavoriteUser:(username,data )=>dispatch(actionCreater.addFavoriteUser(username,data)),
        removeFavoriteUser:( username)=>dispatch(actionCreater.removeFavoriteUser(username)),
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(User);
