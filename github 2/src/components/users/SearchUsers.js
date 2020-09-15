import React,{useEffect, useState} from 'react'
import {connect} from 'react-redux';
import * as actionCreater from '../../store/actions/action'
import User from './User'
import { Grid } from 'semantic-ui-react'
function SearchUsers(props) {
    const [searchResult, setSearchResult] = useState('')
    useEffect(() => {
        var searchResult = props.searchResult
        console.log(searchResult,'search_result')
        setSearchResult(searchResult)
    }, [props.searchResult])
        console.log(searchResult,'search_res')

    function show_users(){
        var rows=[]
        for(var i =0;i<searchResult.length;){
            if(i%3===0){     
            var row = <Grid.Row>
                    {(i<searchResult.length) && row__column({username: searchResult[i].login,image: searchResult[i].avatar_url})}
                    {(i+1<searchResult.length) && row__column({username: searchResult[i+1].login,image: searchResult[i+1].avatar_url})}
                    {(i+2<searchResult.length) && row__column({username: searchResult[i+2].login,image: searchResult[i+2].avatar_url})}
                </Grid.Row>
                rows.push(row)
                i = i+3
            }
        }
        return rows
    }
    function row__column(data){
        return <Grid.Column><User username={data.username} image={data.image} handleUsers={props.handleUsers} name={props.userName} followers={props.userFollowers} repos_no={props.userRepos_url} bio={props.userBio}/></Grid.Column>
    }
    return (
        <div>
            <Grid columns={3} divided>
                {show_users()}
            </Grid>
        </div>
    )
}


const mapStateToProps = state => {
    return{
        searchResult : state.searchResult,
    }
};

const mapDispatchToProps = dispatch => {
    return{
        //changeUsername: e => dispatch(actionCreater.changeUsername(e)), 
        addFavoriteRepo:(id,data)=>dispatch(actionCreater.addFavoriteRepo(id,data)),
        removeFavoriteRepo:( id)=>dispatch(actionCreater.removeFavoriteRepo(id)),
    }  
    
}
export default connect(mapStateToProps,mapDispatchToProps)(SearchUsers);
