import {Axios} from "axios-observable";
import {catchError, map} from 'rxjs/operators';
import EmployeeServiceObservable from "./EmployeeServiceObservable";
import Employee from "../models/EmployeeType";
import {Observable, throwError} from "rxjs";
import {ACCESS_TOKEN} from "./AuthServiceRest";
import {AxiosError} from "axios";
import ErrorTypes from "../util/ErrorTypes";

function errorHandle(error: AxiosError): ErrorTypes {
    if (error.response) {
        return error.response.status === 401 || error.response.status === 403 ?
            ErrorTypes.AUTH_ERROR : ErrorTypes.SERVER_ERROR
    }
    return ErrorTypes.NETWORK_ERROR;
}
export default class EmployeesServiceRest implements EmployeeServiceObservable {
    constructor(private url:string) {
    }
    addEmployee(empl: Employee): Promise<any> {
        return Axios.post<Employee>(this.url, empl, {
            headers: {"Authorization":'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        }).pipe(catchError(error=>{

            return throwError(errorHandle(error))
        })).toPromise()
    }

    getAllEmployees(): Observable<Employee[]> {
        return Axios.get<Employee[]>(this.url,{
            headers: {"Authorization":'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        }).pipe(map(response => {
            const res = response.data;
            res.forEach(empl => empl.birthDate = new Date(empl.birthDate as Date))
            return res;
        }), catchError(error=>{

            return throwError(errorHandle(error))
        }) )
    }

    removeEmployee(id: number): Promise<any> {
        return Axios.delete(`${this.url}/${id}`,{
            headers: {"Authorization":'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        }).pipe(catchError(error=>{

            return throwError(errorHandle(error))
        })).toPromise();
    }

    updateEmployee(id: number, empl: Employee): Promise<any> {
        return Axios.put(`${this.url}/${id}`, empl,{
            headers: {"Authorization":'Bearer ' + localStorage.getItem(ACCESS_TOKEN)}
        }).pipe(catchError(error=>{

            return throwError(errorHandle(error))
        })).toPromise();
    }

}
