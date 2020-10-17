import React, { useCallback, useEffect, useState } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import { Tab, Tabs } from "@material-ui/core";

type Props = {
    menu: { path: string, label: string }[],
    countNavigator?: number
}

const Topbar: React.FC<RouteComponentProps & Props> = (props: RouteComponentProps & Props) => {
    const {menu, countNavigator} = props;

    function current(path: string): number {
        const index = menu.findIndex(item => item.path === path);

        if (countNavigator && index >= countNavigator) {

            [menu[countNavigator - 1], menu[index]] = [menu[index], menu[countNavigator - 1]]


            return countNavigator - 1;
        }

        return index;
    }

    const currentCallback = useCallback(current, [props.countNavigator]);
    const [value, setValue] = useState<number>(current(props.location.pathname));
    useEffect(() => {

        setValue(currentCallback(props.location.pathname))
    }, [props.countNavigator, props.location.pathname, currentCallback])

    const handleChange = (event: any, tabValue: number) => {
        setValue(tabValue);
    }

    function getNavItems(): { path: string, label: string }[] {
        if (!countNavigator || countNavigator >= menu.length) {
            return menu;
        }
        return menu.filter((item, index) => index < countNavigator);
    }

    return <React.Fragment>

            <Tabs centered={true} indicatorColor={"primary"} variant={'fullWidth'} onChange={handleChange} value={value}>

                {getNavItems().map(item =>
                    <Tab key={item.path}
                         component={Link} to={item.path} label={item.label}>

                    </Tab>)}


            </Tabs>

    </React.Fragment>
}
export default withRouter(Topbar);
