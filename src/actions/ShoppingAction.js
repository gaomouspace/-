export const Add = (obj) =>{
    return {
        type:"Add",
        obj
    }
}

export const Change = (obj) =>{
    return {
        type:"Change",
        obj
    }
}

export const CheckAll = (status) =>{
    return {
        type:"CheckAll",
        status
    }
}