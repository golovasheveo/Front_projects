import React from 'react';
import { useSelector } from "react-redux";
import { ReducersType } from "../../store/store";
import HeaderLogo from "../VisualComponents/HeaderLogo";
import { getMenuItems } from "./Home";
import { UserData } from "../../services/AuthService";
import ProductList from "../VisualComponents/ProductList";
import Navbar from '../library/Navbar';


type Props = {

}

const Mobile: React.FC<Props> = (props: Props) => {

    const stateMobileArr = useSelector((state: ReducersType) => state.IPHONE)
    const userData: UserData = useSelector((state: ReducersType)=> state.userData);
    return <React.Fragment>
        <Navbar menu={getMenuItems(userData)} />
        <HeaderLogo/>
        <ProductList itemsToShow={stateMobileArr}/>
    </React.Fragment>
};

export default Mobile;