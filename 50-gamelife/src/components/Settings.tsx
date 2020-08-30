import React, { useEffect, useState } from 'react';
import Toolbar from "./Toolbar";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import settings from "./gamelife/config/config";

type model = {
    size: number,
    color: string
}

const Settings = ()=> {

    const objSettings : model = {size: settings.N_COLUMNS, color: settings.COLOR};

    const [model, setModel] = useState<model>(objSettings);

    function handleInput(event: any) {
        let name = event.target.name;
        // @ts-ignore
        objSettings[name] = event.target.value;
        setModel({...objSettings});
        console.log("Handle object size", objSettings);
    }

    function onSubmit() {
        settings.COLOR = objSettings.color;
        settings.N_COLUMNS = objSettings.size;
    }

    return <React.Fragment>
        <Toolbar />
        <form style={{textAlign: 'center', paddingTop: 20}}
            onSubmit={onSubmit}
        >
            <TextField
                name='size'
                onChange = {handleInput}
                label="Enter Width and Height"
                style={{ margin: 3 }}
                placeholder="Number of Rows"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
            />
            <TextField
                name='color'
                onChange = {handleInput}
                label="Enter Color"
                style={{ margin: 3 }}
                placeholder="Color"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="standard"
            />
        </form>
        <div style={{textAlign: 'center', paddingTop: 20}}>
            <Button autoFocus={true} type="submit">Submit</Button>
        </div>
    </React.Fragment>
}
export default Settings;