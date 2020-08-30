import React from 'react';
import Toolbar from "./Toolbar";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Settings = ()=> {

    function changeSettings(row:number, color:number)

    return <React.Fragment>
        <Toolbar />
        <div style={{textAlign: 'center', paddingTop: 20}}>
            <TextField
                label="Enter Width and Height"
                style={{ margin: 3 }}
                placeholder="Number of Rows"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
            />
            <TextField
                label="Enter Color"
                style={{ margin: 3 }}
                placeholder="Color"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
            />
        </div>
        <div style={{textAlign: 'center', paddingTop: 20}}>
            <Button autoFocus={true} >Submit</Button>
        </div>
    </React.Fragment>
}
export default Settings;