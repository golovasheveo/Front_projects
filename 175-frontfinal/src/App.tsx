import React from 'react';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import {
    PATH_CART,
    PATH_HOME,
    PATH_ITEM,
    PATH_LOGIN,
    PATH_LOGOUT,
    PATH_MOBILE,
    PATH_SETUP,
    PATH_STATISTICS
} from "./config/Menu";
// import Tv from "./components/pages/Tv";
// import Computer from "./components/pages/Computer";
import Mobile from "./components/pages/Mobile";
import Setup from "./components/pages/Setup";
import Statistics from "./components/pages/Statistics";
import ElectrinicsServiceFirebaseImpl from "./services/ElectrinicsServiceFirebaseImpl";
import Login from "./components/pages/Login";
import AuthServiceFirebase from "./services/AuthServiceFirebase";
import { useDispatch, useSelector } from "react-redux";
import usePollerRedux from "./util/poller";
import { UserData } from "./services/AuthService";
import { setTvAction, userCartDataAction, userDataAction } from "./store/actions";
import { ReducersType } from "./store/store";
import ErrorTypes from "./util/ErrorTypes";
import Logout from "./components/pages/Logout";
import ItemProfileContainer from "./components/VisualComponents/Item/ItemProfileContainer";
import ElectronicsType from "./models/ElectronicsType";
import Cart from "./components/VisualComponents/Item/Cart";

const service = new ElectrinicsServiceFirebaseImpl("tvStorage");
export const ADMIN_COLLECTION = 'administrators'
export const authService = new AuthServiceFirebase(ADMIN_COLLECTION);


function errorHandler(error: ErrorTypes) {
    if (error === ErrorTypes.AUTH_ERROR) {
        authService.logout().then();
    }
}

function App() {

    usePollerRedux<UserData>(authService, authService.getUserData, userDataAction, errorHandler)
    usePollerRedux<ElectronicsType[]>(service, service.getAllElectronics, setTvAction, errorHandler)
    usePollerRedux<{cart: []}>(service, service.getAllCart, userCartDataAction, errorHandler)

    const dispatch = useDispatch();
    const userData = useSelector((state: ReducersType) => state.userData);
    const cartData = useSelector((state: ReducersType) => state.cartData);

    // useEffect(()=>{
    //     let cNum = cartData.cart.length;
    //     dispatch(setUserCartCounteAction(cNum))
    // },[cartData])

  return <HashRouter>

      <Redirect to={PATH_HOME}/>

      <Switch>

        <Route path={PATH_HOME} exact render={() => {return <Home/>}}/>
        {/*<Route path={PATH_TV} exact render={() => {return <Tv/>}}/>*/}
        {/*<Route path={PATH_COMPUTER} exact render={() => {return <Computer/>}}/>*/}
        <Route path={PATH_MOBILE} exact render={() => {return <Mobile/>}}/>
        <Route path={PATH_STATISTICS} exact render={() => {return userData.isAdmin && <Statistics service={service}/>}}/>
        <Route path={PATH_SETUP} exact render={() => {return userData.isAdmin && <Setup service={service}/>}}/>

        <Route path={PATH_LOGIN} exact render={() => {return !userData.user && <Login/>}}/>

        <Route path={PATH_LOGOUT} exact render={() => {return userData.user && <Logout/>}}/>

        <Route path={PATH_CART} exact render={() => {return userData.user && <Cart service={service}/>}}/>
        <Route path={PATH_ITEM + "/:itemId?"} exact render={() => {return userData.user && <ItemProfileContainer service={service}/>}}/>


      </Switch>
    </HashRouter>

}

export default App;
