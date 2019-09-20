import React, { useState, useEffect } from 'react';
import { quickSortInPlace } from '../algorithms/index';

const App = () => {
  let arr = [];
  for (let i = 0; i < 50; i++) {
    arr.push(Math.round(Math.random()*50));
  } 
  const [algoData, setAlgoData] = useState([...arr]);
  const [nums, setNums] = useState([9,5,4,2,4,32,3]);
  const iterations = {};
  let count = 0;

  useEffect(() => {
    let toSort = algoData.slice();
    let sorted = quickSortInPlace(iterations, count, toSort);    
  });

  return (
    <div>
      <button onClick={() => {
        setAlgoData([...toSort]);
      }}></button>
      {algoData.map(line => {
        return <span> - {line}</span>
      })}
    </div>
  )
}

export default App;