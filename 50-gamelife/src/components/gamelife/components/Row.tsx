import React from "react";
import {N_COLUMNS} from "../config/config";

function getSize() {
    return Math.min(window.innerHeight, window.innerWidth) / N_COLUMNS - 2;
}
function getStyle(number: number) {
    return {
        "backgroundColor": number === 1 ? "black" : "white",
        "border": "solid 1px gray", "width": getSize(), "height": getSize()
    };
}
const Row = (props: {row: number[]} ) => {
    function getGrids() {
        return props.row.map(number => <div style={getStyle(number)}/>)
    };
    return <React.Fragment>
        <div style={{"display": "flex", "flexDirection": "row"}}>
    {getGrids()}
    </div>
    </React.Fragment>
};
export default Row;