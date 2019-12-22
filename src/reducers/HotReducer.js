export default function (state=[],action) {
    switch (action.type) {
        case "Get":
            return action.data;
        case "Del":
            let arr = [...state]
            let abb = arr.filter((v,i)=>{
                return v.id !== action.obj.id
            })
            return abb;
        default:
            return state;
    }
}