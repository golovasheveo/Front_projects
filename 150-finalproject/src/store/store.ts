import AuthService, {UserData} from "../services/AuthService";
import EmployeeServiceObservable from "../services/EmployeeServiceObservable";
import Employee from "../models/EmployeeType";
import {combineReducers, createStore} from "redux";
import {authServiceReducer, employeesReducer, employeesServiceReducer, userDataReducer, widthReducer} from "./reducers";

export type ReducersType = {
    authService: AuthService,
    employeesService: EmployeeServiceObservable,
    employees: Employee[],
    userData: UserData,
    width: number
}
const allReducers = combineReducers<ReducersType>({
    authService: authServiceReducer,
    employees: employeesReducer,
    employeesService: employeesServiceReducer,
    userData: userDataReducer,
    width: widthReducer
})
export const store = createStore(allReducers, (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__());
