import React, { useState } from 'react';
import quickSort  from '../algorithms/index';

const App = () => {
  const [algoData, setAlgoData] = useState([9,5,4,2,4,32,3]);
  const [nums, setNums] = useState([9,5,4,2,4,32,3]);
  const intermediateObj = {};
  const count = [0];

  return (
    <div>
      <button onClick={() => setAlgoData(quickSort(nums, intermediateObj, count))  }></button>
      {algoData.map(line => {
        return <span> - {line}</span>
      })}
    </div>
  )
}

export default App;