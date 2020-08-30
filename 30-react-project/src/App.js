import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Dashboard} from "./Dashboard";
import {Clock} from "./Clock";
import Toolbar from "./Toolbar";
export default function App() {
return <React.Fragment>

    <HashRouter>
        <Toolbar links={[{path:'/dashboard', label:'Dashboard'}, {path:'/clock', label: "Clock"}]}/>
        <Redirect to={'/dashboard'}/>
        <Switch>
            <Route exact path={'/dashboard'} component={Dashboard}/>
            <Route exact path={'/clock'} render={() => <Clock />}/>
        </Switch>

    </HashRouter>
</React.Fragment>
}

