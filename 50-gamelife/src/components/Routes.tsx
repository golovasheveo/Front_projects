import React from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';
import {MENU} from "../config/menu";

const Routes = () => {
    return <React.Fragment>
        <HashRouter>
            {/*<Redirect to={MENU[0].path}></Redirect>*/}
            <Switch>
                {MENU.map(item =>
                    <Route
                        key={item.path}
                        path={item.path}
                        exact component={item.component}/>
                )}
            </Switch>
        </HashRouter>
    </React.Fragment>
};

export default Routes;