import React, {useState} from 'react'
import {withRouter, Link} from 'react-router-dom';
import {Tabs, Tab} from "@material-ui/core";
import {MENU} from "../config/Menu";

import { RouteComponentProps } from 'react-router';





const Topbar: React.FC<RouteComponentProps> = (props: RouteComponentProps) => { // функциональная компонента типа реакт с параметром указания активного пути

    function current(path: string) {
        const index = MENU.findIndex(item => item.path === path);
        return index ;
    }

    const [value, setValue] = useState<number>(current(props.location.pathname));

    const handleChange = (event: any, tabValue: number) => {
        setValue(tabValue);
    }

    // это функциональность onChange самого таба отдать параметры

    return <React.Fragment>
        <Tabs onChange={handleChange} value={value} >
            {/*// Как устанавливается Value */}
            {MENU.map(item =>
                <Tab
                    key={item.path}
                    component={Link}
                    to={item.path}
                    label={item.label}>

            </Tab>)}
        </Tabs>


    </React.Fragment>


}
export default withRouter(Topbar as React.FC);