import { Order } from "../service/StorageImp";

export const ADD_ORDER = 'add-order'
export const SET_COFFEE_SERVICE = 'set-coffee-service'



export const coffeordersAction = (data: Order[]): {type: string, payload: any} =>
    ({type: ADD_ORDER, payload: data});

