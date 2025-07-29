import React from 'react';
import { useState } from 'react';
import './box.css'

function Box() {
    const [backgroundColor, setBackgroundColor] = useState('rgb(255, 255, 255)');
    const white =  'white';
    
    const changeBackground = () => {
        // generate a random color
        const r = Math.floor((Math.random() * 256));
        const g = Math.floor((Math.random() * 256));
        const b = Math.floor((Math.random() * 256));
        const newColor = `rgb(${r}, ${g}, ${b})`;
        setBackgroundColor(newColor);
        document.body.style.backgroundColor = newColor; 
    }

    return (
    <div className='mainBox' style={{backgroundColor:white}}>
        <h3>{backgroundColor}</h3>
        <button onClick={changeBackground}><p>CHANGE COLOR</p></button>
    </div>
  );
};

export default Box;
