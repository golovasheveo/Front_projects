import React, {useState} from 'react'
import EmployeesService from "../../services/EmployeesService";
import { Redirect } from 'react-router-dom';
type Props = {
    service: EmployeesService;
    refreshFn: ()=>void
}

const EmployeesGeneration: React.FC<Props> = (props: Props) => {
    const[backFl, setBackFl] = useState(false);

    function generation() {
        for (let i = 0; i < 30; i++) {

            props.service.addEmployee({
                id: Math.round(Math.random() * 100000)
                , birthDate: new Date(), name: 'name' + i, salary: Math.round(Math.random() * 30000)
                , department: 'department' + Math.round(Math.random() * 3)
            })
        }
    }




    return <React.Fragment>
        <button onClick={() => {
            generation();
            props.refreshFn();
            setBackFl(true);
        }

        }>Done</button>
        {backFl && <Redirect to={'/'}/>}
    </React.Fragment>
}
export default EmployeesGeneration;
