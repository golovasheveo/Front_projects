import React, { useCallback, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import { Tab, Tabs } from "@material-ui/core";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { UserData } from "../../services/AuthService";
import { useSelector } from "react-redux";
import { ReducersType } from "../../store/store";
import { PATH_CART } from "../../config/Menu";

type Props = {
    menu: { path: string, label: string }[],
    countNavigator?: number
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        grow: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        toolbar: {
            // backgroundColor: "#747474",
            // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        },
        sectionDesktop: {
            display: 'none',
            [theme.breakpoints.up('lg')]: {
                display: 'flex',
            },

        },
        sectionMobile: {
            display: 'flex',
            [theme.breakpoints.up('lg')]: {
                display: 'none',
            },
        },
        colorPrimary: {
            color: "black",
            backgroundColor: 'white'
        }
    }),
);

const Navbar: React.FC<RouteComponentProps & Props> = (props: RouteComponentProps & Props) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMenuChoice = (path: string) => {
        setAnchorEl(null);
        handleMobileMenuClose();
        // window.location.href = "http://www.w3schools.com";
        window.location.replace(path.toLocaleLowerCase());
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

//-----------------
    const {menu, countNavigator} = props;

    function current(path: string): number {
        const index = menu.findIndex(item => item.path === path);
        if (countNavigator && index >= countNavigator) {
            [menu[countNavigator - 1], menu[index]] = [menu[index], menu[countNavigator - 1]]
            return countNavigator - 1;
        }
        return index;
    }

    function getNavItems(): { path: string, label: string }[] {
        if (!countNavigator || countNavigator >= menu.length) {
            return menu;
        }
        return menu.filter((item, index) => index < countNavigator);
    }


    const currentCallback = useCallback(current, [props.countNavigator]);
    const [value, setValue] = useState<number>(current(props.location.pathname));
    useEffect(() => {

        setValue(currentCallback(props.location.pathname))
    }, [props.countNavigator, props.location.pathname, currentCallback])

    const handleChange = (event: any, tabValue: number) => {
        setValue(tabValue);
    }
//------------------
    const menuId = 'primary-search-account-menu';

    const renderTabs = (
        <Tabs indicatorColor={"primary"} onChange={handleChange} value={value}>
            {getNavItems().map(item =>
                <Tab key={item.path}
                     component={Link} to={item.path} label={item.label}>
                </Tab>)}
        </Tabs>
    )


    const userData: UserData = useSelector((state: ReducersType)=> state.userData);
    const cartCounter: number = useSelector((state: ReducersType)=>state.cartCount);

    let logStatusBtn =  ():string => {
        if (!!userData.user){
            return "LOGOUT"
        }
        return "LOGIN"
    }


    const renderSubMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={()=>{props.history.push(logStatusBtn())}}>{logStatusBtn()}</MenuItem>
            {/*<MenuItem onClick={handleMenuClose}>My account</MenuItem>*/}

        </Menu>

    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={()=>{props.history.push(PATH_CART)}}>
                <IconButton aria-label="show cart" color="inherit">
                    <Badge badgeContent={cartCounter} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <p>Cart</p>
            </MenuItem>
            <MenuItem onClick={()=>{props.history.push(logStatusBtn())}}>
                <IconButton

                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>{logStatusBtn()}</p>
            </MenuItem>
        </Menu>
    );



    return (
        <div className={classes.grow}>
            <AppBar position="static"  className={classes.colorPrimary}>

                <Toolbar className={classes.toolbar}>

                    {renderTabs}
                    <div className={classes.grow} />

                    <div className={classes.sectionDesktop}>
                        <IconButton onClick={()=>{props.history.push(PATH_CART)}} aria-label="show cart" color="inherit">
                            <Badge badgeContent={cartCounter} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>



                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>

            {renderMobileMenu}
            {renderSubMenu}
        </div>
    );
}

export default withRouter(Navbar);