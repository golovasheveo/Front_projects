import React, {useRef, useState} from 'react'
import EmployeesService from "../../services/EmployeesService";
import Employee from "../../models/Employee";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
import {HeaderDescription, MyTable} from "../library/MyTable";
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmationDialog from "../library/ConfirmDialog";
type Props = {
    service: EmployeesService;
    employees: Employee[];
    refreshFn: () => void
}
const Employees: React.FC<Props> = (props: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const idRef = useRef<number>(0);
    const headers: Map<string, HeaderDescription> = new Map([
        ['id',{displayName: 'ID', numeric: false}],
        ['name', {displayName: 'Name', numeric: false}],
        ['salary', {displayName: 'Salary', numeric: true}],
        ['department', {displayName: 'Department', numeric: false}],
         ['birthDate', {displayName: 'Birth Date', numeric: true}],
    ]);

    function removeEmployee(emplObj: object) {
        idRef.current = (emplObj as Employee).id

        setOpen(true);


    }
    function onClose(res: boolean) {
        setOpen(false);
        if (res) {
            props.service.removeEmployee(idRef.current);
            props.refreshFn()
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
            <ConfirmationDialog title={'You are going remove'} open={open}
                                content={`employee with id ${idRef.current}`} onClose={onClose}/>
    </React.Fragment>
}
export default Employees;
