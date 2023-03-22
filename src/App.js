import './App.css';
import React, { useEffect, useState } from 'react'
import { WebR } from '@r-wasm/webr';
const webR = new WebR();

async function getRandomNumbers() {
  await webR.init();
  const result = await webR.evalR('rnorm(20,10,10)');
  try {
    return await result.toArray();
  } finally {
    webR.destroy(result);
  }
}

function App() {
  const [ values, updateResult ] = useState(['Loading webR...']);
  useEffect(() => {
    (async ()=>{
      const values = await getRandomNumbers();
      updateResult(values);
    })();
  }, []);
  return (
    <div className="App">
      <p>Result of running R code:</p>
      {values.map((n, idx) => <p key={idx}>{n}</p>)}
    </div>
  );
}

export default App;
