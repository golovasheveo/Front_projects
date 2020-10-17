import React, {useState} from 'react';
import {Link, RouteComponentProps, withRouter} from 'react-router-dom';
import {Tab, Tabs} from "@material-ui/core";

type Props = {
    headers: {path: string, label: string}[]
}

const TopBar:React.FC<RouteComponentProps&Props> = (props: RouteComponentProps&Props) => {

    const menu = props.headers;

    function current (path: string):number{
        const index = menu.findIndex(item => item.path === path);
        return index;
    }

    const [value, setValue] = useState<number>(current(props.location.pathname));

    const handleChange = (event: any, tabValue: number) => {
        setValue(tabValue);
    }
  
  return <React.Fragment>

      <Tabs onChange={handleChange} value={value}>
          {menu.map(item =>
              <Tab
                  key={item.path}
                  component={Link}
                  to={item.path}
                  label={item.label}/>

          )}
      </Tabs>


  </React.Fragment>
};

export default withRouter(TopBar);