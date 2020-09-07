import React from "react";
import Employee from "../../models/Employee";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
type Props = {
    employees: Employee[]
}
const SalaryStatistics:React.FC<Props> = (props: Props) => {

    return <React.Fragment>
        <Topbar menu={employeesMenu}/>
        <label>Max salary: {props.employees.reduce((res, cur) => Math.max(res,cur.salary), 0)}</label>
    </React.Fragment>

}
export default SalaryStatistics;
