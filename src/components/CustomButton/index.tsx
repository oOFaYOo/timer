import React, {memo} from 'react';
import {ICustomButton} from "../../types";
import './index.css';

const CustomButton = ({title, callBack, isActive} : ICustomButton) => {
    return (
        <button
            className={`customButton ${isActive ? 'customButton_active' : 'customButton_notActive'}`}
            onClick={callBack}>
            {title}
        </button>
    )
}

export default memo(CustomButton);