import React, {useEffect, useState} from 'react';
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";
import {coffeeMenu, PATH_ADD, PATH_HOME, PATH_SHOW} from "./const/Menu";
import Home from "./components/Home";
import StorageImp, {Order} from "./service/StorageImp";
import StorageInterface from "./service/StorageInterface";
import Show from "./components/Show";
import Add from "./components/Add";
import {AuthInterface, AuthInterfaceImpl} from "./service/AuthInterface";
import {Button} from "@material-ui/core";
import {Subscription} from "rxjs";
import usePoller from "./util/Poller";
import { coffeordersAction, SET_COFFEE_SERVICE } from "./myredux/actions";
import { useDispatch } from 'react-redux';
import { type } from "os";
import usePollerRedux from "./util/Poller_redux";

const orders: StorageInterface = new StorageImp();
const auth: AuthInterface = new AuthInterfaceImpl()

function regPress (){
  auth.registration();
}
function logPress (){
  auth.login();
}


function App() {

  // without POLLER

  // const [orderZ, setOrders] = useState<Order[]>([]);
  //
  // useEffect(()=>{
  //   const subscription: Subscription = orders.getAllCoffees().subscribe(data => {
  //     console.log("useEffect ORDERS  =", data);
  //     return setOrders(data)
  //   });
  //   return () => {
  //     if(!subscription.closed){
  //       subscription.unsubscribe();
  //     }
  //   }
  // }, [])
  //
  // console.log("[APP COMPONENT ORDERS: ]", orderZ)
  //
  // const refreshFn = () => {
  //   // setEmployees([...service.getAllEmployees()]);
  //   orders.getAllCoffees().subscribe(data => {
  //     console.log("RefreshFn get ORDERS  =", data);
  //     return setOrders(data)
  //   })
  // }

  // with POLLER

  // myDispatch({type: SET_COFFEE_SERVICE, payload:orders});

  // const[orderZ] = usePoller(orders, orders.getAllCoffees, [], 1000)

  const myDispatch = useDispatch();
  const[orderZ] = usePollerRedux(orders, orders.getAllCoffees, coffeordersAction, 1000)

  return <HashRouter>
    <Redirect to={coffeeMenu[0].path}/>
    <Button onClick={regPress}>PRESS ME TO REGISTER!</Button>
    <Button onClick={logPress}>PRESS ME TO LOGIN!</Button>
      <Switch>
        {/*{coffeeMenu.map(item=>*/}
        {/*  <Route path={item.path} exact render={() => <[item.comp] orders={orders}/>}/>*/}
        {/*)}*/}

        {/*<Route path={PATH_HOME} exact render={() => <Home orders={orders}/>}/>*/}
        {/*<Route path={PATH_ADD} exact render={() => <Add orders={orders} xrenFn={refreshFn}/>}/>*/}
        {/*<Route path={PATH_SHOW} exact render={() => <Show rows={orderZ}/>}/>*/}

        {/*without redux*/}
        {/*<Route path={PATH_HOME} exact render={() => <Home orders={orders}/>}/>*/}
        {/*<Route path={PATH_ADD} exact render={() => <Add orders={orders}/>}/>*/}
        {/*<Route path={PATH_SHOW} exact render={() => <Show rows={orderZ}/>}/>*/}

        <Route path={PATH_HOME} exact render={() => <Home />}/>
        <Route path={PATH_ADD} exact render={() => <Add />}/>
        <Route path={PATH_SHOW} exact render={() => <Show rows={orderZ}/>}/>

      </Switch>
    </HashRouter>
}

export default App;
