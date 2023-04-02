import React from "react";
import '../CSS/TodoIcon.css'
import {ReactComponent as CheckSVG} from '../logo.svg'
import {AiFillCloseCircle} from 'react-icons/ai'

const iconTypes={
    "check": color => (
        <CheckSVG className="Icon-svg Icon-svg--check" fill={color}/>
    ),
    "delete": color => (
        <AiFillCloseCircle className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
};

function TodoIcon({type, color = 'gray', onClick}){

    return(
        <span
            className={`IconContainer Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type]}
        </span>
    );
}

export {TodoIcon};