import React, { useState } from 'react';
import quickSort  from '../algorithms/index';

const App = () => {
  const [algoData, setAlgoData] = useState([9,5,4,2,4,32,3]);
  const [nums, setNums] = useState([9,5,4,2,4,32,3]);

  return (
    <div>
      <button onClick={() => { setAlgoData(quickSort(nums)) } }></button>
      {algoData.map(line => {
        return <span> - {line}</span>
      })}
    </div>
  )
}

export default App;