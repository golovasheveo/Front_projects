import React from 'react';
import TopBar from "./TopBar";
import {coffeeMenu} from "../const/Menu";
import {Order} from "../service/StorageImp";
import StorageInterface from "../service/StorageInterface";

type Props = {
    orders?: StorageInterface;
}

const Home: React.FC<Props> = (props:Props) => {
  
  return <React.Fragment>
      <TopBar headers={coffeeMenu}/>
      <h3>MENU</h3>
  </React.Fragment>
};

export default Home;