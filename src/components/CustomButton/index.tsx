import React, {memo} from 'react';
import {ICustomButton} from "../../types";

const CustomButton = ({title, callBack, isActive} : ICustomButton) => {
    return (
        <button
            className={`text-zinc-400 border-b-4
        ${isActive ? 'border-amber-400' : 'active:scale-110 hover:text-zinc-500 border-transparent'}`}
            onClick={callBack}>{title}</button>
    )
}

export default memo(CustomButton);