import { CommentActions } from "semantic-ui-react";

const initState ={
    usernames : [],
    repos : [],
    id: [],
    followers: [],
    users_avatar : [],
    userName:"",
    userLogin:"",
    userRepos_url:"",
    userAvatar:"",
    userFollowers:"",
    FavoriteUsers:{},
    userGithub : "",
    userRepos : [],
    userBlog : "",
    userBio:"",
    userFollowing:"",
    grabbedUserData: false,
    message : "",
    grabbedData : false,
    payload : "",
    
}
console.log(initState)
const reducer = (state=initState,action) =>{
    switch(action.type){
        case "CHANGE":
             let currentUsername=action.e.target.value;
             console.log(action.e.target.value)
             return{
                 ...state,
                usernames :currentUsername
             } 
        case "SUBMIT":
            // if(action.data.items == localStorage.getItem("userData"))
            //     {
            //         console.log("hi guys")
            //     }
            //     else{
                const usersLogin=action.data.items.map((items)=>items.login)
                const usersRepos=action.data.items.map((items)=>items.repos_url)
                const usersAvatar=action.data.items.map((items)=>items.avatar_url)
                const usersFollowers=action.data.items.map((items)=>items.followers_url)
                const usersId=action.data.items.map((items)=>items.id)
                
                if(action.data.total_count !== 0){
                    return{
                    ...state,
                    payload : "",
                    usernames : usersLogin,
                    repos : usersRepos,
                    id : usersId,
                    followers : usersFollowers,
                    users_avatar : usersAvatar,
                    grabbedData : true

                    }
                }else{
                        return {
                            ...state,
                            message : "user not found",
                            usernames : [],
                            repos : [],
                            id : [],
                            followers : [],
                            users_avatar : [],
                            grabbedData : false
                        }

                    }
                   
            case "SEARCH_DATA":
           
                const searchLogin=action.userData.items.map((items)=>items.login)
                const searchRepos=action.userData.items.map((items)=>items.repos_url)
                const searchAvatar=action.userData.items.map((items)=>items.avatar_url)
                const searchFollowers=action.userData.items.map((items)=>items.followers_url)
                const searchId=action.userData.items.map((items)=>items.id)
                
                if(action.userData.total_count !== 0){
                    return{
                    ...state,
                    payload : "",
                    usernames : searchLogin,
                    repos : searchRepos,
                    id : searchId,
                    followers : searchFollowers,
                    users_avatar : searchAvatar,
                    grabbedData : true

                    }
                }else{
                        return {
                            ...state,
                            message : "user not found",
                            usernames : [],
                            repos : [],
                            id : [],
                            followers : [],
                            users_avatar : [],
                            grabbedData : false
                        }

                    }
            case "FETCH_USER":
                //console.log(action.userData)
                return{
                    ...state,
                    payload : "",
                    userName       :    action.userData.name,
                    userLogin      :    action.userData.login,
                    userRepos_url  :    action.userData.public_repos,
                    userAvatar     :    action.userData.avatar_url,
                    userFollowers  :    action.userData.followers,
                    userFollowing  :    action.userData.following,
                    userFavorite   :    "",
                    userGithub     :    "",
                    userBlog       :    action.userData.blog,
                    userBio        :    action.userData.bio,
                    grabbedUserData:    true

                }
            case "FETCH_USER_REPOS":
                //console.log("show repos",action.Repos)
                return {
                    ...state,
                    userRepos : action.Repos,
                    payload : ""

                };
            case "FETCHING_DATA":
                console.log(action.payload)
                return{
                    ...state,payload:action.payload,
                    message : ""
                }
            case "ADD_FAVORITE_USER" :
                console.log("user added as a favorite",action.username)
                return{
                    ...state,
                    FavoriteUsers : state.FavoriteUsers[action.username] = action.user
                }
            case "REMOVE_FAVORITE_USER" :
                console.log("user added as a favorite",toString(action.username))
                return{
                    ...state,
                    FavoriteUsers : delete state.FavoriteUsers[action.username]
                }
        default:
            return state;
    }
    
}



export default reducer