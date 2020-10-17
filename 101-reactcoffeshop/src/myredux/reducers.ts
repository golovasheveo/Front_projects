import { Order } from "../service/StorageImp";
import { ADD_ORDER, SET_COFFEE_SERVICE } from "./actions";
import StorageInterface from "../service/StorageInterface";

export const coffeordersReducer =
    (coffeOrders: Order[] = [], action: {type: string, payload: any}): Order[] =>
        action.type === ADD_ORDER ? action.payload.slice(0) : coffeOrders;

export const StorageInterfaceReducer =
    (storageTools: StorageInterface, action: {type: string, payload: any}): StorageInterface =>
        action.type === SET_COFFEE_SERVICE ? action.payload : storageTools;