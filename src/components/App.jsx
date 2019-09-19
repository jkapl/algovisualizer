import React, { useState } from 'react';
import { quickSortInPlace } from '../algorithms/index';

const App = () => {
  const [algoData, setAlgoData] = useState([9,5,4,2,4,32,3]);
  const [nums, setNums] = useState([9,5,4,2,4,32,3]);
  const iterations = {};
  let count = 0;
  quickSortInPlace(algoData);

  return (
    <div>
      <button onClick={() => {
        // quickSortInPlace(numArray)
        console.log(algoData)
      }}></button>
      {algoData.map(line => {
        return <span> - {line}</span>
      })}
    </div>
  )
}

export default App;