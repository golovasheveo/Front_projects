import React, { useEffect, useState } from 'react';
import { getRandomMatrix } from "./gamelife/utils/random";
import { INTERVAL, N_COLUMNS, N_ROWS,  } from './gamelife/config/config';
import { getNumbers } from "./gamelife/service/TransformNumbers";
import Matrix from './gamelife/components/Matrix';




const GameLife: React.FC = () => {
    const [numbers, setNumbers] =  useState(getRandomMatrix(N_COLUMNS, N_ROWS, 0, 1));
    useEffect(
        () => {
            const intervalId = setInterval(()=> setNumbers(()=>getNumbers(numbers)), INTERVAL) //didMount
            return () => {                                 //didUnmount
                console.log('UNMOUNTED')
            };
        },
        //willUpdate
    );
    return <React.Fragment>
        <Matrix numbers={numbers}/>
    </React.Fragment>
};
export default GameLife;