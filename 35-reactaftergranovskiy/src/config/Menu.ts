import {Dashboard} from "../components/Dashboard";
import {Clock} from "../components/Clock";
import {RandomEmployee} from "../components/RandomEmployee";

export type MenuItem = {
    path: string;
    label: string;
    component?: React.FC;
}
export const MENU: MenuItem[] = [
    {path: '/dashboard', label: 'Dashboard', component: Dashboard},
    {path: '/clock', label: 'Clock', component: Clock},
    {path: '/random/employee', label: 'Creating random Employee', component: RandomEmployee}
]