import React from 'react'
import Employee from "../../models/Employee";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
type Props = {
    employees: Employee[]
}
const DepartmentStatistics: React.FC<Props> = (props: Props) => {
    return <React.Fragment>
        <Topbar menu={employeesMenu}/>
        <label>Number of employees {props.employees.length}</label>
    </React.Fragment>

}
export default DepartmentStatistics
