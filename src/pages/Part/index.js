import view from './view'
import {connect} from 'react-redux'
import {Add} from '../../actions/ShoppingAction'
import {withRouter} from 'react-router-dom'
export default connect(
    state => {
        return{data:state.Shopping}
    },
    dispatch => {
        return {
            Add : (obj)=>{
                dispatch(Add(obj))
            }
        }
    }
)(withRouter(view)) 