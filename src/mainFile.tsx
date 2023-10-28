import React, {memo, useCallback, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "./store";
import {setTheme} from "./store/slice";
import CustomButton from "./components/CustomButton";
import TimeContainer from "./components/TimeContainer";

function formatTime(time:number):string{
    return `${time > 9 ? time : '0'+ time}`
}

const MainFile = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector((state: RootState) => state.timer);

    const [totalSeconds, setTotalSeconds] = useState<number>(0);
    const [intervalId, setIntervalId] = useState<NodeJS.Timer | undefined>();

    const start = useCallback(()=>{
        if(intervalId === undefined) {
            let counter = totalSeconds;
            let interval = setInterval(() => {
                counter = counter + 1;
                setTotalSeconds(counter)
            }, 1000);
            setIntervalId(interval);
        }
    }, [intervalId, totalSeconds]);

    const stop = useCallback(() => {
            clearInterval(intervalId);
            setIntervalId(undefined)
        }, [intervalId]);

    const reset = useCallback(() => {
        clearInterval(intervalId);
        setIntervalId(undefined);
        setTotalSeconds(0);
    }, [intervalId]);

    const hours = useMemo(()=>{
        return Math.floor(totalSeconds / 3600);
    },[totalSeconds]);

    const minutes = useMemo(()=>{
        return Math.floor((totalSeconds % 3600)/60);
    },[totalSeconds]);

    const seconds = useMemo(()=>{
        return (totalSeconds % 3600) % 60;
    },[totalSeconds]);

    return (
        <div className={`relative w-full h-full flex justify-center items-center flex-col font-sans 
        ${theme === 'light' ? 'bg-zinc-200 text-zinc-600' : 'bg-zinc-900 text-zinc-400'}`}>
            <div className={'relative w-[30%] flex justify-evenly items-center'}>
                <button onClick={()=>dispatch(setTheme('light'))}>light</button>
                <button onClick={()=>dispatch(setTheme('dark'))}>dark</button>
            </div>
            <div className={'text-amber-400 text-8xl h-[100px] overflow-hidden min-w-[400px]' +
                ' relative w-[30%] flex justify-between items-center'}>
                <TimeContainer key={`h${hours}`} time={formatTime(hours)} intervalId={intervalId} delay={3599800} />
                <span className={'text-zinc-400 pb-4'}>:</span>
                <TimeContainer key={`m${minutes}`} time={formatTime(minutes)} intervalId={intervalId} delay={59800} />
                <span className={'text-zinc-400 pb-4'}>:</span>
                <TimeContainer key={`s${seconds}`} time={formatTime(seconds)} intervalId={intervalId} delay={800}/>
            </div>
            <div className={'relative w-[30%] text-6xl flex min-w-[400px] justify-between items-center'}>
                <CustomButton callBack={start} title={'start'} isActive={intervalId !== undefined} />
                <CustomButton callBack={stop} title={'stop'} />
                <CustomButton callBack={reset} title={'reset'} />
            </div>
        </div>
    )
}

export default memo(MainFile);