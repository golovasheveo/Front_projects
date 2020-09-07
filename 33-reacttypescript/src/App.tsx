import React, {useState} from 'react';
import EmployeesService from "./services/EmployeesService";
import EmployeesServiceMapImpl from "./services/EmployeesServiceMapImpl";
import Employee from "./models/Employee";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {
    employeesMenu,
    PATH_ADD_EMPLOYEE, PATH_DEPARTMENT_STATISTICS,
    PATH_EMPLOYEES,
    PATH_GENERATION,
    PATH_HOME,
    PATH_SALARY_STATISTICS, PATH_SEARCH
} from "./config/Menu";
import Home from "./components/pages/Home";
import Employees from "./components/pages/Employees";
import EmployeeForm from "./components/pages/EmployeeForm";
import EmployeesGeneration from "./components/pages/EmployeesGeneration";
import SalaryStatistics from "./components/pages/SalaryStatistics";
import DepartmentStatistics from "./components/pages/DepartmentStatistics";
import EmployeesSearch from "./components/pages/EmployeesSearch";
import ConfirmDialog from "./components/pages/Dialog";



const service: EmployeesService = new EmployeesServiceMapImpl()

function App(): JSX.Element {
    const [employees, setEmployees] = useState<Employee[]>(service.getAllEmployees());

    const refreshFn = () => {

        setEmployees([...service.getAllEmployees()]);
    }
    return <HashRouter>

        <ConfirmDialog  title = {"any"} children = {"any"} open = {"any"}   onConfirm={"any"} setOpen={"any"}/>

        <Redirect to={PATH_HOME}/>
        <Switch>
            <Route path={PATH_HOME} exact component={Home}/>
            <Route path={PATH_EMPLOYEES} exact render={() =>
                <Employees service={service} employees={employees} refreshFn={refreshFn}/>}/>
            <Route path={PATH_ADD_EMPLOYEE} exact render={() =>
            <EmployeeForm service={service} employees={employees} refreshFn={refreshFn}
            backPatch={PATH_EMPLOYEES}/>}/>
            <Route path={PATH_GENERATION} exact render={
                () => <EmployeesGeneration service={service} refreshFn={refreshFn}
            />}/>
            <Route path={PATH_SALARY_STATISTICS} exact render={
                () => <SalaryStatistics employees={employees}
            />}/>
            <Route path={PATH_DEPARTMENT_STATISTICS} exact render={
                () => <DepartmentStatistics employees={employees}
                />}/>
            <Route path={PATH_SEARCH} exact render={
                () => <EmployeesSearch employees={employees}
                />}/>
        </Switch>
    </HashRouter>
}

export default App;
