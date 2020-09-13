import axios from "axios";

export const changeUsername = e => {
    
    return {
        type: "CHANGE",
        e : e
    }
}

export const getUserData = (e,username) => {
    e.persist();
    return async dispatch => {
        try{
            console.log(username)
            const resp = await fetch(`https://api.github.com/search/users?q=${username}+in:login&sort=repositories&order=desc`);
            const data = await resp.json();
            
            dispatch({
                type : "SUBMIT",
                e : e,
                data
            })
        }catch(er){

        }
    }

}
export const fetchUserData =(login) =>{
    return dispatch => {
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
