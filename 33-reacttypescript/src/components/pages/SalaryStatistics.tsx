import React from "react";
import Employee from "../../models/Employee";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
import _ from "lodash";
type Props = {
    employees: Employee[]
}



function SalaryStat() {
    _.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.

    console.log("Lodhash",_.countBy(['one', 'two', 'three'], 'length'))
    _.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
}

const SalaryStatistics:React.FC<Props> = (props: Props) => {

    return <React.Fragment>
        <Topbar menu={employeesMenu}/>
        <label>Max salary: {props.employees.reduce((res, cur) => Math.max(res,cur.salary), 0)}</label>
        {SalaryStat()}
    </React.Fragment>

}
export default SalaryStatistics;
