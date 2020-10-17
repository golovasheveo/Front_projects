import React, { useState } from "react";
import LoginCodes from "../../util/LoginCodes";
import LoginForm from "../library/LoginForm";
import { authService } from "../../App";
import { Checkbox } from "@material-ui/core";


const Login: React.FC = () => {

    const [reg, setReg] = useState<boolean>(false)

    async function serviceAuth(authProvider: string){
        const loginCode: LoginCodes = await authService.login({email: authProvider, password: ""});
        if(loginCode != LoginCodes.OK){
            alert("Wrong authentification")
        }
    }
    const onSubmit = (loginData: { username:string, password: string }):Promise<LoginCodes> => {
        if(reg){
            return authService.registration({email: loginData.username, password: loginData.password})
        }
        return authService.login({email: loginData.username, password: loginData.password})
    }

    const onCheckRegistration = (event: any) => {
        setReg(true);
    }
    const onCheckAdmin = (event: any) => {
        // return this.db.doc(item.id.toString()).set(item)
    }

    const validatePasswordLength = (password: string) :string =>{
        return password.length < 6 ? "password can't be less than 6 symbols" :''
    }
    return <React.Fragment>
        <LoginForm onSubmit={onSubmit} passwordErrorMessage={validatePasswordLength}/>
        <br/><br/><br/>
        <Checkbox onChange={onCheckRegistration}/>
        <br/><br/><br/>
        <br/><br/><br/>
        <Checkbox onChange={onCheckAdmin}/>
        <button onClick={()=> serviceAuth("google")}>Authentication through Google</button>
    </React.Fragment>
}
export default Login;
