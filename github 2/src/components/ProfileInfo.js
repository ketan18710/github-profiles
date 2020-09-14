import React, {useState,useEffect} from 'react'
import { Card,Icon ,Image } from 'semantic-ui-react'
import './ProfileInfo.scss'
import { Grid, Segment } from 'semantic-ui-react'
import {connect} from 'react-redux';
import * as actionCreater from '../store/actions/action'
function ProfileInfo(props) {
    const [star_profile, setStar_profile] = useState(false)
    function starClick(){
        if(!star_profile){
            var data = {
                name : props.name ? props.name : 'Name not Specified',
                profile_url : props.profile_url,
                avatar: props.img,
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
        console.log(favouriteUser,'here1')
        if(favouriteUser.hasOwnProperty(props.username)){
            console.log(favouriteUser,'here2')
            setStar_profile(true)
        }else{
            console.log(favouriteUser,'here3')
            setStar_profile(false)
        }
    }, [])
    var {FavoriteUsers} = props.FavoriteUsers
    console.log(FavoriteUsers,'fav_users')
    return (
        <div className="profileInfo">
            <Card>
                <Image src={props.img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{props.name ? props.name : 'Name not Specified'}</Card.Header>
                <Card.Meta>
                    <span className='date'>{props.username ? props.username :''}</span>
                </Card.Meta>
                <Card.Description>
                    {props.bio ? props.bio : 'User has not written a bio'}
                    <div className="profileInfo__Icons">
                        {star_profile ? <Icon className="profile_star" onClick={starClick} name="star "/> : <Icon className="profile_star" onClick={starClick} name="star outline"/>}
                        <Grid columns='equal'>

                            <Grid.Column width={3}>

                            </Grid.Column>
                            <Grid.Column width={4}>
                            <Segment>
                                <div className="user_icons">
                                    <Icon name="users"/>
                                    <small>{props.followers}Followers</small>
                                </div>
                            </Segment>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Segment>
                                    <div className="user_icons">
                                        <Icon name="users"/>
                                        <small>{props.following}Following</small>
                                    </div>
                                </Segment>
                            </Grid.Column>
                        </Grid>
                        
                        
                    </div>
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
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
export default connect(mapStateToProps,mapDispatchToProps)(ProfileInfo);

