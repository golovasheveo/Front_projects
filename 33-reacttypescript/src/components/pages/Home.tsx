import React, {useState} from "react";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
import ConfirmationDialog from "../library/ConfirmDialog";
const Home: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [resDialog, setResDialog] = useState<boolean|null>(null);
    function onClose(res: boolean) {
        console.log(res);
        setResDialog(res);
        setOpen(false)
    }

    return <React.Fragment>
        <Topbar menu={employeesMenu}/>
        <h3>Please select required page</h3>
        <button onClick={() => setOpen(true)}>Open Confirm Dialog</button>
        <label>result received from confirm dialog: {resDialog?.toString()}</label>
        <ConfirmationDialog title="Test Title" open={open} content="Test Content" onClose={onClose}/>
    </React.Fragment>
}
export default Home;
