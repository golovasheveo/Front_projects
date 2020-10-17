import React from 'react';
import {coffeeMenu} from "../const/Menu";
import TopBar from "./TopBar";
import {Order} from "../service/StorageImp";
import StorageInterface from "../service/StorageInterface";
import MyTable from "./MyTable";

type Props = {

    rows: Order[];
}

const headers = [
    {displayName: "id", value: "1"},
    {displayName: "nameClient", value: "2"},
    {displayName: "price", value: "3"},
    {displayName: "coffetype", value: "3"},
]

const rows = [
    {id: 1, nameClient: "John", price: 30, coffetype: "Americano"},
    {id: 2, nameClient: "Patrick", price: 50, coffetype: "Americano"},
    {id: 3, nameClient: "Elena", price: 15, coffetype: "Americano"},
]


const Show: React.FC<Props> = (props:Props) => {


    return <React.Fragment>
      <TopBar headers={coffeeMenu}/>
      <MyTable heads={headers}  rows={props.rows}/>
  </React.Fragment>
};

export default Show;