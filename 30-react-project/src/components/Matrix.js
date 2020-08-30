import React from "react";
import Row from "./Row";

export default function Matrix(props) {
    function getRows() {
        return props.numbers.map(r => <Row row={r}/>)

        //Array[[0,1,1,0][1,1,1,0][0,0,1,1]]
        //     [0,1,1,0] == r
        //     <Row/> calling for Raw compomnent with row= ([0,1,1,0])

    }

    return <div style={{
        "display": "flex",
        "flexDirection": "column"
    }}>
        {getRows()}
    </div>
}