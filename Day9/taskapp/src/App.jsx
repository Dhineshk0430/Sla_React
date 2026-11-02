

import { useState } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  const increment =()=>{
    setCount(count+1)
  }

  const decrement = ()=>{
    setCount(count-1)
  }

  const reset = ()=>{
        setCount(0)
  }

  return (
    <>
      <div>
        <h1>Counter</h1>
      </div>
      <div>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decremenmt</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default App
