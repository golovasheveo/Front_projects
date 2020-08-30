import React from 'react';
import Toolbar from "./Toolbar";
import { Typography, Divider } from '@material-ui/core';

const Dashboard = () => {
    
    return <React.Fragment>

        <Toolbar />

            <Typography variant="h6" color="secondary" align="center" >
                Game of Life
            </Typography>

    </React.Fragment>
};

export default Dashboard;