import Axios from "axios-observable";
import {map} from "rxjs/operators";


export interface AuthInterface {
    registration: () => Promise<boolean>;
    login: () => Promise<boolean>;
}

const AUTH_SERVER_URL = "http://localhost:4500/register"
const AUTH_SERVER_URL_LOGIN = "http://localhost:4500/login"
export const ACCESS_TOKEN = "accessToken";

// POST /register
const user1Data = {
    "email": "olivier@mail.com",
    "password": "bestPassw0rd"
}


export class AuthInterfaceImpl implements AuthInterface {
    registration(): Promise<boolean> {
        return Axios.post(AUTH_SERVER_URL, user1Data).pipe(map(response => response.data)).toPromise()
           .then(token => {
               localStorage.setItem(ACCESS_TOKEN, token.accessToken);
               return true;
           }).catch(() => false)
    }

   login() : Promise<boolean> {
       return Axios.post(AUTH_SERVER_URL_LOGIN, user1Data).pipe(map(response => response.data)).toPromise()
           .then(token => {
               localStorage.setItem(ACCESS_TOKEN, token.accessToken);
               return true;
           }).catch(() => false)
    }
}

