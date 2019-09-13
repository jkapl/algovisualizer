import React from 'react';
import Lines from 'Lines';

const App = () => {
  const [algoData, setAlgoData] = useState([]);


  return (
    <div>
      {algoData.map(line => {
        <span>line</span>
      })}
    </div>
  )
}

export default App;