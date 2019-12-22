import view from './view'
import {connect} from 'react-redux'
import * as All from '../../actions/LoginAction'
import {bindActionCreators} from 'redux'

export default connect(
    state => {
        return{status:state.Login}
    },
    dispatch => bindActionCreators(All , dispatch)
)(view)