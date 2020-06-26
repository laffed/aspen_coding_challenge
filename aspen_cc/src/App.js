import React, { useState, useEffect } from 'react';
import './App.css';
import randomColor from 'randomcolor';
import Column from './components/Column';

function App() {
  const [firstColor, setFirstColor] = useState(randomColor());
  const [color, setColor] = useState(randomColor());
  const [id, setId] = useState(1);
  const [style, setStyle] = useState({
    fontWeight: "400",
    fontSize: "20px",
    height: "120px",
    lineHeight: "100px"
  });

  const handleResize = e => {
    e.preventDefault();
    e.target.name.style = {
      ...e.target.name.style,

    }
  }
  const [cols, setCols] = useState([
    <Column name={'0'} key={`key:0`} id={0} color={firstColor} style={style} resize={handleResize} />
  ]);

  /*on render*/
  useEffect(() => {
  }, []);

  /*functions*/
  const handleAddCol = async e => {
    e.preventDefault();
    setColor(randomColor());
    setId(prev => prev + 1);
    const colorChanger = async () => {
      setCols(prev => {
        return [...prev, <Column name={`${id}`} key={`key:${id}`} id={id} color={color} style={style} resize={handleResize} />]
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
