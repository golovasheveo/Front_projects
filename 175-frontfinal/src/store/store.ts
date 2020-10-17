import { combineReducers, createStore } from "redux";
import {
    authServiceReducer,
    computerReducer,
    iReducer,
    mobileReducer,
    userCardCounterReducer,
    userCartDataReducer,
    userDataReducer
} from "./reducers";
import AuthService, { UserData } from "../services/AuthService";

export type ReducersType = {
    IPHONE: [],
    MOBILE: [],
    COMPUTER: [],

    authService: AuthService,
    userData: UserData,
    cartCount: number,
    cartData: {cart: string[]}

}
const allReducers = combineReducers<ReducersType>({
    IPHONE: iReducer,
    MOBILE: mobileReducer,
    COMPUTER: computerReducer,
    authService:authServiceReducer,
    userData: userDataReducer,
    cartCount : userCardCounterReducer,
    cartData: userCartDataReducer,

})
export const store = createStore(allReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__());
