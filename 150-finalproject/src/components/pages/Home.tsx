import React from "react";
import Topbar from "../library/Topbar";
import {employeesMenu} from "../../config/Menu";
import {UserData} from "../../services/AuthService";
import {useSelector} from "react-redux";
import {ReducersType} from "../../store/store";
import {tabsWidth} from "../../config/window-width-config";

export function getMenuItems(userData: UserData) {
    return employeesMenu.filter(item => !item.admin || userData.isAdmin);
}
export function getNumberTabs(width: number): number {
    const index = tabsWidth.findIndex(tw => width > tw[0]);
    return tabsWidth[index][1];
}

const Home: React.FC = () => {
const userData: UserData = useSelector((state: ReducersType)=> state.userData);
const width: number = useSelector((state: ReducersType) => state.width);
    return <React.Fragment>
        <Topbar menu={getMenuItems(userData)} countNavigator={getNumberTabs(width)}/>
        <h3>Please select required page</h3>

    </React.Fragment>
}
export default Home;
