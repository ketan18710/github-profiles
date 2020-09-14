import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import {Link} from "react-router-dom";
import './User.scss'
function User(props) {
    return (
        <div className="user">
            
                <Card>
                <Link to={'/profile?username='+props.username}>
                    <Card.Content>
                        <Feed>
                            <Feed.Event>
                            
                            <Feed.Label className="user__image" image={props.image} />
                            <Feed.Content>
                                <Feed.Summary>
                                    <h5>{props.username}</h5>
                                    
                                    
                                </Feed.Summary>
                            </Feed.Content>
                            </Feed.Event>
                        </Feed>
                    </Card.Content>
                    </Link>
                </Card>
            
            
        </div>
    )
}

export default User
