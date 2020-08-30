import React from 'react';
import Dashboard from "./Dashboard";
import Toolbar from "./Toolbar";
import {ButtonGroup} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GameLife from "./GameLife";
const Game = ()=> {
    return <React.Fragment>
        <Toolbar />
        {/*<ButtonGroup disableElevation variant="contained" color="primary">*/}
        {/*    <Button size={"small"}>Start Game</Button>*/}
        {/*    <Button>Stop</Button>*/}
        {/*</ButtonGroup>*/}
        <GameLife/>
    </React.Fragment>
}
export default Game;