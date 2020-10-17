import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ElectronicsType from "../../models/ElectronicsType";
import { Button, Card, CardActions, CardContent, CardMedia, Container, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { PATH_ITEM, PATH_LOGIN } from "../../config/Menu";
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import cx from 'clsx';
import { UserData } from "../../services/AuthService";
import { useSelector } from "react-redux";
import { ReducersType } from "../../store/store";


const useStyles = makeStyles((theme: Theme) => ({

    cardGrid: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
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
    // itemsToShow: {id: number, price: number, department: string, model: string, brand: string}[]
    itemsToShow: ElectronicsType[]

}

const ProductList: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    const shadowStyles = useBouncyShadowStyles();

    const userData: UserData = useSelector((state: ReducersType)=> state.userData);

    return (

        <Container className={classes.cardGrid} maxWidth={false} >
            <Grid container spacing={2}>
                {props.itemsToShow.map((value, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                        <Card className={cx(classes.card, shadowStyles.root)}>
                            <CardMedia
                                className={ classes.cardMedia}
                                image = {value.picture}
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {value.brand}
                                </Typography>
                                <Typography>
                                    {value.model}
                                </Typography>
                            </CardContent>
                            <CardActions style={{justifyContent: 'center'}}>
                                {/*<NavLink to={`${PATH_ITEM}/${value.id}`} style={{textDecoration: "none"}}>*/}
                                <NavLink to={`${ userData.user ? PATH_ITEM +"/"+ value.id : PATH_LOGIN}`} style={{textDecoration: "none"}}>
                                    {/*<button onClick={()=>{props.history.push('/link')}} >Press</button>*/}
                                    <Button size="small" color="primary" variant="contained" >
                                        Details
                                    </Button>

                                </NavLink>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );


};

export default ProductList;





