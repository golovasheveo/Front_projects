import React,{useState} from 'react';

function getRandomNumber(min, max) {
    return min + Math.random() * (max - min);
}

export const RandomPoint = (props) => {
    const [point,setPoint] = useState({x:0,y:0});
    const handleButton = () => {
        point.x = getRandomNumber(props.min || 0, props.max || 1);
        point.y = getRandomNumber(props.min || 0, props.max || 1);
        setPoint({...point});

    }
    return <React.Fragment>
        <button onClick={handleButton}>Create Point</button>
        <br/>
        <label>x: {point.x}, y: {point.y}</label>
    </React.Fragment>
}