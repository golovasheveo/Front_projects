import React, {useEffect} from 'react';
import Employee from "./models/EmployeeType";
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import {
    PATH_ADD_EMPLOYEE,
    PATH_DEPARTMENT_STATISTICS,
    PATH_EMPLOYEES,
    PATH_GENERATION,
    PATH_HOME,
    PATH_LOGIN,
    PATH_LOGOUT,
    PATH_SALARY_STATISTICS,
    PATH_SEARCH
} from "./config/Menu";
import Home from "./components/pages/Home";
import Employees from "./components/pages/Employees";
import NewEmployee from "./components/pages/NewEmployee";
import EmployeesGeneration from "./components/pages/EmployeesGeneration";
import SalaryStatistics from "./components/pages/SalaryStatistics";
import DepartmentStatistics from "./components/pages/DepartmentStatistics";
import EmployeesSearch from "./components/pages/EmployeesSearch";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {Theme} from "@material-ui/core/styles/createMuiTheme";
import {authService, service} from "./config/server-config";

import usePollerRedux from "./util/poller";
import {POLLING_INTERVAL} from "./config/consts";
import {UserData} from "./services/AuthService";
import Login from "./components/pages/Login";
import Logout from './components/pages/Logout';
import {employeesAction, userDataAction, widthAction} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "./store/store";
import ErrorTypes from "./util/ErrorTypes";


function errorHandler(error: ErrorTypes) {
    if (error === ErrorTypes.AUTH_ERROR) {
        authService.logout().then();
    }
}

function App(): JSX.Element {
    usePollerRedux<Employee[]>(service, service.getAllEmployees, employeesAction, errorHandler, POLLING_INTERVAL)
    usePollerRedux<UserData>(authService, authService.getUserData, userDataAction, errorHandler)

    const dispatch = useDispatch();
    useEffect(() => window.addEventListener('resize',
        () => dispatch(widthAction(window.innerWidth))), [dispatch])


    const userData = useSelector((state: ReducersType) => state.userData);
    const theme: Theme = createMuiTheme({
        spacing: 8,
        // typography: {
        //     body2: {
        //         fontSize: '0.7rem'
        //     },
        //     body1: {
        //         fontSize: '1rem'
        //     }
        // }

        

    })
    return <ThemeProvider theme={theme}>
        <HashRouter>
            <Redirect to={!!userData.user ? PATH_HOME : PATH_LOGIN}/>
            <Switch>

                <Route path={PATH_HOME} exact render={() => {
                    return !!userData.user && <Home/>
                }}/>
                <Route path={PATH_LOGIN} exact render={() => {
                    return <Login/>
                }}/>
                <Route path={PATH_LOGOUT} exact render={() => {
                    return !!userData.user && <Logout/>
                }}/>
                <Route path={PATH_EMPLOYEES} exact render={() =>
                    !!userData.user && <Employees/>}/>
                <Route path={PATH_ADD_EMPLOYEE} exact render={() =>
                    userData.isAdmin && <NewEmployee
                        backPath={PATH_EMPLOYEES}/>}/>
                <Route path={PATH_GENERATION} exact render={() => userData.isAdmin && <EmployeesGeneration
                />}/>
                <Route path={PATH_SALARY_STATISTICS} exact render={
                    () => !!userData.user && <SalaryStatistics
                    />}/>
                <Route path={PATH_DEPARTMENT_STATISTICS} exact render={
                    () => !!userData.user && <DepartmentStatistics
                    />}/>
                <Route path={PATH_SEARCH} exact render={
                    () => !!userData.user && <EmployeesSearch
                    />}/>
            </Switch>
        </HashRouter>
    </ThemeProvider>

}

export default App;
