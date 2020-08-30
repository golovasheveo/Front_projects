import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import {makeStyles} from "@material-ui/styles";

    const useStyles = makeStyles({
        root: {
            flexGrow: 1,
        },
    });

    function CenteredTabs() {
        const classes = useStyles();
        const [value, setValue] = React.useState(0);

        const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const LevelTwo = () => (
        <React.Fragment>
            <Paper square>
                <Tabs
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example"
                >
                    <Tab label="Active"/>
                    <Tab label="Disabled" disabled/>
                    <Tab label="Active"/>
                </Tabs>
            </Paper>
        </React.Fragment>
    );


}