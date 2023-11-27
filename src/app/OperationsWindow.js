import React from 'react'
import './globals.css'

function OperationsWindow(props) {
  return (
    <div className='userWindow'>{`Operations: ${props.userWindow}`}</div>
  )
}

export default OperationsWindow