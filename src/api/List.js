import request from '../utils/Request'

export const ListRequest = () => {
    return request.get('/list.json')
}