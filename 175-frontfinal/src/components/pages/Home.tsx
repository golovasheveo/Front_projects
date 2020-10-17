import React from "react";
import { shopMenu } from "../../config/Menu";
import HeaderLogo from "../VisualComponents/HeaderLogo";
import { makeStyles, Theme } from "@material-ui/core/styles";
import CarouselDiscountMain from "../VisualComponents/CarouselDiscountMain";
import { UserData } from "../../services/AuthService";
import { useSelector } from "react-redux";
import { ReducersType } from "../../store/store";
import Navbar from "../library/Navbar";

export function getMenuItems(userData: UserData) {
    return shopMenu
        .filter(item => !item.admin || userData.isAdmin)
        .filter(item => !item.user || userData.user)
        .filter(item => !item.logged || !userData.user)

}

const useStyles = makeStyles((theme: Theme) => ({
    bd:  (props: any) => ({
        height: '100%',
        width: '100%',

    }),
    wrapper: (props: any) => ({
        height: '75vh',
        width: '100vw',
    }),
}));

const Home: React.FC = () => {
    const classes = useStyles();
    const userData: UserData = useSelector((state: ReducersType)=> state.userData);

    return <div className={classes.bd} >

        <Navbar menu={getMenuItems(userData)} />
        <HeaderLogo/>
        <div className={classes.wrapper}>
            <CarouselDiscountMain/>
        </div>
    </div>
}
export default Home;
