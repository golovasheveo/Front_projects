import React from 'react';
import Topbar from "../library/Topbar";
import ElectronicsType from "../../models/ElectronicsType";
import HeaderLogo from "../VisualComponents/HeaderLogo";
import ElectrinicsServiceFirebase from "../../services/ElectrinicsServiceFirebase";
import AddItemForm from "../VisualComponents/AddItemForm";
import { getMenuItems } from "./Home";
import { UserData } from "../../services/AuthService";
import { ReducersType } from "../../store/store";
import { useSelector } from "react-redux";
import Navbar from '../library/Navbar';


type Props = {
    service: ElectrinicsServiceFirebase
}

const Setup: React.FC<Props> = (props: Props) => {

    function onSubmitting(item: ElectronicsType) {
        props.service.addElectronics(item)

    }

    const userData: UserData = useSelector((state: ReducersType)=> state.userData);
    return <React.Fragment>
      <Navbar menu={getMenuItems(userData)} />
        <HeaderLogo/>
        <h3>Enter Items</h3>
        <AddItemForm onSubmit={onSubmitting}/>


  </React.Fragment>
};

export default Setup;
