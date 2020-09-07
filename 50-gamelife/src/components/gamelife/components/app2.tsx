import React, { useState } from 'react';


type test = {
    in1: number,
    in2: number
}

const rowObject : test = {
    in1: 10,
    in2: 10
}

const App2 = () => {


    const [object, setObject] = useState(rowObject);


    function onclickButton() {

        rowObject.in1++;

        setObject({...rowObject})

        console.log("a number = ",object.in1)
        console.log("b number  =", object.in2)
        console.log("a objTest = ",rowObject.in1)
        console.log("b objTest  =", rowObject.in2)
    }

    return <React.Fragment>

        <div>"Let number A"{object.in1}</div>
        <div>"Let number B"{object.in2}</div>
        <div>"Let object A"{rowObject.in1}</div>
        <div>"Let object B"{rowObject.in2}</div>

        <button onClick={onclickButton}>generate</button>
    </React.Fragment>
};

export default App2;