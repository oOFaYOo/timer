import React, {memo, useEffect, useRef, useState} from 'react';
import './index.css';
import {ITimeContainer} from "../../types";

const TimeContainer = ({time, intervalId, delay}: ITimeContainer) => {

    const [update, setUpdate] = useState<boolean>(false);
    const div = useRef<HTMLDivElement | null>(null);

    if (update && intervalId) {
        div.current?.classList.remove('appear');
        div.current?.classList.add('disappear')
    }

    useEffect(() => {
        let timerId: NodeJS.Timer;
        if (intervalId !== undefined) {
            timerId = setTimeout(() => {
                if (time === '00') {
                    div.current?.classList.add('disappear');
                }
                setUpdate(true)
            }, delay);
        } else {
            return () => {
                clearTimeout(timerId);
                setUpdate(false)
                if (time !== '00') {
                    div.current?.classList.remove('disappear');
                    div.current?.classList.remove('appear');
                }
            }
        }
    }, [time, intervalId, delay])

    return (
        <div ref={div} className={`mainTimeContainer ${time === '00' || !intervalId ? '' : 'appear'}`}>
            {time}
        </div>
    )

}

export default memo(TimeContainer);