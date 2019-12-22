import view from './view'
import {connect} from 'react-redux'
import {Get , Del} from '../../actions/HotAction'
import {withRouter} from 'react-router-dom'
export default connect(
    state => {
        return{data:state.Hot}
    },
    dispatch => {
        return{
            Get : ()=>{
                dispatch(Get())
            },
            Del : (obj)=>{
                dispatch(Del(obj))
            }
        }
    }
)(withRouter(view))