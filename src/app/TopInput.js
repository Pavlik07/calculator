import React from 'react'

function TopInput(props) {
  return (
    <div className='topInput'><input className='insideInput' type='number' value={props.inputNum} onChange={props.handleInputChange}>
        </input>
    </div>
  )
}

export default TopInput