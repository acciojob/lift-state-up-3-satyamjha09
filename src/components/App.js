
import React, { useState } from "react";
import './../styles/App.css';
import ChildComponents1 from "./ChildComponents1";
import ChildComponents2 from "./ChildComponents2";

const App = () => {

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option)
  }
  

  return (
    <div className="parent">
        <h1> Parent Components </h1>

        <ChildComponents1 onSelete={handleOptionChange} />
        <ChildComponents2 onSelete={handleOptionChange} />

        <div>
          <p> Seleted Option: {selectedOption} </p>
        </div>
    </div>
  )
}

export default App
