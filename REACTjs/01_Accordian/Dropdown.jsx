import React from "react";
import { useState } from "react";
import './dropdown.css';

/*
We define the following state variables
1. answerStatus - This keeps track whether an current answer (means dropdown) is open or not. If yes then we cannot open another dropdown else we can.
2. displayName - if dropdown open, displayName = block else displayName = none as it will be the inline styling og mainAnswer
*/
const Dropdown = (props) => {
    const [answerStatus, setAnswerStatus] = useState(false);
    const [displayName, setDisplayName] = useState("none");
    const [arrow, setArrow] = useState("v");

    const drop = () => {
        if(answerStatus){
            setDisplayName("none");
            setAnswerStatus(false);
            setArrow("v");
        }else{
            setDisplayName("block");
            setAnswerStatus(true);
            setArrow("-");
        }
    };

    return (
        <div className="dropdown">
            <section className="mainSection">
            <span className="question">{props.question}</span>
            <button onClick={drop}><p>{arrow}</p></button>
        </section>
        <section className="mainAnswer" style={{display : displayName}}>
            {props.answer}
        </section>
        </div>
    );
};

export default Dropdown;