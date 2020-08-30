import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import Topbar from "./components/Topbar";
import {Dashboard} from "./components/Dashboard";
import {RandomEmployee} from "./components/RandomEmployee";
import {Clock} from "./components/Clock";
import {MENU} from "./config/Menu";
import { Redirect } from "react-router-dom";

export const Routes = () => {
    return <React.Fragment>
        <HashRouter>

            {/*<Topbar/>*/}
            {/*<Redirect to={MENU[0].path}></Redirect>*/}

            {/*рисвовалка и переключалка*/}
            <Switch>

                {/*<Route path={'/dashboard'} exact component={Dashboard}/>*/}
                {/*<Route path={'/clock'} exact component={Clock}/>*/}
                {/*<Route path={'/random/employee'} exact component={RandomEmployee}/>*/}

                {MENU.map(item =>
                    <Route path={item.path} exact component={item.component}/>
                )}


            </Switch>
        </HashRouter>
    </React.Fragment>
}