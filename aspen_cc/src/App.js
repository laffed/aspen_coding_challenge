import React, { useState, useEffect } from 'react';
import './App.css';
import randomColor from 'randomcolor';
import Column from './components/Column';

function App() {
  const [firstColor, setFirstColor] = useState(randomColor());
  const [color, setColor] = useState(randomColor());
  const [id, setId] = useState(1);
  //cols -> array of objects
  const [cols, setCols] = useState([
    <Column key={`key:1`} color={firstColor} id={0} />
  ]);

  /*on render*/
  useEffect(() => {
  }, []);

  /*functions*/
  const handleAddCol = e => {
    e.preventDefault();
    setColor(randomColor());
    setId(prev => prev + 1);

    const colorChanger = async () => {
      setCols(prev => {
        return [...prev, <Column key={`key:${id}`} color={color} id={id} />]
      });
    }
    colorChanger();

  }


  /*render*/
  return (
    <div className="app-wrapper">
      <div className="header">
        Matt's CSS Heavy Code Test 🤘🏽
      </div>
      <div className="col-wrapper">
        {cols}
      </div>
      <button onClick={handleAddCol} className="add-col-btn" >Add Column</button>
    </div>
  );
}

export default App;
