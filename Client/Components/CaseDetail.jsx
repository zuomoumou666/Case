import React, {Component} from 'react';
import {connect} from 'react-redux';
import {grey500, cyan50} from 'material-ui/styles/colors';
import {withRouter,Route, Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';



class CaseDetail extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { history } = this.props;
        return <div className="case_detail">

        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default withRouter(connect(mapStateToProps)(CaseDetail));
