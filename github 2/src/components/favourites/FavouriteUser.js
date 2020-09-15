import React from 'react'
import { Card, Image } from 'semantic-ui-react'
function FavouriteUser(props) {
    return (
        <div>
            <Card>
                <Image src={props.img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header><a target="_blank" rel="noopener noreferrer"  href={props.profile_link}>{props.name}</a></Card.Header>
                <Card.Description>
                    {props.username}
                </Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}

export default FavouriteUser
