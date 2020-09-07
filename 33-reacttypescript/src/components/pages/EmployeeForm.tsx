import React, {useState} from "react";
import EmployeesService from "../../services/EmployeesService";
import Employee from "../../models/Employee";
import { Redirect } from "react-router-dom";
import {PATH_HOME} from "../../config/Menu";
type Props = {
    service: EmployeesService,
    employees: Employee[],
    refreshFn: () => void,
    backPatch?: string
}
const EmployeeForm: React.FC<Props> = (props: Props) => {
    const [backFl, setBackFl] = useState<boolean>(false);
    return <React.Fragment>
        <label>Employee Form works</label> <br/>
        <button onClick={() => {
            props.service.addEmployee({
                id: Math.round(Math.random() * 100000)
                , birthDate: new Date(), name: 'Moshe' , salary: Math.round(Math.random() * 30000)
                , department: 'department' + Math.round(Math.random() * 3)
            })
            props.refreshFn();
            setBackFl(true)
        }}>Back</button>}
        {backFl && <Redirect to={props.backPatch || PATH_HOME}/>}
    </React.Fragment>
}
export default EmployeeForm;
