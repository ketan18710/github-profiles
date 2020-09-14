import axios from "axios";

export const changeUsername = e => {
    
    return {
        type: "CHANGE",
        e : e
    }
}

export const getUserData = () => {
    //e.persist();
    return async dispatch => {
        dispatch({type:"FETCHING_DATA",payload:"fetching........"})
        try{
       
            const sessionData = JSON.parse(sessionStorage.getItem("userData"))
            
            if (!sessionData){
                const resp = await fetch(`https://api.github.com/search/users?q=type%3Auser&sort=repositories&order=desc&per_page=50`);
                const data = await resp.json();
                console.log("i ma indian")
                sessionStorage.setItem("userData",JSON.stringify(data))
                dispatch({
                    type : "SUBMIT",
                   
                    data
                })
            }else{
                const data =JSON.parse(sessionStorage.getItem("userData"))
                console.log("hello user",data)
                dispatch({
                    type : "SUBMIT",
                   
                    data
                })
            }
                
            
        }catch(er){

        }
    }

}

export const personalUserData=(login)=>{
    return dispatch => {
        dispatch({type:"FETCHING_DATA",payload:"fetching........"})
        axios.get(`https://api.github.com/search/users?q=${login}+in:name&sort=repositories&order=desc`)
        .then((response) => {
            const userData = response.data;
            dispatch({
                type : "SEARCH_DATA",
                userData

            })
            }).catch((err)=>{
                console.log(err)
        })
    }
}

export const fetchUserData =(login) =>{
    return dispatch => {
        dispatch({type:"FETCHING_DATA",payload:"fetching........"})
        axios.get(`https://api.github.com/users/${login}`)
        .then((response) => {
            const userData = response.data;
            dispatch({
                type : "FETCH_USER",
                userData

            })
            }).catch((err)=>{
                console.log(err)
        })
    }

}
export const getUserRepos = (login) =>{
    return dispatch => {
        dispatch({type:"FETCHING_DATA",payload:"fetching........"})
        axios.get(`https://api.github.com/users/${login}/repos`)
        .then((response)=>{

            const Repos = response.data;
            dispatch({
                type : "FETCH_USER_REPOS",
                Repos,

            })
        }).catch((err)=>{
            console.log(err)
        })
    }
}

export const addFavoriteUser =(username,user)=>{
    console.log(username)
    return dispatch => {
        dispatch({
            type : "ADD_FAVORITE_USER",
            username,
            user
        });
    };
    
}

export const removeFavoriteUser =(username)=>{
    console.log(username)
    return dispatch =>{
        dispatch({
            type : "REMOVE_FAVORITE_USER",
            username
        });
    }
}
export const addFavoriteRepo =(id,data)=>{
    return dispatch => {
        dispatch({
            type : "ADD_FAVORITE_REPO",
            id,
            data
        });
    };
    
}

export const removeFavoriteRepo =(id)=>{
    return dispatch =>{
        dispatch({
            type : "REMOVE_FAVORITE_REPO",
            id
        });
    }
}