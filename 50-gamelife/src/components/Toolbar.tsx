import React, { useState } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Tab, Tabs } from "@material-ui/core";
import { MENU } from "../config/menu";

import { RouteComponentProps } from 'react-router';

const Toolbar : React.FC<RouteComponentProps> = ( props : RouteComponentProps ) => {

    const current = ( path : string ) => MENU.findIndex( item => item.path === path );

    const [value, setValue] = useState<number>(current(props.location.pathname));

    const handleChange = (event: any, tabValue: number) => {
        setValue(tabValue);
    }

    return <React.Fragment>
        <Tabs onChange={ handleChange }
              value={ value }
              centered={true}
              indicatorColor="primary"
              textColor="primary">
            { MENU.map( item =>
                <Tab
                    key={ item.path }
                    component={ Link }
                    to={ item.path }
                    label={ item.label }>
                </Tab> ) }

        </Tabs>
    </React.Fragment>
}

export default withRouter( Toolbar as React.FC );

