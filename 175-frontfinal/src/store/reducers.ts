import {
    SET_AUTH_SERVICE,
    SET_CART_DATA,
    SET_CART_DATA_NUMBER,
    SET_COMPUTER,
    SET_MOBILE,
    SET_TV,
    SET_USER_DATA,
    USER_CART_DATA_DECREMENT,
    USER_CART_DATA_INCREMENT
} from "./actions";
import AuthService, { UserData } from "../services/AuthService";

// export const tvReducer =
//     (techEl: Map<number, object> = new Map(), action: {type: string, payload: any}):  Map<number, object> =>
//         action.type === SET_TV ? action.payload : techEl;
// export const setTvAction = (techEl: Map<number, object>): {type: string, payload: any} =>
//     ({type: SET_TV, payload: techEl});
export const iReducer =
    (techEl: [] = [], action: {type: string, payload: any}):  [] =>
        action.type === SET_TV ? action.payload : techEl;
export const mobileReducer =
    (techEl: [] = [], action: {type: string, payload: any}):  [] =>
        action.type === SET_MOBILE? action.payload : techEl;
export const computerReducer =
    (techEl: [] = [], action: {type: string, payload: any}):  [] =>
        action.type === SET_COMPUTER ? action.payload : techEl;




export const authServiceReducer =
    (authService: AuthService|null = null,
     action: {type: string, payload: any}): AuthService =>
        action.type === SET_AUTH_SERVICE ? action.payload : authService;

export const userDataReducer =
    (userData: UserData = {isAdmin: false, user: ''}, action: {type: string, payload: any} ): UserData =>
        action.type === SET_USER_DATA ? {...action.payload as UserData} : userData;


export const userCardCounterReducer = (numb = 0, action: {type: string, payload: any}): number => {
    if (action.type === USER_CART_DATA_INCREMENT){
        return  numb + action.payload
    }else if (action.type === USER_CART_DATA_DECREMENT){
       return numb - action.payload
    }else if (action.type === SET_CART_DATA_NUMBER){
        return action.payload
    }else return numb


}


export const userCartDataReducer =
    (cartData:{cart: string[]} = {cart: []}, action: {type: string, payload: []} ): any =>
        action.type === SET_CART_DATA ? {...action.payload} : cartData;

