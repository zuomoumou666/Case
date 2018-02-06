import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muiThemeable from 'material-ui/styles/muiThemeable';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import store from 'reducers/index';
import 'assets/css/main.less'

import Welcome from 'components/Welcome';
import CaseList from 'components/CaseList'
import CaseCompile from 'components/CaseCompile'
import CaseDetail from 'components/CaseDetail'


const muiTheme = getMuiTheme({
    fontFamily: 'calibri, sans-serif'
});

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <MuiThemeProvider muiTheme={muiTheme}>
            <Provider store={store}>
                <Router>
                    <div style={{width: "100%", height: "100%"}} className="main">
                        <CaseList/>
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/caseCompile" exact component={CaseCompile}/>
                        <Route path="/caseDetail/:caseId" exact component={CaseDetail}/>
                    </div>
                </Router>
            </Provider>
        </MuiThemeProvider>
    }
}
