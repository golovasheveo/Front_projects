import React, { useEffect, useState } from 'react';
import { getRandomMatrix } from "./gamelife/utils/random";
import { getNumbers } from "./gamelife/service/TransformNumbers";
import Matrix from './gamelife/components/Matrix';
import settings from "./gamelife/config/config";




const GameLife: React.FC = () => {
    const [numbers, setNumbers] =  useState(getRandomMatrix(settings.N_COLUMNS, settings.N_ROWS, 0, 1));
    useEffect(
        () => {
            const intervalId = setInterval(()=> setNumbers(()=>getNumbers(numbers)), settings.INTERVAL) //didMount
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