'use client'
import React from 'react'
import { useState } from 'react'
import * as math from 'mathjs'
import './globals.css'
import Button from './Button'
import TopInput from './TopInput'
import OperationsWindow from './OperationsWindow'
import Result from './Result'

function App(props) {
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
      <TopInput inputNum={inputNum} handleInputChange={handleInputChange}/>
      <Button handleNumberClick={handleNumberClick} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} 
        handleMultiplyClick={handleMultiplyClick} handleDeleteClick={handleDeleteClick} handleEqualsClick={handleEqualsClick} handleDevideClick={handleDevideClick}
      />
      <OperationsWindow userWindow={userWindow} />
      <Result result={result}/>
    </div>
  )
}

export default App
