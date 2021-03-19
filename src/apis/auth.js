import { LOGIN, SIGNUP } from "../config/urls";
import { apiDelete, apiGet, apiPost, apiPut, setUserData } from "../utils/utils";



export function login(data={}){
    // return apiPost(LOGIN, data)
    return new Promise((resolve, reject)=>{
        apiPost(LOGIN, data).then(res=>{
            setUserData(res.data);
            resolve(res)
        }).catch(error=>{reject(error)})
    })
}

export function signup(data={}){
    
    return new Promise((resolve, reject)=>{
        apiPost(SIGNUP, data).then(res=>{
            setUserData(res.data);
            resolve(res);
        }).catch(error=>{
            reject(error)
        })
    })
}


// return apiPost(SIGNUP, data)