import Home from "../components/Home";
import Add from "../components/Add";
import Show from "../components/Show";

export const PATH_HOME = "/";
export const PATH_ADD = "/add";
export const PATH_SHOW = "/show";

// type Props = {
//     path: string, label: string, comp: React.FC
// }
//
// export const coffeeMenu: Props[] = [
//     {path: PATH_HOME, label: "Home", comp :Home},
//     {path: PATH_ADD, label: "Add", comp : Add},
//     {path: PATH_SHOW, label: "Show", comp : Show},
// ]

type Props = {
    path: string, label: string
}

export const coffeeMenu: Props[] = [
    {path: PATH_HOME, label: "Home"},
    {path: PATH_ADD, label: "Add"},
    {path: PATH_SHOW, label: "Show"},
]