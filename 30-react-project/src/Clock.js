import React, {useEffect, useState} from 'react';
export const Clock = (props) => {

  const [date, setDate] = useState(new Date());


    function tick() {
        console.log("kuku")
        setDate(new Date())
    }
    let intervalId;
    useEffect(() => {
        intervalId = setInterval(tick, props.interval || 1000);
        return () => clearInterval(intervalId);
    },[])
    return <label>{date.toLocaleTimeString()}</label>
}

