import {combineReducers, createStore} from "redux";
import { coffeordersReducer, StorageInterfaceReducer } from "./reducers";


const allReducers = combineReducers({
    coffeordersReducer,
    StorageInterfaceReducer,
})

export const store = createStore(coffeordersReducer,
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
        (window as any).__REDUX_DEVTOOLS_EXTENSION__());
