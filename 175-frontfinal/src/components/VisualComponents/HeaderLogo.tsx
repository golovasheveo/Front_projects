import React from 'react';
import { makeStyles, Theme } from "@material-ui/core/styles";
// import Logo from './firstpage/logo.png';
// import heartBeat2 from './firstpage/heart2.png'

const useStyles = makeStyles((theme: Theme) => ({
    hd: (props: any) => ({
        marginTop: '1%',
         height: '12vh',
        width: '100%',
         // backgroundImage: "url("+heartBeat2+")",
         border: "1px solid #d5d5e0",
         backgroundColor: "rgb(252,252,252)",
         backgroundPosition: "20% 100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Roboto, sans-serif",
        fontSize: "14 px"
        // backgroundSize: "contain",
    }),
}));

type Props = {

}

const HeaderLogo: React.FC<Props> = (props: Props) => {
    const classes = useStyles();


    return <React.Fragment>
        <div className={classes.hd}>
         <text  > IPHONE STORE </text>
        </div>
    </React.Fragment>

};

export default HeaderLogo;