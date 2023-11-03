import React, {memo} from 'react';
import {ICustomButton} from "../../types";
import {useSelector} from "react-redux";
import {RootState} from "../../store";

const CustomButton = ({title, callBack, isActive} : ICustomButton) => {
    const {theme} = useSelector((state: RootState) => state.timer);

    return (
        <button
            className={`${isActive ? `border-amber-400 ${theme === 'light' ? 'text-zinc-500' : 'text-zinc-400'}` : `active:scale-110 ${theme === 'light' ? 'hover:text-zinc-500' : 'hover:text-zinc-400'} border-transparent`} 
            ${theme === 'light' ? 'text-zinc-400' : 'text-zinc-600'} border-b-4`}
            onClick={callBack}>
            {title}
        </button>
    )
}

export default memo(CustomButton);