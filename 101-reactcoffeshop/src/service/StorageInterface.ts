import {Order} from "./StorageImp";
import {Observable} from "rxjs";

export default interface StorageInterface {
    // addCoffee:(coffeeOrder:any)=>boolean;
    // addCoffee(coffeeOrder:Order): boolean;
    removeCoffee(id:any): boolean;
    // getAllCoffees():Array<Order>
    getAllCoffees():Observable<Order[]>
    addCoffee(coffeeOrder: Order): Promise<any>;

}