import React, { useState, useEffect } from 'react';
import './App.css';
import randomColor from 'randomcolor';

function App() {
  const [color, setColor] = useState("#2e35ea")

  /*on render*/
  useEffect(() => {

  });

  /*functions*/
  const handleAddCol = e => {
    e.preventDefault();
    setColor(randomColor());
  }


  /*render*/
  return (
    <div className="app-wrapper">
      <div className="col-wrapper">
        {}
      </div>
      <button onClick={handleAddCol} className="add-col-btn" >Add Column</button>
    </div>
  );
}

export default App;
