import * as api from '../api'
// import thunk from 'redux-thunk';


export const login = () => async(dispatch) => {
    try{
        const {data} = await api.login();
        dispatch({type:'LOGIN',payload:data});

    }catch(error){
        
        console.log(error.message)
    }
}


export const register = (post) => async(dispatch) => {
    try{
        const data = await api.register(post);
        dispatch({type:'REGISTER',payload:data});

    }catch(error){
        console.log(error)
    }
}

export const updateUser = (post) => async(dispatch) => {
    try{
        const data = await api.updateUser(post);   
        dispatch({type:'UPDATE',payload:data});
    }
    catch(error){
        console.log(error)
    }
}