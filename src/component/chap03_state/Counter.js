import React, { useState } from 'react'

const Counter = () => {

    const [number, setNumber] = useState(0);
    const [nick, setNick] = useState('익명');

    const increse = () => setNumber(number + 1);
    const decrese = () => setNumber(number - 1);

    const changeNick = () => setNick('김철수');

  return (

    <>
        <h1>닉네임: {nick}</h1>
        <h2>{number}</h2>
        <button onClick={increse}>+1</button>
        <button onClick={decrese}>-1</button>
        <button onClick={changeNick}>닉네임 변경</button>
    </>
    
    )
}

export default Counter