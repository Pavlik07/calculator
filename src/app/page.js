'use client'
import React from 'react'
import { useState } from 'react'
import * as math from 'mathjs'
import './globals.css'

function App() {
  const [inputNum, setInputNum] = useState('');
  const [result, setResult] = useState('');
  const [userWindow, setUserWindow] = useState('');

  let last = userWindow[userWindow.length-1];

  function handleInputChange (event) {
    setInputNum(event.target.value);
    setUserWindow(userWindow.concat(event.target.value[event.target.value.length-1]));
  }
  function handleNumberClick (num) {
    setInputNum(inputNum.concat(num));
    setUserWindow(userWindow.concat(num));
  }

  function handlePlusClick () {
    setInputNum('');
    if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
      return 0
    }
    else
    setResult(math.evaluate(userWindow));
    setUserWindow(userWindow.concat('+'));
  }
  function handleMinusClick () {
    setInputNum('')
    if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
      return 0
    }
    else
    setResult(math.evaluate(userWindow))
    setUserWindow(userWindow.concat('-'));
  }
  function handleEqualsClick () {
    setInputNum('')
    if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
      return 0
    }
    else
    setResult(math.evaluate(userWindow))
  }
  function handleMultiplyClick () {
    setInputNum('');
    if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
      return 0
    }
    else
    setResult(math.evaluate(userWindow));
    setUserWindow(`(${userWindow})*`);
  }
  function handleDevideClick () {
    setInputNum('');
    if(last === '+' || last === '-' || last === '*' || last === '/' || last === '='  || last === ')') {
      return 0
    }
    else
    setResult(math.evaluate(userWindow));
    setUserWindow(`(${userWindow})/`);
  }
  function handleDeleteClick () {
    setInputNum('');
    setResult('');
    setUserWindow('');
  }

  return (
    <div className='theApp'>
      <div className='topInput'><input className='insideInput' type='number' value={inputNum} onChange={handleInputChange}></input></div>
      <div className='allButtons'>
        <button onClick={() => handleNumberClick(1)}>1</button>
        <button onClick={() => handleNumberClick(2)}>2</button>
        <button onClick={() => handleNumberClick(3)}>3</button>
        <button onClick={handlePlusClick}>+</button>
        <button onClick={() => handleNumberClick(4)}>4</button>
        <button onClick={() => handleNumberClick(5)}>5</button>
        <button onClick={() => handleNumberClick(6)}>6</button>
        <button onClick={handleMinusClick}>-</button>
        <button onClick={() => handleNumberClick(7)}>7</button>
        <button onClick={() => handleNumberClick(8)}>8</button>
        <button onClick={() => handleNumberClick(9)}>9</button>
        <button onClick={handleMultiplyClick}>*</button>
        <button onClick={handleDeleteClick}>AC</button>
        <button onClick={() => handleNumberClick(0)}>0</button>
        <button onClick={handleEqualsClick}>=</button>
        <button onClick={handleDevideClick}>/</button>
      </div>
      <div className='userWindow'>{`Operations: ${userWindow}`}</div>
      <p className='result'>{`Result: ${result}`}</p>
    </div>
  )
}

export default App
