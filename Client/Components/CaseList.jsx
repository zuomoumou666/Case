import React, {Component} from 'react';
import {connect} from 'react-redux';
import {grey500, cyan500} from 'material-ui/styles/colors';
import {withRouter,Route, Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Notification from 'rc-notification'
let notification = null;
Notification.newInstance({prefixCls:"message",transitionName: 'move-up',top:"16px"}, (n) => notification = window.notification = n);

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ChevronLeft from 'material-ui/svg-icons/navigation/chevron-left'
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const iconStyle = {
    color:"#fff",
    cursor:"pointer"
};



class CaseList extends Component {
    constructor(props) {
        super(props);
        this.state={
            caseList:[
                {
                    id:0,
                    name:"我是第一个case"
                },
                {
                    id:1,
                    name:"我是第二个case"
                },
                {
                    id:1,
                    name:"我是第二个case"
                },
                {
                    id:1,
                    name:"我是第二个case"
                },
                {
                    id:1,
                    name:"我是第二个case"
                }
            ],
            isDialogOpen:false
        };
        this.handleCreateCase = this.handleCreateCase.bind(this);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }

    handleCreateCase(){
        if(this.handleValidateCaseName(this.caseName.input.value)){
            this.props.history.push('/caseCompile');
            this.handleCloseDialog();
        }else{
            notification.notice({
                content: <span>Please Enter the right name</span>
            });
        }
    }

    handleValidateCaseName(caseName){
        return caseName !== "" && caseName !== null && caseName !== undefined;
    }

    handleOpenDialog(){
        this.setState({isDialogOpen:true});
    }
    handleCloseDialog(){
        this.setState({isDialogOpen:false});
    }

    render() {
        const { history } = this.props;
        const { caseList ,isDialogOpen } = this.state;
        const actions = [
            <FlatButton
                label="CANCEL"
                primary={true}
                onClick={this.handleCloseDialog}
            />,<FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleCreateCase}
            />
        ];

        return <div className="case_list" style={{background:cyan500}}>
            <div className="list">
            <div className="arrow left">
                <ChevronLeft style={iconStyle}/>
            </div>
            <div className="list_wrapper">
            {
                 caseList.map((ele,i)=>{
                     return <div className="item" key={i}>
                         {ele.name}
                     </div>
            })
            }
            </div>
            <div className="arrow right">
                <ChevronRight style={iconStyle}/>
            </div>
            </div>
            <div className="add" onClick={this.handleOpenDialog}>
                <ContentAdd style={iconStyle}/>
            </div>
            <Dialog
                actions={actions}
                title="Create a new case"
                modal={false}
                open={isDialogOpen}
                overlayStyle={{background:"none"}}
            >
                <TextField hintText="Enter the case's name"  ref={(ref)=>{this.caseName = ref}}/>
            </Dialog>
        </div>
    }
}

function mapStateToProps(state) {
    return {chatRoomsNameList: state.chatRooms.chatRoomsNameList}
}

export default withRouter(connect(mapStateToProps)(CaseList));
