import {GetRequest} from '../api/HotApi'
export const Get = () => {
    return (dispatch)=>{
        GetRequest().then(({data})=>{
            dispatch(Success(data))
        })
    }
}

export const Success = (data)=>{
    return{
        type:"Get",
        data
    }
}

export const Del = (obj)=>{
    return{
        type:"Del",
        obj
    }
}