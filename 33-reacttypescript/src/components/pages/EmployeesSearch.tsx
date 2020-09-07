import React from 'react'
import Employee from "../../models/Employee";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
type Props = {
    employees: Employee[]
}
const EmployeesSearch: React.FC<Props> = (props: Props) => {
    return <React.Fragment>
        <Topbar menu={employeesMenu}/>
          <ol>
              {props.employees.filter(e => e.name === 'Moshe')
                  .map(e => <li key={e.id}>{JSON.stringify(e)}</li>)}
          </ol>

    </React.Fragment>
}
export default EmployeesSearch;
