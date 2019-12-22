import request from '../utils/Request'
export const LoginRequest = (obj)=>{
    return request.post('http://api.baxiaobu.com/index.php/home/v1/login',obj)
} 