import React from "react";
import {N_COLUMNS} from "../config/config";

function getSize() {
    return Math.min(window.innerHeight, window.innerWidth) / N_COLUMNS - 2;
}

function getStyle(number) {
    return {
        "backgroundColor": number === 1 ? "black" : "white",
        "border": "solid 1px gray", "width": getSize(), "height": getSize()
    };
}

export default function Row(props) { // [0,1,1,0]
    function getGrids() {
        return props.row.map(number => <div style={getStyle(number)}/>)
    };

    return (<div style={{"display": "flex", "flexDirection": "row"}}>
        {getGrids()}
    </div>)
}