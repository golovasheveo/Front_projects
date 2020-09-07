import React, { useState } from "react";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
import ConfirmDialog from "./Dialog";
const Home: React.FC = () => {

    const [open, setOpen] = useState<boolean> (false)
    const [resDiaolog, setResDialog] = useState<boolean|null> (null)
    function onClose(res: boolean) {
        setResDialog(res);
        setOpen(false);
    }

    return <React.Fragment>
        <Topbar menu={employeesMenu}/>
        <h3>Please select required page</h3>
        <button onClick = { () => setOpen(true)}>Open Confirmation Dialog</button>
        <label>result received from confirm dialog{resDiaolog}</label>
        <ConfirmDialog title={ "Test Title" } open={ open } content={ "Test content" } onClose={ onClose }/>
    </React.Fragment>
}
export default Home;
