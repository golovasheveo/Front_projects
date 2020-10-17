import React from "react";
import LoginForm from "../library/LoginForm";
import LoginCodes from "../../util/LoginCodes";
import {authService} from "../../config/server-config";

const Login: React.FC = () => {
    async function serviceAuth(authProvider: string){
        const loginCode: LoginCodes = await authService.login({email: authProvider, password: ""});
        if(loginCode != LoginCodes.OK){
            alert("Wrong authentification")
        }
    }
    const onSubmit = (loginData: { username:string, password: string }):Promise<LoginCodes> => {
        return authService.login({email: loginData.username, password: loginData.password})
    }
    const validatePasswordLength = (password: string) :string =>{
        return password.length < 6 ? "password can't be less than 6 symbols" :''
    }
   return <React.Fragment>
       <LoginForm onSubmit={onSubmit} passwordErrorMessage={validatePasswordLength}/>
       <br/><br/><br/>
       <button onClick={()=> serviceAuth("google")}>Authentication through Google</button>
   </React.Fragment>

}
export default Login;
