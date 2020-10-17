import AuthService, {UserData} from "../services/AuthService";
import {SET_AUTH_SERVICE, SET_EMPLOYEES, SET_EMPLOYEES_SERVICE, SET_USER_DATA, SET_WINDOW_WIDTH} from "./actions";
import EmployeeServiceObservable from "../services/EmployeeServiceObservable";
import Employee from "../models/EmployeeType";
export const authServiceReducer =
    (authService: AuthService|null = null,
     action: {type: string, payload: any}): AuthService =>
        action.type === SET_AUTH_SERVICE ? action.payload : authService;
export const employeesServiceReducer =
    (employeesService: EmployeeServiceObservable|null = null,
     action: {type: string, payload: any}): EmployeeServiceObservable =>
        action.type === SET_EMPLOYEES_SERVICE ? action.payload : employeesService;
export const employeesReducer =
    (employees: Employee[] = [], action: {type: string, payload: any}): Employee[] =>
        action.type === SET_EMPLOYEES ? action.payload.slice(0) : employees;
export const userDataReducer =
    (userData: UserData = {isAdmin: false, user: ''}, action: {type: string, payload: any} ): UserData =>
        action.type === SET_USER_DATA ? {...action.payload as UserData} : userData;
export const widthReducer =
    (width: number = window.innerWidth, action: {type: string, payload: any}): number => {
        return action.type === SET_WINDOW_WIDTH ? action.payload : width;
    }
