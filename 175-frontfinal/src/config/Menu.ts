export const PATH_HOME = '/';


export const PATH_MOBILE = '/mobile';
export const PATH_STATISTICS = '/statistics';
export const PATH_SETUP = '/setup';
export const PATH_LOGIN = '/login';
export const  PATH_LOGOUT= '/logout';
export const  PATH_ITEM= '/item';
export const  PATH_CART= '/cart';

export const shopMenu: {path:string, label:string, admin?: boolean, user?: boolean, logged?: boolean}[] = [
    {path: PATH_MOBILE,label: 'Buy online'},
    {path: PATH_STATISTICS,label: 'Orders', admin: true},
    {path: PATH_SETUP,label: 'Setup', admin: true},
    {path: PATH_LOGIN,label: 'Login', logged: true},
    {path: PATH_LOGOUT,label: 'Logout', user: true},

    // {path: PATH_ITEM,label: 'Item', user: true},
]