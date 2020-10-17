import React, { useEffect, useState } from 'react';
import ElectrinicsServiceFirebase from "../../../services/ElectrinicsServiceFirebase";
import { useDispatch, useSelector } from "react-redux";
import { ReducersType } from "../../../store/store";
import ElectronicsType from "../../../models/ElectronicsType";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@material-ui/core";
import { userCartCounterDecrementAction } from "../../../store/actions";
import { getMenuItems } from "../../pages/Home";
import Navbar from "../../library/Navbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    cardGrid: {
        paddingTop: "2vh",
        paddingBottom: "2vh",
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    cardMedia: {
        height: '110px',
        width: '160px',
        backgroundSize: "contain",
    },
    cardAction: {
        justifyContent: "center"
    },
}));


type Props = {
    service: ElectrinicsServiceFirebase
}

const Cart: React.FC<Props> = (props: Props) => {

    const [view, setView] = useState<ElectronicsType[]>([])
    const cartData = useSelector((state: ReducersType) => state.cartData);

    const userData = useSelector((state: ReducersType) => state.userData);
    const dispatch = useDispatch();

    const classes = useStyles();

    useEffect(() => {
        // @ts-ignore
        let cart = cartData.cart.map(str => parseInt(str));
        let vv = props.service.getSpecificElectronicsP(cart).subscribe(data => setView(data))

    }, [cartData])


    const buyItemHandle = (idNumber: any) => {
        const cart = {mail: userData.user, id: idNumber}
        props.service.itemWasBoughtedFromCart(cart)
        dispatch(userCartCounterDecrementAction(1))
    }
    const deleteItemHandle = (idNumber: any) => {
        const cart = {mail: userData.user, id: idNumber}
        props.service.deleteItemFromCart(cart)
        dispatch(userCartCounterDecrementAction(1))
    }


    const showCart = (): any => {
        return view.map((item) => (

            <Container maxWidth={"md"} className={classes.cardGrid}>

                <Grid container>
                    <Grid item xs={12}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image={item.picture}
                                component = "div"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.brand}
                                </Typography>
                                <Typography>
                                    {item.model}
                                </Typography>
                                <Typography>
                                    Price: {item.price} $
                                </Typography>
                            </CardContent>
                            <CardActions  className={classes.cardAction}>
                                <Button onClick={() => buyItemHandle(item.id)} variant="contained" size="small"
                                        color="primary">BUY</Button>
                                <Button onClick={() => deleteItemHandle(item.id)} variant="contained" size="small"
                                        color="default">Delete from Cart</Button>
                            </CardActions>

                        </Card>

                    </Grid>
                </Grid>
            </Container>

        ))
    }


    return <React.Fragment>
        <Navbar menu={getMenuItems(userData)}/>
        {showCart()}
    </React.Fragment>
};

export default Cart;