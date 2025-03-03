import React from 'react'
import './../styles/Child.css'

const ChildComponents1 = ({ onSelete }) => {

  return (
    <div className="child1">
        ChildComponents1
        <button onClick={() => onSelete("Option 1")}> Option 1 </button>
    </div>
  )
}

export default ChildComponents1