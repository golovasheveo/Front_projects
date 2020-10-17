import React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@material-ui/core";
import { Theme } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import ElectronicsType from "../../../models/ElectronicsType";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme: Theme) => ({
    cardGrid: {
        paddingTop: "2vh",
        paddingBottom: "2vh",
        // display: "grid",
        // gridTemplateColumn: "7fr 5fr"
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // boxShadow: 'none',
        // borderRadius: 1,
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
        backgroundSize: "contain"
    },
    cardContent: {
        flexGrow: 1,
    },
}));

type Props = {
    profile: ElectronicsType
    onSubmitToCart: () => void
    onSubmitToBuy: () => void
    backFl: boolean
    backPath: any
}


const ItemProfile: React.FC<Props> = (props: Props) => {
    const classes = useStyles();

    return <React.Fragment>
        <Container maxWidth={"lg"} className={classes.cardGrid}>

            <Grid container>
                <Grid item xs={12} md={6} >

                    <Card className={classes.card}>
                        <CardMedia
                            className={classes.cardMedia}
                            image={props.profile.picture}
                            title={props.profile.id + ""}
                        />

                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {props.profile.brand}
                            </Typography>
                            <Typography>
                                {props.profile.model}
                            </Typography>
                            <Typography variant="h3" color="secondary" align="right">
                                Price: {props.profile.price} $
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button onClick={props.onSubmitToBuy} variant="contained" size="small" color="primary">BUY IT NOW</Button>
                            <Button onClick={props.onSubmitToCart} variant="contained" size="small" color="default">Put it on Cart</Button>
                        </CardActions>
                    </Card>
                </Grid>

                <Grid item xs={12} md={6} >
                    <CardContent >
                        {/*<Typography gutterBottom>*/}
                        {/*   {props.profile.brand}*/}
                        {/*</Typography>*/}
                        {/*<Typography gutterBottom>*/}
                        {/*   {JSON.stringify(props.profile)}*/}
                        {/*</Typography>*/}
                        {/*<Typography gutterBottom variant="body2" component="h5">*/}
                        {/*    {JSON.stringify(props.profile)}*/}
                        {/*</Typography>*/}
                        <Typography gutterBottom variant="body2" component="h5">
                            Brand:  Apple
                        </Typography>
                        <Typography gutterBottom variant="body2" component="h5">
                            Storage Capacity64 GB
                        </Typography>
                        Features:   Triple Rear Camera, Fast Charging, OLED Display,
                        Rear Camera, Water-Resistant, Ultra Wide-Angle Camera, Camera, eSIM,
                        Wide-Angle Camera, Wireless Charging, HDR Display, Dust-Resistant,
                        Telephoto Lens, Facial Recognition, 4K Video Recording, Fast Wireless Charging
                        <Typography gutterBottom variant="body2" component="h5">
                            Screen Size:    5.8 in
                        </Typography>
                        <Typography gutterBottom variant="body2" component="h5">
                            Camera Resolution: 12.0 MP
                        </Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </Container>


        {props.backFl && <Redirect to={{pathname: props.backPath.goBack()}}/>}
    </React.Fragment>
};

export default ItemProfile;