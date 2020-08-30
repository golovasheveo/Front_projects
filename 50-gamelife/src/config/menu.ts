import React from "react";
import Dashboard from "../components/Dashboard";
import Game from "../components/Game";
import Settings from "../components/Settings";

export type MenuItem = {
    path: string;
    label: string;
    component?: React.FC;
}
// @ts-ignore
export const MENU: MenuItem[] = [
    {path: '/', label: 'Dashboard', component: Dashboard},
    {path: '/game', label: 'Game', component: Game},
    {path: '/settings', label: 'Settings', component: Settings}
]