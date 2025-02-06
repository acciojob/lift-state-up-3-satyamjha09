import React from 'react'

const ChildComponents2 = ({ onSelete }) => {
  return (
    <div className="child2">
        ChildComponents2
        <button onClick={() => onSelete("Option 2")}> Option 2 </button>
    </div>
  )
}

export default ChildComponents2