import React,{useState,useEffect} from 'react'
import {connect} from 'react-redux';
import { Grid } from 'semantic-ui-react'
import User from './User'
import * as actionCreater from '../../store/actions/action'
function Users(props) {
    console.log(props,'props')
    const [username, setUsername] = useState([])
    const [avatar, setAvatar] = useState([])
    useEffect(() => {
        setAvatar(props.users_avatar)
        setUsername(props.usernames)
    }, [props])
    function show_users(){
        var rows=[]
        for(var i =0;i<username.length;){
            if(i%3===0){     
            var row = <Grid.Row>
                    {(i<username.length) && row__column({username: username[i],image: avatar[i]})}
                    {(i+1<username.length) && row__column({username: username[i+1],image: avatar[i+1]})}
                    {(i+2<username.length) && row__column({username: username[i+2],image: avatar[i+2]})}
                </Grid.Row>
                rows.push(row)
                i = i+3
            }
        }
        return rows
    }
    function row__column(data){
        return <Grid.Column><User username={data.username} image={data.image}/></Grid.Column>
    }
    return (
        <div className="users">
            
            <Grid columns={3} divided>
                {show_users()}
            </Grid>
        </div>
    )
}

export default Users;
