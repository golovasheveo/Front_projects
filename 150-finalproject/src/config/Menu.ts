export const PATH_HOME = '/';
export const  PATH_EMPLOYEES= '/employees';
export const PATH_ADD_EMPLOYEE = '/employee';
export const PATH_GENERATION = '/employees/generation';
export const PATH_SEARCH = '/employees/search';
export const  PATH_DEPARTMENT_STATISTICS= '/department/statistics';
export const  PATH_SALARY_STATISTICS= '/salary/statistics';
export const  PATH_LOGIN= '/login';
export const  PATH_LOGOUT= '/logout';
export const employeesMenu: {path:string, label:string, admin?: boolean}[] = [
    {path: PATH_HOME,label: 'Home'},
    {path: PATH_EMPLOYEES,label: 'Employees'},
    {path: PATH_ADD_EMPLOYEE,label: 'Add new Employee', admin: true},
    {path: PATH_GENERATION,label: 'Generation of Employees', admin: true},
    {path: PATH_SEARCH,label: 'Employees Search'},
    {path: PATH_DEPARTMENT_STATISTICS,label: 'Department Statistics'},
    {path: PATH_SALARY_STATISTICS,label: 'Salary Statistics'},
    {path: PATH_LOGOUT,label: 'Logout'},

]
