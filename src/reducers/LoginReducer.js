export default function (state='',action){
    switch(action.type){
        case "success":
            sessionStorage.setItem("code",'200')
            return 'success'
        default :
            return state
    }
}
