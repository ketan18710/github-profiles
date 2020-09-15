import React,{useState,useEffect} from 'react'
import FavouriteUser from './FavouriteUser'
import { Grid } from 'semantic-ui-react'
import {connect} from 'react-redux';
import './Favourites.scss'
function FavouriteUsers(props) {
    const [users, setUsers] = useState('')
    useEffect(() => {
        setUsers(props.FavoriteUsers)
    }, [props.FavoriteUsers])

    function show_users(){
        var rows=[]
        for(var key in users){
            if(users.hasOwnProperty(key)){
                var row = <Grid.Row>
                        {row__column(users[key])}
                    </Grid.Row>
                    rows.push(row)
            }
        }
        return rows
    }
    function row__column(data){
        return <Grid.Column>
            <FavouriteUser 
                img={data.avatar}
                name={data.name} 
                profile_link={data.profile_url}
                username={data.username}
            />
        </Grid.Column>
    }


    return (
        <div className="favouriteUsers">
            <Grid  >
                {show_users()}
            </Grid>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        FavoriteUsers : state.FavoriteUsers,
    }
};

const mapDispatchToProps = dispatch => null

export default connect(mapStateToProps,mapDispatchToProps)(FavouriteUsers);

