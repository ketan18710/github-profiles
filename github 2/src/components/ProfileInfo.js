import React, {useState,useEffect} from 'react'
import { Card,Icon ,Image } from 'semantic-ui-react'
import './ProfileInfo.scss'
import { Grid, Segment } from 'semantic-ui-react'
function ProfileInfo(props) {
    const [star_profile, setStar_profile] = useState(false)
    function starClick(){
        setStar_profile(!star_profile)
    }
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
                        {star_profile ? <Icon className="profile_star" onClick={starClick} name="star outline"/> : <Icon className="profile_star" onClick={starClick} name="star"/>}
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

export default ProfileInfo
