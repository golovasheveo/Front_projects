import StorageInterface from "./StorageInterface";

import {ACCESS_TOKEN} from "./AuthInterface";
import Axios from "axios-observable";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

export type Order = {
    id: number,
    nameClient: string,
    price: number,
    coffetype: string,
}


export default class StorageImp implements StorageInterface{


    addCoffee(coffeeOrder: Order): Promise<any> {
        return Axios.post<Order>("http://localhost:4500/orders", coffeeOrder, {
            headers: {"Authorization":'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        }).toPromise()
    }


    // addCoffee(coffeeOrder: Order): boolean {
    //     if (this.arrOrder.find(coffeeOrderItem => coffeeOrderItem.id === coffeeOrder.id)){
    //         return false;
    //     }
    //     this.arrOrder.push(coffeeOrder);
    //     return true;
    // }

    getAllCoffees(): Observable<Order[]> {
        console.log("RUN getAllCoffees")
        return Axios.get<Order[]>("http://localhost:4500/orders",{
            headers: {"Authorization":'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        }).pipe(map(responce => responce.data))
    }




    removeCoffee(id: number): boolean {
        // if (this.arrOrder.find(coffeeOrderItem => coffeeOrderItem.id === id)){
        //     const itemFind = this.arrOrder.findIndex(coffeeOrderItem => coffeeOrderItem.id === id)
        //     this.arrOrder.splice(itemFind, 1);
        //     return true
        // }
        return false;
    }

}