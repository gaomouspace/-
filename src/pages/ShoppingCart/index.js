import view from './view'
import {connect} from 'react-redux'
import {Change , CheckAll} from '../../actions/ShoppingAction'
export default connect(
    state => {
        return {data:state.Shopping}
    },
    dispatch => {
        return{
            Change : (obj)=>{
                dispatch(Change(obj))
            },
            CheckAll : (status) => {
                dispatch(CheckAll(status))
            }
        }
    }
)(view)