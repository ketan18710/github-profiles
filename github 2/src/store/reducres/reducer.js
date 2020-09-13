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
    userFavorite:"",
    userGithub : "",
    userRepos : [],
    userBlog : "",
    userBio:"",
    userFollowing:"",
    grabbedUserData: false,
    message : "",
    grabbedData : false
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
            //console.log(action.data)
            const usersLogin=action.data.items.map((items)=>items.login)
            const usersRepos=action.data.items.map((items)=>items.repos_url)
            const usersAvatar=action.data.items.map((items)=>items.avatar_url)
            const usersFollowers=action.data.items.map((items)=>items.followers_url)
            const usersId=action.data.items.map((items)=>items.id)
            
            if(action.data.total_count !== 0){
                return{
                ...state,
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

            case "FETCH_USER":
                
                return{
                    ...state,
                    userName       :    action.userData.name,
                    userLogin      :    action.userData.login,
                    userRepos_url  :    action.userData.repos_url,
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
                console.log("show repos",action.Repos)
                return {
                    ...state,
                    userRepos : action.Repos,

                };
        default:
            return state;
    }
    
}



export default reducer