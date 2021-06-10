import React, { useEffect, useState } from 'react';

export const Clock = () => {
    const [time, setTime] = useState(0)
    const [intervalID, setIntervalID] = useState()

    const today = new Date()
    
    useEffect(()=> {
        setIntervalID(setInterval(() => setTime(time => time + 1),1000))
        return () => clearInterval(intervalID)
    },[time, intervalID])
   
    return(
        <>
            <div>CLOCK</div>
            <div>{today.getHours() + ":" + today.getMinutes() + ":" + (today.getSeconds() < 10 ? ('0' + today.getSeconds()) : today.getSeconds())}</div>
        </>
    )
}