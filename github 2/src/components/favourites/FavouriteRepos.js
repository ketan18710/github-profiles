import React,{useState,useEffect} from 'react'
import Repo from '../Repo'
import { Grid } from 'semantic-ui-react'
import {connect} from 'react-redux';
function FavouriteUsers(props) {
    const [repos, setRepos] = useState('')
    useEffect(() => {
        setRepos(props.FavoriteRepos)
    }, [props.FavoriteRepos])

    function show_users(){
        var rows=[]
        for(var key in repos){
            if(repos.hasOwnProperty(key)){
                var row = <Grid.Row>
                        {row__column(repos[key])}
                    </Grid.Row>
                    rows.push(row)
            }
        }
        return rows
    }
    function row__column(data){
        return <Grid.Column>
            <Repo 
                resetInterval =  {data.resetInterval}
                repo_clone_url =  {data.repo_clone_url}
                repo_name = { data.repo_name}
                repo_url =  {data.repo_url}
                forks_count =  {data.forks_count}
                description =  {data.description}
                repo_id =  {data.repo_id}
            />
        </Grid.Column>
    }


    return (
        <div className="favouriteUsers">
            <Grid >
                {show_users()}
            </Grid>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        FavoriteRepos : state.FavoriteRepos,
    }
};

const mapDispatchToProps = dispatch => null

export default connect(mapStateToProps,mapDispatchToProps)(FavouriteUsers);

