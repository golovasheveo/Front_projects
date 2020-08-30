import React from "react";
import Row from "./Row";

export default function Matrix(props: { numbers: number[][]; }) {
    function getRows() {
        return props.numbers.map(r => <Row row={r}/>)
    }

    return <div style={{
        "display": "flex",
        "flexDirection": "column"
    }}>
        {getRows()}
    </div>
}