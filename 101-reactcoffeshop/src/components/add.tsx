import React from 'react';
import TopBar from "./TopBar";
import {coffeeMenu} from "../const/Menu";
import {Order} from "../service/StorageImp";
import StorageInterface from "../service/StorageInterface";
import CoffeeForm from "./CoffeeForm";

type Props = {
    // orders: StorageInterface;
    // xrenFn: ()=>void;
}

const Add: React.FC<Props> = (props:Props) => {
  
  return <React.Fragment>
      <TopBar headers={coffeeMenu}/>
      <h3>ADD ORDER FORM</h3>
      {/*<CoffeeForm orders={props.orders} xrenFn={props.xrenFn}/>*/}
      <CoffeeForm />
  </React.Fragment>
};

export default Add;