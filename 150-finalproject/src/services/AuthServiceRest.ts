import {Axios} from "axios-observable";
import AuthService, {LoginData, UserData} from "./AuthService";
import {Observable, of} from "rxjs";
import {map} from 'rxjs/operators';
import LoginCodes from "../util/LoginCodes";
import {AxiosError} from "axios";

export const ACCESS_TOKEN ='accessToken';
function toUserData(this: any, accessToken: string): Observable<UserData> {
    const tokenBody = accessToken.split('.')[1];
    const tokenBodyObj = JSON.parse(atob(tokenBody));
    if (tokenBodyObj.exp && Date.now() / 1000 > tokenBodyObj.exp){
        this.logout();
        return of({user:'', isAdmin: false})
    }

   return Axios.get<string[]>(this.url + '/administrators')
       .pipe(map(response => {
           const res: UserData = {user: tokenBodyObj.email,
               isAdmin: response.data.indexOf(tokenBodyObj.email) >= 0};

           return res;
       }))
}

export default class AuthServiceRest implements AuthService {
    constructor(private url: string){

    }
    getUserData(): Observable<UserData> {
        const accessToken: string|null = localStorage.getItem(ACCESS_TOKEN);
        return accessToken ? toUserData.call(this,accessToken) : of({isAdmin:false, user:''});
    }

    login(loginData: LoginData): Promise<LoginCodes> {
        return Axios.post(this.url + '/login', loginData)
            .pipe(map(response => response.data))
            .toPromise().then(token => {
                localStorage.setItem(ACCESS_TOKEN, token.accessToken);
                return LoginCodes.OK;
            }).catch((error) => {
                return (error as AxiosError).response ?
                    LoginCodes.WRONG_CREDENTIALS : LoginCodes.NETWORK_ERROR
            });
    }

    logout(): Promise<boolean> {
        localStorage.removeItem(ACCESS_TOKEN)
        return Promise.resolve(true);
    }

}
