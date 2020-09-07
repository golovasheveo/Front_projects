import React from 'react'
import EmployeesService from "../../services/EmployeesService";
import Employee from "../../models/Employee";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
import {HeaderDescription, MyTable} from "../library/MyTable";
import useTheme from "@material-ui/core/styles/useTheme";
import DeleteIcon from '@material-ui/icons/Delete';
type Props = {
    service: EmployeesService;
    employees: Employee[];
    refreshFn: () => void
}
const Employees: React.FC<Props> = (props: Props) => {
    const theme = useTheme();
    console.log(theme);
    const headers: Map<string, HeaderDescription> = new Map([
        ['id',{displayName: 'ID', numeric: false}],
        ['name', {displayName: 'Name', numeric: false}],
        ['salary', {displayName: 'Salary', numeric: true}],
        ['department', {displayName: 'Department', numeric: false}],
         ['birthDate', {displayName: 'Birth Date', numeric: true}],
    ]);

    function removeEmployee(emplObj: object) {
        const id: number = (emplObj as Employee).id
        if (window.confirm(`you are going to remove employee with id ${id}`)) {
            props.service.removeEmployee(id);
            props.refreshFn();
        }

    }

    return <React.Fragment>
        <Topbar menu={employeesMenu}/>
        <MyTable headers={headers} rows={props.employees
            .map(e => {
                const e1 = {...e};
                if (e1.birthDate) {
                    e1.birthDate = (e1.birthDate as Date).toDateString();
                }
                return e1;

            })} actions={[{icon: <DeleteIcon/>, actionFn: removeEmployee}]}/>
    </React.Fragment>
}
export default Employees;
