import { UserData } from "../services/AuthService";

export const SET_TV = 'set-tv'
export const SET_MOBILE = 'set-mobile'
export const SET_COMPUTER = 'set-computer'


export const SET_USER_DATA = 'set-user-data';
export const SET_AUTH_SERVICE = 'set-auth-service';



export const USER_CART_DATA_INCREMENT= 'user-cart-data-increment'
export const USER_CART_DATA_DECREMENT= 'user-cart-data-decrement'
export const SET_CART_DATA_NUMBER= 'set-cart-data-number'

export const SET_CART_DATA = 'cart-data'


export const setTvAction = (techEl: object[]): {type: string, payload: any} =>
    ({type: SET_TV, payload: techEl});






export const userDataAction = (userData: UserData): {type: string, payload: any} =>
    ({type: SET_USER_DATA, payload: userData})


export const userCartCounterIncrementAction = (numb: number): {type: string, payload: any} => {
    return {type: USER_CART_DATA_INCREMENT, payload: numb}
}
export const userCartCounterDecrementAction = (numb: number): {type: string, payload: any} => {
    return {type: USER_CART_DATA_DECREMENT, payload: numb}
}



export const userCartDataAction = (cartData: {cart: string[]}): {type: string, payload: any} =>
    ({type: SET_CART_DATA, payload: cartData})

