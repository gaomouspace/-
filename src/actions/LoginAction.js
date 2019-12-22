import {LoginRequest} from '../api/RequestApi'

export const success = () => {
    return{
        type:"success"
    }
}

export const Login = (obj)=>{
    return (dispatch)=>{
        LoginRequest(obj).then(({data})=>{
            if(data.status === '200'){
                dispatch(success())
            }
        })
    }
}
