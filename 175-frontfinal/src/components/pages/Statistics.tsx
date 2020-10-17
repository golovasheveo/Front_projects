import React, {useEffect, useState} from 'react';
import HeaderLogo from "../VisualComponents/HeaderLogo";
import {getMenuItems} from "./Home";
import {UserData} from "../../services/AuthService";
import {useSelector} from "react-redux";
import {ReducersType} from "../../store/store";
import ElectrinicsServiceFirebase from "../../services/ElectrinicsServiceFirebase";
import Navbar from "../library/Navbar";
type Props = {
    service: ElectrinicsServiceFirebase
}
const Statistics: React.FC<Props> = (props: Props) => {
    const userData: UserData = useSelector((state: ReducersType)=> state.userData);
    const [dataS, setDataS] = useState();
    let a = props.service.getAllCartBought().subscribe(data => setDataS(data))
    return <React.Fragment>
        <Navbar menu={getMenuItems(userData)}/>
        <HeaderLogo/>
        <br/>
        <h3>Orders</h3>
        <h1>{JSON.stringify(dataS)}</h1>
    </React.Fragment>
};
export default Statistics;