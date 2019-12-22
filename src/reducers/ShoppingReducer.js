export default function (state=[],action) {
    switch (action.type) {
        case "Add":
            let flag = 0
            let arr = [...state]
            if(arr.length === 0){
                flag = 1
                arr.push(action.obj)
            } else {
                arr.forEach((v,i)=>{
                    if(v.id === action.obj.id){
                        flag = 1
                        v.num++
                    }
                })
            }
            if(flag === 0){
                arr.push(action.obj)
            }
            return arr;
        case "Change":
            let abb = [...state]
            abb.forEach((v,i)=>{
                if(v.id === action.obj.id){
                    v.bool= !v.bool
                }
            })
            return abb;
        case "CheckAll":
            let acc = [...state]
            acc.map((v,i)=>{
                v.bool = action.status
                return v
            })
            return acc;
        default:
            return state;
    }
  }