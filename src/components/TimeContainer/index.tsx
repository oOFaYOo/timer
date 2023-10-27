import React, {useEffect, useRef, useState} from 'react'
import {ITimeContainer} from "../../types";

const TimeContainer = ({time, intervalId, delay}:ITimeContainer) => {

    const [update, setUpdate] = useState<boolean>(false);

    const custDiv = useRef<HTMLDivElement | null>(null);

    if(update && intervalId){
        custDiv.current?.classList.remove('appear');
        custDiv.current?.classList.add('disappear')
    }

    useEffect(()=>{
        let timerID:NodeJS.Timer;
        if(intervalId !== undefined) {
            if(time !== '00') {
                timerID = setTimeout(() => {
                    setUpdate(true)
                }, delay)} else if (time === '00') {
                    timerID = setTimeout(() => {
                        custDiv.current?.classList.add('disappear');
                        setUpdate(true)
                    }, delay);
                }
            }else return ()=>{
            clearTimeout(timerID);
            setUpdate(false)
            if(time !== '00') {
                custDiv.current?.classList.remove('disappear');
                custDiv.current?.classList.remove('appear');
            }
        }
    }, [time, intervalId, delay])

    return (
            <div ref={custDiv} className={`${time === '00' || !intervalId ? '' : 'appear'}`}>{time}</div>
        )

}

export default TimeContainer;