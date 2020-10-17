import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { authService } from "../../App";
import { Redirect } from "react-router-dom";
import { PATH_HOME, PATH_LOGOUT } from "../../config/Menu";

const Logout: React.FC = () => {
   const [redir, setRedir] = useState<boolean>(false)

    const logout = () => {
        authService.logout().then();
        setRedir(true)
    }
    return <React.Fragment>
        <Button onClick={logout}>Logout</Button>
        <Redirect to={redir ? PATH_HOME : PATH_LOGOUT}/>
    </React.Fragment>
}
export default Logout;
