import React, {memo} from 'react';
import {ICustomButton} from "../../types";

const CustomButton = ({title, callBack, isActive} : ICustomButton) => {
    return (
        <button
            className={`${isActive ? 'border-amber-400 text-zinc-500' : 'active:scale-110 hover:text-zinc-500 border-transparent'} 
            text-zinc-400 border-b-4`}
            onClick={callBack}>
            {title}
        </button>
    )
}

export default memo(CustomButton);