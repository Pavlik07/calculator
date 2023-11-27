import React from 'react'
import * as math from 'mathjs'

function Button(props) {
    // function handleNumberClick (num) {
    //     setInputNum(inputNum.concat(num));
    //     setUserWindow(userWindow.concat(num));
    // }
    // function handlePlusClick () {
    //     setInputNum('');
    //     if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
    //       return 0
    //     }
    //     else
    //     setResult(math.evaluate(userWindow));
    //     setUserWindow(userWindow.concat('+'));
    // }
    // function handleMinusClick () {
    //     setInputNum('')
    //     if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
    //       return 0
    //     }
    //     else
    //     setResult(math.evaluate(userWindow))
    //     setUserWindow(userWindow.concat('-'));
    // }
    // function handleEqualsClick () {
    //     setInputNum('')
    //     if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
    //       return 0
    //     }
    //     else
    //     setResult(math.evaluate(userWindow))
    // }
    // function handleMultiplyClick () {
    //     setInputNum('');
    //     if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
    //       return 0
    //     }
    //     else
    //     setResult(math.evaluate(userWindow));
    //     setUserWindow(`(${userWindow})*`);
    // }
    // function handleDevideClick () {
    //     setInputNum('');
    //     if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
    //       return 0
    //     }
    //     else
    //     setResult(math.evaluate(userWindow));
    //     setUserWindow(`(${userWindow})/`);
    // }
    // function handleDeleteClick () {
    //     setInputNum('');
    //     setResult('');
    //     setUserWindow('');
    // }
    return (
        <div className='allButtons'>
            <button onClick={() => props.handleNumberClick(1)}>1</button>
            <button onClick={() => props.handleNumberClick(2)}>2</button>
            <button onClick={() => props.handleNumberClick(3)}>3</button>
            <button onClick={props.handlePlusClick}>+</button>
            <button onClick={() => props.handleNumberClick(4)}>4</button>
            <button onClick={() => props.handleNumberClick(5)}>5</button>
            <button onClick={() => props.handleNumberClick(6)}>6</button>
            <button onClick={props.handleMinusClick}>-</button>
            <button onClick={() => props.handleNumberClick(7)}>7</button>
            <button onClick={() => props.handleNumberClick(8)}>8</button>
            <button onClick={() => props.handleNumberClick(9)}>9</button>
            <button onClick={props.handleMultiplyClick}>*</button>
            <button onClick={props.handleDeleteClick}>AC</button>
            <button onClick={() => props.handleNumberClick(0)}>0</button>
            <button onClick={props.handleEqualsClick}>=</button>
            <button onClick={props.handleDevideClick}>/</button>
        </div>
    )
}

export default Button